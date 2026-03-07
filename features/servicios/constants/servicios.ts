export interface ProyectoRef {
    slug: string
    title: string
    image: string
}

export interface Servicio {
    id: string
    categoria: string
    tagline: string
    descripcion: string
    proyectos: ProyectoRef[]
}

export const servicios: Servicio[] = [
    {
        id: "logistica",
        categoria: "Sistemas de Logística y Control de Inventario",
        tagline: "El freno a la pérdida de dinero",
        descripcion:
            "Diseño motores logísticos que aseguran el flujo de caja y evitan sobreventas. Construyo sistemas de control centralizados donde tu equipo y tus tiendas saben exactamente qué hay en existencia y qué está descontinuado, aplicando las reglas de negocio en tiempo real.",
        proyectos: [
            { slug: "catalogo-alchemy", title: "Green Alchemy — Catálogo Digital", image: "/project_webp/catalogo/catalogo1.png" },
            { slug: "green-alchemy-sgi", title: "Green Alchemy SGL", image: "/project_webp/greensystem/green1.png" },
        ],
    },
    {
        id: "erp",
        categoria: "Modernización de ERPs y Sistemas a Medida",
        tagline: "Velocidad y modernización corporativa",
        descripcion:
            "Tomo sistemas legacy o flujos corporativos pesados y los transformo en plataformas modernas. Modernizo ERPs internos traduciendo la complejidad de tu industria en interfaces limpias, estéticas y eficientes, sin romper tus operaciones diarias.",
        proyectos: [
            { slug: "winpot-cms-multi-tenant", title: "Winpot CMS & Multi-Tenant", image: "/project_webp/winpot/winpot1.png" },
            { slug: "probin-real-estate-cms", title: "Probin Real Estate CMS", image: "/project_webp/probin/probin1.png" },
        ],
    },
    {
        id: "motores",
        categoria: "Motores de Reglas, Lealtad y Alta Seguridad",
        tagline: "Arquitectura backend estricta",
        descripcion:
            "Arquitectura de backends con motores de reglas estrictos. Construyo desde sistemas de retención y lealtad con niveles dinámicos, hasta entornos de alta seguridad con control de accesos granular operando bajo instancias robustas.",
        proyectos: [
            { slug: "go-kart-zen-loyalty", title: "Go-Kart Zen Loyalty", image: "/project_webp/battlekart/bk7.png" },
            { slug: "one-soul-essence", title: "ONE · Soul Essence", image: "/project_webp/one/one1.png" },
        ],
    },
]
