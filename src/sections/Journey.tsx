import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import { useLanguage } from '../context/LanguageContext'

const Journey = () => {
  const { site, t, tTitle } = useLanguage()
  const { experience, education, certifications, languages } = site
  const title = tTitle('journey.title')

  return (
    <section id="journey" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="06"
          eyebrow={t('journey.eyebrow')}
          title={
            <>
              {title.pre}
              <span className="text-accent">{title.accent}</span>
            </>
          }
        />

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="tech-label mb-8">{t('journey.exp')}</h3>
            <ol className="relative space-y-12 border-l border-line pl-8">
              {experience.map((job, i) => (
                <Reveal key={job.company + job.period} delay={i * 0.05}>
                  <li className="relative">
                    <span
                      className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-base"
                      aria-hidden="true"
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-display text-xl font-semibold text-fg">{job.role}</h4>
                      <span className="font-mono text-xs uppercase tracking-widest text-faint">{job.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {job.company} · {job.location}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {job.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-accent/50" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="space-y-12 lg:col-span-5">
            <Reveal>
              <div>
                <h3 className="tech-label mb-6">{t('journey.education')}</h3>
                <ul className="space-y-4">
                  {education.map((item) => (
                    <li key={item.title} className="rounded-2xl border border-line bg-surface p-6">
                      <p className="font-display text-lg font-semibold text-fg">{item.title}</p>
                      <p className="mt-1.5 text-sm text-muted">
                        {item.institution} · <span className="text-accent">{item.year}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h3 className="tech-label mb-6">{t('journey.certs')}</h3>
                <ul className="space-y-3">
                  {certifications.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex items-center justify-between gap-4 rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-accent/40"
                    >
                      <span className="text-sm font-medium text-muted">{cert.name}</span>
                      <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-faint">
                        {cert.hours} · {cert.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <h3 className="tech-label mb-6">{t('journey.languages')}</h3>
                <ul className="space-y-3">
                  {languages.map((lang) => (
                    <li key={lang.name} className="flex items-center justify-between rounded-xl border border-line bg-surface px-5 py-4">
                      <span className="text-sm font-medium text-muted">{lang.name}</span>
                      <span className="font-mono text-xs uppercase tracking-widest text-faint">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey