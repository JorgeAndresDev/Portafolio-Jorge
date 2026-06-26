import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import carrusel from "../assets/jlux-img/carrusel.png"
import crudProducts from "../assets/jlux-img/crud-products.png"
import indexImg from "../assets/jlux-img/index.png"
import login from "../assets/jlux-img/login.png"
import panelAdmin from "../assets/jlux-img/Panel-admin.png"
import product from "../assets/jlux-img/product.png"
import jluxLogo from "../assets/jlux-img/logo-jluxuries.png"

import gcurly1 from "../assets/g-curly-img/1.png"
import gcurly2 from "../assets/g-curly-img/2.png"
import gcurly3 from "../assets/g-curly-img/3.png"
import gcurly4 from "../assets/g-curly-img/4.png"
import gcurly5 from "../assets/g-curly-img/5.png"
import gcurly6 from "../assets/g-curly-img/6.png"
import gcurly7 from "../assets/g-curly-img/7.png"
import gcurly8 from "../assets/g-curly-img/8.png"
import gcurly9 from "../assets/g-curly-img/9.png"

// CobraGO Images
import cobraLogo from "../assets/cobrago-img/logo-cobrago.png"
import cobra1 from "../assets/cobrago-img/WhatsApp Image 2026-06-09 at 9.52.08 PM.jpeg"
import cobra2 from "../assets/cobrago-img/WhatsApp Image 2026-06-09 at 9.52.08 PM (1).jpeg"
import cobra3 from "../assets/cobrago-img/WhatsApp Image 2026-06-09 at 9.52.08 PM (2).jpeg"
import cobra4 from "../assets/cobrago-img/WhatsApp Image 2026-06-09 at 9.52.09 PM.jpeg"
import cobra5 from "../assets/cobrago-img/WhatsApp Image 2026-06-09 at 9.52.09 PM (1).jpeg"
import cobra6 from "../assets/cobrago-img/WhatsApp Image 2026-06-09 at 9.52.10 PM.jpeg"
import cobra7 from "../assets/cobrago-img/WhatsApp Image 2026-06-09 at 9.52.10 PM (1).jpeg"
import cobra8 from "../assets/cobrago-img/WhatsApp Image 2026-06-09 at 9.52.10 PM (2).jpeg"
import cobra9 from "../assets/cobrago-img/WhatsApp Image 2026-06-09 at 9.52.10 PM (3).jpeg"
import cobra10 from "../assets/cobrago-img/WhatsApp Image 2026-06-09 at 9.52.10 PM (4).jpeg"
import cobra11 from "../assets/cobrago-img/WhatsApp Image 2026-06-09 at 9.52.11 PM.jpeg"
import cobra12 from "../assets/cobrago-img/WhatsApp Image 2026-06-09 at 9.52.11 PM (1).jpeg"

const Projects = () => {
    const [activeProject, setActiveProject] = useState<string | null>(null)
    const [jluxIndex, setJluxIndex] = useState(0)
    const [gcurlyIndex, setGcurlyIndex] = useState(0)
    const [cobraIndex, setCobraIndex] = useState(0)

    const jluxImages = useMemo(() => [indexImg, login, product, panelAdmin, crudProducts, carrusel], [])
    const gcurlyImages = useMemo(() => [gcurly1, gcurly2, gcurly3, gcurly4, gcurly5, gcurly6, gcurly7, gcurly8, gcurly9], [])
    const cobraImages = useMemo(() => [cobra1, cobra2, cobra3, cobra4, cobra5, cobra6, cobra7, cobra8, cobra9, cobra10, cobra11, cobra12], [])

    useEffect(() => {
        const interval = setInterval(() => {
            setJluxIndex((prev) => (prev + 1) % jluxImages.length)
            setGcurlyIndex((prev) => (prev + 1) % gcurlyImages.length)
            setCobraIndex((prev) => (prev + 1) % cobraImages.length)
        }, 4000) // Slightly slower for better UX
        return () => clearInterval(interval)
    }, [jluxImages.length, gcurlyImages.length, cobraImages.length])

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
                            <div className="lg:col-span-2 bg-cyan-500 border-[3px] border-black p-8 md:p-12 flex flex-col justify-between hover:scale-[1.01] transition-transform origin-left relative overflow-hidden group/card shadow-[-10px_10px_0px_0px_rgba(34,211,238,0.2)]">
                                <img src={jluxLogo} alt="Logo JLuxuries" className="absolute -right-10 -bottom-10 w-64 opacity-10 group-hover/card:scale-110 transition-transform duration-1000 pointer-events-none will-change-transform" />
                                <div className="flex justify-between items-start gap-4 relative z-10">
                                    <h3 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-4">JLUXURIES<br/>STORE</h3>
                                    <span className="px-4 py-2 bg-black text-cyan-400 text-xs font-black uppercase tracking-widest border border-cyan-400/30 whitespace-nowrap">
                                        E-COMMERCE
                                    </span>
                                </div>
                                <p className="mt-8 text-black/80 font-black text-xl md:text-2xl leading-tight max-w-2xl relative z-10 uppercase italic">
                                    Plataforma profesional con panel admin, Auth JWT y carrito optimizado.
                                </p>
                            </div>
                            
                            <div className="bg-gray-950 border-[3px] border-white/10 p-8 md:p-12 flex flex-col justify-center transition-colors hover:border-cyan-500 shadow-[-10px_10px_0px_0px_rgba(255,255,255,0.05)]">
                                <h4 className="text-white text-sm font-black uppercase tracking-[0.3em] mb-6 border-b-2 border-white/10 pb-4">Características</h4>
                                <ul className="space-y-5">
                                    {["Rutas Protegidas (RBAC)", "API RESTful Rápida", "Gestión de Inventario"].map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-400 text-sm md:text-base font-black uppercase tracking-widest">
                                            <div className="w-3 h-3 bg-cyan-500 mr-4 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t-2 border-white/10">
                                    {["React", "FastAPI", "MySQL", "Tailwind"].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-white/5 border-2 border-white/10 text-xs font-black text-white uppercase tracking-widest hover:border-cyan-500 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Massive Image Container – JLUXURIES: cyan palette */}
                        <div className="relative w-full h-[45vh] min-h-[320px] md:h-[60vh] lg:h-[80vh] lg:min-h-[700px] overflow-hidden border-[3px] border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.08)] bg-black flex items-center justify-center p-4 group/img">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.05)_0%,transparent_60%)] pointer-events-none" />
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={jluxIndex}
                                    src={jluxImages[jluxIndex]}
                                    alt={`Vista ${jluxIndex}`}
                                    loading="lazy"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    className="absolute inset-0 w-full h-full object-contain p-2 md:p-8 lg:p-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] will-change-transform"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none opacity-90" />
                            <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-3 z-20 bg-black/80 px-5 py-4 border-2 border-cyan-500/30 backdrop-blur-xl transition-transform group-hover/img:scale-110">
                                {jluxImages.map((_, index) => (
                                    <div key={index} className={`h-2.5 transition-all duration-500 ${index === jluxIndex ? "bg-cyan-400 w-10" : "bg-white/20 w-2.5 cursor-pointer hover:bg-cyan-400/50"}`} onClick={() => setJluxIndex(index)} />
                                ))}
                            </div>
                            
                            <button
                                onClick={() => setActiveProject('jluxuries')}
                                className="absolute top-4 right-4 md:top-8 md:right-8 z-20 py-3 px-5 md:py-5 md:px-10 text-xs md:text-sm bg-cyan-500 hover:bg-white text-black font-black uppercase tracking-widest transition-all hover:-translate-y-2 hover:translate-x-2 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black active:translate-x-0 active:translate-y-0 active:shadow-none"
                            >
                                CÓDIGO
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
                            <div className="lg:col-span-2 bg-violet-600 border-[3px] border-white/20 p-8 md:p-12 flex flex-col justify-between hover:scale-[1.01] transition-transform origin-right shadow-[-10px_10px_0px_0px_rgba(139,92,246,0.2)]">
                                <div className="flex justify-between items-start gap-4">
                                    <h3 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-4">G-CURLY<br/>BRAND</h3>
                                    <span className="px-4 py-2 bg-black text-violet-400 text-xs font-black uppercase tracking-widest border border-violet-400/30 whitespace-nowrap">
                                        BRANDING SPA
                                    </span>
                                </div>
                                <p className="mt-8 text-white font-black text-xl md:text-2xl leading-tight max-w-2xl uppercase italic">
                                    E-commerce y sitio web para centro de belleza enfocado en conversión.
                                </p>
                            </div>
                            
                            <div className="bg-gray-950 border-[3px] border-white/10 p-8 md:p-12 flex flex-col justify-center transition-colors hover:border-violet-500 shadow-[-10px_10px_0px_0px_rgba(255,255,255,0.05)]">
                                <h4 className="text-white text-sm font-black uppercase tracking-[0.3em] mb-6 border-b-2 border-white/10 pb-4">Características</h4>
                                <ul className="space-y-5">
                                    {["Dark/Light Mode Activo", "Navegación Sticky", "Mobile First"].map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-400 text-sm md:text-base font-black uppercase tracking-widest">
                                            <div className="w-3 h-3 bg-violet-500 mr-4 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t-2 border-white/10">
                                    {["React 19", "Vite", "Router 7", "Tailwind"].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-white/5 border-2 border-white/10 text-xs font-black text-white uppercase tracking-widest hover:border-violet-500 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Massive Image Container – G-CURLY: violet palette */}
                        <div className="relative w-full h-[45vh] min-h-[320px] md:h-[60vh] lg:h-[80vh] lg:min-h-[700px] overflow-hidden border-[3px] border-violet-500/40 shadow-[0_0_40px_rgba(139,92,246,0.08)] bg-black flex items-center justify-center p-4 group/img">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.05)_0%,transparent_60%)] pointer-events-none" />
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={gcurlyIndex}
                                    src={gcurlyImages[gcurlyIndex]}
                                    alt={`G-Curly ${gcurlyIndex}`}
                                    loading="lazy"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    className="absolute inset-0 w-full h-full object-contain p-2 md:p-8 lg:p-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] will-change-transform"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none opacity-90" />
                            <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-3 z-20 bg-black/80 px-5 py-4 border-2 border-violet-500/30 backdrop-blur-xl transition-transform group-hover/img:scale-110">
                                {gcurlyImages.map((_, index) => (
                                    <div key={index} className={`h-2.5 transition-all duration-500 ${index === gcurlyIndex ? "bg-violet-400 w-10" : "bg-white/20 w-2.5 cursor-pointer hover:bg-violet-400/50"}`} onClick={() => setGcurlyIndex(index)} />
                                ))}
                            </div>

                            <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 flex flex-row gap-2 md:gap-4">
                                <a
                                    href="https://graceful-swan-243221.netlify.app/"
                                    target="_blank"
                                    className="py-3 px-4 md:py-5 md:px-10 text-xs md:text-sm bg-violet-600 hover:bg-white hover:text-black font-black uppercase tracking-widest border-4 border-black transition-all hover:-translate-y-2 hover:translate-x-2 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none text-center"
                                >
                                    WEB
                                </a>
                                <button
                                    onClick={() => setActiveProject('gcurly')}
                                    className="py-3 px-4 md:py-5 md:px-10 text-xs md:text-sm bg-black/70 backdrop-blur-xl border-4 border-violet-500/40 hover:border-violet-400 text-white font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
                                >
                                    CÓDIGO
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* PROYECTO 3: CobraGO (REAL) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Top Info Bar */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-orange-500 border-[3px] border-black p-8 md:p-12 flex flex-col justify-between hover:scale-[1.01] transition-transform origin-left relative overflow-hidden group/card shadow-[-10px_10px_0px_0px_rgba(249,115,22,0.2)]">
                                <img src={cobraLogo} alt="Logo CobraGO" className="absolute -right-12 -bottom-10 w-72 opacity-20 group-hover/card:scale-110 transition-transform duration-1000 pointer-events-none will-change-transform" />
                                <div className="flex justify-between items-start gap-4 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-4">COBRAGO</h3>
                                        <div className="flex h-5 w-5 relative shrink-0">
                                            <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-40"></span>
                                            <span className="relative inline-flex h-5 w-5 bg-black"></span>
                                        </div>
                                    </div>
                                    <span className="px-4 py-2 bg-black text-orange-400 text-xs font-black uppercase tracking-widest border border-orange-400/30 whitespace-nowrap">
                                        FINTECH APP
                                    </span>
                                </div>
                                <p className="mt-8 text-black/80 font-black text-xl md:text-2xl leading-tight max-w-2xl relative z-10 uppercase italic">
                                    App móvil integral para el control de cobros, préstamos y finanzas personales.
                                </p>
                            </div>
                            
                            <div className="bg-gray-950 border-[3px] border-white/10 p-8 md:p-12 flex flex-col justify-center transition-colors hover:border-orange-500 shadow-[-10px_10px_0px_0px_rgba(255,255,255,0.05)]">
                                <h4 className="text-white text-sm font-black uppercase tracking-[0.3em] mb-6 border-b-2 border-white/10 pb-4">Características</h4>
                                <ul className="space-y-5">
                                    {["Sincronización Tiempo Real", "Gestión de Cartera Local", "Dashboard Estadístico"].map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-400 text-sm md:text-base font-black uppercase tracking-widest">
                                            <div className="w-3 h-3 bg-orange-500 mr-4 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t-2 border-white/10">
                                    {["React Native", "Expo", "FastAPI", "PostgreSQL"].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-white/5 border-2 border-white/10 text-xs font-black text-white uppercase tracking-widest hover:border-orange-500 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Massive Image Container – CobraGO: orange palette */}
                        <div className="relative w-full h-[45vh] min-h-[320px] md:h-[60vh] lg:h-[80vh] lg:min-h-[700px] overflow-hidden border-[3px] border-orange-500/40 shadow-[0_0_40px_rgba(249,115,22,0.08)] bg-black flex items-center justify-center p-4 group/img">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.05)_0%,transparent_60%)] pointer-events-none" />
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={cobraIndex}
                                    src={cobraImages[cobraIndex]}
                                    alt={`CobraGO ${cobraIndex}`}
                                    loading="lazy"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    className="absolute inset-0 w-full h-full object-contain p-2 md:p-8 lg:p-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] will-change-transform"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none opacity-90" />
                            <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-3 z-20 bg-black/80 px-5 py-4 border-2 border-orange-500/30 backdrop-blur-xl transition-transform group-hover/img:scale-110">
                                {cobraImages.map((_, index) => (
                                    <div key={index} className={`h-2.5 transition-all duration-500 ${index === cobraIndex ? "bg-orange-400 w-10" : "bg-white/20 w-2.5 cursor-pointer hover:bg-orange-400/50"}`} onClick={() => setCobraIndex(index)} />
                                ))}
                            </div>

                            <button
                                onClick={() => setActiveProject('cobrago')}
                                className="absolute top-4 right-4 md:top-8 md:right-8 z-20 py-3 px-5 md:py-5 md:px-10 text-xs md:text-sm bg-orange-500 hover:bg-white text-black font-black uppercase tracking-widest border-4 border-black transition-all hover:-translate-y-2 hover:translate-x-2 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
                            >
                                CÓDIGO
                            </button>
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
                            <span className={`transition-colors duration-500 ${activeProject === 'jluxuries' ? 'text-cyan-400' : activeProject === 'gcurly' ? 'text-violet-400' : 'text-orange-400'}`}>
                                {activeProject.toUpperCase()}
                            </span>
                        </h3>

                        <div className="space-y-6">
                            <a
                                href={
                                    activeProject === 'jluxuries' ? "https://github.com/JorgeAndresDev/JLUXURIES-API.git" : 
                                    activeProject === 'cobrago' ? "https://github.com/JorgeAndresDev/API-cobrago.git" : "#"
                                }
                                target="_blank"
                                className={`block w-full py-8 px-10 border-4 border-white/10 bg-[#050505] transition-all group hover:scale-[1.02] ${
                                    activeProject === 'jluxuries' ? 'hover:border-cyan-400' : 
                                    activeProject === 'gcurly' ? 'hover:border-violet-400' : 'hover:border-orange-400'
                                }`}
                            >
                                <div className="flex justify-between items-center text-white font-black text-xl md:text-2xl uppercase tracking-widest">
                                    <span>Backend / API</span>
                                    <span className={`${
                                        activeProject === 'jluxuries' ? 'text-cyan-500' : 
                                        activeProject === 'gcurly' ? 'text-violet-500' : 'text-orange-500'
                                    } group-hover:translate-x-4 transition-transform text-4xl leading-none`}>→</span>
                                </div>
                            </a>

                            <a
                                href={
                                    activeProject === 'jluxuries' ? "https://github.com/JorgeAndresDev/JLUXURIES-Front" : 
                                    activeProject === 'cobrago' ? "https://github.com/JorgeAndresDev/cobrago-mobile.git" : 
                                    activeProject === 'gcurly' ? "https://github.com/JorgeAndresDev/G-CURLY.git" : "#"
                                }
                                target="_blank"
                                className={`block w-full py-8 px-10 border-4 border-white/10 bg-[#050505] transition-all group hover:scale-[1.02] ${
                                    activeProject === 'jluxuries' ? 'hover:border-cyan-400' : 
                                    activeProject === 'gcurly' ? 'hover:border-violet-400' : 'hover:border-orange-400'
                                }`}
                            >
                                <div className="flex justify-between items-center text-white font-black text-xl md:text-2xl uppercase tracking-widest">
                                    <span>Frontend / APP</span>
                                    <span className={`${
                                        activeProject === 'jluxuries' ? 'text-cyan-500' : 
                                        activeProject === 'gcurly' ? 'text-violet-500' : 'text-orange-500'
                                    } group-hover:translate-x-4 transition-transform text-4xl leading-none`}>→</span>
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
