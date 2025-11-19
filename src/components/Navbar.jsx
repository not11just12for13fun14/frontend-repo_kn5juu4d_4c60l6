import { Menu, X, Gamepad2 } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#highlights", label: "Highlights" },
    { href: "#schedule", label: "Schedule" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-0 blur-xl bg-fuchsia-500/30 rounded-full"></span>
              <Gamepad2 className="relative h-7 w-7 text-fuchsia-400 drop-shadow-[0_0_12px_rgba(217,70,239,0.6)]" />
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">
              Sam <span className="text-fuchsia-400">Echo</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="text-sm text-slate-200/80 hover:text-white transition"
              >
                {it.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-4 py-2 text-sm shadow-[0_0_20px_rgba(217,70,239,0.4)] transition"
            >
              Watch Live
            </a>
          </div>

          <button
            className="md:hidden text-white/90"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-md p-4">
            <div className="flex flex-col gap-3">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="text-sm text-slate-200/90 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  {it.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-xl bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-4 py-2 text-center text-sm"
                onClick={() => setOpen(false)}
              >
                Watch Live
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
