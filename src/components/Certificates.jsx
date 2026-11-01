import { Award, ExternalLink, FileText, LockKeyhole } from "lucide-react";

const certificates = [
  {
    title: "Sertifikat Magang",
    organization: "Dinas Komunikasi dan Informatika Kabupaten Lamongan",
    detail: "01 November – 31 Desember 2024",
    href: "/images/certificates/sertifikat-magang.webp",
    linkLabel: "Buka pratinjau sertifikat",
    fileType: "image",
  },
  {
    title: "The Art of Data Visualization: Spreadsheet & Google Studio for Beginner",
    organization: "Center for Digital Society, Universitas Gadjah Mada",
    detail: "Digital Practice · 24–25 Juli 2023",
    href: "/documents/sertifikat-praktik-data.pdf",
    linkLabel: "Buka sertifikat PDF",
    fileType: "document",
  },
  {
    title: "Sertifikat HKI",
    organization: "Proyek aplikasi prediksi penjualan beras",
    detail: "Ringkasan dicantumkan; dokumen asli tidak ditautkan karena berisi data pribadi para pencipta.",
    href: null,
  },
];

export default function Certificates() {
  return (
    <section className="section section-tinted section-anchor" id="sertifikat">
      <div className="container-wide">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">05 / Certificates</p>
            <h2>Dokumen <span className="text-gradient">pengalaman.</span></h2>
          </div>
          <p className="heading-note">
            Pratinjau sertifikat magang sudah menyamarkan QR dan identitas penanda tangan.
          </p>
        </div>
        <div className="certificates-grid">
          {certificates.map(({ title, organization, detail, href, linkLabel, fileType }) => (
            <article className="certificate-card" key={title}>
              <span className="certificate-icon"><Award size={21} aria-hidden="true" /></span>
              <div className="certificate-copy">
                <h3>{title}</h3>
                <p>{organization}</p>
                <small>{detail}</small>
                {href && (
                  <a
                    className="certificate-link"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {fileType === "image"
                      ? <ExternalLink size={14} aria-hidden="true" />
                      : <FileText size={14} aria-hidden="true" />}
                    {linkLabel}
                  </a>
                )}
              </div>
              {!href && (
                <LockKeyhole
                  className="certificate-private-icon"
                  size={16}
                  aria-label="Dokumen privat"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
