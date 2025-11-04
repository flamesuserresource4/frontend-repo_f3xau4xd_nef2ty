import { Rocket, Shield, Zap, Bug } from 'lucide-react';

const features = [
  {
    title: 'Launch fast',
    description: 'Opinionated setup lets you ship features without wrestling configs.',
    icon: Rocket,
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Secure by default',
    description: ' sensible patterns and accessibility baked in from the start.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Lightning quick',
    description: 'Vite + React + Tailwind for instant feedback while you build.',
    icon: Zap,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Bug friendly',
    description: 'Clear reporting flow to help you track and squash issues gracefully.',
    icon: Bug,
    color: 'from-amber-500 to-orange-500',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Everything you need to debug beautifully
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">
          Focused, modern components that feel great to use and easy to reason about.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-6 hover:shadow-lg transition-shadow"
          >
            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${f.color} text-white`}>
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{f.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
