import React from 'react';
import { LEGAL_EXPERIENCE } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';
import { Scale, Calendar, MapPin, CheckCircle2, Shield, FileSpreadsheet, Users, Clock } from 'lucide-react';

export const LegalExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-badge text-xs font-mono tracking-wider uppercase">
              <span>Stage 03 / 09</span>
              <span className="text-slate-600">·</span>
              <span>Active Legal Practice</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight text-depth-3d">
              Legal Experience
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Professional legal practice grounded in courtroom procedures, statutory research, and client representation before the Subordinate Courts.
            </p>
          </div>
        </ScrollReveal>

        {/* 3D Main Experience Card */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={150}>
            <Card3D intensity={8} depth={20} className="w-full">
              <div className="p-8 sm:p-10 glass-card rounded-3xl relative shadow-2xl hover:border-[var(--accent-primary)]">
                
                {/* Timeline Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono theme-accent-text tracking-wider uppercase mb-1">
                      <span className="w-2 h-2 rounded-full theme-pulse-dot animate-ping" />
                      <span>Current Practice</span>
                    </div>
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                      {LEGAL_EXPERIENCE.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-slate-300 text-sm mt-1">
                      <span className="flex items-center gap-1 font-medium theme-accent-text">
                        <Scale className="w-4 h-4" />
                        {LEGAL_EXPERIENCE.court}
                      </span>
                      <span className="text-slate-600 hidden sm:inline">|</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        Hyderabad, Pakistan
                      </span>
                    </div>
                  </div>

                  <div className="px-4 py-2 rounded-2xl glass-panel text-right">
                    <span className="flex items-center gap-1.5 text-xs font-mono theme-accent-text font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {LEGAL_EXPERIENCE.period}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Subordinate Courts
                    </span>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  {LEGAL_EXPERIENCE.description}
                </p>

                {/* Detailed Responsibilities List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 border-b border-white/10 pb-2">
                    <Shield className="w-4 h-4 theme-accent-text" />
                    <span>Core Responsibilities & Procedural Duties</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {LEGAL_EXPERIENCE.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-2xl glass-pill hover:border-[var(--accent-primary)] transition-all"
                      >
                        <div className="w-6 h-6 rounded-lg glass-panel flex items-center justify-center theme-accent-text flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-slate-200 font-medium">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ethics and Professional Standards Footer */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Adherence to Bar Council Rules & Judicial Procedural Standards</span>
                  </div>
                  <div className="font-mono theme-accent-text">
                    Advocate: Sindh Bar / Subordinate Courts
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

