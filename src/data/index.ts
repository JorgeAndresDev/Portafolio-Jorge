import type { Lang } from '../i18n/translations'
import type { Project } from './types'
import { es } from './es'
import { en } from './en'

export type SiteData = typeof es

export const data: Record<Lang, SiteData> = { es, en }

export const featuredProjects = (lang: Lang): Project[] => data[lang].projects.filter((p) => p.tier === 'featured')

export const secondaryProjects = (lang: Lang): Project[] => data[lang].projects.filter((p) => p.tier === 'secondary')

export const getProjectBySlug = (lang: Lang, slug: string): Project | undefined =>
  data[lang].projects.find((p) => p.slug === slug)