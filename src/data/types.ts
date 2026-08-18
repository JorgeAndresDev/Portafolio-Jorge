export type ProjectCategory = 'web' | 'mobile' | 'landing'
export type ProjectTier = 'featured' | 'secondary'
export type ThemeMode = 'claro' | 'oscuro'

export interface GithubLink {
  label: string
  url: string
}

export interface CaseDecision {
  title: string
  text: string
}

export interface CaseStudy {
  context: string
  problem: string
  solution: string
  functionalities: string[]
  architecture: string[]
  technologies: string[]
  decisions: CaseDecision[]
  challenges: CaseDecision[]
  result: string
}

export interface ProjectImageSet {
  shots?: string[]
  claro?: string[]
  oscuro?: string[]
}

export interface Project {
  slug: string
  name: string
  title: string
  tagline: string
  description: string
  category: ProjectCategory
  categoryLabel: string
  tier: ProjectTier
  accent: string
  status: string
  features: string[]
  technologies: string[]
  github: GithubLink[]
  demo?: string
  demoLabel?: string
  logo?: string
  hasThemeToggle: boolean
  caseStudy?: CaseStudy
  images: ProjectImageSet
}

export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  technologies: string[]
  highlights: string[]
}

export interface EducationItem {
  title: string
  institution: string
  year: string
}

export interface Certification {
  name: string
  hours: string
  year: string
}

export interface TechnologyGroup {
  category: string
  items: string[]
}