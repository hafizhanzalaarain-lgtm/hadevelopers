import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { company, features, heroImage, owner, portfolioItems, process, services } from "../data/seed";
import { useLanguage } from "../lib/i18n.jsx";
import LeadForm from "./LeadForm";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <section className="hero fullscreen agency-hero">
        <div className="animated-bg" aria-hidden="true" />
        <div className="hero-content">
          <span className="eyebrow">{t.home.eyebrow}</span>
          <h1>{t.home.title}</h1>
          <p className="hero-tagline">{company.tagline}</p>
          <p>{t.home.intro}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">{t.home.start} <ArrowRight size={18} /></Link>
            <Link className="btn btn-secondary" to="/portfolio"><Play size={18} /> {t.home.portfolio}</Link>
          </div>
          <div className="hero-badges">
            {["Web Development", "SEO", "Digital Marketing", "Graphic Design"].map((item) => <span key={item}><CheckCircle2 size={16} /> {item}</span>)}
          </div>
        </div>
        <div className="hero-panel glass-card agency-visual">
          <img src={heroImage} alt="Digital agency team working on a premium website and marketing campaign" />
          <Sparkles size={30} />
          <strong>{t.home.heroCardTitle}</strong>
          <p>{t.home.heroCardText}</p>
        </div>
      </section>

      <section className="section compact-section">
        <SectionHeading eyebrow={t.nav.services} title={t.home.servicesTitle} text={t.home.servicesText} />
        <div className="card-grid three">{services.slice(0, 4).map((service) => <ServiceCard key={service.id} service={service} />)}</div>
      </section>

      <section className="section split-section compact-section">
        <div>
          <SectionHeading align="left" eyebrow="Agency style" title={t.home.styleTitle} text={t.home.styleText} />
          <div className="check-list">
            {["Premium landing pages", "Social media creative systems", "SEO-ready site structure", "Ad campaign funnels"].map((item) => <span key={item}><CheckCircle2 size={18} />{item}</span>)}
          </div>
        </div>
        <div>
          <SectionHeading align="left" eyebrow="Included" title={t.home.included} />
          <div className="feature-grid">{features.slice(0, 6).map(([label, Icon]) => <span key={label}><Icon size={18} />{label}</span>)}</div>
        </div>
      </section>

      <section className="section dark-band compact-section">
        <SectionHeading eyebrow={t.nav.portfolio} title={t.home.portfolioTitle} text="Websites, app interfaces, design systems, social campaigns, and SEO growth stories." />
        <div className="portfolio-grid">
          {portfolioItems.slice(0, 4).map((item) => <article className="portfolio-card" style={{ "--card-image": `url(${item.image})` }} key={item.title}><span>{item.category}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="section split-section compact-section">
        <div>
          <SectionHeading align="left" eyebrow="Process" title={t.home.processTitle} />
          <div className="timeline">{process.slice(0, 4).map(([title, text], index) => <div key={title}><strong>{String(index + 1).padStart(2, "0")} {title}</strong><p>{text}</p></div>)}</div>
        </div>
        <LeadForm title={t.home.quote} />
      </section>

      <section className="section split-section compact-section owner-section">
        <div className="owner-photo glass-card">
          <img src={owner.image} alt={`${owner.name}, ${owner.role}`} />
        </div>
        <div>
          <SectionHeading align="left" eyebrow={t.home.owner} title={owner.name} text={owner.bio} />
          <div className="feature-grid">
            {owner.skills.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>{t.home.cta}</h2>
        <Link className="btn btn-primary" to="/contact">{t.home.ctaBtn}</Link>
      </section>
    </>
  );
}
