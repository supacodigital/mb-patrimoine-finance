import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

export default function Navbar({ site, nav, onJoinUs }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Barre de progression
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      // Section active
      const sections = nav.map((item) => item.href.replace("#", ""));
      let found = null;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          found = sections[i];
          break;
        }
      }
      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nav]);

  // Menu mobile ouvert : fermeture au clavier ou au clic extérieur,
  // et on empêche la page de défiler derrière le panneau.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onPointerDown = (e) => {
      if (!headerRef.current?.contains(e.target)) setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTo", href);
      window.dispatchEvent(new CustomEvent("go-home"));
    }
  };

  return (
    <header
      ref={headerRef}
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
    >
      {/* Barre de progression de lecture */}
      <div
        className="navbar__progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="navbar__container container">
        <a
          href="#accueil"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#accueil");
          }}
        >
          <img src="/logo.png" alt={site.name} />
        </a>

        <nav className={`navbar__nav ${isOpen ? "navbar__nav--open" : ""}`}>
          {nav.map((item) => {
            const sectionId = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`navbar__link ${
                  activeSection === sectionId ? "navbar__link--active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            );
          })}
          <button
            className="navbar__link navbar__link--joinus"
            onClick={() => {
              setIsOpen(false);
              onJoinUs();
            }}
          >
            Me rejoindre
          </button>
          <a
            href="#contact"
            className="btn btn-primary navbar__cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
          >
            {site.cta}
          </a>
        </nav>

        <button
          className="navbar__burger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          <span className="navbar__burger-lines" aria-hidden="true">
            <span className="navbar__burger-line" />
            <span className="navbar__burger-line" />
          </span>
        </button>
      </div>
    </header>
  );
}
