import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/seed";

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Services</span>
        <h1>Digital services built to sell, scale, and support your business.</h1>
        <p>Explore dedicated services for websites, apps, graphics, marketing, SEO, domains, and hosting.</p>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Capabilities" title="Choose your growth lane" />
        <div className="card-grid three">{services.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
      </section>
    </>
  );
}
