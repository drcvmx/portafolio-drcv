"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { projects } from "@/features/proyectos/constants/projects"
import { TechBadge } from "@/features/tech-stack/components/TechBadge"

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  const project = projects.find((p) => p.slug === slug)

  const gallery = project?.images?.length ? project.images : project ? [project.image] : []
  const [activeImg, setActiveImg] = useState(0)

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="project-detail">
          <div className="project-detail-header">
            <Link href="/proyectos" className="project-detail-back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Volver a proyectos
            </Link>
            <h1 className="projects-page-title">Proyecto no encontrado</h1>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="project-detail">
        <div className="project-detail-header">
          <Link href="/proyectos" className="project-detail-back">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Volver a proyectos
          </Link>
        </div>

        <div className="project-detail-hero">
          {/* Gallery */}
          <div className="project-gallery">
            {/* Main image */}
            <div className="project-gallery-main">
              <img
                src={gallery[activeImg]}
                alt={`${project.title} - imagen ${activeImg + 1}`}
              />
              {/* Counter badge */}
              {gallery.length > 1 && (
                <div className="project-gallery-counter">
                  {activeImg + 1} / {gallery.length}
                </div>
              )}
              {/* Prev / Next arrows */}
              {gallery.length > 1 && (
                <>
                  <button
                    className="project-gallery-arrow left"
                    onClick={() => setActiveImg((prev) => (prev - 1 + gallery.length) % gallery.length)}
                    aria-label="Imagen anterior"
                  >
                    ‹
                  </button>
                  <button
                    className="project-gallery-arrow right"
                    onClick={() => setActiveImg((prev) => (prev + 1) % gallery.length)}
                    aria-label="Imagen siguiente"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="project-gallery-thumbs">
                {gallery.map((src, i) => (
                  <button
                    key={i}
                    className={`project-gallery-thumb ${i === activeImg ? "active" : ""}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Ver imagen ${i + 1}`}
                  >
                    <img src={src} alt={`${project.title} miniatura ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="project-detail-sidebar">
            <div className="project-detail-meta">
              <span className="project-detail-category">{project.category}</span>
              <h1 className="project-detail-name">{project.title}</h1>
              <p className="project-detail-desc">{project.longDescription || project.description}</p>

              <div className="project-detail-links">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail-link primary"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    <span>Ver Demo</span>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail-link secondary"
                  >
                    <img src="/skills_webp/github-svgrepo-com.svg" alt="GitHub" style={{ width: 20, height: 20 }} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.links.production && (
                  <a
                    href={project.links.production}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail-link production"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span>Producción</span>
                  </a>
                )}
              </div>
            </div>

            <div className="project-detail-tech">
              <h3>Tecnologias</h3>
              <div className="project-detail-tech-list">
                {project.techStack.map((tech) => (
                  <TechBadge key={tech} name={tech} variant="logo" />
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
