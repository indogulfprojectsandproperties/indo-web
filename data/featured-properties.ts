import { ListingCategoryKey, getListingUrl } from "@/lib/listing-links";

export interface FeaturedProperty {
  id: string;
  title: string;
  location: string;
  region: "UAE" | "Kerala" | "India (Metros)";
  price: string;
  priceRaw: number;
  type: string;
  categoryKey: ListingCategoryKey;
  bedrooms?: number;
  bathrooms?: number;
  areaSqFt: number;
  image: string;
  badge: string; // Red "Featured" tag
  description: string;
}

export const FEATURED_PROPERTIES: FeaturedProperty[] = [
  {
    id: "prop-1",
    title: "Signature Waterfront Penthouse — Palm Jumeirah",
    location: "Palm Jumeirah, Dubai, UAE",
    region: "UAE",
    price: "AED 18,500,000",
    priceRaw: 18500000,
    type: "Residential Penthouse",
    categoryKey: "uae-residential",
    bedrooms: 4,
    bathrooms: 5,
    areaSqFt: 5800,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    badge: "Featured",
    description: "Ultra-luxury duplex penthouse with sweeping private views of the Arabian Gulf and Dubai Marina skyline.",
  },
  {
    id: "prop-2",
    title: "Prime Grade-A Commercial Tower Suites",
    location: "Business Bay, Dubai, UAE",
    region: "UAE",
    price: "AED 4,800,000",
    priceRaw: 4800000,
    type: "Commercial Office",
    categoryKey: "uae-commercial",
    areaSqFt: 3200,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    badge: "Featured",
    description: "Fully fitted premium corporate headquarters with panoramic Burj Khalifa vistas and high rental yield.",
  },
  {
    id: "prop-3",
    title: "Boutique Heritage Villa Estate",
    location: "Wayanad, Kerala, India",
    region: "Kerala",
    price: "₹ 3.25 Cr",
    priceRaw: 32500000,
    type: "Luxury Villa",
    categoryKey: "india-kerala-residential",
    bedrooms: 4,
    bathrooms: 4,
    areaSqFt: 4200,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    badge: "Featured",
    description: "Nestled in serene lush greenery overlooking tea plantations with contemporary eco-architecture.",
  },
  {
    id: "prop-4",
    title: "Logistics Hub & Industrial Warehouse Park",
    location: "Jebel Ali Industrial Area, Dubai, UAE",
    region: "UAE",
    price: "AED 12,200,000",
    priceRaw: 12200000,
    type: "Industrial Warehouse",
    categoryKey: "uae-industrial-warehouses",
    areaSqFt: 28000,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    badge: "Featured",
    description: "High-spec modern cold-storage and logistics facility near sea port with cross-docking bays.",
  },
  {
    id: "prop-5",
    title: "Highway Commercial Frontage & Tech Plaza",
    location: "Palazhi, Kozhikode, Kerala, India",
    region: "Kerala",
    price: "₹ 5.80 Cr",
    priceRaw: 58000000,
    type: "Commercial Retail / Office",
    categoryKey: "india-kerala-commercial",
    areaSqFt: 7500,
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    badge: "Featured",
    description: "Prestigious location adjacent to Cyberpark and HiLITE business corridor with huge retail visibility.",
  },
  {
    id: "prop-6",
    title: "Lakefront Luxury Development Plot",
    location: "Karappuzha, Wayanad, Kerala, India",
    region: "Kerala",
    price: "₹ 2.10 Cr",
    priceRaw: 21000000,
    type: "Land & Plots",
    categoryKey: "india-kerala-land-plots",
    areaSqFt: 18500,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    badge: "Featured",
    description: "Clear-title resort parcel overlooking calm reservoir waters, approved for premium hospitality or villa enclave.",
  },
];

export function getPropertyListingUrl(property: FeaturedProperty) {
  return getListingUrl(property.categoryKey, { propertyId: property.id });
}
