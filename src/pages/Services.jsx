import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/seed.js';

export default function Services() {
  return (
    <section className="page section">
      <SectionHeading eyebrow="Services" title="Professional services for companies, creators, and learners." text="Each service includes a practical scope, clear benefits, pricing guidance, and a direct inquiry path." />
      <div className="card-grid two service-list">
        {services.map((service) => <ServiceCard key={service.id} service={service} detailed />)}
      </div>
    </section>
  );
}
