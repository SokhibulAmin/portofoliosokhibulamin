import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-inner">
        <a className="wordmark footer-wordmark" href="#beranda">
          <img
            className="wordmark-logo"
            src="/images/profile/logo.webp"
            alt=""
            width="36"
            height="36"
            loading="lazy"
          />
          <span>Sokhibul Amin<span className="wordmark-period">.</span></span>
        </a>
        <p>Karya, proyek, pengalaman, dan perjalanan belajar.</p>
        <a className="back-to-top" href="#beranda">
          Kembali ke atas <ArrowUpRight size={14} />
        </a>
        <span className="footer-copyright">© {new Date().getFullYear()} Sokhibul Amin.</span>
      </div>
    </footer>
  );
}
