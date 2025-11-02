import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-inter text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-10">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            SAMIP GHIMIRE
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 px-6 py-6 text-sm text-slate-400 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Samip Ghimire. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="mailto:samipgh444@gmail.com" className="hover:text-white">samipgh444@gmail.com</a>
            <span>·</span>
            <a href="https://github.com/SamipSGz" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
