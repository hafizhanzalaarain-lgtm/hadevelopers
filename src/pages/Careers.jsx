import { BriefcaseBusiness } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import LeadForm from "./LeadForm";

export default function Careers() {
  const roles = ["Internship Programs", "Web Developer Jobs", "Graphic Designer Jobs", "SEO Specialist Jobs"];
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Careers</span>
        <h1>Join a practical, growth-minded digital agency team.</h1>
      </section>
      <section className="section split-section">
        <div>
          <SectionHeading align="left" eyebrow="Open paths" title="Career opportunities" />
          <div className="service-list">{roles.map((role) => <span key={role}><BriefcaseBusiness size={18} />{role}</span>)}</div>
        </div>
        <LeadForm title="Apply / send your profile" />
      </section>
    </>
  );
}
