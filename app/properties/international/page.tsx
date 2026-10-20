import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Globe, ExternalLink, MessageCircle } from "lucide-react";
import { BlockPattern } from "@/components/BlockPattern";
import { LISTING_CATEGORIES, getListingUrl } from "@/lib/listing-links";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "International Properties | Global Real Estate Opportunities",
  description:
    "Curated international property investments and global real estate opportunities presented by INDO GULF Projects & Properties.",
};

import { PageHeader } from "@/components/PageHeader";

export default function InternationalPropertiesPage() {
  const meta = LISTING_CATEGORIES["international-other-countries"];
  const url = getListingUrl("international-other-countries");

  return (
    <div className="min-h-screen bg-softgrey">
      {/* 50-60vh Cinematic Header Banner */}
      <PageHeader
        title="International Real Estate Portfolios"
        subtitle="Curated opportunities in high-growth international jurisdictions for family offices, institutional syndicates, and global NRI investors seeking geographic diversification."
        bannerImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
        badge="Global Investment Horizons"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Properties", href: "/properties" },
          { label: "International" },
        ]}
      />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative h-96 rounded-3xl overflow-hidden shadow-xl border border-navy/10">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
              alt="International Properties"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="px-3 py-1 rounded-md bg-amber text-navy text-xs font-bold uppercase tracking-wider">
                Cross-Border Asset Desk
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">
                Global Property Syndication &amp; Advisory
              </h3>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-navy/10 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-navy/60">
                Direct Inventory Access
              </span>
              <h3 className="font-heading font-bold text-2xl text-navy">
                Browse on MyListingPoint
              </h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                {meta.description} We vet cross-border tax implications, ownership covenants, and
                currency repatriation guidelines before cataloging international opportunities.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={url}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full font-heading font-bold text-xs sm:text-sm text-navy bg-amber hover:bg-amber-dark transition-colors shadow-xs"
              >
                <span>View Global Listings</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full font-heading font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Speak with International Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
