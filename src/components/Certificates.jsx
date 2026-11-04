import { Award, ExternalLink, FileText, LockKeyhole } from "lucide-react";
import { useLanguage } from "../LanguageContext.jsx";

export default function Certificates() {
  const { t } = useLanguage();
  const certificates = [
    {
      title: t("internshipCertificate"),
      organization: t("internshipOrganization"),
      detail: t("internshipDate"),
      previewSrc: "/images/certificate-internship.webp",
      href: "/images/certificate-internship.webp",
      linkLabel: t("internshipPreview"),
      fileType: "image",
    },
    {
      title: t("dataCertificate"),
      organization: t("dataOrganization"),
      detail: t("dataCertificateDate"),
      previewSrc: "/images/certificate-data.webp",
      href: "/documents/sertifikat-praktik-data.pdf",
      linkLabel: t("pdfCertificate"),
      fileType: "document",
    },
    {
      title: t("ipCertificate"),
      organization: t("riceProject"),
      detail: t("privateDocument"),
      previewSrc: "/images/certificate-ip-preview.webp",
      href: "/images/certificate-ip-preview.webp",
      linkLabel: t("privateCertificatePreview"),
      fileType: "image",
      isPrivate: true,
    },
  ];

  return (
    <section className="section section-tinted section-anchor" id="sertifikat">
      <div className="container-wide">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">{t("certificatesEyebrow")}</p>
            <h2>{t("certificatesTitle")} <span className="text-gradient">{t("certificatesTitleAccent")}</span></h2>
          </div>
          <p className="heading-note">{t("certificatesNote")}</p>
        </div>
        <div className="certificates-grid">
          {certificates.map(({ title, organization, detail, previewSrc, href, linkLabel, fileType, isPrivate }) => (
            <article className="certificate-card" key={title}>
              {previewSrc && (
                <a
                  className="certificate-preview"
                  href={previewSrc}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t("openCertificatePreview")}: ${title}`}
                >
                  <img
                    src={previewSrc}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              )}
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
              {isPrivate && (
                <LockKeyhole
                  className="certificate-private-icon"
                  size={16}
                  aria-label={t("privateDocumentLabel")}
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
