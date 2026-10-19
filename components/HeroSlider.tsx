"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  tag: string;
  headlineMain: string;
  headlineHighlight: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: "dubai-skyline",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    tag: "Dubai Skyline & UAE Portfolios",
    headlineMain: "Connecting Luxury Developments Across",
    headlineHighlight: "India & the UAE.",
    subtitle:
      "Exclusive resort villas in Wayanad, smart township homes in Calicut, and prime commercial investments in Dubai.",
    primaryCtaText: "Explore Properties",
    primaryCtaHref: "/properties",
    secondaryCtaText: "Enquire Now",
    secondaryCtaHref: "#quick-enquiry",
  },
  {
    id: "luxury-villa",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80",
    tag: "Signature Luxury Living",
    headlineMain: "Prime Waterfront Villas &",
    headlineHighlight: "Private Hillside Estates.",
    subtitle:
      "Architectural holiday sanctuaries in Wayanad, ultra-luxury penthouses, and secure gated community residences.",
    primaryCtaText: "Browse Luxury Homes",
    primaryCtaHref: "/properties",
    secondaryCtaText: "Consult on WhatsApp",
    secondaryCtaHref: "https://wa.me/919567264686",
  },
  {
    id: "commercial-towers",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    tag: "Commercial Office Towers",
    headlineMain: "Grade-A Corporate Spaces in",
    headlineHighlight: "Premier Growth Corridors.",
    subtitle:
      "Strategic freehold corporate suites in Business Bay Dubai and the prestigious Calicut IT bypass corridor.",
    primaryCtaText: "Commercial Opportunities",
    primaryCtaHref: "/properties",
    secondaryCtaText: "Enquire Now",
    secondaryCtaHref: "#quick-enquiry",
  },
  {
    id: "warehouses",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    tag: "Industrial & Logistics",
    headlineMain: "High-Yield Warehouses &",
    headlineHighlight: "Strategic Logistics Hubs.",
    subtitle:
      "Modern cold-storage and distribution facilities in Jebel Ali, UAE industrial zones, and Kerala highway networks.",
    primaryCtaText: "View Warehousing",
    primaryCtaHref: "/properties/uae",
    secondaryCtaText: "WhatsApp Desk",
    secondaryCtaHref: "https://wa.me/919567264686",
  },
  {
    id: "kerala-resort",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80",
    tag: "Kerala Resort Residences",
    headlineMain: "Eco-Luxury Hillside Living Overlooking",
    headlineHighlight: "Banasura Sagar Dam.",
    subtitle:
      "High-yield managed hospitality holiday homes nestled against Asia's largest earth dam in Kerala's scenic highlands.",
    primaryCtaText: "Discover Banasura Project",
    primaryCtaHref: "/projects/banasura-dam-resort-project",
    secondaryCtaText: "Download Brochure",
    secondaryCtaHref: "#quick-enquiry",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(nextSlide, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const activeSlide = SLIDES[current];

  return (
    <section className="relative w-full bg-softgrey pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 overflow-hidden border-b border-navy/5">
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout: Left Content, Right Photo Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Small Eyebrow Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-navy text-xs uppercase tracking-[0.12em] font-semibold border border-navy/10 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span>{activeSlide.tag}</span>
              <span className="text-navy/30">•</span>
              <span className="text-amber-dark font-extrabold normal-case tracking-normal">India &amp; UAE</span>
            </div>

            {/* Big Editorial Headline with Highlighted Color Phrase */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-[68px] text-navy tracking-[-0.03em] leading-[1.06] text-balance">
              {activeSlide.headlineMain}{" "}
              <span className="text-amber">{activeSlide.headlineHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-[18px] text-navy-body font-normal leading-[1.68] max-w-xl">
              {activeSlide.subtitle}
            </p>

            {/* Two Action Buttons: Amber & Outlined Navy */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={activeSlide.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-sm sm:text-base text-navy bg-amber hover:bg-amber-dark active:scale-95 shadow-md shadow-amber/25 transition-all duration-200"
              >
                <span>{activeSlide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-navy" />
              </Link>

              {activeSlide.secondaryCtaHref.startsWith("http") ? (
                <a
                  href={activeSlide.secondaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-sm sm:text-base text-navy bg-white hover:bg-navy hover:text-white border-2 border-navy transition-all duration-200 shadow-xs"
                >
                  <span>{activeSlide.secondaryCtaText}</span>
                </a>
              ) : (
                <Link
                  href={activeSlide.secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-sm sm:text-base text-navy bg-white hover:bg-navy hover:text-white border-2 border-navy transition-all duration-200 shadow-xs"
                >
                  <span>{activeSlide.secondaryCtaText}</span>
                </Link>
              )}
            </div>
          </div>

          {/* Right Column: Clean Rounded-3xl Photo Slider */}
          <div
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Slider Container - Photo ONLY */}
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
              {SLIDES.map((slide, idx) => {
                const hasError = imageErrors[slide.id];
                const imageSrc = hasError ? "/placeholder-property.svg" : slide.image;

                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    {/* Neutral skeleton background behind image */}
                    <div className="absolute inset-0 bg-slate-200 animate-pulse pointer-events-none" />

                    <Image
                      src={imageSrc}
                      alt={slide.headlineMain}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      onError={() => {
                        setImageErrors((prev) => ({ ...prev, [slide.id]: true }));
                      }}
                      className="object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gentle gradient for legibility of bottom navigation controls */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                );
              })}

              {/* Slider Bottom Bar: Dots and Arrows ONLY */}
              <div className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between">
                {/* Dots */}
                <div className="flex items-center gap-1.5 bg-navy/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  {SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrent(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === current ? "w-6 bg-amber" : "w-2 bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevSlide}
                    className="w-9 h-9 rounded-full bg-navy/70 hover:bg-navy text-white backdrop-blur-md flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-9 h-9 rounded-full bg-navy/70 hover:bg-navy text-white backdrop-blur-md flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
