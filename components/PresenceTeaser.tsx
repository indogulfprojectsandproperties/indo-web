import React from "react";
import Link from "next/link";
import { MapPin, MessageCircle, ArrowRight, ExternalLink } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { BlockPattern } from "./BlockPattern";

export function PresenceTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-softgrey text-navy text-xs uppercase tracking-[0.12em] font-semibold border border-navy/10 shadow-xs">
            <BlockPattern variant="default" />
            <span>Dual-Market Cross-Border Synergy</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy">
            Our Business Presence in India &amp; the UAE
          </h2>
          <p className="text-sm sm:text-base text-navy/70 leading-relaxed">
            Bridging high-net-worth Gulf investors and institutional buyers with premier land,
            hospitality resorts, and luxury residential projects across Kerala and the Emirates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel 1: India (Kerala) Corporate Headquarters */}
          <div className="bg-softgrey rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <BlockPattern variant="card" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-navy shadow-xs">
                  Operational Headquarters
                </span>
                <span className="text-xs font-bold text-red flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red" />
                  India (Kerala)
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-bold text-2xl text-navy">
                  {COMPANY.office.title}
                </h3>
                <div className="flex items-start gap-2.5 text-sm text-navy/80 pt-1">
                  <MapPin className="w-5 h-5 text-red shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {COMPANY.office.fullAddress}
                  </p>
                </div>
              </div>

              {/* Office Features */}
              <div className="grid grid-cols-2 gap-4 py-3 border-y border-navy/10 text-xs text-navy/75">
                <div>
                  <span className="font-bold text-navy block">Location Hub</span>
                  <span>HiLITE Business Park &amp; Cyberpark Corridor</span>
                </div>
                <div>
                  <span className="font-bold text-navy block">Working Hours</span>
                  <span>{COMPANY.businessHours.days} ({COMPANY.businessHours.hours})</span>
                </div>
              </div>

              <p className="text-xs text-navy/70 leading-relaxed">
                Our flagship corporate headquarters provides comprehensive title scrutiny, investor
                briefings, project walkthroughs, and deed registrations for domestic &amp; NRI clients.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-navy/10 flex flex-wrap items-center justify-between gap-4">
              <a
                href={COMPANY.office.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-red transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-red" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-heading font-bold text-xs text-white bg-navy hover:bg-navy-700 transition-colors shadow-xs"
              >
                <span>Book In-Office Meeting</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber" />
              </Link>
            </div>
          </div>

          {/* Panel 2: UAE Office — Coming Soon (White Theme) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <BlockPattern variant="card" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-navy bg-amber shadow-xs">
                  Regional Expansion
                </span>
                <span className="text-xs font-bold text-cyan-dark flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  United Arab Emirates
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-bold text-2xl text-navy">
                  {COMPANY.uaeOffice.title}
                </h3>
                <div className="p-4 rounded-2xl bg-softgrey border border-navy/10 text-xs text-navy/80 leading-relaxed">
                  {COMPANY.uaeOffice.description}
                </div>
              </div>

              {/* UAE Service Coverage */}
              <div className="grid grid-cols-2 gap-4 py-3 border-y border-navy/10 text-xs text-navy/75">
                <div>
                  <span className="font-bold text-navy block">Key Emirates</span>
                  <span>Dubai, Abu Dhabi, Sharjah &amp; Free Zones</span>
                </div>
                <div>
                  <span className="font-bold text-navy block">Core Focus</span>
                  <span>Warehouses, Commercial Suites &amp; Plots</span>
                </div>
              </div>

              <p className="text-xs text-navy/70 leading-relaxed">
                While our physical UAE office setup is underway, Gulf-based clients receive high-priority
                consultation and deal facilitation through our executive desk via WhatsApp.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-navy/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-navy/60">
                Direct Line: <strong className="text-navy">{COMPANY.displayPhone}</strong>
              </span>

              <a
                href={COMPANY.uaeOffice.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-heading font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with UAE Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
