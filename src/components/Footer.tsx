const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/20 py-8 lg:py-12">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <ul className="flex items-center gap-6">
          <li>
            <a href="https://github.com/JorgeAndresDev" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jorge-andres-dev/" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </li>
        </ul>

        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 text-center md:text-right">
          © {currentYear} • JORGE GÓMEZ DEV.<br className="md:hidden" /> ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}

export default Footer
