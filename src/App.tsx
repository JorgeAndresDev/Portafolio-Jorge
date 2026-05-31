import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ReactLenis } from 'lenis/react'

import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

const App = () => {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black relative">
        <div className="fixed inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Experience />
          </Canvas>
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
