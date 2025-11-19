import { motion } from 'framer-motion';
import { Youtube, Trophy, Sparkles } from 'lucide-react';

const vids = [
  { id: 'vid1', title: 'Insane Ace on Ascent', views: '24K', length: '1:12' },
  { id: 'vid2', title: 'Top 5 Funny Stream Moments', views: '31K', length: '4:03' },
  { id: 'vid3', title: 'Perfect Clutch in Overtime', views: '18K', length: '0:47' },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(217,70,239,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.15),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="h-5 w-5 text-fuchsia-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Recent Highlights</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vids.map((v, i) => (
            <motion.a
              key={v.id}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="aspect-video bg-slate-800/60 flex items-center justify-center">
                <Youtube className="h-10 w-10 text-white/80 group-hover:text-white transition" />
              </div>
              <div className="p-4">
                <p className="text-white font-semibold">{v.title}</p>
                <p className="text-slate-300/80 text-sm">{v.views} views • {v.length}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-slate-300/80">
          <Trophy className="h-5 w-5 text-amber-300" />
          <p>
            Community tournaments, charity streams, and collabs are a big part of the channel. Join in and be featured here!
          </p>
        </div>
      </div>
    </section>
  );
}
