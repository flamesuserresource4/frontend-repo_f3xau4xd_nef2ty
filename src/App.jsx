/*
  App.jsx — Main entry UI for Kalamestan cinematic landing
  Author: Flames.Blue
  Usage: Renders a cinematic hero, teaser, and feature grid with Tailwind and Framer Motion.
*/
import Navbar from './components/Navbar.jsx';
import CinematicHero from './components/CinematicHero.jsx';
import StoryTeaser from './components/StoryTeaser.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';

function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-indigo-50 dark:from-neutral-950 dark:to-neutral-900 selection:bg-fuchsia-200 selection:text-neutral-900 dark:selection:bg-fuchsia-400/30 dark:selection:text-white">
      <Navbar />
      <main>
        <CinematicHero />
        <StoryTeaser />
        <FeatureGrid />
      </main>
      <footer className="mt-8 sm:mt-14 border-t border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-950/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center text-sm text-neutral-600 dark:text-neutral-300" dir="rtl">
          ساخته‌شده با عشق برای کنجکاوی کودکان — نسخهٔ نمایشی کَلَمِستان
        </div>
      </footer>
    </div>
  );
}

export default App;
