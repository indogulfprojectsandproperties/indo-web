import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { BlockPattern } from "@/components/BlockPattern";
import { PageHeader } from "@/components/PageHeader";
import { LISTING_CATEGORIES, getListingUrl, ListingCategoryKey } from "@/lib/listing-links";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "India Properties | Kerala & Major Metros",
  description:
    "Explore premier real estate across Kerala (Kozhikode, Wayanad, Kochi) and other Indian metros (Bengaluru, Mumbai, Chennai, Hyderabad). Residential villas, commercial towers, and plots.",
};

const KERALA_KEYS: ListingCategoryKey[] = [
  "india-kerala-residential",
  "india-kerala-commercial",
  "india-kerala-land-plots",
];

const OTHER_KEYS: ListingCategoryKey[] = [
  "india-other-states-residential",
  "india-other-states-commercial",
  "india-other-states-land-plots",
];

const IMAGES: Record<string, string> = {
  "india-kerala-residential": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  "india-kerala-commercial": "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
  "india-kerala-land-plots": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  "india-other-states-residential": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  "india-other-states-commercial": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "india-other-states-land-plots": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
};

export default function IndiaPropertiesPage() {
  const renderCard = (key: ListingCategoryKey) => {
    const meta = LISTING_CATEGORIES[key];
    const img = IMAGES[key];
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
                {meta.regionName}
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
  };

  return (
    <div className="min-h-screen bg-softgrey">
      {/* 50-60vh Cinematic Header Banner */}
      <PageHeader
        title="Kerala & Major Indian Metros"
        subtitle="From picturesque eco-resorts in Wayanad and smart township villas in Kozhikode to institutional commercial towers in Bengaluru and Mumbai."
        bannerImage="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=85"
        badge="India Real Estate Portfolio"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Properties", href: "/properties" },
          { label: "India" },
        ]}
      />

      {/* Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Section 1: Kerala */}
        <div className="space-y-6">
          <div className="pb-4 border-b border-navy/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-xs bg-red" />
              <h2 className="font-heading font-bold text-2xl text-navy">
                Kerala Properties (Residential, Commercial &amp; Land)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-navy/70 mt-1">
              Serving Kozhikode, Wayanad, Malappuram, Kannur, and Kochi with verified land titles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KERALA_KEYS.map(renderCard)}
          </div>
        </div>

        {/* Section 2: Other States */}
        <div className="space-y-6">
          <div className="pb-4 border-b border-navy/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-xs bg-cyan" />
              <h2 className="font-heading font-bold text-2xl text-navy">
                Properties in Other Indian States
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-navy/70 mt-1">
              Strategic high-yield residential, commercial, and logistics land across Bengaluru, Chennai, Mumbai, and Hyderabad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OTHER_KEYS.map(renderCard)}
          </div>
        </div>

        {/* Head Office Callout (Light Theme) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-navy/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-xl text-navy">
              Visit our Corporate Headquarters in Kozhikode
            </h3>
            <p className="text-xs sm:text-sm text-navy/70">
              {COMPANY.office.fullAddress}
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-full bg-navy hover:bg-navy-700 text-white font-heading font-bold text-xs transition-colors shadow-xs"
          >
            Get Office Directions &amp; Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
