import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Building2, Search } from "lucide-react";
import { BlockPattern } from "@/components/BlockPattern";
import { getGeneralListingUrl } from "@/lib/listing-links";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-softgrey px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative overflow-hidden">
      {/* Decorative Brand Motif in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none scale-150">
        <BlockPattern variant="hero" />
      </div>

      <div className="relative z-10 max-w-lg w-full bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-navy/10 text-center space-y-6">
        <BlockPattern variant="card" />

        <div className="inline-flex items-center justify-center">
          <BlockPattern variant="hero" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl sm:text-6xl font-heading font-extrabold text-navy tracking-tight">
            404
          </span>
          <h1 className="font-heading font-bold text-2xl text-navy">
            Page or Property Not Found
          </h1>
          <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
            The page you requested may have been relocated, or the property development listing has expired.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs text-white bg-navy hover:bg-navy-700 transition-colors shadow-sm"
          >
            <Home className="w-4 h-4 text-cyan" />
            <span>Return to Home</span>
          </Link>

          <a
            href={getGeneralListingUrl("404-fallback-browse")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs text-navy bg-amber hover:bg-amber-dark transition-colors shadow-xs"
          >
            <Search className="w-4 h-4" />
            <span>Browse All Properties</span>
          </a>
        </div>
      </div>
    </div>
  );
}
