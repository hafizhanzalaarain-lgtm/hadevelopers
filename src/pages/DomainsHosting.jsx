import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { domainPricing, hostingPlans } from "../data/seed";
import { checkDomain } from "../lib/api";

export default function DomainsHosting() {
  const [domain, setDomain] = useState("hadevelopers.com");
  const [result, setResult] = useState(null);

  async function submit(event) {
    event.preventDefault();
    const data = await checkDomain(domain);
    setResult(data);
  }

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Domain & Hosting Marketplace</span>
        <h1>Search domains, compare hosting, and prepare for Hostinger API integration.</h1>
        <p>Demo pricing is active now. Admin-editable prices and future affiliate/API feeds are built into the architecture.</p>
      </section>
      <section className="section split-section">
        <form className="domain-search glass-card" onSubmit={submit}>
          <h2>Domain Search Tool</h2>
          <div>
            <input value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="hadevelopers.com" />
            <button className="btn btn-primary" type="submit"><Search size={17} /> Search</button>
          </div>
          {result && (
            <article className="domain-result">
              <strong>{result.domain}</strong>
              <span className={result.available ? "available" : "unavailable"}>{result.available ? "Available" : "Unavailable"}</span>
              <p>Extension: {result.extension} | Price: PKR {result.price.toLocaleString()}</p>
              <button className="btn btn-secondary" type="button"><ShoppingCart size={17} /> Buy Now</button>
            </article>
          )}
        </form>
        <div className="glass-card">
          <h2>API-ready architecture</h2>
          <p>Domain pricing, availability, cart actions, and hosting packages are isolated behind API endpoints so Hostinger affiliate feeds or a reseller API can replace demo logic later.</p>
          <div className="logo-cloud compact">{domainPricing.map((item) => <span key={item.extension}>{item.extension} PKR {item.price}</span>)}</div>
        </div>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Hosting plans" title="Compare packages side by side" />
        <div className="comparison">
          {hostingPlans.map((plan) => (
            <article className="hosting-card glass-card" key={plan.name}>
              <span className="mini-label">{plan.badge}</span>
              <h3>{plan.name}</h3>
              <strong>PKR {plan.monthly.toLocaleString()}/mo</strong>
              <p>PKR {plan.yearly.toLocaleString()}/yr</p>
              <ul>
                <li>{plan.storage}</li>
                <li>{plan.bandwidth} bandwidth</li>
                <li>{plan.sites} websites</li>
                <li>{plan.email}</li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
