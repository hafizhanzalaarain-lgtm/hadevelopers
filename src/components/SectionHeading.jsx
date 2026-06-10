export default function SectionHeading({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={`section-heading ${align === "left" ? "align-left" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
