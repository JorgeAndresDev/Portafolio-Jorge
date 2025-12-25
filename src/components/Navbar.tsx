import { useState, useEffect } from "react"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-950/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold tracking-tighter text-white">
                    J<span className="text-blue-500">.</span>Dev
                </a>

                <ul className="flex gap-8">
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white hover:text-blue-400 transition text-sm font-medium">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-gray-300 hover:text-white hover:text-blue-400 transition text-sm font-medium">
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-gray-300 hover:text-white hover:text-blue-400 transition text-sm font-medium">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
