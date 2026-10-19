"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  MapPin,
  Building,
  Upload,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  FileText,
  Warehouse,
  Home,
  MessageCircle,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { BlockPattern } from "@/components/BlockPattern";
import { COMPANY } from "@/lib/company";
import { buildMessage, openWhatsApp, getWhatsAppUrl } from "@/lib/whatsapp";

type PropertyCategory = "residential" | "commercial" | "industrial" | "land";

export default function ListYourPropertyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [resultState, setResultState] = useState<{
    success: boolean;
    message: string;
    submissionId?: string;
    whatsappUrl?: string;
  } | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    owner_name: "",
    owner_phone: "",
    owner_email: "",
    owner_whatsapp: "",
    property_category: "residential" as PropertyCategory,
    property_sub_type: "Luxury Villa",
    country: "India",
    state: "Kerala",
    city: "Kozhikode",
    address: "",
    property_title: "",
    property_details: "",
    price: "",
    price_type: "sale" as "sale" | "rent" | "lease",
    media_urls: [] as string[],
  });

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Step navigation validations
  const validateStep = (step: number): boolean => {
    if (step === 1) {
      if (!formData.owner_name || !formData.owner_phone || !formData.owner_email) {
        alert("Please complete your name, phone, and email.");
        return false;
      }
    }
    if (step === 2) {
      if (!formData.country || !formData.state || !formData.city || !formData.address) {
        alert("Please specify the complete property address and location.");
        return false;
      }
    }
    if (step === 3) {
      if (!formData.property_details || formData.property_details.length < 10) {
        alert("Please provide at least 10 characters describing the property.");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Final Submit
  const handleFinalSubmit = () => {
    startTransition(() => {
      const formSourceName = "Property Owner Listing Desk";
      const fieldsToSend: Record<string, string> = {
        "Owner Full Name": formData.owner_name.trim(),
        "Contact Phone": formData.owner_phone.trim(),
        "Email Address": formData.owner_email.trim(),
        "WhatsApp Number": formData.owner_whatsapp.trim() || formData.owner_phone.trim(),
        "Property Category": `${formData.property_category.toUpperCase()} (${formData.property_sub_type})`,
        "Country / Region": `${formData.country}, ${formData.state}`,
        "City / District": formData.city,
        "Property Address": formData.address,
        "Expected Price": formData.price
          ? `${Number(formData.price).toLocaleString()} (${formData.price_type.toUpperCase()})`
          : `Price on Application (${formData.price_type.toUpperCase()})`,
        "Property Specifications": formData.property_details,
      };

      const message = buildMessage(formSourceName, fieldsToSend);
      const url = getWhatsAppUrl(message);
      openWhatsApp(message);

      setResultState({
        success: true,
        message:
          "Opening WhatsApp with your property details... Please send the message in the chat and attach any photos or layout plans directly.",
        submissionId: `IG-${Date.now().toString().slice(-6)}`,
        whatsappUrl: url,
      });
    });
  };

  // Steps Header definition
  const stepTitles = [
    { num: 1, label: "Owner Details" },
    { num: 2, label: "Category & Location" },
    { num: 3, label: "Specifications & Price" },
    { num: 4, label: "Photos & Media" },
    { num: 5, label: "Review & Submit" },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Header */}
      <section className="bg-softgrey text-navy pt-28 sm:pt-36 pb-20 relative overflow-hidden border-b border-navy/5">
        <BlockPattern variant="corner" theme="light" className="absolute top-12 right-10 hidden md:block" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span>Property Owners &amp; Landlords Desk</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy">
            List Your Property with INDO GULF
          </h1>
          <p className="text-sm sm:text-base text-navy/70 max-w-2xl mx-auto leading-relaxed">
            Market your residential villa, commercial building, industrial warehouse, or land parcel
            directly to verified Gulf NRI investors and qualified corporate buyers.
          </p>
        </div>
      </section>

      {/* Main Multi-Step Form Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-navy/10 relative overflow-hidden">
          <BlockPattern variant="card" />

          {/* Success Screen */}
          {resultState?.success ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
                  Property Submission Received!
                </h2>
                <p className="text-sm text-navy/70 leading-relaxed">
                  {resultState.message}
                </p>
                {resultState.submissionId && (
                  <p className="text-xs font-mono font-bold text-navy/50 pt-2">
                    Reference ID: {resultState.submissionId}
                  </p>
                )}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                {resultState.whatsappUrl && (
                  <a
                    href={resultState.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs sm:text-sm shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Summary to WhatsApp Desk</span>
                  </a>
                )}

                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-softgrey hover:bg-navy hover:text-white text-navy font-heading font-bold text-xs sm:text-sm transition-colors"
                >
                  <span>Return to Homepage</span>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {/* Progress Bar & Steps Indicator */}
              <div className="mb-10 pb-6 border-b border-navy/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy/60">
                    Step {currentStep} of 5:{" "}
                    <strong className="text-navy">{stepTitles[currentStep - 1].label}</strong>
                  </span>
                  <span className="text-xs font-bold text-amber">
                    {currentStep * 20}% Completed
                  </span>
                </div>

                {/* Visual Progress Bar Track */}
                <div className="w-full h-2.5 bg-softgrey rounded-full overflow-hidden flex">
                  <div
                    className="bg-amber h-full transition-all duration-300 rounded-full"
                    style={{ width: `${currentStep * 20}%` }}
                  />
                </div>

                {/* Step Dots Desktop */}
                <div className="hidden sm:grid grid-cols-5 gap-2 mt-4 text-center">
                  {stepTitles.map((step) => (
                    <div
                      key={step.num}
                      className={`text-[11px] font-semibold transition-colors ${
                        currentStep === step.num
                          ? "text-navy font-bold"
                          : currentStep > step.num
                          ? "text-emerald-600"
                          : "text-navy/40"
                      }`}
                    >
                      <span>
                        {step.num}. {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* STEP 1: Owner Contact Details */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-xl text-navy">
                      1. Owner &amp; Authorized Representative Details
                    </h3>
                    <p className="text-xs text-navy/60">
                      We contact only verified property owners or authorized legal representatives.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-navy">
                        Full Legal Name <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.owner_name}
                        onChange={(e) => updateField("owner_name", e.target.value)}
                        placeholder="e.g. Abdul Rahman"
                        required
                        className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-navy">
                        Primary Phone Number <span className="text-red">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.owner_phone}
                        onChange={(e) => updateField("owner_phone", e.target.value)}
                        placeholder="+91 95672 ... or +971 50 ..."
                        required
                        className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-navy">
                        Email Address <span className="text-red">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.owner_email}
                        onChange={(e) => updateField("owner_email", e.target.value)}
                        placeholder="name@domain.com"
                        required
                        className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-navy">
                        WhatsApp Number (if different)
                      </label>
                      <input
                        type="tel"
                        value={formData.owner_whatsapp}
                        onChange={(e) => updateField("owner_whatsapp", e.target.value)}
                        placeholder="Optional WhatsApp contact"
                        className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Property Type & Location */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-xl text-navy">
                      2. Property Category &amp; Geographic Location
                    </h3>
                    <p className="text-xs text-navy/60">
                      Select whether this is a Residential, Commercial, Industrial, or Land parcel.
                    </p>
                  </div>

                  {/* Category Selection Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { key: "residential", label: "Residential", icon: Home },
                      { key: "commercial", label: "Commercial", icon: Building },
                      { key: "industrial", label: "Industrial / Warehouse", icon: Warehouse },
                      { key: "land", label: "Land & Plots", icon: MapPin },
                    ].map((cat) => {
                      const Icon = cat.icon;
                      const isSelected = formData.property_category === cat.key;
                      return (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => updateField("property_category", cat.key)}
                          className={`p-4 rounded-2xl border text-center flex flex-col items-center justify-center gap-2 transition-all ${
                            isSelected
                              ? "border-navy bg-navy text-white shadow-md"
                              : "border-navy/15 bg-softgrey hover:bg-white text-navy"
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${isSelected ? "text-amber" : "text-navy"}`} />
                          <span className="text-xs font-heading font-bold">{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-navy">Specific Sub-Type</label>
                      <input
                        type="text"
                        value={formData.property_sub_type}
                        onChange={(e) => updateField("property_sub_type", e.target.value)}
                        placeholder="e.g. 4-BHK Villa, IT Office, Logistics Yard, Estate Plot"
                        className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-navy">Country</label>
                      <select
                        value={formData.country}
                        onChange={(e) => updateField("country", e.target.value)}
                        className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                      >
                        <option value="India">India</option>
                        <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                        <option value="International">Other International</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-navy">State / Emirate</label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => updateField("state", e.target.value)}
                        placeholder="e.g. Kerala or Dubai"
                        className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-navy">City / Region</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => updateField("city", e.target.value)}
                        placeholder="e.g. Kozhikode, Wayanad, Business Bay"
                        className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy">
                      Detailed Address &amp; Landmarks <span className="text-red">*</span>
                    </label>
                    <textarea
                      rows={2}
                      value={formData.address}
                      onChange={(e) => updateField("address", e.target.value)}
                      placeholder="Street, building number, survey number or road landmark..."
                      className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Property Details & Pricing */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-xl text-navy">
                      3. Property Specifications &amp; Commercial Terms
                    </h3>
                    <p className="text-xs text-navy/60">
                      Define your price expectations and detailed feature list.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy">Property Headline</label>
                    <input
                      type="text"
                      value={formData.property_title}
                      onChange={(e) => updateField("property_title", e.target.value)}
                      placeholder="e.g. Prime Highway-Facing 12 Cents Plot with Commercial Sanction"
                      className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-navy">Transaction Type</label>
                      <select
                        value={formData.price_type}
                        onChange={(e) => updateField("price_type", e.target.value as any)}
                        className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                      >
                        <option value="sale">Outright Sale</option>
                        <option value="rent">Rental Lease</option>
                        <option value="lease">Long-Term Commercial Lease</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-navy">
                        Expected Price (in INR or AED)
                      </label>
                      <input
                        type="number"
                        value={formData.price}
                        onChange={(e) => updateField("price", e.target.value)}
                        placeholder="e.g. 15000000 (leave blank for POA)"
                        className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy">
                      Detailed Specifications &amp; Features <span className="text-red">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.property_details}
                      onChange={(e) => updateField("property_details", e.target.value)}
                      placeholder="Mention built-up area in sqft, plot extent in cents/acres, power sanction, road width, age of property, legal clearances..."
                      className="w-full text-xs sm:text-sm text-navy bg-softgrey/60 border border-navy/15 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-cyan focus:bg-white"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Photos, Walkthroughs & Property Documents (WhatsApp Attachment) */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-xl text-navy">
                      4. Photos, Walkthroughs &amp; Property Documents
                    </h3>
                    <p className="text-xs text-navy/60">
                      Share your property images, title documents, and videos directly with our verification desk.
                    </p>
                  </div>

                  {/* Informational WhatsApp Card */}
                  <div className="border-2 border-dashed border-emerald-500/40 bg-emerald-50/50 rounded-2xl p-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                      <MessageCircle className="w-7 h-7" />
                    </div>
                    <div className="space-y-1.5 max-w-md mx-auto">
                      <h4 className="font-heading font-bold text-base text-navy">
                        Attach Media Directly in WhatsApp
                      </h4>
                      <p className="text-xs text-navy/75 leading-relaxed">
                        After WhatsApp opens upon submitting your listing, attach your property photos, floor plans, and video walkthroughs directly in the chat with our acquisitions team.
                      </p>
                    </div>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-lg mx-auto">
                      <div className="bg-white rounded-xl p-3 border border-emerald-200/60 shadow-2xs">
                        <span className="text-[11px] font-bold text-emerald-700 block mb-0.5">📸 Photos</span>
                        <p className="text-[10px] text-navy/65">Front elevation, interiors, road access</p>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-emerald-200/60 shadow-2xs">
                        <span className="text-[11px] font-bold text-emerald-700 block mb-0.5">🎥 Videos</span>
                        <p className="text-[10px] text-navy/65">Short walkthrough or drone clip</p>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-emerald-200/60 shadow-2xs">
                        <span className="text-[11px] font-bold text-emerald-700 block mb-0.5">📄 Documents</span>
                        <p className="text-[10px] text-navy/65">Basic sketches, tax slip, or survey</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Review & Submit */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-xl text-navy">
                      5. Review Your Listing Details
                    </h3>
                    <p className="text-xs text-navy/60">
                      Verify your submitted information before dispatching to our acquisitions desk.
                    </p>
                  </div>

                  {resultState?.message && !resultState.success && (
                    <div className="p-3 rounded-xl bg-red-50 text-red text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{resultState.message}</span>
                    </div>
                  )}

                  {/* Summary Box */}
                  <div className="p-6 rounded-2xl bg-softgrey border border-navy/10 space-y-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-navy/10">
                      <div>
                        <span className="text-navy/60 block">Owner Name:</span>
                        <strong className="text-navy">{formData.owner_name}</strong>
                      </div>
                      <div>
                        <span className="text-navy/60 block">Contact Phone:</span>
                        <strong className="text-navy">{formData.owner_phone}</strong>
                      </div>
                      <div>
                        <span className="text-navy/60 block">Email:</span>
                        <strong className="text-navy">{formData.owner_email}</strong>
                      </div>
                      <div>
                        <span className="text-navy/60 block">Category:</span>
                        <strong className="text-navy capitalize">
                          {formData.property_category} ({formData.property_sub_type})
                        </strong>
                      </div>
                    </div>

                    <div className="space-y-2 pb-4 border-b border-navy/10">
                      <div>
                        <span className="text-navy/60 block">Location:</span>
                        <p className="text-navy font-medium">
                          {formData.address}, {formData.city}, {formData.state}, {formData.country}
                        </p>
                      </div>
                      <div>
                        <span className="text-navy/60 block">Expected Price:</span>
                        <p className="text-amber font-heading font-bold text-base">
                          {formData.price
                            ? `₹ / AED ${Number(formData.price).toLocaleString()} (${formData.price_type})`
                            : `Price on Application (${formData.price_type})`}
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="text-navy/60 block">Uploaded Media:</span>
                      <p className="text-navy font-medium">
                        {formData.media_urls.length} media files attached
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber/10 border border-amber/30 text-xs text-navy/80 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                    <span>
                      By submitting, you confirm you are the registered owner or authorized agent.
                      INDO GULF will conduct preliminary revenue deed verifications before marketing.
                    </span>
                  </div>
                </div>
              )}

              {/* Form Navigation Action Buttons */}
              <div className="mt-10 pt-6 border-t border-navy/10 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={isPending}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-heading font-bold text-xs text-navy bg-softgrey hover:bg-navy/10 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous Step</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs text-navy bg-amber hover:bg-amber-dark transition-all duration-200 shadow-sm"
                  >
                    <span>Proceed to Step {currentStep + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleFinalSubmit}
                    disabled={isPending}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-heading font-bold text-xs text-white bg-navy hover:bg-navy-700 transition-all duration-200 shadow-md disabled:opacity-50"
                  >
                    {isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Property...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 text-amber" />
                        <span>Submit Property &amp; Open WhatsApp</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
