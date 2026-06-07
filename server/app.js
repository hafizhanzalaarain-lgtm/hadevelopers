import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = supabaseUrl && serviceKey ? createClient(supabaseUrl, serviceKey) : null;

const tables = ['services', 'pricing_plans', 'reviews', 'clients', 'site_content', 'contacts', 'orders'];

function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (token && token === process.env.ADMIN_SESSION_TOKEN) return next();
  if (token && token === Buffer.from(`${process.env.ADMIN_EMAIL}:${process.env.ADMIN_PASSWORD}`).toString('base64')) return next();
  return res.status(401).json({ message: 'Unauthorized admin request' });
}

function ensureSupabase(res) {
  if (!supabase) {
    res.status(503).json({ message: 'Supabase is not configured on the server.' });
    return false;
  }
  return true;
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, supabase: Boolean(supabase) });
});

app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = process.env.ADMIN_SESSION_TOKEN || Buffer.from(`${email}:${password}`).toString('base64');
    return res.json({ token, admin: { email } });
  }
  return res.status(401).json({ message: 'Invalid admin credentials' });
});

for (const table of tables) {
  app.get(`/api/${table}`, async (_req, res) => {
    if (!ensureSupabase(res)) return;
    const { data, error } = await supabase.from(table).select('*').order('created_at', { ascending: false });
    if (error) return res.status(500).json({ message: error.message });
    res.json(data);
  });

  app.post(`/api/${table}`, requireAdmin, async (req, res) => {
    if (!ensureSupabase(res)) return;
    const { data, error } = await supabase.from(table).insert(req.body).select().single();
    if (error) return res.status(500).json({ message: error.message });
    res.status(201).json(data);
  });

  app.put(`/api/${table}/:id`, requireAdmin, async (req, res) => {
    if (!ensureSupabase(res)) return;
    const { data, error } = await supabase.from(table).update(req.body).eq('id', req.params.id).select().single();
    if (error) return res.status(500).json({ message: error.message });
    res.json(data);
  });

  app.delete(`/api/${table}/:id`, requireAdmin, async (req, res) => {
    if (!ensureSupabase(res)) return;
    const { error } = await supabase.from(table).delete().eq('id', req.params.id);
    if (error) return res.status(500).json({ message: error.message });
    res.status(204).end();
  });
}

export default app;
