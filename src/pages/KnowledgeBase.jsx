import { BookOpen, HelpCircle, PlaySquare } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function KnowledgeBase() {
  const groups = [
    ["FAQs", HelpCircle, ["How long does a website take?", "What do I need before starting?", "Can I upgrade hosting later?"]],
    ["Tutorials", BookOpen, ["How to request changes", "How to read SEO reports", "How to manage website content"]],
    ["Video Tutorials", PlaySquare, ["Domain setup guide", "Client portal walkthrough", "Invoice and ticket guide"]]
  ];
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Knowledge Base</span>
        <h1>FAQs, tutorials, guides, and video learning for HA Developers clients.</h1>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Support library" title="Find answers quickly" />
        <div className="card-grid three">
          {groups.map(([title, Icon, items]) => (
            <article className="glass-card" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
