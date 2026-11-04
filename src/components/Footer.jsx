import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container-wide footer-inner">
        <a className="wordmark footer-wordmark" href="#beranda">
          <img
            className="wordmark-logo"
            src="/images/profile-logo.webp"
            alt=""
            width="36"
            height="36"
            loading="lazy"
          />
          <span>Sokhibul Amin<span className="wordmark-period">.</span></span>
        </a>
        <p>{t("footerDescription")}</p>
        <a className="back-to-top" href="#beranda">
          {t("backToTop")} <ArrowUpRight size={14} />
        </a>
        <span className="footer-copyright">© {new Date().getFullYear()} Sokhibul Amin.</span>
      </div>
    </footer>
  );
}
