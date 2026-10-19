export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  isPlaceholder: boolean; // TODO: replace with client team roster
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Managing Director", // TODO: confirm official leadership names
    role: "Founder & Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    bio: "Over two decades of visionary leadership in Gulf trade, institutional property acquisitions, and large-scale infrastructure developments across India and the GCC.",
    isPlaceholder: true,
  },
  {
    id: "team-2",
    name: "Head of Project Developments", // TODO: confirm name
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Specializing in eco-resort development, luxury townships, and municipal regulatory approvals with a relentless focus on timely execution and architectural excellence.",
    isPlaceholder: true,
  },
  {
    id: "team-3",
    name: "Head of UAE & NRI Investments", // TODO: confirm name
    role: "Director of International Capital & Client Advisory",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    bio: "Bridging the NRI diaspora with high-yield real estate opportunities across Dubai, Abu Dhabi, and Northern Kerala's premier growth corridors.",
    isPlaceholder: true,
  },
  {
    id: "team-4",
    name: "Head of Legal & Title Scrutiny", // TODO: confirm name
    role: "Senior Legal Counsel",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: "Ensuring 100% transparent and unencumbered title deeds, government sanction verifications, and secure escrow settlement for every client transaction.",
    isPlaceholder: true,
  },
];
