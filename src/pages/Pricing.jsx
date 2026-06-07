import { useEffect, useState } from 'react';
import PricingCard from '../components/PricingCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { fetchTable } from '../lib/api.js';

export default function Pricing() {
  const [plans, setPlans] = useState([]);
  useEffect(() => { fetchTable('pricing_plans').then(setPlans); }, []);
  return (
    <section className="page section">
      <SectionHeading eyebrow="Pricing" title="Packages that can be edited from the admin dashboard." text="Start with a ready package or request an enterprise quote for custom software, dashboards, and integrations." />
      <div className="pricing-grid">{plans.map((plan) => <PricingCard key={plan.id} plan={plan} />)}</div>
    </section>
  );
}
