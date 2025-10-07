import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-500 text-white font-bold">HW</span>
          <span className="font-semibold tracking-tight">Hello World</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <a
          href="#features"
          className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-shadow"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
