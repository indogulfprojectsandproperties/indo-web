import React from "react";
import { SOCIAL_LIST } from "@/lib/socials";
import { ArrowUpRight, Share2 } from "lucide-react";
import { BlockPattern } from "./BlockPattern";

export function ConnectWithUs({ className }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-lg relative overflow-hidden ${
        className || ""
      }`}
    >
      <BlockPattern variant="card" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-navy/10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-xs bg-amber" />
            <span className="text-xs font-bold uppercase tracking-wider text-navy/60">
              Official Media Channels
            </span>
          </div>
          <h3 className="font-heading font-bold text-navy text-2xl">Connect With Us</h3>
          <p className="text-xs sm:text-sm text-navy/70">
            Follow our verified social accounts for weekly site progress videos, market insights, and new project launches.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-softgrey text-navy text-xs font-semibold">
          <Share2 className="w-3.5 h-3.5 text-cyan" />
          <span>Active Across 5 Platforms</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6">
        {SOCIAL_LIST.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-2xl bg-softgrey hover:bg-navy hover:text-white border border-navy/10 transition-all duration-200 flex flex-col justify-between h-28"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-navy/60 group-hover:text-amber">
                {social.name}
              </span>
              <ArrowUpRight className="w-4 h-4 text-navy/40 group-hover:text-cyan transition-colors" />
            </div>

            <div>
              <p className="font-heading font-bold text-sm text-navy group-hover:text-white line-clamp-1">
                {social.handle}
              </p>
              <span className="text-[10px] text-navy/50 group-hover:text-white/60">
                Official Account
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
