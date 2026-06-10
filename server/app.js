import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
const domainPricing = [
  { extension: ".com", price: 3499 },
  { extension: ".net", price: 3999 },
  { extension: ".org", price: 3899 },
  { extension: ".pk", price: 2999 },
  { extension: ".com.pk", price: 2499 },
  { extension: ".agency", price: 6499 }
];

const adminResources = {
  orders: { table: "orders", key: "id" },
  leads: { table: "contact_messages", key: "id" },
  services: { table: "services", key: "id" },
  portfolio: { table: "portfolio_items", key: "id" },
  blogs: { table: "blog_posts", key: "id" },
  hosting: { table: "hosting_plans", key: "id" },
  domains: { table: "domain_pricing", key: "extension" },
  clients: { table: "clients", key: "id" },
  invoices: { table: "invoices", key: "id" },
  tickets: { table: "support_tickets", key: "id" },
  coupons: { table: "coupons", key: "code" },
  referrals: { table: "referrals", key: "id" },
  notifications: { table: "notifications", key: "id" },
  team: { table: "team_members", key: "id" },
  settings: { table: "site_settings", key: "id" },
  meetings: { table: "meeting_bookings", key: "id" },
  newsletter: { table: "newsletter_subscribers", key: "id" }
};

async function tableRows(table, limit = 20) {
  if (!supabase) return { rows: [], error: "Supabase env keys missing" };
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .limit(limit);

  return { rows: data || [], error: error?.message || null };
}

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "HA Developers API", supabase: Boolean(supabase) });
});

app.get("/api/admin/overview", async (_req, res) => {
  const [messages, orders, clients, invoices, tickets, notifications, serviceRows, portfolio, blogs, hosting, domains, coupons, referrals, team, settings, meetings, newsletter] = await Promise.all([
    tableRows("contact_messages"),
    tableRows("orders"),
    tableRows("clients"),
    tableRows("invoices"),
    tableRows("support_tickets"),
    tableRows("notifications"),
    tableRows("services"),
    tableRows("portfolio_items"),
    tableRows("blog_posts"),
    tableRows("hosting_plans"),
    tableRows("domain_pricing"),
    tableRows("coupons"),
    tableRows("referrals"),
    tableRows("team_members"),
    tableRows("site_settings"),
    tableRows("meeting_bookings"),
    tableRows("newsletter_subscribers")
  ]);

  res.json({
    ok: true,
    supabaseConnected: Boolean(supabase),
    messages: messages.rows,
    orders: orders.rows,
    clients: clients.rows,
    invoices: invoices.rows,
    tickets: tickets.rows,
    notifications: notifications.rows,
    services: serviceRows.rows,
    portfolio: portfolio.rows,
    blogs: blogs.rows,
    hosting: hosting.rows,
    domains: domains.rows,
    coupons: coupons.rows,
    referrals: referrals.rows,
    team: team.rows,
    settings: settings.rows,
    meetings: meetings.rows,
    newsletter: newsletter.rows,
    errors: {
      messages: messages.error,
      orders: orders.error,
      clients: clients.error,
      invoices: invoices.error,
      tickets: tickets.error,
      notifications: notifications.error,
      services: serviceRows.error,
      portfolio: portfolio.error,
      blogs: blogs.error,
      hosting: hosting.error,
      domains: domains.error,
      coupons: coupons.error,
      referrals: referrals.error,
      team: team.error,
      settings: settings.error,
      meetings: meetings.error,
      newsletter: newsletter.error
    }
  });
});

app.post("/api/admin/:resource", async (req, res) => {
  const config = adminResources[req.params.resource];
  if (!config) return res.status(404).json({ error: "Unknown admin resource." });
  if (!supabase) return res.status(503).json({ error: "Supabase is not connected." });

  const { data, error } = await supabase.from(config.table).insert(req.body).select("*").single();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json({ ok: true, record: data });
});

app.put("/api/admin/:resource/:id", async (req, res) => {
  const config = adminResources[req.params.resource];
  if (!config) return res.status(404).json({ error: "Unknown admin resource." });
  if (!supabase) return res.status(503).json({ error: "Supabase is not connected." });

  const payload = { ...req.body };
  delete payload[config.key];
  const { data, error } = await supabase
    .from(config.table)
    .update(payload)
    .eq(config.key, req.params.id)
    .select("*")
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.json({ ok: true, record: data });
});

app.delete("/api/admin/:resource/:id", async (req, res) => {
  const config = adminResources[req.params.resource];
  if (!config) return res.status(404).json({ error: "Unknown admin resource." });
  if (!supabase) return res.status(503).json({ error: "Supabase is not connected." });

  const { error } = await supabase.from(config.table).delete().eq(config.key, req.params.id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ ok: true });
});

app.get("/api/domain-search", (req, res) => {
  const rawDomain = String(req.query.domain || "").trim().toLowerCase();
  const domain = rawDomain || "hadevelopers.com";
  const extension = domain.includes(".") ? `.${domain.split(".").slice(1).join(".")}` : ".com";
  const pricing = domainPricing.find((item) => item.extension === extension) || domainPricing[0];
  const unavailableSeeds = ["google.com", "facebook.com", "hostinger.com", "hadevelopers.com"];
  const available = !unavailableSeeds.includes(domain) && domain.length > 3;

  res.json({
    domain,
    extension: pricing.extension,
    price: pricing.price,
    available,
    provider: "demo",
    integrationReady: "Hostinger affiliate/API feed can replace this endpoint later."
  });
});

app.post("/api/orders", async (req, res) => {
  const payload = {
    customer_name: req.body.name || req.body.customer_name,
    customer_email: req.body.email || req.body.customer_email,
    service: req.body.service || "Website Development",
    amount: req.body.amount || null,
    status: "new",
    notes: req.body.message || req.body.notes || ""
  };

  if (!payload.customer_name || !payload.customer_email || !payload.service) {
    return res.status(400).json({ error: "Name, email, and service are required." });
  }

  if (!supabase) {
    return res.status(202).json({ ok: true, mode: "demo", order: payload });
  }

  const { data, error } = await supabase.from("orders").insert(payload).select("*").single();
  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({ ok: true, order: data });
});

app.post("/api/leads", async (req, res) => {
  const payload = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    service: req.body.service,
    message: req.body.message,
    source: "website"
  };

  if (!payload.name || !payload.email || !payload.message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  if (!supabase) {
    return res.status(202).json({
      ok: true,
      mode: "demo",
      lead: payload,
      message: "Request received."
    });
  }

  const { error } = await supabase.from("contact_messages").insert(payload);
  if (error) {
    return res.status(500).json({ error: error.message });
  }

  const orderPayload = {
    customer_name: payload.name,
    customer_email: payload.email,
    service: payload.service || "General Quote",
    status: "new",
    notes: payload.message
  };
  await supabase.from("orders").insert(orderPayload);
  res.status(201).json({
    ok: true,
    message: "Thanks. Your request has been received."
  });
});

export default app;
