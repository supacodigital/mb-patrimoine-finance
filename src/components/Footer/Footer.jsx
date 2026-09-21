import { useState } from "react";
import { Instagram, LucideLinkedin } from "lucide-react";
import LegalModal from "../UI/LegalModal";
import "./Footer.css";

export default function Footer({ site, nav, footer, contact }) {
  const [modal, setModal] = useState(null);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* ── Ligne du haut : logo + tagline + certifications ── */}
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logo.png" alt={site.name} className="footer__logo" />
            <p className="footer__tagline">{site.tagline}</p>
          </div>

          <div className="footer__certs">
            <h3>{footer.legalMention}</h3>
            <div className="footer__certs-logos">
              <img src="/logo_amf.webp" alt="AMF" />
              <img src="/logo_cncef.webp" alt="CNCEF" />
              <img src="/logo_orias.webp" alt="ORIAS" />
            </div>
            {footer.partnerMention && (
              <p className="footer__partner">{footer.partnerMention}</p>
            )}
          </div>
        </div>

        {/* ── Séparateur ── */}
        <hr className="footer__divider" />

        {/* ── Ligne du milieu : nav + contact + social ── */}
        <div className="footer__middle">
          <div className="footer__col">
            <p className="footer__col-title">Navigation</p>
            <ul className="footer__nav-list">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="footer__nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Contact</p>
            <p className="footer__contact-item">{contact.email}</p>
            <p className="footer__contact-item">{contact.phone}</p>
            <p className="footer__contact-item">{contact.address}</p>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Nous suivre</p>
            <div className="footer__social">
              <a
                href={
                  contact.social.find((s) => s.platform === "Instagram")
                    ?.href ?? "#"
                }
                className="footer__social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a
                href={
                  contact.social.find((s) => s.platform === "LinkedIn")?.href ??
                  "https://www.linkedin.com/in/m%C3%A9lissa-bessonnat-0089a592/?originalSubdomain=fr"
                }
                className="footer__social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LucideLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Séparateur ── */}
        <hr className="footer__divider" />

        {/* ── Bas : copyright + mentions légales ── */}
        <div className="footer__bottom">
          <p className="footer__copyright">{footer.copyright}</p>
          <div className="footer__legal">
            <button
              className="footer__legal-link"
              onClick={() => setModal("legal")}
            >
              Mentions légales
            </button>
            <button
              className="footer__legal-link"
              onClick={() => setModal("privacy")}
            >
              Politique de confidentialité
            </button>
            <a
              href="https://supaco-digital.com/"
              className="footer__legal-link footer__legal-link--agency"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site réalisé par <span>Supaco Digital</span>
            </a>
          </div>
        </div>
      </div>

      {modal && <LegalModal modalKey={modal} onClose={() => setModal(null)} />}
    </footer>
  );
}
