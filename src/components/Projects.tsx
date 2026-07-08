import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

// JLuxuries Images (No mode switch)
import carrusel from "../assets/jlux-img/carrusel.png"
import crudProducts from "../assets/jlux-img/crud-products.png"
import indexImg from "../assets/jlux-img/index.png"
import login from "../assets/jlux-img/login.png"
import panelAdmin from "../assets/jlux-img/Panel-admin.png"
import product from "../assets/jlux-img/product.png"
import jluxLogo from "../assets/jlux-img/logo-jluxuries.png"

// ElectroPower Assets (No mode switch)
import ep1 from "../assets/electropow-img/1.png"
import ep2 from "../assets/electropow-img/2.png"
import ep3 from "../assets/electropow-img/3.png"
import ep4 from "../assets/electropow-img/4.png"
import ep5 from "../assets/electropow-img/5.png"
import ep6 from "../assets/electropow-img/6.png"
import epLogo from "../assets/electropow-img/logo.png"

// G-Curly Assets (Mode switch)
import gcurlyLogo from "../assets/g-curly-img/logo-g-curly.png"
const gcurlyClaroFiles = import.meta.glob('../assets/g-curly-img/claro/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' })
const gcurlyClaroImages = Object.values(gcurlyClaroFiles) as string[]
const gcurlyOscuroFiles = import.meta.glob('../assets/g-curly-img/oscuro/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' })
const gcurlyOscuroImages = Object.values(gcurlyOscuroFiles) as string[]

// CobraGO Assets (Mode switch)
import cobraLogo from "../assets/cobrago-img/logo-cobrago.png"
const cobragoClaroFiles = import.meta.glob('../assets/cobrago-img/Claro/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' })
const cobragoClaroImages = Object.values(cobragoClaroFiles) as string[]
const cobragoOscuroFiles = import.meta.glob('../assets/cobrago-img/oscuro/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' })
const cobragoOscuroImages = Object.values(cobragoOscuroFiles) as string[]

// LogiSys Assets (Mode switch) - NEW!
import logisysLogo from "../assets/LogiSys-img/logo.png"
const logisysClaroFiles = import.meta.glob('../assets/LogiSys-img/claro/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' })
const logisysClaroImages = Object.values(logisysClaroFiles) as string[]
const logisysOscuroFiles = import.meta.glob('../assets/LogiSys-img/oscuro/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' })
const logisysOscuroImages = Object.values(logisysOscuroFiles) as string[]

type Category = 'all' | 'web' | 'mobile' | 'landing';
type ThemeMode = 'claro' | 'oscuro';

const ProjectThemeToggle = ({ mode, setMode }: { mode: ThemeMode, setMode: (m: ThemeMode) => void }) => (
    <div className="absolute top-4 left-4 md:top-8 md:left-8 z-30 flex bg-black/80 backdrop-blur-md border-2 border-white/20 p-1 shadow-2xl transition-all">
        <button 
            onClick={(e) => { e.stopPropagation(); setMode('claro'); }}
            className={`px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all ${mode === 'claro' ? 'bg-white text-black shadow-[-2px_2px_0_0_#1a80ff]' : 'text-gray-400 hover:text-white'}`}
        >
            ☀️ Claro
        </button>
        <button 
            onClick={(e) => { e.stopPropagation(); setMode('oscuro'); }}
            className={`px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all ${mode === 'oscuro' ? 'bg-black text-white shadow-[-2px_2px_0_0_#1a80ff] border border-white/20' : 'text-gray-400 hover:text-white'}`}
        >
            🌙 Oscuro
        </button>
    </div>
);

const Projects = () => {
    const [activeProject, setActiveProject] = useState<string | null>(null)
    const [activeCategory, setActiveCategory] = useState<Category>('all')
    const [jluxIndex, setJluxIndex] = useState(0)
    const [gcurlyIndex, setGcurlyIndex] = useState(0)
    const [cobraIndex, setCobraIndex] = useState(0)
    const [epIndex, setEpIndex] = useState(0)
    const [logisysIndex, setLogisysIndex] = useState(0)

    const [gcurlyMode, setGcurlyMode] = useState<ThemeMode>('oscuro')
    const [cobragoMode, setCobragoMode] = useState<ThemeMode>('oscuro')
    const [logisysMode, setLogisysMode] = useState<ThemeMode>('oscuro')

    const jluxImages = useMemo(() => [indexImg, login, product, panelAdmin, crudProducts, carrusel], [])
    const epImages = useMemo(() => [ep1, ep2, ep3, ep4, ep5, ep6], [])

    const activeGcurlyImages = gcurlyMode === 'claro' ? gcurlyClaroImages : gcurlyOscuroImages
    const activeCobragoImages = cobragoMode === 'claro' ? cobragoClaroImages : cobragoOscuroImages
    const activeLogisysImages = logisysMode === 'claro' ? logisysClaroImages : logisysOscuroImages

    // Reset index on mode change to avoid out of bounds
    useEffect(() => { setGcurlyIndex(0) }, [gcurlyMode])
    useEffect(() => { setCobraIndex(0) }, [cobragoMode])
    useEffect(() => { setLogisysIndex(0) }, [logisysMode])

    useEffect(() => {
        const interval = setInterval(() => {
            setJluxIndex((prev) => (prev + 1) % jluxImages.length)
            setGcurlyIndex((prev) => activeGcurlyImages.length > 0 ? (prev + 1) % activeGcurlyImages.length : 0)
            setCobraIndex((prev) => activeCobragoImages.length > 0 ? (prev + 1) % activeCobragoImages.length : 0)
            setLogisysIndex((prev) => activeLogisysImages.length > 0 ? (prev + 1) % activeLogisysImages.length : 0)
            setEpIndex((prev) => (prev + 1) % epImages.length)
        }, 4000) 
        return () => clearInterval(interval)
    }, [jluxImages.length, activeGcurlyImages.length, activeCobragoImages.length, activeLogisysImages.length, epImages.length])

    const categories: { id: Category; label: string }[] = [
        { id: 'all', label: 'Todos' },
        { id: 'web', label: 'Web Apps' },
        { id: 'mobile', label: 'Apps Móviles' },
        { id: 'landing', label: 'Landings' }
    ]

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
                    
                    {/* Category Switcher */}
                    <div className="flex flex-wrap gap-3 mt-8 md:mt-0">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-3 text-xs font-black uppercase tracking-[0.2em] border-2 transition-all ${
                                    activeCategory === cat.id 
                                    ? "bg-white text-black border-white shadow-[-6px_6px_0_0_#1a80ff]" 
                                    : "bg-black text-white border-white/10 hover:border-white/40"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="space-y-40">
                    <AnimatePresence mode="popLayout">
                        {/* PROYECTO: JLUXURIES (WEB) */}
                        {(activeCategory === 'all' || activeCategory === 'web') && (
                        <motion.div 
                            key="jluxuries"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2 bg-cyan-500 border-[3px] border-black p-8 md:p-12 flex flex-col justify-between hover:scale-[1.01] transition-transform origin-left relative overflow-hidden group/card shadow-[-10px_10px_0px_0px_rgba(26,128,255,0.2)]">
                                    <img src={jluxLogo} alt="Logo JLuxuries" className="absolute -right-10 -bottom-10 w-64 opacity-20 group-hover/card:scale-110 transition-transform duration-1000 pointer-events-none will-change-transform" />
                                    <div className="flex justify-between items-start gap-4 relative z-10">
                                        <h3 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-4">JLUXURIES<br/>STORE</h3>
                                        <span className="px-4 py-2 bg-black text-white text-xs font-black uppercase tracking-widest border border-white/30 whitespace-nowrap">
                                            E-COMMERCE
                                        </span>
                                    </div>
                                    <p className="mt-8 text-white/80 font-black text-xl md:text-2xl leading-tight max-w-2xl relative z-10 uppercase italic">
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

                            <div className="relative w-full h-[45vh] min-h-[320px] md:h-[60vh] lg:h-[80vh] lg:min-h-[700px] overflow-hidden border-[3px] border-cyan-500/40 shadow-[0_0_40px_rgba(26,128,255,0.08)] bg-black flex items-center justify-center p-4 group/img">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,128,255,0.05)_0%,transparent_60%)] pointer-events-none" />
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
                                    className="absolute top-4 right-4 md:top-8 md:right-8 z-20 py-3 px-5 md:py-5 md:px-10 text-xs md:text-sm bg-cyan-500 hover:bg-white text-white hover:text-black font-black uppercase tracking-widest transition-all hover:-translate-y-2 hover:translate-x-2 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black active:translate-x-0 active:translate-y-0 active:shadow-none"
                                >
                                    CÓDIGO
                                </button>
                            </div>
                        </motion.div>
                        )}

                        {/* PROYECTO: LOGISYS (WEB) - NEW! */}
                        {(activeCategory === 'all' || activeCategory === 'web') && (
                        <motion.div 
                            key="logisys"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2 bg-[#00FF66] border-[3px] border-black p-8 md:p-12 flex flex-col justify-between hover:scale-[1.01] transition-transform origin-left relative overflow-hidden group/card shadow-[-10px_10px_0px_0px_rgba(0,255,102,0.2)]">
                                    <img src={logisysLogo} alt="Logo LogiSys" className="absolute -right-10 -bottom-10 w-64 opacity-50 group-hover/card:scale-110 transition-transform duration-1000 pointer-events-none will-change-transform mix-blend-multiply" />
                                    <div className="flex justify-between items-start gap-4 relative z-10">
                                        <h3 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-4">LOGI<br/>SYS</h3>
                                        <span className="px-4 py-2 bg-black text-[#00FF66] text-xs font-black uppercase tracking-widest border border-[#00FF66]/30 whitespace-nowrap">
                                            SAAS PLATFORM
                                        </span>
                                    </div>
                                    <p className="mt-8 text-black/80 font-black text-xl md:text-2xl leading-tight max-w-2xl relative z-10 uppercase italic">
                                        Sistema avanzado de punto de venta e inventario logístico.
                                    </p>
                                </div>
                                <div className="bg-gray-950 border-[3px] border-white/10 p-8 md:p-12 flex flex-col justify-center transition-colors hover:border-[#00FF66] shadow-[-10px_10px_0px_0px_rgba(255,255,255,0.05)]">
                                    <h4 className="text-white text-sm font-black uppercase tracking-[0.3em] mb-6 border-b-2 border-white/10 pb-4">Características</h4>
                                    <ul className="space-y-5">
                                        {["Gestión de Stock", "Reportes Estadísticos", "Punto de Venta"].map((feature, i) => (
                                            <li key={i} className="flex items-center text-gray-400 text-sm md:text-base font-black uppercase tracking-widest">
                                                <div className="w-3 h-3 bg-[#00FF66] mr-4 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t-2 border-white/10">
                                        {["React", "Node.js", "Express", "Tailwind"].map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-white/5 border-2 border-white/10 text-xs font-black text-white uppercase tracking-widest hover:border-[#00FF66] transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full h-[45vh] min-h-[320px] md:h-[60vh] lg:h-[80vh] lg:min-h-[700px] overflow-hidden border-[3px] border-[#00FF66]/40 shadow-[0_0_40px_rgba(0,255,102,0.08)] bg-black flex items-center justify-center p-4 group/img">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,102,0.05)_0%,transparent_60%)] pointer-events-none" />
                                
                                {/* Claro / Oscuro Switch */}
                                <ProjectThemeToggle mode={logisysMode} setMode={setLogisysMode} />

                                <AnimatePresence mode="wait">
                                    {activeLogisysImages.length > 0 && (
                                        <motion.img
                                            key={activeLogisysImages[logisysIndex]}
                                            src={activeLogisysImages[logisysIndex]}
                                            alt={`LogiSys ${logisysIndex}`}
                                            loading="lazy"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.05 }}
                                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                            className="absolute inset-0 w-full h-full object-contain p-2 md:p-8 lg:p-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] will-change-transform"
                                        />
                                    )}
                                </AnimatePresence>
                                <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none opacity-90" />
                                <div className="hidden sm:flex flex-wrap max-w-[80%] absolute bottom-6 left-1/2 -translate-x-1/2 gap-3 z-20 bg-black/80 px-5 py-4 border-2 border-[#00FF66]/30 backdrop-blur-xl transition-transform group-hover/img:scale-110">
                                    {activeLogisysImages.map((_, index) => (
                                        <div key={index} className={`h-2.5 transition-all duration-500 ${index === logisysIndex ? "bg-[#00FF66] w-10" : "bg-white/20 w-2.5 cursor-pointer hover:bg-[#00FF66]/50"}`} onClick={() => setLogisysIndex(index)} />
                                    ))}
                                </div>
                                <button
                                    onClick={() => setActiveProject('logisys')}
                                    className="absolute top-4 right-4 md:top-8 md:right-8 z-20 py-3 px-5 md:py-5 md:px-10 text-xs md:text-sm bg-[#00FF66] hover:bg-white text-black font-black uppercase tracking-widest transition-all hover:-translate-y-2 hover:translate-x-2 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black active:translate-x-0 active:translate-y-0 active:shadow-none"
                                >
                                    CÓDIGO
                                </button>
                            </div>
                        </motion.div>
                        )}

                        {/* PROYECTO 2: CobraGO (MOBILE) */}
                        {(activeCategory === 'all' || activeCategory === 'mobile') && (
                        <motion.div 
                            key="cobrago"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col gap-6"
                        >
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

                            <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden border-[3px] border-orange-500/40 shadow-[0_0_40px_rgba(249,115,22,0.08)] bg-black flex items-center justify-center p-4 group/img">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.05)_0%,transparent_60%)] pointer-events-none" />
                                
                                {/* Claro / Oscuro Switch */}
                                <ProjectThemeToggle mode={cobragoMode} setMode={setCobragoMode} />

                                <div className="relative w-full max-w-5xl h-full flex items-center justify-center gap-4 md:gap-12 lg:gap-20">
                                    {/* Left Phone */}
                                    <motion.div 
                                        animate={{ y: [0, -30, 0], rotate: [-2, 0, -2] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        className="hidden sm:block w-1/4 aspect-[9/19] border-4 border-white/10 rounded-[2.5rem] overflow-hidden bg-gray-900 shadow-2xl relative opacity-40 hover:opacity-100 hover:scale-105 hover:z-20 transition-all duration-700"
                                    >
                                        <AnimatePresence mode="wait">
                                            {activeCobragoImages.length > 0 && (
                                                <motion.img
                                                    key={(cobraIndex + 1) % activeCobragoImages.length}
                                                    src={activeCobragoImages[(cobraIndex + 1) % activeCobragoImages.length]}
                                                    className="w-full h-full object-cover"
                                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                />
                                            )}
                                        </AnimatePresence>
                                        <div className="absolute inset-0 bg-orange-500/10 pointer-events-none" />
                                    </motion.div>

                                    {/* Main Center Phone */}
                                    <motion.div 
                                        animate={{ y: [0, 30, 0], rotate: [2, -2, 2] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-[85%] sm:w-[55%] md:w-[35%] aspect-[9/19] border-[6px] border-orange-500 rounded-[3rem] overflow-hidden bg-gray-950 shadow-[0_0_100px_rgba(249,115,22,0.25)] relative z-10"
                                    >
                                        <AnimatePresence mode="wait">
                                            {activeCobragoImages.length > 0 && (
                                                <motion.img
                                                    key={cobraIndex}
                                                    src={activeCobragoImages[cobraIndex]}
                                                    className="w-full h-full object-cover p-1 cursor-pointer"
                                                    onClick={() => setCobraIndex(prev => (prev + 1) % activeCobragoImages.length)}
                                                    initial={{ scale: 1.1, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.9, opacity: 0 }}
                                                    transition={{ duration: 0.6 }}
                                                />
                                            )}
                                        </AnimatePresence>
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
                                    </motion.div>

                                    {/* Right Phone */}
                                    <motion.div 
                                        animate={{ y: [0, -30, 0], rotate: [2, 0, 2] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                                        className="hidden sm:block w-1/4 aspect-[9/19] border-4 border-white/10 rounded-[2.5rem] overflow-hidden bg-gray-900 shadow-2xl relative opacity-40 hover:opacity-100 hover:scale-105 hover:z-20 transition-all duration-700"
                                    >
                                        <AnimatePresence mode="wait">
                                            {activeCobragoImages.length > 0 && (
                                                <motion.img
                                                    key={(cobraIndex + 2) % activeCobragoImages.length}
                                                    src={activeCobragoImages[(cobraIndex + 2) % activeCobragoImages.length]}
                                                    className="w-full h-full object-cover"
                                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                />
                                            )}
                                        </AnimatePresence>
                                        <div className="absolute inset-0 bg-orange-500/10 pointer-events-none" />
                                    </motion.div>
                                </div>

                                <button
                                    onClick={() => setActiveProject('cobrago')}
                                    className="absolute top-4 right-4 md:top-8 md:right-8 z-20 py-3 px-5 md:py-5 md:px-10 text-xs md:text-sm bg-orange-500 hover:bg-white text-black font-black uppercase tracking-widest border-4 border-black transition-all hover:-translate-y-2 hover:translate-x-2 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
                                >
                                    CÓDIGO
                                </button>
                            </div>
                        </motion.div>
                        )}

                        {/* PROYECTO 3: G-CURLY (LANDING) */}
                        {(activeCategory === 'all' || activeCategory === 'landing') && (
                        <motion.div 
                            key="gcurly"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2 bg-violet-600 border-[3px] border-white/20 p-8 md:p-12 flex flex-col justify-between hover:scale-[1.01] transition-transform origin-right shadow-[-10px_10px_0px_0px_rgba(139,92,246,0.2)] relative overflow-hidden group/card">
                                    <img src={gcurlyLogo} alt="Logo G-Curly" className="absolute -right-10 -bottom-10 w-64 opacity-50 group-hover/card:scale-110 transition-transform duration-1000 pointer-events-none will-change-transform filter brightness-200 grayscale" />
                                    <div className="flex justify-between items-start gap-4 relative z-10">
                                        <h3 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-4">G-CURLY<br/>BRAND</h3>
                                        <span className="px-4 py-2 bg-black text-violet-400 text-xs font-black uppercase tracking-widest border border-violet-400/30 whitespace-nowrap">
                                            BRANDING SPA
                                        </span>
                                    </div>
                                    <p className="mt-8 text-white font-black text-xl md:text-2xl leading-tight max-w-2xl uppercase italic relative z-10">
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
                            <div className="relative w-full h-[45vh] min-h-[320px] md:h-[60vh] lg:h-[80vh] lg:min-h-[700px] overflow-hidden border-[3px] border-violet-500/40 shadow-[0_0_40px_rgba(139,92,246,0.08)] bg-black flex items-center justify-center p-4 group/img">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.05)_0%,transparent_60%)] pointer-events-none" />
                                
                                {/* Claro / Oscuro Switch */}
                                <ProjectThemeToggle mode={gcurlyMode} setMode={setGcurlyMode} />

                                <AnimatePresence mode="wait">
                                    {activeGcurlyImages.length > 0 && (
                                        <motion.img
                                            key={activeGcurlyImages[gcurlyIndex]}
                                            src={activeGcurlyImages[gcurlyIndex]}
                                            alt={`G-Curly ${gcurlyIndex}`}
                                            loading="lazy"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.05 }}
                                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                            className="absolute inset-0 w-full h-full object-contain p-2 md:p-8 lg:p-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] will-change-transform"
                                        />
                                    )}
                                </AnimatePresence>
                                <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none opacity-90" />
                                <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-3 z-20 bg-black/80 px-5 py-4 border-2 border-violet-500/30 backdrop-blur-xl transition-transform group-hover/img:scale-110">
                                    {activeGcurlyImages.map((_, index) => (
                                        <div key={index} className={`h-2.5 transition-all duration-500 ${index === gcurlyIndex ? "bg-violet-400 w-10" : "bg-white/20 w-2.5 cursor-pointer hover:bg-violet-400/50"}`} onClick={() => setGcurlyIndex(index)} />
                                    ))}
                                </div>
                                <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 flex flex-row gap-2 md:gap-4">
                                    <a href="https://graceful-swan-243221.netlify.app/" target="_blank" className="py-3 px-4 md:py-5 md:px-10 text-xs md:text-sm bg-violet-600 hover:bg-white hover:text-black font-black uppercase tracking-widest border-4 border-black transition-all hover:-translate-y-2 hover:translate-x-2 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none text-center">
                                        WEB
                                    </a>
                                    <button onClick={() => setActiveProject('gcurly')} className="py-3 px-4 md:py-5 md:px-10 text-xs md:text-sm bg-black/70 backdrop-blur-xl border-4 border-violet-500/40 hover:border-violet-400 text-white font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
                                        CÓDIGO
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                        )}

                        {/* PROYECTO 4: ELECTROPOWER (LANDING) - NO SWITCH */}
                        {(activeCategory === 'all' || activeCategory === 'landing') && (
                        <motion.div 
                            key="electropower"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2 bg-red-600 border-[3px] border-black p-8 md:p-12 flex flex-col justify-between hover:scale-[1.01] transition-transform origin-left relative overflow-hidden group/card shadow-[-10px_10px_0px_0px_rgba(220,38,38,0.2)]">
                                    <img src={epLogo} alt="Logo ElectroPower" className="absolute -right-10 -bottom-10 w-80 opacity-50 group-hover/card:scale-110 transition-transform duration-1000 pointer-events-none filter grayscale brightness-0 invert" />
                                    <div className="flex justify-between items-start gap-4 relative z-10">
                                        <h3 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-4">ELECTRO<br/>POWER</h3>
                                        <span className="px-4 py-2 bg-black text-red-500 text-xs font-black uppercase tracking-widest border border-red-500/30 whitespace-nowrap">
                                            LANDING PAGE
                                        </span>
                                    </div>
                                    <p className="mt-8 text-white/90 font-black text-xl md:text-2xl leading-tight max-w-2xl relative z-10 uppercase italic">
                                        Landing page de alto impacto para servicios eléctricos industriales y domésticos.
                                    </p>
                                </div>
                                <div className="bg-gray-950 border-[3px] border-white/10 p-8 md:p-12 flex flex-col justify-center transition-colors hover:border-red-600 shadow-[-10px_10px_0px_0px_rgba(255,255,255,0.05)]">
                                    <h4 className="text-white text-sm font-black uppercase tracking-[0.3em] mb-6 border-b-2 border-white/10 pb-4">Características</h4>
                                    <ul className="space-y-5">
                                        {["Performance Optimizado", "SEO On-Page", "Lead Generation"].map((feature, i) => (
                                            <li key={i} className="flex items-center text-gray-400 text-sm md:text-base font-black uppercase tracking-widest">
                                                <div className="w-3 h-3 bg-red-600 mr-4 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t-2 border-white/10">
                                        {["React", "Vite", "Framer Motion", "Tailwind"].map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-white/5 border-2 border-white/10 text-xs font-black text-white uppercase tracking-widest hover:border-red-600 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full h-[45vh] min-h-[320px] md:h-[60vh] lg:h-[80vh] lg:min-h-[700px] overflow-hidden border-[3px] border-red-600/40 shadow-[0_0_40px_rgba(220,38,38,0.08)] bg-black flex items-center justify-center p-4 group/img">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.05)_0%,transparent_60%)] pointer-events-none" />
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={epIndex}
                                        src={epImages[epIndex]}
                                        alt={`ElectroPower ${epIndex}`}
                                        loading="lazy"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                        className="absolute inset-0 w-full h-full object-contain p-2 md:p-8 lg:p-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] will-change-transform"
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none opacity-90" />
                                <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-3 z-20 bg-black/80 px-5 py-4 border-2 border-red-600/30 backdrop-blur-xl transition-transform group-hover/img:scale-110">
                                    {epImages.map((_, index) => (
                                        <div key={index} className={`h-2.5 transition-all duration-500 ${index === epIndex ? "bg-red-500 w-10" : "bg-white/20 w-2.5 cursor-pointer hover:bg-red-500/50"}`} onClick={() => setEpIndex(index)} />
                                    ))}
                                </div>
                                <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 flex flex-row gap-2 md:gap-4">
                                    <a href="https://electropower.vercel.app/" target="_blank" className="py-3 px-4 md:py-5 md:px-10 text-xs md:text-sm bg-red-600 hover:bg-white hover:text-black font-black uppercase tracking-widest border-4 border-black transition-all hover:-translate-y-2 hover:translate-x-2 shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none text-center">
                                        WEB
                                    </a>
                                    <button onClick={() => setActiveProject('electropower')} className="py-3 px-4 md:py-5 md:px-10 text-xs md:text-sm bg-black/70 backdrop-blur-xl border-4 border-red-500/40 hover:border-red-400 text-white font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
                                        CÓDIGO
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-40 border-t border-white/20 pt-16 flex justify-center">
                    <a
                        href="https://github.com/JorgeAndresDev/"
                        target="_blank"
                        className="text-4xl md:text-6xl font-black uppercase text-white hover:text-cyan-400 transition-colors tracking-tighter flex items-center gap-6 group"
                    >
                        VER TODOS LOS CÓDIGOS
                        <span className="bg-white text-black w-20 h-20 flex items-center justify-center rounded-full group-hover:bg-cyan-400 group-hover:text-white group-hover:scale-110 transition-all text-3xl">↗</span>
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
                        className="bg-black border-2 border-white/20 p-8 md:p-12 w-full max-w-2xl shadow-[0_0_100px_rgba(0,0,0,1)] relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setActiveProject(null)}
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-2xl md:text-3xl font-black text-gray-500 hover:text-white hover:rotate-90 transition-all"
                        >
                            ✕
                        </button>

                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 md:mb-12 text-center md:text-left">
                            CÓDIGO FUENTE DE<br/>
                            <span className={`transition-colors duration-500 ${
                                activeProject === 'jluxuries' ? 'text-cyan-400' : 
                                activeProject === 'logisys' ? 'text-[#00FF66]' :
                                activeProject === 'gcurly' ? 'text-violet-400' : 
                                activeProject === 'electropower' ? 'text-red-500' : 
                                'text-orange-400'
                            }`}>
                                {activeProject.toUpperCase()}
                            </span>
                        </h3>

                        <div className="space-y-4 md:space-y-6">
                            {(activeProject === 'jluxuries' || activeProject === 'cobrago' || activeProject === 'logisys') ? (
                                <>
                                    <a
                                        href={
                                            activeProject === 'jluxuries' ? "https://github.com/JorgeAndresDev/JLUXURIES-API.git" : 
                                            activeProject === 'logisys' ? "https://github.com/JorgeAndresDev/Backend-LogiSys.git" : 
                                            "https://github.com/JorgeAndresDev/API-cobrago.git"
                                        }
                                        target="_blank"
                                        className={`block w-full py-6 md:py-8 px-8 md:px-10 border-4 border-white/10 bg-[#050505] transition-all group hover:scale-[1.02] ${
                                            activeProject === 'jluxuries' ? 'hover:border-cyan-400' : 
                                            activeProject === 'logisys' ? 'hover:border-[#00FF66]' : 
                                            'hover:border-orange-400'
                                        }`}
                                    >
                                        <div className="flex justify-between items-center text-white font-black text-lg md:text-2xl uppercase tracking-widest text-center md:text-left">
                                            <span>Backend / API</span>
                                            <span className={`${
                                                activeProject === 'jluxuries' ? 'text-cyan-500' : 
                                                activeProject === 'logisys' ? 'text-[#00FF66]' :
                                                'text-orange-500'
                                            } group-hover:translate-x-4 transition-transform text-3xl md:text-4xl leading-none`}>→</span>
                                        </div>
                                    </a>

                                    <a
                                        href={
                                            activeProject === 'jluxuries' ? "https://github.com/JorgeAndresDev/JLUXURIES-Front" : 
                                            activeProject === 'logisys' ? "https://github.com/JorgeAndresDev/Frontend-LogiSys.git" : 
                                            "https://github.com/JorgeAndresDev/cobrago-mobile.git"
                                        }
                                        target="_blank"
                                        className={`block w-full py-6 md:py-8 px-8 md:px-10 border-4 border-white/10 bg-[#050505] transition-all group hover:scale-[1.02] ${
                                            activeProject === 'jluxuries' ? 'hover:border-cyan-400' : 
                                            activeProject === 'logisys' ? 'hover:border-[#00FF66]' :
                                            'hover:border-orange-400'
                                        }`}
                                    >
                                        <div className="flex justify-between items-center text-white font-black text-lg md:text-2xl uppercase tracking-widest text-center md:text-left">
                                            <span>Frontend / APP</span>
                                            <span className={`${
                                                activeProject === 'jluxuries' ? 'text-cyan-500' : 
                                                activeProject === 'logisys' ? 'text-[#00FF66]' :
                                                'text-orange-500'
                                            } group-hover:translate-x-4 transition-transform text-3xl md:text-4xl leading-none`}>→</span>
                                        </div>
                                    </a>
                                </>
                            ) : (
                                <a
                                    href={activeProject === 'gcurly' ? "https://github.com/JorgeAndresDev/G-CURLY.git" : "https://github.com/JorgeAndresDev/ELECTROPOWER.git"}
                                    target="_blank"
                                    className={`block w-full py-8 md:py-12 px-8 md:px-10 border-4 border-white/10 bg-[#050505] transition-all group hover:scale-[1.02] ${
                                        activeProject === 'gcurly' ? 'hover:border-violet-400' : 'hover:border-red-600'
                                    }`}
                                >
                                    <div className="flex justify-between items-center text-white font-black text-xl md:text-3xl uppercase tracking-widest text-center md:text-left">
                                        <span>REPOSITORIO ÚNICO</span>
                                        <span className={`${
                                            activeProject === 'gcurly' ? 'text-violet-500' : 'text-red-600'
                                        } group-hover:translate-x-4 transition-transform text-4xl leading-none`}>→</span>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects
