import { ArrowUpRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageContext.jsx";

export default function About() {
  const { t } = useLanguage();
  const highlights = [
    { icon: GraduationCap, label: t("education"), value: t("degree") },
    { icon: BookOpen, label: t("documentation"), value: t("worksProjectsExperience") },
    { icon: Sparkles, label: t("process"), value: t("keepLearning") },
  ];

  return (
    <section className="section section-anchor" id="tentang">
      <div className="container-wide">
        <div className="section-heading">
          <p className="eyebrow">{t("aboutEyebrow")}</p>
          <h2>{t("aboutTitle")} <span className="text-gradient">{t("aboutTitleAccent")}</span></h2>
        </div>
        <div className="about-layout">
          <div className="about-intro">
            <p className="about-lead">{t("hello")}</p>
            <p className="body-copy">{t("aboutDescription")}</p>
            <a className="text-link" href="#kontak">
              {t("sayHello")} <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="about-highlights">
            {highlights.map(({ icon: Icon, label, value }) => (
              <article className="highlight-card" key={label}>
                <span className="highlight-icon"><Icon size={19} aria-hidden="true" /></span>
                <div>
                  <p>{label}</p>
                  <h3>{value}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
