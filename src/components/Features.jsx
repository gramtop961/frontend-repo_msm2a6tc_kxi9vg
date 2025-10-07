import React from 'react';
import { Zap, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Fast & Modern',
    description:
      'Vite + React + Tailwind for an instant dev experience and blazing fast builds.',
    icon: Zap,
  },
  {
    title: 'Secure by default',
    description:
      'Best practices baked in. Sensible defaults and accessible components.',
    icon: Shield,
  },
  {
    title: 'Beautiful UI',
    description:
      'Utility-first styling with polished components for a delightful look and feel.',
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Why you'll love it</h2>
          <p className="mt-3 text-slate-600">
            Start simple, scale as you go. Everything you need to say hello to the world.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
