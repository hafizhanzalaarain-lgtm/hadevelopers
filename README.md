# HA Developers Website

Modern company website and admin dashboard for HA Developers, built with React, Node.js, and Supabase.

## Features

- Responsive premium corporate website
- Dark and light theme support
- Home, About, Services, Pricing, Reviews, Clients, Contact pages
- Admin login and dashboard UI
- Manage services, pricing, reviews, clients, images, screenshots, homepage content, and contact information
- Public order form that saves client orders in Supabase
- Supabase database schema with RLS policies
- Contact form with Supabase insert support
- Seed fallback data so the frontend works before Supabase is configured

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and add your Supabase/admin values.

3. Run the Supabase SQL in `supabase/schema.sql` inside the Supabase SQL editor.

4. Start the site and API:

```bash
npm run dev
```

The React app runs on Vite and the API runs on `http://localhost:5050`.

## Admin

Set these in `.env`:

```bash
ADMIN_EMAIL=admin@hadevelopers.com
ADMIN_PASSWORD=change-this-password
```

Then visit `/admin`. The dashboard UI is ready for content workflows and the Express API exposes CRUD routes for:

- `/api/services`
- `/api/pricing_plans`
- `/api/reviews`
- `/api/clients`
- `/api/site_content`
- `/api/contacts`
- `/api/orders`

## Supabase Storage

Create buckets for:

- `client-images`
- `project-screenshots`
- `client-logos`

Store public URLs in the `image`, `thumbnail`, `logo`, and `screenshot` columns.

## Orders

The `/order` page inserts records into the `orders` table using the Supabase publishable key and the public insert RLS policy. Admin can view, edit, and delete orders from `/admin/dashboard` after `SUPABASE_SERVICE_ROLE_KEY` is set on the Node server.
