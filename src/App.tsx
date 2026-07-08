import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hyperspeed from './components/Hyperspeed'
import { ReactLenis } from 'lenis/react'

const App = () => {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-white relative">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Hyperspeed />
        </div>
        <div className="relative z-10 w-full overflow-hidden">
          <Navbar />
          <main>
            <Home />
          </main>
          <Footer />
        </div>
      </div>
    </ReactLenis>
  )
}

export default App
