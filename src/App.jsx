import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Schedule from './components/Schedule';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Highlights />
        <Schedule />
        <Contact />
        <footer className="border-t border-white/10 py-8 bg-slate-950/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Sam Echo — All rights reserved.</p>
            <div className="text-xs text-slate-500">Built with love for gaming communities.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
