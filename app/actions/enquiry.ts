"use server";

import { z } from "zod";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { COMPANY } from "@/lib/company";

// Simple in-memory rate limiting map: IP or identifier -> timestamp array
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(identifier: string, limit = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(identifier) || [];
  const recent = timestamps.filter((t) => now - t < windowMs);

  if (recent.length >= limit) {
    return false; // Rate limit exceeded
  }

  recent.push(now);
  rateLimitMap.set(identifier, recent);
  return true;
}

const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().min(7, "Please provide a valid phone number").max(25),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  interest: z.string().min(1, "Please specify your interest").default("General Enquiry"),
  project: z.string().optional().nullable(),
  message: z.string().min(5, "Please enter your message").max(2000),
  source_page: z.string().default("/"),
  // Honeypot field for bot spam prevention: must be empty
  website_hp: z.string().max(0, "Bot submission rejected").optional().or(z.literal("")),
});

export type EnquiryActionState = {
  success: boolean;
  message: string;
  whatsappUrl?: string;
  errors?: Record<string, string[]>;
};

export async function submitEnquiry(
  prevState: EnquiryActionState,
  formData: FormData
): Promise<EnquiryActionState> {
  try {
    const rawData = {
      name: formData.get("name")?.toString().trim() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      interest: formData.get("interest")?.toString().trim() || "General Enquiry",
      project: formData.get("project")?.toString().trim() || null,
      message: formData.get("message")?.toString().trim() || "",
      source_page: formData.get("source_page")?.toString().trim() || "/",
      website_hp: formData.get("website_hp")?.toString() || "",
    };

    // 1. Honeypot check
    if (rawData.website_hp && rawData.website_hp.length > 0) {
      console.warn("[Spam Blocked] Honeypot triggered in enquiry form");
      return {
        success: false,
        message: "Submission failed. Please try again.",
      };
    }

    // 2. Validate with Zod
    const validated = enquirySchema.safeParse(rawData);
    if (!validated.success) {
      return {
        success: false,
        message: "Please correct the errors in the form.",
        errors: validated.error.flatten().fieldErrors,
      };
    }

    // 3. Rate limiting by phone or IP
    const rateLimitKey = `enquiry_${validated.data.phone.slice(-6)}`;
    if (!checkRateLimit(rateLimitKey, 4, 60000)) {
      return {
        success: false,
        message: "Too many requests. Please wait a minute before submitting again.",
      };
    }

    // 4. Save to Supabase (if configured)
    const supabase = createServerSupabaseClient();
    if (supabase) {
      const { error: dbError } = await supabase.from("enquiries").insert({
        name: validated.data.name,
        phone: validated.data.phone,
        email: validated.data.email || null,
        interest: validated.data.interest,
        project: validated.data.project,
        message: validated.data.message,
        source_page: validated.data.source_page,
      });

      if (dbError) {
        console.error("[Supabase Error] inserting enquiry:", dbError.message);
        // We will still allow the enquiry to proceed to WhatsApp fallback
      }
    } else {
      console.log(
        "[Supabase Info] Keys not set; running in preview mode. Form payload:",
        validated.data
      );
    }

    // 5. Build WhatsApp-ready text and URL
    const waText = [
      `*New Enquiry from Website (${COMPANY.name})*`,
      `• *Name:* ${validated.data.name}`,
      `• *Phone:* ${validated.data.phone}`,
      validated.data.email ? `• *Email:* ${validated.data.email}` : "",
      `• *Interested In:* ${validated.data.interest}`,
      validated.data.project ? `• *Project:* ${validated.data.project}` : "",
      `• *Page:* ${validated.data.source_page}`,
      `• *Message:* ${validated.data.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
      waText
    )}`;

    // 6. Hook placeholder for email notification to info@ind-ogulf.com
    console.log(
      `[Email Hook Placeholder] Notification dispatched to ${COMPANY.email} for enquiry from ${validated.data.name} (${validated.data.phone})`
    );

    return {
      success: true,
      message:
        "Thank you! Your enquiry has been registered. Our property advisory team will connect with you shortly.",
      whatsappUrl,
    };
  } catch (err: unknown) {
    console.error("[Enquiry Action Error]:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please contact us directly via WhatsApp or Phone.",
    };
  }
}
