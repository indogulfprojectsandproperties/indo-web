"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, BedDouble, Bath, Maximize, ExternalLink } from "lucide-react";
import { FeaturedProperty, getPropertyListingUrl } from "@/data/featured-properties";
import { BlockPattern } from "./BlockPattern";

export interface PropertyCardProps {
  property: FeaturedProperty;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [imgSrc, setImgSrc] = useState(property.image);
  const listingUrl = getPropertyListingUrl(property);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-navy/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 relative">
      {/* Corner decorative BlockPattern accent */}
      <BlockPattern variant="card" />

      {/* Image container */}
      <div>
        <div className="relative h-60 w-full overflow-hidden bg-slate-200">
          <Image
            src={imgSrc}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/placeholder-property.svg")}
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            {/* Red "Featured" tag */}
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider text-white bg-red shadow-xs">
              {property.badge}
            </span>
            {/* Region Tag */}
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold text-navy bg-white/95 backdrop-blur-xs shadow-xs border border-navy/10">
              {property.region}
            </span>
          </div>

          {/* Price Tag Overlay Bottom */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-navy/10 shadow-xs">
            <span className="text-[10px] text-navy/60 block font-normal leading-tight">Starting from</span>
            <span className="text-sm sm:text-base font-heading font-extrabold text-navy">
              {property.price}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-2">
          <div className="flex items-center gap-1.5 text-xs text-navy/60 font-medium">
            <MapPin className="w-3.5 h-3.5 text-red shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <h3 className="font-heading font-bold text-navy text-lg leading-snug group-hover:text-red transition-colors line-clamp-1">
            {property.title}
          </h3>

          <p className="text-xs text-navy/70 line-clamp-2 leading-relaxed">
            {property.description}
          </p>

          {/* Property Specs Meta */}
          <div className="pt-3 mt-3 border-t border-navy/10 flex items-center justify-between text-xs text-navy/70 font-medium">
            <div className="flex items-center gap-3">
              {property.bedrooms && (
                <span className="flex items-center gap-1" title="Bedrooms">
                  <BedDouble className="w-3.5 h-3.5 text-cyan" />
                  <span>{property.bedrooms} Beds</span>
                </span>
              )}
              {property.bathrooms && (
                <span className="flex items-center gap-1" title="Bathrooms">
                  <Bath className="w-3.5 h-3.5 text-amber" />
                  <span>{property.bathrooms} Baths</span>
                </span>
              )}
              <span className="flex items-center gap-1" title="Total Area">
                <Maximize className="w-3.5 h-3.5 text-navy/50" />
                <span>{property.areaSqFt.toLocaleString()} sqft</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Redirect Action CTA */}
      <div className="p-5 pt-0">
        <a
          href={listingUrl}
          className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-heading font-bold text-xs text-navy bg-softgrey hover:bg-navy hover:text-white border border-navy/10 transition-all duration-200"
        >
          <span>View on Listing Point</span>
          <ExternalLink className="w-3.5 h-3.5 text-amber" />
        </a>
      </div>
    </div>
  );
}
