import React from 'react';
import { TECH_JOURNEY_STEPS, HACKATHONS_LIST } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';
import { Sparkles, Terminal, Layers, ArrowRight, Laptop, Lightbulb, Users, CheckCircle2 } from 'lucide-react';

export const TechnologyJourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-badge text-xs font-mono tracking-wider uppercase">
              <span>Learning Roadmap</span>
              <span className="text-slate-600">·</span>
              <span>Skill Evolution</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight text-depth-3d">
              My Technology Journey
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              A continuous path of hands-on learning—from foundational IT education to specialized UI/UX design, prompt engineering, and legal AI application exploration.
            </p>
          </div>
        </ScrollReveal>

        {/* 6-Step Visual Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TECH_JOURNEY_STEPS.map((step, idx) => (
            <ScrollReveal key={step.step} delay={idx * 100}>
              <Card3D intensity={8} depth={18} className="h-full">
                <div className="p-6 h-full flex flex-col justify-between glass-card rounded-3xl transition-all shadow-xl hover:border-[var(--accent-primary)]">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl glass-panel flex items-center justify-center theme-accent-text font-mono text-xs font-bold shadow-[0_0_10px_var(--theme-glow)]">
                        0{step.step}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 px-2.5 py-0.5 rounded-full glass-pill">
                        Progression Step
                      </span>
                    </div>

                    <h3 className="font-cinzel text-lg font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10">
                    <span 
                      className="text-[11px] font-mono px-3 py-1 rounded-full border inline-block"
                      style={{
                        backgroundColor: 'rgba(var(--bg-card-rgb, 10, 21, 44), 0.7)',
                        borderColor: 'var(--accent-primary)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {step.badge}
                    </span>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        {/* Hackathons & Innovation Subsection */}
        <div className="max-w-4xl mx-auto pt-6">
          <ScrollReveal delay={200}>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-4 h-4 theme-accent-text" />
              <h3 className="text-xs font-mono uppercase tracking-widest theme-accent-text font-semibold">
                Hackathons & Innovation
              </h3>
            </div>

            {HACKATHONS_LIST.map((hack) => (
              <Card3D key={hack.id} intensity={6} depth={15} className="w-full">
                <div className="p-8 glass-card rounded-3xl shadow-xl hover:border-[var(--accent-primary)]">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                    <div>
                      <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                        {hack.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Organized by: <strong className="text-slate-300">{hack.organizer}</strong>
                      </p>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-full theme-badge text-xs font-mono font-semibold">
                      {hack.status}
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {hack.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Authentic Participation Record</span>
                    <span className="theme-accent-text">AI & Cloud Technology Exploration</span>
                  </div>
                </div>
              </Card3D>
            ))}
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

