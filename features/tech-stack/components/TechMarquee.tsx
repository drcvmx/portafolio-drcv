"use client"

import { technologies } from "../constants/technologies"
import { TechBadge } from "./TechBadge"

export function TechMarquee() {
  const duplicatedTechs = [...technologies, ...technologies]

  return (
    <div className="tech-marquee-container">
      <div className="tech-marquee-content">
        {duplicatedTechs.map((tech, index) => (
          <TechBadge
            key={`${tech.name}-${index}`}
            name={tech.name}
            icon={tech.icon}
            variant="logo"
          />
        ))}
      </div>
    </div>
  )
}
