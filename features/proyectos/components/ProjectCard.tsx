"use client"

import Link from "next/link"
import type { IProject } from "../types"
import { TechBadge } from "@/features/tech-stack/components/TechBadge"
import { technologies } from "@/features/tech-stack/constants/technologies"

interface ProjectCardProps {
  project: IProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/proyectos/${project.slug}`} className="project-card hover-lift">
      <div className="project-card-image">
        {project.featured && <span className="project-badge featured">DESTACADO</span>}
        <span className="project-badge category">{project.category}</span>
        <img src={project.image || "/placeholder.svg"} alt={project.title} />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tech">
          {project.techStack.slice(0, 3).map((techName) => {
            const techInfo = technologies.find((t) => t.name === techName)
            return <TechBadge key={techName} name={techName} icon={techInfo?.icon} variant="outline" />
          })}
          {project.techStack.length > 3 && (
            <span className="tech-more">+{project.techStack.length - 3}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
