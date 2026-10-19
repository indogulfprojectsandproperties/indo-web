import React from "react";
import { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { BlockPattern } from "@/components/BlockPattern";

export const metadata: Metadata = {
  title: "Projects & Landmark Developments",
  description:
    "Explore our signature projects: Banasura Dam Resort, Markaz Knowledge City Villa Enclave, Karappuzha Waterfront Villas, and upcoming commercial landmarks by INDO GULF.",
};

export default function ProjectsPage() {
  const activeProjects = PROJECTS.filter((p) => p.status !== "Upcoming Launch");
  const upcomingProjects = PROJECTS.filter((p) => p.status === "Upcoming Launch");

  return (
    <div className="min-h-screen bg-softgrey">
      {/* Light Hero Header */}
      <section className="bg-softgrey text-navy pt-28 sm:pt-36 pb-16 relative overflow-hidden border-b border-navy/5">
        <BlockPattern variant="corner" className="absolute top-12 right-12 hidden md:block opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-navy text-xs font-bold border border-navy/10 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span>Flagship Real Estate Developments</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy">
              Signature Projects &amp; Master-Planned Enclaves
            </h1>
            <p className="text-sm sm:text-base text-navy/75 leading-relaxed">
              Explore our landmark eco-resorts, smart township residences, and waterfront enclaves
              engineered for capital appreciation and managed rental yields.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Active Developments */}
        <div className="space-y-6">
          <div className="pb-4 border-b border-navy/10 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-amber" />
                <h2 className="font-heading font-bold text-2xl text-navy">
                  Active Developments
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-navy/70 mt-1">
                Currently under active construction and booking across Wayanad and Kozhikode.
              </p>
            </div>
            <span className="text-xs font-bold text-navy px-3 py-1 bg-white rounded-full border border-navy/10">
              {activeProjects.length} Projects Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        {upcomingProjects.length > 0 && (
          <div className="space-y-6">
            <div className="pb-4 border-b border-navy/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-red" />
                <h2 className="font-heading font-bold text-2xl text-navy">
                  Upcoming Projects &amp; Pre-Launch Registrations
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-navy/70 mt-1">
                Register your interest early for prime ground-floor retail and corporate suites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
