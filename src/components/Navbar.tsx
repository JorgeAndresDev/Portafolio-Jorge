import { useEffect, useState } from "react"

const navItems = [
  { label: "Acerca", href: "#about" },
  { label: "Core", href: "#skills" },
  { label: "Trabajos", href: "#projects" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-auto ${scrolled ? "bg-black/90 backdrop-blur-2xl border-b border-white/20 py-4 shadow-2xl" : "bg-transparent py-8"}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-6">
        <a href="#home" className="text-2xl font-black uppercase tracking-tighter text-white hover:text-cyan-400 transition-colors">
          Jorge<span className="text-cyan-500">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-xs font-bold uppercase tracking-widest text-gray-300 transition hover:text-cyan-400">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex items-center justify-center bg-white px-6 py-2.5 text-xs font-black uppercase tracking-widest text-black transition-transform hover:scale-105 active:scale-95 border-2 border-transparent hover:border-cyan-400 hover:bg-black hover:text-cyan-400 rounded-full">
          <span>HABLEMOS</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
