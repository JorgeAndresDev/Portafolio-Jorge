import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import type { ProjectImageSet, ThemeMode } from '../data/types'

type ProjectCarouselProps = {
  images: ProjectImageSet
  hasThemeToggle: boolean
  accent: string
  alt: string
  aspect?: string
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const ProjectCarousel = ({ images, hasThemeToggle, accent, alt, aspect = 'aspect-[16/10]' }: ProjectCarouselProps) => {
  const [mode, setMode] = useState<ThemeMode>('oscuro')
  const [index, setIndex] = useState(0)
  const { t } = useLanguage()

  const active =
    images.shots ?? (mode === 'claro' ? images.claro ?? images.oscuro : images.oscuro ?? images.claro) ?? []

  const switchMode = (next: ThemeMode) => {
    setMode(next)
    setIndex(0)
  }

  useEffect(() => {
    if (active.length < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % active.length), 4200)
    return () => clearInterval(id)
  }, [active.length])

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-line bg-black"
      style={{ boxShadow: `0 0 70px ${accent}14` }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse at top, ${accent}0d, transparent 60%)` }}
      />
      {hasThemeToggle && images.claro && images.oscuro && (
        <div className="absolute top-4 left-4 z-30 flex gap-1 rounded-full border border-line bg-black/70 p-1 backdrop-blur">
          <button
            type="button"
            onClick={() => switchMode('claro')}
            className={`rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors ${
              mode === 'claro' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {t('common.light')}
          </button>
          <button
            type="button"
            onClick={() => switchMode('oscuro')}
            className={`rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors ${
              mode === 'oscuro' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {t('common.dark')}
          </button>
        </div>
      )}

      <div className={`relative ${aspect} w-full overflow-hidden`}>
        <AnimatePresence mode="wait">
          {active.length > 0 && (
            <motion.img
              key={active[index]}
              src={active[index]}
              alt={`${alt} — ${t('common.viewOf')} ${index + 1}`}
              loading="lazy"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute inset-0 h-full w-full object-contain p-3 md:p-6"
            />
          )}
        </AnimatePresence>
      </div>

      {active.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/60 px-3 py-2 backdrop-blur">
          {active.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${t('common.goToView')} ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{ width: i === index ? 24 : 8, background: i === index ? accent : 'rgba(255,255,255,0.25)' }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectCarousel