import React from 'react';
import { Cpu, Database, Code, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillBadge = ({ label, delay = 0 }) => (
  <motion.span
    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.35, delay }}
  >
    {label}
  </motion.span>
);

const Card = ({ icon: Icon, title, children, delay = 0 }) => (
  <motion.div
    className="rounded-xl border border-white/10 bg-white/5 p-5"
    initial={{ opacity: 0, y: 20, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: 'easeOut', delay }}
  >
    <div className="mb-3 flex items-center gap-2 text-emerald-300">
      <Icon className="h-4 w-4" />
      <h3 className="font-semibold">{title}</h3>
    </div>
    {children}
  </motion.div>
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
          <Card icon={Cpu} title="AI / ML" delay={0.05}>
            <div className="flex flex-wrap gap-2">
              {['AI Agents', 'Computer Vision', 'NLP', 'LLM', 'RAG'].map((s, i) => (
                <SkillBadge key={s} label={s} delay={0.05 + i * 0.05} />
              ))}
            </div>
          </Card>

          <Card icon={Database} title="Data & Tools" delay={0.12}>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Pandas', 'NumPy', 'scikit-learn'].map((s, i) => (
                <SkillBadge key={s} label={s} delay={0.12 + i * 0.05} />
              ))}
            </div>
          </Card>

          <Card icon={Code} title="Full‑Stack" delay={0.18}>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'FastAPI'].map((s, i) => (
                <SkillBadge key={s} label={s} delay={0.18 + i * 0.05} />
              ))}
            </div>
            <motion.div
              className="mt-3 text-slate-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <span className="text-xs">Soft: Teamwork, Adaptability, Problem Solving, Focus & Diligence</span>
            </motion.div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
