export interface IProject {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  image: string
  images?: string[]
  accentColor: string
  techStack: TechStack[]
  category: ProjectCategory
  links: {
    live?: string
    github?: string
    production?: string
  }
  featured: boolean
  year: number
  heroImage?: string
  isMobileDesign?: boolean
}

export type TechStack =
  | "React"
  | "Next.js"
  | "TypeScript"
  | "Node.js"
  | "Express"
  | "FastAPI"
  | "Python"
  | "PostgreSQL"
  | "MongoDB"
  | "Supabase"
  | "Tailwind CSS"
  | "Prisma"
  | "Docker"
  | "AWS"
  | "Vercel"
  | "Git"
  | "Figma"
  | "Astro"
  | "Vue.js"
  | "SCSS"
  | "JavaScript"
  | "n8n"
  | "Flask"
  | "HTML/CSS"
  | "Angular"
  | "Java"
  | "SQL"
  | "Vite"
  | "Framer Motion"
  | "TanStack Query"
  | "shadcn-ui"
  | "Lucide React"
  | "LocalStorage API (MockDB)"

export type ProjectCategory = "Frontend" | "Backend" | "Full Stack" | "Mobile" | "API"
