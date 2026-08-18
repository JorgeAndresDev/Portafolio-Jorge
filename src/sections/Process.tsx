import { ArrowDown } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../context/LanguageContext'

const Process = () => {
  const { site, t, tTitle } = useLanguage()
  const title = tTitle('process.title')

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="03"
          eyebrow={t('process.eyebrow')}
          title={
            <>
              {title.pre}
              <span className="text-accent">{title.accent}</span>
            </>
          }
          description={t('process.description')}
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.profile.process.steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.05}>
              <li className="group relative h-full rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.25em] text-accent">{step.step}</span>
                  <ArrowDown
                    size={14}
                    aria-hidden="true"
                    className="text-faint transition-colors group-hover:text-accent"
                  />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-fg">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process