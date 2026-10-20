"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export interface PageHeaderProps {
  title: string;
  subtitle: string;
  bannerImage: string;
  badge?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  bannerImage,
  badge,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full h-[52vh] min-h-[380px] sm:min-h-[430px] max-h-[540px] flex items-center justify-center overflow-hidden bg-navy text-white"
      aria-label={title}
    >
      {/* Background Image with subtle Ken-Burns zoom */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <motion.div
          className="relative w-full h-full"
          initial={false}
          animate={
            shouldReduceMotion
              ? { scale: 1 }
              : { scale: [1, 1.06] }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src={bannerImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Dark Navy Overlay (45% to 65% for strong contrast) */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/55 to-navy/85 z-10" />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-navy/60 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center">
        {/* Breadcrumbs (if provided) */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-4 inline-flex items-center gap-1.5 text-xs text-white/70"
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight className="w-3 h-3 text-white/40" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-amber transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Optional Eyebrow Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3.5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs uppercase tracking-[0.12em] font-semibold shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span>{badge}</span>
          </motion.div>
        )}

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.08] text-white max-w-4xl"
        >
          {title}
        </motion.h1>

        {/* Page Subtitle / One-line Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-white/90 font-body max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Additional custom elements (category filters, action pills) */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
