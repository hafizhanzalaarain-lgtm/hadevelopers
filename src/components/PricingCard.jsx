import { Check } from "lucide-react";

export default function PricingCard({ plan }) {
  const [name, monthly, yearly, features] = plan;
  return (
    <article className="pricing-card glass-card">
      <div>
        <span className="mini-label">{name}</span>
        <h3>{monthly}</h3>
        <p>{yearly} yearly</p>
      </div>
      <ul>
        {features.map((feature) => (
          <li key={feature}>
            <Check size={17} />
            {feature}
          </li>
        ))}
      </ul>
      <a className="btn btn-secondary" href="/contact">Request Plan</a>
    </article>
  );
}
