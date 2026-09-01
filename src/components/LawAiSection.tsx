import React from 'react';
import { LAW_AI_MATRIX } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { LawAiPipelineAnimation } from './LawAiPipelineAnimation';
import { ScrollReveal } from './ScrollReveal';
import { Scale, Sparkles, Plus, ArrowRight, FileText, Search, ShieldCheck, Database, Cpu, Terminal, Layers, FileCheck } from 'lucide-react';

export const LawAiSection: React.FC = () => {
  return (
    <section id="law-ai" className="py-20 px-4 sm:px-6 lg:px-8 relative theme-bg-main">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-cyan-300 text-xs font-mono tracking-wider uppercase border border-cyan-500/30">
              <span>Stage 05 / 09</span>
              <span className="text-slate-500">·</span>
              <span>Domain Intersection</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight text-depth-3d">
              Where Law Meets Artificial Intelligence
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-2 pt-1">
              <span className="px-3 py-1 rounded-full glass-pill text-xs font-medium text-slate-300">
                Exploring Legal Technology
              </span>
              <span className="px-3 py-1 rounded-full glass-pill border border-cyan-500/40 text-xs font-medium text-cyan-300">
                Exploring AI for Legal Applications
              </span>
            </div>
            <p className="text-slate-300/80 text-base sm:text-lg leading-relaxed pt-2">
              Examining how generative AI tools, prompt structuring, and document reasoning can assist legal comprehension and procedural workflows.
            </p>
          </div>
        </ScrollReveal>

        {/* Signature Animation Visual Identity: LAW -> TECHNOLOGY -> AI -> LEGAL TECHNOLOGY */}
        <ScrollReveal delay={150}>
          <LawAiPipelineAnimation />
        </ScrollReveal>

        {/* 3D Visual Matrix: LAW × AI = LEGAL TECHNOLOGY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Block: LAW */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={200}>
              <Card3D intensity={8} depth={18} className="h-full">
                <div className="p-7 glass-card rounded-3xl h-full shadow-xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl glass-panel flex items-center justify-center text-cyan-400 shadow-[0_0_12px_var(--theme-glow)]">
                        <Scale className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">Foundational Discipline</span>
                        <h3 className="font-cinzel text-xl font-bold text-white">LAW</h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">Domain Grounding</span>
                  </div>

                  <div className="space-y-3">
                    {LAW_AI_MATRIX.lawSide.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl glass-pill flex items-start gap-3 border border-white/5"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0 shadow-[0_0_6px_currentColor]" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                          <p className="text-xs text-slate-300/80 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>

          {/* Center Connector: Multiplication / Intersection */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0">
            <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-cyan-400 shadow-[0_0_20px_var(--theme-glow)] animate-pulse">
              <span className="text-xl font-bold font-mono">×</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase mt-2">
              Intersection
            </span>
          </div>

          {/* Right Block: AI */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={200}>
              <Card3D intensity={8} depth={18} className="h-full">
                <div className="p-7 glass-card rounded-3xl h-full shadow-xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl glass-panel flex items-center justify-center text-purple-400 shadow-[0_0_12px_var(--theme-glow)]">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">Applied Technology</span>
                        <h3 className="font-cinzel text-xl font-bold text-white">AI</h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">Exploratory Tools</span>
                  </div>

                  <div className="space-y-3">
                    {LAW_AI_MATRIX.aiSide.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl glass-pill flex items-start gap-3 border border-white/5"
                      >
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0 shadow-[0_0_6px_currentColor]" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                          <p className="text-xs text-slate-300/80 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>

        {/* Synthesis Result Block: LEGAL TECHNOLOGY */}
        <ScrollReveal delay={250}>
          <Card3D intensity={6} depth={15}>
            <div className="p-8 glass-panel rounded-3xl text-center space-y-4 shadow-[0_0_40px_var(--theme-glow)] border border-white/15">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-400/40 text-cyan-300 text-xs font-mono">
                <span>RESULTING FOCUS</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white tracking-wide text-depth-3d">
                {LAW_AI_MATRIX.result.title}
              </h3>
              <p className="text-slate-200 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
                {LAW_AI_MATRIX.result.description}
              </p>
            </div>
          </Card3D>
        </ScrollReveal>
      </div>
    </section>
  );
};

