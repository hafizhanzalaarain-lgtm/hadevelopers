import SectionHeading from "../components/SectionHeading";
import { blogPosts } from "../data/seed";

export default function Blog() {
  const categories = ["Web Development", "SEO", "Digital Marketing", "WordPress", "Business Growth", "AI Tools"];
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Blog</span>
        <h1>Insights for websites, SEO, marketing, WordPress, business growth, and AI tools.</h1>
      </section>
      <section className="section">
        <SectionHeading eyebrow="Categories" title="Browse the knowledge feed" />
        <div className="logo-cloud">{categories.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="card-grid three">
          {blogPosts.concat([
            { title: "WordPress vs Custom React Websites", category: "WordPress", date: "May 2026" },
            { title: "How to Plan a Marketing Funnel", category: "Digital Marketing", date: "April 2026" },
            { title: "Business Growth Metrics That Matter", category: "Business Growth", date: "April 2026" }
          ]).map((post) => (
            <article className="glass-card article-card" key={post.title}>
              <span className="mini-label">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.date}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
