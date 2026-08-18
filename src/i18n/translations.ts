export type Lang = 'es' | 'en'

const es = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Proyectos',
    journey: 'Trayectoria',
    contact: 'Contacto',
    talk: 'Hablemos',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    theme: 'Cambiar tema',
    lang: 'Cambiar idioma',
  },
  common: {
    talk: 'Hablemos',
    seeWork: 'Mi trabajo',
    downloadCv: 'Descargar CV',
    caseStudy: 'Caso de estudio',
    backToProjects: 'Volver a proyectos',
    liveProject: 'Ver proyecto en vivo',
    viewSite: 'Ver sitio',
    repository: 'Repositorio',
    logoOf: 'Logo de',
    capturesOf: 'Capturas de',
    viewOf: 'vista',
    goToView: 'Ir a la vista',
    light: 'Claro',
    dark: 'Oscuro',
  },
  about: {
    eyebrow: 'Sobre mí',
  },
  featured: {
    eyebrow: 'Proyectos destacados',
    title: 'Productos completos, de §punta a punta.',
    description:
      'Cada proyecto es un producto real: frontend, backend, base de datos y despliegue. Diseñados, construidos y publicados aplicando pensamiento de ingeniería.',
  },
  process: {
    eyebrow: 'Metodología',
    title: 'Cómo construyo §software.',
    description:
      'No empiezo a escribir código de inmediato. Primero entiendo el problema, después diseño la solución y solo entonces construyo.',
  },
  stack: {
    eyebrow: 'Stack tecnológico',
    title: 'Herramientas que uso para §construir.',
    description:
      'El stack con el que trabajo en producción, agrupado por capas. Prefiero tecnologías con propósito sobre modas: lo que resuelve mejor cada problema.',
  },
  secondary: {
    eyebrow: 'Otros proyectos',
    title: 'Más trabajo, §en línea.',
    description: 'Landing pages y sitios de marca con foco en conversión, rendimiento y SEO.',
    allRepos: 'Ver todos los códigos en GitHub',
  },
  journey: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia, formación y §crecimiento.',
    exp: 'Experiencia profesional',
    education: 'Formación',
    certs: 'Certificaciones · SENA',
    languages: 'Idiomas',
  },
  contact: {
    eyebrow: 'Contacto',
    title: '¿Construimos tu próxima §plataforma?',
    description:
      'Estoy disponible para roles remotos o híbridos en equipos de alto impacto, y para proyectos freelance que necesiten un desarrollador full stack de punta a punta.',
    email: { label: 'Email', note: 'Respuesta rápida' },
    whatsapp: { label: 'WhatsApp', note: 'Disponible para conversar' },
    linkedin: { label: 'LinkedIn', note: 'Perfil profesional', value: 'Jorge Andrés Gómez' },
    github: { label: 'GitHub', note: 'Código de los proyectos', value: '@JorgeAndresDev' },
  },
  project: {
    study: {
      context: 'Contexto',
      problem: 'Problema',
      solution: 'Solución',
      features: 'Funcionalidades',
      architecture: 'Arquitectura',
      technologies: 'Tecnologías utilizadas',
      decisions: 'Decisiones técnicas',
      challenges: 'Retos y soluciones',
      challengeBadge: 'Reto',
      result: 'Resultado',
      description: 'Descripción',
      characteristics: 'Características',
    },
    cta: {
      title: '¿Te interesa algo §similar?',
      text: 'Cuéntame tu idea y la convertimos en un producto completo.',
    },
    notFoundTitle: 'Página no encontrada | Jorge Gómez',
    docTitleSuffix: '| Jorge Gómez — Full Stack Developer',
  },
  notfound: {
    index: 'Error 404',
    title: 'Página no§encontrada.',
    text: 'La ruta que buscas no existe o se movió. Volvamos a lo que importa.',
    home: 'Volver al inicio',
  },
  footer: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    madeWith: 'Hecho con React',
  },
}

const en = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    journey: 'Journey',
    contact: 'Contact',
    talk: "Let's talk",
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    theme: 'Toggle theme',
    lang: 'Change language',
  },
  common: {
    talk: "Let's talk",
    seeWork: 'My work',
    downloadCv: 'Download CV',
    caseStudy: 'Case study',
    backToProjects: 'Back to projects',
    liveProject: 'View live project',
    viewSite: 'View site',
    repository: 'Repository',
    logoOf: 'Logo of',
    capturesOf: 'Captures of',
    viewOf: 'view',
    goToView: 'Go to view',
    light: 'Light',
    dark: 'Dark',
  },
  about: {
    eyebrow: 'About me',
  },
  featured: {
    eyebrow: 'Featured projects',
    title: 'Complete products, §end to end.',
    description:
      'Every project is a real product: frontend, backend, database and deployment. Designed, built and shipped applying engineering thinking.',
  },
  process: {
    eyebrow: 'Methodology',
    title: 'How I build §software.',
    description:
      "I don't start writing code right away. First I understand the problem, then I design the solution, and only then do I build.",
  },
  stack: {
    eyebrow: 'Tech stack',
    title: 'Tools I use to §build.',
    description:
      'The stack I work with in production, grouped by layers. I prefer purposeful technologies over trends: the ones that best solve each problem.',
  },
  secondary: {
    eyebrow: 'Other projects',
    title: 'More work, §online.',
    description: 'Landing pages and brand sites focused on conversion, performance and SEO.',
    allRepos: 'See all code on GitHub',
  },
  journey: {
    eyebrow: 'Journey',
    title: 'Experience, education and §growth.',
    exp: 'Professional experience',
    education: 'Education',
    certs: 'SENA Certifications',
    languages: 'Languages',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Shall we build your next §platform?',
    description:
      "I'm available for remote or hybrid roles in high-impact teams, and for freelance projects that need an end-to-end full stack developer.",
    email: { label: 'Email', note: 'Quick response' },
    whatsapp: { label: 'WhatsApp', note: 'Available to chat' },
    linkedin: { label: 'LinkedIn', note: 'Professional profile', value: 'Jorge Andrés Gómez' },
    github: { label: 'GitHub', note: 'Project code', value: '@JorgeAndresDev' },
  },
  project: {
    study: {
      context: 'Context',
      problem: 'Problem',
      solution: 'Solution',
      features: 'Features',
      architecture: 'Architecture',
      technologies: 'Technologies used',
      decisions: 'Technical decisions',
      challenges: 'Challenges & solutions',
      challengeBadge: 'Challenge',
      result: 'Result',
      description: 'Description',
      characteristics: 'Characteristics',
    },
    cta: {
      title: 'Interested in something §similar?',
      text: "Tell me your idea and we'll turn it into a complete product.",
    },
    notFoundTitle: 'Page not found | Jorge Gómez',
    docTitleSuffix: '| Jorge Gómez — Full Stack Developer',
  },
  notfound: {
    index: 'Error 404',
    title: 'Page §not found.',
    text: "The route you are looking for does not exist or has moved. Let's get back to what matters.",
    home: 'Back to home',
  },
  footer: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    madeWith: 'Built with React',
  },
}

type LeafKeys<T> = {
  [K in keyof T & string]: T[K] extends string
    ? K
    : T[K] extends Record<string, unknown>
      ? `${K}.${LeafKeys<T[K]>}`
      : never
}[keyof T & string]

type Dict = { [key: string]: string | Dict }

const flatten = (obj: Dict, prefix = ''): Record<string, string> => {
  const out: Record<string, string> = {}
  for (const key of Object.keys(obj)) {
    const value = obj[key]
    const path = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'object' && value !== null) {
      Object.assign(out, flatten(value, path))
    } else {
      out[path] = value
    }
  }
  return out
}

export const translations: Record<Lang, Record<string, string>> = {
  es: flatten(es),
  en: flatten(en),
}

export type TranslationKey = LeafKeys<typeof es>