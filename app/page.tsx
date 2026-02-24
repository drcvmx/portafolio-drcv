"use client"

import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { Hero } from "@/features/hero/components/Hero"
import { TechMarquee } from "@/features/tech-stack/components/TechMarquee"
import { ProjectGrid } from "@/features/proyectos/components/ProjectGrid"
import { projects } from "@/features/proyectos/constants/projects"
import Link from "next/link"

export default function HomePage() {
  return (
    <>

      <Navbar />
      <Hero />

      {/* Tech Stack Section */}
      <section className="tech-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">TECH STACK</h2>
            <div className="section-line"></div>
          </div>
        </div>
        <TechMarquee />
      </section>

      {/* Featured Projects Section */}
      <section className="projects-section-home" id="proyectos">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">PROYECTOS DESTACADOS</h2>
            <Link href="/proyectos" className="section-link">Ver todos</Link>
          </div>
          <ProjectGrid projects={projects} />
          <div className="projects-cta">
            <Link href="/proyectos" className="btn-primary hover-lift">
              VER TODOS LOS PROYECTOS
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="season-badge">SOBRE MI</div>
              <h2 className="about-title">
                CREANDO SOLUCIONES
                <br />
                <span className="highlight">DIGITALES</span>
              </h2>
              <p className="about-description">
                Hola, soy Dante. Desarrollador Full-stack e Ingeniero en Computación con más de 3 años de experiencia creando soluciones digitales eficientes y modernas.
              </p>
              <p className="about-description">
                Si lo imaginas, lo puedo desarrollar. Mi semana se divide entre crear y a veces optimizar sistemas de software y mi otra gran pasión: jugar al fútbol todos los fines de semana.
              </p>
              <div className="cta-buttons">
                <Link href="/contacto" className="btn-secondary hover-lift">
                  CONTACTAME
                </Link>
                <a href="https://drive.google.com/file/d/1x-QA1zbvdwey_JNPpkVcRXGFfd1Wgb1M/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary hover-lift">
                  VER CV
                </a>
              </div>
            </div>
            <div className="about-image">
              <img
                src="/portfoliov2.jpg"
                alt="Dante Ricardo Chávez Verdeja"
              />
              <div className="about-badge">3+ AÑOS EXP</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
