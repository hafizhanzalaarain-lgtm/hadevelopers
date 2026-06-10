import PricingCard from "../components/PricingCard";
import SectionHeading from "../components/SectionHeading";
import { pricing } from "../data/seed";

export default function Pricing() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Pricing</span>
        <h1>Transparent starting points for serious digital growth.</h1>
        <p>Simple starting packages for websites, mobile apps, SEO, digital marketing, and graphic design.</p>
      </section>
      {Object.entries(pricing).map(([category, plans]) => (
        <section className="section" key={category}>
          <SectionHeading eyebrow="Plans" title={category} />
          <div className="card-grid three">{plans.map((plan) => <PricingCard key={plan[0]} plan={plan} />)}</div>
        </section>
      ))}
    </>
  );
}
