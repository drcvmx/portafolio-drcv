"use client"

import { TechBadge } from "./TechBadge"
import type { TechImpactBlock } from "../constants/technologies"

interface TechBlockProps {
    block: TechImpactBlock
}

export function TechBlock({ block }: TechBlockProps) {
    return (
        <div className="tech-block">
            <div className="tech-block-header">
                <h3 className="tech-block-title">{block.title}</h3>
                <p className="tech-block-description">{block.description}</p>
            </div>
            <div className="tech-block-badges">
                {block.technologies.map((tech) => (
                    <TechBadge
                        key={tech.name}
                        name={tech.name}
                        icon={tech.icon}
                        variant="logo"
                    />
                ))}
            </div>
        </div>
    )
}
