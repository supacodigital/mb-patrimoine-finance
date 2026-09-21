import { useInView } from "../../hooks/useInView";
import { useCountUp } from "../../hooks/useCountUp";
import "./About.css";

// Mots/expressions à mettre en valeur dans les paragraphes
const HIGHLIGHTS = {
  strong: [
    "l’écoute, la compréhension, la construction d’une relation de confiance",
    "sincère, clair et personnalisé",
    "stratégie patrimoniale",
  ],
  accent: ["MB Patrimoine & Finance", "confiance et sérénité"],
};

function highlightText(text) {
  let parts = [{ text, type: "plain" }];

  const applyHighlight = (type, words) => {
    const result = [];
    for (const part of parts) {
      if (part.type !== "plain") {
        result.push(part);
        continue;
      }
      let remaining = part.text;
      let lastIndex = 0;
      const regex = new RegExp(
        `(${words
          .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
          .join("|")})`,
        "gi"
      );
      let match;
      const subParts = [];
      while ((match = regex.exec(remaining)) !== null) {
        if (match.index > lastIndex)
          subParts.push({
            text: remaining.slice(lastIndex, match.index),
            type: "plain",
          });
        subParts.push({ text: match[0], type });
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < remaining.length)
        subParts.push({ text: remaining.slice(lastIndex), type: "plain" });
      result.push(...(subParts.length ? subParts : [part]));
    }
    parts = result;
  };

  applyHighlight("strong", HIGHLIGHTS.strong);
  applyHighlight("accent", HIGHLIGHTS.accent);

  return parts.map((p, i) => {
    if (p.type === "strong")
      return (
        <mark key={i} className="about__mark--strong">
          {p.text}
        </mark>
      );
    if (p.type === "accent")
      return (
        <mark key={i} className="about__mark--accent">
          {p.text}
        </mark>
      );
    return p.text;
  });
}

const STATS = [
  { value: 20, suffix: "+", label: "Ans d'expériences" },
  { value: 150, suffix: "+", label: "Accompagnements" },
  { value: 100, suffix: "%", label: "stratégies" },
];

function StatBadge({ value, suffix, label, started }) {
  const count = useCountUp(value, 1600, started);
  return (
    <div className="about__badge">
      <span className="about__badge-number">
        {count}
        <span className="about__badge-suffix">{suffix}</span>
      </span>
      <span className="about__badge-label">{label}</span>
    </div>
  );
}

export default function About({ about }) {
  const [contentRef, contentInView] = useInView();

  return (
    <section className="about" id="apropos">
      <div className="container">
        <div className="about__layout" ref={contentRef}>
          {/* ── Colonne texte ── */}
          <div
            className={`about__text reveal--left ${
              contentInView ? "reveal--visible" : ""
            }`}
          >
            <span className="about__section-label">{about.label}</span>
            <h2 className="about__title">{about.title}</h2>

            <div className="about__description">
              {about.intro.map((p, i) => (
                <p key={i}>{highlightText(p)}</p>
              ))}

              <p className="about__interventions-label">
                {about.interventions.label}
              </p>
              <ul className="about__list">
                {about.interventions.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>{highlightText(about.interventions.closing)}</p>
            </div>
          </div>

          {/* ── Colonne photo + counters ── */}
          <div
            className={`about__aside reveal--right ${
              contentInView ? "reveal--visible" : ""
            }`}
          >
            <div className="about__photo">
              <img
                src="/photo.jpg"
                alt={about.title}
                className="about__photo-img"
              />
            </div>

            <div className="about__badge-row">
              {STATS.map((stat, i) => (
                <StatBadge key={i} {...stat} started={contentInView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
