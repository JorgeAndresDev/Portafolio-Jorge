import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react'
import Button from '../components/Button'
import { GithubIcon } from '../components/BrandIcons'
import ProjectCarousel from '../components/ProjectCarousel'
import Reveal from '../components/Reveal'
import Tag from '../components/Tag'
import NotFound from './NotFound'
import { useLanguage } from '../context/LanguageContext'
import { getProjectBySlug } from '../data'
import type { ReactNode } from 'react'

const StudyHeading = ({ index, title }: { index: string; title: string }) => (
  <Reveal>
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs tracking-[0.3em] text-accent">{index}</span>
      <span className="h-px w-10 bg-accent/40" aria-hidden="true" />
      <h3 className="font-display text-2xl font-semibold text-fg md:text-3xl">{title}</h3>
    </div>
  </Reveal>
)

const StudyText = ({ children }: { children: ReactNode }) => (
  <Reveal delay={0.05}>
    <p className="text-lg leading-relaxed text-muted">{children}</p>
  </Reveal>
)

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const { lang, site, t, tTitle } = useLanguage()
  const project = slug ? getProjectBySlug(lang, slug) : undefined

  useEffect(() => {
    if (project) {
      document.title = `${project.title} ${t('project.docTitleSuffix')}`
    } else {
      document.title = t('project.notFoundTitle')
    }
  }, [project, t])

  if (!project) return <NotFound />

  const study = project.caseStudy
  const ctaTitle = tTitle('project.cta.title')

  return (
    <div className="relative pt-28 pb-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80"
        style={{
          background: `radial-gradient(ellipse 70% 100% at 50% 0%, ${project.accent}10, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          {t('common.backToProjects')}
        </Link>

        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="tech-label">{project.categoryLabel}</span>
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: project.accent }}>
              {project.status}
            </span>
          </div>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight text-fg md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech} accent={project.accent}>
                {tech}
              </Tag>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <Button href={project.demo} target="_blank" rel="noreferrer">
                <ArrowUpRight size={16} aria-hidden="true" />
                {t('common.liveProject')}
              </Button>
            )}
            {project.github.map((link) => (
              <Button key={link.url} href={link.url} target="_blank" rel="noreferrer" variant="outline">
                <GithubIcon size={16} />
                {link.label}
              </Button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ProjectCarousel
            images={project.images}
            hasThemeToggle={project.hasThemeToggle}
            accent={project.accent}
            alt={`${t('common.capturesOf')} ${project.name}`}
            aspect="aspect-[16/9]"
          />
        </Reveal>

        {study ? (
          <div className="mt-20 space-y-16 md:space-y-20">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <StudyHeading index="01" title={t('project.study.context')} />
                <StudyText>{study.context}</StudyText>
              </div>
              <div className="space-y-4">
                <StudyHeading index="02" title={t('project.study.problem')} />
                <StudyText>{study.problem}</StudyText>
              </div>
              <div className="space-y-4">
                <StudyHeading index="03" title={t('project.study.solution')} />
                <StudyText>{study.solution}</StudyText>
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <StudyHeading index="04" title={t('project.study.features')} />
                <Reveal delay={0.05}>
                  <ul className="space-y-3">
                    {study.functionalities.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.accent }} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              <div className="space-y-6">
                <StudyHeading index="05" title={t('project.study.architecture')} />
                <Reveal delay={0.05}>
                  <ul className="space-y-3">
                    {study.architecture.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-mono text-sm text-muted">
                        <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-accent/50" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>

            <div className="space-y-6">
              <StudyHeading index="06" title={t('project.study.technologies')} />
              <Reveal delay={0.05}>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <Tag key={tech} accent={project.accent}>
                      {tech}
                    </Tag>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="space-y-6">
              <StudyHeading index="07" title={t('project.study.decisions')} />
              <div className="grid gap-4 md:grid-cols-3">
                {study.decisions.map((decision, i) => (
                  <Reveal key={decision.title} delay={i * 0.05}>
                    <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40">
                      <h4 className="font-display text-lg font-semibold text-fg">{decision.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{decision.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <StudyHeading index="08" title={t('project.study.challenges')} />
              <div className="grid gap-4 md:grid-cols-2">
                {study.challenges.map((challenge, i) => (
                  <Reveal key={challenge.title} delay={i * 0.05}>
                    <div className="h-full rounded-2xl border border-line bg-surface p-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs uppercase tracking-widest text-faint">
                          {t('project.study.challengeBadge')}
                        </span>
                        <span className="h-px flex-1 bg-line" aria-hidden="true" />
                      </div>
                      <h4 className="mt-3 font-display text-lg font-semibold text-fg">{challenge.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{challenge.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal>
              <div
                className="relative overflow-hidden rounded-2xl border p-8 md:p-10"
                style={{ borderColor: `${project.accent}40`, background: `${project.accent}0d` }}
              >
                <div className="space-y-3">
                  <StudyHeading index="09" title={t('project.study.result')} />
                  <p className="text-lg leading-relaxed text-muted">{study.result}</p>
                </div>
              </div>
            </Reveal>
          </div>
        ) : (
          <div className="mt-16 space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <StudyHeading index="01" title={t('project.study.description')} />
                <StudyText>{project.description}</StudyText>
              </div>
              <div className="space-y-4">
                <StudyHeading index="02" title={t('project.study.characteristics')} />
                <Reveal delay={0.05}>
                  <ul className="space-y-3">
                    {project.features.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.accent }} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        )}

        <Reveal className="mt-24">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-surface p-8 text-center md:flex-row md:text-left">
            <div>
              <h3 className="font-display text-2xl font-semibold text-fg">
                {ctaTitle.pre}
                <span className="text-accent">{ctaTitle.accent}</span>
              </h3>
              <p className="mt-2 text-muted">{t('project.cta.text')}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button to="/#contact">{t('common.talk')}</Button>
              <Button href={site.profile.cv} download="Jorge_Gomez_CV.pdf" variant="outline">
                <Download size={16} aria-hidden="true" />
                {t('common.downloadCv')}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default ProjectDetail