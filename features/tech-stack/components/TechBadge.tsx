"use client"

interface TechBadgeProps {
  name: string
  icon?: string
  variant?: "default" | "outline" | "highlight" | "logo"
}

// Mapeo de nombre de tecnología → logo webp disponible
const techLogoMap: Record<string, string> = {
  "React": "/skills_webp/react.webp",
  "Next.js": "/skills_webp/nextjs-icon-svgrepo-com.svg",
  "TypeScript": "/skills_webp/typescript.webp",
  "JavaScript": "/skills_webp/javascript.webp",
  "Python": "/skills_webp/python.webp",
  "Supabase": "/skills_webp/supabase-icon.svg",
  "Tailwind CSS": "/skills_webp/tailwild.webp",
  "SQL": "/skills_webp/sql.webp",
  "Git": "/skills_webp/git.webp",
  "Vue.js": "/skills_webp/vue.webp",
  "Astro": "/skills_webp/astro.webp",
  "SCSS": "/skills_webp/scss-svgrepo-com.svg",
  "HTML/CSS": "/skills_webp/html.webp",
  "Angular": "/skills_webp/angular.webp",
  "Java": "/skills_webp/java.webp",
  "Flask": "/skills_webp/palletsprojects_flask-ar21~v2.svg",
  "Vite": "/skills_webp/vitejs-svgrepo-com.svg",
  "Node.js": "/skills_webp/nodejs-icon-svgrepo-com.svg",
  "FastAPI": "/skills_webp/FastAPI.svg",
  "PostgreSQL": "/skills_webp/postgresql-logo-svgrepo-com.svg",
}

export function TechBadge({ name, icon, variant = "default" }: TechBadgeProps) {
  const resolvedIcon = icon ?? techLogoMap[name]

  const baseStyles =
    "inline-flex items-center gap-3 px-5 py-2.5 font-bold text-sm uppercase tracking-wide border-2 border-[#111] transition-all duration-200"

  const variants = {
    default: "bg-[#f8f8f8] text-[#111] hover:bg-[#ccff00] hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_#111]",
    outline: "bg-transparent text-[#111] hover:bg-[#111] hover:text-[#ccff00]",
    highlight: "bg-[#ccff00] text-[#111] shadow-[3px_3px_0px_#111] hover:shadow-[4px_4px_0px_#111] hover:translate-y-[-2px]",
    logo: "bg-white text-[#111] shadow-[3px_3px_0px_#111] hover:shadow-[4px_4px_0px_#111] hover:translate-y-[-2px]",
  }

  return (
    <span className={`${baseStyles} ${variants[variant]}`}>
      {resolvedIcon && (
        <img
          src={resolvedIcon}
          alt={name}
          className="w-6 h-6 object-contain flex-shrink-0"
        />
      )}
      {name}
    </span>
  )
}
