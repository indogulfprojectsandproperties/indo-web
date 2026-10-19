export interface CompanyDetails {
  name: string;
  shortName: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  domain: string;
  websiteUrl: string;
  office: {
    title: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
  };
  uaeOffice: {
    status: string;
    title: string;
    description: string;
    whatsappLink: string;
  };
  businessHours: {
    days: string;
    hours: string;
    isPlaceholder: boolean;
    note: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const COMPANY: CompanyDetails = {
  name: "INDO GULF Projects & Properties",
  shortName: "INDO GULF",
  tagline: "Connecting Prime Opportunities Across India and the UAE",
  phone: "+919567264686",
  displayPhone: "+91 95672 64686",
  whatsappNumber: "919567264686",
  whatsappLink: "https://wa.me/919567264686",
  email: "info@ind-ogulf.com",
  domain: "ind-ogulf.com",
  websiteUrl: "https://ind-ogulf.com",
  office: {
    title: "India Corporate Office",
    addressLine1: "Tower 2, 6th Floor, HiLITE Business Park",
    addressLine2: "Palazhi",
    city: "Kozhikode",
    state: "Kerala",
    pincode: "673014",
    country: "India",
    fullAddress: "Tower 2, 6th Floor, HiLITE Business Park, Palazhi, Kerala 673014, India",
    googleMapsEmbedUrl: "https://www.google.com/maps?q=HiLITE+Business+Park+Palazhi+Kozhikode&output=embed",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=HiLITE+Business+Park+Palazhi+Kozhikode",
  },
  uaeOffice: {
    status: "coming_soon",
    title: "UAE Office — Coming Soon",
    description:
      "Our dedicated UAE regional headquarters is currently being established to provide direct on-ground assistance for UAE commercial, residential, industrial, and plot investments. In the interim, all UAE inquiries are handled directly by our senior leadership desk via WhatsApp and phone.",
    whatsappLink: "https://wa.me/919567264686",
  },
  businessHours: {
    days: "Monday – Saturday",
    hours: "9:30 AM – 6:00 PM IST",
    isPlaceholder: true, // TODO: confirm exact timings with client
    note: "Sunday: Closed (WhatsApp assistance available for urgent investment enquiries)",
  },
  stats: [
    { label: "Markets Served", value: "2 Nations", description: "India (Kerala & Major Metros) and UAE" },
    { label: "Property Portfolio", value: "500+ Cr", description: "Curated residential, commercial & plots" },
    { label: "Active Projects", value: "15+", description: "Landmark resort & luxury villa developments" },
    { label: "Client Satisfaction", value: "99.4%", description: "Trusted NRI and institutional investors" },
  ],
};
