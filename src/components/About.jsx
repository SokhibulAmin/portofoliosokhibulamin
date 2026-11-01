import { ArrowUpRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Pendidikan", value: "S1 Teknik Informatika" },
  { icon: BookOpen, label: "Ruang dokumentasi", value: "Karya, proyek, dan pengalaman" },
  { icon: Sparkles, label: "Proses", value: "Belajar dan terus berkembang" },
];

export default function About() {
  return (
    <section className="section section-anchor" id="tentang">
      <div className="container-wide">
        <div className="section-heading">
          <p className="eyebrow">01 / Tentang</p>
          <h2>Ruang untuk <span className="text-gradient">bertumbuh.</span></h2>
        </div>
        <div className="about-layout">
          <div className="about-intro">
            <p className="about-lead">Halo, saya Sokhibul Amin.</p>
            <p className="body-copy">
              Website ini menjadi tempat untuk mendokumentasikan berbagai
              karya, proyek, pengalaman, dan perjalanan belajar saya. Isinya
              akan terus bertambah seiring proses dan karya yang dapat
              dibagikan.
            </p>
            <a className="text-link" href="#kontak">
              Sapa saya <ArrowUpRight size={16} />
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
