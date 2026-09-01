import React from 'react';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';
import { Scale, Cpu, CheckCircle2, GraduationCap, ArrowRight, ShieldCheck, Sparkles, BookOpen, Layers } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-badge text-xs font-mono tracking-wider uppercase">
              <span>Stage 02 / 09</span>
              <span className="text-slate-600">·</span>
              <span>Profile & Background</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight text-depth-3d">
              About Me
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              A dual-grounded profile combining disciplined legal advocacy with an active, structured exploration of modern technology and artificial intelligence.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Side-by-Side 3D Perspective Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Legal Professional */}
          <ScrollReveal direction="right" delay={100}>
            <Card3D intensity={10} depth={25} className="h-full">
              <div className="p-8 h-full flex flex-col justify-between glass-card rounded-3xl transition-all shadow-xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center theme-accent-text shadow-[0_0_12px_var(--theme-glow)]">
                        <Scale className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-widest theme-accent-text font-semibold">
                          Primary Discipline
                        </span>
                        <h3 className="font-cinzel text-xl font-bold text-white">Legal Professional</h3>
                      </div>
                    </div>
                    <span className="px-3.5 py-1 rounded-full glass-pill text-xs font-mono text-slate-200">
                      Advocate
                    </span>
                  </div>

                  {/* Narrative */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    As an Advocate practicing before the Subordinate Courts in Hyderabad, my work is grounded in procedural rigor, case preparation, statutory analysis, and court proceedings.
                  </p>

                  {/* Core Pillars */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key Legal Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        "Court Proceedings & Procedural Law",
                        "Subordinate Courts Jurisdiction",
                        "Legal Drafting & Case Files",
                        "Statutory Interpretation",
                        "Client Communication & Ethics",
                        "Judicial Training Compliance"
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2.5 rounded-xl glass-pill text-xs text-slate-200 border border-white/5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 theme-accent-text flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Education Connection */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 theme-accent-text" />
                    <span>L.L.B & B.COM (1st Division)</span>
                  </span>
                  <button
                    onClick={() => onNavigate('experience')}
                    className="theme-accent-text hover:text-white flex items-center gap-1 font-medium cursor-pointer transition-colors"
                  >
                    <span>Experience Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </Card3D>
          </ScrollReveal>

          {/* Card 2: Technology / AI Learning */}
          <ScrollReveal direction="left" delay={200}>
            <Card3D intensity={10} depth={25} className="h-full">
              <div className="p-8 h-full flex flex-col justify-between glass-card rounded-3xl transition-all shadow-xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center theme-accent-secondary-text shadow-[0_0_12px_var(--theme-glow)]">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-widest theme-accent-secondary-text font-semibold">
                          Expanding Domain
                        </span>
                        <h3 className="font-cinzel text-xl font-bold text-white">Technology & AI Learning</h3>
                      </div>
                    </div>
                    <span className="px-3.5 py-1 rounded-full glass-pill text-xs font-mono theme-accent-secondary-text">
                      Active Development
                    </span>
                  </div>

                  {/* Narrative */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Complementing my legal practice with an advance diploma in Information Technology and structured training in Artificial Intelligence tools, prompt engineering, UI/UX, and Webflow to build practical legal tech concepts.
                  </p>

                  {/* Core Pillars */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Applied Learning Areas
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        "Prompt Engineering for Law",
                        "AI Tools & Document Processing",
                        "Advance Diploma in IT",
                        "UI/UX Design & Webflow",
                        "Citizen Accessibility Concepts",
                        "Collaborative AI Hackathons"
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2.5 rounded-xl glass-pill text-xs text-slate-200 border border-white/5"
                        >
                          <Sparkles className="w-3.5 h-3.5 theme-accent-secondary-text flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Education Connection */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 theme-accent-secondary-text" />
                    <span>IT Diploma · DigiSkills · LSFP AI</span>
                  </span>
                  <button
                    onClick={() => onNavigate('law-ai')}
                    className="theme-accent-secondary-text hover:text-white flex items-center gap-1 font-medium cursor-pointer transition-colors"
                  >
                    <span>Explore Law × AI</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </Card3D>
          </ScrollReveal>
        </div>

        {/* Grounding Callout */}
        <ScrollReveal delay={300}>
          <div className="mt-10 p-6 rounded-3xl glass-panel text-center max-w-4xl mx-auto border border-white/10">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="theme-accent-text font-semibold">Positioning Note:</strong> I approach technological innovation from the lens of an active legal practitioner — identifying real citizen barriers, complex terminology challenges, and procedural friction, then leveraging AI and design tools to conceptualize accessible solutions.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
