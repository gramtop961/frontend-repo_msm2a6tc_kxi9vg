import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-300/40 via-fuchsia-300/30 to-amber-200/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm">
            <Star className="h-3.5 w-3.5 text-amber-500" />
            New • A minimal landing to say hello
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Hello, World!
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            A clean, modern landing page starter built with React and Tailwind CSS. Ship your ideas faster with a delightful developer experience.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm font-medium shadow hover:shadow-lg transition-shadow"
            >
              <Rocket className="h-4 w-4" />
              Say Hello
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
