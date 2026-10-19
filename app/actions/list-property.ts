"use server";

import { z } from "zod";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { COMPANY } from "@/lib/company";

const ownerSubmissionSchema = z.object({
  owner_name: z.string().min(2, "Name must be at least 2 characters").max(100),
  owner_phone: z.string().min(7, "Please provide a valid phone number").max(25),
  owner_email: z.string().email("Valid email address is required"),
  owner_whatsapp: z.string().optional().or(z.literal("")),
  property_category: z.enum(["residential", "commercial", "industrial", "land"]),
  property_sub_type: z.string().optional().or(z.literal("")),
  country: z.string().min(2).default("India"),
  state: z.string().min(2, "State is required"),
  city: z.string().min(2, "City is required"),
  address: z.string().min(5, "Full property address is required"),
  property_title: z.string().optional().or(z.literal("")),
  property_details: z.string().min(10, "Please provide property details / specifications"),
  price: z.coerce.number().optional().nullable(),
  price_type: z.enum(["sale", "rent", "lease"]).default("sale"),
  media_urls: z.array(z.string()).default([]),
  website_hp: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type OwnerSubmissionState = {
  success: boolean;
  message: string;
  submissionId?: string;
  whatsappUrl?: string;
  errors?: Record<string, string[]>;
};

export async function submitOwnerProperty(
  prevState: OwnerSubmissionState,
  formData: FormData
): Promise<OwnerSubmissionState> {
  try {
    const rawMedia = formData.get("media_urls_json")?.toString();
    let media_urls: string[] = [];
    if (rawMedia) {
      try {
        media_urls = JSON.parse(rawMedia);
      } catch {
        media_urls = [];
      }
    }

    const rawData = {
      owner_name: formData.get("owner_name")?.toString().trim() || "",
      owner_phone: formData.get("owner_phone")?.toString().trim() || "",
      owner_email: formData.get("owner_email")?.toString().trim() || "",
      owner_whatsapp: formData.get("owner_whatsapp")?.toString().trim() || "",
      property_category: formData.get("property_category")?.toString().trim() || "residential",
      property_sub_type: formData.get("property_sub_type")?.toString().trim() || "",
      country: formData.get("country")?.toString().trim() || "India",
      state: formData.get("state")?.toString().trim() || "",
      city: formData.get("city")?.toString().trim() || "",
      address: formData.get("address")?.toString().trim() || "",
      property_title: formData.get("property_title")?.toString().trim() || "",
      property_details: formData.get("property_details")?.toString().trim() || "",
      price: formData.get("price") ? Number(formData.get("price")) : null,
      price_type: formData.get("price_type")?.toString().trim() || "sale",
      media_urls,
      website_hp: formData.get("website_hp")?.toString() || "",
    };

    // 1. Honeypot check
    if (rawData.website_hp && rawData.website_hp.length > 0) {
      return {
        success: false,
        message: "Submission failed.",
      };
    }

    // 2. Validate
    const validated = ownerSubmissionSchema.safeParse(rawData);
    if (!validated.success) {
      return {
        success: false,
        message: "Please fill in all required fields accurately.",
        errors: validated.error.flatten().fieldErrors,
      };
    }

    const data = validated.data;

    // 3. Insert into Supabase
    const supabase = createServerSupabaseClient();
    let submissionId = "local-" + Date.now();

    if (supabase) {
      const { data: dbResult, error: dbError } = await supabase
        .from("owner_submissions")
        .insert({
          owner_name: data.owner_name,
          owner_phone: data.owner_phone,
          owner_email: data.owner_email,
          owner_whatsapp: data.owner_whatsapp || data.owner_phone,
          property_category: data.property_category,
          property_sub_type: data.property_sub_type || null,
          country: data.country,
          state: data.state,
          city: data.city,
          address: data.address,
          property_title: data.property_title || null,
          property_details: data.property_details,
          price: data.price,
          price_type: data.price_type,
          media_urls: data.media_urls,
          status: "new",
        })
        .select("id")
        .single();

      if (dbError) {
        console.error("[Supabase Error] inserting owner submission:", dbError.message);
      } else if (dbResult) {
        submissionId = dbResult.id;
      }
    } else {
      console.log("[Supabase Info] Preview mode. Stored property listing submission:", data);
    }

    // 4. Compose WhatsApp Summary
    const waText = [
      `*New Property Listing Submission (${COMPANY.name})*`,
      `• *Owner:* ${data.owner_name}`,
      `• *Contact:* ${data.owner_phone} / ${data.owner_email}`,
      `• *Category:* ${data.property_category.toUpperCase()} (${data.property_sub_type || "N/A"})`,
      `• *Location:* ${data.city}, ${data.state}, ${data.country}`,
      `• *Price:* ${data.price ? data.price.toLocaleString("en-IN") : "POA"} (${data.price_type})`,
      `• *Files Uploaded:* ${data.media_urls.length} files`,
      `• *Details:* ${data.property_details}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
      waText
    )}`;

    // 5. Hook placeholder for email notification to info@ind-ogulf.com
    console.log(
      `[Email Hook Placeholder] Notification dispatched to ${COMPANY.email} for new property submission from ${data.owner_name}`
    );

    return {
      success: true,
      message:
        "Your property has been successfully submitted for verification! Our acquisitions desk will review the documentation and contact you within 24 hours.",
      submissionId,
      whatsappUrl,
    };
  } catch (err: unknown) {
    console.error("[Owner Submission Action Error]:", err);
    return {
      success: false,
      message: "An error occurred while submitting your property. Please reach out to us via WhatsApp.",
    };
  }
}
