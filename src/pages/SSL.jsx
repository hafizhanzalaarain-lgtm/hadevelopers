import { ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { sslPackages } from "../data/seed";

export default function SSL() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">SSL Certificates</span>
        <h1>Secure every website with HTTPS, trust signals, and managed renewal support.</h1>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Packages" title="SSL options for business websites" />
        <div className="card-grid three">
          {sslPackages.map(([name, price, features]) => (
            <article className="pricing-card glass-card" key={name}>
              <ShieldCheck size={28} />
              <h3>{name}</h3>
              <strong>{price}</strong>
              <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
