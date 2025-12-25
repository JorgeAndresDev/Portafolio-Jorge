const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-gray-950">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-900/50 p-8 md:p-12 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Sobre <span className="text-blue-500">Mí</span>
                    </h2>

                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                        <p>
                            Soy <strong className="text-white">Jorge Andrés Gómez Díaz</strong>, Tecnólogo en Análisis y Desarrollo de Software del <strong className="text-white">SENA</strong>. Me especializo en la construcción de aplicaciones web escalables, priorizando la seguridad, el rendimiento y la calidad del código.
                        </p>

                        <p>
                            Cuento con sólida experiencia desarrollando soluciones <strong className="text-white">Full Stack</strong>, integrando interfaces modernas en <strong className="text-white">React</strong> con backends eficientes en <strong className="text-white">FastAPI</strong> y bases de datos SQL. Mi enfoque se centra en crear APIs REST seguras y arquitecturas mantenibles.
                        </p>

                        <p>
                            Me motiva resolver problemas reales de negocio mediante software robusto. Mantengo un aprendizaje constante, explorando nuevas tecnologías y mejores prácticas para aportar valor inmediato en cada proyecto que emprendo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
