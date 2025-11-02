import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="mb-6 flex items-center gap-2">
    <Icon className="h-5 w-5 text-emerald-400" />
    <h2 className="text-xl font-semibold">{title}</h2>
  </div>
);

const Item = ({ title, org, time, bullets }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <h3 className="text-base font-semibold">{title}</h3>
      <span className="text-xs text-slate-400">{time}</span>
    </div>
    <div className="mt-1 text-sm text-emerald-300">{org}</div>
    {bullets && bullets.length > 0 && (
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )}
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-slate-950 px-6 py-16 text-white sm:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <SectionTitle icon={Briefcase} title="Professional Experience" />
          <div className="space-y-4">
            <Item
              title="AI/ML Engineer, ML Mentor"
              org="Builders Academy"
              time="Jan 2025 – Mar 2025"
              bullets={[
                'Led development of AI agents, LLMs, and RAG systems with blockchain integration.',
                'Designed AI-driven solutions for secure, decentralized applications.',
                'Mentored teams on ML best practices, optimization, and deployment.'
              ]}
            />
            <Item
              title="Data Analyst Intern"
              org="360DigiTMG"
              time="Mar 2023 – May 2023"
              bullets={[
                'Analyzed medical inventory data to optimize stock levels and availability.',
                'Built reports on turnover, stockouts, and procurement metrics.'
              ]}
            />
          </div>

          <div className="mt-10">
            <SectionTitle icon={Award} title="Achievements" />
            <div className="space-y-4">
              <Item
                title="Second Runner Up, Global IME AI/ML Hackathon 2025"
                org="Hybrid revenue prediction with DL + gradient boosting and robust features."
                time="2025"
              />
              <Item
                title="Winner, Hack-A-Week @ LOCUS 2025"
                org="Built a lip reading system from AV-HuBERT for the deaf community."
                time="2025"
              />
              <Item
                title="First Runner-Up, Dataverse @ LOCUS 2024 — Docsumo"
                org="Document data extraction with PaddleOCR and OpenAI APIs."
                time="2024"
              />
            </div>
          </div>
        </div>

        <div>
          <SectionTitle icon={GraduationCap} title="Education & Fellowships" />
          <div className="space-y-4">
            <Item
              title="B.E. in Computer Engineering"
              org="Pulchowk Campus"
              time="2022 – Present"
              bullets={[
                'Semester scores: I/I 81%, I/II 88%, II/I 82%, II/II 84%, III/I 83%, III/II 83%'
              ]}
            />
            <Item
              title="Plus 2 in Science (GPA 3.56)"
              org="St. Xavier’s College"
              time="2019 – 2021"
            />
            <Item
              title="AI Student"
              org="Annual Nepal AI School by NAAMII"
              time="Dec 2023 – Jan 2024"
            />
            <Item
              title="AI Fellow"
              org="Fusemachines"
              time="Mar 2024 – Nov 2024"
            />
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-base font-semibold">Certifications</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                <li>Fundamentals of AI Agents Using RAG and LangChain — IBM</li>
                <li>Multi AI Agent Systems with crewAI — Deeplearning.ai</li>
                <li>Improving DNNs: Hyperparameters, Regularization & Optimization — Deeplearning.ai</li>
                <li>Convolutional Neural Networks — Deeplearning.ai</li>
                <li>Neural Networks and Deep Learning — Deeplearning.ai</li>
                <li>Microdegree in Artificial Intelligence — Fusemachines</li>
                <li>Machine Learning Specialization — Deeplearning.ai</li>
                <li>Intermediate Python — DataCamp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
