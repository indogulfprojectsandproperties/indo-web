import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Globe,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { BlockPattern } from "@/components/BlockPattern";
import {
  LISTING_CATEGORIES,
  getListingUrl,
  ListingCategoryKey,
} from "@/lib/listing-links";

import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Properties in India & UAE",
  description:
    "Explore luxury residential, Grade-A commercial, industrial warehouses, and prime land plots across India (Kerala & Metros), the UAE, and global markets.",
};

const CATEGORY_IMAGES: Record<ListingCategoryKey, string> = {
  "uae-commercial": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  "uae-industrial-warehouses": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  "uae-residential": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  "uae-land-plots": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  "india-kerala-residential": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  "india-kerala-commercial": "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
  "india-kerala-land-plots": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  "india-other-states-residential": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  "india-other-states-commercial": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "india-other-states-land-plots": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  "international-other-countries": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
};

export default function PropertiesOverviewPage() {
  const uaeCategories: ListingCategoryKey[] = [
    "uae-commercial",
    "uae-industrial-warehouses",
    "uae-residential",
    "uae-land-plots",
  ];

  const keralaCategories: ListingCategoryKey[] = [
    "india-kerala-residential",
    "india-kerala-commercial",
    "india-kerala-land-plots",
  ];

  const otherIndiaCategories: ListingCategoryKey[] = [
    "india-other-states-residential",
    "india-other-states-commercial",
    "india-other-states-land-plots",
  ];

  const internationalCategories: ListingCategoryKey[] = [
    "international-other-countries",
  ];

  const renderCategoryCard = (key: ListingCategoryKey) => {
    const meta = LISTING_CATEGORIES[key];
    const image = CATEGORY_IMAGES[key];
    const redirectUrl = getListingUrl(key);

    return (
      <div
        key={key}
        className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-navy/10 flex flex-col justify-between transition-all duration-300 relative transform hover:-translate-y-1"
      >
        <BlockPattern variant="card" />

        <div>
          <div className="relative h-44 w-full overflow-hidden bg-softgrey">
            <Image
              src={image}
              alt={meta.label}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-navy bg-white/95 backdrop-blur-xs border border-navy/10 shadow-xs">
                {meta.regionName}
              </span>
            </div>
          </div>

          <div className="p-5 space-y-2">
            <h4 className="font-heading font-bold text-navy text-base group-hover:text-red transition-colors line-clamp-1">
              {meta.label}
            </h4>
            <p className="text-xs text-navy/70 line-clamp-2 leading-relaxed">
              {meta.description}
            </p>
          </div>
        </div>

        <div className="p-5 pt-0">
          <a
            href={redirectUrl}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-heading font-bold text-xs text-navy bg-softgrey hover:bg-navy hover:text-white border border-navy/10 transition-all duration-200"
          >
            <span>View on Listing Point</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-softgrey">
      {/* 50-60vh Cinematic Header Banner */}
      <PageHeader
        title="Property Categories & Regional Portfolios"
        subtitle="All active property inventory is hosted and continuously updated on our dedicated platform mylistingpoint.com with verified developer terms."
        bannerImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
        badge="Dedicated Property Inventory Platform"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Properties" },
        ]}
      >
        <Link
          href="/properties/uae"
          className="px-4 py-2 rounded-full bg-white/15 hover:bg-white text-white hover:text-navy text-xs font-semibold backdrop-blur-md border border-white/25 transition-all shadow-sm"
        >
          UAE Properties
        </Link>
        <Link
          href="/properties/india"
          className="px-4 py-2 rounded-full bg-white/15 hover:bg-white text-white hover:text-navy text-xs font-semibold backdrop-blur-md border border-white/25 transition-all shadow-sm"
        >
          India (Kerala &amp; Metros)
        </Link>
        <Link
          href="/properties/international"
          className="px-4 py-2 rounded-full bg-white/15 hover:bg-white text-white hover:text-navy text-xs font-semibold backdrop-blur-md border border-white/25 transition-all shadow-sm"
        >
          International
        </Link>
      </PageHeader>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Region 1: UAE */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-navy/10 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-amber" />
                <h2 className="font-heading font-bold text-2xl text-navy">
                  United Arab Emirates (UAE)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-navy/70">
                Commercial offices, industrial storage warehouses, luxury penthouses, and development plots.
              </p>
            </div>

            <Link
              href="/properties/uae"
              className="text-xs font-bold text-navy hover:text-red flex items-center gap-1"
            >
              <span>Explore UAE Regional Hub</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {uaeCategories.map(renderCategoryCard)}
          </div>
        </div>

        {/* Region 2: India (Kerala) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-navy/10 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-red" />
                <h2 className="font-heading font-bold text-2xl text-navy">
                  India (Kerala Properties)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-navy/70">
                Resort developments, luxury gated villas, commercial tech suites, and high-value plots in Kozhikode, Wayanad &amp; Kochi.
              </p>
            </div>

            <Link
              href="/properties/india"
              className="text-xs font-bold text-navy hover:text-red flex items-center gap-1"
            >
              <span>Explore Kerala &amp; Metros Hub</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keralaCategories.map(renderCategoryCard)}
          </div>
        </div>

        {/* Region 3: India (Other States) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-navy/10 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-cyan" />
                <h2 className="font-heading font-bold text-2xl text-navy">
                  India (Properties in Other States)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-navy/70">
                Grade-A IT parks, commercial towers, and residential luxury in Bengaluru, Chennai, Mumbai &amp; Hyderabad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherIndiaCategories.map(renderCategoryCard)}
          </div>
        </div>

        {/* Region 4: International */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-navy/10 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-dark" />
                <h2 className="font-heading font-bold text-2xl text-navy">
                  International (Other Countries)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-navy/70">
                Select cross-border investments and prime global real estate opportunities.
              </p>
            </div>

            <Link
              href="/properties/international"
              className="text-xs font-bold text-navy hover:text-red flex items-center gap-1"
            >
              <span>Explore International Hub</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalCategories.map(renderCategoryCard)}
          </div>
        </div>
      </div>
    </div>
  );
}
