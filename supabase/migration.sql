-- ==============================================================================
-- INDO GULF Projects & Properties — Supabase Schema & Storage Configuration
-- Tables: enquiries, owner_submissions
-- Storage Bucket: property-media
-- ==============================================================================

-- 1. Create Enquiries Table
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  interest text not null default 'General Enquiry',
  project text,
  message text not null,
  source_page text not null default '/',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for enquiries
alter table public.enquiries enable row level security;

-- RLS: Public insert only, no public read (read restricted to service role / dashboard)
drop policy if exists "Enable public insert for enquiries" on public.enquiries;
create policy "Enable public insert for enquiries"
  on public.enquiries
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Disable public read on enquiries" on public.enquiries;
-- (Default behavior in Supabase: no SELECT policy means no public access to read rows)


-- 2. Create Owner Submissions Table (List Your Property)
create table if not exists public.owner_submissions (
  id uuid primary key default gen_random_uuid(),
  owner_name text not null,
  owner_phone text not null,
  owner_email text not null,
  owner_whatsapp text,
  property_category text not null, -- 'residential' | 'commercial' | 'industrial' | 'land'
  property_sub_type text, -- e.g. 'Apartment', 'Villa', 'Office Space', 'Warehouse', 'Plot'
  country text not null default 'India',
  state text not null,
  city text not null,
  address text not null,
  property_title text,
  property_details text not null,
  price numeric,
  price_type text not null default 'sale', -- 'sale' | 'rent' | 'lease'
  media_urls text[] default array[]::text[],
  status text not null default 'new', -- 'new' | 'in_review' | 'verified' | 'rejected'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for owner_submissions
alter table public.owner_submissions enable row level security;

-- RLS: Public insert only, no public read
drop policy if exists "Enable public insert for owner submissions" on public.owner_submissions;
create policy "Enable public insert for owner submissions"
  on public.owner_submissions
  for insert
  to anon, authenticated
  with check (true);


-- 3. Storage Bucket Configuration for Property Uploads
-- Create the bucket if it doesn't already exist
insert into storage.buckets (id, name, public)
values ('property-media', 'property-media', true)
on conflict (id) do update set public = true;

-- Storage RLS: Allow anyone (anon + authenticated) to upload photos and videos to the property-media bucket
drop policy if exists "Allow public uploads to property-media" on storage.objects;
create policy "Allow public uploads to property-media"
  on storage.objects
  for insert
  to anon, authenticated
  with check (bucket_id = 'property-media');

-- Storage RLS: Public read for uploaded property media URLs
drop policy if exists "Allow public view of property-media" on storage.objects;
create policy "Allow public view of property-media"
  on storage.objects
  for select
  to public
  using (bucket_id = 'property-media');

-- Optional indexes for fast querying in admin views
create index if not exists idx_enquiries_created_at on public.enquiries (created_at desc);
create index if not exists idx_owner_submissions_created_at on public.owner_submissions (created_at desc);
create index if not exists idx_owner_submissions_status on public.owner_submissions (status);
