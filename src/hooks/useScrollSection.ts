import { useEffect, useState } from "react"
import type { RefObject } from "react"

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

const useScrollSection = <T extends HTMLElement>(ref: RefObject<T | null>) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const start = window.innerHeight * 0.8
      const finish = -rect.height * 0.25
      const current = clamp((start - rect.top) / (start - finish), 0, 1)
      setProgress(current)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [ref])

  return progress
}

export default useScrollSection
