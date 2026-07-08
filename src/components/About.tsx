import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-black relative">
      <div className="max-w-[1400px] mx-auto grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
        {/* Main large box */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 lg:row-span-2 bg-gray-950 border-[3px] border-white/10 p-10 md:p-16 flex flex-col justify-between group hover:border-cyan-400 transition-colors shadow-[-10px_10px_0px_0px_rgba(26,128,255,0.1)]"
        >
          <div>
            <span className="inline-flex bg-cyan-500 px-4 py-2 text-xs font-black uppercase tracking-widest text-white">
              ¿Quién Soy?
            </span>
            <h2 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">
              Construyo <span className="text-cyan-400">Software</span> Sólido, Atractivo y Seguro.
            </h2>
            <p className="mt-8 text-xl md:text-2xl font-medium text-gray-400 leading-relaxed max-w-3xl">
              Soy <strong className="text-white">Jorge Andrés Gómez Díaz</strong>, desarrollador Full Stack. 
              Creo productos digitales que combinan un frontend extremadamente fluido con APIs backend rápidas, seguras y mantenibles.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Metodología", value: "Clean & testable" },
              { label: "Arquitectura", value: "React + FastAPI" },
              { label: "Prioridad", value: "Rendimiento" },
              { label: "Entrega", value: "Alto Impacto" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-cyan-500 font-bold">{item.label}</span>
                <span className="text-white font-extrabold uppercase">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Side box 1 */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-cyan-500 p-10 flex flex-col justify-center text-white shadow-[-12px_12px_0px_0px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform origin-bottom-right border-[3px] border-black"
        >
            <h3 className="text-4xl font-black uppercase leading-none tracking-tighter">Impacto<br/>Real</h3>
            <p className="mt-4 font-bold text-black/80 leading-relaxed">
              APIs seguras, paneles administrativos y flujos transparentes diseñados para escalar.
            </p>
        </motion.div>

        {/* Side box 2 */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-[3px] border-white/10 bg-gray-950 p-10 flex flex-col justify-between group hover:bg-white hover:text-black transition-colors shadow-[-10px_10px_0px_0px_rgba(255,255,255,0.05)]"
        >
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-black transition-colors">Integraciones fluidas</h3>
            <ul className="mt-6 space-y-4">
              {['Escalabilidad Continua', 'UX Premium (60fps)', 'Bases de Datos Eficientes'].map((t, idx) => (
                <li key={idx} className="flex items-center gap-4 border-b border-white/10 group-hover:border-black/10 pb-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:bg-black" />
                  <span className="font-bold text-gray-400 group-hover:text-black uppercase tracking-wide text-sm">{t}</span>
                </li>
              ))}
            </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About
