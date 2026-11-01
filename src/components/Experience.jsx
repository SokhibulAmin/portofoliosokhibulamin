import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section className="section section-anchor" id="pengalaman">
      <div className="container-wide">
        <div className="section-heading">
          <p className="eyebrow">04 / Pengalaman</p>
          <h2>Pengalaman yang <span className="text-gradient">tercatat.</span></h2>
        </div>
        <article className="experience-card">
          <div className="experience-marker" aria-hidden="true" />
          <div className="experience-content">
            <div className="experience-topline">
              <span className="experience-badge">MAGANG</span>
              <span className="experience-period">
                <CalendarDays size={15} aria-hidden="true" />
                01 Nov – 31 Des 2024
              </span>
            </div>
            <h3>Dinas Komunikasi dan Informatika</h3>
            <p className="experience-role">Kabupaten Lamongan</p>
            <p className="body-copy">
              Pengalaman magang terdokumentasi di Dinas Komunikasi dan
              Informatika Kabupaten Lamongan.
            </p>
            <div className="experience-location">
              <MapPin size={15} aria-hidden="true" /> Kabupaten Lamongan
            </div>
            <a className="text-link" href="#kontak">
              Tanyakan lebih lanjut <ArrowUpRight size={16} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
