import React from 'react';
import { CERTIFICATIONS_LIST } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';
import { ShieldCheck, Calendar, Hash, Building2, Sparkles, Scale, Layout, Globe, CheckCircle } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Legal':
        return <Scale className="w-5 h-5" />;
      case 'AI & Tools':
        return <Sparkles className="w-5 h-5" />;
      case 'UI/UX & Web':
        return <Layout className="w-5 h-5" />;
      case 'Digital Marketing':
        return <Globe className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-badge text-xs font-mono tracking-wider uppercase">
              <span>Stage 07 / 09</span>
              <span className="text-slate-600">·</span>
              <span>Professional Training</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight text-depth-3d">
              Certifications & Professional Development
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Verified institutional courses, judicial academy programs, and applied AI/design credentials.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_LIST.map((cert, idx) => (
            <ScrollReveal key={cert.id} delay={idx * 120}>
              <Card3D intensity={8} depth={18} className="h-full">
                <div className="p-7 h-full flex flex-col justify-between glass-card rounded-3xl transition-all shadow-xl hover:border-[var(--accent-primary)]">
                  <div className="space-y-4">
                    {/* Top Badge & Icon */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center theme-accent-text shadow-[0_0_12px_var(--theme-glow)]">
                        {getCategoryIcon(cert.category)}
                      </div>
                      <span className="px-3 py-1 rounded-full glass-pill text-slate-300 text-xs font-mono">
                        {cert.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white leading-snug">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm mt-1.5 font-medium">
                        <Building2 className="w-4 h-4 theme-accent-text flex-shrink-0" />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>

                    {/* Batch / Period Information */}
                    {(cert.batch || cert.period) && (
                      <div className="text-xs text-slate-400 space-y-1 pt-1 font-mono">
                        {cert.batch && <div>Batch: {cert.batch}</div>}
                        {cert.period && <div>Duration: {cert.period}</div>}
                      </div>
                    )}
                  </div>

                  {/* Footer with Verification ID and Date */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Calendar className="w-3.5 h-3.5 theme-accent-text" />
                      <span>{cert.date}</span>
                    </div>

                    {cert.certificateId ? (
                      <div 
                        className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg border text-xs font-mono"
                        style={{
                          backgroundColor: 'rgba(var(--bg-card-rgb, 10, 21, 44), 0.8)',
                          borderColor: 'var(--accent-primary)',
                          color: 'var(--accent-primary)',
                        }}
                      >
                        <Hash className="w-3 h-3" />
                        <span>ID: {cert.certificateId}</span>
                      </div>
                    ) : (
                      <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verified Attendance</span>
                      </span>
                    )}
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        {/* Verification Note */}
        <ScrollReveal delay={300}>
          <div className="mt-10 text-center">
            <p className="text-xs font-mono text-slate-500">
              Official training credentials issued by Federal Judicial Academy, DigiSkills Training Program, and Law Students Front Pakistan.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

