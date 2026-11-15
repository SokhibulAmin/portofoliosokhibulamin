import { ArrowUpRight, Linkedin, Mail, MessageCircle } from "lucide-react";
import { SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";
import { useLanguage } from "../LanguageContext.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

const contacts = [
  {
    name: "WhatsApp",
    value: "+62 882-0226-81516",
    href: "https://wa.me/62882022681516?text=Halo%20Sokhibul%20Amin%2C%20saya%20ingin%20berdiskusi%20mengenai%20portofolio%20Anda.",
    icon: MessageCircle,
    iconColor: "#25D366",
    external: true,
  },
  {
    name: "Email",
    value: "sokhibamin1@gmail.com",
    href: "mailto:sokhibamin1@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    name: "Instagram",
    value: "instagram.com/skhblmin",
    href: "https://www.instagram.com/skhblmin",
    icon: SiInstagram,
    iconColor: "#E4405F",
    external: true,
  },
  {
    name: "TikTok",
    value: "tiktok.com/@som.in14",
    href: "https://www.tiktok.com/@som.in14",
    icon: SiTiktok,
    iconColor: "#f0f6fc",
    external: true,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/sokhibul-amin",
    href: "https://www.linkedin.com/in/sokhibul-amin",
    icon: Linkedin,
    iconColor: "#0A66C2",
    external: true,
  },
];

export default function Contact() {
  const { t, language } = useLanguage();
  const whatsappMessage = language === "en"
    ? "Hello Sokhibul Amin, I would like to discuss your portfolio."
    : language === "zh"
      ? "你好 Sokhibul Amin，我想和你讨论一下作品集。"
      : "Halo Sokhibul Amin, saya ingin berdiskusi mengenai portofolio Anda.";
  const whatsappHref = `https://wa.me/62882022681516?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="section contact-section section-anchor" id="kontak">
      <div className="container-wide">
        <div className="contact-panel">
          <ScrollReveal>
            <div className="contact-copy">
              <p className="eyebrow">{t("contactEyebrow")}</p>
              <h2>{t("contactTitle")}<br /><span className="text-gradient">{t("contactTitleAccent")}</span></h2>
              <p>{t("contactDescription")}</p>
              <a
                className="button button-primary contact-email-button"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                {t("contactWhatsApp")} <ArrowUpRight size={17} />
              </a>
            </div>
          </ScrollReveal>
          <div className="contact-list">
            {contacts.map(({ name, value, href, icon: Icon, iconColor, external }, index) => (
              <ScrollReveal delay={index * 90} key={name}>
                <a
                  className="contact-item"
                  href={name === "WhatsApp" ? whatsappHref : href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  aria-label={`${name}: ${value}`}
                >
                  <span className="contact-icon">
                    <Icon
                      size={19}
                      color={iconColor}
                      strokeWidth={name === "Email" ? 1.7 : undefined}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="contact-text">
                    <strong>{name}</strong>
                    <small>{value}</small>
                  </span>
                  <ArrowUpRight className="contact-arrow" size={17} />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
