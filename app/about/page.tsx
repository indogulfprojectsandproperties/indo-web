import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import {
  ShieldCheck,
  TrendingUp,
  Globe2,
  Users,
  Compass,
  Building2,
  Target,
} from "lucide-react";
import { BlockPattern } from "@/components/BlockPattern";
import { TEAM_MEMBERS } from "@/data/team";
import { PresenceTeaser } from "@/components/PresenceTeaser";

export const metadata: Metadata = {
  title: "About Us | Company Profile, Mission & Leadership",
  description:
    "Learn about INDO GULF Projects & Properties, our founding vision, leadership team, and corporate presence bridging real estate across Kerala and the UAE.",
};

const WHY_CHOOSE_US = [
  {
    icon: ShieldCheck,
    title: "100% Verified Legal Scrutiny",
    description:
      "Every property title, land survey, and municipal permit is verified by senior legal counsel before listing.",
  },
  {
    icon: Globe2,
    title: "Cross-Border India & UAE Synergy",
    description:
      "A seamless bridge for Non-Resident Indians (NRIs) and global family offices looking to acquire assets in Kerala and Dubai.",
  },
  {
    icon: Building2,
    title: "Flagship Landmark Developments",
    description:
      "Creators of master-planned holiday resort enclaves and smart township residences in prime growth corridors.",
  },
  {
    icon: TrendingUp,
    title: "Managed Revenue & High Yields",
    description:
      "Turnkey hospitality management pooling models delivering hands-off 8-12% ROI for vacation home owners.",
  },
  {
    icon: Compass,
    title: "Direct Pricing with Zero Markups",
    description:
      "Strict transparency with direct developer contracts, fair valuations, and uncompromised commercial ethics.",
  },
  {
    icon: Users,
    title: "End-to-End Asset Stewardship",
    description:
      "From power-of-attorney registration support to ongoing tenancy, utility billing, and maintenance preservation.",
  },
];

import { PageHeader } from "@/components/PageHeader";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-softgrey">
      {/* 50-60vh Cinematic Header Banner */}
      <PageHeader
        title="Building Enduring Wealth Across Borders"
        subtitle="Founded on the pillars of uncompromised transparency, architectural distinction, and deep geographic roots in Kerala and the United Arab Emirates."
        bannerImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
        badge="About INDO GULF Projects & Properties"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* 2. Company Profile & Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-navy text-xs font-bold border border-navy/10 shadow-xs">
              <BlockPattern variant="default" />
              <span>Company Profile</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy">
              Your Trusted Cross-Border Real Estate Partner
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-navy/75 leading-relaxed">
              <p>
                <strong>INDO GULF Projects &amp; Properties</strong> was established to bridge the immense
                potential between the rapid infrastructure growth in Kerala and the vibrant commercial
                dynamism of the United Arab Emirates.
              </p>
              <p>
                Operating out of our India corporate headquarters in the HiLITE Business Park, Kozhikode,
                and serving the Gulf region through our dedicated UAE desk, we specialize in high-value
                resort communities, luxury residential villas, Grade-A IT commercial spaces, and logistics
                warehousing parks.
              </p>
              <p>
                Whether assisting an NRI doctor in Dubai acquiring a mist-covered villa overlooking Banasura
                Sagar Dam or helping a logistics conglomerate secure multi-acre highway warehousing in South
                India, we bring uncompromising due diligence and personal integrity to every handshake.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-96 sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-softgrey">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Corporate Headquarters"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold text-amber uppercase tracking-wider">
                  Operational Center
                </span>
                <p className="font-heading font-bold text-lg text-white">
                  HiLITE Business Park, Kozhikode, Kerala
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision (Light Theme) */}
      <section className="bg-white py-16 border-y border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-softgrey rounded-3xl p-8 sm:p-10 border border-navy/10 relative space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-amber/20 text-navy flex items-center justify-center font-bold border border-amber/30">
                <Target className="w-6 h-6 text-navy" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy">Our Mission</h3>
              <p className="text-sm text-navy/75 leading-relaxed">
                To simplify and elevate cross-border real estate acquisitions for investors and homeowners
                through rigorous legal title vetting, curated architectural excellence, and turnkey asset
                management that delivers predictable, generational value.
              </p>
            </div>

            {/* Vision (Light Theme) */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 relative space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-cyan/15 text-cyan-dark flex items-center justify-center font-bold border border-cyan/30">
                <Compass className="w-6 h-6 text-cyan-dark" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy">Our Vision</h3>
              <p className="text-sm text-navy/75 leading-relaxed">
                To be recognized as the premier Indo-Gulf real estate brand, synonymous with institutional
                credibility, sustainable eco-resort master developments, and seamless NRI investment facilitation
                across India and the GCC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Icon Grid) */}
      <section className="py-20 bg-softgrey border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red">
              The Indo Gulf Advantage
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy">
              Why Discerning Investors Choose Us
            </h2>
            <p className="text-sm text-navy/70">
              Six foundational commitments that protect your capital and guarantee peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-navy/10 shadow-xs hover:shadow-lg transition-all duration-300 space-y-3 relative group"
                >
                  <BlockPattern variant="card" />
                  <div className="w-12 h-12 rounded-2xl bg-softgrey group-hover:bg-navy transition-colors flex items-center justify-center text-navy group-hover:text-amber border border-navy/5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy group-hover:text-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-navy/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Our Team */}
      <section className="py-20 bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-dark">
                Executive Leadership
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy">
                Our Leadership Team
              </h2>
              <p className="text-sm text-navy/70 max-w-xl">
                Seasoned real estate strategists, legal counsels, and civil engineers steering INDO GULF.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-navy/50 bg-softgrey px-3 py-1 rounded-full border border-navy/5">
              TODO: Finalizing Executive Bios
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden border border-navy/10 shadow-xs flex flex-col group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 w-full bg-softgrey overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy">{member.name}</h3>
                    <p className="text-xs font-semibold text-red">{member.role}</p>
                    <p className="text-xs text-navy/70 leading-relaxed mt-2">{member.bio}</p>
                  </div>

                  {member.isPlaceholder && (
                    <span className="text-[10px] text-navy/40 pt-3 block border-t border-navy/10">
                      *Official photo &amp; bio placeholder
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dual Presence in India and UAE */}
      <PresenceTeaser />
    </div>
  );
}
