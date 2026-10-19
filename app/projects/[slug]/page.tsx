import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  MapPin,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { EnquiryForm } from "@/components/EnquiryForm";
import { BlockPattern } from "@/components/BlockPattern";
import { COMPANY } from "@/lib/company";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | INDO GULF Projects`,
    description: project.metaDescription || project.overview,
    openGraph: {
      title: project.title,
      description: project.overview,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-softgrey pb-20">
      {/* 1. Light Hero Header */}
      <section className="bg-softgrey text-navy pt-28 sm:pt-36 pb-12 relative overflow-hidden border-b border-navy/5">
        <BlockPattern variant="corner" className="absolute top-12 right-12 hidden md:block opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy/70 hover:text-navy hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </Link>

          <div className="max-w-4xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-navy shadow-xs">
                {project.status}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-navy bg-amber shadow-xs">
                {project.category}
              </span>
              <span className="text-navy/60 text-xs font-medium">• Handover: {project.completionYear}</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy leading-tight">
              {project.title}
            </h1>

            <div className="flex items-center gap-2 text-navy/70 text-sm">
              <MapPin className="w-4 h-4 text-red shrink-0" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Showcase Photo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        <div className="relative h-[320px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-softgrey">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Overview, Highlights, Gallery, Video, Maps, Pricing */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-amber" />
                <h2 className="font-heading font-bold text-2xl text-navy">
                  Project Overview
                </h2>
              </div>
              <p className="text-base text-navy font-medium leading-relaxed">
                {project.overview}
              </p>
              <div className="space-y-3 pt-2 text-sm text-navy/70 leading-relaxed border-t border-navy/10">
                {project.longDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-xs space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-cyan" />
                <h2 className="font-heading font-bold text-2xl text-navy">
                  Key Architectural &amp; Investment Highlights
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="p-5 rounded-2xl bg-softgrey border border-navy/10 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-dark" />
                      <h4 className="font-heading font-bold text-sm text-navy">{h.title}</h4>
                    </div>
                    <p className="text-xs text-navy/70 leading-relaxed">{h.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery (Lightbox) */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-navy/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-xs bg-red" />
                  <h2 className="font-heading font-bold text-2xl text-navy">
                    Photo &amp; Architectural Gallery
                  </h2>
                </div>
                <span className="text-xs text-navy/60 font-medium">Click to view full screen</span>
              </div>

              <GalleryLightbox gallery={project.gallery} />
            </div>

            {/* Price & Plot Details Table */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-navy/10 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-xs bg-amber" />
                  <h2 className="font-heading font-bold text-2xl text-navy">
                    Plot &amp; Villa Configuration Plans
                  </h2>
                </div>
                <span className="text-[11px] font-semibold text-red px-2.5 py-1 bg-red/10 rounded-full">
                  TODO: Pricing Subject to Final Allotment
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-navy/10 text-navy/60">
                      <th className="py-3 px-4 font-bold">Unit Type</th>
                      <th className="py-3 px-4 font-bold">Size / Area</th>
                      <th className="py-3 px-4 font-bold">Starting Price*</th>
                      <th className="py-3 px-4 font-bold">Status</th>
                      <th className="py-3 px-4 font-bold">Key Specifications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy/10 text-navy">
                    {project.plotsAndPricing.map((plan, idx) => (
                      <tr key={idx} className="hover:bg-softgrey/60 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-navy">{plan.unitType}</td>
                        <td className="py-3.5 px-4 text-navy/70">{plan.size}</td>
                        <td className="py-3.5 px-4 font-heading font-bold text-navy">
                          {plan.startingPrice}
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                              plan.status === "Available"
                                ? "bg-emerald-100 text-emerald-800"
                                : plan.status === "Few Remaining"
                                ? "bg-amber-100 text-amber-900"
                                : "bg-navy/10 text-navy"
                            }`}
                          >
                            {plan.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-navy/70 text-xs">{plan.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Video Walkthrough (YouTube Embed) */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-xs space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-red" />
                <h2 className="font-heading font-bold text-2xl text-navy">
                  Video Walkthrough &amp; Site Drone Tour
                </h2>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-softgrey border border-navy/10 shadow-md">
                <iframe
                  src={project.youtubeEmbedUrl}
                  title={`${project.title} Video Walkthrough`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            {/* Map Embed Location */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-navy/10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red" />
                  <h2 className="font-heading font-bold text-2xl text-navy">
                    Geographic Location &amp; Site Map
                  </h2>
                </div>
                <span className="text-xs text-navy/60">{project.location}</span>
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden border border-navy/10 shadow-inner">
                <iframe
                  src={project.googleMapsEmbedUrl}
                  title={`${project.title} Location Map`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Project-Specific Enquiry Form & Instant Support */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              <EnquiryForm
                title={`Enquire for ${project.title.split(" ")[0]}`}
                subtitle="Request full architectural blueprints, floor plans, and managed revenue models."
                initialInterest={project.title}
                initialProject={project.title}
                sourcePage={`/projects/${project.slug}`}
                compact
              />

              {/* Direct Call & WhatsApp Panel */}
              <div className="p-6 rounded-3xl bg-white border border-navy/10 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-softgrey border border-navy/10 text-navy flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cyan-dark" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-navy/60 uppercase">Direct Sales Line</span>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="font-heading font-bold text-base text-navy hover:text-red transition-colors block"
                    >
                      {COMPANY.displayPhone}
                    </a>
                  </div>
                </div>

                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full font-heading font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
