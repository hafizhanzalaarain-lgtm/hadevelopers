import SectionHeading from "../components/SectionHeading";
import { company, owner, stats, trustBadges } from "../data/seed";

export default function About() {
  const values = ["Clarity", "Performance", "Ownership", "Creativity", "Long-term growth", "Transparent delivery"];
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">About us</span>
        <h1>We turn practical business ideas into polished digital products.</h1>
        <p>{company.name} blends software engineering, design, SEO, marketing, and hosting support into one streamlined agency experience.</p>
      </section>
      <section className="section split-section">
        <div className="glass-card story-card">
          <h2>Company Story</h2>
          <p>HA Developers was built for founders, schools, service businesses, and growing brands that need more than a basic website. We plan, design, develop, launch, and improve digital systems that help clients look credible and sell confidently.</p>
        </div>
        <div className="mission-grid">
          <article className="glass-card"><h3>Mission</h3><p>Deliver premium digital solutions that are fast, accessible, scalable, and aligned with measurable growth.</p></article>
          <article className="glass-card"><h3>Vision</h3><p>Become a trusted international software house for businesses that want reliable digital transformation.</p></article>
        </div>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Values" title="What shapes our work" />
        <div className="logo-cloud">{values.map((value) => <span key={value}>{value}</span>)}</div>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Team" title="Strategy, design, engineering, marketing" text="A lean expert team model that gives every project senior attention and clean execution." />
        <div className="card-grid three">
          {["Product Strategist", "Frontend Engineer", "Backend Engineer", "UI/UX Designer", "SEO Specialist", "Marketing Manager"].map((role) => <article className="team-card glass-card" key={role}><span>{role.slice(0, 2)}</span><h3>{role}</h3><p>Focused on polished delivery, communication, and business impact.</p></article>)}
        </div>
      </section>
      <section className="section split-section owner-section">
        <div className="owner-photo glass-card">
          <img src={owner.image} alt={`${owner.name}, ${owner.role}`} />
        </div>
        <div>
          <SectionHeading align="left" eyebrow="Owner" title={owner.name} text={owner.bio} />
          <div className="feature-grid">
            {owner.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <a className="btn btn-primary" href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hi ${owner.name}, I want to discuss a project with HA Developers.`)}`}>Contact Owner</a>
        </div>
      </section>
      <section className="section split-section">
        <div className="stats-grid">{stats.map(([value, label]) => <div className="stat-card glass-card" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        <div>
          <SectionHeading align="left" eyebrow="Trust" title="Why clients trust us" />
          <div className="feature-grid">{trustBadges.map(([label, Icon]) => <span key={label}><Icon size={18} />{label}</span>)}</div>
        </div>
      </section>
    </>
  );
}
