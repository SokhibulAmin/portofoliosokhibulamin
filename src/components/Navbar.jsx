import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { label: "Tentang", href: "#tentang" },
  { label: "Karya", href: "#projek" },
  { label: "Skills", href: "#keahlian" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Sertifikat", href: "#sertifikat" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
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
      <nav className="nav-shell container-wide" aria-label="Navigasi utama">
        <a className="wordmark" href="#beranda" onClick={closeMenu}>
          <img
            className="wordmark-logo"
            src="/images/profile/logo.webp"
            alt=""
            width="44"
            height="44"
          />
          <span>Sokhibul Amin<span className="wordmark-period">.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
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
              {link.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            type="button"
            aria-label={theme === "dark" ? "Aktifkan tema terang" : "Aktifkan tema gelap"}
            title={theme === "dark" ? "Tema terang" : "Tema gelap"}
            onClick={() => setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="nav-cta" href="#kontak" onClick={closeMenu}>
            Mari terhubung <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
