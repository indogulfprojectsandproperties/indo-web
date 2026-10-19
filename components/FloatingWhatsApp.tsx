"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { COMPANY } from "@/lib/company";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Tooltip / Popup Notification */}
      {showTooltip && (
        <div className="bg-white rounded-xl shadow-2xl border border-navy/10 p-3.5 max-w-xs text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-2 mb-1">
            <span className="font-bold text-navy flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              INDO GULF Advisory Desk
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-navy/40 hover:text-navy"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-navy/70 leading-relaxed">
            Need urgent assistance on projects in Kerala or UAE? Connect instantly with our senior
            property advisors on WhatsApp.
          </p>
          <a
            href={COMPANY.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-flex items-center justify-center w-full py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md transition-colors"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Action Buttons: Phone & WhatsApp */}
      <div className="flex items-center gap-2">
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${COMPANY.phone}`}
          className="w-11 h-11 rounded-full bg-navy text-white shadow-lg hover:bg-navy-700 border border-white/20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
          title={`Call ${COMPANY.displayPhone}`}
          aria-label="Direct Phone Call"
        >
          <Phone className="w-5 h-5 text-cyan" />
        </a>

        {/* WhatsApp Button */}
        <a
          href={COMPANY.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group"
          title="Chat with us on WhatsApp"
          aria-label="Chat with us on WhatsApp"
        >
          {/* Pulse Ripple */}
          <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10" />
          <MessageCircle className="w-8 h-8 fill-current text-white" />
        </a>
      </div>
    </div>
  );
}
