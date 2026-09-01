import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';
import { GraduationCap, Award, BookOpen, Laptop, Sparkles, Building, Calendar, Star } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const prominentItems = EDUCATION_LIST.filter((item) => item.isKeyHighlight);
  const otherItems = EDUCATION_LIST.filter((item) => !item.isKeyHighlight);

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-badge text-xs font-mono tracking-wider uppercase">
              <span>Stage 04 / 09</span>
              <span className="text-slate-600">·</span>
              <span>Academic Background</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight text-depth-3d">
              Academic Background & Qualifications
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Formal degrees and diploma programs forming the interdisciplinary foundation of Law, Commerce, and Information Technology.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Top Highlight: Law & Information Technology */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 theme-accent-text" />
            <h3 className="text-xs font-mono uppercase tracking-widest theme-accent-text font-semibold">
              Key Pillars of Law × Technology Positioning
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {prominentItems.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 150} direction={idx === 0 ? 'right' : 'left'}>
                <Card3D intensity={10} depth={24} className="h-full">
                  <div
                    className="p-8 h-full flex flex-col justify-between rounded-3xl border glass-card transition-all shadow-xl hover:border-[var(--accent-primary)]"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center border glass-panel ${
                            item.category === 'Law'
                              ? 'theme-accent-text shadow-[0_0_12px_var(--theme-glow)]'
                              : 'theme-accent-secondary-text shadow-[0_0_12px_var(--theme-glow)]'
                          }`}
                        >
                          {item.category === 'Law' ? (
                            <GraduationCap className="w-7 h-7" />
                          ) : (
                            <Laptop className="w-7 h-7" />
                          )}
                        </div>
                        <span
                          className={`px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider ${
                            item.category === 'Law'
                              ? 'theme-badge'
                              : 'glass-pill theme-accent-secondary-text'
                          }`}
                        >
                          {item.category} Foundation
                        </span>
                      </div>

                      <div>
                        <h4 className="font-cinzel text-2xl font-bold text-white tracking-wide">
                          {item.degree}
                        </h4>
                        <div className="flex items-center gap-2 text-slate-300 text-sm mt-1">
                          <Building className="w-4 h-4 text-slate-400" />
                          <span className="font-medium">{item.institution}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 theme-accent-text" />
                        <span>{item.period}</span>
                      </div>
                      {item.grade && (
                        <span className="px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold">
                          {item.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Additional Qualifications Grid */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-slate-400" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
              Commerce & Secondary Qualifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherItems.map((item, idx) => (
              <ScrollReveal key={item.id} delay={100 + idx * 100}>
                <Card3D intensity={8} depth={15} className="h-full">
                  <div className="p-6 h-full flex flex-col justify-between glass-card rounded-2xl transition-all shadow-lg hover:border-white/20">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 px-2.5 py-0.5 rounded-full glass-pill">
                          {item.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {item.period}
                        </span>
                      </div>

                      <h4 className="font-cinzel text-lg font-bold text-white">
                        {item.degree}
                      </h4>

                      <p className="text-xs text-slate-300 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span>{item.institution}</span>
                      </p>
                    </div>

                    {item.grade && (
                      <div className="mt-6 pt-3 border-t border-white/10">
                        <span className="inline-block px-2.5 py-0.5 rounded-lg glass-pill text-emerald-400 text-xs font-mono font-medium">
                          {item.grade}
                        </span>
                      </div>
                    )}
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

