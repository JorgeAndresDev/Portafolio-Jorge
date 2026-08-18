import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

const NAV_ITEMS = [
  { id: 'home', label: 'nav.home' },
  { id: 'about', label: 'nav.about' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'journey', label: 'nav.journey' },
  { id: 'contact', label: 'nav.contact' },
] as const

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id))
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-base/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/#home" className="font-display text-lg font-bold tracking-tight text-fg" aria-label={t('nav.home')}>
          Jorge<span className="text-accent">.</span>dev
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label={t('nav.home')}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                active === item.id ? 'bg-accent/15 text-accent' : 'text-muted hover:text-fg'
              }`}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t('nav.theme')}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            aria-label={t('nav.lang')}
            className="inline-flex h-10 items-center justify-center rounded-lg border border-line px-3 font-mono text-xs font-semibold tracking-widest text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <Link
            to="/#contact"
            className="hidden rounded-lg bg-fg px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-inverse transition-all hover:bg-accent hover:text-white md:inline-flex"
          >
            {t('nav.talk')}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-base/95 px-5 py-4 backdrop-blur-xl md:hidden" aria-label={t('nav.home')}>
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 font-mono text-sm uppercase tracking-widest text-muted transition-colors hover:bg-accent/10 hover:text-fg"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar