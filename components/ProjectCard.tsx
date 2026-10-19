"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";
import { BlockPattern } from "./BlockPattern";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imgSrc, setImgSrc] = useState(project.heroImage);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-navy/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 relative">
      <BlockPattern variant="card" />

      {/* Image container */}
      <div>
        <div className="relative h-64 w-full overflow-hidden bg-slate-200">
          <Image
            src={imgSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/placeholder-property.svg")}
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

          {/* Status Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider text-white bg-navy shadow-xs border border-white/20">
              {project.status}
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold text-navy bg-amber shadow-xs">
              {project.category}
            </span>
          </div>

          {/* Completion Target */}
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-navy border border-navy/10 shadow-xs">
            Handover: <strong className="text-cyan-dark">{project.completionYear}</strong>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-1.5 text-xs text-navy/60 font-medium">
            <MapPin className="w-3.5 h-3.5 text-red shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>

          <h3 className="font-heading font-bold text-navy text-xl group-hover:text-red transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-xs text-navy/70 line-clamp-2 leading-relaxed">
            {project.overview}
          </p>

          {/* Highlights Mini List */}
          <div className="space-y-1.5 pt-2">
            {project.highlights.slice(0, 2).map((h) => (
              <div key={h.title} className="flex items-start gap-2 text-xs text-navy/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0 mt-0.5" />
                <span className="line-clamp-1 font-medium">{h.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="p-6 pt-0">
        <div className="pt-4 border-t border-navy/10 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-navy/50 block">Price Range</span>
            <span className="text-xs font-bold text-navy">
              {project.plotsAndPricing[0]?.startingPrice.split("*")[0] || "Price on Application"}
            </span>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-heading font-bold text-xs text-white bg-navy hover:bg-navy-700 transition-colors shadow-xs"
          >
            <span>Explore Project</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber" />
          </Link>
        </div>
      </div>
    </div>
  );
}
