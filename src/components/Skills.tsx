import { motion } from "framer-motion"

const Skills = () => {
  const skillBlocks = [
    {
      category: "Frontend",
      title: "UI / UX",
      items: ["React + Vite", "React 19", "Tailwind v4", "Motion / GSAP"],
      bg: "bg-cyan-500",
      text: "text-black",
      border: "border-cyan-500"
    },
    {
      category: "Backend",
      title: "APIs & Auth",
      items: ["FastAPI", "Python", "JWT Auth", "Pydantic"],
      bg: "bg-violet-500",
      text: "text-white",
      border: "border-violet-500"
    },
    {
      category: "Bases de Datos",
      title: "Datos",
      items: ["MySQL", "SQL Optimizado", "Relacional", "Mantenimiento"],
      bg: "bg-gray-100",
      text: "text-black",
      border: "border-gray-100"
    },
    {
      category: "Flujo de trabajo",
      title: "Operaciones",
      items: ["Git / GitHub", "Vite Config", "Deployments", "Arquitectura"],
      bg: "bg-black",
      text: "text-white",
      border: "border-white/20"
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  }

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="inline-block border text-xs font-bold uppercase tracking-widest text-cyan-500 border-cyan-500/50 px-4 py-2 rounded-full mb-6">
            Núcleo Técnico
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tighter leading-none">
            El Motor<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
              Detrás del Código.
            </span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {skillBlocks.map((block) => (
            <motion.div
              variants={itemVariants}
              key={block.category}
              className={`rounded-[2rem] border ${block.border} ${block.bg} p-8 flex flex-col justify-between group overflow-hidden relative shadow-2xl origin-bottom transition-transform duration-300 hover:scale-[1.03]`}
            >
              <div className={`relative z-10 ${block.text}`}>
                <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-2">
                  {block.category}
                </p>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">
                  {block.title}
                </h3>
                
                <ul className="space-y-3 font-semibold uppercase text-sm tracking-wide">
                  {block.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${block.bg === 'bg-black' ? 'bg-cyan-500' : 'bg-current opacity-50'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Massive background number or icon effect (Brutalist style) */}
              <div className="absolute -bottom-6 -right-6 text-9xl font-black opacity-5 pointer-events-none select-none">
                {block.title[0]}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
