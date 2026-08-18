import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'outline' | 'ghost'
  onClick?: () => void
  className?: string
  download?: boolean | string
  target?: string
  rel?: string
  ariaLabel?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200'

const variants = {
  primary: 'bg-accent text-white hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]',
  outline: 'border border-line text-fg hover:border-accent/60 hover:text-accent',
  ghost: 'text-muted hover:text-fg',
}

const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  onClick,
  className = '',
  download,
  target,
  rel,
  ariaLabel,
}: ButtonProps) => {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={classes}
      onClick={onClick}
      download={download}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

export default Button