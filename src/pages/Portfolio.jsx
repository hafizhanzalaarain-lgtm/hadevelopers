import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { portfolioItems } from "../data/seed";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Websites", "Apps", "Graphics", "SEO"];
  const items = filter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Portfolio</span>
        <h1>Selected websites, apps, graphic design, and SEO case studies.</h1>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Filter work" title="Browse by category" />
        <div className="segmented">{categories.map((category) => <button className={filter === category ? "active" : ""} key={category} type="button" onClick={() => setFilter(category)}>{category}</button>)}</div>
        <div className="portfolio-grid">
          {items.map((item) => <article className="portfolio-card" style={{ "--card-image": `url(${item.image})` }} key={item.title}><span>{item.category}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>
    </>
  );
}
