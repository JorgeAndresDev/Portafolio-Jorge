import Button from '../components/Button'
import { useLanguage } from '../context/LanguageContext'

const NotFound = () => {
  const { t, tTitle } = useLanguage()
  const title = tTitle('notfound.title')

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-24 pb-16 text-center">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
      <p className="section-index">{t('notfound.index')}</p>
      <h1 className="mt-6 font-display text-6xl font-bold uppercase tracking-tight text-fg md:text-8xl">
        {title.pre}
        <br />
        <span className="text-accent">{title.accent}</span>
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted">{t('notfound.text')}</p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button to="/">{t('notfound.home')}</Button>
        <Button to="/#projects" variant="outline">
          {t('nav.projects')}
        </Button>
      </div>
    </div>
  )
}

export default NotFound