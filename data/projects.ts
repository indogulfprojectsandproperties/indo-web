export interface ProjectHighlight {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProjectPlotPlan {
  unitType: string;
  size: string;
  startingPrice: string; // Placeholder marked TODO
  status: "Available" | "Few Remaining" | "Upcoming" | "Sold Out";
  details: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "Resort Development" | "Luxury Villa Enclave" | "Integrated Township";
  location: string;
  region: "Kerala, India" | "UAE";
  status: "Active Development" | "Under Construction" | "Upcoming Launch" | "Pre-Launch";
  heroImage: string;
  gallery: { url: string; caption: string }[];
  overview: string;
  longDescription: string[];
  highlights: ProjectHighlight[];
  plotsAndPricing: ProjectPlotPlan[]; // Marked TODO: confirm final pricing with sales desk
  youtubeEmbedUrl: string; // Embeddable video URL
  googleMapsEmbedUrl: string; // Embeddable map URL
  completionYear: string;
  isFeatured: boolean;
  metaDescription: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "banasura-dam-resort-project",
    title: "Banasura Dam Luxury Resort & Eco-Residences",
    tagline: "Eco-Luxury Hillside Living Overlooking Asia's Largest Earth Dam",
    category: "Resort Development",
    location: "Padinjarathara, Wayanad, Kerala 673575, India",
    region: "Kerala, India",
    status: "Active Development",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        caption: "Panoramic mountain and reservoir sunrise view",
      },
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        caption: "Resort infinity pool overlooking Banasura Sagar",
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        caption: "Luxury villa interior with sustainable timber craftsmanship",
      },
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        caption: "Private balcony with mist-shrouded valley view",
      },
    ],
    overview:
      "A flagship luxury hospitality and holiday home sanctuary set adjacent to the iconic Banasura Sagar Dam. Designed for discerning investors seeking guaranteed managed rental yields combined with personal vacation privileges in God's Own Country.",
    longDescription: [
      "The Banasura Dam Resort Project combines world-class architecture with untouched Western Ghats biodiversity. Spread across sprawling terraced hillsides, each residence is positioned to optimize natural light, cross-ventilation, and uninterrupted reservoir vistas.",
      "Managed by an international hospitality operator, owners enjoy fully furnished resort villas with turnkey management, housekeeping, concierge services, and high occupancy returns driven by Wayanad's booming luxury tourism sector.",
    ],
    highlights: [
      {
        title: "Spectacular Reservoir Views",
        description: "100% of villas and suites face the tranquil blue expanse of Banasura Sagar Dam.",
      },
      {
        title: "Managed Rental Program",
        description: "Turnkey luxury hospitality management generating handsome ROI for owners.",
      },
      {
        title: "5-Star Resort Amenities",
        description: "Ayurvedic wellness spa, multi-cuisine organic restaurant, infinity pool, and helipad.",
      },
      {
        title: "Eco-Conscious Architecture",
        description: "Sustainable earthen plastering, rainwater harvesting, and zero-carbon solar integration.",
      },
    ],
    plotsAndPricing: [
      {
        unitType: "1-Bedroom Forest Suite Villa",
        size: "950 sq. ft. / 5 Cents Plot",
        startingPrice: "₹ 85 Lakhs* (TODO: confirm with sales)",
        status: "Available",
        details: "Private deck, plunge pool option, fully furnished turnkey package.",
      },
      {
        unitType: "2-Bedroom Signature Hillside Villa",
        size: "1,850 sq. ft. / 9 Cents Plot",
        startingPrice: "₹ 1.65 Cr* (TODO: confirm with sales)",
        status: "Few Remaining",
        details: "Double-height living pavilion, infinity plunge pool, two master suites.",
      },
      {
        unitType: "3-Bedroom Presidential Panorama Villa",
        size: "2,900 sq. ft. / 15 Cents Plot",
        startingPrice: "₹ 2.80 Cr* (TODO: confirm with sales)",
        status: "Available",
        details: "Exclusive crest location with 270-degree dam views, private spa deck, and staff quarters.",
      },
    ],
    youtubeEmbedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4", // High-production architecture showcase placeholder
    googleMapsEmbedUrl: "https://www.google.com/maps?q=Banasura+Sagar+Dam+Wayanad&output=embed",
    completionYear: "Q4 2026",
    isFeatured: true,
    metaDescription:
      "Invest in Banasura Dam Luxury Resort & Eco-Residences in Wayanad, Kerala. Managed holiday home villas with high rental yields by INDO GULF.",
  },
  {
    slug: "markaz-knowledge-city-villa-project",
    title: "Markaz Knowledge City Premium Villa Enclave",
    tagline: "Ultra-Modern Smart Living in Kerala's Preeminent Integrated Education & Tech City",
    category: "Integrated Township",
    location: "Markaz Knowledge City, Kaithapoyil, Kozhikode, Kerala 673586, India",
    region: "Kerala, India",
    status: "Active Development",
    heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
        caption: "Architectural facade of modern designer villas",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        caption: "Spacious open-concept living and dining hall",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        caption: "Contemporary kitchen with European fittings",
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        caption: "Gated landscaped avenue with smart street lighting",
      },
    ],
    overview:
      "A prestigious gated enclave of contemporary luxury villas positioned within Markaz Knowledge City — the 125-acre integrated smart township along the Calicut-Wayanad national highway corridor.",
    longDescription: [
      "Designed for families and global professionals who desire world-class educational institutions, healthcare centers, and business parks within walking distance.",
      "Featuring high security, underground cabling, lush community parks, and bespoke modern architecture, this project represents one of Northern Kerala's highest appreciating real estate developments.",
    ],
    highlights: [
      {
        title: "Integrated Township Ecosystem",
        description: "Direct access to international schools, Unani medical college, law institute, and technology parks.",
      },
      {
        title: "Prime Highway Connectivity",
        description: "Situated directly on NH 766 connecting Calicut International Airport, city centre, and Wayanad.",
      },
      {
        title: "Gated Community Lifestyle",
        description: "24/7 biometric surveillance, private clubhouse, indoor sports complex, and prayer facilities.",
      },
      {
        title: "Capital Growth Corridor",
        description: "Unmatched appreciation fueled by institutional growth and high NRI residential demand.",
      },
    ],
    plotsAndPricing: [
      {
        unitType: "Royal 3-BHK Villa",
        size: "2,200 sq. ft. / 6.5 Cents Plot",
        startingPrice: "₹ 1.25 Cr* (TODO: confirm with sales)",
        status: "Available",
        details: "Two-car parking, modular kitchen, private family garden, smart home automation.",
      },
      {
        unitType: "Grand 4-BHK Villa",
        size: "3,100 sq. ft. / 9 Cents Plot",
        startingPrice: "₹ 1.85 Cr* (TODO: confirm with sales)",
        status: "Few Remaining",
        details: "Double master bedrooms, rooftop terrace barbecue deck, private study room.",
      },
      {
        unitType: "Imperial 5-BHK Executive Villa",
        size: "4,400 sq. ft. / 14 Cents Plot",
        startingPrice: "₹ 2.60 Cr* (TODO: confirm with sales)",
        status: "Available",
        details: "Private passenger elevator, swimming pool, courtyard garden, solar rooftop included.",
      },
    ],
    youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with official walkthrough video TODO
    googleMapsEmbedUrl: "https://www.google.com/maps?q=Markaz+Knowledge+City+Kozhikode&output=embed",
    completionYear: "Q2 2026",
    isFeatured: true,
    metaDescription:
      "Exclusive luxury villas in Markaz Knowledge City, Kozhikode, Kerala. Modern smart township villas presented by INDO GULF Projects & Properties.",
  },
  {
    slug: "karappuzha-dam-villa-project",
    title: "Karappuzha Waterfront Dam Villa Enclave",
    tagline: "Secluded Lakeside Sanctuary with Direct Shoreline Access",
    category: "Luxury Villa Enclave",
    location: "Vazhavatta, Karappuzha Dam, Wayanad, Kerala 673122, India",
    region: "Kerala, India",
    status: "Active Development",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        caption: "Waterfront modern villa with floor-to-ceiling glass walls",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        caption: "Lakeside sunset seating deck and boat jetty access",
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
        caption: "Master bathroom with panoramic landscape views",
      },
      {
        url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
        caption: "Private courtyard with tropical water features",
      },
    ],
    overview:
      "A limited collection of bespoke waterfront vacation homes cradling the tranquil shores of Karappuzha Dam. Offering total privacy, lush nature, and private jetty privileges in Wayanad's most picturesque lake district.",
    longDescription: [
      "Each home in the Karappuzha Dam Villa Project is thoughtfully integrated into the gently sloping lake shoreline, celebrating natural Kerala stone, exposed teak, and expansive floor-to-ceiling glass.",
      "With round-the-clock estate management, rental pooling, and organic farming on premises, it represents an heirloom family retreat that simultaneously produces attractive rental revenues.",
    ],
    highlights: [
      {
        title: "Direct Lake Shoreline Access",
        description: "Private shoreline walkway, fishing decks, and kayaking facilities for residents.",
      },
      {
        title: "Low-Density Master Plan",
        description: "Only 18 bespoke residences situated across 8 acres of pristine greenery.",
      },
      {
        title: "Full Estate Management",
        description: "On-site estate team handles lawn maintenance, housekeeping, security, and holiday rentals.",
      },
      {
        title: "Clean Clear Titles",
        description: "100% verified legal clearances with individual freehold titles and immediate registration.",
      },
    ],
    plotsAndPricing: [
      {
        unitType: "Lakefront Serenity Villa (3-BHK)",
        size: "2,400 sq. ft. / 10 Cents Plot",
        startingPrice: "₹ 1.50 Cr* (TODO: confirm with sales)",
        status: "Available",
        details: "Expansive wooden deck facing Karappuzha reservoir, barbecue patio, car porch.",
      },
      {
        unitType: "Water's Edge Signature Villa (4-BHK)",
        size: "3,600 sq. ft. / 16 Cents Plot",
        startingPrice: "₹ 2.40 Cr* (TODO: confirm with sales)",
        status: "Few Remaining",
        details: "Direct water access, cantilevered infinity pool, dual living rooms, maid room.",
      },
    ],
    youtubeEmbedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4", // TODO: replace with project video
    googleMapsEmbedUrl: "https://www.google.com/maps?q=Karapuzha+Dam+Wayanad&output=embed",
    completionYear: "Q1 2027",
    isFeatured: true,
    metaDescription:
      "Invest in Karappuzha Dam Waterfront Villa Enclave, Wayanad, Kerala. Waterfront luxury residences by INDO GULF Projects & Properties.",
  },
  {
    slug: "hilite-corridor-commercial-hub",
    title: "HiLITE Business Corridor Commercial Landmark",
    tagline: "Next-Gen Retail & Corporate Suites in Calicut's Fastest Growing Tech Corridor",
    category: "Resort Development", // Upcoming commercial
    location: "Palazhi, Kozhikode, Kerala 673014, India",
    region: "Kerala, India",
    status: "Upcoming Launch",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
        caption: "Upcoming glass facade commercial hub rendering",
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        caption: "Corporate office lobby concept",
      },
    ],
    overview:
      "An upcoming marquee commercial development situated directly across the bustling HiLITE Business Park and Palazhi bypass junction, designed for tech firms, financial institutions, and flagship retail showrooms.",
    longDescription: [
      "Benefiting from extraordinary vehicular footfall and proximity to Calicut Cyberpark, this project is designed to offer high rental yields and long-term institutional lease opportunities.",
      "Pre-launch expressions of interest are currently being registered for select retail ground floors and corporate penthouse suites.",
    ],
    highlights: [
      {
        title: "Bypass National Highway Frontage",
        description: "Exceptional visibility on Kozhikode's most affluent commercial boulevard.",
      },
      {
        title: "Multi-Level Basement Parking",
        description: "Dedicated EV charging stations, valet bays, and 300+ covered vehicle slots.",
      },
      {
        title: "Grade-A Sustainable Design",
        description: "IGBC Gold rating targeted with energy-efficient double glazing and solar facade.",
      },
    ],
    plotsAndPricing: [
      {
        unitType: "Retail Showroom Frontage",
        size: "1,200 - 5,000 sq. ft.",
        startingPrice: "Price on Application* (TODO: pre-launch registration)",
        status: "Upcoming",
        details: "18-foot ceiling heights, double street frontage, direct customer escalator access.",
      },
      {
        unitType: "Corporate Office Suites",
        size: "800 - 3,500 sq. ft.",
        startingPrice: "Price on Application* (TODO: pre-launch registration)",
        status: "Upcoming",
        details: "High-speed elevators, backup power, optic fiber ready, panoramic terrace cafeterias.",
      },
    ],
    youtubeEmbedUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    googleMapsEmbedUrl: "https://www.google.com/maps?q=HiLITE+Business+Park+Palazhi+Kozhikode&output=embed",
    completionYear: "Q4 2027",
    isFeatured: false,
    metaDescription:
      "Pre-launch registration for HiLITE Corridor Commercial Landmark in Palazhi, Calicut by INDO GULF Projects & Properties.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
