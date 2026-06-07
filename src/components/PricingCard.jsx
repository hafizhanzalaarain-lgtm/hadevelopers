import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingCard({ plan }) {
  return (
    <article className={plan.highlighted ? 'pricing-card highlighted' : 'pricing-card'}>
      <span className="plan-label">{plan.name}</span>
      <h3>{plan.price}</h3>
      <p>{plan.description}</p>
      <ul>
        {plan.features?.map((feature) => <li key={feature}><Check size={17} /> {feature}</li>)}
      </ul>
      <Link className="btn primary full" to={`/order?package=${encodeURIComponent(plan.name)}`}>Order Now</Link>
    </article>
  );
}
