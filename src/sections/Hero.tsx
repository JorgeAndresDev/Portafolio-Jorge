import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Button from '../components/Button'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/BrandIcons'
import { useLanguage } from '../context/LanguageContext'
import photo from '../assets/profile/jorge.jpg'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const Hero = () => {
  const { site, t } = useLanguage()
  const { profile } = site

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_40%,#000_20%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-start gap-10 px-5 md:px-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur md:p-8">
            <div className="flex flex-col items-center text-center">
              <img
                src={photo}
                alt={`${profile.name} — foto`}
                className="h-80 w-70 rounded-2xl border border-line object-cover"
              />
              <h1 className="mt-5 font-display text-2xl font-bold tracking-tight text-fg md:text-3xl">{profile.name}</h1>
              <p className="mt-1 text-sm font-medium text-accent">{profile.role}</p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{profile.hero.badge}</span>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <WhatsappIcon size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-bold uppercase leading-[1.02] tracking-tight text-fg">
            {profile.hero.headlineA}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-acc-2">
              {profile.hero.headlineB}
            </span>
            <br />
            {profile.hero.headlineC}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{profile.hero.valueProposition}</p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {profile.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="sr-only">{metric.label}</dt>
                <dd className="font-display text-3xl font-bold text-fg">{metric.value}</dd>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-widest text-faint">{metric.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/#contact">{t('common.talk')}</Button>
            <Button to="/#projects" variant="outline">
              {t('common.seeWork')}
            </Button>
          </div>

          <ul className="mt-10 grid gap-2 sm:grid-cols-2">
            {profile.highlights.map((highlight) => (
              <li
                key={highlight.title}
                className="flex items-baseline gap-2 rounded-lg border border-line bg-surface/40 px-4 py-3"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-fg">{highlight.title}</span>
                <span className="text-sm text-muted">{highlight.description}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero