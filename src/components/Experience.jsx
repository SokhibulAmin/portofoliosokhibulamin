import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { useLanguage } from "../LanguageContext.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

const internshipPhotos = [
  { width: 827, height: 465, alt: "internshipPhoto1" },
  { width: 827, height: 621, alt: "internshipPhoto2" },
  { width: 827, height: 620, alt: "internshipPhoto3" },
];

export default function Experience() {
  const { t, language } = useLanguage();
  const [activePhoto, setActivePhoto] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const sliderRef = useRef(null);
  const period = language === "en"
    ? "Nov 1 – Dec 31, 2024"
    : language === "zh"
      ? "2024年11月1日 – 12月31日"
      : "01 Nov – 31 Des 2024";
  const photo = internshipPhotos[activePhoto];
  const photoSrc = `/images/internship-documentation-${String(activePhoto + 1).padStart(2, "0")}.webp`;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) {
      return undefined;
    }
    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(slider);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      !isInView
      || isHovered
      || isFocused
      || hasInteracted
      || window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setActivePhoto((index) => (index + 1) % internshipPhotos.length);
      }
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [hasInteracted, isFocused, isHovered, isInView]);

  function movePhoto(direction) {
    setHasInteracted(true);
    setActivePhoto((index) => (index + direction + internshipPhotos.length) % internshipPhotos.length);
  }

  return (
    <section className="section section-anchor" id="pengalaman">
      <div className="container-wide">
        <div className="section-heading">
          <p className="eyebrow">{t("experienceEyebrow")}</p>
          <h2>{t("experienceTitle")} <span className="text-gradient">{t("experienceTitleAccent")}</span></h2>
        </div>
        <ScrollReveal>
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
                <div
                  className="experience-slider"
                  ref={sliderRef}
                  aria-roledescription="carousel"
                  aria-label={t("internshipDocumentation")}
                  onPointerEnter={() => setIsHovered(true)}
                  onPointerLeave={() => setIsHovered(false)}
                  onFocusCapture={() => setIsFocused(true)}
                  onBlurCapture={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setIsFocused(false);
                    }
                  }}
                >
                  <a
                    className="experience-photo"
                    href={photoSrc}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setHasInteracted(true)}
                    aria-label={t("openInternshipPhoto", { photo: t(photo.alt) })}
                  >
                    <img
                      src={photoSrc}
                      alt={t(photo.alt)}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <button
                    className="experience-slide-arrow experience-slide-previous"
                    type="button"
                    aria-label={t("previousInternshipPhoto")}
                    onClick={() => movePhoto(-1)}
                  >
                    <ArrowLeft size={18} aria-hidden="true" />
                  </button>
                  <button
                    className="experience-slide-arrow experience-slide-next"
                    type="button"
                    aria-label={t("nextInternshipPhoto")}
                    onClick={() => movePhoto(1)}
                  >
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                  <div className="experience-slider-caption">
                    <span>{t(photo.alt)}</span>
                    <span aria-live="polite">{activePhoto + 1} / {internshipPhotos.length}</span>
                  </div>
                  <div className="experience-slide-dots" role="group" aria-label={t("chooseProjectImage")}>
                    {internshipPhotos.map((item, index) => (
                      <button
                        className={`project-slide-dot${index === activePhoto ? " is-active" : ""}`}
                        key={item.alt}
                        type="button"
                        aria-label={t("showInternshipPhoto", { number: index + 1 })}
                        aria-current={index === activePhoto ? "true" : undefined}
                        onClick={() => {
                          setHasInteracted(true);
                          setActivePhoto(index);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <a className="text-link" href="#kontak">
                {t("askMore")} <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
