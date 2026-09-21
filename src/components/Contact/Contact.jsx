import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import LegalModal from "../UI/LegalModal";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
  Calendar,
  Instagram,
  Linkedin,
  Check,
  ChevronDown,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";
import "./Contact.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Pas de paramètre `month` : Calendly ouvre sur le mois courant.
// Le figer afficherait un mois passé dès qu'il est dépassé.
// Si l'URL est vidée, un repli affiche les coordonnées directes.
const CALENDLY_URL =
  "https://calendly.com/mbfinance/rendez-vous-decouverte";

const SOCIAL_ICONS = {
  Instagram: Instagram,
  Linkedin: Linkedin,
};

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  stage: "",
  message: "",
};

export default function Contact({ contact }) {
  const [activeTab, setActiveTab] = useState("message");
  const [form, setForm] = useState(EMPTY_FORM);
  const [honeypot, setHoneypot] = useState("");
  const [rgpd, setRgpd] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [privacyModal, setPrivacyModal] = useState(false);
  const [ref, inView] = useInView();
  const formEl = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          stage: form.stage,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm(EMPTY_FORM);
      setRgpd(false);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      // EmailJS renvoie un statut : on distingue le quota mensuel dépassé
      // d'une panne réseau, pour que le visiteur sache quoi faire.
      const code = err?.status;
      setErrorMsg(
        code === 426 || code === 429
          ? "Le service d'envoi est momentanément saturé."
          : ""
      );
      setStatus("error");
      setTimeout(() => setStatus("idle"), 8000);
    }
  };

  const loading = status === "loading";
  const subjectGroups = contact.subjectGroups ?? [];
  const stages = contact.stages ?? [];
  const rdvPoints = contact.rdvPoints ?? [];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div
          className={`contact__layout reveal ${inView ? "reveal--visible" : ""}`}
          ref={ref}
        >
          {/* ── Colonne gauche : contexte ── */}
          <div className="contact__aside">
            <span className="section-label">{contact.label}</span>
            <h2 className="contact__title">{contact.title}</h2>
            <p className="contact__subtitle">{contact.subtitle}</p>

            {rdvPoints.length > 0 && (
              <div className="contact__rdv">
                <p className="contact__rdv-heading">{contact.rdvHeading}</p>
                <ul className="contact__rdv-list">
                  {rdvPoints.map((pt, i) => (
                    <li key={i}>
                      <Check size={14} aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="contact__infos">
              <a href={`mailto:${contact.email}`} className="contact__info-item">
                <Mail size={16} aria-hidden="true" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="contact__info-item"
              >
                <Phone size={16} aria-hidden="true" />
                {contact.phone}
              </a>
              <p className="contact__info-item contact__info-item--static">
                <MapPin size={16} aria-hidden="true" />
                {contact.address}
              </p>
            </div>

            {contact.social?.length > 0 && (
              <div className="contact__social-links">
                {contact.social.map((s, i) => {
                  const Icon = SOCIAL_ICONS[s.platform];
                  return (
                    <a
                      key={i}
                      href={s.href}
                      className="contact__social-link"
                      aria-label={s.platform}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Icon && <Icon size={15} aria-hidden="true" />}
                      {s.platform}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── Colonne droite : formulaire ── */}
          <div
            className={`contact__card reveal ${inView ? "reveal--visible" : ""}`}
            style={{ transitionDelay: "0.12s" }}
          >
            <div className="contact__tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "message"}
                className={`contact__tab ${
                  activeTab === "message" ? "contact__tab--active" : ""
                }`}
                onClick={() => setActiveTab("message")}
              >
                <Send size={15} aria-hidden="true" />
                Envoyer un message
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "call"}
                className={`contact__tab ${
                  activeTab === "call" ? "contact__tab--active" : ""
                }`}
                onClick={() => setActiveTab("call")}
              >
                <Calendar size={15} aria-hidden="true" />
                Réserver un appel
              </button>
            </div>

            {activeTab === "message" && (
              <form
                ref={formEl}
                className="contact__form"
                onSubmit={handleSubmit}
              >
                <div aria-live="polite">
                  {status === "success" && (
                    <div className="contact__toast contact__toast--success">
                      <CheckCircle size={17} aria-hidden="true" />
                      <span>Message envoyé ! Je vous réponds sous 24 h.</span>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="contact__toast contact__toast--error">
                      <AlertCircle size={17} aria-hidden="true" />
                      <span>
                        {errorMsg || "Une erreur est survenue."} Réessayez, ou
                        écrivez-moi directement à {contact.email}.
                      </span>
                    </div>
                  )}
                </div>

                {/* Piège à robots : invisible pour les humains */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />

                {subjectGroups.length > 0 && (
                  <div className="contact__field">
                    <label className="contact__field-label" htmlFor="subject">
                      {contact.subjectLabel}
                    </label>
                    <div className="contact__select-wrap">
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        disabled={loading}
                        required
                      >
                        <option value="" disabled>
                          {contact.subjectPlaceholder}
                        </option>
                        {subjectGroups.map((group) => (
                          <optgroup key={group.gamme} label={group.gamme}>
                            {group.options.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <ChevronDown
                        size={17}
                        className="contact__select-icon"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                )}

                {stages.length > 0 && (
                  <div className="contact__field">
                    <label className="contact__field-label" htmlFor="stage">
                      {contact.stageLabel}
                      <span className="contact__optional">facultatif</span>
                    </label>
                    <div className="contact__select-wrap">
                      <select
                        id="stage"
                        name="stage"
                        value={form.stage}
                        onChange={handleChange}
                        disabled={loading}
                      >
                        <option value="">{contact.stagePlaceholder}</option>
                        {stages.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={17}
                        className="contact__select-icon"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                )}

                <div className="contact__form-row">
                  <div className="contact__field">
                    <label className="contact__field-label" htmlFor="name">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jean Dupont"
                      value={form.name}
                      onChange={handleChange}
                      disabled={loading}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label className="contact__field-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jean@exemple.fr"
                      value={form.email}
                      onChange={handleChange}
                      disabled={loading}
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label className="contact__field-label" htmlFor="phone">
                    Téléphone
                    <span className="contact__optional">facultatif</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="06 00 00 00 00"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>

                <div className="contact__field">
                  <label className="contact__field-label" htmlFor="message">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Où en êtes-vous aujourd'hui, et qu'aimeriez-vous changer ?"
                    value={form.message}
                    onChange={handleChange}
                    disabled={loading}
                    maxLength={500}
                    required
                  />
                  <span
                    className={`contact__char-count ${
                      form.message.length > 480
                        ? "contact__char-count--danger"
                        : form.message.length > 400
                        ? "contact__char-count--warn"
                        : ""
                    }`}
                  >
                    {form.message.length}/500
                  </span>
                </div>

                <label className="contact__rgpd">
                  <input
                    type="checkbox"
                    checked={rgpd}
                    onChange={(e) => setRgpd(e.target.checked)}
                    disabled={loading}
                    required
                  />
                  <span>
                    Vos données restent confidentielles et ne servent qu'à vous
                    répondre.{" "}
                    <button
                      type="button"
                      className="contact__rgpd-link"
                      onClick={() => setPrivacyModal(true)}
                    >
                      Politique de confidentialité
                    </button>
                    .
                  </span>
                </label>

                <button
                  type="submit"
                  className={`contact__submit ${
                    loading ? "contact__submit--loading" : ""
                  }`}
                  disabled={loading || !rgpd}
                >
                  {loading ? (
                    <>
                      <Loader size={16} className="contact__spinner" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={15} aria-hidden="true" />
                    </>
                  )}
                </button>

                {/* Le bouton est inactif tant que la case n'est pas cochée :
                    on le dit, au lieu de laisser un bouton grisé inexpliqué. */}
                {!rgpd && (
                  <p className="contact__submit-hint">
                    Cochez la case ci-dessus pour activer l'envoi.
                  </p>
                )}
              </form>
            )}

            {activeTab === "call" &&
              (CALENDLY_URL ? (
                <div className="contact__calendly">
                  <iframe
                    src={`${CALENDLY_URL}${
                      CALENDLY_URL.includes("?") ? "&" : "?"
                    }embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1`}
                    className="contact__calendly-iframe"
                    title="Réserver un appel avec Mélissa Bessonnat"
                  />
                </div>
              ) : (
                <div className="contact__fallback">
                  <p className="contact__fallback-text">
                    Pour convenir d'un créneau, le plus simple est de
                    m'appeler ou de m'écrire directement — je vous réponds
                    sous 24 h.
                  </p>
                  <div className="contact__fallback-actions">
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="contact__fallback-btn contact__fallback-btn--primary"
                    >
                      <Phone size={16} aria-hidden="true" />
                      {contact.phone}
                    </a>
                    <a
                      href={`mailto:${contact.email}`}
                      className="contact__fallback-btn"
                    >
                      <Mail size={16} aria-hidden="true" />
                      Écrire un email
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {privacyModal && (
        <LegalModal modalKey="privacy" onClose={() => setPrivacyModal(false)} />
      )}
    </section>
  );
}
