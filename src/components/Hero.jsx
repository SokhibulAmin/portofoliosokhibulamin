import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

function LocalClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const date = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);
  const timezone =
    new Intl.DateTimeFormat("id-ID", { timeZoneName: "short" })
      .formatToParts(now)
      .find((part) => part.type === "timeZoneName")?.value ?? "Lokal";
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeValue = `${hours}:${minutes}:${seconds}`;
  const dateValue = now.toISOString();
  const hourAngle = ((now.getHours() % 12) + now.getMinutes() / 60) * 30;
  const minuteAngle = (now.getMinutes() + now.getSeconds() / 60) * 6;
  const secondAngle = now.getSeconds() * 6;

  return (
    <aside className="local-clock" aria-label="Tanggal dan waktu lokal">
      <div className="local-clock-heading">
        <span className="local-clock-indicator" aria-hidden="true" />
        <span>WAKTU LOKAL</span>
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
  return (
    <section className="hero-section section-anchor" id="beranda">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container-wide hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Portofolio personal</p>
          <h1>
            Sokhibul
            <br />
            <span className="text-gradient">Amin.</span>
          </h1>
          <p className="hero-subtitle">S1 Teknik Informatika</p>
          <p className="hero-description">
            Tempat mendokumentasikan berbagai karya, proyek, pengalaman, dan
            perjalanan belajar.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projek">
              Jelajahi Karya <ArrowDown size={16} />
            </a>
            <a className="button button-secondary" href="#tentang">
              Tentang Saya <ArrowUpRight size={16} />
            </a>
          </div>
          <p className="hero-note">
            <Sparkles size={15} aria-hidden="true" />
            Catatan perjalanan dalam teknologi dan kreativitas
          </p>
          <LocalClock />
        </div>

        <div className="hero-visual">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="portrait-frame">
            <div className="portrait-frame-top">
              <span className="portrait-kicker">CATATAN PERJALANAN</span>
              <span className="portrait-sparkle" aria-hidden="true">✦</span>
            </div>
            <img
              className="profile-photo"
              src="/images/profile/portrait.webp"
              alt="Foto Sokhibul Amin"
              width="777"
              height="800"
            />
            <p className="portrait-caption">Merekam proses, merayakan karya.</p>
          </div>
          <span className="floating-label floating-label-top">Informatika</span>
          <span className="floating-label floating-label-bottom">Karya · Belajar · Bertumbuh</span>
        </div>
      </div>
    </section>
  );
}
