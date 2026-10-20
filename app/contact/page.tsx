import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";
import { COMPANY } from "@/lib/company";
import { BlockPattern } from "@/components/BlockPattern";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ConnectWithUs } from "@/components/ConnectWithUs";

import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact Us | Offices in India & UAE Desk",
  description:
    "Contact INDO GULF Projects & Properties. Visit our corporate office at HiLITE Business Park Kozhikode or connect with our UAE executive desk via WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 50-60vh Cinematic Header Banner */}
      <PageHeader
        title="Connect With INDO GULF"
        subtitle="Reach our corporate headquarters at HiLITE Business Park Kozhikode or consult directly with our UAE investment leadership desk."
        bannerImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
        badge="Direct Communication Lines"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* Main Grid: Info + Enquiry Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Coming Soon UAE Desk */}
          <div className="lg:col-span-5 space-y-8">
            {/* Corporate Office Card */}
            <div className="bg-white rounded-3xl p-8 border border-navy/10 shadow-sm space-y-6 relative overflow-hidden">
              <BlockPattern variant="card" />

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red">
                  India Operational Headquarters
                </span>
                <h3 className="font-heading font-bold text-2xl text-navy">
                  {COMPANY.office.title}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-navy/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy block">Office Address:</strong>
                    <address className="not-italic leading-relaxed">
                      {COMPANY.office.fullAddress}
                    </address>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan shrink-0" />
                  <div>
                    <span className="text-navy/60 block text-[11px]">Direct Phone &amp; WhatsApp:</span>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="font-heading font-bold text-navy hover:text-red transition-colors"
                    >
                      {COMPANY.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber shrink-0" />
                  <div>
                    <span className="text-navy/60 block text-[11px]">Official Email:</span>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="font-medium text-navy hover:text-red transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-navy/10">
                  <Clock className="w-5 h-5 text-navy/60 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-navy/60 block text-[11px]">Working Hours (IST):</span>
                    <p className="font-bold text-navy">
                      {COMPANY.businessHours.days}: {COMPANY.businessHours.hours}
                    </p>
                    <p className="text-[11px] text-navy/50">{COMPANY.businessHours.note}</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-heading font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* UAE Office Coming Soon Panel */}
            <div className="bg-white text-navy rounded-3xl p-8 border border-navy/10 shadow-sm space-y-4 relative overflow-hidden">
              <BlockPattern variant="corner" theme="light" className="absolute -bottom-6 -right-6 opacity-30" />

              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-navy bg-amber">
                  UAE Expansion
                </span>
                <span className="text-xs font-bold text-red flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
                  Coming Soon
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-navy">
                {COMPANY.uaeOffice.title}
              </h3>

              <p className="text-xs text-navy/70 leading-relaxed">
                {COMPANY.uaeOffice.description}
              </p>

              <div className="pt-2">
                <a
                  href={COMPANY.uaeOffice.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-navy hover:text-amber transition-colors"
                >
                  <span>Connect directly with our UAE desk via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm
              title="Send Us a Detailed Message"
              subtitle="Fill in your project inquiries or advisory requests. Our executives will respond within 24 hours."
              sourcePage="/contact"
            />
          </div>
        </div>

        {/* Google Maps Embed Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-navy/10">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red" />
              <h3 className="font-heading font-bold text-2xl text-navy">
                Corporate Headquarters Location Map
              </h3>
            </div>
            <a
              href={COMPANY.office.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-navy hover:text-red flex items-center gap-1"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden border border-navy/10 shadow-lg">
            <iframe
              src={COMPANY.office.googleMapsEmbedUrl}
              title="INDO GULF Corporate Office Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Connect With Us Section */}
        <ConnectWithUs />
      </div>
    </div>
  );
}
