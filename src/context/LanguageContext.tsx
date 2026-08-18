import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from '../i18n/translations'
import type { Lang, TranslationKey } from '../i18n/translations'
import { data } from '../data'
import type { SiteData } from '../data'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TranslationKey) => string
  tTitle: (key: TranslationKey) => { pre: string; accent?: string }
  site: SiteData
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('jorge-lang')
    return saved === 'en' ? 'en' : 'es'
  })

  useEffect(() => {
    localStorage.setItem('jorge-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback((key: TranslationKey) => translations[lang][key], [lang])

  const tTitle = useCallback(
    (key: TranslationKey): { pre: string; accent?: string } => {
      const [pre, accent] = t(key).split('§')
      return accent ? { pre, accent } : { pre }
    },
    [t],
  )

  const value = useMemo(() => ({ lang, setLang, t, tTitle, site: data[lang] }), [lang, t, tTitle])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}