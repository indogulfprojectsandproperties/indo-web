import React from "react";
import { COMPANY } from "@/lib/company";

export function StatsStrip() {
  return (
    <section className="bg-white py-14 sm:py-16 border-b border-navy/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-navy/10">
          {COMPANY.stats.map((stat, i) => (
            <div key={stat.label} className={`space-y-2 ${i > 0 ? "pt-4 md:pt-0" : ""}`}>
              <div className="flex items-center justify-center">
                <span className="font-heading font-extrabold text-4xl sm:text-5xl text-amber tabular-nums tracking-[-0.03em]">
                  {stat.value}
                </span>
              </div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-navy">{stat.label}</h4>
              <p className="text-xs sm:text-sm text-navy-body max-w-[220px] mx-auto leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
