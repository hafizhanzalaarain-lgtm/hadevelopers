create extension if not exists "uuid-ossp";

create table if not exists public.contact_messages (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  service text,
  message text not null,
  source text default 'website',
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists public.services (
  id text primary key,
  title text not null,
  summary text not null,
  sub_services jsonb default '[]'::jsonb,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.portfolio_items (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text not null check (category in ('Websites','Apps','Graphics','SEO')),
  summary text,
  image_url text,
  case_study_url text,
  is_featured boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  category text not null,
  excerpt text,
  content text,
  seo_title text,
  seo_description text,
  published_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists public.hosting_plans (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  monthly_price integer not null,
  yearly_price integer not null,
  storage text,
  bandwidth text,
  sites text,
  email_accounts text,
  provider text default 'demo',
  provider_sku text,
  is_active boolean default true,
  updated_at timestamptz default now()
);

create table if not exists public.domain_pricing (
  extension text primary key,
  price integer not null,
  provider text default 'demo',
  provider_sku text,
  is_active boolean default true,
  updated_at timestamptz default now()
);

create table if not exists public.clients (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text unique not null,
  phone text,
  company text,
  created_at timestamptz default now()
);

create table if not exists public.projects (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references public.clients(id) on delete cascade,
  title text not null,
  service text,
  progress integer default 0 check (progress >= 0 and progress <= 100),
  status text default 'planning',
  due_date date,
  created_at timestamptz default now()
);

create table if not exists public.invoices (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references public.clients(id) on delete cascade,
  invoice_number text unique not null,
  amount numeric(12,2) not null,
  status text default 'draft',
  due_date date,
  created_at timestamptz default now()
);

create table if not exists public.support_tickets (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references public.clients(id) on delete cascade,
  subject text not null,
  message text not null,
  status text default 'open',
  priority text default 'normal',
  created_at timestamptz default now()
);

create table if not exists public.orders (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references public.clients(id) on delete set null,
  customer_name text not null,
  customer_email text not null,
  service text not null,
  amount numeric(12,2),
  status text default 'new',
  notes text,
  created_at timestamptz default now()
);

create table if not exists public.notifications (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  message text not null,
  channel text default 'email',
  status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists public.coupons (
  code text primary key,
  discount_percent integer check (discount_percent between 1 and 100),
  expires_at timestamptz,
  is_active boolean default true
);

create table if not exists public.referrals (
  id uuid primary key default uuid_generate_v4(),
  referrer_email text not null,
  referred_email text,
  reward_status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists public.team_members (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  role text not null,
  bio text,
  image_url text,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.site_settings (
  id uuid primary key default uuid_generate_v4(),
  key text unique not null,
  value text,
  group_name text default 'general',
  updated_at timestamptz default now()
);

create table if not exists public.meeting_bookings (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  meeting_date timestamptz,
  topic text,
  status text default 'requested',
  created_at timestamptz default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  status text default 'subscribed',
  created_at timestamptz default now()
);

alter table public.contact_messages enable row level security;
alter table public.clients enable row level security;
alter table public.projects enable row level security;
alter table public.invoices enable row level security;
alter table public.support_tickets enable row level security;
alter table public.orders enable row level security;
alter table public.notifications enable row level security;
alter table public.team_members enable row level security;
alter table public.site_settings enable row level security;
alter table public.meeting_bookings enable row level security;
alter table public.newsletter_subscribers enable row level security;
