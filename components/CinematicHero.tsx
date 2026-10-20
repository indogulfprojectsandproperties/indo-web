"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { INTRO_DATA } from "@/data/intro";
import { COMPANY } from "@/lib/company";

interface CinematicHeroProps {
  onScrollCueClick?: () => void;
}

export function CinematicHero({ onScrollCueClick }: CinematicHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lazy load & autoplay video after initial client mount to prioritize LCP image
  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay was blocked or failed; fallback to poster image
          setVideoError(true);
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  const handleScrollClick = () => {
    if (onScrollCueClick) {
      onScrollCueClick();
    } else {
      const target = document.getElementById("intro-transition");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      className="relative w-full h-[100vh] h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden bg-navy"
      aria-label="INDO GULF Cinematic Brand Intro"
    >
      {/* Background Media Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* High-Resolution Poster / Fallback Image with slow Ken-Burns Zoom */}
        <motion.div
          className="relative w-full h-full"
          initial={false}
          animate={
            shouldReduceMotion
              ? { scale: 1 }
              : { scale: [1, 1.08] }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src={INTRO_DATA.fallbackImage}
            alt="INDO GULF Luxury Skyline & Resort"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Muted Looping Video Overlay */}
        {!shouldReduceMotion && !videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={INTRO_DATA.posterImage}
            onPlaying={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            {INTRO_DATA.videoSources.map((v, i) => (
              <source key={i} src={v.src} type={v.type} />
            ))}
          </video>
        )}

        {/* Soft Dark Navy Gradient Overlay (35% to 50% for optimal legibility) */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/70 z-10" />

        {/* Subtle vignette for cinematic depth */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-navy/50 z-10" />
      </div>

      {/* Center Cinematic Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* 1. Large Logo inside White Rounded-3xl Plate */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-2xl border border-white/20 inline-flex items-center justify-center">
            <div className="relative w-40 sm:w-56 md:w-64 h-12 sm:h-16 md:h-20">
              <Image
                src="/logo.png"
                alt="INDO GULF Projects & Properties"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* 2. One-line Editorial Headline with Amber Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.08] max-w-4xl"
        >
          <span>{INTRO_DATA.headlineMain}</span>
          <span className="text-amber">{INTRO_DATA.headlineHighlight}</span>
        </motion.h1>

        {/* 3. Short 'What is Indo Gulf' Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 font-body max-w-[620px] mx-auto leading-relaxed"
        >
          {INTRO_DATA.paragraph}
        </motion.p>

        {/* 4. Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          {/* Amber Explore Properties */}
          <Link
            href={INTRO_DATA.explorePropertiesCta.href}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-amber text-navy font-heading font-semibold text-sm sm:text-base hover:bg-amber-400 active:scale-95 shadow-xl transition-all duration-200 text-center"
          >
            {INTRO_DATA.explorePropertiesCta.label}
          </Link>

          {/* Outlined White Our Projects */}
          <Link
            href={INTRO_DATA.ourProjectsCta.href}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-white/80 hover:border-white text-white hover:bg-white hover:text-navy active:scale-95 font-heading font-semibold text-sm sm:text-base transition-all duration-200 text-center"
          >
            {INTRO_DATA.ourProjectsCta.label}
          </Link>
        </motion.div>
      </div>

      {/* Bottom Bar Elements (Left chips, Center Scroll cue, Right WhatsApp helper) */}
      <div className="absolute bottom-4 sm:bottom-8 inset-x-0 z-20 px-4 sm:px-8 flex items-end justify-between pointer-events-none">
        {/* Bottom Left: Regional Chips */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {INTRO_DATA.regionChips.map((chip, i) => (
            <div
              key={i}
              className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-semibold tracking-wide shadow-sm"
            >
              {chip}
            </div>
          ))}
        </div>

        {/* Bottom Center: Animated Scroll Cue */}
        <button
          type="button"
          onClick={handleScrollClick}
          aria-label="Scroll down to explore"
          className="flex flex-col items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer pointer-events-auto group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber rounded-full p-2"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium font-heading">
            Scroll
          </span>
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : { y: [0, 6, 0] }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-amber group-hover:translate-y-0.5 transition-transform" />
          </motion.div>
        </button>

        {/* Bottom Right: Quick WhatsApp Helper */}
        <div className="pointer-events-auto">
          <a
            href={COMPANY.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on WhatsApp"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/15 hover:bg-emerald-600 backdrop-blur-md border border-white/25 text-white text-xs font-semibold transition-all duration-200 shadow-md group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-white fill-emerald-400/30 group-hover:fill-white" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
