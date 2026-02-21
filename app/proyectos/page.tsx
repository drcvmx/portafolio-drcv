"use client"

import Link from "next/link"
import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { ProjectGrid } from "@/features/proyectos/components/ProjectGrid"
import { projects } from "@/features/proyectos/constants/projects"

export default function ProyectosPage() {
  return (
    <>
      <Navbar />

      <main className="projects-page">
        <div className="projects-page-header">
          <Link href="/" className="season-badge hover-lift">← VOLVER // 2026</Link>
          <h1 className="projects-page-title">
            MIS <span className="highlight">PROYECTOS</span>
          </h1>
          <p className="projects-page-subtitle">
            Una coleccion de proyectos en los que he trabajado. Desde aplicaciones web completas hasta APIs y herramientas de desarrollo.
          </p>
        </div>

        <ProjectGrid projects={projects} showAll={true} />
      </main>

      <Footer />
    </>
  )
}
