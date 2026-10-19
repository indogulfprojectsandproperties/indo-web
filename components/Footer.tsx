import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Shield,
  ExternalLink,
} from "lucide-react";
import { COMPANY } from "@/lib/company";
import { SOCIAL_LIST } from "@/lib/socials";
import { BlockPattern } from "./BlockPattern";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-navy relative overflow-hidden border-t border-navy/10">
      {/* Brand Motif Accent Along Top Edge */}
      <BlockPattern variant="footer" />

      {/* Background Decorative Ambient Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy/10">
          {/* Column 1: Company Profile & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-48 sm:w-56 h-12">
                <Image
                  src="/logo.png"
                  alt={COMPANY.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-navy/70 text-sm leading-relaxed max-w-sm">
              Connecting high-value real estate opportunities across India (Kerala) and the UAE.
              Specializing in resort developments, luxury residential villas, grade-A commercial
              spaces, and industrial logistics parks.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-dark mb-3">
                Connect With Us
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {SOCIAL_LIST.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-9 h-9 rounded-xl bg-softgrey hover:bg-navy hover:text-white text-navy border border-navy/10 flex items-center justify-center transition-all duration-200 group text-xs font-semibold shadow-2xs"
                  >
                    <span className="capitalize">{social.name.slice(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-navy text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-amber" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-navy/75">
              <li>
                <Link href="/" className="hover:text-amber-dark hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-dark hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-dark hover:underline transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-dark hover:underline transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-amber-dark hover:underline transition-colors">
                  Media &amp; Articles
                </Link>
              </li>
              <li>
                <Link href="/list-your-property" className="hover:text-amber-dark hover:underline transition-colors">
                  List Your Property
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-dark hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Property Hubs */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-navy text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-cyan" />
              Property Hubs
            </h4>
            <ul className="space-y-2 text-sm text-navy/75">
              <li>
                <Link href="/properties/uae" className="hover:text-cyan-dark transition-colors flex items-center gap-1">
                  <span>UAE Properties</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/properties/india" className="hover:text-cyan-dark transition-colors flex items-center gap-1">
                  <span>Kerala &amp; India Metros</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/properties/international" className="hover:text-cyan-dark transition-colors flex items-center gap-1">
                  <span>International Properties</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li className="pt-2 border-t border-navy/10">
                <a
                  href="https://mylistingpoint.com?utm_source=indogulf&utm_medium=website&utm_campaign=footer-hub"
                  className="text-amber-dark font-bold hover:underline text-xs flex items-center gap-1"
                >
                  <span>Browse on MyListingPoint</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-navy text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-xs bg-red" />
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs text-navy/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {COMPANY.office.addressLine1},<br />
                  {COMPANY.office.addressLine2}, {COMPANY.office.city},<br />
                  {COMPANY.office.state} {COMPANY.office.pincode}, {COMPANY.office.country}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-red transition-colors font-medium">
                  {COMPANY.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-red transition-colors font-medium">
                  {COMPANY.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 border-t border-navy/10">
                <Clock className="w-4 h-4 text-navy/60 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-navy">{COMPANY.businessHours.days}</p>
                  <p className="text-navy/70">{COMPANY.businessHours.hours}</p>
                  <p className="text-[10px] text-navy/50">{COMPANY.businessHours.note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UAE Coming Soon Strip (Light Theme) */}
        <div className="mt-8 p-6 rounded-2xl bg-softgrey border border-navy/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-3 h-3 rounded-full bg-amber animate-pulse shrink-0" />
            <div>
              <p className="text-xs font-bold text-navy uppercase tracking-wider">
                {COMPANY.uaeOffice.title}
              </p>
              <p className="text-xs text-navy/70">
                Serving Dubai, Abu Dhabi &amp; Northern Emirates through our direct Gulf desk.
              </p>
            </div>
          </div>

          <a
            href={COMPANY.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>Connect with UAE Desk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bottom Bar: Copyright & Platform Notice */}
        <div className="mt-8 pt-6 border-t border-navy/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-navy/60">
          <p>
            &copy; {currentYear} {COMPANY.name}. All rights reserved. Registered in India &amp; UAE.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-cyan" />
              Domain: <strong className="text-navy">{COMPANY.domain}</strong>
            </span>
            <span>•</span>
            <span>All property listings hosted on mylistingpoint.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
