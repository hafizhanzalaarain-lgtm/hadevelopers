import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, Mail, MessageCircle, Phone } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { company, pricingPlans, services } from '../data/seed.js';
import { sendOrder } from '../lib/api.js';

export default function Order() {
  const [params] = useSearchParams();
  const selectedService = params.get('service') || '';
  const selectedPackage = params.get('package') || '';
  const initialForm = useMemo(() => ({
    client_name: '',
    email: '',
    phone: '',
    city: '',
    service: selectedService,
    package_name: selectedPackage,
    budget: '',
    deadline: '',
    project_details: ''
  }), [selectedService, selectedPackage]);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  async function submit(event) {
    event.preventDefault();
    setStatus('');
    setError('');
    try {
      await sendOrder({ ...form, status: 'new' });
      setStatus('Order received successfully. HA Developers admin can now view it in the dashboard.');
      setForm(initialForm);
    } catch (err) {
      setError(`Order save failed: ${err.message}. Please confirm the orders table exists in Supabase.`);
    }
  }

  return (
    <section className="page section">
      <SectionHeading eyebrow="Place Order" title="Start your project with HA Developers." text="Submit your project requirements. Your order will be saved in Supabase and shown inside the admin dashboard." />
      <div className="contact-grid">
        <form className="contact-form glass-card" onSubmit={submit}>
          <input required placeholder="Full name" value={form.client_name} onChange={(e) => setForm({ ...form, client_name: e.target.value })} />
          <input required type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input required placeholder="WhatsApp / phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <input placeholder="City / address" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
          <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
            <option value="">Select service</option>
            {services.map((service) => <option key={service.id}>{service.title}</option>)}
          </select>
          <select value={form.package_name} onChange={(e) => setForm({ ...form, package_name: e.target.value })}>
            <option value="">Select package</option>
            {pricingPlans.map((plan) => <option key={plan.id}>{plan.name}</option>)}
          </select>
          <input placeholder="Estimated budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
          <input type="date" placeholder="Deadline" value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })} />
          <textarea required placeholder="Project details, pages/features, references, and goals" value={form.project_details} onChange={(e) => setForm({ ...form, project_details: e.target.value })} />
          <button className="btn primary" type="submit">Submit Order</button>
          {status && <p className="success">{status}</p>}
          {error && <p className="error">{error}</p>}
        </form>
        <div className="order-side glass-card">
          <h3>What happens next?</h3>
          <p><CheckCircle2 /> Admin receives your order in the dashboard.</p>
          <p><CheckCircle2 /> HA Developers reviews scope, timeline, and budget.</p>
          <p><CheckCircle2 /> You get a clear quote and project plan.</p>
          <div className="order-contact">
            <a href={`tel:${company.phone}`}><Phone /> {company.phone}</a>
            <a href={`mailto:${company.email}`}><Mail /> {company.email}</a>
            <a href={company.whatsapp}><MessageCircle /> WhatsApp Direct</a>
          </div>
        </div>
      </div>
    </section>
  );
}
