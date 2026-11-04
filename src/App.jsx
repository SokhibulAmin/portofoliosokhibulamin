import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";
import { LanguageProvider, useLanguage } from "./LanguageContext.jsx";

function Portfolio() {
  const { t } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#main">{t("skip")}</a>
      <Navbar />
      <main id="main">
        <Hero />
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Projects /></ScrollReveal>
        <ScrollReveal><Skills /></ScrollReveal>
        <ScrollReveal><Experience /></ScrollReveal>
        <ScrollReveal><Certificates /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <ScrollReveal><Footer /></ScrollReveal>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}
