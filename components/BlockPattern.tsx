"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BlockPatternProps {
  variant?: "hero" | "divider" | "card" | "footer" | "loading" | "corner" | "default" | "nav-peeking";
  className?: string;
  theme?: "light" | "dark";
  animate?: boolean;
}

export function BlockPattern({
  variant = "default",
  className,
  theme = "light",
  animate = true,
}: BlockPatternProps) {
  const isDark = theme === "dark";

  if (variant === "divider") {
    return (
      <div className={cn("flex items-center justify-center gap-1.5 py-4 overflow-hidden", className)}>
        <span className={cn("h-[2px] w-12 rounded-full", isDark ? "bg-white/20" : "bg-navy/15")} />
        <span className="w-4 h-2.5 rounded-sm bg-amber" />
        <span className="w-2.5 h-4 rounded-sm bg-red" />
        <span className="w-3.5 h-2 rounded-sm bg-cyan" />
        <span className={cn("h-[2px] w-12 rounded-full", isDark ? "bg-white/20" : "bg-navy/15")} />
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={cn("w-full h-1.5 flex overflow-hidden", className)}>
        <div className="flex-1 bg-amber" />
        <div className="w-16 bg-red" />
        <div className="w-24 bg-cyan" />
        <div className="w-12 bg-amber" />
        <div className="flex-1 bg-navy/10" />
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={cn(
          "absolute top-3 right-3 flex items-end gap-1 pointer-events-none opacity-85",
          className
        )}
      >
        <span className="w-1.5 h-3 rounded-xs bg-amber" />
        <span className="w-1.5 h-4.5 rounded-xs bg-red" />
        <span className="w-1.5 h-2 rounded-xs bg-cyan" />
      </div>
    );
  }

  if (variant === "nav-peeking") {
    return (
      <div
        className={cn(
          "absolute -top-1.5 -right-1 flex items-end gap-1 pointer-events-none",
          animate && "animate-float",
          className
        )}
      >
        <span className="w-1.5 h-3 rounded-xs bg-amber shadow-xs" />
        <span className="w-1.5 h-4 rounded-xs bg-red shadow-xs" />
        <span className="w-1.5 h-2.5 rounded-xs bg-cyan shadow-xs" />
      </div>
    );
  }

  if (variant === "loading") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <span className="w-3 h-8 rounded-sm bg-amber animate-bounce [animation-delay:-0.3s]" />
        <span className="w-3 h-10 rounded-sm bg-red animate-bounce [animation-delay:-0.15s]" />
        <span className="w-3 h-6 rounded-sm bg-cyan animate-bounce" />
      </div>
    );
  }

  if (variant === "hero" || variant === "corner") {
    return (
      <div
        className={cn(
          "relative pointer-events-none select-none",
          animate && "animate-float",
          className
        )}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 160 140"
          className="w-28 sm:w-36 md:w-44 h-auto drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base structural rectangles */}
          <rect
            x="20"
            y="35"
            width="28"
            height="70"
            rx="3"
            fill={isDark ? "#FFFFFF" : "#0C0C40"}
            opacity={isDark ? "0.15" : "0.06"}
          />
          <rect
            x="56"
            y="15"
            width="32"
            height="95"
            rx="3"
            fill={isDark ? "#FFFFFF" : "#0C0C40"}
            opacity={isDark ? "0.2" : "0.09"}
          />
          <rect
            x="96"
            y="45"
            width="28"
            height="60"
            rx="3"
            fill={isDark ? "#FFFFFF" : "#0C0C40"}
            opacity={isDark ? "0.15" : "0.06"}
          />

          {/* Solid Accent Blocks: Amber, Red, Cyan */}
          <rect x="8" y="55" width="20" height="38" rx="2.5" fill="#F8B00F" />
          <rect x="78" y="6" width="24" height="24" rx="2.5" fill="#F8B00F" />
          <rect x="110" y="85" width="24" height="18" rx="2.5" fill="#F8B00F" />

          <rect x="36" y="10" width="22" height="18" rx="2.5" fill="#FF2529" />
          <rect x="65" y="68" width="22" height="28" rx="2.5" fill="#FF2529" />
          <rect x="130" y="38" width="16" height="32" rx="2.5" fill="#FF2529" />

          <rect x="24" y="82" width="20" height="22" rx="2.5" fill="#00DDE2" />
          <rect x="98" y="22" width="22" height="20" rx="2.5" fill="#00DDE2" />
          <rect x="52" y="2" width="18" height="12" rx="2" fill="#00DDE2" />
        </svg>
      </div>
    );
  }

  // Default compact mark
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1",
        animate && "animate-pulse",
        className
      )}
      aria-hidden="true"
    >
      <span className="w-1.5 h-3 rounded-xs bg-amber" />
      <span className="w-1.5 h-4.5 rounded-xs bg-red" />
      <span className="w-1.5 h-2.5 rounded-xs bg-cyan" />
    </div>
  );
}
