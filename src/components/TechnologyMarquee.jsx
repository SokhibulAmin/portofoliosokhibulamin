import { Code2, FileSpreadsheet } from "lucide-react";
import {
  SiBootstrap,
  SiFlask,
  SiFontawesome,
  SiGooglefonts,
  SiHtml5,
  SiJavascript,
  SiJinja,
  SiKeras,
  SiMariadb,
  SiMysql,
  SiNumpy,
  SiPhp,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiXampp,
} from "@icons-pack/react-simple-icons";
import { useLanguage } from "../LanguageContext.jsx";

const tools = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vite", icon: SiVite, color: "#9B73FF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Vercel", icon: SiVercel, color: "var(--text)" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: Code2, color: "#38BDF8" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MariaDB", icon: SiMariadb, color: "#003545" },
  { name: "XAMPP", icon: SiXampp, color: "#FB7A24" },
  { name: "Font Awesome", icon: SiFontawesome, color: "#528DD7" },
  { name: "Google Fonts", icon: SiGooglefonts, color: "var(--text)" },
  { name: "Excel", icon: FileSpreadsheet, color: "#217346" },
  { name: "Python", icon: SiPython, color: "#FFD43B" },
  { name: "Flask", icon: SiFlask, color: "var(--text)" },
  { name: "Jinja2", icon: SiJinja, color: "#B41717" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Keras", icon: SiKeras, color: "#D00000" },
  { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
];

function ToolItems({ isDuplicate = false }) {
  return (
    <div className="technology-marquee-group" aria-hidden={isDuplicate}>
      {tools.map(({ name, icon: Icon, color }) => (
        <span className="technology-marquee-item" key={name}>
          <Icon className="technology-marquee-icon" size={22} color={color} aria-hidden="true" />
          <span>{name}</span>
        </span>
      ))}
    </div>
  );
}

export default function TechnologyMarquee() {
  const { t } = useLanguage();

  return (
    <section className="technology-marquee" aria-label={t("tools")}>
      <p className="technology-marquee-label">{t("tools")}</p>
      <div className="technology-marquee-viewport">
        <div className="technology-marquee-track">
          <ToolItems />
          <ToolItems isDuplicate />
        </div>
      </div>
    </section>
  );
}
