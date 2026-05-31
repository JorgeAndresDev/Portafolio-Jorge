
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import carrusel from "../assets/jlux-img/carrusel.png"
import crudProducts from "../assets/jlux-img/crud-products.png"
import indexImg from "../assets/jlux-img/index.png"
import login from "../assets/jlux-img/login.png"
import panelAdmin from "../assets/jlux-img/Panel-admin.png"
import product from "../assets/jlux-img/product.png"

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
        <section id="projects" className="py-32 px-6 bg-[#030303] border-t border-white/20 relative z-10 overflow-hidden">
            <div className="max-w-[1500px] mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10"
                >
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white tracking-tighter leading-none">
                        MIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800">PROYECTOS</span>.
                    </h2>
                    <p className="text-gray-400 max-w-sm text-lg font-bold uppercase tracking-widest text-right hidden md:block">
                        Plataformas con Arquitectura Limpia y UX Fluida.
                    </p>
                </motion.div>

                <div className="space-y-40">
                    {/* PROYECTO 1: JLUXURIES */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Top Info Bar */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-cyan-500 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between hover:scale-[1.01] transition-transform origin-left">
                                <div className="flex justify-between items-start gap-4">
                                    <h3 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter leading-none">JLUXURIES<br/>STORE</h3>
                                    <span className="px-4 py-2 bg-black text-cyan-400 text-xs font-black uppercase tracking-widest rounded-full border border-cyan-400/30 whitespace-nowrap">
                                        E-COMMERCE
                                    </span>
                                </div>
                                <p className="mt-8 text-black/80 font-bold text-xl md:text-2xl leading-relaxed max-w-2xl">
                                    Plataforma profesional con panel admin, Auth JWT y carrito optimizado.
                                </p>
                            </div>
                            
                            <div className="bg-gray-950 border border-white/20 rounded-[2rem] p-8 md:p-12 flex flex-col justify-center">
                                <h4 className="text-white text-sm font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Características</h4>
                                <ul className="space-y-5">
                                    {["Rutas Protegidas (RBAC)", "API RESTful Rápida", "Gestión de Inventario"].map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-400 text-sm md:text-base font-bold uppercase tracking-widest">
                                            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 mr-4 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/10">
                                    {["React", "FastAPI", "MySQL", "Tailwind"].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-black text-white uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Massive Image Container */}
                        <div className="relative w-full h-[50vh] min-h-[400px] lg:h-[80vh] lg:min-h-[700px] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-black/40 flex items-center justify-center p-4">
                            {jluxImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Vista ${index}`}
                                    className={`absolute inset-0 w-full h-full object-contain p-2 md:p-8 lg:p-12 transition-all duration-[2000ms] ease-out drop-shadow-2xl ${index === jluxIndex ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-95 blur-sm"}`}
                                />
                            ))}
                            {/* Gradient strictly at bottom so it doesn't obscure the center app image */}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none opacity-80" />
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20 bg-black/50 p-4 rounded-full backdrop-blur-md border border-white/10">
                                {jluxImages.map((_, index) => (
                                    <div key={index} className={`h-2.5 rounded-full transition-all duration-300 ${index === jluxIndex ? "bg-cyan-400 w-16" : "bg-white/30 w-4 cursor-pointer hover:bg-white/60"}`} onClick={() => setJluxIndex(index)} />
                                ))}
                            </div>
                            
                            <button
                                onClick={() => setActiveProject('jluxuries')}
                                className="absolute top-8 right-8 z-20 py-4 px-8 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl"
                            >
                                CÓDIGO FUENTE
                            </button>
                        </div>
                    </motion.div>

                    {/* PROYECTO 2: G-CURLY */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Top Info Bar */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-violet-600 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between hover:scale-[1.01] transition-transform origin-right">
                                <div className="flex justify-between items-start gap-4">
                                    <h3 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none">G-CURLY<br/>BRAND</h3>
                                    <span className="px-4 py-2 bg-black text-violet-400 text-xs font-black uppercase tracking-widest rounded-full border border-violet-400/30 whitespace-nowrap">
                                        BRANDING SPA
                                    </span>
                                </div>
                                <p className="mt-8 text-white/90 font-bold text-xl md:text-2xl leading-relaxed max-w-2xl">
                                    E-commerce y sitio web para centro de belleza enfocado en conversión.
                                </p>
                            </div>
                            
                            <div className="bg-gray-950 border border-white/20 rounded-[2rem] p-8 md:p-12 flex flex-col justify-center">
                                <h4 className="text-white text-sm font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Características</h4>
                                <ul className="space-y-5">
                                    {["Dark/Light Mode Activo", "Navegación Sticky", "Mobile First"].map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-400 text-sm md:text-base font-bold uppercase tracking-widest">
                                            <div className="w-2.5 h-2.5 rounded-full bg-violet-500 mr-4 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/10">
                                    {["React 19", "Vite", "Router 7", "Tailwind"].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-black text-white uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Massive Image Container */}
                        <div className="relative w-full h-[50vh] min-h-[400px] lg:h-[80vh] lg:min-h-[700px] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-black/40 flex items-center justify-center p-4 group">
                            {gcurlyImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`G-Curly ${index}`}
                                    className={`absolute inset-0 w-full h-full object-contain p-2 md:p-8 lg:p-12 transition-all duration-[2000ms] ease-out drop-shadow-2xl ${index === gcurlyIndex ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-95 blur-sm"}`}
                                />
                            ))}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none opacity-80" />
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20 bg-black/50 p-4 rounded-full backdrop-blur-md border border-white/10">
                                {gcurlyImages.map((_, index) => (
                                    <div key={index} className={`h-2.5 rounded-full transition-all duration-300 ${index === gcurlyIndex ? "bg-violet-400 w-16" : "bg-white/30 w-4 cursor-pointer hover:bg-white/60"}`} onClick={() => setGcurlyIndex(index)} />
                                ))}
                            </div>

                            <div className="absolute top-8 right-8 z-20 flex flex-col md:flex-row gap-4">
                                <a
                                    href="https://graceful-swan-243221.netlify.app/"
                                    target="_blank"
                                    className="py-4 px-8 bg-violet-600 hover:bg-violet-500 text-white font-black uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl text-center"
                                >
                                    SITIO WEB
                                </a>
                                <button
                                    onClick={() => setActiveProject('gcurly')}
                                    className="py-4 px-8 bg-black/50 backdrop-blur-xl border border-white/20 hover:border-white text-white font-black uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl"
                                >
                                    CÓDIGO
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* PROYECTO 3: CobraGO */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-950 border-[3px] border-dashed border-white/20 rounded-[2rem] p-12 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10 hover:border-orange-500 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)] pointer-events-none"></div>
                        <div className="flex-1 relative z-10">
                            <div className="flex items-center gap-6 mb-8">
                                <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter group-hover:text-orange-500 transition-colors leading-none">COBRAGO</h3>
                                <div className="flex h-5 w-5 relative shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-5 w-5 bg-orange-500"></span>
                                </div>
                            </div>
                            <p className="text-xl md:text-2xl font-bold uppercase tracking-widest text-gray-400 max-w-2xl leading-relaxed group-hover:text-white transition-colors">
                                App móvil para el control integral de finanzas y cobros. Sincronización en tiempo real con UI inmersiva.
                            </p>
                        </div>
                        <div className="shrink-0 relative z-10 hidden md:block">
                            <div className="w-48 h-48 rounded-[2rem] border-2 border-orange-500/30 flex items-center justify-center text-orange-500 font-black text-2xl md:text-4xl uppercase tracking-tighter bg-orange-500/10 group-hover:scale-105 group-hover:-rotate-6 transition-all text-center leading-[0.8]">
                                PRÓXI<br/>MAMENTE
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-40 border-t border-white/20 pt-16 flex justify-center">
                    <a
                        href="https://github.com/JorgeAndresDev/"
                        target="_blank"
                        className="text-4xl md:text-6xl font-black uppercase text-white hover:text-cyan-400 transition-colors tracking-tighter flex items-center gap-6 group"
                    >
                        VER TODOS LOS CÓDIGOS
                        <span className="bg-white text-black w-20 h-20 flex items-center justify-center rounded-full group-hover:bg-cyan-400 group-hover:scale-110 transition-all text-3xl">↗</span>
                    </a>
                </div>
            </div>

            {/* Modal */}
            {activeProject && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4"
                    onClick={() => setActiveProject(null)}
                >
                    <div
                        className="bg-black border-2 border-white/20 p-12 w-full max-w-2xl shadow-[0_0_100px_rgba(0,0,0,1)] relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setActiveProject(null)}
                            className="absolute top-8 right-8 text-3xl font-black text-gray-500 hover:text-white hover:rotate-90 transition-all"
                        >
                            ✕
                        </button>

                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-12 text-center md:text-left">
                            CÓDIGO FUENTE DE<br/>
                            <span className="text-gray-500">{activeProject === 'jluxuries' ? 'JLUXURIES' : 'G-CURLY'}</span>
                        </h3>

                        <div className="space-y-6">
                            <a
                                href={activeProject === 'jluxuries' ? "https://github.com/JorgeAndresDev/JLUXURIES-API.git" : "#"}
                                target="_blank"
                                className="block w-full py-8 px-10 border-4 border-white/10 hover:border-cyan-400 bg-[#050505] transition-all group hover:scale-[1.02]"
                            >
                                <div className="flex justify-between items-center text-white font-black text-xl md:text-2xl uppercase tracking-widest">
                                    <span>Backend API</span>
                                    <span className="text-cyan-500 group-hover:translate-x-4 transition-transform text-4xl leading-none">→</span>
                                </div>
                            </a>

                            <a
                                href={activeProject === 'jluxuries' ? "https://github.com/JorgeAndresDev/JLUXURIES-Front" : "#"}
                                target="_blank"
                                className="block w-full py-8 px-10 border-4 border-white/10 hover:border-violet-400 bg-[#050505] transition-all group hover:scale-[1.02]"
                            >
                                <div className="flex justify-between items-center text-white font-black text-xl md:text-2xl uppercase tracking-widest">
                                    <span>Frontend WEB</span>
                                    <span className="text-violet-500 group-hover:translate-x-4 transition-transform text-4xl leading-none">→</span>
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
