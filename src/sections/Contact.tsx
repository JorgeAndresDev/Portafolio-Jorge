import { Download, Mail, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import Button from '../components/Button'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/BrandIcons'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../context/LanguageContext'

type ChannelIcon = LucideIcon | ((props: { size?: number; className?: string }) => ReactNode)

const Contact = () => {
  const { site, t, tTitle } = useLanguage()
  const { profile } = site
  const title = tTitle('contact.title')

  const channels: { key: string; label: string; note: string; value: string; href: string; icon: ChannelIcon }[] = [
    {
      key: 'email',
      label: t('contact.email.label'),
      note: t('contact.email.note'),
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      key: 'whatsapp',
      label: t('contact.whatsapp.label'),
      note: t('contact.whatsapp.note'),
      value: profile.phone,
      href: profile.whatsapp,
      icon: WhatsappIcon,
    },
    {
      key: 'linkedin',
      label: t('contact.linkedin.label'),
      note: t('contact.linkedin.note'),
      value: t('contact.linkedin.value'),
      href: profile.linkedin,
      icon: LinkedinIcon,
    },
    {
      key: 'github',
      label: t('contact.github.label'),
      note: t('contact.github.note'),
      value: t('contact.github.value'),
      href: profile.github,
      icon: GithubIcon,
    },
  ]

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(59,130,246,0.08), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="07"
          eyebrow={t('contact.eyebrow')}
          title={
            <>
              {title.pre}
              <span className="text-accent">{title.accent}</span>
            </>
          }
          description={t('contact.description')}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, i) => {
            const Icon = channel.icon
            return (
              <Reveal key={channel.key} delay={i * 0.05} className="h-full">
                <a
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="tech-label">{channel.label}</span>
                    <Icon size={18} className="text-faint transition-colors group-hover:text-accent" />
                  </div>
                  <span className="mt-4 font-display text-lg font-semibold text-fg">{channel.value}</span>
                  <span className="mt-1.5 text-sm text-faint">{channel.note}</span>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-gradient-to-r from-surface to-base-2 p-8 md:flex-row">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <Mail size={15} className="text-accent" aria-hidden="true" />
                {profile.email}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone size={15} className="text-accent" aria-hidden="true" />
                {profile.phone}
              </span>
            </div>
            <Button href={profile.cv} download="Jorge_Gomez_CV.pdf" variant="primary" className="shrink-0">
              <Download size={16} aria-hidden="true" />
              {t('common.downloadCv')}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact