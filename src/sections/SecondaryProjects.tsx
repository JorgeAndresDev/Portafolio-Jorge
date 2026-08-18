import { ArrowUpRight } from 'lucide-react'
import Button from '../components/Button'
import { GithubIcon } from '../components/BrandIcons'
import ProjectCarousel from '../components/ProjectCarousel'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import { useLanguage } from '../context/LanguageContext'
import { secondaryProjects } from '../data'
import type { Project } from '../data/types'

const SecondaryCard = ({ project }: { project: Project }) => {
  const { t } = useLanguage()

  return (
    <Reveal className="h-full">
      <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-accent/40">
        <div className="p-5">
          <ProjectCarousel
            images={project.images}
            hasThemeToggle={project.hasThemeToggle}
            accent={project.accent}
            alt={`${t('common.capturesOf')} ${project.name}`}
            aspect="aspect-[16/9]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 pt-0 md:p-6 md:pt-0">
          <div className="flex items-center gap-3">
            {project.logo && (
              <img
                src={project.logo}
                alt={`${t('common.logoOf')} ${project.name}`}
                loading="lazy"
                className="h-10 w-10 rounded-lg border border-line bg-white/5 object-contain p-1"
              />
            )}
            <div>
              <p className="tech-label">{project.categoryLabel}</p>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-fg">{project.title}</h3>
            </div>
          </div>

          <p className="mt-4 leading-relaxed text-muted">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech} accent={project.accent}>
                {tech}
              </Tag>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-5">
            {project.demo && (
              <Button href={project.demo} target="_blank" rel="noreferrer" variant="outline" className="px-4 py-2 text-xs">
                <ArrowUpRight size={14} aria-hidden="true" />
                {project.demoLabel ?? t('common.viewSite')}
              </Button>
            )}
            {project.github.map((link) => (
              <Button
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                className="px-3 py-2 text-xs"
              >
                <GithubIcon size={14} />
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

const SecondaryProjects = () => {
  const { lang, t, tTitle } = useLanguage()
  const title = tTitle('secondary.title')

  return (
    <section id="secondary-projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="05"
          eyebrow={t('secondary.eyebrow')}
          title={
            <>
              {title.pre}
              <span className="text-accent">{title.accent}</span>
            </>
          }
          description={t('secondary.description')}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {secondaryProjects(lang).map((project) => (
            <SecondaryCard key={project.slug} project={project} />
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button href="https://github.com/JorgeAndresDev/" target="_blank" rel="noreferrer" variant="outline">
            <GithubIcon size={16} />
            {t('secondary.allRepos')}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

export default SecondaryProjects