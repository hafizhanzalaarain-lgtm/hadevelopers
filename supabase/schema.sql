create extension if not exists "uuid-ossp";

create table if not exists services (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text not null,
  features text[] default '{}',
  benefits text[] default '{}',
  price text,
  icon text default 'Sparkles',
  created_at timestamptz default now()
);

create table if not exists pricing_plans (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  price text not null,
  description text,
  features text[] default '{}',
  highlighted boolean default false,
  created_at timestamptz default now()
);

create table if not exists reviews (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  city text,
  rating int default 5 check (rating between 1 and 5),
  review text not null,
  date date default current_date,
  image text,
  youtube text,
  thumbnail text,
  created_at timestamptz default now()
);

create table if not exists clients (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  logo text,
  project_type text,
  screenshot text,
  description text,
  created_at timestamptz default now()
);

create table if not exists site_content (
  id uuid primary key default uuid_generate_v4(),
  section text not null,
  title text,
  subtitle text,
  body text,
  media_url text,
  metadata jsonb default '{}',
  created_at timestamptz default now()
);

create table if not exists contacts (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  service text,
  message text not null,
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default uuid_generate_v4(),
  client_name text not null,
  email text not null,
  phone text not null,
  city text,
  service text not null,
  package_name text,
  budget text,
  deadline date,
  project_details text not null,
  status text default 'new',
  created_at timestamptz default now()
);

alter table services enable row level security;
alter table pricing_plans enable row level security;
alter table reviews enable row level security;
alter table clients enable row level security;
alter table site_content enable row level security;
alter table contacts enable row level security;
alter table orders enable row level security;

drop policy if exists "Public read services" on services;
drop policy if exists "Public read pricing" on pricing_plans;
drop policy if exists "Public read reviews" on reviews;
drop policy if exists "Public read clients" on clients;
drop policy if exists "Public read site content" on site_content;
drop policy if exists "Public can submit contacts" on contacts;
drop policy if exists "Public can submit orders" on orders;

create policy "Public read services" on services for select using (true);
create policy "Public read pricing" on pricing_plans for select using (true);
create policy "Public read reviews" on reviews for select using (true);
create policy "Public read clients" on clients for select using (true);
create policy "Public read site content" on site_content for select using (true);
create policy "Public can submit contacts" on contacts for insert with check (true);
create policy "Public can submit orders" on orders for insert with check (true);

insert into services (title, description, features, benefits, price, icon)
select 'Website Development', 'Fast, scalable, SEO-ready websites and web apps for modern businesses.', array['Responsive UI/UX','CMS or admin panel','SEO foundations','Analytics setup'], array['Premium brand presence','Higher conversion rate','Easy content updates'], 'From PKR 35,000', 'Globe2'
where not exists (select 1 from services where title = 'Website Development');

insert into services (title, description, features, benefits, price, icon)
select 'Android App Development', 'Native and cross-platform Android applications with secure backend integration.', array['Modern app UI','API integration','Push notifications','Play Store support'], array['Reach mobile customers','Automate workflows','Improve retention'], 'From PKR 80,000', 'Smartphone'
where not exists (select 1 from services where title = 'Android App Development');

insert into services (title, description, features, benefits, price, icon)
select 'Digital Marketing', 'Performance campaigns, content calendars, and reporting built around business outcomes.', array['Meta campaigns','Google ads','Content strategy','Monthly reporting'], array['Better qualified leads','Brand visibility','Optimized ad spend'], 'From PKR 25,000/mo', 'Megaphone'
where not exists (select 1 from services where title = 'Digital Marketing');

insert into services (title, description, features, benefits, price, icon)
select 'Graphic Designing', 'Brand identities, social creatives, print designs, and premium campaign visuals.', array['Logo concepts','Brand kits','Social posts','Print-ready files'], array['Stronger recognition','Consistent visuals','Professional launch assets'], 'From PKR 12,000', 'Palette'
where not exists (select 1 from services where title = 'Graphic Designing');

insert into services (title, description, features, benefits, price, icon)
select 'Professional IT Courses & Training', 'Practical training in web, app, design, marketing, and freelancing skills.', array['Live classes','Project practice','Career guidance','Certificates'], array['Job-ready skills','Portfolio projects','Freelance confidence'], 'From PKR 15,000/course', 'GraduationCap'
where not exists (select 1 from services where title = 'Professional IT Courses & Training');

insert into pricing_plans (name, price, description, features, highlighted)
select 'Basic Package', 'PKR 35,000', 'Best for startup landing pages.', array['5 page website','Mobile responsive','Contact form','Basic SEO'], false
where not exists (select 1 from pricing_plans where name = 'Basic Package');

insert into pricing_plans (name, price, description, features, highlighted)
select 'Standard Package', 'PKR 75,000', 'For growing businesses that need content control.', array['10 pages','CMS/admin content','WhatsApp integration','Analytics setup'], true
where not exists (select 1 from pricing_plans where name = 'Standard Package');

insert into pricing_plans (name, price, description, features, highlighted)
select 'Premium Package', 'PKR 140,000', 'For premium brands and advanced workflows.', array['Custom UI system','Dashboard features','Payment or API integration','Speed optimization'], false
where not exists (select 1 from pricing_plans where name = 'Premium Package');

insert into pricing_plans (name, price, description, features, highlighted)
select 'Enterprise Package', 'Custom Quote', 'For companies with custom software needs.', array['Discovery workshop','Dedicated roadmap','Database architecture','Priority support'], false
where not exists (select 1 from pricing_plans where name = 'Enterprise Package');

insert into reviews (name, city, rating, date, image, review, youtube, thumbnail)
select 'Ayesha Khan', 'Lahore', 5, '2026-02-18', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', 'HA Developers delivered a clean business website that immediately improved our customer inquiries.', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80'
where not exists (select 1 from reviews where name = 'Ayesha Khan');

insert into reviews (name, city, rating, date, image, review, youtube, thumbnail)
select 'Bilal Ahmed', 'Karachi', 5, '2026-01-07', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', 'The Android app and dashboard were practical, fast, and exactly what our operations team needed.', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'
where not exists (select 1 from reviews where name = 'Bilal Ahmed');

insert into reviews (name, city, rating, date, image, review, youtube, thumbnail)
select 'Sana Riaz', 'Islamabad', 5, '2025-12-11', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80', 'Their marketing designs gave our launch a premium look across every platform.', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=900&q=80'
where not exists (select 1 from reviews where name = 'Sana Riaz');

insert into clients (name, logo, project_type, screenshot, description)
select 'Nexora Mart', 'NX', 'E-commerce Website', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80', 'A polished online store with product catalog, lead capture, and analytics.'
where not exists (select 1 from clients where name = 'Nexora Mart');

insert into clients (name, logo, project_type, screenshot, description)
select 'ClinicPro', 'CP', 'Android Appointment App', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80', 'Patient booking flow, notifications, and admin tracking for a healthcare team.'
where not exists (select 1 from clients where name = 'ClinicPro');

insert into clients (name, logo, project_type, screenshot, description)
select 'SkillBridge Academy', 'SB', 'Training Platform', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80', 'Course landing pages, student inquiries, and promotional design system.'
where not exists (select 1 from clients where name = 'SkillBridge Academy');
