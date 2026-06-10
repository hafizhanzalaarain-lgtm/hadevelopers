import { Send } from "lucide-react";
import { useState } from "react";
import { postLead } from "../lib/api";
import { company } from "../data/seed";
import { useLanguage } from "../lib/i18n.jsx";

export default function LeadForm({ title = "Request a quote" }) {
  const { t } = useLanguage();
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", language: "English", message: "" });

  async function submit(event) {
    event.preventDefault();
    setStatus("Sending...");
    const whatsappMessage = [
      "New HA Developers Request",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Service: ${form.service || "Not selected"}`,
      `Website Language: ${form.language}`,
      `Message: ${form.message}`
    ].join("\n");
    const payload = {
      ...form,
      message: `Website Language: ${form.language}\n${form.message}`
    };
    try {
      const response = await postLead(payload);
      setStatus(response.message || "Thanks. Your request has been received.");
      window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
      setForm({ name: "", email: "", phone: "", service: "", language: "English", message: "" });
    } catch {
      window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
      setStatus("Opening WhatsApp with your request details.");
    }
  }

  return (
    <form className="lead-form glass-card" onSubmit={submit}>
      <h3>{title}</h3>
      <input required placeholder={t.form.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input required type="email" placeholder={t.form.email} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder={t.form.phone} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
        <option value="">{t.form.selectService}</option>
        <option>Website Development</option>
        <option>Mobile App Development</option>
        <option>SEO Services</option>
        <option>Digital Marketing</option>
        <option>Graphic Design</option>
      </select>
      <select value={form.language} onChange={(e) => setForm({ ...form, language: e.target.value })}>
        <option disabled>{t.form.language}</option>
        <option>English</option>
        <option>Urdu</option>
        <option>Arabic</option>
        <option>Urdu + English</option>
        <option>Arabic + English</option>
      </select>
      <textarea required placeholder={t.form.message} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      <button className="btn btn-primary" type="submit">{t.form.send} <Send size={17} /></button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
