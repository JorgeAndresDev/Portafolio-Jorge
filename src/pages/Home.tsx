import Projects from "../components/Projects"
import About from "../components/About"
import Skills from "../components/Skills"
import cvFile from "../assets/cv/Jorge_Gomez_CV.pdf"

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background Glows */}
                <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <div className="inline-block mb-4 px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full animate-fade-in">
                        <span className="text-cyan-400 text-sm font-medium">✨ Potenciando ideas con código</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                        Jorge Andrés <br />
                        <span className="text-gradient">Gómez Díaz</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-200 font-semibold mb-6">
                        Desarrollador Web & Backend
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Desarrollador de software con experiencia en React, FastAPI y SQL.
                        Construyo soluciones digitales seguras, escalables y de alto rendimiento.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
                        <a
                            href="#projects"
                            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2"
                        >
                            Ver proyectos
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all hover:scale-105 backdrop-blur-sm"
                        >
                            Contactar
                        </a>

                        <div className="w-px h-12 bg-white/10 hidden sm:block mx-2" />

                        <a
                            href={cvFile}
                            download="Jorge_Gomez_CV.pdf"
                            className="group flex items-center gap-2 px-6 py-3.5 bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-white rounded-full border border-gray-700 hover:border-blue-500/50 transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                        >
                            <svg className="w-5 h-5 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            <span>CV</span>
                        </a>

                        <a
                            href="https://github.com/JorgeAndresDev"
                            target="_blank"
                            aria-label="GitHub Profile"
                            className="p-3.5 bg-gray-900/80 hover:bg-gray-800 text-white rounded-full border border-gray-700 hover:border-blue-500/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <About />

            <Skills />

            <Projects />

            {/* Contact Section */}
            <section id="contact" className="py-24 px-6 relative bg-gray-950/80">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Hablamos?</h2>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
                        Estoy disponible para unirme a equipos ambiciosos y aportar valor desde el primer día. Si buscas un desarrollador comprometido, contáctame.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="mailto:jorgeandresg1207@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-transform hover:scale-105">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            Enviar Correo
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jorge-andresdev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-blue-700/20 text-blue-400 border border-blue-500/30 font-bold rounded-full hover:bg-blue-700/30 transition-transform hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
