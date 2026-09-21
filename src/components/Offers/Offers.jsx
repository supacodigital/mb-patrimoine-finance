import { useEffect, useRef, useState } from "react";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Check, Clock, Users } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import "./Offers.css";

const scrollToContact = (e) => {
  e.preventDefault();
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
};

/**
 * Aplatit les gammes en une liste unique de cartes : chaque carte porte
 * l'identité de sa gamme (label, couleur, icône) au lieu de dépendre d'un
 * en-tête de bloc. La première carte d'une gamme reçoit l'ancre #gamme-<id>
 * visée par les boutons « Vous voulez : ».
 */
function flattenRanges(ranges) {
  return ranges.flatMap((range) =>
    range.offers.map((offer, i) => ({
      offer,
      range,
      anchor: i === 0 ? `gamme-${range.id}` : undefined,
    }))
  );
}

function OfferCard({ offer, range, anchor, ctaLabel, index, visible }) {
  const Icon = LucideIcons[range.icon] || LucideIcons.Star;

  return (
    <article
      id={anchor}
      className={`offer-card ${offer.featured ? "offer-card--featured" : ""} ${
        offer.wide ? "offer-card--wide" : ""
      } reveal ${visible ? "reveal--visible" : ""}`}
      style={{ "--range-color": range.color, transitionDelay: `${index * 0.07}s` }}
    >
      <div className="offer-card__range">
        <span className="offer-card__range-icon">
          <Icon size={15} aria-hidden="true" />
        </span>
        {range.label}
      </div>

      {offer.partner && (
        <span className="offer-card__partner">
          En partenariat avec {offer.partner}
        </span>
      )}

      <p className="offer-card__baseline">{offer.baseline}</p>
      <h3 className="offer-card__title">{offer.title}</h3>

      {offer.format && (
        <p className="offer-card__format">
          <Clock size={17} aria-hidden="true" />
          {offer.format}
        </p>
      )}

      <ul className="offer-card__list">
        {offer.content.map((line, i) => (
          <li key={i} className="offer-card__item">
            <Check size={15} className="offer-card__check" aria-hidden="true" />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="offer-card__meta">
        {offer.audience && (
          <p className="offer-card__meta-line">
            <Users size={14} aria-hidden="true" />
            {offer.audience}
          </p>
        )}
      </div>

      <a
        href="#contact"
        className={`offer-card__cta ${
          offer.featured ? "btn btn-primary" : "btn btn-outline"
        }`}
        onClick={scrollToContact}
      >
        {ctaLabel}
        <ArrowRight size={16} />
      </a>

      {offer.legal && <p className="offer-card__legal">{offer.legal}</p>}
    </article>
  );
}

export default function Offers({ offers }) {
  const [ref, inView] = useInView();
  const [cardsRef, cardsInView] = useInView();
  const cards = flattenRanges(offers.ranges);

  // Slider mobile : suit la carte centrée pour allumer le bon indicateur.
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const middle = track.scrollLeft + track.clientWidth / 2;
      const items = [...track.children];
      let closest = 0;
      let min = Infinity;
      items.forEach((el, i) => {
        const center = el.offsetLeft + el.offsetWidth / 2;
        const d = Math.abs(center - middle);
        if (d < min) {
          min = d;
          closest = i;
        }
      });
      setCurrent(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // scrollIntoView déplacerait aussi la page verticalement :
  // on ne fait défiler que la piste.
  const goTo = (i) => {
    const track = trackRef.current;
    const el = track?.children[i];
    if (!track || !el) return;
    track.scrollTo({
      left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="offers" id="offres">
      <div className="container">
        <div
          ref={ref}
          className={`section-header reveal ${inView ? "reveal--visible" : ""}`}
        >
          <span className="section-label">{offers.label}</span>
          <h2 className="section-title">{offers.title}</h2>
          <p className="section-subtitle">{offers.subtitle}</p>
        </div>

        {offers.needs?.length > 0 && (
          <div
            className={`offers__needs reveal ${inView ? "reveal--visible" : ""}`}
          >
            <p className="offers__needs-label">{offers.needsLabel}</p>
            <div className="offers__needs-grid">
              {offers.needs.map((need, i) => (
                <a
                  key={i}
                  href={`#gamme-${need.target}`}
                  className="offers__need"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(`#gamme-${need.target}`)
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                >
                  {need.label}
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        )}

        <div
          className="offers__grid"
          ref={(node) => {
            trackRef.current = node;
            cardsRef.current = node;
          }}
        >
          {cards.map(({ offer, range, anchor }, i) => (
            <OfferCard
              key={`${range.id}-${i}`}
              offer={offer}
              range={range}
              anchor={anchor}
              ctaLabel={offers.ctaLabel}
              index={i}
              visible={cardsInView}
            />
          ))}
        </div>

        <div className="offers__dots" role="tablist" aria-label="Navigation des accompagnements">
          {cards.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Accompagnement ${i + 1} sur ${cards.length}`}
              className={`offers__dot ${i === current ? "offers__dot--active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        {offers.pricingNote && (
          <p className="offers__pricing-note">{offers.pricingNote}</p>
        )}
      </div>
    </section>
  );
}
