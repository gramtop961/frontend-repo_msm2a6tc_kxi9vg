import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Hello World. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="mailto:hello@example.com" className="hover:text-slate-900">Email</a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">X</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
