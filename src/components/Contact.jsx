import { Twitch, Youtube, Twitter, Mail } from 'lucide-react';

export default function Contact() {
  const links = [
    { icon: Twitch, label: 'Twitch', href: '#', color: 'text-violet-400' },
    { icon: Youtube, label: 'YouTube', href: '#', color: 'text-red-400' },
    { icon: Twitter, label: 'Twitter / X', href: '#', color: 'text-sky-400' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@samecho.gg', color: 'text-emerald-400' },
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_80%,rgba(217,70,239,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Connect with Sam Echo</h2>
        <p className="text-slate-300/90">Follow on your favorite platforms and never miss a stream.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {links.map(({ icon: Icon, label, href, color }) => (
            <a
              key={label}
              href={href}
              className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-4 text-white transition flex items-center justify-center gap-2"
            >
              <Icon className={`h-5 w-5 ${color}`} />
              <span className="text-sm font-medium">{label}</span>
            </a>
          ))}
        </div>

        <p className="mt-10 text-slate-400 text-sm">Business: hello@samecho.gg</p>
      </div>
    </section>
  );
}
