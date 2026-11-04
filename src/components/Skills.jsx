import { BarChart3, BrainCircuit, Code2 } from "lucide-react";
import { useLanguage } from "../LanguageContext.jsx";

export default function Skills() {
  const { t } = useLanguage();
  const skills = [
    { icon: Code2, name: t("skillWeb"), detail: t("skillWebDetail") },
    { icon: BarChart3, name: t("skillData"), detail: t("skillDataDetail") },
    { icon: BrainCircuit, name: t("skillDeepLearning"), detail: t("skillDeepLearningDetail") },
  ];

  return (
    <section className="section section-tinted section-anchor" id="keahlian">
      <div className="container-wide">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">{t("skillsEyebrow")}</p>
            <h2>{t("skillsTitle")} <span className="text-gradient">{t("skillsTitleAccent")}</span></h2>
          </div>
          <p className="heading-note">{t("skillsNote")}</p>
        </div>
        <div className="skills-grid">
          {skills.map(({ icon: Icon, name, detail }) => (
            <article className="skill-card" key={name}>
              <span className="skill-icon"><Icon size={22} aria-hidden="true" /></span>
              <h3>{name}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
