import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Text Emotion Detector + Voice Response',
    stack: 'Python · Streamlit · Transformers · pyttsx3',
    points: [
      'Detects emotions (joy, sadness, anger) from text with DistilBERT.',
      'Speech synthesis adapts tone based on detected emotion.'
    ]
  },
  {
    title: 'Text Summarizer App',
    stack: 'Python · Streamlit · BART',
    points: [
      'Abstractive and extractive summarization with Hugging Face models.'
    ]
  },
  {
    title: 'Scientific Reasoning Transparency Tool',
    stack: 'Python · Streamlit · LLMs · CrewAI',
    points: [
      'Visualizes evidence chains and links claims to peer‑reviewed sources.'
    ]
  },
  {
    title: 'LLM‑Based Literature Review Assistant',
    stack: 'PyTorch · NLP · LangChain · CrewAI',
    points: ['Fine‑tuned open models; extracts methods, findings, and gaps.']
  },
  { title: 'Vision Speak', stack: 'Flutter · AV‑HuBERT', points: ['Real‑time lip reading for accessibility.'] },
  { title: 'GigaGit', stack: 'React · FastAPI · MongoDB · LLM', points: ['Gamified GitHub with AI feedback & badges.'] },
  { title: 'Digital Ally', stack: 'React · FastAPI · Firebase · LLM', points: ['Anonymous reporting, chatbot, and alerts.'] },
  { title: 'Smaran', stack: 'React Native · FastAPI · MongoDB · Whisper', points: ['Assistive app for dementia patients.'] },
  { title: 'MindMate', stack: 'React · FastAPI · LangChain · Ollama', points: ['AI mental health assistant with history.'] },
  { title: 'AR Shopping App', stack: 'Flutter · ARCore', points: ['3D models from videos with AR visualization.'] },
  { title: 'Movie Recommendation System', stack: 'scikit‑learn · NumPy · pandas', points: ['Content‑based filtering using cosine similarity.'] },
  { title: 'DSA Algorithm Visualizer', stack: 'React', points: ['Interactive visualizations for sorting and pathfinding.'] }
];

const ProjectCard = ({ title, stack, points, index }) => (
  <motion.div
    className="group relative rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45, ease: 'easeOut', delay: Math.min(index * 0.05, 0.4) }}
  >
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-1 text-xs text-emerald-300">{stack}</p>
      </div>
      <Sparkles className="h-4 w-4 text-emerald-400 opacity-80" />
    </div>
    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <a
            href="https://github.com/SamipSGz"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-emerald-300 hover:underline"
          >
            View more <ExternalLink className="ml-1 inline h-3 w-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((proj, i) => (
            <ProjectCard key={proj.title} index={i} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
