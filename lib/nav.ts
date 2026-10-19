import { getListingUrl, ListingCategoryKey } from "./listing-links";

export interface NavLink {
  label: string;
  href: string;
  isMegaMenu?: boolean;
}

export interface MegaMenuSubItem {
  title: string;
  categoryKey: ListingCategoryKey;
  description: string;
}

export interface MegaMenuSection {
  title: string;
  region: string;
  accentColor: "amber" | "red" | "cyan";
  items: MegaMenuSubItem[];
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties", isMegaMenu: true },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Media", href: "/media" },
  { label: "Property Owners", href: "/list-your-property" },
  { label: "Contact Us", href: "/contact" },
];

export const PROPERTIES_MEGA_MENU: MegaMenuSection[] = [
  {
    title: "UAE Properties",
    region: "uae",
    accentColor: "amber",
    items: [
      {
        title: "UAE Commercial",
        categoryKey: "uae-commercial",
        description: "Offices, retail & towers in Dubai & Abu Dhabi",
      },
      {
        title: "Industrial & Warehouses",
        categoryKey: "uae-industrial-warehouses",
        description: "Free-zone logistics parks & storage facilities",
      },
      {
        title: "UAE Residential",
        categoryKey: "uae-residential",
        description: "Luxury apartments, penthouses & villas",
      },
      {
        title: "UAE Land & Plots",
        categoryKey: "uae-land-plots",
        description: "Investment & development land parcels",
      },
    ],
  },
  {
    title: "India (Kerala)",
    region: "india-kerala",
    accentColor: "red",
    items: [
      {
        title: "Kerala Residential",
        categoryKey: "india-kerala-residential",
        description: "Luxury villas, apartments & gated enclaves",
      },
      {
        title: "Kerala Commercial",
        categoryKey: "india-kerala-commercial",
        description: "Tech park offices, retail & business centers",
      },
      {
        title: "Kerala Land & Plots",
        categoryKey: "india-kerala-land-plots",
        description: "Resort acreage, highway & estate plots",
      },
    ],
  },
  {
    title: "Other States & International",
    region: "other-international",
    accentColor: "cyan",
    items: [
      {
        title: "Other States Residential",
        categoryKey: "india-other-states-residential",
        description: "Bengaluru, Chennai, Mumbai, Hyderabad",
      },
      {
        title: "Other States Commercial",
        categoryKey: "india-other-states-commercial",
        description: "Grade-A corporate campuses & retail hubs",
      },
      {
        title: "Other States Land & Plots",
        categoryKey: "india-other-states-land-plots",
        description: "Development acreage & industrial parcels",
      },
      {
        title: "International Properties",
        categoryKey: "international-other-countries",
        description: "Select opportunities across global hubs",
      },
    ],
  },
];
