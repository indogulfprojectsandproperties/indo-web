# INDO GULF Projects & Properties

Corporate website for **INDO GULF Projects & Properties**, a premier real estate and property development company operating across **India (Kerala)** and the **United Arab Emirates (UAE)**.

- **Production Domain:** [ind-ogulf.com](https://ind-ogulf.com)
- **Live Inventory Platform:** [mylistingpoint.com](https://mylistingpoint.com)
- **Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Supabase (PostgreSQL & Storage), deployed on Render.

---

## Brand & Design Architecture

- **Primary Colors:**
  - Navy: `#0C0C40` (Primary text, header, footer, corporate buttons)
  - Soft Grey: `#F5F6FA` (Clean section alternating backgrounds)
  - White: `#FFFFFF`
- **Accent Colors:**
  - Amber: `#F8B00F` (CTAs, highlights, badges)
  - Red: `#FF2529` (Featured tags, accents)
  - Cyan: `#00DDE2` (Icons, focus rings, tech accents)
- **Brand Motif:** `<BlockPattern />` scattered solid rectangles reflecting architectural blocks and skyline energy.
- **Typography:** **Space Grotesk** (Headings) + **Inter** (Body) via `next/font/google`.

---

## Key Features

1. **Brand Site & Dedicated Inventory Redirection:**
   All property category browsing, search filters, and "View on Listing Point" buttons redirect seamlessly to `mylistingpoint.com` with configured UTM parameters (`utm_source=indogulf&utm_medium=website&utm_campaign=<category>`), centralized in `/lib/listing-links.ts`.
2. **Project Showcases:**
   Detail pages for Banasura Dam Luxury Resort Project, Markaz Knowledge City Villa Enclave, Karappuzha Dam Waterfront Villas, and Upcoming Launch landmarks with photo lightbox, YouTube walkthrough, Google Maps embed, and pricing schedules.
3. **Multi-Step Property Owner Listing (`/list-your-property`):**
   5-step guided form with progress bar, category selection (Residential, Commercial, Industrial, Land), drag-and-drop media upload to Supabase Storage, and instantaneous WhatsApp summary generation.
4. **Full-Stack Server Actions:**
   Zod schema validation, honeypot anti-spam defense, in-memory rate limiting, Supabase database persistence, and fallback notification hooks.
5. **Mobile-First & Performance-Engineered:**
   Sticky navigation with interactive Properties mega menu, floating WhatsApp button with quick-call, JSON-LD structured schemas, dynamic `sitemap.ts`, and `robots.ts`.

---

## Project Structure

```text
├── app/
│   ├── actions/               # Server Actions (enquiry.ts, list-property.ts)
│   ├── properties/            # Regional property directories (/uae, /india, /international)
│   ├── projects/              # Project catalog & [slug] detail pages
│   ├── services/              # 7 Core services with enquiry modals
│   ├── about/                 # Company profile, mission, team, and presence
│   ├── media/                 # Photos, videos, reels, vlogs, and articles
│   ├── list-your-property/    # 5-step property owner onboarding form
│   ├── contact/               # Contact details, Google Maps embed, enquiry
│   ├── layout.tsx             # Root layout with fonts, SEO, navbar, footer
│   ├── page.tsx               # Homepage with hero slider and search
│   ├── sitemap.ts             # XML Sitemap generator
│   ├── robots.ts              # Robots.txt generator
│   └── not-found.tsx          # 404 page decorated with BlockPattern
├── components/
│   ├── BlockPattern.tsx       # Reusable brand motif component
│   ├── Navbar.tsx             # Sticky navbar with mega menu
│   ├── Footer.tsx             # Footer with office details and UAE desk
│   ├── FloatingWhatsApp.tsx   # Floating contact widget with tooltip
│   ├── PropertySearchBar.tsx  # Search bar redirecting to mylistingpoint.com
│   ├── HeroSlider.tsx         # Autoplay hero slider
│   ├── PropertyCard.tsx       # Featured property card
│   ├── ProjectCard.tsx        # Development project card
│   ├── ReviewCarousel.tsx     # Client testimonials carousel
│   ├── EnquiryForm.tsx        # Reusable enquiry form
│   ├── EnquiryModal.tsx       # Service/project consultation modal
│   ├── GalleryLightbox.tsx    # Photo lightbox viewer
│   ├── PresenceTeaser.tsx     # India & UAE presence panels
│   ├── ConnectWithUs.tsx      # Social media links grid
│   └── JsonLd.tsx             # Schema.org structured data
├── data/                      # Structured content data files
├── lib/
│   ├── company.ts             # Central company configuration
│   ├── listing-links.ts       # Central mylistingpoint.com UTM URL mapper
│   ├── socials.ts             # Social media configuration
│   └── supabase/              # Supabase browser & server clients
├── public/                    # Logo PNG/SVG, favicon, icon, and OG image
└── supabase/
    └── migration.sql          # PostgreSQL schema, RLS policies, and storage bucket
```

---

## Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd indogulf
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env.local` and set your credentials:
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

5. **Run the Supabase Migration (in your Supabase project SQL Editor):**
   Run the SQL statements in `/supabase/migration.sql` to provision the `enquiries` table, `owner_submissions` table, and `property-media` Storage bucket.

---

## Deployment on Render

This Next.js 15 App Router project is configured with `output: "standalone"` in `next.config.mjs` for fast and optimized deployment on **Render Web Services**.

### Deploy Steps:

1. Push your repository to GitHub or GitLab.
2. Sign in to your [Render Dashboard](https://dashboard.render.com).
3. Click **New +** and select **Web Service**.
4. Connect your repository.
5. Configure the deployment settings:
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `node .next/standalone/server.js` or `npm start`
   - **Plan:** Free or Starter
6. Add the **Environment Variables** in Render's environment settings:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (kept secret)
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: `919567264686`
   - `NEXT_PUBLIC_LISTING_BASE_URL`: `https://mylistingpoint.com`
   - `NEXT_PUBLIC_GA_ID`: (Optional GA4 measurement ID)
   - `NEXT_PUBLIC_META_PIXEL_ID`: (Optional Meta Pixel ID)
7. Click **Create Web Service**. Render will build and deploy the application.
8. Connect your custom domain `ind-ogulf.com` in Render's **Settings > Custom Domains** and configure the DNS CNAME / A records as prompted.

---

## TODO Checklist for Production Handoff

- [ ] **Real Images:** Replace Unsplash placeholder photography in `/data/featured-properties.ts`, `/data/projects.ts`, and `/data/media.ts` with authentic client site photography.
- [ ] **Project Specifications & Pricing:** Confirm final allotment prices and brochures for Banasura Dam Resort, Markaz Knowledge City Villas, and Karappuzha Waterfront Villas.
- [ ] **Team Information:** Update `/data/team.ts` with verified director portraits, full names, and official credentials.
- [ ] **Social Media URLs:** Replace placeholder handles in `/lib/socials.ts` with verified official URLs for Facebook, Instagram, YouTube, TikTok, and LinkedIn.
- [ ] **UAE Office Details:** When the physical Dubai/UAE office is established, update the `uaeOffice` object in `/lib/company.ts` with the registered commercial address and landline.
- [ ] **Business Hours Confirmation:** Confirm exact operational hours in `/lib/company.ts`.
- [ ] **Final mylistingpoint.com Category URLs:** Ensure all category paths mapped in `/lib/listing-links.ts` correspond with live search filters on [mylistingpoint.com](https://mylistingpoint.com).
