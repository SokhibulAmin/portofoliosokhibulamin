import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "../LanguageContext.jsx";

const links = [
  { label: "navAbout", href: "#tentang" },
  { label: "navProjects", href: "#projek" },
  { label: "navSkills", href: "#keahlian" },
  { label: "navExperience", href: "#pengalaman" },
  { label: "navCertificates", href: "#sertifikat" },
  { label: "navContact", href: "#kontak" },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme = savedTheme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = initialTheme;
    return initialTheme;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav-shell container-wide" aria-label={t("navLabel")}>
        <a className="wordmark" href="#beranda" onClick={closeMenu}>
          <img
            className="wordmark-logo"
            src="/images/profile-logo.webp"
            alt=""
            width="44"
            height="44"
          />
          <span>Sokhibul Amin<span className="wordmark-period">.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? t("menuClose") : t("menuOpen")}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div
          id="primary-navigation"
          className={`nav-links${menuOpen ? " is-open" : ""}`}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {t(link.label)}
            </a>
          ))}
          <label className="language-picker">
            <span className="visually-hidden">{t("language")}</span>
            <select
              aria-label={t("language")}
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option value="id">Indonesia</option>
              <option value="en">English</option>
              <option value="zh">中文</option>
            </select>
          </label>
          <button
            className="theme-toggle"
            type="button"
            aria-label={theme === "dark" ? t("themeLight") : t("themeDark")}
            title={theme === "dark" ? t("themeLightTitle") : t("themeDarkTitle")}
            onClick={() => setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="nav-cta" href="#kontak" onClick={closeMenu}>
            {t("connect")} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
