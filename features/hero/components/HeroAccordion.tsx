"use client"

import { useState } from "react"
import Link from "next/link"
import { projects } from "@/features/proyectos/constants/projects"

const CategoryIcon = ({ category }: { category: string }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {category === "Full Stack" ? (
            <>
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </>
        ) : (
            <>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
            </>
        )}
    </svg>
)

export function HeroAccordion() {
    // Hardcode specific projects for the hero in desired order
    const heroSlugs = [
        "go-kart-zen-loyalty",
        "catalogo-alchemy",
        "balazhi-stone",
        "green-alchemy-sgi"
    ]

    // Map slugs to actual projects, filtering out any missing ones
    const featuredProjects = heroSlugs
        .map(slug => projects.find(p => p.slug === slug))
        .filter(Boolean) as typeof projects

    // Use the first featured project's index as initial active state (usually index 0)
    const [activeIndex, setActiveIndex] = useState<number>(0)

    return (
        <div className="hero-accordion-wrapper">
            <div className="ha-track">
                {featuredProjects.map((project, index) => {
                    const isActive = activeIndex === index
                    return (
                        <div
                            key={project.id}
                            className={`ha-panel ${isActive ? "ha-panel--active" : ""}`}
                            style={{
                                backgroundImage: `url(${project.heroImage || project.image})`,
                            }}
                            onClick={() => setActiveIndex(index)}
                        >
                            {/* Gradient overlay */}
                            <div className="ha-overlay" />

                            {/* Label bottom */}
                            <div className="ha-label">
                                <div
                                    className="ha-icon"
                                    style={{ color: project.accentColor }}
                                >
                                    <CategoryIcon category={project.category} />
                                </div>
                                <div className="ha-info">
                                    <span className="ha-title">{project.title}</span>
                                    <span className="ha-sub">{project.techStack.join(" · ")}</span>
                                </div>
                            </div>

                            {/* Badge top-right visible when active */}
                            {isActive && (
                                <Link
                                    href={`/proyectos/${project.slug}`}
                                    className="ha-link-badge"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    VER →
                                </Link>
                            )}
                        </div>
                    )
                })}
            </div>

            {/* Mobile thumbnails */}
            <div className="ha-thumbs">
                {featuredProjects.map((project, index) => (
                    <button
                        key={project.id}
                        className={`ha-thumb ${activeIndex === index ? "ha-thumb--active" : ""}`}
                        style={{ backgroundImage: `url(${project.heroImage || project.image})` }}
                        onClick={() => setActiveIndex(index)}
                        aria-label={project.title}
                    />
                ))}
            </div>
        </div>
    )
}
