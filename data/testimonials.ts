export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number; // 1-5
  text: string;
  avatar: string;
  propertyContext: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Faisal Rahman",
    role: "Senior Consultant Surgeon & NRI Investor",
    location: "Dubai, UAE & Calicut",
    rating: 5,
    text: "Operating between Dubai and Kozhikode, finding a reliable real estate partner who understands both UAE legal frameworks and Kerala property titles was difficult until I met INDO GULF. Their transparency with our Wayanad resort villa was exemplary.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    propertyContext: "Banasura Dam Resort Project",
  },
  {
    id: "test-2",
    name: "Mariam Al-Hashemi",
    role: "Portfolio Asset Manager",
    location: "Abu Dhabi, UAE",
    rating: 5,
    text: "INDO GULF facilitated our family office's commercial warehouse acquisitions in the UAE. Their team conducted seamless due diligence, negotiated fair valuations, and delivered turnkey lease management with zero hassle.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    propertyContext: "UAE Industrial & Warehousing",
  },
  {
    id: "test-3",
    name: "Shabeer Ahmed",
    role: "Tech Entrepreneur & NRI Investor",
    location: "Sharjah, UAE & Malappuram",
    rating: 5,
    text: "The villa enclave at Markaz Knowledge City was the perfect generational investment for my family. The INDO GULF advisory team guided me through every documentation and registration step while I was in the UAE.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    propertyContext: "Markaz Knowledge City Villa Enclave",
  },
  {
    id: "test-4",
    name: "Rajesh Menon",
    role: "Director of Supply Chain Logistics",
    location: "Bengaluru, India",
    rating: 5,
    text: "We were looking for strategic warehouse and logistics land parcels across Southern India. INDO GULF provided crystal clear title deeds, topological clearances, and swift highway access verification. Truly unmatched professionalism.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    propertyContext: "Commercial & Industrial Land",
  },
  {
    id: "test-5",
    name: "Hanan Khalid",
    role: "Real Estate Angel Investor",
    location: "Dubai, UAE",
    rating: 5,
    text: "What sets INDO GULF apart is their seamless cross-border bridge between Gulf NRIs and prime Kerala developments. Their team in HiLITE Business Park is responsive, professional, and uncompromising on ethical business.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    propertyContext: "Karappuzha Waterfront Villas",
  },
];
