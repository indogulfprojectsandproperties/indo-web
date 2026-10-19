export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: "Agency & Advisory" | "Leasing & Management" | "Investment & Cross-Border";
  shortDescription: string;
  fullDescription: string;
  icon: "Home" | "Key" | "Compass" | "Building2" | "Warehouse" | "ShieldCheck" | "TrendingUp";
  features: string[];
  serviceEnquiryKey: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "serv-1",
    title: "Property Sales",
    slug: "property-sales",
    category: "Agency & Advisory",
    shortDescription:
      "Exclusive marketing and targeted sale of premier residential apartments, luxury villas, commercial towers, and verified land plots.",
    fullDescription:
      "Our bespoke property sales division caters to owners and developers seeking high-net-worth buyers across India and the UAE. We conduct institutional valuation, create high-impact multimedia presentations, syndicate across prime investor networks, and manage end-to-end deal closure.",
    icon: "Home",
    features: [
      "Targeted marketing across Gulf NRI investor networks",
      "Legal title vetting and documentation assistance",
      "Accurate market valuation and pricing strategy",
      "High-touch private viewings and escrow coordination",
    ],
    serviceEnquiryKey: "Property Sales",
  },
  {
    id: "serv-2",
    title: "Property Rentals",
    slug: "property-rentals",
    category: "Agency & Advisory",
    shortDescription:
      "Tenant acquisition and verified leasing for high-end residential homes, luxury penthouses, and executive family residences.",
    fullDescription:
      "Whether leasing luxury city penthouses or secluded vacation estates, we vet prospective tenants with rigorous KYC, execute standardized lease agreements, and optimize monthly rental yields with minimal vacancy downtime.",
    icon: "Key",
    features: [
      "Rigorous background and financial KYC checks",
      "Drafting legal tenancy contracts and local authority registrations",
      "Security deposit and rent escrow handling",
      "Timely tenant onboarding and inventory check-ins",
    ],
    serviceEnquiryKey: "Property Rentals",
  },
  {
    id: "serv-3",
    title: "Property Buying Assistance",
    slug: "property-buying-assistance",
    category: "Agency & Advisory",
    shortDescription:
      "Dedicated buyer representation, personalized property sourcing, negotiation, and title scrutiny for buyers and NRI investors.",
    fullDescription:
      "Buying prime real estate from abroad or in competitive domestic markets demands impartial on-ground guidance. We act strictly as buyer's advocates — shortlisting verified properties, negotiating optimum terms, and verifying structural and legal compliance.",
    icon: "Compass",
    features: [
      "Custom property sourcing tailored to your lifestyle & budget",
      "Comprehensive revenue deed & title search scrutiny",
      "Hard price negotiations in your favor",
      "Full power-of-attorney and remote registration support",
    ],
    serviceEnquiryKey: "Property Buying Assistance",
  },
  {
    id: "serv-4",
    title: "Commercial Leasing",
    slug: "commercial-leasing",
    category: "Leasing & Management",
    shortDescription:
      "Corporate office spaces, tech-park suites, retail flagship stores, and high-footfall business showrooms.",
    fullDescription:
      "Connecting institutional landlords with multinational corporations, tech unicorns, and premium retail brands. We handle space planning feasibility, lease covenants, rent-free fitout negotiation, and long-term institutional tenure structuring.",
    icon: "Building2",
    features: [
      "Grade-A IT park, corporate tower, and retail showroom leases",
      "Anchor tenant acquisition and lease negotiations",
      "Fitout coordination and facility handover audits",
      "Triple-net (NNN) lease structuring and indexing",
    ],
    serviceEnquiryKey: "Commercial Leasing",
  },
  {
    id: "serv-5",
    title: "Industrial & Warehouse Leasing",
    slug: "industrial-warehouse-leasing",
    category: "Leasing & Management",
    shortDescription:
      "Large-scale logistics parks, cold storage facilities, light manufacturing units, and dry warehouses across UAE and India.",
    fullDescription:
      "Specialized advisory for industrial space users, logistics aggregators, and manufacturing conglomerates. From UAE free-zone storage yards to India's burgeoning e-commerce fulfillment corridors, we source high-clearance, heavy-power industrial assets.",
    icon: "Warehouse",
    features: [
      "High-bay warehousing with dock levellers and sprinkler standards",
      "Heavy industrial power (kVA) and municipal zoning verifications",
      "Free-zone custom bonded warehousing options in UAE",
      "Built-to-suit (BTS) industrial leasing partnerships",
    ],
    serviceEnquiryKey: "Industrial Warehouse Leasing",
  },
  {
    id: "serv-6",
    title: "Property Management",
    slug: "property-management",
    category: "Leasing & Management",
    shortDescription:
      "Turnkey asset preservation, tenant management, rent collection, routine inspections, and maintenance for remote & NRI owners.",
    fullDescription:
      "For property owners living outside Kerala or overseas in the GCC, our dedicated asset management arm safeguards your high-value real estate. We manage routine utility bills, coordinate repairs, inspect premises quarterly, and ensure rent is deposited on schedule.",
    icon: "ShieldCheck",
    features: [
      "Quarterly photo & video condition reports",
      "Automated monthly rent collection and direct bank disbursement",
      "Preventative maintenance, civil repairs, and electrical servicing",
      "Local property tax payments and municipal filings",
    ],
    serviceEnquiryKey: "Property Management",
  },
  {
    id: "serv-7",
    title: "Real Estate Investment Assistance",
    slug: "real-estate-investment-assistance",
    category: "Investment & Cross-Border",
    shortDescription:
      "Strategic cross-border advisory for high-yield hospitality resorts, commercial pre-leased assets, and land syndication.",
    fullDescription:
      "Real estate capital deployment requires deep micro-market insights and risk management. We advise family offices, NRI high-net-worth individuals, and institutional investors on structuring high-yield portfolios across India's booming tier-1/tier-2 corridors and the UAE.",
    icon: "TrendingUp",
    features: [
      "Pre-leased commercial assets with 8-11% gross annual yields",
      "Luxury resort & holiday home hospitality revenue shares",
      "High-potential land banking along infrastructure corridors",
      "Cross-border tax and repatriation compliance advisory",
    ],
    serviceEnquiryKey: "Real Estate Investment Assistance",
  },
];
