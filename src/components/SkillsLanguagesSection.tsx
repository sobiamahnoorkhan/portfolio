import React from 'react';
import { LEGAL_SKILLS, TECH_SKILLS, LANGUAGES } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';
import { Scale, Cpu, Languages as LanguagesIcon, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export const SkillsLanguagesSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-badge text-xs font-mono tracking-wider uppercase">
              <span>Stage 08 / 09</span>
              <span className="text-slate-600">·</span>
              <span>Competencies</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight text-depth-3d">
              Skills & Competencies
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Verified capabilities in legal practice, procedural advocacy, and modern technological tools.
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Legal Skills (6 cols) */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={100} className="h-full">
              <Card3D intensity={8} depth={20} className="h-full">
                <div className="p-8 h-full glass-card rounded-3xl shadow-xl flex flex-col justify-between hover:border-[var(--accent-primary)]">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center theme-accent-text shadow-[0_0_12px_var(--theme-glow)]">
                          <Scale className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest theme-accent-text font-semibold">Advocacy & Procedure</span>
                          <h3 className="font-cinzel text-xl font-bold text-white">Legal Practice Skills</h3>
                        </div>
                      </div>
                      <span className="text-xs font-mono theme-accent-text glass-pill px-3 py-1 rounded-full">
                        Courtroom & Office
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {LEGAL_SKILLS.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-3 rounded-2xl glass-pill hover:border-[var(--accent-primary)] transition-all text-xs text-slate-200 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 theme-accent-text flex-shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400">
                    Grounding: Subordinate Courts Litigation & Drafting
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>

          {/* Technology Skills (6 cols) */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={200} className="h-full">
              <Card3D intensity={8} depth={20} className="h-full">
                <div className="p-8 h-full glass-card rounded-3xl shadow-xl flex flex-col justify-between hover:border-[var(--accent-secondary)]">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center theme-accent-secondary-text shadow-[0_0_12px_var(--theme-glow)]">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest theme-accent-secondary-text font-semibold">Digital Toolchains</span>
                          <h3 className="font-cinzel text-xl font-bold text-white">Technology Skills</h3>
                        </div>
                      </div>
                      <span className="text-xs font-mono theme-accent-secondary-text glass-pill px-3 py-1 rounded-full">
                        Applied Tools
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {TECH_SKILLS.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-3 rounded-2xl glass-pill hover:border-[var(--accent-secondary)] transition-all text-xs text-slate-200 font-medium"
                        >
                          <Sparkles className="w-4 h-4 theme-accent-secondary-text flex-shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400">
                    Training: DigiSkills, LSFP AI, Khana-e-Farhang IT Diploma
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>

        </div>

        {/* Languages Block */}
        <div className="max-w-xl mx-auto">
          <ScrollReveal delay={250}>
            <Card3D intensity={6} depth={12}>
              <div className="p-6 glass-card rounded-3xl text-center space-y-4 shadow-xl">
                <div className="flex items-center justify-center gap-2 theme-accent-text">
                  <LanguagesIcon className="w-5 h-5" />
                  <h3 className="font-cinzel text-lg font-bold text-white">Languages</h3>
                </div>
                <div className="flex justify-center gap-4">
                  {LANGUAGES.map((lang, idx) => (
                    <div
                      key={idx}
                      className="px-6 py-2.5 rounded-2xl glass-pill text-sm font-medium text-slate-200 shadow-md border border-white/10"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Professional courtroom, legal drafting, and client communication proficiency.
                </p>
              </div>
            </Card3D>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

