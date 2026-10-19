export interface MediaPhoto {
  id: string;
  title: string;
  category: "Resort Projects" | "Villas" | "Commercial" | "Aerial & Plots";
  image: string;
  location: string;
}

export interface MediaVideo {
  id: string;
  title: string;
  type: "walkthrough" | "developer_update" | "drone_aerial";
  duration: string;
  thumbnail: string;
  youtubeId: string;
  embedUrl: string;
}

export interface MediaReel {
  id: string;
  title: string;
  platform: "instagram" | "youtube_shorts";
  embedUrl: string;
  aspectRatio: string;
  description: string;
}

export interface MediaVlog {
  id: string;
  title: string;
  presenter: string;
  thumbnail: string;
  duration: string;
  embedUrl: string;
  summary: string;
}

export interface MediaArticle {
  slug: string;
  title: string;
  category: "Market Insights" | "NRI Investment" | "Project Spotlight" | "Regulations";
  readTime: string;
  publishedDate: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const MEDIA_PHOTOS: MediaPhoto[] = [
  {
    id: "photo-1",
    title: "Banasura Sagar Dam Morning Mist",
    category: "Resort Projects",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    location: "Padinjarathara, Wayanad",
  },
  {
    id: "photo-2",
    title: "Markaz Knowledge City Designer Villa Exterior",
    category: "Villas",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    location: "Kozhikode, Kerala",
  },
  {
    id: "photo-3",
    title: "Dubai Business Bay Corporate Tower Facade",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    location: "Business Bay, Dubai",
  },
  {
    id: "photo-4",
    title: "Karappuzha Waterfront Sunrise Enclave",
    category: "Villas",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    location: "Karappuzha, Wayanad",
  },
  {
    id: "photo-5",
    title: "HiLITE Business Park Commercial Frontage",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    location: "Palazhi, Kozhikode",
  },
  {
    id: "photo-6",
    title: "Scenic Hillside Land Parcel for Eco-Resort",
    category: "Aerial & Plots",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    location: "Wayanad Highland",
  },
];

export const MEDIA_VIDEOS: MediaVideo[] = [
  {
    id: "vid-1",
    title: "Banasura Dam Resort Project — Site Walkthrough & Drone View",
    type: "walkthrough",
    duration: "4:35",
    thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    youtubeId: "ScMzIvxBSi4",
    embedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    id: "vid-2",
    title: "Markaz Knowledge City — Integrated Smart Township Tour",
    type: "walkthrough",
    duration: "6:15",
    thumbnail: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-3",
    title: "Karappuzha Dam Waterfront Villa Enclave Site Flyover",
    type: "drone_aerial",
    duration: "3:40",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    youtubeId: "ScMzIvxBSi4",
    embedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
];

export const MEDIA_REELS: MediaReel[] = [
  {
    id: "reel-1",
    title: "Inside the Infinity Pool at Banasura Sagar",
    platform: "instagram",
    embedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    aspectRatio: "9/16",
    description: "Catch the morning mist rolling over Asia's largest earth dam. #WayanadVillas #IndoGulf",
  },
  {
    id: "reel-2",
    title: "Why NRIs are investing heavily in Kozhikode Bypass corridor",
    platform: "youtube_shorts",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    aspectRatio: "9/16",
    description: "Rapid expansion of Cyberpark, HiLITE Business Park, and highway logistics. #KeralaRealEstate",
  },
  {
    id: "reel-3",
    title: "Karappuzha Waterfront Villas — Foundation Milestone",
    platform: "instagram",
    embedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    aspectRatio: "9/16",
    description: "Direct shoreline access and cantilevered architectural decks. #LuxuryLiving",
  },
];

export const MEDIA_VLOGS: MediaVlog[] = [
  {
    id: "vlog-1",
    title: "How to Evaluate High-Yield Resort Villa Investments in Kerala",
    presenter: "INDO GULF Advisory Desk",
    thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    duration: "11:20",
    embedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    summary:
      "A deep dive into hospitality revenue pooling, operator track records, and capital appreciation metrics in Wayanad and Idukki.",
  },
  {
    id: "vlog-2",
    title: "UAE vs Kerala Real Estate: Comparing Rental Yields and Capital Gains",
    presenter: "INDO GULF Gulf-India Desk",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    duration: "14:45",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    summary:
      "Understanding tax advantages, currency hedge, and diversification strategies across Dubai commercial real estate and Kerala prime properties.",
  },
];

export const MEDIA_ARTICLES: MediaArticle[] = [
  {
    slug: "why-gulf-nris-are-investing-in-wayanad-resort-properties",
    title: "Why Gulf NRIs are Investing in Wayanad Eco-Resort Properties",
    category: "NRI Investment",
    readTime: "5 min read",
    publishedDate: "October 12, 2026",
    author: "INDO GULF Research Team",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "With high tourist footfalls and managed hospitality operators, holiday homes in Wayanad are yielding 8-12% annual returns alongside capital growth.",
    content: [
      "In recent years, the investment behavior of Non-Resident Indians (NRIs) in the Gulf has undergone a profound shift. While earlier generations focused on suburban retirement houses, today's affluent NRIs are turning toward income-producing vacation homes and eco-resort enclaves.",
      "Destinations like Banasura Sagar and Karappuzha Dam in Wayanad have emerged as prime focal points. Blessed with perennial pleasant weather, lush evergreen bio-diversity, and seamless road connectivity from Kozhikode and Kannur International Airports, Wayanad commands peak weekend hotel tariffs throughout the year.",
      "When investors partner with trusted developers offering turnkey hospitality management, properties operate under a managed revenue pool. Owners enjoy hassle-free maintenance, 30 to 45 days of complimentary family stay every year, and steady dividend yields transferred to their NRE/NRO accounts.",
    ],
  },
  {
    slug: "navigating-uae-commercial-real-estate-for-indian-investors",
    title: "Navigating UAE Commercial Real Estate: A Guide for Indian Investors",
    category: "Market Insights",
    readTime: "7 min read",
    publishedDate: "September 28, 2026",
    author: "INDO GULF Commercial Desk",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Key insights on freehold zones, corporate lease structures, and warehousing demand across Dubai and Abu Dhabi for cross-border investors.",
    content: [
      "The UAE continues to be one of the world's most resilient commercial real estate hubs. For Indian business families and high-net-worth investors, acquiring Grade-A offices, retail units, or logistics warehouses in Dubai provides a stable USD-pegged hedge.",
      "With the introduction of long-term Golden Visas linked to real estate investments above AED 2 Million, international demand has reached historic heights. Freehold commercial hubs like Business Bay, DIFC, and Jebel Ali Industrial Area offer long-term institutional leases with clear corporate tenant agreements.",
      "INDO GULF Projects & Properties assists clients with micro-market selection, title transfers via Dubai Land Department (DLD), and cross-border bank escrow facilities.",
    ],
  },
  {
    slug: "calicut-bypass-corridor-the-silicon-avenue-of-north-kerala",
    title: "Calicut Bypass Corridor: The Real Estate Boom Around HiLITE and Cyberpark",
    category: "Project Spotlight",
    readTime: "6 min read",
    publishedDate: "September 15, 2026",
    author: "INDO GULF Advisory Desk",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "How the confluence of IT parks, highway bypass expansion, and corporate parks created North Kerala's most lucrative property corridor.",
    content: [
      "Kozhikode's Palazhi and bypass stretch has rapidly evolved into the epicenter of commercial, retail, and luxury residential real estate in North Kerala.",
      "Anchored by landmark developments such as HiLITE Business Park, HiLITE Mall, and the Government Cyberpark, the corridor hosts hundreds of IT firms, multinationals, and retail flagships.",
      "Commercial rental values along this highway have experienced strong annual compounding, making it the preferred choice for family trusts and institutional investors seeking rock-solid rental yields.",
    ],
  },
];

export function getArticleBySlug(slug: string): MediaArticle | undefined {
  return MEDIA_ARTICLES.find((a) => a.slug === slug);
}
