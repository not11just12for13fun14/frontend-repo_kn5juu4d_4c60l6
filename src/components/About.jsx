import { Puzzle, Headphones } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_50%,rgba(217,70,239,0.12),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">About Sam</h2>
          <p className="text-slate-300/90 text-lg">
            Variety gamer with a soft spot for tight aim and good vibes. Expect FPS, cozy indies, and spontaneous challenge runs. The mission: entertain, improve, and build an inclusive community.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90">
              <div className="flex items-center gap-2 mb-2">
                <Puzzle className="h-5 w-5 text-violet-300" />
                <p className="font-semibold">Content Mix</p>
              </div>
              <p className="text-sm text-slate-300/80">Highlights, guides, ranked grind, and community games.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90">
              <div className="flex items-center gap-2 mb-2">
                <Headphones className="h-5 w-5 text-fuchsia-300" />
                <p className="font-semibold">Audio-First</p>
              </div>
              <p className="text-sm text-slate-300/80">Clean comms and satisfying sound design on every clip.</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
          <div className="aspect-video rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-center text-slate-300">
            Channel trailer placeholder
          </div>
          <p className="mt-4 text-slate-300/80 text-sm">
            Swap this with your channel trailer or a favorite highlight reel.
          </p>
        </div>
      </div>
    </section>
  );
}
