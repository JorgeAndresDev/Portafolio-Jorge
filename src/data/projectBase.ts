import { images } from './images'
import type { Project } from './types'

type LocalizedProject = Pick<
  Project,
  'title' | 'tagline' | 'description' | 'categoryLabel' | 'status' | 'features' | 'github' | 'demoLabel' | 'caseStudy'
>

type ProjectShell = Omit<Project, keyof LocalizedProject>

const shell: Record<string, ProjectShell> = {
  cobrago: {
    slug: 'cobrago',
    name: 'COBRAGO',
    category: 'mobile',
    tier: 'featured',
    accent: '#f97316',
    technologies: ['React Native', 'Expo', 'FastAPI', 'PostgreSQL'],
    logo: images.cobrago.logo,
    hasThemeToggle: true,
    images: { claro: images.cobrago.claro, oscuro: images.cobrago.oscuro },
  },
  jluxuries: {
    slug: 'jluxuries',
    name: 'JLUXURIES',
    category: 'web',
    tier: 'featured',
    accent: '#1a80ff',
    technologies: ['React', 'FastAPI', 'MySQL', 'Tailwind'],
    logo: images.jluxuries.logo,
    hasThemeToggle: false,
    images: { shots: images.jluxuries.shots },
  },
  logisys: {
    slug: 'logisys',
    name: 'LOGI SYS',
    category: 'web',
    tier: 'featured',
    accent: '#00ff66',
    technologies: ['React', 'Node.js', 'Express', 'Tailwind'],
    logo: images.logisys.logo,
    hasThemeToggle: true,
    images: { claro: images.logisys.claro, oscuro: images.logisys.oscuro },
  },
  gCurly: {
    slug: 'g-curly',
    name: 'G-CURLY',
    category: 'landing',
    tier: 'secondary',
    accent: '#8b5cf6',
    technologies: ['React 19', 'Vite', 'Router 7', 'Tailwind'],
    logo: images.gCurly.logo,
    hasThemeToggle: true,
    demo: 'https://graceful-swan-243221.netlify.app/',
    images: { claro: images.gCurly.claro, oscuro: images.gCurly.oscuro },
  },
  electropower: {
    slug: 'electropower',
    name: 'ELECTROPOWER',
    category: 'landing',
    tier: 'secondary',
    accent: '#dc2626',
    technologies: ['React', 'Vite', 'Framer Motion', 'Tailwind'],
    logo: images.electropower.logo,
    hasThemeToggle: false,
    demo: 'https://electropower.vercel.app/',
    images: { shots: images.electropower.shots },
  },
}

export const mergeProject = (key: string, localized: LocalizedProject): Project => ({
  ...shell[key],
  ...localized,
})