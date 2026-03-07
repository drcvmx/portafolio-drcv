"use client"

import { servicios } from "../constants/servicios"
import { ServicioCard } from "./ServicioCard"

export function ServiciosSection() {
    return (
        <section className="servicios-section" id="servicios">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">EN QUÉ TE PUEDO AYUDAR</h2>
                    <div className="section-line" />
                </div>
                <div className="servicios-grid">
                    {servicios.map((servicio, i) => (
                        <ServicioCard key={servicio.id} servicio={servicio} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
