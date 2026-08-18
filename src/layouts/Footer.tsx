import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { site, t } = useLanguage()
  const { profile } = site

  return (
    <footer className="border-t border-line bg-base">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-8">
        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint transition-colors hover:text-fg"
          >
            <GithubIcon size={16} /> {t('footer.github')}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint transition-colors hover:text-fg"
          >
            <LinkedinIcon size={16} /> {t('footer.linkedin')}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint transition-colors hover:text-fg"
          >
            <Mail size={16} aria-hidden="true" /> {t('footer.email')}
          </a>
        </div>

        <p className="text-center font-mono text-xs uppercase tracking-widest text-faint md:text-right">
          © {currentYear} · {profile.brand} · {t('footer.madeWith')}
        </p>
      </div>
    </footer>
  )
}

export default Footer