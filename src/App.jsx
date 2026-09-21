import { useState, useEffect } from "react";
import "./App.css";
import {
  site,
  nav,
  hero,
  about,
  services,
  servicesIntro,
  offers,
  portfolio,
  testimonials,
  faq,
  contact,
  footer,
} from "./data/siteData";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Offers from "./components/Offers/Offers";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { PageLoader } from "./components/UI/Skeleton";
import BackToTop from "./components/UI/BackToTop";
import JoinUsPage from "./pages/JoinUsPage";

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const handler = () => {
      setPage("home");
      const target = sessionStorage.getItem("scrollTo");
      if (target) {
        sessionStorage.removeItem("scrollTo");
        setTimeout(() => {
          document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };
    window.addEventListener("go-home", handler);
    return () => window.removeEventListener("go-home", handler);
  }, []);

  if (page === "joinus") {
    return (
      <>
        <Navbar site={site} nav={nav} onJoinUs={() => setPage("joinus")} />
        <JoinUsPage onBack={() => { setPage("home"); window.scrollTo({ top: 0 }); }} />
        <Footer site={site} nav={nav} footer={footer} contact={contact} />
      </>
    );
  }

  return (
    <>
      <a href="#accueil" className="skip-link">
        Aller au contenu principal
      </a>
      <PageLoader />
      <Navbar site={site} nav={nav} onJoinUs={() => setPage("joinus")} />
      <main>
        <Hero hero={hero} site={site} />
        <About about={about} />
        <Offers offers={offers} />
        <Services services={services} intro={servicesIntro} />
        <Portfolio portfolio={portfolio} />
        <Testimonials testimonials={testimonials} />
        <FAQ faq={faq} />
        <Contact contact={contact} />
      </main>
      <Footer site={site} nav={nav} footer={footer} contact={contact} />
      <BackToTop />
    </>
  );
}
