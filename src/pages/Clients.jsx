import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import { fetchTable } from '../lib/api.js';

export default function Clients() {
  const [items, setItems] = useState([]);
  useEffect(() => { fetchTable('clients').then(setItems); }, []);
  return (
    <section className="page section">
      <SectionHeading eyebrow="Our Clients" title="Project work presented with logos, screenshots, and outcomes." />
      <div className="client-grid">
        {items.map((client) => (
          <article className="client-card" key={client.id}>
            <div className="client-logo">{client.logo}</div>
            <img src={client.screenshot} alt={`${client.name} website or app screenshot`} />
            <div><span>{client.projectType}</span><h3>{client.name}</h3><p>{client.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
