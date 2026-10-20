"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  ArrowRight,
  Building2,
  Warehouse,
  Home,
  MapPin,
  Globe,
  ShieldCheck,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { MAIN_NAV_LINKS, PROPERTIES_MEGA_MENU } from "@/lib/nav";
import { getListingUrl, ListingCategoryKey } from "@/lib/listing-links";
import { COMPANY } from "@/lib/company";
import { SOCIAL_LIST } from "@/lib/socials";
import { EnquiryModal } from "./EnquiryModal";
import { cn } from "@/lib/utils";

const CATEGORY_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "uae-commercial": Building2,
  "uae-industrial-warehouses": Warehouse,
  "uae-residential": Home,
  "uae-land-plots": MapPin,
  "india-kerala-residential": Home,
  "india-kerala-commercial": Building2,
  "india-kerala-land-plots": MapPin,
  "india-other-states-residential": Home,
  "india-other-states-commercial": Building2,
  "india-other-states-land-plots": MapPin,
  "international-other-countries": Globe,
};

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(800);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  // Track window scroll and height
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Intro threshold:
  // On home page: intro is 100vh. Past 75% of viewport, show the pill navbar.
  // On other pages with header banner: past 220px, show the pill navbar.
  const isIntroActive = isHomePage
    ? scrollY < windowHeight * 0.75
    : scrollY < 220;

  const isNavbarVisible = !isIntroActive;

  // Lock body scroll when full-screen menu overlay is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close menus on path change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setMobilePropertiesOpen(false);
  }, [pathname]);

  return (
    <>
      {/* =========================================================================
          1. SOBHA-STYLE MINIMAL TRANSPARENT TOP BAR (Shown on intro / header banner)
          ========================================================================= */}
      <motion.header
        className="fixed top-0 inset-x-0 z-40 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 flex items-center justify-between"
        initial={false}
        animate={{
          opacity: isIntroActive ? 1 : 0,
          y: isIntroActive ? 0 : -20,
          pointerEvents: isIntroActive ? "auto" : "none",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        aria-hidden={!isIntroActive}
      >
        {/* Left: White Hamburger Button with Menu label */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-sm transition-all duration-200 cursor-pointer group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber active:scale-95"
          aria-label="Open navigation menu"
        >
          <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-amber group-hover:scale-110 transition-transform" />
          <span className="font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase text-white">
            Menu
          </span>
        </button>

        {/* Center: Subtle Text or minimal branding */}
        <div className="text-center">
          {isHomePage ? (
            <span className="hidden md:inline-block font-heading font-extrabold text-xs tracking-[0.25em] uppercase text-white/50 select-none">
              INDO GULF
            </span>
          ) : (
            <Link
              href="/"
              className="inline-block font-heading font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase text-white hover:text-amber transition-colors"
            >
              INDO GULF
            </Link>
          )}
        </div>

        {/* Right: White-Outlined Enquire Now button */}
        <button
          type="button"
          onClick={() => setEnquiryModalOpen(true)}
          className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/80 hover:border-white text-white hover:bg-white hover:text-navy font-heading font-semibold text-xs sm:text-sm backdrop-blur-md transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
        >
          Enquire Now
        </button>
      </motion.header>

      {/* =========================================================================
          2. FIXED WHITE GRADIENT STRIP BEHIND PILL NAVBAR
          ========================================================================= */}
      <motion.div
        initial={false}
        animate={{
          opacity: isNavbarVisible ? 1 : 0,
          y: isNavbarVisible ? 0 : -20,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 h-24 sm:h-28 bg-gradient-to-b from-white via-white/95 to-transparent pointer-events-none z-40"
        aria-hidden="true"
      />

      {/* =========================================================================
          3. FLOATING WHITE PILL NAVBAR (Slides in smoothly when scrolled past intro)
          ========================================================================= */}
      <motion.header
        className={cn(
          "fixed top-3 sm:top-4 inset-x-0 mx-auto z-50 w-[94%] max-w-[1200px]",
          isNavbarVisible ? "pointer-events-auto" : "pointer-events-none"
        )}
        initial={false}
        animate={{
          y: isNavbarVisible ? 0 : "-130%",
          opacity: isNavbarVisible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.div
          animate={{
            scale: scrollY > 300 ? 0.98 : 1,
            boxShadow:
              scrollY > 300
                ? "0 14px 35px -8px rgba(12, 12, 64, 0.15), 0 4px 12px -2px rgba(12, 12, 64, 0.08)"
                : "0 8px 24px -6px rgba(12, 12, 64, 0.08), 0 2px 6px -1px rgba(12, 12, 64, 0.04)",
          }}
          transition={{ duration: 0.2 }}
          className="relative bg-white rounded-full border border-navy/15 shadow-md px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between transition-all"
        >
          {/* Left: Attached Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 rounded-full focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan p-0.5"
            aria-label="INDO GULF Projects & Properties Home"
          >
            <div className="relative h-9 sm:h-10 w-36 sm:w-44">
              <Image
                src="/logo.png"
                alt="INDO GULF Projects & Properties"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Center Links (Desktop: 1024px and up) */}
          <nav
            className="hidden lg:flex items-center gap-0.5 xl:gap-1.5"
            aria-label="Main Navigation"
          >
            {MAIN_NAV_LINKS.map((link) => {
              const isHomeActive = link.href === "/" && pathname === "/";
              const isCurrentRoute =
                link.href !== "/" && pathname.startsWith(link.href);

              if (link.isMegaMenu) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={megaMenuOpen}
                      aria-haspopup="true"
                      className={cn(
                        "whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-full font-heading font-medium text-[15px] transition-all duration-150 flex items-center gap-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan",
                        megaMenuOpen || isCurrentRoute
                          ? "bg-amber/20 text-navy"
                          : "text-navy hover:bg-amber/15 hover:text-navy"
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200 text-amber",
                          megaMenuOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {megaMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-white rounded-3xl p-6 shadow-2xl border border-navy/10 z-50 overflow-hidden"
                        >
                          <div className="grid grid-cols-3 gap-6">
                            {PROPERTIES_MEGA_MENU.map((col) => (
                              <div key={col.title} className="space-y-3">
                                <div className="border-b border-navy/10 pb-2">
                                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy/70">
                                    {col.title}
                                  </span>
                                </div>
                                <div className="space-y-1.5">
                                  {col.items.map((item) => {
                                    const Icon =
                                      CATEGORY_ICON_MAP[item.categoryKey] ||
                                      Building2;
                                    const linkUrl = getListingUrl(
                                      item.categoryKey as ListingCategoryKey
                                    );
                                    return (
                                      <a
                                        key={item.categoryKey}
                                        href={linkUrl}
                                        className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-softgrey transition-colors"
                                      >
                                        <div className="w-7 h-7 rounded-lg bg-softgrey group-hover:bg-amber/20 flex items-center justify-center shrink-0 text-navy transition-colors">
                                          <Icon className="w-3.5 h-3.5" />
                                        </div>
                                        <div className="space-y-0.5">
                                          <div className="text-xs font-semibold text-navy group-hover:text-red flex items-center gap-1">
                                            <span>{item.title}</span>
                                            <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
                                          </div>
                                          <p className="text-[11px] text-navy/60 leading-tight">
                                            {item.description}
                                          </p>
                                        </div>
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Mega Menu Bottom Bar */}
                          <div className="mt-4 pt-3 border-t border-navy/10 flex items-center justify-between text-xs bg-softgrey -mx-6 -mb-6 p-4">
                            <div className="flex items-center gap-2 text-navy/70">
                              <ShieldCheck className="w-4 h-4 text-cyan" />
                              <span>Verified titles &amp; direct developer terms</span>
                            </div>
                            <Link
                              href="/properties"
                              className="font-bold text-navy hover:text-red flex items-center gap-1"
                            >
                              <span>View All Regional Portfolios</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-full font-heading font-medium text-[15px] transition-all duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan",
                    isHomeActive || isCurrentRoute
                      ? "bg-navy text-white shadow-xs"
                      : "text-navy hover:bg-amber/15 hover:text-navy"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Enquire Now Pill + Mobile Hamburger */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setEnquiryModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-2 font-heading font-semibold text-[13px] rounded-full bg-navy text-white hover:bg-amber hover:text-navy transition-all duration-200 shadow-xs active:scale-95 whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan cursor-pointer"
            >
              Enquire Now
            </button>

            {/* Mobile Hamburger Button (Under 1024px) */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                className="p-2 rounded-full text-navy hover:bg-softgrey transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* =========================================================================
          4. FULL-SCREEN MENU OVERLAY (Clean White Theme with Editorial Stagger)
          ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between border-b border-navy/10 px-6 sm:px-10 lg:px-14 py-5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="relative h-10 w-44">
                  <Image
                    src="/logo.png"
                    alt="INDO GULF Projects & Properties"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2.5 rounded-full bg-softgrey hover:bg-navy hover:text-white text-navy transition-colors cursor-pointer group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* Main Links Container */}
            <div className="flex-1 px-6 sm:px-10 lg:px-14 py-8 sm:py-12 max-w-5xl w-full mx-auto flex flex-col justify-center">
              <nav className="space-y-3 sm:space-y-4" aria-label="Overlay Navigation">
                {MAIN_NAV_LINKS.map((link, idx) => {
                  const isCurrent =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  if (link.isMegaMenu) {
                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.35 }}
                        className="border-b border-navy/5 pb-2"
                      >
                        <div className="flex items-center justify-between">
                          <Link
                            href="/properties"
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "font-heading font-extrabold text-2xl sm:text-4xl transition-colors",
                              isCurrent ? "text-amber" : "text-navy hover:text-amber"
                            )}
                          >
                            {link.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobilePropertiesOpen(!mobilePropertiesOpen)}
                            className="p-2 rounded-full hover:bg-softgrey text-navy cursor-pointer"
                            aria-label="Expand Properties Submenu"
                          >
                            <ChevronDown
                              className={cn(
                                "w-6 h-6 transition-transform duration-200 text-amber",
                                mobilePropertiesOpen && "rotate-180"
                              )}
                            />
                          </button>
                        </div>

                        {/* Accordion content for Properties */}
                        <AnimatePresence>
                          {mobilePropertiesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden mt-3 pl-3 sm:pl-6 space-y-4 bg-softgrey/60 rounded-2xl p-4"
                            >
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                  <Link
                                    href="/properties/uae"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-heading font-bold text-sm text-navy hover:text-amber block mb-1"
                                  >
                                    UAE Properties →
                                  </Link>
                                  <p className="text-xs text-navy/60">
                                    Offices, warehouses, villas, and investment land
                                  </p>
                                </div>
                                <div>
                                  <Link
                                    href="/properties/india"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-heading font-bold text-sm text-navy hover:text-amber block mb-1"
                                  >
                                    India (Kerala) →
                                  </Link>
                                  <p className="text-xs text-navy/60">
                                    Resort plots, township residences, commercial tech parks
                                  </p>
                                </div>
                                <div>
                                  <Link
                                    href="/properties/international"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-heading font-bold text-sm text-navy hover:text-amber block mb-1"
                                  >
                                    International Hubs →
                                  </Link>
                                  <p className="text-xs text-navy/60">
                                    Global real estate opportunities &amp; family office assets
                                  </p>
                                </div>
                              </div>
                              <div className="pt-2 border-t border-navy/10">
                                <Link
                                  href="/properties"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-xs font-bold text-navy hover:text-red flex items-center gap-1.5"
                                >
                                  <span>View Complete Regional Portfolio Catalog</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.35 }}
                      className="border-b border-navy/5 pb-2"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "block font-heading font-extrabold text-2xl sm:text-4xl transition-colors",
                          isCurrent
                            ? "text-amber"
                            : "text-navy hover:text-amber"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Section: Contact details, Socials, CTA */}
            <div className="border-t border-navy/10 px-6 sm:px-10 lg:px-14 py-6 bg-softgrey/50">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                {/* Contact information */}
                <div className="space-y-1.5 text-xs sm:text-sm text-navy/80">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber shrink-0" />
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="font-semibold text-navy hover:text-amber"
                    >
                      {COMPANY.displayPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan shrink-0" />
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="hover:text-amber"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-navy/60">
                    <MapPin className="w-4 h-4 text-red shrink-0" />
                    <span>Tower 2, HiLITE Business Park, Calicut, Kerala</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {SOCIAL_LIST.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white hover:bg-navy hover:text-white text-navy flex items-center justify-center border border-navy/10 shadow-2xs transition-colors text-xs font-bold"
                      aria-label={social.name}
                    >
                      {social.name.slice(0, 2)}
                    </a>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-heading font-semibold text-xs sm:text-sm shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setEnquiryModalOpen(true);
                    }}
                    className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-navy text-white hover:bg-amber hover:text-navy font-heading font-semibold text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4 text-amber" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Consultation Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        serviceOrProjectTitle="General Investment & Acquisition"
        category="Priority Property Enquiry"
      />
    </>
  );
}
