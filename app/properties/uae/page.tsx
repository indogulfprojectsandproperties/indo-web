import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { ExternalLink, ArrowRight, MessageCircle } from "lucide-react";
import { BlockPattern } from "@/components/BlockPattern";
import { LISTING_CATEGORIES, getListingUrl, ListingCategoryKey } from "@/lib/listing-links";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "UAE Properties | Commercial, Warehouses, Residential & Plots",
  description:
    "Explore UAE real estate across Dubai, Abu Dhabi, Sharjah & Free Zones. Commercial offices, logistics warehouses, residential villas & investment plots.",
};

const UAE_KEYS: ListingCategoryKey[] = [
  "uae-commercial",
  "uae-industrial-warehouses",
  "uae-residential",
  "uae-land-plots",
];

const UAE_IMAGES: Record<string, string> = {
  "uae-commercial": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  "uae-industrial-warehouses": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  "uae-residential": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "uae-land-plots": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
};

export default function UaePropertiesPage() {
  return (
    <div className="min-h-screen bg-softgrey">
      {/* Light Hero Header */}
      <section className="bg-softgrey text-navy pt-28 sm:pt-36 pb-16 relative overflow-hidden border-b border-navy/5">
        <BlockPattern variant="corner" className="absolute top-12 right-12 hidden md:block opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-navy text-xs font-bold border border-navy/10 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
              <span>United Arab Emirates Real Estate Hub</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy">
              UAE Commercial, Industrial &amp; Residential Real Estate
            </h1>
            <p className="text-sm sm:text-base text-navy/75 leading-relaxed">
              Targeted opportunities across Dubai, Abu Dhabi, Sharjah, and designated Free Zones.
              Browse verified inventory with full legal vetting directly on our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UAE_KEYS.map((key) => {
            const meta = LISTING_CATEGORIES[key];
            const img = UAE_IMAGES[key];
            const url = getListingUrl(key);

            return (
              <div
                key={key}
                className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-navy/10 flex flex-col justify-between transition-all duration-300 relative group transform hover:-translate-y-1"
              >
                <BlockPattern variant="card" />

                <div>
                  <div className="relative h-48 w-full bg-softgrey overflow-hidden">
                    <Image
                      src={img}
                      alt={meta.label}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase text-navy bg-white/95 backdrop-blur-xs border border-navy/10 shadow-xs">
                        UAE Portfolio
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-heading font-bold text-navy text-lg group-hover:text-red transition-colors">
                      {meta.label}
                    </h3>
                    <p className="text-xs text-navy/70 leading-relaxed">
                      {meta.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={url}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-heading font-bold text-xs text-navy bg-amber hover:bg-amber-dark transition-all duration-200 shadow-xs"
                  >
                    <span>View on Listing Point</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* UAE Coming Soon Office Panel (Light Theme) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-navy/10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <BlockPattern variant="corner" className="absolute -bottom-6 -right-6 opacity-20" />
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-dark">
              {COMPANY.uaeOffice.title}
            </span>
            <h3 className="font-heading font-bold text-2xl text-navy">
              Need Direct Advisory on UAE Investments?
            </h3>
            <p className="text-xs sm:text-sm text-navy/75 leading-relaxed">
              {COMPANY.uaeOffice.description}
            </p>
          </div>

          <a
            href={COMPANY.uaeOffice.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm rounded-full transition-colors flex items-center gap-2 shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect with UAE Desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
