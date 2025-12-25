const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            items: ["React (Vite)", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Diseño Responsive", "CSS Grid & Flexbox", "Consumo APIs REST", "Estado & Componentes"]
        },
        {
            category: "Backend",
            items: ["Python", "FastAPI", "APIs REST", "JWT Auth", "Control de Roles", "Pydantic", "Arquitectura Backend", "Manejo de Errores"]
        },
        {
            category: "Bases de Datos",
            items: ["MySQL", "SQL (CRUD/Joins)", "Modelado Relacional", "Integración DB"]
        },
        {
            category: "Seguridad",
            items: ["Auth JWT", "Credenciales Seguras", "RBAC (Roles)", "Auditoría de Acciones"]
        },
        {
            category: "Herramientas",
            items: ["Git & GitHub", "Postman", "Vite", "Vercel Deploy", "VS Code", "Entornos Dev/Prod"]
        },
        {
            category: "Buenas Prácticas",
            items: ["Clean Code", "Separación de Interés", "Reusabilidad", "Estructura Clara", "Documentación", "Escalabilidad"]
        },
        {
            category: "Soft Skills",
            items: ["Análisis de Reqs", "Resolución Problemas", "Aprendizaje Continuo", "Autonomía", "Pensamiento Lógico"]
        },
        {
            category: "Enfoque Pro",
            items: ["Apps Modernas", "APIs Seguras", "Full Stack", "Calidad de Código", "Orientación a Resultados"]
        }
    ]

    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
                    Habilidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Técnicas & Profesionales</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="bg-gray-900/60 p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors duration-300 group">
                            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-3">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                                        <svg className="w-4 h-4 text-blue-500/50 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
