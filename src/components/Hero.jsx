import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageContext.jsx";
import ClockworkBackground from "./ClockworkBackground.jsx";
import TechnologyMarquee from "./TechnologyMarquee.jsx";

const locales = { id: "id-ID", en: "en-US", zh: "zh-CN" };

function LocalClock({ language, t, now }) {
  const date = new Intl.DateTimeFormat(locales[language], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);
  const timezone =
    new Intl.DateTimeFormat(locales[language], { timeZoneName: "short" })
      .formatToParts(now)
      .find((part) => part.type === "timeZoneName")?.value ?? "Local";
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeValue = `${hours}:${minutes}:${seconds}`;
  const dateValue = now.toISOString();
  const hourAngle = ((now.getHours() % 12) + now.getMinutes() / 60) * 30;
  const minuteAngle = (now.getMinutes() + now.getSeconds() / 60) * 6;
  const secondAngle = now.getSeconds() * 6;

  return (
    <aside className="local-clock" aria-label={t("localClockLabel")}>
      <div className="local-clock-heading">
        <span className="local-clock-indicator" aria-hidden="true" />
        <span>{t("localTime")}</span>
        <span className="local-clock-zone">{timezone}</span>
      </div>
      <div className="local-clock-content">
        <div>
          <time className="local-clock-time" dateTime={dateValue}>
            {hours}:{minutes}
            <span className="local-clock-seconds">:{seconds}</span>
          </time>
          <time className="local-clock-date" dateTime={dateValue}>
            {date.charAt(0).toUpperCase() + date.slice(1)}
          </time>
        </div>
        <div className="local-clock-dial" aria-hidden="true">
          <span
            className="local-clock-hand local-clock-hand-hour"
            style={{ transform: `translateX(-50%) rotate(${hourAngle}deg)` }}
          />
          <span
            className="local-clock-hand local-clock-hand-minute"
            style={{ transform: `translateX(-50%) rotate(${minuteAngle}deg)` }}
          />
          <span
            className="local-clock-hand local-clock-hand-second"
            style={{ transform: `translateX(-50%) rotate(${secondAngle}deg)` }}
          />
          <span className="local-clock-pin" />
        </div>
      </div>
    </aside>
  );
}

export default function Hero() {
  const { language, t } = useLanguage();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const gearRotation = now.getTime() / 1000 * 6;

  return (
    <section className="hero-section section-anchor" id="beranda">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-mechanical-layer" aria-hidden="true">
        <ClockworkBackground rotation={gearRotation} />
      </div>
      <div className="container-wide hero-clock-wrap">
        <LocalClock language={language} t={t} now={now} />
      </div>
      <div className="container-wide hero-grid">
        <div className="hero-visual">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="portrait-frame">
            <div className="portrait-frame-top">
              <span className="portrait-kicker">{t("portraitKicker")}</span>
              <span className="portrait-sparkle" aria-hidden="true">✦</span>
            </div>
            <img
              className="profile-photo"
              src="/images/profile-portrait.webp"
              alt={t("portraitAlt")}
              width="777"
              height="800"
            />
            <p className="portrait-caption">{t("portraitCaption")}</p>
          </div>
          <span className="floating-label floating-label-top">{t("informatika")}</span>
          <span className="floating-label floating-label-bottom">{t("worksLearnGrow")}</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> {t("portfolio")}</p>
          <h1>
            Sokhibul
            <br />
            <span className="text-gradient">Amin.</span>
          </h1>
          <p className="hero-subtitle">{t("degree")}</p>
          <p className="hero-description">{t("heroDescription")}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projek">
              {t("explore")} <ArrowDown size={16} />
            </a>
            <a className="button button-secondary" href="#tentang">
              {t("aboutMe")} <ArrowUpRight size={16} />
            </a>
          </div>
          <p className="hero-note">
            <Sparkles size={15} aria-hidden="true" />
            {t("journey")}
          </p>
        </div>
      </div>
      <TechnologyMarquee />
    </section>
  );
}
