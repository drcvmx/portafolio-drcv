export interface Technology {
  name: string
  icon?: string
}

export interface TechImpactBlock {
  title: string
  description: string
  technologies: Technology[]
}

export const techImpactBlocks: TechImpactBlock[] = [
  {
    title: "Arquitectura y Seguridad",
    description: "Infraestructura robusta para sostener reglas de negocio complejas y operaciones críticas.",
    technologies: [
      { name: "PostgreSQL", icon: "/skills_webp/postgresql-logo-svgrepo-com.svg" },
      { name: "Oracle", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/oracle-icon.png" },
      { name: "Python", icon: "/skills_webp/python.webp" },
      { name: "Java", icon: "/skills_webp/java.webp" },
      { name: "Node.js", icon: "/skills_webp/nodejs-icon-svgrepo-com.svg" },
      { name: "Linux / Certbot", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linux-icon.png" },
    ],
  },
  {
    title: "Desarrollo Ágil y UI",
    description: "Interfaces estéticas, escalables y de alto rendimiento desarrolladas con precisión.",
    technologies: [
      { name: "Next.js", icon: "/skills_webp/nextjs-icon-svgrepo-com.svg" },
      { name: "React", icon: "/skills_webp/react.webp" },
      { name: "TypeScript", icon: "/skills_webp/typescript.webp" },
      { name: "TailwindCSS", icon: "/skills_webp/tailwild.webp" },
    ],
  },
  {
    title: "Aceleración con IA y BaaS",
    description: "Integración de agentes de IA y servicios modernos para multiplicar la velocidad de entrega.",
    technologies: [
      { name: "Supabase", icon: "/skills_webp/supabase-icon.svg" },
      { name: "Lovable AI", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/lovable-ai-icon.png" },
      { name: "v0 by Vercel", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/vercel-v0-icon.png" },
      { name: "FastAPI", icon: "/skills_webp/FastAPI.svg" },
    ],
  },
]

// Retrocompatibilidad: array plano para TechMarquee
export const technologies: Technology[] = techImpactBlocks.flatMap((b) => b.technologies)

