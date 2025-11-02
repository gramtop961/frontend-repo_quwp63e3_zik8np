import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Mail, Phone, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 py-24 sm:px-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Open to AI/ML & Full‑Stack roles
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I'm <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Samip Ghimire</span>
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300 sm:text-lg">
          AI/ML Engineer and Mentor focused on AI agents, LLMs, RAG, and human-centered products. I build practical, scalable systems across NLP, vision, and full‑stack web.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/SamipSGz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
            <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
          </a>
          <a
            href="mailto:samipgh444@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400/90 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="tel:+9779864478696"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> +977-9864478696
          </a>
        </div>

        <div className="mt-6 text-xs text-slate-400">
          Kathmandu, Nepal · samipgh444@gmail.com
        </div>
      </div>
    </section>
  );
};

export default Hero;
