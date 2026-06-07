import SectionHeading from '../components/SectionHeading.jsx';
import { Award, BadgeCheck, Code2, Rocket, ShieldCheck, Users } from 'lucide-react';

const values = [
  ['Mission', 'To help businesses and students build a stronger digital future through practical technology, premium design, and reliable execution.'],
  ['Vision', 'To become a trusted software house known for polished digital products, transparent service, and career-building IT education.']
];

const reasons = [
  ['Business-first thinking', 'Every build is shaped around leads, trust, usability, and long-term growth.', Rocket],
  ['Clean technical delivery', 'Modern stacks, maintainable structure, and scalable Supabase-backed systems.', Code2],
  ['Premium visual polish', 'Professional typography, motion, contrast, and brand consistency.', Award],
  ['Reliable communication', 'Clear milestones, fast feedback loops, and support after launch.', ShieldCheck]
];

export default function About() {
  return (
    <section className="page section">
      <SectionHeading eyebrow="About HA Developers" title="A modern software house with a practical, premium mindset." text="We build websites, apps, campaigns, designs, and training experiences for businesses that want professional digital execution without unnecessary complexity." />
      <div className="split">
        <img className="rounded-media" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" alt="HA Developers team strategy session" />
        <div className="story-card glass-card">
          <h3>Company Story</h3>
          <p>HA Developers was created to bring agency-grade design and dependable development into one focused service. Our team works with startups, local businesses, educators, and growing companies that need websites, apps, marketing, and creative support that feels current and performs well.</p>
          <p>We keep projects clear: understand the business, design the experience, build the system, launch with confidence, and improve what matters.</p>
        </div>
      </div>
      <div className="card-grid two">{values.map(([title, text]) => <article className="glass-card value-card" key={title}><BadgeCheck /><h3>{title}</h3><p>{text}</p></article>)}</div>
      <SectionHeading eyebrow="Why Choose Us" title="Built for quality, speed, and trust." />
      <div className="card-grid four">{reasons.map(([title, text, Icon]) => <article className="mini-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div>
      <SectionHeading eyebrow="Team" title="Specialists across product, design, code, and growth." />
      <div className="team-grid">
        {['Project Lead', 'Frontend Developer', 'Mobile Developer', 'Creative Designer'].map((role, index) => <article className="team-card" key={role}><div className="avatar"><Users /></div><h3>{role}</h3><p>HA Developers Core Team</p><span>{['Strategy', 'React UI', 'Android Apps', 'Brand Design'][index]}</span></article>)}
      </div>
      <SectionHeading eyebrow="Skills & Expertise" title="Modern capabilities for complete digital launches." />
      <div className="skills">{['React', 'Node.js', 'Supabase', 'Android', 'UI/UX', 'SEO', 'Meta Ads', 'Brand Identity', 'Training'].map((skill) => <span key={skill}>{skill}</span>)}</div>
    </section>
  );
}
