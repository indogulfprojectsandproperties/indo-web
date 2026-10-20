/**
 * INDO GULF Projects & Properties — Cinematic Intro & Hero Configuration
 * All media assets, copy, and teaser headlines for easy client maintenance.
 */

export interface IntroVideoSource {
  src: string;
  type: string;
}

export interface IntroConfig {
  videoSources: IntroVideoSource[];
  posterImage: string;
  fallbackImage: string;
  headlineMain: string;
  headlineHighlight: string;
  paragraph: string;
  explorePropertiesCta: {
    label: string;
    href: string;
  };
  ourProjectsCta: {
    label: string;
    href: string;
  };
  regionChips: string[];
  aboutTeaser: {
    badge: string;
    heading: string;
    paragraph: string;
    linkText: string;
    linkHref: string;
  };
}

export const INTRO_DATA: IntroConfig = {
  // Looping muted background video (WebM VP9 HD stream with zero-latency load)
  videoSources: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/70/Dubai_skyline_2013.webm/Dubai_skyline_2013.webm.1080p.vp9.webm",
      type: "video/webm",
    },
  ],

  // Golden-hour skyline poster & high-resolution fallback image
  posterImage:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85",
  fallbackImage:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85",

  // One-line headline (Plus Jakarta Sans 800, tight tracking)
  headlineMain: "Where India meets the Gulf, ",
  headlineHighlight: "property becomes a legacy.",

  // What is Indo Gulf paragraph (client to confirm exact copy)
  paragraph:
    "INDO GULF Projects & Properties is a real estate company building and selling resort villas, township homes and commercial spaces across Kerala, and connecting buyers with premium opportunities in the UAE.",

  explorePropertiesCta: {
    label: "Explore Properties",
    href: "/properties",
  },
  ourProjectsCta: {
    label: "Our Projects",
    href: "/projects",
  },

  regionChips: ["Kerala, India", "UAE"],

  aboutTeaser: {
    badge: "About INDO GULF",
    heading: "Rooted in Kerala. Connected to the Emirates.",
    paragraph:
      "Bridging discerning Gulf investors, Non-Resident Indians (NRIs), and global family offices with prime land parcels, master-planned holiday resort enclaves, and Grade-A commercial developments across Kerala and the UAE.",
    linkText: "Learn more about our vision & leadership",
    linkHref: "/about",
  },
};
