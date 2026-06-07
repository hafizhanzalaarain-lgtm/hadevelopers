import { createClient } from '@supabase/supabase-js';
import { services, pricingPlans, reviews, clients } from '../data/seed.js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

const fallback = {
  services,
  pricing_plans: pricingPlans,
  reviews,
  clients
};

export async function fetchTable(table) {
  if (!supabase) return fallback[table] || [];
  const { data, error } = await supabase.from(table).select('*').order('created_at', { ascending: false });
  if (error) {
    console.warn(error.message);
    return fallback[table] || [];
  }
  const normalized = table === 'clients'
    ? data?.map((item) => ({ ...item, projectType: item.projectType || item.project_type }))
    : data;
  return normalized?.length ? normalized : fallback[table] || [];
}

export async function sendContact(payload) {
  if (!supabase) return { ok: true };
  const { error } = await supabase.from('contacts').insert(payload);
  if (error) throw error;
  return { ok: true };
}

export async function sendOrder(payload) {
  if (!supabase) return { ok: true };
  const { error } = await supabase.from('orders').insert(payload);
  if (error) throw error;
  return { ok: true };
}
