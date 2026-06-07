import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import PricingCard from '../components/PricingCard.jsx';
import { clients, company, pricingPlans, reviews, services, stats } from '../data/seed.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <motion.div className="hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow">Software House & Digital Agency</span>
          <h1>HA Developers builds premium digital products that help businesses look sharper and grow faster.</h1>
          <p>Websites, Android apps, marketing campaigns, brand graphics, and career-focused IT training from one professional team.</p>
          <div className="hero-actions">
            <Link className="btn primary" to="/order">Get Quote <ArrowRight size={18} /></Link>
            <a className="btn ghost" href={company.whatsapp}>Contact Us <MessageCircle size={18} /></a>
          </div>
        </motion.div>
        <motion.div className="hero-panel glass-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }}>
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" alt="Professional software team working on digital products" />
          <div className="project-strip">
            <PlayCircle size={22} />
            <span>Live websites, app dashboards, brand systems</span>
          </div>
        </motion.div>
      </section>

      <section className="section intro-grid">
        <div>
          <SectionHeading eyebrow="Company Introduction" title="A focused digital partner for modern businesses." text="HA Developers combines product thinking, clean engineering, and visual polish so your online presence feels credible from the first click." />
        </div>
        <div className="stats-grid">
          {stats.map((stat) => <div className="stat-card" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Services" title="Everything you need to launch and scale." text="Professional digital services packaged for speed, quality, and measurable impact." />
        <div className="card-grid three">{services.slice(0, 5).map((service) => <ServiceCard key={service.id} service={service} />)}</div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Featured Projects" title="Designed for real-world outcomes." />
        <div className="project-grid">
          {clients.map((client) => (
            <article className="project-card" key={client.id}>
              <img src={client.screenshot} alt={`${client.name} project screenshot`} />
              <div><span>{client.projectType}</span><h3>{client.name}</h3><p>{client.description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Testimonials" title="Clients trust the process and the finish." />
        <div className="card-grid three">
          {reviews.map((review) => <article className="testimonial glass-card" key={review.id}><img src={review.image} alt={review.name} /><strong>{review.name}</strong><span>{'★'.repeat(review.rating)}</span><p>{review.review}</p></article>)}
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Pricing" title="Editable packages for every stage." />
        <div className="pricing-grid">{pricingPlans.map((plan) => <PricingCard key={plan.id} plan={plan} />)}</div>
      </section>
    </>
  );
}
