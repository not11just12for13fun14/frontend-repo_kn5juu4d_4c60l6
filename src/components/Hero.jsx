import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-4 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Live most evenings • Variety + FPS • Community-first
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_5px_30px_rgba(217,70,239,0.25)]">
            Sam Echo
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400">
              Gaming Creator & Streamer
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200/90">
            High-energy streams, crisp highlights, and a welcoming squad. Dive into the world where clutch plays meet comfy vibes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#highlights" className="rounded-xl bg-fuchsia-500 hover:bg-fuchsia-400 text-white px-6 py-3 text-sm font-semibold shadow-[0_10px_40px_rgba(217,70,239,0.35)] transition">
              Watch Highlights
            </a>
            <a href="#schedule" className="rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white px-6 py-3 text-sm font-semibold backdrop-blur transition">
              Stream Schedule
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
