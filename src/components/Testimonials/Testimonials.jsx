import * as LucideIcons from "lucide-react";
import { Check } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import "./Testimonials.css";

function SolutionCategory({ icon, title, color, items, index, visible }) {
  const Icon = LucideIcons[icon] || LucideIcons.Star;

  return (
    <div
      className={`solution-card reveal ${visible ? "reveal--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="solution-card__header" style={{ "--card-color": color }}>
        <div className="solution-card__icon">
          <Icon size={24} />
        </div>
        <h3 className="solution-card__title">{title}</h3>
      </div>
      <ul className="solution-card__list">
        {items.map((item, i) => (
          <li key={i} className="solution-card__item">
            <Check size={14} className="solution-card__check" />
            {item}
          </li>
        ))}
      </ul>
      <a href="#contact" className="solution-card__cta btn btn-outline">
        En savoir plus
      </a>
    </div>
  );
}

export default function Testimonials({ testimonials }) {
  const [ref, inView] = useInView();

  return (
    <section className="testimonials" id="solutions">
      <div className="container">
        <div
          ref={ref}
          className={`section-header reveal ${inView ? "reveal--visible" : ""}`}
        >
          <h2 className="section-title">{testimonials.title}</h2>
          <p className="section-subtitle">{testimonials.subtitle}</p>
        </div>

        <div className="solutions__grid">
          {testimonials.categories.map((cat, i) => (
            <SolutionCategory key={i} {...cat} index={i} visible={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
