import React from "react";
import { COMPANY } from "@/lib/company";
import { SOCIAL_LIST } from "@/lib/socials";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: COMPANY.websiteUrl,
    logo: `${COMPANY.websiteUrl}/logo.png`,
    image: `${COMPANY.websiteUrl}/og-image.png`,
    description:
      "Premier real estate and property development company operating in India (Kerala) and the UAE. Luxury resort projects, villas, commercial spaces, and industrial warehouses.",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY.office.addressLine1}, ${COMPANY.office.addressLine2}`,
      addressLocality: COMPANY.office.city,
      addressRegion: COMPANY.office.state,
      postalCode: COMPANY.office.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.2588",
      longitude: "75.8343",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:00",
    },
    sameAs: SOCIAL_LIST.map((s) => s.url),
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
