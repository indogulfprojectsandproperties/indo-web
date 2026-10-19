"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { EnquiryForm } from "./EnquiryForm";

export interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceOrProjectTitle?: string;
  category?: string;
}

export function EnquiryModal({
  isOpen,
  onClose,
  serviceOrProjectTitle,
  category = "Service Consultation",
}: EnquiryModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-softgrey hover:bg-navy hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <EnquiryForm
          title={`Enquire: ${serviceOrProjectTitle || "Advisory Services"}`}
          subtitle={`Submit your requirements for ${category}. Our advisors will call back promptly.`}
          initialInterest={serviceOrProjectTitle || "General Advisory"}
          sourcePage="/services"
          compact
        />
      </div>
    </div>
  );
}
