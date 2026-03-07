"use client"

import { techImpactBlocks } from "../constants/technologies"
import { TechBlock } from "./TechBlock"

export function TechImpact() {
    return (
        <div className="tech-impact">
            {techImpactBlocks.map((block) => (
                <TechBlock key={block.title} block={block} />
            ))}
        </div>
    )
}
