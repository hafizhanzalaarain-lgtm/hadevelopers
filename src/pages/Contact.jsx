import { useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { company } from '../data/seed.js';
import { sendContact } from '../lib/api.js';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  async function submit(event) {
    event.preventDefault();
    await sendContact(form);
    setStatus('Thank you. HA Developers will contact you soon.');
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  }

  return (
    <section className="page section">
      <SectionHeading eyebrow="Contact" title="Tell us what you want to build." text="Request a quote for websites, apps, marketing, graphics, or IT training." />
      <div className="contact-grid">
        <form className="contact-form glass-card" onSubmit={submit}>
          <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
            <option value="">Select service</option>
            <option>Website Development</option>
            <option>Android Application Development</option>
            <option>Digital Marketing</option>
            <option>Graphic Design</option>
            <option>Professional IT Courses & Training</option>
          </select>
          <textarea required placeholder="Project details" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button className="btn primary" type="submit">Send Inquiry</button>
          {status && <p className="success">{status}</p>}
        </form>
        <div className="contact-info">
          <a className="info-row" href={`tel:${company.phone}`}><Phone /> {company.phone}</a>
          <a className="info-row" href={`mailto:${company.email}`}><Mail /> {company.email}</a>
          <a className="info-row" href={company.whatsapp}><MessageCircle /> WhatsApp HA Developers</a>
          <div className="info-row"><MapPin /> {company.address}</div>
          <iframe title="Google Maps" className="map" src="https://maps.google.com/maps?q=Pakistan&t=&z=5&ie=UTF8&iwloc=&output=embed" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
