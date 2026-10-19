import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { COMPANY } from "@/lib/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0C0C40",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.websiteUrl),
  title: {
    default: `${COMPANY.name} | Real Estate in India (Kerala) & UAE`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "INDO GULF Projects & Properties is a premier real estate firm operating across India (Kerala) and the UAE. Discover luxury eco-resorts, premium residential villas, Grade-A commercial spaces, and logistics warehouses.",
  keywords: [
    "Indo Gulf Properties",
    "Real Estate Kerala",
    "Real Estate UAE Dubai",
    "Banasura Dam Resort Project",
    "Markaz Knowledge City Villas",
    "Karappuzha Waterfront Villas",
    "HiLITE Business Park Calicut",
    "NRI Property Investment Kerala",
    "Commercial Warehouses UAE",
    "Luxury Holiday Homes Wayanad",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY.websiteUrl,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Real Estate in India (Kerala) & UAE`,
    description:
      "Premier real estate and landmark property developments across India (Kerala) and the UAE. Luxury resorts, smart township villas, and commercial assets.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - India & UAE Real Estate`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Real Estate in India & UAE`,
    description:
      "Premier property development and cross-border real estate solutions in Kerala and UAE.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-body bg-white text-navy-body antialiased selection:bg-amber selection:text-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
