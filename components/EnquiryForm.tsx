"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageCircle, ArrowRight } from "lucide-react";
import { BlockPattern } from "./BlockPattern";
import { buildMessage, openWhatsApp, getWhatsAppUrl } from "@/lib/whatsapp";

export interface EnquiryFormProps {
  initialInterest?: string;
  initialProject?: string;
  sourcePage?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  className?: string;
}

export function EnquiryForm({
  initialInterest = "General Enquiry",
  initialProject,
  sourcePage = "/",
  title = "Quick Enquiry & Consultation",
  subtitle = "Speak directly with our senior property and investment advisors.",
  compact = false,
  className = "",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: initialInterest,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid phone or WhatsApp number.";
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = "Please describe your requirement (at least 5 characters).";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formSourceName = initialProject
      ? `Project Enquiry: ${initialProject}`
      : `${title} (${sourcePage})`;

    const fieldsToSend: Record<string, string> = {
      "Client Name": formData.name.trim(),
      "Phone / WhatsApp": formData.phone.trim(),
      "Email Address": formData.email.trim() || "Not specified",
      "Interested Category": formData.interest,
      ...(initialProject ? { "Specific Project": initialProject } : {}),
      "Requirement / Message": formData.message.trim(),
    };

    const message = buildMessage(formSourceName, fieldsToSend);
    const link = getWhatsAppUrl(message);
    setWhatsappLink(link);

    // Open WhatsApp in new tab
    openWhatsApp(message);
    setSubmitted(true);
  };

  return (
    <div
      id="quick-enquiry"
      className={`bg-white rounded-2xl shadow-xl border border-navy/10 overflow-hidden relative ${className}`}
    >
      <BlockPattern variant="card" />

      <div className={`${compact ? "p-5" : "p-6 sm:p-8"}`}>
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-navy/70">
              Direct WhatsApp Advisory Desk
            </span>
          </div>
          <h3 className="font-heading font-bold text-navy text-xl sm:text-2xl">{title}</h3>
          <p className="text-navy/60 text-xs sm:text-sm mt-1">{subtitle}</p>
        </div>

        {/* State feedback */}
        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-bold text-navy text-xl">Opening WhatsApp...</h4>
              <p className="text-xs sm:text-sm text-navy/80 max-w-md mx-auto">
                If your WhatsApp chat didn&apos;t open automatically, please tap the button below to connect with our senior advisor.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tap Here to Open WhatsApp Chat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    interest: initialInterest,
                    message: "",
                  });
                }}
                className="text-xs text-navy/60 hover:text-navy underline font-medium py-2 px-3"
              >
                Send Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy">
                  Your Name <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Faisal Rahman"
                  className={`w-full text-xs sm:text-sm text-navy bg-softgrey/60 border rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white transition-all ${
                    errors.name ? "border-red" : "border-navy/15"
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red font-medium">{errors.name}</p>}
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy">
                  Phone / WhatsApp <span className="text-red">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 95672 ... or +971 50 ..."
                  className={`w-full text-xs sm:text-sm text-navy bg-softgrey/60 border rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white transition-all ${
                    errors.phone ? "border-red" : "border-navy/15"
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-red font-medium">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full text-xs sm:text-sm text-navy bg-softgrey/60 border rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white transition-all ${
                    errors.email ? "border-red" : "border-navy/15"
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red font-medium">{errors.email}</p>}
              </div>

              {/* Interested In */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy">Interested In</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white transition-all"
                >
                  <option value="Banasura Dam Resort Project">Banasura Dam Resort Project</option>
                  <option value="Markaz Knowledge City Villa Enclave">Markaz Knowledge City Villa Enclave</option>
                  <option value="Karappuzha Waterfront Villas">Karappuzha Waterfront Villas</option>
                  <option value="UAE Commercial & Warehousing">UAE Commercial &amp; Warehousing</option>
                  <option value="UAE Residential Luxury">UAE Residential Luxury</option>
                  <option value="Kerala Land & Plots">Kerala Land &amp; Plots</option>
                  <option value="General Property Purchase">General Property Purchase</option>
                  <option value="List My Property">List My Property</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-navy">
                Your Requirements / Questions <span className="text-red">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={compact ? 2 : 3}
                placeholder="Tell us what you are looking for (budget, preferred location, timeline, etc.)..."
                className={`w-full text-xs sm:text-sm text-navy bg-softgrey/60 border rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white transition-all ${
                  errors.message ? "border-red" : "border-navy/15"
                }`}
              />
              {errors.message && (
                <p className="text-[11px] text-red font-medium">{errors.message}</p>
              )}
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-heading font-bold text-sm text-white bg-navy hover:bg-navy-700 active:scale-[0.99] shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-amber" />
              <span>Submit &amp; Open WhatsApp Conversation</span>
              <ArrowRight className="w-4 h-4 text-cyan" />
            </button>

            <p className="text-[11px] text-navy/50 text-center">
              Your inquiry connects directly to our verified WhatsApp corporate desk: +91 95672 64686
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
