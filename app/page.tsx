import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Building2,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { CinematicHero } from "@/components/CinematicHero";
import { INTRO_DATA } from "@/data/intro";
import { FEATURED_PROPERTIES } from "@/data/featured-properties";
import { PropertyCard } from "@/components/PropertyCard";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { StatsStrip } from "@/components/StatsStrip";
import { PresenceTeaser } from "@/components/PresenceTeaser";
import { EnquiryForm } from "@/components/EnquiryForm";
import { BlockPattern } from "@/components/BlockPattern";
import { COMPANY } from "@/lib/company";
import { getGeneralListingUrl } from "@/lib/listing-links";

export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      {/* 1. Cinematic Brand Intro (SOBHA-inspired full-screen intro) */}
      <CinematicHero />

      {/* 2. Transition to Rest of Site: About Indo Gulf Teaser + Stats Strip */}
      <section
        id="intro-transition"
        className="bg-white relative pt-16 sm:pt-20 border-b border-navy/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          {/* Boundary Divider with BlockPattern Motif */}
          <div className="flex items-center justify-between border-b border-navy/10 pb-6 mb-10">
            <div className="flex items-center gap-3">
              <BlockPattern variant="default" />
              <span className="text-xs uppercase tracking-[0.14em] font-semibold text-navy/70">
                {INTRO_DATA.aboutTeaser.badge}
              </span>
            </div>
            <Link
              href={INTRO_DATA.aboutTeaser.linkHref}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-navy hover:text-amber transition-colors group"
            >
              <span>{INTRO_DATA.aboutTeaser.linkText}</span>
              <ArrowRight className="w-4 h-4 text-amber group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* About Teaser Content */}
          <div className="max-w-3xl">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-[-0.02em] leading-tight">
              {INTRO_DATA.aboutTeaser.heading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-navy-body leading-relaxed">
              {INTRO_DATA.aboutTeaser.paragraph}
            </p>
          </div>
        </div>

        {/* Existing Stats Strip */}
        <StatsStrip />
      </section>

      {/* 3. Featured Properties Section */}
      <section className="py-20 lg:py-28 bg-softgrey relative border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-navy text-xs uppercase tracking-[0.12em] font-semibold border border-navy/10 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
                <span>Prime Curated Inventory</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-[-0.02em]">
                Featured Properties
              </h2>
              <p className="text-base text-navy-body max-w-xl leading-relaxed">
                Handpicked residential luxury homes, commercial towers, industrial warehouses, and
                prime land parcels in Kerala and the UAE.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={getGeneralListingUrl("home-featured-view-all")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold text-xs sm:text-sm text-navy bg-white hover:bg-navy hover:text-white border border-navy/10 shadow-xs transition-all duration-200 group"
              >
                <span>View All on Listing Point</span>
                <ExternalLink className="w-4 h-4 text-amber group-hover:text-amber" />
              </a>
            </div>
          </div>

          {/* 6 Property Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Platform Redirect Callout */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-navy/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-softgrey flex items-center justify-center text-navy shrink-0 border border-navy/10">
                <Building2 className="w-6 h-6 text-cyan-dark" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm sm:text-base text-navy">
                  Looking for more options or custom plot requirements?
                </p>
                <p className="text-xs text-navy-body">
                  Search 2,000+ verified listings across UAE &amp; India directly on our dedicated platform.
                </p>
              </div>
            </div>

            <a
              href={getGeneralListingUrl("home-banner-browse")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold text-xs text-navy bg-amber hover:bg-amber-dark transition-all duration-200 shrink-0 shadow-xs"
            >
              <span>Explore MyListingPoint</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Featured Projects Section */}
      <section className="py-20 lg:py-28 bg-white relative border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-softgrey text-navy text-xs uppercase tracking-[0.12em] font-semibold border border-navy/10 shadow-xs">
                <BlockPattern variant="default" />
                <span>Signature Landmark Developments</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-[-0.02em]">
                Flagship Projects
              </h2>
              <p className="text-base text-navy-body max-w-xl leading-relaxed">
                Exclusive master-planned holiday resort developments and modern smart township enclaves
                conceptualized and delivered by INDO GULF.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold text-xs sm:text-sm text-navy bg-softgrey hover:bg-navy hover:text-white border border-navy/10 transition-all duration-200"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-amber" />
            </Link>
          </div>

          {/* 3 Featured Projects Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Presence in India and UAE */}
      <PresenceTeaser />

      {/* 6. Customer Reviews and Testimonials Carousel */}
      <section className="py-20 lg:py-28 bg-softgrey relative overflow-hidden border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-dark">
              Client Trust &amp; Testimonials
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy tracking-[-0.02em]">
              Trusted by Gulf NRIs &amp; Global Investors
            </h2>
            <p className="text-base text-navy-body leading-relaxed">
              Read how our transparent title verification, personalized advisory, and managed rental
              yields deliver enduring peace of mind.
            </p>
          </div>

          <ReviewCarousel />
        </div>
      </section>

      {/* 7. Quick Enquiry Form & WhatsApp Section */}
      <section id="quick-enquiry" className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content / WhatsApp Promotion */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-softgrey text-navy text-xs font-bold border border-navy/10 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <span>Personalized Consultation</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy leading-tight">
                Plan Your Property Investment With Our Senior Advisors
              </h2>

              <p className="text-sm sm:text-base text-navy/70 leading-relaxed">
                Whether you are exploring holiday home revenue at Banasura Dam, luxury township villas in
                Markaz Knowledge City, or high-clearance warehouses in the UAE, our experienced team provides
                end-to-end guidance.
              </p>

              {/* Value Points */}
              <div className="space-y-3 pt-2">
                {[
                  "100% legal title scrutiny and statutory verification",
                  "Dedicated NRI desk for remote paperwork & registration",
                  "Institutional valuation and transparent pricing",
                  "Direct developer access with zero hidden markups",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy/85 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Dedicated WhatsApp Box (Light Theme) */}
              <div className="p-6 rounded-3xl bg-softgrey border border-navy/10 space-y-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-navy">
                      Instant WhatsApp Consultation
                    </h4>
                    <p className="text-xs text-navy/70">
                      Connect with our leadership desk directly on {COMPANY.displayPhone}
                    </p>
                  </div>
                </div>

                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-full font-heading font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  <span>Chat on WhatsApp Now</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>

            {/* Right Quick Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm sourcePage="/" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
