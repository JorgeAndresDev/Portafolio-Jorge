import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { site, t } = useLanguage()
  const { about } = site.profile

  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading index="01" eyebrow={t('about.eyebrow')} title={about.heading} />

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-12">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
                {about.pillars.map((pillar) => (
                  <div key={pillar.label} className="flex flex-col gap-1.5 bg-base-2 p-6">
                    <span className="tech-label">{pillar.label}</span>
                    <span className="font-display text-lg font-semibold text-fg">{pillar.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-b from-surface to-base-2 p-8">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                  style={{ background: 'rgba(59,130,246,0.18)' }}
                />
                <span className="section-index">{about.impact.title}</span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-fg md:text-3xl">
                  {about.impact.text}
                </h3>
                <ul className="mt-8 space-y-4">
                  {about.impact.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {point}
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

export default About