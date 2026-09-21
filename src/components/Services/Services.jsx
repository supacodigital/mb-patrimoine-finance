import { useState, useRef, useEffect, useCallback } from "react";
import * as LucideIcons from "lucide-react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";
import "./Services.css";

const COLORS = [
  "#0e3f3a",
  "#1a6b5a",
  "#ff6b4a",
  "#2d4a7a",
  "#7a3d6b",
  "#b45309",
];

function ServiceCard({ icon, image, title, themes, questions, index, active }) {
  const Icon = LucideIcons[icon] || LucideIcons.Star;
  const color = COLORS[index % COLORS.length];
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`svc-card ${active ? "svc-card--active" : ""}`}
      style={{ "--card-color": color }}
    >
      {/* Image gauche */}
      <div className="svc-card__img">
        {image && <img src={image} alt="" aria-hidden="true" />}
        <div className="svc-card__img-overlay" />
        <span className="svc-card__num">{num}</span>
      </div>

      {/* Contenu droite */}
      <div className="svc-card__body">
        <div className="svc-card__header">
          <div className="svc-card__icon">
            <Icon size={22} />
          </div>
          <h3 className="svc-card__title">{title}</h3>
        </div>

        <div className="svc-card__cols">
          {/* Colonne thèmes */}
          <div className="svc-card__col">
            <div className="svc-card__tags">
              {themes.map((t, i) => (
                <span key={i} className="svc-card__tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Colonne questions */}
          <div className="svc-card__col">
            <p className="svc-card__col-label">Questionnement</p>
            <ul className="svc-card__questions">
              {questions.map((q, i) => (
                <li key={i}>
                  <span className="svc-card__quote">"</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href="#contact"
          className="svc-card__cta"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Prendre rendez-vous <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}

const AUTOPLAY_DELAY = 5000;

export default function Services({ services, intro }) {
  const [ref, inView] = useInView();
  const carouselRef = useRef(null);
  const [carouselVisible, setCarouselVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const total = services.length;

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setCarouselVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback(
    (i) => {
      setCurrent(((i % total) + total) % total);
    },
    [total]
  );

  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Autoplay — uniquement quand le carousel est visible
  useEffect(() => {
    if (paused || !carouselVisible) return;
    timerRef.current = setTimeout(() => next(), AUTOPLAY_DELAY);
    return () => clearTimeout(timerRef.current);
  }, [current, paused, carouselVisible, next]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 40) next();
    else if (delta < -40) prev();
    touchStartX.current = null;
  };

  const partners = [
    "allora-removebg-preview.png",
    "altaroc.png",
    "CIR-removebg-preview.png",
    "colonies_logo-removebg-preview.png",
    "crequy-removebg-preview.png",
    "eiffel.png",
    "inter.png",
    "logo-colocatere-removebg-preview.png",
    "perl_logo-removebg-preview.png",
    "sei.png",
    "norma.png",
  ];

  const partners2 = [
    "FIDUCIAL-GERANCE-removebg-preview.png",
    "Logo-Sofidy-sans-baseline-removebg-preview.png",
    "arkea-removebg-preview.png",
    "coeurforest-removebg-preview.png",
    "corium-removebg-preview.png",
    "cropped-1771238057-removebg-preview.png",
    "intergestion-removebg-preview.png",
    "kyanos-removebg-preview.png",
    "les-3-colonnes-logo-1024x281-removebg-preview.png",
    "logo-swisslife-4-removebg-preview.png",
    "logo_digital_insure-removebg-preview.png",
    "logotype-rvb-ERES-fond-blanc-1599037450-removebg-preview.png",
    "tmp_1755642551582_27495662_1a5f_462f_bd9a_7d944cb2163d_b1d38ef3e1-removebg-preview.png",
    "tmp_1755642613155_3848f7c4_562b_4bf6_930c_f0b44c78c2b0_695a53e599-removebg-preview.png",
    "welcome-removebg-preview.png",
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        {/* ── Intro ── */}
        <div
          className={`services__intro reveal ${
            inView ? "reveal--visible" : ""
          }`}
          ref={ref}
        >
          <span className="services__intro-label">{intro.label}</span>
          <h2 className="services__intro-title">{intro.title}</h2>
          <p className="services__intro-text">{intro.text}</p>
        </div>

        {/* ── Nav titres (desktop) ── */}
        <nav className="svc-nav">
          {services.map((service, i) => (
            <button
              key={i}
              className={`svc-nav__item ${
                i === current ? "svc-nav__item--active" : ""
              }`}
              style={{ "--nav-color": COLORS[i % COLORS.length] }}
              onClick={() => goTo(i)}
            >
              {service.title}
            </button>
          ))}
        </nav>

        {/* ── Carousel ── */}
        <div
          ref={carouselRef}
          className="svc-carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="svc-carousel__track">
            {services.map((service, i) => (
              <div
                key={i}
                className={`svc-carousel__slide ${
                  i === current ? "svc-carousel__slide--active" : ""
                }`}
              >
                <ServiceCard {...service} index={i} active={i === current} />
              </div>
            ))}
          </div>

          {/* Contrôles */}
          <div className="svc-carousel__controls">
            <button
              className="svc-carousel__arrow"
              onClick={prev}
              aria-label="Précédent"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="svc-carousel__dots">
              {services.map((_, i) => (
                <button
                  key={i}
                  className={`svc-carousel__dot ${
                    i === current ? "svc-carousel__dot--active" : ""
                  }`}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                >
                  <span
                    className="svc-carousel__dot-progress"
                    style={{
                      "--delay": `${AUTOPLAY_DELAY}ms`,
                      animationPlayState:
                        paused || !carouselVisible ? "paused" : "running",
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              className="svc-carousel__arrow"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Reprendre" : "Pause"}
            >
              {paused ? <Play size={18} /> : <Pause size={18} />}
            </button>

            <button
              className="svc-carousel__arrow"
              onClick={next}
              aria-label="Suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Bandeau partenaires ── */}
      <div className="partners-banner">
        <p className="partners-banner__label">Mes partenaires</p>

        <div className="partners-banner__track">
          {[...partners, ...partners, ...partners, ...partners].map(
            (file, i) => (
              <div key={i} className="partners-banner__item">
                <img
                  src={`/partenaires/${file}`}
                  alt={file.replace(/-removebg-preview\.png$/, "")}
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* ── Bandeau partenaires 2 (gauche → droite) ── */}
      <div className="partners-banner partners-banner--reverse">
        <div className="partners-banner__track partners-banner__track--reverse">
          {[...partners2, ...partners2, ...partners2, ...partners2].map(
            (file, i) => (
              <div key={i} className="partners-banner__item">
                <img
                  src={`/partenaires2/${file}`}
                  alt={file.replace(/-removebg-preview\.png$/, "")}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
