import { ArrowRight, ChevronDown } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import "./Hero.css";

export default function Hero({ hero, site }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const scrollToNext = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="accueil" ref={ref}>
      {/* Image de fond + overlay */}
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="container hero__container">
        <div
          className={`hero__content reveal ${inView ? "reveal--visible" : ""}`}
        >
          <h1 className="hero__title">
            {hero.title.split(hero.highlight).map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="hero__highlight">{hero.highlight}</span>
                </span>
              ) : (
                part
              )
            )}
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__actions">
            <a
              href={hero.ctaPrimary.href}
              className="hero__cta-primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(hero.ctaPrimary.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {hero.ctaPrimary.label}
              <ArrowRight size={18} />
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="hero__cta-secondary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(hero.ctaSecondary.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>
      </div>

      <button
        className="hero__scroll"
        onClick={scrollToNext}
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={22} />
      </button>
    </section>
  );
}
