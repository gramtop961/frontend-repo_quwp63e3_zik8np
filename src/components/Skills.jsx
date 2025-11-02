import React from 'react';
import { Cpu, Database, Code, Bot } from 'lucide-react';

const SkillBadge = ({ label }) => (
  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{label}</span>
);

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-slate-950 px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-2">
          <Bot className="h-5 w-5 text-emerald-400" />
          <h2 className="text-xl font-semibold">Skills</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 flex items-center gap-2 text-emerald-300">
              <Cpu className="h-4 w-4" />
              <h3 className="font-semibold">AI / ML</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['AI Agents', 'Computer Vision', 'NLP', 'LLM', 'RAG'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 flex items-center gap-2 text-emerald-300">
              <Database className="h-4 w-4" />
              <h3 className="font-semibold">Data & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Pandas', 'NumPy', 'scikit-learn'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 flex items-center gap-2 text-emerald-300">
              <Code className="h-4 w-4" />
              <h3 className="font-semibold">Full‑Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'FastAPI'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-slate-300">
              <span className="text-xs">Soft: Teamwork, Adaptability, Problem Solving, Focus & Diligence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
