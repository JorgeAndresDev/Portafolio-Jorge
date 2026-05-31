import { useRef } from "react"
import Projects from "../components/Projects"
import About from "../components/About"
import Skills from "../components/Skills"
import ScrollReveal from "../components/ScrollReveal"
import useScrollSection from "../hooks/useScrollSection"
import cvFile from "../assets/cv/Jorge_Gomez_CV.pdf"
import Marquee from "react-fast-marquee"

const Home = () => {
  const homeRef = useRef<HTMLElement>(null)
  const heroProgress = useScrollSection(homeRef)
  const heroTransform = `translateY(${heroProgress * 28}px)`
  const heroOpacity = 1 - heroProgress * 0.28

  return (
    <>
      <section id="home" ref={homeRef} className="relative min-h-screen overflow-hidden pt-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_10%,transparent_100%)]"></div>
        </div>

        <div
          style={{ transform: heroTransform, opacity: heroOpacity }}
          className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1400px] flex-col gap-10 px-6 py-12 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] justify-center items-start"
        >
          <ScrollReveal className="w-full">
            <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-xs md:text-sm font-semibold text-cyan-300 tracking-[0.28em] uppercase border border-cyan-500/20">
              JORGE GÓMEZ DEV
            </span>
            <h1 className="mt-6 text-[13vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] leading-[0.85] font-black tracking-tighter text-white uppercase mix-blend-difference">
              DISEÑO 
              <br />
              <span className="text-cyan-400">Y DESARROLLO</span>
              <br />
              SOLUCIONES
            </h1>
            <p className="mt-8 text-lg sm:text-xl lg:text-2xl leading-relaxed text-slate-300 max-w-2xl font-medium">
              Desarrollador <strong className="text-white">Full Stack</strong>. Mi trabajo se enfoca en rendimiento, APIs seguras y proyectos que escalan, brindando una experiencia premium desde el inicio.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-sm md:text-base font-bold text-slate-950 transition hover:bg-cyan-400 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                VER TRABAJOS
              </a>
              <a href={cvFile} download="Jorge_Gomez_CV.pdf" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm md:text-base font-bold text-white transition hover:border-white hover:bg-white/10 hover:scale-105 active:scale-95">
                DESCARGAR CV
              </a>
            </div>

            <div className="mt-16 border-y border-white/10 py-6 w-full -mx-6 px-6 md:mx-0 md:px-0">
                <Marquee gradient={false} speed={50} className="w-full overflow-hidden">
                    <div className="flex items-center gap-10 opacity-70">
                        {["REACT 19", "TYPESCRIPT", "FASTAPI", "TAILWIND V4", "THREE.JS", "PYTHON", "MYSQL", "GSAP / MOTION"].map((tech, i) => (
                            <span key={i} className="text-2xl md:text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 mx-8 uppercase">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Marquee>
            </div>
          </ScrollReveal>

          <ScrollReveal className="w-full border-[3px] border-white/10 bg-black relative overflow-hidden group hover:border-cyan-500/50 transition-colors mt-12 md:mt-24">
            {/* Grid Pattern Background behind the card */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row w-full relative z-10">
              <div className="bg-[#050505] p-10 md:p-16 lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/20 hover:bg-white/5 transition-colors group/left">
                <span className="inline-block bg-cyan-500 text-black px-4 py-2 text-xs md:text-sm font-black uppercase tracking-widest mb-8 w-max group-hover/left:scale-110 transition-transform">
                  DESTACADOS
                </span>
                <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">PROYECTOS<br/>CON RITMO.</h2>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base leading-relaxed">
                  Sistemas elegantes, de alta conversión y con panel de control.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-2/3 p-6 md:p-10 gap-6 md:gap-8 bg-black/60 backdrop-blur-sm">
                {[
                  { title: "Seguridad API", description: "Protección JWT" },
                  { title: "UX Premium", description: "Interacciones 60fps" },
                  { title: "Arquitectura", description: "Escalabilidad asegurada" },
                  { title: "Animaciones", description: "Motion & GSAP" },
                ].map((item) => (
                  <div key={item.title} className="border-2 border-white/20 bg-[#050505] p-8 md:p-10 hover:bg-cyan-500 hover:text-black hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-12px_12px_0_0_rgba(255,255,255,0.2)] transition-all duration-300 group/item cursor-pointer flex flex-col justify-center">
                    <p className="text-white group-hover/item:text-black font-black uppercase tracking-widest text-2xl md:text-3xl mb-4 leading-none">{item.title}</p>
                    <p className="text-xs md:text-sm font-bold text-gray-500 group-hover/item:text-black/70 uppercase tracking-widest">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 text-center opacity-90">
          <div className="flex flex-col items-center gap-3 text-sm text-gray-300">
            <span className="uppercase tracking-[0.3em] text-white/70">Scroll</span>
            <div className="h-14 w-10 rounded-full border border-white/20 p-1">
              <span className="block h-2 w-2 rounded-full bg-white animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />

      <section id="contact" className="relative py-32 px-6 bg-cyan-500 overflow-hidden text-black selection:bg-black selection:text-cyan-500">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none opacity-20 pointer-events-none">
          <Marquee speed={80} autoFill>
            <span className="text-[20vw] font-black uppercase tracking-tighter whitespace-nowrap mx-8">
              TRABAJEMOS JUNTOS
            </span>
          </Marquee>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-[50vh] flex flex-col justify-center items-center text-center mt-24">
          <p className="text-sm md:text-base uppercase tracking-[0.4em] font-bold mb-6 border border-black px-6 py-2 rounded-full">
            ESTÁS LISTO PARA INICIAR?
          </p>
          <h2 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12 mix-blend-color-burn">
            DISEÑEMOS <br/>
            TU PRÓXIMA <br/>
            <span className="text-white mix-blend-normal">PLATAFORMA</span>.
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl justify-center mt-8">
            <a href="mailto:jorgeandresg1207@gmail.com" className="group rounded-full bg-black px-10 py-6 font-black text-white text-xl transition-transform hover:scale-110 active:scale-95 shadow-2xl flex-1 uppercase tracking-wider flex items-center justify-center gap-3">
              <span className="group-hover:animate-bounce">✉</span>
              Contáctame
            </a>
            <a href="https://www.linkedin.com/in/jorge-andresdev" target="_blank" rel="noreferrer" className="rounded-full border-4 border-black px-10 py-6 font-black text-black text-xl transition hover:bg-black hover:text-white flex-1 uppercase tracking-wider flex items-center justify-center">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
