import { useRef } from "react"
import Projects from "../components/Projects"
import About from "../components/About"
import Skills from "../components/Skills"
import ScrollReveal from "../components/ScrollReveal"
import useScrollSection from "../hooks/useScrollSection"
import cvFile from "../assets/cv/Jorge_Gomez_CV.pdf"
import Marquee from "react-fast-marquee"
import jdevLogo from "../assets/logo/favicon.png"

const Home = () => {
  const homeRef = useRef<HTMLElement>(null)
  const heroProgress = useScrollSection(homeRef)
  const heroTransform = `translateY(${heroProgress * 28}px)`
  const heroOpacity = 1 - heroProgress * 0.28

  return (
    <>
      <section id="home" ref={homeRef} className="relative min-h-screen overflow-hidden pt-24">
        {/* ── z-0: Background decorative layers ── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_10%,transparent_100%)]" />
          <div className="absolute top-[18%] right-[10%] w-[55%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rotate-[18deg] translate-x-20 blur-sm" />
          <div className="absolute top-[28%] right-[8%] w-[45%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/25 to-transparent rotate-[-12deg] translate-x-16 blur-sm" />
          <div className="absolute top-[38%] right-[12%] w-[35%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent rotate-[8deg] translate-x-12 blur-sm" />
        </div>

        {/* ── z-10: Content ── */}
        <div
          style={{ transform: heroTransform, opacity: heroOpacity }}
          className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1440px] flex-col justify-center px-6 md:px-20 py-12 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        >
          <ScrollReveal className="w-full">
            {/* Badge */}
            <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 tracking-[0.1em] uppercase border border-cyan-500/20">
              JORGE GÓMEZ DEV
            </span>

            {/* H1 + Logo row */}
            <div className="mt-2 flex items-center justify-between gap-8 md:gap-12 lg:gap-16">
              <h1 className="text-[clamp(40px,7vw,96px)] leading-[1.05] font-black tracking-tighter text-white uppercase">
                DISEÑO
                <br />
                <span className="text-cyan-400">Y DESARROLLO</span>
                <br />
                SOLUCIONES
              </h1>
              <img
                src={jdevLogo}
                alt=""
                className="w-36 md:w-44 lg:w-56 shrink-0 hidden md:block animate-[float_4s_ease-in-out_infinite] select-none pointer-events-none"
              />
            </div>

            {/* Paragraph */}
            <p className="mt-3 text-lg md:text-xl leading-[1.6] text-slate-300 max-w-[480px] font-medium">
              Desarrollador <strong className="text-white">Full Stack</strong>. Mi trabajo se enfoca en rendimiento, APIs seguras y proyectos que escalan, brindando una experiencia premium desde el inicio.
            </p>

            {/* CTA Buttons */}
            <div className="mt-5 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center justify-center bg-white px-8 py-4 text-sm md:text-base font-black uppercase tracking-[0.2em] text-black transition-all hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_0px_#1a80ff] active:translate-x-0 active:translate-y-0 active:shadow-none border-2 border-black">
                VER TRABAJOS
              </a>
              <a href={cvFile} download="Jorge_Gomez_CV.pdf" className="inline-flex items-center justify-center bg-cyan-500 px-8 py-4 text-sm md:text-base font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0px_0px_rgba(0,0,0,0.5)] active:translate-x-0 active:translate-y-0 active:shadow-none border-2 border-black">
                DESCARGAR CV
              </a>
            </div>

            {/* Marquee tech bar */}
            <div className="mt-16 border-y border-white/10 py-6 w-full">
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

          {/* DESTACADOS card */}
          <ScrollReveal className="w-full border-[3px] border-white/10 bg-black relative overflow-hidden group hover:border-cyan-500/50 transition-colors mt-12 md:mt-24">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row w-full relative z-10">
              <div className="bg-[#050505] p-10 md:p-16 lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/20 hover:bg-white/5 transition-colors group/left">
                <span className="inline-block bg-cyan-500 text-white px-4 py-2 text-xs md:text-sm font-black uppercase tracking-widest mb-8 w-max group-hover/left:scale-110 transition-transform">
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
                  <div key={item.title} className="border-2 border-white/20 bg-[#050505] p-8 md:p-10 hover:bg-cyan-500 hover:text-white hover:-translate-y-2 hover:translate-x-2 hover:shadow-[-12px_12px_0_0_rgba(255,255,255,0.2)] transition-all duration-300 group/item cursor-pointer flex flex-col justify-center">
                    <p className="text-white group-hover/item:text-white font-black uppercase tracking-widest text-2xl md:text-3xl mb-4 leading-none">{item.title}</p>
                    <p className="text-xs md:text-sm font-bold text-gray-500 group-hover/item:text-white/70 uppercase tracking-widest">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
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

      <section id="contact" className="relative py-24 md:py-32 px-6 bg-cyan-500 overflow-hidden text-white selection:bg-black selection:text-white">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none opacity-20 pointer-events-none">
          <Marquee speed={80} autoFill>
            <span className="text-[20vw] font-black uppercase tracking-tighter whitespace-nowrap mx-8">
              TRABAJEMOS JUNTOS
            </span>
          </Marquee>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto min-h-[50vh] flex flex-col justify-center items-center text-center mt-16 md:mt-24">
          <p className="text-sm md:text-base uppercase tracking-[0.4em] font-black mb-6 border-2 border-black px-6 py-2">
            ESTÁS LISTO PARA INICIAR?
          </p>
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-10 md:mb-12 mix-blend-color-burn">
            DISEÑEMOS <br/>
            TU PRÓXIMA <br/>
            <span className="text-white mix-blend-normal">PLATAFORMA</span>.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-4">
            <a
              href="mailto:jorgeandreg1207@gmail.com"
              className="group bg-black px-6 py-5 font-black text-white text-sm md:text-base transition-all hover:-translate-y-2 hover:translate-x-2 shadow-[-6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[-10px_10px_0px_0px_rgba(0,0,0,0.5)] active:translate-x-0 active:translate-y-0 uppercase tracking-widest flex items-center justify-center gap-2 border-4 border-black"
            >
              <span className="text-cyan-400 text-lg">✉</span>
              EMAIL
            </a>
            <a
              href="https://wa.me/573043127385"
              target="_blank"
              rel="noreferrer"
              className="group bg-black px-6 py-5 font-black text-white text-sm md:text-base transition-all hover:-translate-y-2 hover:translate-x-2 shadow-[-6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[-10px_10px_0px_0px_rgba(0,0,0,0.5)] active:translate-x-0 active:translate-y-0 uppercase tracking-widest flex items-center justify-center gap-2 border-4 border-black"
            >
              <span className="text-green-400 text-lg">📲</span>
              WHATSAPP
            </a>
            <a
              href="https://www.linkedin.com/in/jorge-andresdev/"
              target="_blank"
              rel="noreferrer"
              className="group border-4 border-black px-6 py-5 font-black text-black text-sm md:text-base transition-all hover:bg-black hover:text-white hover:-translate-y-2 hover:translate-x-2 shadow-[-6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[-10px_10px_0px_0px_rgba(0,0,0,0.5)] active:translate-x-0 active:translate-y-0 uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span className="text-lg">in</span>
              LINKEDIN
            </a>
          </div>

          <p className="mt-8 text-black/60 font-bold text-sm uppercase tracking-widest">
            jorgeandreg1207@gmail.com · +57 304 312 7385
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
