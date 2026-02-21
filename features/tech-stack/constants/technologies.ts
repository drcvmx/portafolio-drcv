export interface Technology {
  name: string
  category: TechCategory
  icon?: string
}

export type TechCategory = "Frontend" | "Backend" | "Database" | "DevOps" | "Tools"

export const technologies: Technology[] = [
  // Frontend
  { name: "React", category: "Frontend", icon: "/skills_webp/react.webp" },
  { name: "Next.js", category: "Frontend", icon: "/skills_webp/nextjs-icon-svgrepo-com.svg" },
  { name: "TypeScript", category: "Frontend", icon: "/skills_webp/typescript.webp" },
  { name: "TailwindCSS", category: "Frontend", icon: "/skills_webp/tailwild.webp" },
  { name: "HTML/CSS", category: "Frontend", icon: "/skills_webp/html.webp" },
  { name: "Vue.js", category: "Frontend", icon: "/skills_webp/vue.webp" },
  { name: "Angular", category: "Frontend", icon: "/skills_webp/angular.webp" },
  { name: "Astro", category: "Frontend", icon: "/skills_webp/astro.webp" },
  { name: "SCSS", category: "Frontend", icon: "/skills_webp/scss-svgrepo-com.svg" },
  { name: "JavaScript", category: "Frontend", icon: "/skills_webp/javascript.webp" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "/skills_webp/nodejs-icon-svgrepo-com.svg" },
  { name: "Python", category: "Backend", icon: "/skills_webp/python.webp" },
  { name: "Java", category: "Backend", icon: "/skills_webp/java.webp" },
  { name: "Flask", category: "Backend", icon: "/skills_webp/palletsprojects_flask-ar21~v2.svg" },
  { name: "FastAPI", category: "Backend", icon: "/skills_webp/FastAPI.svg" },

  // Database
  { name: "PostgreSQL", category: "Database", icon: "/skills_webp/postgresql-logo-svgrepo-com.svg" },
  { name: "SQL", category: "Database", icon: "/skills_webp/sql.webp" },
  { name: "Supabase", category: "Database", icon: "/skills_webp/supabase-icon.svg" },

  // DevOps
  { name: "Git", category: "DevOps", icon: "/skills_webp/git.webp" },
  { name: "GitHub", category: "DevOps", icon: "/skills_webp/github-svgrepo-com.svg" },
]

export const techCategories: TechCategory[] = ["Frontend", "Backend", "Database", "DevOps", "Tools"]
