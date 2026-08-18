import { ArrowUpRight, BookOpen } from 'lucide-react'
import Button from '../components/Button'
import { GithubIcon } from '../components/BrandIcons'
import ProjectCarousel from '../components/ProjectCarousel'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import { useLanguage } from '../context/LanguageContext'
import { featuredProjects } from '../data'
import type { Project } from '../data/types'

const ProjectBlock = ({ project, index }: { project: Project; index: number }) => {
  const reversed = index % 2 === 1
  const { t } = useLanguage()

  return (
    <article className="grid items-center gap-10 lg:grid-cols-12">
      <div className={reversed ? 'lg:order-2 lg:col-span-5' : 'lg:col-span-5'}>
        <Reveal>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.logo && (
                <img
                  src={project.logo}
                  alt={`${t('common.logoOf')} ${project.name}`}
                  loading="lazy"
                  className="h-12 w-12 rounded-xl border border-line bg-white/5 object-contain p-1.5"
                />
              )}
              <div>
                <p className="tech-label">{project.categoryLabel}</p>
                <h3 className="mt-1 font-display text-3xl font-bold uppercase tracking-tight text-fg md:text-4xl">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          <p className="mt-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest" style={{ color: project.accent }}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: project.accent }} />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: project.accent }} />
            </span>
            {project.status}
          </p>

          <p className="mt-4 text-lg font-medium leading-relaxed text-fg">{project.tagline}</p>
          <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-6 space-y-2.5">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-muted">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.accent }} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech} accent={project.accent}>
                {tech}
              </Tag>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.caseStudy && (
              <Button to={`/projects/${project.slug}`} variant="outline">
                {t('common.caseStudy')}
                <BookOpen size={16} aria-hidden="true" />
              </Button>
            )}
            {project.github.map((link) => (
              <Button
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                className="px-3 text-xs"
              >
                <GithubIcon size={15} />
                {link.label}
              </Button>
            ))}
            {project.demo && (
              <Button href={project.demo} target="_blank" rel="noreferrer" variant="ghost" className="px-3 text-xs">
                <ArrowUpRight size={15} aria-hidden="true" />
                {t('common.viewSite')}
              </Button>
            )}
          </div>
        </Reveal>
      </div>

      <div className={reversed ? 'lg:order-1 lg:col-span-7' : 'lg:col-span-7'}>
        <Reveal delay={0.1}>
          <ProjectCarousel
            images={project.images}
            hasThemeToggle={project.hasThemeToggle}
            accent={project.accent}
            alt={`${t('common.capturesOf')} ${project.name}`}
          />
        </Reveal>
      </div>
    </article>
  )
}

const FeaturedProjects = () => {
  const { lang, t, tTitle } = useLanguage()
  const title = tTitle('featured.title')

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="02"
          eyebrow={t('featured.eyebrow')}
          title={
            <>
              {title.pre}
              <span className="text-accent">{title.accent}</span>
            </>
          }
          description={t('featured.description')}
        />

        <div className="space-y-24 md:space-y-32">
          {featuredProjects(lang).map((project, index) => (
            <ProjectBlock key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects