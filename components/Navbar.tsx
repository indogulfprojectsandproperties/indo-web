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
} from "lucide-react";
import { MAIN_NAV_LINKS, PROPERTIES_MEGA_MENU } from "@/lib/nav";
import { getListingUrl, ListingCategoryKey } from "@/lib/listing-links";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false);

  // Track window scroll
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setIsScrolled(y > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On home page: navbar is hidden when scrollY <= 80px.
  // On all other pages: navbar is always visible.
  const isNavbarVisible = !isHomePage || scrollY > 80;

  // Lock body scroll when mobile menu is open
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

  // Close menus on path navigation
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setMobilePropertiesOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Floating Menu Button on Home Page when navbar is hidden */}
      <AnimatePresence>
        {isHomePage && !isNavbarVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-4 right-4 sm:top-6 sm:right-8 z-40"
          >
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white hover:bg-navy text-navy hover:text-white border border-navy/15 shadow-md transition-all duration-200 cursor-pointer group"
              aria-label="Open navigation menu"
            >
              <Menu className="w-4 h-4 text-amber group-hover:text-amber" />
              <span className="font-heading font-semibold text-xs tracking-wide">Menu</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed white gradient strip behind navbar - fades out when navbar is hidden */}
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

      {/* Floating Pill Container - Slides in on scroll on Home, always visible on other pages */}
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
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          animate={{
            scale: isScrolled ? 0.98 : 1,
            boxShadow: isScrolled
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
                        megaMenuOpen
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
                    isHomeActive
                      ? "bg-navy text-white shadow-xs"
                      : "text-navy hover:bg-amber/15 hover:text-navy"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Single Navy Pill "Enquire Now" */}
          <div className="hidden xl:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 font-heading font-semibold text-[13px] rounded-full bg-navy text-white hover:bg-amber hover:text-navy transition-all duration-200 shadow-xs active:scale-95 whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Hamburger Button (Under 1024px) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-full text-navy hover:bg-softgrey transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Full-Screen Overlay Menu (White theme) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between border-b border-navy/10 pb-4">
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
                className="p-2.5 rounded-full bg-softgrey hover:bg-navy hover:text-white text-navy transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links List with Accordion for Properties */}
            <div className="py-6 space-y-2 flex-1 overflow-y-auto">
              {MAIN_NAV_LINKS.map((link) => {
                if (link.isMegaMenu) {
                  return (
                    <div key={link.label} className="border-b border-navy/5 pb-2">
                      <button
                        type="button"
                        onClick={() =>
                          setMobilePropertiesOpen(!mobilePropertiesOpen)
                        }
                        className="w-full flex items-center justify-between py-3 text-lg font-heading font-bold text-navy hover:text-red text-left cursor-pointer"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 transition-transform duration-200 text-amber",
                            mobilePropertiesOpen && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {mobilePropertiesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3 pr-2 py-2 space-y-4 bg-softgrey/60 rounded-2xl mb-2"
                          >
                            {PROPERTIES_MEGA_MENU.map((section) => (
                              <div key={section.title} className="space-y-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-navy/60 block px-2">
                                  {section.title}
                                </span>
                                {section.items.map((sub) => (
                                  <a
                                    key={sub.categoryKey}
                                    href={getListingUrl(sub.categoryKey)}
                                    className="flex items-center justify-between px-2 py-2 rounded-lg text-sm font-medium text-navy hover:bg-white hover:text-red transition-colors"
                                  >
                                    <span>{sub.title}</span>
                                    <ExternalLink className="w-3.5 h-3.5 opacity-40" />
                                  </a>
                                ))}
                              </div>
                            ))}

                            <div className="pt-2 border-t border-navy/10 px-2">
                              <Link
                                href="/properties"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xs font-bold text-navy hover:text-red underline flex items-center gap-1"
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

                const isHomeActive = link.href === "/" && pathname === "/";

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block py-3 text-lg font-heading font-bold transition-colors border-b border-navy/5",
                      isHomeActive
                        ? "text-red"
                        : "text-navy hover:text-amber"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Button inside Mobile Overlay */}
            <div className="pt-4 border-t border-navy/10 space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-heading font-bold text-sm bg-navy text-white hover:bg-amber hover:text-navy transition-all shadow-md"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-amber" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
