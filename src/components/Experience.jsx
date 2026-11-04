import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { useLanguage } from "../LanguageContext.jsx";

const internshipPhotos = [
  { width: 827, height: 465 },
  { width: 827, height: 621 },
  { width: 827, height: 620 },
];

export default function Experience() {
  const { t, language } = useLanguage();
  const period = language === "en"
    ? "Nov 1 – Dec 31, 2024"
    : language === "zh"
      ? "2024年11月1日 – 12月31日"
      : "01 Nov – 31 Des 2024";

  return (
    <section className="section section-anchor" id="pengalaman">
      <div className="container-wide">
        <div className="section-heading">
          <p className="eyebrow">{t("experienceEyebrow")}</p>
          <h2>{t("experienceTitle")} <span className="text-gradient">{t("experienceTitleAccent")}</span></h2>
        </div>
        <article className="experience-card">
          <div className="experience-marker" aria-hidden="true" />
          <div className="experience-content">
            <div className="experience-topline">
              <span className="experience-badge">{t("internship")}</span>
              <span className="experience-period">
                <CalendarDays size={15} aria-hidden="true" />
                {period}
              </span>
            </div>
            <h3>Dinas Komunikasi dan Informatika</h3>
            <p className="experience-role">{t("lamongan")}</p>
            <p className="body-copy">{t("experienceDescription")}</p>
            <div className="experience-location">
              <MapPin size={15} aria-hidden="true" /> {t("lamongan")}
            </div>
            <div className="experience-documentation">
              <h4>{t("internshipDocumentation")}</h4>
              <div className="experience-gallery">
                {internshipPhotos.map((photo, index) => {
                  const number = index + 1;
                  const src = `/images/internship-documentation-${String(number).padStart(2, "0")}.webp`;

                  return (
                    <a
                      className="experience-photo"
                      href={src}
                      key={number}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={src}
                        alt={t(`internshipPhoto${number}`)}
                        width={photo.width}
                        height={photo.height}
                        loading="lazy"
                        decoding="async"
                      />
                      <span>{t(`internshipPhoto${number}`)}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <a className="text-link" href="#kontak">
              {t("askMore")} <ArrowUpRight size={16} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
