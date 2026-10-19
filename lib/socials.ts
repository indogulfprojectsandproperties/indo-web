export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
  isPlaceholder: boolean;
}

// TODO: Replace placeholder links with verified official INDO GULF social media handles
export const SOCIAL_LINKS: Record<string, SocialLink> = {
  facebook: {
    name: "Facebook",
    url: "https://facebook.com/indogulfproperties", // TODO: confirm official handle
    icon: "facebook",
    handle: "@indogulfproperties",
    isPlaceholder: true,
  },
  instagram: {
    name: "Instagram",
    url: "https://instagram.com/indogulfproperties", // TODO: confirm official handle
    icon: "instagram",
    handle: "@indogulfproperties",
    isPlaceholder: true,
  },
  youtube: {
    name: "YouTube",
    url: "https://youtube.com/@indogulfproperties", // TODO: confirm official handle
    icon: "youtube",
    handle: "@indogulfproperties",
    isPlaceholder: true,
  },
  tiktok: {
    name: "TikTok",
    url: "https://tiktok.com/@indogulfproperties", // TODO: confirm official handle
    icon: "tiktok",
    handle: "@indogulfproperties",
    isPlaceholder: true,
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://linkedin.com/company/indo-gulf-projects-properties", // TODO: confirm official handle
    icon: "linkedin",
    handle: "Indo Gulf Projects & Properties",
    isPlaceholder: true,
  },
};

export const SOCIAL_LIST = Object.values(SOCIAL_LINKS);
