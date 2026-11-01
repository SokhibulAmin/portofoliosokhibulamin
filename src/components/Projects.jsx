import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Code2,
  ExternalLink,
  FileText,
  Github,
  Minus,
  Plus,
  RotateCcw,
  X,
} from "lucide-react";
import { projectCategories, projects } from "../data/projects.js";

const categoryIcons = {
  tutoring: Code2,
  spreadsheet: BarChart3,
};

function ProjectArtwork({ project, image, onOpen, onPrevious, onNext }) {
  if (!image) {
    const Icon = categoryIcons[project.visual] ?? Code2;
    return (
      <div className={`project-artwork-placeholder artwork-${project.visual}`} aria-hidden="true">
        <span className="artwork-orbit" />
        <span className="artwork-icon"><Icon size={34} strokeWidth={1.4} /></span>
        <span className="artwork-wordmark">DATA / WORKBOOK</span>
      </div>
    );
  }

  const images = project.images ?? [];

  return (
    <>
      <button
        className="project-image-open"
        type="button"
        onClick={onOpen}
        aria-label={`Perbesar gambar ${project.title}, slide ${image.index + 1} dari ${images.length}`}
      >
        <img
          className="project-image"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
        />
        <span className="project-image-hint">Klik untuk perbesar</span>
      </button>
      {images.length > 1 && (
        <>
          <button
            className="project-slide-arrow project-slide-previous"
            type="button"
            aria-label="Gambar proyek sebelumnya"
            onClick={onPrevious}
          >
            <ArrowLeft size={16} aria-hidden="true" />
          </button>
          <button
            className="project-slide-arrow project-slide-next"
            type="button"
            aria-label="Gambar proyek berikutnya"
            onClick={onNext}
          >
            <ArrowRight size={16} aria-hidden="true" />
          </button>
          <span className="project-slide-count" aria-live="polite">
            {image.index + 1} / {images.length}
          </span>
        </>
      )}
    </>
  );
}

function ProjectCard({ project, onOpenViewer }) {
  const images = project.images ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const image = images.length > 0
    ? { ...images[activeIndex], index: activeIndex }
    : null;
  const hasLinks = Boolean(project.demoUrl || project.repositoryUrl || project.files?.length);

  function moveSlide(direction) {
    setActiveIndex((index) => (index + direction + images.length) % images.length);
  }

  return (
    <article className="project-card">
      <div className="project-artwork">
        <ProjectArtwork
          project={project}
          image={image}
          onOpen={() => onOpenViewer(project.title, images, activeIndex)}
          onPrevious={() => moveSlide(-1)}
          onNext={() => moveSlide(1)}
        />
        {images.length > 0 && (
          <div className="project-slide-dots" aria-label="Pilih gambar proyek">
            {images.map((slide, index) => (
              <button
                className={`project-slide-dot${index === activeIndex ? " is-active" : ""}`}
                key={slide.src}
                type="button"
                aria-label={`Tampilkan slide ${index + 1} dari ${project.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        )}
        <span className="project-category">{project.category}</span>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tools">
          <strong>Tools</strong>
          {project.tools.length > 0 ? (
            <div className="tag-list">
              {project.tools.map((tool) => <span className="tech-tag" key={tool}>{tool}</span>)}
            </div>
          ) : (
            <span className="tools-pending">Belum dicatat</span>
          )}
        </div>
      </div>
      {hasLinks ? (
        <div className="project-links">
          {project.demoUrl && (
            <a className="project-link" href={project.demoUrl} target="_blank" rel="noreferrer">
              Demo <ExternalLink size={15} aria-hidden="true" />
            </a>
          )}
          {project.repositoryUrl && (
            <a className="project-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
              Repository <Github size={15} aria-hidden="true" />
            </a>
          )}
          {project.files?.map((file) => (
            <a
              className="project-link project-file-link"
              href={file.url}
              key={file.url}
              target="_blank"
              rel="noreferrer"
            >
              {file.type === "spreadsheet"
                ? <BarChart3 size={15} aria-hidden="true" />
                : <FileText size={15} aria-hidden="true" />}
              {file.label}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      ) : (
        <p className="project-links-empty">Tautan demo atau repository belum tersedia.</p>
      )}
    </article>
  );
}

function ImageViewer({ viewer, dialogRef, onClose, onMove, zoom, setZoom }) {
  const image = viewer?.images[viewer.index];

  useEffect(() => {
    if (viewer && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [viewer, dialogRef]);

  if (!viewer || !image) {
    return null;
  }

  return (
    <dialog
      className="image-viewer"
      ref={dialogRef}
      aria-label={`Galeri gambar ${viewer.title}`}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          dialogRef.current?.close();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") onMove(-1);
        if (event.key === "ArrowRight") onMove(1);
      }}
    >
      <div className="image-viewer-toolbar">
        <p className="image-viewer-title">{viewer.title}</p>
        <div className="image-viewer-controls">
          <button
            className="viewer-control"
            type="button"
            aria-label="Perkecil gambar"
            disabled={zoom <= 1}
            onClick={() => setZoom((current) => Math.max(1, current - 0.5))}
          >
            <Minus size={17} aria-hidden="true" />
          </button>
          <button
            className="viewer-control viewer-zoom-reset"
            type="button"
            aria-label={`Atur ulang zoom, saat ini ${zoom * 100}%`}
            onClick={() => setZoom(1)}
          >
            {zoom * 100}%
            <RotateCcw size={13} aria-hidden="true" />
          </button>
          <button
            className="viewer-control"
            type="button"
            aria-label="Perbesar gambar"
            disabled={zoom >= 3}
            onClick={() => setZoom((current) => Math.min(3, current + 0.5))}
          >
            <Plus size={17} aria-hidden="true" />
          </button>
          <button
            className="viewer-control viewer-close"
            type="button"
            aria-label="Tutup galeri gambar"
            onClick={() => dialogRef.current?.close()}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="viewer-main">
        {viewer.images.length > 1 && (
          <button
            className="viewer-slide-control"
            type="button"
            aria-label="Gambar sebelumnya"
            onClick={() => onMove(-1)}
          >
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
        )}
        <div className="viewer-image-stage">
          <img
            className={`viewer-image${zoom > 1 ? " is-zoomed" : ""}`}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            style={zoom > 1 ? { width: `${zoom * 100}%` } : undefined}
          />
        </div>
        {viewer.images.length > 1 && (
          <button
            className="viewer-slide-control"
            type="button"
            aria-label="Gambar berikutnya"
            onClick={() => onMove(1)}
          >
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        )}
      </div>
      <div className="image-viewer-caption">
        <span>{image.alt}</span>
        <span aria-live="polite">
          {viewer.index + 1} / {viewer.images.length}
        </span>
      </div>
    </dialog>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [viewer, setViewer] = useState(null);
  const [zoom, setZoom] = useState(1);
  const dialogRef = useRef(null);
  const filters = ["Semua", ...projectCategories];
  const visibleProjects = activeCategory === "Semua"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  function openViewer(title, images, index) {
    setZoom(1);
    setViewer({ title, images, index });
  }

  function moveViewer(direction) {
    setZoom(1);
    setViewer((current) => ({
      ...current,
      index: (current.index + direction + current.images.length) % current.images.length,
    }));
  }

  return (
    <section className="section section-tinted section-anchor" id="projek">
      <div className="container-wide">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">02 / Karya pilihan</p>
            <h2>Proyek yang <span className="text-gradient">terdokumentasi.</span></h2>
          </div>
          <p className="heading-note">
            Klik gambar untuk memperbesar atau gunakan panah untuk menjelajahi slide.
          </p>
        </div>
        <div className="project-filters" role="group" aria-label="Filter kategori proyek">
          {filters.map((category) => (
            <button
              className={`filter-button${category === activeCategory ? " is-active" : ""}`}
              key={category}
              type="button"
              aria-pressed={category === activeCategory}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {visibleProjects.length > 0 ? (
          <div className="projects-grid" aria-live="polite">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpenViewer={openViewer} />
            ))}
          </div>
        ) : (
          <p className="projects-empty" role="status">
            Belum ada karya yang ditambahkan pada kategori ini.
          </p>
        )}
        <a className="text-link projects-contact-link" href="#kontak">
          Tanyakan tentang karya <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <ImageViewer
        viewer={viewer}
        dialogRef={dialogRef}
        onClose={() => {
          setViewer(null);
          setZoom(1);
        }}
        onMove={moveViewer}
        zoom={zoom}
        setZoom={setZoom}
      />
    </section>
  );
}
