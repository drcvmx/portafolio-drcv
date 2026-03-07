"use client"

import Link from "next/link"
import type { Servicio } from "../constants/servicios"

interface ServicioCardProps {
    servicio: Servicio
    index: number
}

export function ServicioCard({ servicio, index }: ServicioCardProps) {
    return (
        <div className="servicio-card">
            <div className="servicio-index">0{index + 1}</div>
            <div className="servicio-body">
                <div className="servicio-meta">
                    <span className="servicio-tagline">{servicio.tagline}</span>
                </div>
                <h3 className="servicio-titulo">{servicio.categoria}</h3>
                <p className="servicio-descripcion">{servicio.descripcion}</p>

                {/* Proyectos relacionados */}
                <div className="servicio-proyectos">
                    <span className="servicio-proyectos-label">Casos de uso</span>
                    <div className="servicio-proyectos-grid">
                        {servicio.proyectos.map((proyecto) => (
                            <Link
                                key={proyecto.slug}
                                href={`/proyectos/${proyecto.slug}`}
                                className="servicio-proyecto-thumb"
                            >
                                <img
                                    src={proyecto.image}
                                    alt={proyecto.title}
                                    className="servicio-proyecto-img"
                                />
                                <span className="servicio-proyecto-name">{proyecto.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
