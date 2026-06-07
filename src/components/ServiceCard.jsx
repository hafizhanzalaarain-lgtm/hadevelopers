import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service, detailed = false }) {
  const Icon = Icons[service.icon] || Icons.Sparkles;
  return (
    <article className="service-card glass-card">
      <div className="card-icon"><Icon size={24} /></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {detailed && (
        <>
          <h4>Features</h4>
          <ul>{service.features?.map((item) => <li key={item}>{item}</li>)}</ul>
          <h4>Benefits</h4>
          <ul>{service.benefits?.map((item) => <li key={item}>{item}</li>)}</ul>
          <strong className="price-line">{service.price}</strong>
        </>
      )}
      <div className="service-actions">
        <Link className="btn primary full" to={`/order?service=${encodeURIComponent(service.title)}`}>
          Order Now <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}
