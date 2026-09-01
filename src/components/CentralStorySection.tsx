import React from 'react';
import { CENTRAL_STORY_STEPS, REAL_PROJECTS } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';
import { Scale, FileText, AlertCircle, Cpu, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

interface CentralStorySectionProps {
  onNavigate: (sectionId: string) => void;
}

export const CentralStorySection: React.FC<CentralStorySectionProps> = ({ onNavigate }) => {
  const centralProject = REAL_PROJECTS.find((p) => p.id === 'citizen-legal-aid') || REAL_PROJECTS[0];

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Scale className="w-5 h-5" />;
      case 1:
        return <FileText className="w-5 h-5" />;
      case 2:
        return <AlertCircle className="w-5 h-5" />;
      case 3:
        return <Cpu className="w-5 h-5" />;
      case 4:
        return <Sparkles className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="story" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-badge text-xs font-mono tracking-wider uppercase">
              <span>The Central Story</span>
              <span className="text-slate-600">·</span>
              <span>Core Narrative</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight text-depth-3d">
              From Legal Practice to Legal Technology
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              The narrative of identifying real-world citizen barriers during legal practice and applying AI and technology training to conceptualize practical solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* 5-Step Horizontal / Vertical Progression Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-16">
          {CENTRAL_STORY_STEPS.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="h-full">
              <div className="relative group h-full">
                <Card3D intensity={10} depth={15} className="h-full">
                  <div className="p-5 h-full flex flex-col justify-between glass-card rounded-2xl transition-all shadow-lg hover:border-[var(--accent-primary)]">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center theme-accent-text shadow-[0_0_10px_var(--theme-glow)]">
                          {getStepIcon(idx)}
                        </div>
                        <span className="font-mono text-xs text-slate-500 font-bold">
                          0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-cinzel text-sm font-bold text-white leading-snug">
                          {step.title}
                        </h4>
                        <span className="text-[11px] font-mono theme-accent-text block mt-0.5">
                          {step.role}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Central Anchor Project Showcase: Citizen Legal Aid & Document Explainer */}
        <div className="max-w-5xl mx-auto">
          <ScrollReveal delay={250}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full theme-pulse-dot" />
              <h3 className="text-xs font-mono uppercase tracking-widest theme-accent-text font-semibold">
                Central Narrative Example
              </h3>
            </div>

            <Card3D intensity={8} depth={25} className="w-full">
              <div className="p-8 sm:p-10 glass-card theme-card-highlight rounded-3xl shadow-2xl relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3.5 py-1 rounded-full theme-badge text-xs font-mono font-semibold">
                        {centralProject.type}
                      </span>
                      <span className="px-3.5 py-1 rounded-full glass-pill text-slate-300 text-xs font-mono">
                        {centralProject.statusLabel}
                      </span>
                    </div>

                    <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                      {centralProject.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {centralProject.description}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => onNavigate('projects')}
                        className="theme-btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                      >
                        <span>Explore Project Blueprint & Features</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 glass-panel rounded-2xl p-5 space-y-3 border border-white/10">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 border-b border-white/10 pb-2 flex items-center justify-between">
                      <span>Key Concept Pillars</span>
                      <span className="theme-accent-text">Pakistani Legal Context</span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 theme-accent-text mt-0.5 flex-shrink-0" />
                        <span>Legal Document & Terminology Explanations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 theme-accent-text mt-0.5 flex-shrink-0" />
                        <span>Multilingual Support for Citizen Accessibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 theme-accent-text mt-0.5 flex-shrink-0" />
                        <span>Complaint Drafting Assistance & Issue Matching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 theme-accent-text mt-0.5 flex-shrink-0" />
                        <span>Connection with Pakistan Law Library</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </Card3D>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

