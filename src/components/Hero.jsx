import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 60, damping: 14 }
  }
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const child = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />
      </div>

      <motion.div
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 py-24 sm:px-10"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <motion.div variants={container} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Open to AI/ML & Full‑Stack roles
        </motion.div>

        <motion.h1 variants={child} className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I'm <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Samip Ghimire</span>
        </motion.h1>
        <motion.p variants={child} className="mt-4 max-w-2xl text-slate-300 sm:text-lg">
          AI/ML Engineer and Mentor focused on AI agents, LLMs, RAG, and human-centered products. I build practical, scalable systems across NLP, vision, and full‑stack web.
        </motion.p>

        <motion.div variants={child} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/SamipSGz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium ring-emerald-400/30 transition hover:bg-white/10 focus:outline-none focus:ring"
          >
            <Github className="h-4 w-4" /> GitHub
            <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
          </a>
          <a
            href="mailto:samipgh444@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400/90 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-400/40"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="tel:+9779864478696"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium ring-emerald-400/30 transition hover:bg-white/10 focus:outline-none focus:ring"
          >
            <Phone className="h-4 w-4" /> +977-9864478696
          </a>
        </motion.div>

        <motion.div variants={child} className="mt-6 text-xs text-slate-400">
          Kathmandu, Nepal · samipgh444@gmail.com
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
