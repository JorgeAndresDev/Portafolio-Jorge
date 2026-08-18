import type { ReactNode } from 'react'

type TagProps = {
  children: ReactNode
  accent?: string
}

const Tag = ({ children, accent }: TagProps) => (
  <span
    className="inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-wide text-muted transition-colors"
    style={accent ? { borderColor: `${accent}55`, color: accent } : undefined}
  >
    {children}
  </span>
)

export default Tag