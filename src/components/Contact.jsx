import { ArrowUpRight, Linkedin, Mail, MessageCircle } from "lucide-react";
import { SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";

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
  return (
    <section className="section contact-section section-anchor" id="kontak">
      <div className="container-wide">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">06 / Kontak</p>
            <h2>Ada ide menarik?<br /><span className="text-gradient">Mari bicarakan.</span></h2>
            <p>
              Hubungi saya melalui WhatsApp, email, atau media sosial.
            </p>
            <a
              className="button button-primary contact-email-button"
              href="https://wa.me/62882022681516?text=Halo%20Sokhibul%20Amin%2C%20saya%20ingin%20berdiskusi%20mengenai%20portofolio%20Anda."
              target="_blank"
              rel="noreferrer"
            >
              Hubungi via WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="contact-list">
            {contacts.map(({ name, value, href, icon: Icon, iconColor, external }) => (
              <a
                className="contact-item"
                href={href}
                key={name}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
