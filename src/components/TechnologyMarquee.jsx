import { FileSpreadsheet } from "lucide-react";
import {
  SiFlask,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { useLanguage } from "../LanguageContext.jsx";

const tools = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vite", icon: SiVite, color: "#9B73FF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Vercel", icon: SiVercel, color: "var(--text)" },
  { name: "Excel", icon: FileSpreadsheet, color: "#217346" },
  { name: "Python", icon: SiPython, color: "#FFD43B" },
  { name: "Flask", icon: SiFlask, color: "var(--text)" },
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
