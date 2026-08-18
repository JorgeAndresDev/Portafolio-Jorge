import type { ReactNode } from 'react'
import Reveal from './Reveal'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: ReactNode
  description?: string
}

const SectionHeading = ({ index, eyebrow, title, description }: SectionHeadingProps) => (
  <Reveal className="mb-14 md:mb-20">
    <div className="flex items-center gap-4 mb-5">
      <span className="section-index">{index}</span>
      <span className="h-px w-12 bg-accent/50" aria-hidden="true" />
      <span className="tech-label">{eyebrow}</span>
    </div>
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl uppercase">
      {title}
    </h2>
    {description && <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">{description}</p>}
  </Reveal>
)

export default SectionHeading