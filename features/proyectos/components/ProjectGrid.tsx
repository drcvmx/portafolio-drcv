"use client"

import type { IProject } from "../types"
import { ProjectCard } from "./ProjectCard"

interface ProjectGridProps {
  projects: IProject[]
  title?: string
  showAll?: boolean
}

export function ProjectGrid({ projects, title, showAll = false }: ProjectGridProps) {
  const displayProjects = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <section className="projects-section">
      {title && (
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <div className="section-line"></div>
        </div>
      )}
      <div className="projects-grid">
        {displayProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
