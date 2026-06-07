import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, BriefcaseBusiness, Edit3, ImagePlus, Inbox, MessageSquareText, PackageCheck, Settings, Star, Trash2, Users } from 'lucide-react';
import { clients, company, pricingPlans, reviews, services } from '../data/seed.js';
import { supabase } from '../lib/api.js';

const configs = {
  Services: {
    table: 'services',
    icon: BriefcaseBusiness,
    fallback: services,
    fields: ['title', 'price', 'icon', 'description', 'features', 'benefits']
  },
  Pricing: {
    table: 'pricing_plans',
    icon: BarChart3,
    fallback: pricingPlans,
    fields: ['name', 'price', 'description', 'features', 'highlighted']
  },
  Reviews: {
    table: 'reviews',
    icon: Star,
    fallback: reviews,
    fields: ['name', 'city', 'rating', 'date', 'image', 'youtube', 'thumbnail', 'review'],
    bucket: 'client-images'
  },
  Clients: {
    table: 'clients',
    icon: Users,
    fallback: clients.map((item) => ({ ...item, project_type: item.projectType })),
    fields: ['name', 'logo', 'project_type', 'screenshot', 'description'],
    bucket: 'project-screenshots'
  },
  Orders: {
    table: 'orders',
    icon: PackageCheck,
    fallback: [],
    fields: ['client_name', 'email', 'phone', 'city', 'service', 'package_name', 'budget', 'deadline', 'status', 'project_details']
  },
  Messages: {
    table: 'contacts',
    icon: Inbox,
    fallback: [],
    fields: ['name', 'email', 'phone', 'service', 'status', 'message']
  },
  Homepage: {
    table: 'site_content',
    icon: Edit3,
    fallback: [{ id: 'hero', section: 'hero', title: 'HA Developers', subtitle: 'Premium digital products', body: 'Manage hero headline, CTA buttons, statistics, and featured projects.', media_url: '' }],
    fields: ['section', 'title', 'subtitle', 'body', 'media_url'],
    bucket: 'homepage-media'
  },
  'Contact Info': {
    table: 'site_content',
    icon: Settings,
    fallback: [{ id: 'contact', section: 'contact', title: company.phone, subtitle: company.email, body: company.address, media_url: company.whatsapp }],
    fields: ['section', 'title', 'subtitle', 'body', 'media_url']
  }
};

const emptyByField = (field) => {
  if (field === 'features' || field === 'benefits') return '';
  if (field === 'highlighted') return false;
  if (field === 'rating') return 5;
  if (field === 'date') return new Date().toISOString().slice(0, 10);
  return '';
};

function toForm(row, fields) {
  return fields.reduce((acc, field) => {
    const value = row?.[field] ?? emptyByField(field);
    acc[field] = Array.isArray(value) ? value.join(', ') : value;
    return acc;
  }, {});
}

function toPayload(form) {
  return Object.fromEntries(Object.entries(form).map(([key, value]) => {
    if (key === 'features' || key === 'benefits') return [key, String(value).split(',').map((item) => item.trim()).filter(Boolean)];
    if (key === 'highlighted') return [key, Boolean(value)];
    if (key === 'rating') return [key, Number(value || 5)];
    return [key, value];
  }));
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [active, setActive] = useState('Services');
  const [rows, setRows] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [notice, setNotice] = useState('');
  const token = localStorage.getItem('adminToken');
  const config = useMemo(() => configs[active], [active]);

  useEffect(() => {
    if (!token) navigate('/admin');
  }, [navigate, token]);

  useEffect(() => {
    setNotice('');
    setEditing(null);
    setForm(toForm(null, config.fields));
    fetch(`/api/${config.table}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('API unavailable'))))
      .then((data) => setRows(data.length ? data : config.fallback))
      .catch(() => setRows(config.fallback));
  }, [active, config]);

  async function save(event) {
    event.preventDefault();
    const payload = toPayload(form);
    const url = editing ? `/api/${config.table}/${editing.id}` : `/api/${config.table}`;
    const method = editing ? 'PUT' : 'POST';
    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Save failed. Please login again and confirm Supabase is connected.');
      }
      const saved = await response.json();
      setRows((current) => editing ? current.map((row) => row.id === saved.id ? saved : row) : [saved, ...current]);
      setEditing(null);
      setForm(toForm(null, config.fields));
      setNotice('Content saved successfully.');
    } catch (error) {
      setNotice(error.message);
    }
  }

  async function remove(row) {
    try {
      const response = await fetch(`/api/${config.table}/${row.id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Delete failed. Please login again and confirm Supabase is connected.');
      }
      setRows((current) => current.filter((item) => item.id !== row.id));
      setNotice('Content deleted successfully.');
    } catch (error) {
      setNotice(error.message);
    }
  }

  async function upload(event) {
    const file = event.target.files?.[0];
    if (!file || !supabase || !config.bucket) {
      setNotice('Image upload needs VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, and a Supabase storage bucket.');
      return;
    }
    const path = `${active.toLowerCase().replaceAll(' ', '-')}/${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from(config.bucket).upload(path, file, { upsert: true });
    if (error) {
      setNotice(error.message);
      return;
    }
    const { data } = supabase.storage.from(config.bucket).getPublicUrl(path);
    const target = active === 'Reviews' ? 'image' : active === 'Clients' ? 'screenshot' : 'media_url';
    setForm((current) => ({ ...current, [target]: data.publicUrl }));
    setNotice('Image uploaded and URL added to the form.');
  }

  return (
    <section className="page admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin Dashboard</h2>
        {Object.entries(configs).map(([name, item]) => {
          const Icon = item.icon;
          return <button className={active === name ? 'active' : ''} key={name} onClick={() => setActive(name)}><Icon size={18} /> {name}</button>;
        })}
      </aside>
      <div className="admin-main">
        <div className="dashboard-stats">
          <div><strong>{services.length}</strong><span>Services</span></div>
          <div><strong>{pricingPlans.length}</strong><span>Pricing Plans</span></div>
          <div><strong>{reviews.length}</strong><span>Reviews</span></div>
          <div><strong>{clients.length}</strong><span>Clients</span></div>
        </div>
        <div className="admin-toolbar">
          <div><span className="eyebrow">Manage</span><h1>{active}</h1></div>
          <label className="btn primary"><ImagePlus size={18} /> Upload Image<input className="hidden-input" type="file" accept="image/*" onChange={upload} /></label>
        </div>
        <div className="admin-editor glass-card">
          <p className="admin-note">Add, edit, delete, and upload content. Live saving uses the Node API with your Supabase service role key.</p>
          {notice && <p className={notice.includes('success') || notice.includes('uploaded') ? 'success' : 'error'}>{notice}</p>}
          <div className="admin-table">
            {rows.map((row) => (
              <article key={row.id || row.name || row.title}>
                <div><strong>{row.title || row.name || row.client_name || row.section}</strong><span>{row.description || row.project_type || row.service || row.city || row.subtitle || row.email}</span></div>
                <div className="row-actions">
                  <button onClick={() => { setEditing(row); setForm(toForm(row, config.fields)); }}><Edit3 size={15} /> Edit</button>
                  <button onClick={() => remove(row)}><Trash2 size={15} /> Delete</button>
                </div>
              </article>
            ))}
          </div>
          <form className="admin-form" onSubmit={save}>
            {config.fields.map((field) => {
              if (field === 'description' || field === 'review' || field === 'body' || field === 'features' || field === 'benefits' || field === 'project_details' || field === 'message') {
                return <textarea key={field} placeholder={field.replaceAll('_', ' ')} value={form[field] ?? ''} onChange={(e) => setForm({ ...form, [field]: e.target.value })} />;
              }
              if (field === 'highlighted') {
                return <label className="check-row" key={field}><input type="checkbox" checked={Boolean(form[field])} onChange={(e) => setForm({ ...form, [field]: e.target.checked })} /> Highlight package</label>;
              }
              return <input key={field} placeholder={field.replaceAll('_', ' ')} value={form[field] ?? ''} onChange={(e) => setForm({ ...form, [field]: e.target.value })} />;
            })}
            <button className="btn primary" type="submit"><MessageSquareText size={18} /> {editing ? 'Update Content' : 'Save Content'}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
