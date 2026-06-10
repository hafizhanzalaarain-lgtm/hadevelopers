import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="service-card glass-card">
      <span className="icon-badge"><Icon size={24} /></span>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <div className="chip-row">
        {service.subServices.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
      </div>
      <Link className="inline-link" to={`/services/${service.id}`}>
        View service <ArrowRight size={16} />
      </Link>
    </article>
  );
}
