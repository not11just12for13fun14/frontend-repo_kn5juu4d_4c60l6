import { CalendarDays, Clock } from 'lucide-react';

const slots = [
  { day: 'Mon', time: '7–10 PM', note: 'Variety Night' },
  { day: 'Wed', time: '7–10 PM', note: 'Ranked Grind' },
  { day: 'Fri', time: '8–Late', note: 'Community Games' },
  { day: 'Sun', time: '1–4 PM', note: 'Chill + IRL' },
];

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-20 bg-slate-900/80">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_50%,rgba(56,189,248,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <CalendarDays className="h-5 w-5 text-fuchsia-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Stream Schedule</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {slots.map((s) => (
            <div key={s.day} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-white font-semibold">{s.day}</p>
              <div className="mt-2 flex items-center gap-2 text-slate-300/90">
                <Clock className="h-4 w-4" />
                <span>{s.time}</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
