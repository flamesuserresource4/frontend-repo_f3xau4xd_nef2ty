import { useState } from 'react';
import { Bug, Send, CheckCircle2 } from 'lucide-react';

export default function StoryTeaser() {
  const [status, setStatus] = useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      e.currentTarget.reset();
      setTimeout(() => setStatus('idle'), 2500);
    }, 800);
  }

  return (
    <section id="report" className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
            <Bug className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Report a bug</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">Describe the issue so we can reproduce it quickly.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Title</label>
            <input
              type="text"
              required
              placeholder="Short, descriptive title"
              className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Steps to reproduce</label>
            <textarea
              required
              rows={4}
              placeholder="1) Go to... 2) Click... 3) See error"
              className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Expected vs actual</label>
            <input
              type="text"
              required
              placeholder="What you expected vs what happened"
              className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-zinc-500">No data is sent anywhere — this is a local demo.</p>
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="inline-flex items-center gap-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium shadow-sm disabled:opacity-60"
            >
              {status === 'success' ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Submitted
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Submit
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
