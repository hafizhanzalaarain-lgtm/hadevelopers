import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/seed";
import LeadForm from "./LeadForm";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId) || services[0];
  const Icon = service.icon;

  return (
    <>
      <section className="page-hero">
        <span className="icon-badge"><Icon size={28} /></span>
        <h1>{service.title}</h1>
        <p>{service.summary}</p>
        <Link className="btn btn-primary" to="/contact">Request {service.title} <ArrowRight size={18} /></Link>
      </section>
      <section className="section split-section">
        <div>
          <SectionHeading align="left" eyebrow="Sub-services" title={`Everything included in ${service.title}`} />
          <div className="service-list">
            {service.subServices.map((item) => <span key={item}><CheckCircle2 size={18} />{item}</span>)}
          </div>
        </div>
        <LeadForm title={`Get a ${service.title} quote`} />
      </section>
    </>
  );
}
