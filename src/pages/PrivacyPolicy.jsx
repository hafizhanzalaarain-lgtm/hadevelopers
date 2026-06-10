import SectionHeading from "../components/SectionHeading";
import { company } from "../data/seed";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Privacy Policy</span>
        <h1>Your privacy matters to HA Developers.</h1>
        <p>This page explains how we collect, use, and protect information submitted through our website forms and WhatsApp contact links.</p>
      </section>
      <section className="section policy-page">
        <SectionHeading align="left" eyebrow="Policy" title="Information We Collect" />
        <div className="glass-card policy-card">
          <h3>Form Data</h3>
          <p>When you submit a quote or contact form, we may collect your name, email, phone or WhatsApp number, selected service, and project message.</p>
          <h3>How We Use It</h3>
          <p>We use your information only to respond to your inquiry, understand your project requirements, prepare quotes, and provide HA Developers services.</p>
          <h3>WhatsApp Communication</h3>
          <p>Some forms may open WhatsApp with your submitted details so you can send the request directly to our official number.</p>
          <h3>Data Sharing</h3>
          <p>We do not sell your personal data. We may use trusted tools only when needed to operate the website, respond to messages, or deliver requested services.</p>
          <h3>Security</h3>
          <p>We take reasonable steps to keep submitted information private and use it only for business communication related to your request.</p>
          <h3>Contact</h3>
          <p>For privacy questions, contact us at <a href={`mailto:${company.email}`}>{company.email}</a> or WhatsApp <a href={`https://wa.me/${company.whatsapp}`}>{company.phone}</a>.</p>
        </div>
      </section>
    </>
  );
}
