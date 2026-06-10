import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { company } from "../data/seed";
import LeadForm from "./LeadForm";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Contact</span>
        <h1>Let’s discuss your website, app, SEO, branding, hosting, or marketing project.</h1>
      </section>
      <section className="section split-section">
        <LeadForm title="Contact HA Developers" />
        <div>
          <SectionHeading align="left" eyebrow="Reach us" title="Fast response channels" />
          <div className="contact-list glass-card">
            <a href={`mailto:${company.email}`}><Mail size={18} />{company.email}</a>
            <a href={`tel:${company.phone}`}><Phone size={18} />{company.phone}</a>
            <a href={`https://wa.me/${company.whatsapp}`}><MessageCircle size={18} />WhatsApp enabled</a>
            <span><MapPin size={18} />{company.address}</span>
            <span>Business Hours: {company.hours}</span>
          </div>
          <div className="map-box" aria-label="Google Map">
            <iframe
              title="HA Developers map"
              src="https://www.google.com/maps?q=Pakistan&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
