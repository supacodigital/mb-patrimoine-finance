import * as LucideIcons from "lucide-react";
import { useInView } from "../../hooks/useInView";
import "./Portfolio.css";

export default function Portfolio({ portfolio }) {
  const [headerRef, headerInView] = useInView();

  return (
    <section className="portfolio" id="accompagnement">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${
            headerInView ? "reveal--visible" : ""
          }`}
        >
          <h2 className="section-title">{portfolio.title}</h2>
          <p className="section-subtitle">{portfolio.subtitle}</p>
        </div>

        <div className="process__steps">
          {portfolio.steps.map((step, i) => {
            const Icon = LucideIcons[step.icon] || LucideIcons.CheckCircle;
            return (
              <div
                key={i}
                className={`process-step reveal ${
                  headerInView ? "reveal--visible" : ""
                }`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="process-step__icon">
                  <Icon size={22} />
                </div>
                <div className="process-step__content">
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__description">
                    {step.description}
                  </p>
                </div>
                {i < portfolio.steps.length - 1 && (
                  <div className="process-step__connector" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
