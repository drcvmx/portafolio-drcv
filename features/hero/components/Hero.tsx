"use client"

import Link from "next/link"
import { HeroAccordion } from "./HeroAccordion"

export function Hero() {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <div className="season-badge">FULL-STACK DEVELOPER // 2026</div>

        <h1 className="hero-headline">
          SI LO IMAGINAS
          <br />
          <span className="hero-headline-highlight">DE LA MANERA CORRECTA</span>
          <br />
          TODO SE PUEDE HACER.
        </h1>

        <p className="hero-subtext">
          Soy un desarrollador Fullstack. Me apasiona el futbol. Crear sistemas que resuelven problemas reales, mejoran la logística y optimizan procesos en conjunto de interfaces modernas y estéticas.
        </p>

        <div className="cta-buttons">
          <Link href="/proyectos" className="btn-primary hover-lift">
            VER PROYECTOS
          </Link>
          <Link href="/contacto" className="btn-secondary hover-lift">
            CONTACTAME
          </Link>
          <a href="/Dante-Chavez-CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary hover-lift">
            VER CV
          </a>
        </div>

        <div className="social-proof">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Años de experiencia</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Proyectos completados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Proyectos en Producción</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visuals">
        <HeroAccordion />
      </div>
    </main>
  )
}
