import * as LucideIcons from "lucide-react";
import { Check, ArrowRight } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import "./JoinUs.css";

const LEVEL_COLORS = ["#1a6b5a", "#0e3f3a", "#ff6b4a"];

function RoleCard({
  icon,
  title,
  description,
  engagement,
  compensation,
  requirements,
  index,
  visible,
}) {
  const Icon = LucideIcons[icon] || LucideIcons.Star;
  const color = LEVEL_COLORS[index % LEVEL_COLORS.length];

  return (
    <div
      className={`role-card reveal ${visible ? "reveal--visible" : ""}`}
      style={{ "--role-color": color, transitionDelay: `${index * 0.1}s` }}
    >
      <div className="role-card__top">
        <div className="role-card__step">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="role-card__icon">
          <Icon size={22} />
        </div>
      </div>

      <div className="role-card__content">
        <div className="role-card__badges">
          <span className="role-card__badge role-card__badge--engagement">
            {engagement}
          </span>
        </div>
        <h3 className="role-card__title">{title}</h3>
        <p className="role-card__description">{description}</p>
      </div>

      <div className="role-card__footer">
        <div className="role-card__requirements">
          <ul className="role-card__req-list">
            {requirements.map((req, i) => (
              <li key={i} className="role-card__req-item">
                <Check size={13} />
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="role-card__divider" />

        <div className="role-card__compensation">
          <span className="role-card__comp-label">Rémunération</span>
          <span className="role-card__comp-value">{compensation}</span>
        </div>

        <a href="#contact" className="role-card__cta">
          Postuler <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}

export default function JoinUs({ joinUs }) {
  const [ref, inView] = useInView();

  return (
    <section className="join-us" id="rejoindre">
      <div className="container">
        <div
          ref={ref}
          className={`join-us__header reveal ${
            inView ? "reveal--visible" : ""
          }`}
        >
          <span className="join-us__label">{joinUs.label}</span>
          <h2 className="join-us__title">{joinUs.title}</h2>
          <p className="join-us__subtitle" dangerouslySetInnerHTML={{ __html: joinUs.subtitle }} />
        </div>

        <div className="join-us__grid">
          {joinUs.roles.map((role, i) => (
            <RoleCard key={i} {...role} index={i} visible={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
