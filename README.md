# HA Developers Website

Premium multi-page React and Node.js website for HA Developers.

## Stack

- React + Vite
- Node.js + Express API
- Supabase-ready client and database schema
- Responsive dark/light UI
- Demo domain and hosting marketplace with Hostinger affiliate/API-ready endpoint boundaries

## Run locally

```bash
npm install
npm run server
npm run dev
```

The website runs at `http://localhost:5173/`.

The API uses `PORT` from `.env`; if unset it defaults to `8080`.

## Supabase

1. Create a Supabase project.
2. Run `supabase/schema.sql`.
3. Add keys to `.env` and `.env.example` format:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_EMAIL=official.hadevelopers@gmail.com
PORT=8080
```

Without Supabase credentials, the API returns demo-safe responses for lead submissions.

If `/api/admin/overview` says tables are missing, open Supabase SQL Editor and run the full contents of `supabase/schema.sql`.
