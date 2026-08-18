import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { getTechLogo } from '../components/TechLogo'
import { useLanguage } from '../context/LanguageContext'

const TechStack = () => {
  const { site, t, tTitle } = useLanguage()
  const title = tTitle('stack.title')

  return (
    <section id="stack" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          eyebrow={t('stack.eyebrow')}
          title={
            <>
              {title.pre}
              <span className="text-accent">{title.accent}</span>
            </>
          }
          description={t('stack.description')}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.technologyGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/40">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">{group.category}</h3>
                  <span className="font-mono text-xs text-faint">{String(group.items.length).padStart(2, '0')}</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {group.items.map((item) => {
                    const Logo = getTechLogo(item)
                    return (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-muted transition-colors group-hover:text-fg"
                      >
                        {Logo ? (
                          <Logo
                            size={15}
                            className="shrink-0 transition-colors group-hover:text-accent"
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            className="h-1 w-4 shrink-0 rounded-full bg-accent/40 transition-all group-hover:w-6 group-hover:bg-accent"
                            aria-hidden="true"
                          />
                        )}
                        {item}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack