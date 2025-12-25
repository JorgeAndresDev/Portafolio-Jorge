
import { useState, useEffect } from "react"
import carrusel from "../assets/jlux-img/carrusel.png"
import crudProducts from "../assets/jlux-img/crud-products.png"
import indexImg from "../assets/jlux-img/index.png"
import login from "../assets/jlux-img/login.png"
import panelAdmin from "../assets/jlux-img/Panel-admin.png"
import product from "../assets/jlux-img/product.png"

// G-Curly Imports
import curlyDark from "../assets/g-curly-img/dark.png"
import curlyIndex from "../assets/g-curly-img/index.png"
import curlyRoon from "../assets/g-curly-img/roon.png"
import curlyRutine from "../assets/g-curly-img/rutine.png"
import curlyStore from "../assets/g-curly-img/store.png"

const Projects = () => {
    const [activeProject, setActiveProject] = useState<string | null>(null)
    const [jluxIndex, setJluxIndex] = useState(0)
    const [gcurlyIndex, setGcurlyIndex] = useState(0)

    const jluxImages = [indexImg, login, product, panelAdmin, crudProducts, carrusel]
    const gcurlyImages = [curlyIndex, curlyDark, curlyStore, curlyRutine, curlyRoon]

    useEffect(() => {
        const interval = setInterval(() => {
            setJluxIndex((prev) => (prev + 1) % jluxImages.length)
            setGcurlyIndex((prev) => (prev + 1) % gcurlyImages.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [jluxImages.length, gcurlyImages.length])

    return (
        <section id="projects" className="py-24 px-6 bg-black/20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Proyectos <span className="text-blue-500">Destacados</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Aplicaciones completas donde aplico conceptos de arquitectura, seguridad y experiencia de usuario.
                    </p>
                </div>

                <div className="space-y-24">
                    {/* PROYECTO 1: JLUXURIES - BENTO GRID LAYOUT */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* AREA 1: Header & Description (Span 2) */}
                        <div className="md:col-span-2 bg-gray-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-colors shadow-lg">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">JLUXURIES</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="text-sm text-gray-400 font-mono">v1.0.0 Live</span>
                                    </div>
                                </div>
                                <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20 tracking-wider">
                                    E-COMMERCE
                                </span>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Plataforma profesional para la venta de lujos y accesorios para motocicletas.
                                Diseñada con una arquitectura escalable, integrando seguridad robusta JWT y un panel de administración completo.
                            </p>
                        </div>

                        {/* AREA 2: Tech Stack (Span 1) */}
                        <div className="bg-gray-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-colors shadow-lg flex flex-col justify-center">
                            <h4 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {["React", "FastAPI", "MySQL", "Tailwind", "Python", "Vite"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-blue-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* AREA 3: Carousel (Span 2, Row 2) */}
                        <div className="md:col-span-2 md:row-span-2 relative min-h-[400px] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />

                            {jluxImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Preview ${index}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${index === jluxIndex
                                        ? "opacity-100 scale-105"
                                        : "opacity-0 scale-100"
                                        }`}
                                />
                            ))}

                            {/* Custom Indicators */}
                            <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                                {jluxImages.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-1.5 rounded-full transition-all duration-300 backdrop-blur-md ${index === jluxIndex ? "bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-white/30 w-2"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* AREA 4: Features List (Span 1) */}
                        <div className="bg-gray-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-colors shadow-lg">
                            <h4 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">Features</h4>
                            <ul className="space-y-3">
                                {[
                                    "Autenticación JWT",
                                    "Rutas Protegidas (RBAC)",
                                    "Carrito de Compras",
                                    "Panel Administrativo",
                                    "API RESTful"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-300 text-sm">
                                        <svg className="w-5 h-5 text-blue-500 mr-3 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* AREA 5: Actions (Span 1) */}
                        <div className="bg-gradient-to-br from-blue-900/40 to-gray-900 border border-blue-500/20 rounded-3xl p-8 flex flex-col justify-center items-center gap-4 text-center">
                            <p className="text-blue-200 text-sm mb-2">Explora el código</p>
                            <button
                                onClick={() => setActiveProject('jluxuries')}
                                className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-2 group"
                            >
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                Repositorio
                            </button>
                        </div>
                    </div>

                    {/* PROYECTO 2: G-CURLY - BENTO GRID LAYOUT */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* AREA 1: Header & Description (Span 2) */}
                        <div className="md:col-span-2 bg-gray-900 border border-white/10 rounded-3xl p-8 hover:border-green-500/30 transition-colors shadow-lg">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">G-Curly</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="text-sm text-gray-400 font-mono">v1.0.0 Live</span>
                                    </div>
                                </div>
                                <span className="px-4 py-1.5 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20 tracking-wider">
                                    BRANDING & SPA
                                </span>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Marca dedicada a celebrar la belleza natural del cabello rizado, afro y crespo.
                                Modelo de negocio dual con tienda especializada y salón profesional.
                            </p>
                        </div>

                        {/* AREA 2: Tech Stack (Span 1) */}
                        <div className="bg-gray-900 border border-white/10 rounded-3xl p-8 hover:border-green-500/30 transition-colors shadow-lg flex flex-col justify-center">
                            <h4 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {["React 19", "Vite", "Tailwind 3.4", "Router DOM 7", "ESLint"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-green-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* AREA 3: Carousel (Span 2, Row 2) */}
                        <div className="md:col-span-2 md:row-span-2 relative min-h-[400px] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />

                            {/*  G-Curly Carousel */}
                            {gcurlyImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`G-Curly Preview ${index}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${index === gcurlyIndex
                                        ? "opacity-100 scale-105"
                                        : "opacity-0 scale-100"
                                        }`}
                                />
                            ))}

                            {/* Custom Indicators */}
                            <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                                {gcurlyImages.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-1.5 rounded-full transition-all duration-300 backdrop-blur-md ${index === gcurlyIndex ? "bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-white/30 w-2"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* AREA 4: Features List (Span 1) */}
                        <div className="bg-gray-900 border border-white/10 rounded-3xl p-8 hover:border-green-500/30 transition-colors shadow-lg">
                            <h4 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">Features</h4>
                            <ul className="space-y-3">
                                {[
                                    "Dark/Light Mode",
                                    "Diseño Mobile First",
                                    "Integración WhatsApp",
                                    "Navegación Sticky",
                                    "Gestión Rutas Activas"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-300 text-sm">
                                        <svg className="w-5 h-5 text-green-500 mr-3 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* AREA 5: Actions (Span 1) */}
                        <div className="bg-gradient-to-br from-green-900/40 to-gray-900 border border-green-500/20 rounded-3xl p-8 flex flex-col justify-center items-center gap-4 text-center">
                            <p className="text-green-200 text-sm mb-2">Explora la identidad de la marca</p>
                            <a
                                href="https://graceful-swan-243221.netlify.app/"
                                target="_blank"
                                className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition shadow-lg shadow-green-600/20 transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Ver Sitio
                            </a>
                            <a
                                href="https://github.com/JorgeAndresDev/G-curly.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-2 group"
                            >
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                Repositorio
                            </a>
                        </div>
                    </div>
                    {/* View All Projects Button */}
                    <div className="flex justify-center mt-16">
                        <a
                            href="https://github.com/JorgeAndresDev/"
                            target="_blank"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gray-900 border border-white/10 hover:border-blue-500/50 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative font-bold text-gray-300 group-hover:text-white">Ver todos mis proyectos</span>
                            <svg className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform relative" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Repository Modal */}
            {activeProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in"
                    onClick={() => setActiveProject(null)}
                >
                    <div
                        className="bg-gray-900 border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeProject === 'jluxuries'
                            ? "from-blue-500 via-purple-500 to-pink-500"
                            : "from-green-500 via-teal-500 to-emerald-500"
                            }`} />
                        <button
                            onClick={() => setActiveProject(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition p-2 hover:bg-white/10 rounded-full"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        <h3 className="text-2xl font-bold text-white mb-2 text-center">
                            {activeProject === 'jluxuries' ? 'JLUXURIES Repos' : 'G-Curly Repos'}
                        </h3>
                        <p className="text-gray-400 text-center mb-8 text-sm">
                            Selecciona la parte del proyecto que deseas explorar.
                        </p>

                        <div className="space-y-3">
                            <a
                                href={activeProject === 'jluxuries' ? "https://github.com/JorgeAndresDev/JLUXURIES-API.git" : "#"}
                                target="_blank"
                                className={`block w-full py-4 px-6 bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-2xl transition-all group hover:shadow-lg ${activeProject === 'jluxuries'
                                    ? "hover:border-blue-500/50 hover:shadow-blue-900/20"
                                    : "hover:border-green-500/50 hover:shadow-green-900/20"
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2.5 rounded-xl ${activeProject === 'jluxuries' ? "bg-blue-500/10 text-blue-400" : "bg-green-500/10 text-green-400"
                                            }`}>
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                                        </div>
                                        <div className="text-left">
                                            <span className="block text-white font-bold">Backend (API)</span>
                                            <span className="text-xs text-gray-500 font-mono">
                                                {activeProject === 'jluxuries' ? "FastAPI • Python • MySQL" : "Python • Django (TBD)"}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-gray-600 group-hover:text-white transition transform group-hover:translate-x-1">→</span>
                                </div>
                            </a>

                            <a
                                href={activeProject === 'jluxuries' ? "https://github.com/JorgeAndresDev/JLUXURIES-Front" : "#"}
                                target="_blank"
                                className={`block w-full py-4 px-6 bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-2xl transition-all group hover:shadow-lg ${activeProject === 'jluxuries'
                                    ? "hover:border-purple-500/50 hover:shadow-purple-900/20"
                                    : "hover:border-teal-500/50 hover:shadow-teal-900/20"
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2.5 rounded-xl ${activeProject === 'jluxuries' ? "bg-purple-500/10 text-purple-400" : "bg-teal-500/10 text-teal-400"
                                            }`}>
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                                        </div>
                                        <div className="text-left">
                                            <span className="block text-white font-bold">Frontend (Client)</span>
                                            <span className="text-xs text-gray-500 font-mono">
                                                {activeProject === 'jluxuries' ? "React • Tailwind • Vite" : "React 19 • Vite • Tailwind 3.4"}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-gray-600 group-hover:text-white transition transform group-hover:translate-x-1">→</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects
