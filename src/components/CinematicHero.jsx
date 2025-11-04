import { ArrowRight, Sparkle, Shield, Zap } from 'lucide-react';

export default function CinematicHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300">
              <Sparkle className="h-3.5 w-3.5" />
              Smooth, modern and bug-friendly
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Find and fix bugs with confidence
            </h1>
            <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-300">
              A sleek playground where you can report issues, showcase steps to reproduce, and track fixes in style.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#report"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white px-5 py-3 font-medium shadow-lg shadow-fuchsia-600/20 hover:opacity-90 transition"
              >
                Report a bug <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-700 px-5 py-3 font-medium text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition"
              >
                Explore features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> Privacy-first</div>
              <div className="inline-flex items-center gap-2"><Zap className="h-4 w-4" /> Fast & lightweight</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 shadow-lg">
              <div className="h-full w-full grid place-items-center p-6">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500"></div>
                  <p className="mt-4 text-zinc-700 dark:text-zinc-300">Polished UI, delightful DX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
