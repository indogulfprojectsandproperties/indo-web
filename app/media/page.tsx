"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Video,
  Film,
  Newspaper,
  Tv,
  ArrowRight,
  Clock,
} from "lucide-react";
import {
  MEDIA_PHOTOS,
  MEDIA_VIDEOS,
  MEDIA_REELS,
  MEDIA_VLOGS,
  MEDIA_ARTICLES,
} from "@/data/media";
import { BlockPattern } from "@/components/BlockPattern";
import { GalleryLightbox } from "@/components/GalleryLightbox";

import { PageHeader } from "@/components/PageHeader";

type MediaTab = "photos" | "videos" | "reels" | "vlogs" | "articles";

export default function MediaHubPage() {
  const [activeTab, setActiveTab] = useState<MediaTab>("photos");

  const tabs = [
    { key: "photos", label: "Photo Gallery", icon: Camera, count: MEDIA_PHOTOS.length },
    { key: "videos", label: "Video Gallery", icon: Video, count: MEDIA_VIDEOS.length },
    { key: "reels", label: "Stories & Reels", icon: Film, count: MEDIA_REELS.length },
    { key: "vlogs", label: "Property Vlogs", icon: Tv, count: MEDIA_VLOGS.length },
    { key: "articles", label: "News & Articles", icon: Newspaper, count: MEDIA_ARTICLES.length },
  ];

  return (
    <div className="min-h-screen bg-softgrey">
      {/* 50-60vh Cinematic Header Banner */}
      <PageHeader
        title="Visual Galleries, Walkthroughs & Insights"
        subtitle="Explore on-ground site photographs, drone cinematography, short-form reels, market research articles, and video walkthroughs across our developments."
        bannerImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=85"
        badge="Media & Insights Center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media Hub" },
        ]}
      />

      {/* Tabs Navigation Bar (Light Theme) */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-navy/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar gap-2 sm:gap-4 py-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key as MediaTab)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-navy text-white shadow-xs"
                      : "text-navy/70 hover:text-navy hover:bg-softgrey"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-amber" : "text-navy/50"}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive ? "bg-white/20 text-white" : "bg-softgrey text-navy/60"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* TAB 1: Photo Gallery */}
        {activeTab === "photos" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-navy/10">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                On-Site Project &amp; Architectural Photography
              </h2>
              <span className="text-xs text-navy/60">Click any photo for full lightbox</span>
            </div>

            <GalleryLightbox
              gallery={MEDIA_PHOTOS.map((p) => ({
                url: p.image,
                caption: `${p.title} (${p.location})`,
              }))}
            />
          </div>
        )}

        {/* TAB 2: Video Gallery */}
        {activeTab === "videos" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-navy/10">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                Project Drone Cinematography &amp; Site Progress
              </h2>
              <span className="text-xs text-navy/60">Stream high-definition walkthroughs</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MEDIA_VIDEOS.map((vid) => (
                <div
                  key={vid.id}
                  className="bg-white rounded-3xl overflow-hidden border border-navy/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative aspect-video w-full bg-softgrey overflow-hidden">
                    <iframe
                      src={vid.embedUrl}
                      title={vid.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-navy/60">
                      <span className="capitalize font-semibold text-red">
                        {vid.type.replace("_", " ")}
                      </span>
                      <span>Duration: {vid.duration}</span>
                    </div>
                    <h3 className="font-heading font-bold text-base text-navy line-clamp-2">
                      {vid.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Stories & Reels */}
        {activeTab === "reels" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-navy/10">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                Short-Form Stories &amp; Social Reels
              </h2>
              <span className="text-xs text-navy/60">Optimized vertical video formats</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {MEDIA_REELS.map((reel) => (
                <div
                  key={reel.id}
                  className="bg-white rounded-3xl overflow-hidden border border-navy/10 shadow-xs p-4 space-y-3"
                >
                  <div className="relative aspect-9/16 max-h-[500px] w-full bg-softgrey rounded-2xl overflow-hidden shadow-inner">
                    <iframe
                      src={reel.embedUrl}
                      title={reel.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-amber text-navy">
                      {reel.platform.replace("_", " ")}
                    </span>
                    <h4 className="font-heading font-bold text-sm text-navy">{reel.title}</h4>
                    <p className="text-xs text-navy/70">{reel.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Property Vlogs */}
        {activeTab === "vlogs" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-navy/10">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                In-Depth Property Investment Vlogs
              </h2>
              <span className="text-xs text-navy/60">Hosted by INDO GULF Advisory Specialists</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MEDIA_VLOGS.map((vlog) => (
                <div
                  key={vlog.id}
                  className="bg-white rounded-3xl overflow-hidden border border-navy/10 shadow-xs hover:shadow-xl transition-all duration-300 p-6 space-y-4"
                >
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-softgrey shadow-inner">
                    <iframe
                      src={vlog.embedUrl}
                      title={vlog.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-navy/60">
                      <span className="font-bold text-navy">{vlog.presenter}</span>
                      <span>Run Time: {vlog.duration}</span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-navy">{vlog.title}</h3>
                    <p className="text-xs text-navy/75 leading-relaxed">{vlog.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: Real Estate News & Articles */}
        {activeTab === "articles" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-navy/10">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                Real Estate News, Market Insights &amp; NRI Guides
              </h2>
              <span className="text-xs text-navy/60">In-depth market research</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MEDIA_ARTICLES.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-navy/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-white/95 text-navy border border-navy/10 shadow-xs">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-4 text-xs text-navy/50">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{article.readTime}</span>
                        </span>
                        <span>•</span>
                        <span>{article.publishedDate}</span>
                      </div>

                      <h3 className="font-heading font-bold text-lg text-navy group-hover:text-red transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-xs text-navy/70 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-navy/5 mt-4">
                    <Link
                      href={`/media/articles/${article.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-navy hover:text-red transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
