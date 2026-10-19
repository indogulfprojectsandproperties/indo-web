/**
 * Central configuration for MyListingPoint redirect URLs.
 * IMPORTANT: No other file may hardcode a mylistingpoint URL. Always import from this config.
 */

export const LISTING_BASE_URL =
  process.env.NEXT_PUBLIC_LISTING_BASE_URL?.replace(/\/$/, "") || "https://mylistingpoint.com";

export type ListingCategoryKey =
  | "uae-commercial"
  | "uae-industrial-warehouses"
  | "uae-residential"
  | "uae-land-plots"
  | "india-kerala-residential"
  | "india-kerala-commercial"
  | "india-kerala-land-plots"
  | "india-other-states-residential"
  | "india-other-states-commercial"
  | "india-other-states-land-plots"
  | "international-other-countries";

export interface ListingCategoryMeta {
  key: ListingCategoryKey;
  label: string;
  region: "uae" | "india-kerala" | "india-other" | "international";
  regionName: string;
  type: "residential" | "commercial" | "industrial" | "land" | "all";
  path: string;
  description: string;
}

export const LISTING_CATEGORIES: Record<ListingCategoryKey, ListingCategoryMeta> = {
  "uae-commercial": {
    key: "uae-commercial",
    label: "UAE Commercial Properties",
    region: "uae",
    regionName: "UAE",
    type: "commercial",
    path: "/properties/uae/commercial",
    description: "Offices, retail spaces, and business towers in Dubai, Abu Dhabi, and Sharjah.",
  },
  "uae-industrial-warehouses": {
    key: "uae-industrial-warehouses",
    label: "UAE Industrial & Warehouses",
    region: "uae",
    regionName: "UAE",
    type: "industrial",
    path: "/properties/uae/industrial-warehouses",
    description: "Logistics parks, storage warehouses, and manufacturing industrial units across UAE free zones.",
  },
  "uae-residential": {
    key: "uae-residential",
    label: "UAE Residential Properties",
    region: "uae",
    regionName: "UAE",
    type: "residential",
    path: "/properties/uae/residential",
    description: "Luxury apartments, penthouses, villas, and beachfront residences.",
  },
  "uae-land-plots": {
    key: "uae-land-plots",
    label: "UAE Land & Plots",
    region: "uae",
    regionName: "UAE",
    type: "land",
    path: "/properties/uae/land-plots",
    description: "Commercial, mixed-use, and industrial investment plots ready for development.",
  },
  "india-kerala-residential": {
    key: "india-kerala-residential",
    label: "Kerala Residential Properties",
    region: "india-kerala",
    regionName: "Kerala, India",
    type: "residential",
    path: "/properties/india/kerala/residential",
    description: "Villas, luxury waterfront homes, gated communities, and premium apartments across Kerala.",
  },
  "india-kerala-commercial": {
    key: "india-kerala-commercial",
    label: "Kerala Commercial Properties",
    region: "india-kerala",
    regionName: "Kerala, India",
    type: "commercial",
    path: "/properties/india/kerala/commercial",
    description: "Retail spaces, tech-park offices, shopping plazas, and hospitality units in Kerala.",
  },
  "india-kerala-land-plots": {
    key: "india-kerala-land-plots",
    label: "Kerala Land & Plots",
    region: "india-kerala",
    regionName: "Kerala, India",
    type: "land",
    path: "/properties/india/kerala/land-plots",
    description: "Highway-facing plots, estate plantations, resort acreage, and residential villa plots.",
  },
  "india-other-states-residential": {
    key: "india-other-states-residential",
    label: "India Metros Residential",
    region: "india-other",
    regionName: "Other Indian States",
    type: "residential",
    path: "/properties/india/other/residential",
    description: "High-yield luxury residences in Bengaluru, Chennai, Mumbai, and Hyderabad.",
  },
  "india-other-states-commercial": {
    key: "india-other-states-commercial",
    label: "India Metros Commercial",
    region: "india-other",
    regionName: "Other Indian States",
    type: "commercial",
    path: "/properties/india/other/commercial",
    description: "Grade-A IT parks, commercial towers, and retail assets across Indian economic hubs.",
  },
  "india-other-states-land-plots": {
    key: "india-other-states-land-plots",
    label: "India Metros Land & Plots",
    region: "india-other",
    regionName: "Other Indian States",
    type: "land",
    path: "/properties/india/other/land-plots",
    description: "Strategic commercial parcels and development acreage in Tier-1 and Tier-2 growth corridors.",
  },
  "international-other-countries": {
    key: "international-other-countries",
    label: "International Properties",
    region: "international",
    regionName: "International",
    type: "all",
    path: "/properties/international",
    description: "Select high-value global real estate opportunities across key international markets.",
  },
};

/**
 * Builds the tracked redirect URL for any category
 */
export function getListingUrl(categoryKey: ListingCategoryKey, customParams?: Record<string, string | undefined>): string {
  const category = LISTING_CATEGORIES[categoryKey];
  const url = new URL(category?.path || "/properties", LISTING_BASE_URL);
  
  url.searchParams.set("utm_source", "indogulf");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", categoryKey);

  if (customParams) {
    Object.entries(customParams).forEach(([k, v]) => {
      if (v) {
        url.searchParams.set(k, v);
      }
    });
  }

  return url.toString();
}

/**
 * Search redirect builder for the Property Search Bar
 */
export interface SearchQueryFilters {
  location?: string;
  propertyType?: string;
  budget?: string;
  purpose?: string; // Buy | Rent | Invest
  campaign?: string;
}

export function buildSearchListingUrl(filters: SearchQueryFilters): string {
  const url = new URL("/properties/search", LISTING_BASE_URL);
  url.searchParams.set("utm_source", "indogulf");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", filters.campaign || "home-search-bar");

  if (filters.location && filters.location !== "all") {
    url.searchParams.set("location", filters.location);
  }
  if (filters.propertyType && filters.propertyType !== "all") {
    url.searchParams.set("type", filters.propertyType);
  }
  if (filters.budget && filters.budget !== "all") {
    url.searchParams.set("budget", filters.budget);
  }
  if (filters.purpose && filters.purpose !== "all") {
    url.searchParams.set("purpose", filters.purpose.toLowerCase());
  }

  return url.toString();
}

/**
 * Fallback / General listing browse URL
 */
export function getGeneralListingUrl(campaign = "general-browse"): string {
  const url = new URL("/properties", LISTING_BASE_URL);
  url.searchParams.set("utm_source", "indogulf");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}
