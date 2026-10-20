"use client";

import React, { useState } from "react";
import {
  Home,
  Key,
  Compass,
  Building2,
  Warehouse,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/services";
import { BlockPattern } from "@/components/BlockPattern";
import { EnquiryModal } from "@/components/EnquiryModal";
import { COMPANY } from "@/lib/company";

import { PageHeader } from "@/components/PageHeader";

const ICON_MAP = {
  Home,
  Key,
  Compass,
  Building2,
  Warehouse,
  ShieldCheck,
  TrendingUp,
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="min-h-screen bg-softgrey">
      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        serviceOrProjectTitle={selectedService?.title}
        category={selectedService?.category}
      />

      {/* 50-60vh Cinematic Header Banner */}
      <PageHeader
        title="End-to-End Real Estate & Advisory Services"
        subtitle="From individual luxury home sales to multi-acre industrial logistics leasing and cross-border capital syndication across India and the United Arab Emirates."
        bannerImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
        badge="Full-Stack Real Estate Advisory"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 border border-navy/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative transform hover:-translate-y-1"
              >
                <BlockPattern variant="card" />

                <div className="space-y-4">
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-softgrey group-hover:bg-navy transition-colors flex items-center justify-center text-navy group-hover:text-amber border border-navy/5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-navy/50 bg-softgrey px-2.5 py-1 rounded-md border border-navy/5">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-navy group-hover:text-red transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-2 space-y-2 border-t border-navy/10">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-navy/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-dark shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire CTA */}
                <div className="pt-6 mt-6 border-t border-navy/10">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-heading font-bold text-xs text-navy bg-amber hover:bg-amber-dark transition-all duration-200 shadow-xs active:scale-[0.99]"
                  >
                    <span>Enquire for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Advisory Banner (Light Theme) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-navy/10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <BlockPattern variant="corner" className="absolute -bottom-8 -right-8 opacity-20" />

          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-dark">
              Custom Advisory &amp; Family Office Desk
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy">
              Looking for Specialized Cross-Border Portfolio Structuring?
            </h2>
            <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
              Our directors personally handle high-volume mandates including land pooling, institutional
              warehousing acquisitions, and NRI estate distribution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY.phone}`}
              className="px-6 py-3.5 rounded-full bg-softgrey hover:bg-navy hover:text-white text-navy font-heading font-bold text-xs transition-colors flex items-center gap-2 border border-navy/10"
            >
              <Phone className="w-4 h-4 text-cyan-dark" />
              <span>Call Leadership Desk</span>
            </a>

            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs transition-colors flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
