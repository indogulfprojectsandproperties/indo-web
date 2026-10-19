"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { BlockPattern } from "./BlockPattern";

export function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[current];

  return (
    <div className="relative max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 shadow-xl border border-navy/10 overflow-hidden">
      <BlockPattern variant="card" />

      {/* Large decorative quote mark in light amber */}
      <div className="text-amber/25 mb-4 sm:mb-6">
        <Quote className="w-12 h-12 sm:w-16 sm:h-16" />
      </div>

      <div className="space-y-6 text-left">
        {/* 5 Amber Rating Stars */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber text-amber" />
          ))}
        </div>

        {/* Review text */}
        <p className="font-heading font-medium text-lg sm:text-2xl lg:text-[26px] text-navy leading-relaxed sm:leading-[1.4] tracking-[-0.02em]">
          &ldquo;{item.text}&rdquo;
        </p>

        {/* Author Details & Location Tags Below */}
        <div className="pt-2">
          <h4 className="font-heading font-bold text-navy text-base sm:text-lg">
            {item.name}
          </h4>
          <p className="text-xs sm:text-sm text-navy-body font-normal mt-0.5">
            {item.role}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-xs font-semibold text-red">
              {item.location}
            </span>
            <span className="text-navy/30">•</span>
            <span className="text-xs font-medium text-cyan-dark">
              {item.propertyContext}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 pt-6 border-t border-navy/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-amber" : "w-2 bg-navy/20 hover:bg-navy/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-softgrey hover:bg-navy hover:text-white flex items-center justify-center transition-colors text-navy cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-softgrey hover:bg-navy hover:text-white flex items-center justify-center transition-colors text-navy cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
