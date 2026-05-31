import { useEffect, useRef } from "react"
import type { ReactNode } from "react"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  style?: React.CSSProperties
}

const ScrollReveal = ({ children, className = "", threshold = 0.16, rootMargin = "0px 0px -10% 0px", style }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const current = ref.current
    if (!current || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div ref={ref} style={style} className={`reveal-from-bottom will-change-transform ${className}`}>
      {children}
    </div>
  )
}

export default ScrollReveal
