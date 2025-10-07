import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="about" className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Built to say hello beautifully</h2>
            <p className="mt-3 text-slate-600">
              This minimal landing page is a perfect starting point for your next idea. Edit content, tweak styles, and deploy in minutes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
