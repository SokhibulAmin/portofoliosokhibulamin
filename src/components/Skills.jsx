import { BarChart3, BrainCircuit, Code2 } from "lucide-react";

const skills = [
  { icon: Code2, name: "Pengembangan web", detail: "Tercatat melalui beberapa proyek website." },
  { icon: BarChart3, name: "Excel & data", detail: "Terdapat workbook dan dataset dalam arsip karya." },
  { icon: BrainCircuit, name: "Deep learning", detail: "Tercantum pada dokumentasi proyek LeafCare." },
];

export default function Skills() {
  return (
    <section className="section section-tinted section-anchor" id="keahlian">
      <div className="container-wide">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">03 / Skills</p>
            <h2>Bidang dalam <span className="text-gradient">karya.</span></h2>
          </div>
          <p className="heading-note">
            Dirangkum dari karya yang tersedia, tanpa klaim tingkat kemahiran
            atau tools yang belum terverifikasi.
          </p>
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
