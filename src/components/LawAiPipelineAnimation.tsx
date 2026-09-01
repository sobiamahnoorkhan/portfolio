import React, { useState, useEffect, useRef } from 'react';
import { Scale, Cpu, Sparkles, Shield, FileText, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

export const LawAiPipelineAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hasTriggered, setHasTriggered] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setActiveStep(4);
      setHasTriggered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setHasTriggered(true);
            playSequence();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  const playSequence = () => {
    setActiveStep(1); // LAW
    setTimeout(() => setActiveStep(2), 700); // LAW -> TECH
    setTimeout(() => setActiveStep(3), 1500); // TECH -> AI
    setTimeout(() => setActiveStep(4), 2300); // RESOLVES INTO LEGAL TECHNOLOGY
  };

  const handleReplay = () => {
    setActiveStep(0);
    setTimeout(() => playSequence(), 100);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto rounded-3xl border theme-border theme-bg-card backdrop-blur-xl p-6 sm:p-10 shadow-2xl overflow-hidden"
    >
      {/* Background radial ambient highlights */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: 'var(--accent-primary)' }} />
      <div className="absolute -bottom-24 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: 'var(--accent-secondary)' }} />

      {/* Header with Replay Action */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 mb-8 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-badge text-xs font-mono tracking-wider uppercase mb-1.5">
            <span className="w-2 h-2 rounded-full theme-pulse-dot animate-pulse" />
            <span>Signature Animation Pipeline</span>
          </div>
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            LAW → TECHNOLOGY → AI
          </h3>
        </div>

        <button
          onClick={handleReplay}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass-pill text-xs font-mono theme-accent-text hover:border-[var(--accent-primary)] transition-all cursor-pointer"
          title="Replay sequence animation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Replay Flow</span>
        </button>
      </div>

      {/* Main Flow Stage: 3 Connected Nodes + Resolution Hub */}
      <div className="relative z-10 space-y-10">
        {/* Node Pipeline Progression */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Connecting Animated SVG Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] -translate-y-1/2 h-1 pointer-events-none z-0">
            {/* Background line */}
            <div className="w-full h-0.5 bg-white/10" />
            
            {/* Stage 1 -> 2 Glowing Progress */}
            <div
              className="absolute top-0 left-0 h-0.5 transition-all duration-700 ease-out shadow-[0_0_12px_var(--theme-glow)]"
              style={{
                width: activeStep >= 2 ? '50%' : '0%',
                background: `linear-gradient(to right, var(--accent-primary), var(--accent-secondary))`
              }}
            />
            {/* Stage 2 -> 3 Glowing Progress */}
            <div
              className="absolute top-0 left-1/2 h-0.5 transition-all duration-700 ease-out shadow-[0_0_12px_var(--theme-glow)]"
              style={{
                width: activeStep >= 3 ? '50%' : '0%',
                background: `linear-gradient(to right, var(--accent-secondary), var(--accent-primary))`
              }}
            />
          </div>

          {/* NODE 1: LAW */}
          <div
            className={`relative z-10 p-6 rounded-3xl border transition-all duration-500 glass-card ${
              activeStep >= 1
                ? 'border-[var(--accent-primary)] shadow-[0_0_30px_var(--theme-glow)] scale-100'
                : 'opacity-50 scale-95 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all glass-panel ${
                  activeStep >= 1
                    ? 'theme-accent-text border-[var(--accent-primary)] shadow-[0_0_15px_var(--theme-glow)]'
                    : 'text-slate-500'
                }`}
              >
                <Scale className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold theme-accent-text">01</span>
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Grounding & Origin
              </span>
              <h4 className="font-cinzel text-lg font-bold text-white">LAW</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Advocate practice, court procedures, litigation drafting, and statutory interpretation before Subordinate Courts.
              </p>
            </div>
          </div>

          {/* NODE 2: TECHNOLOGY */}
          <div
            className={`relative z-10 p-6 rounded-3xl border transition-all duration-500 glass-card ${
              activeStep >= 2
                ? 'border-[var(--accent-secondary)] shadow-[0_0_30px_var(--theme-glow)] scale-100'
                : 'opacity-50 scale-95 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all glass-panel ${
                  activeStep >= 2
                    ? 'theme-accent-secondary-text border-[var(--accent-secondary)] shadow-[0_0_15px_var(--theme-glow)]'
                    : 'text-slate-500'
                }`}
              >
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold theme-accent-secondary-text">02</span>
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Technical Foundation
              </span>
              <h4 className="font-cinzel text-lg font-bold text-white">TECHNOLOGY</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Information Technology Diploma, Webflow, UI/UX systems, and digital structure modeling.
              </p>
            </div>
          </div>

          {/* NODE 3: AI */}
          <div
            className={`relative z-10 p-6 rounded-3xl border transition-all duration-500 glass-card ${
              activeStep >= 3
                ? 'border-[var(--accent-primary)] shadow-[0_0_30px_var(--theme-glow)] scale-100'
                : 'opacity-50 scale-95 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all glass-panel ${
                  activeStep >= 3
                    ? 'theme-accent-text border-[var(--accent-primary)] shadow-[0_0_15px_var(--theme-glow)]'
                    : 'text-slate-500'
                }`}
              >
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold theme-accent-text">03</span>
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Intelligence Layer
              </span>
              <h4 className="font-cinzel text-lg font-bold text-white">AI EXPLORATION</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Generative AI tools, prompt engineering, structured reasoning, and plain-language document analysis.
              </p>
            </div>
          </div>

        </div>

        {/* Central Resolution: LEGAL TECHNOLOGY */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border transition-all duration-700 glass-card ${
            activeStep >= 4
              ? 'border-[var(--accent-primary)] shadow-[0_0_50px_var(--theme-glow)] opacity-100 translate-y-0 scale-100'
              : 'opacity-40 translate-y-4 scale-98 border-white/10'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full theme-badge text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>RESOLVES INTO FINAL SYNTHESIS</span>
              </div>
              <h4 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white text-depth-3d">
                LEGAL TECHNOLOGY
              </h4>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                Applying artificial intelligence and digital design to bridge citizen information gaps, enhance document clarity, and assist legal research workflows in Pakistan.
              </p>
            </div>

            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="px-5 py-3 rounded-2xl glass-panel text-center border border-[var(--accent-primary)]">
                <span className="block text-xs font-mono text-slate-400">Positioning</span>
                <span className="font-cinzel text-sm font-bold theme-accent-text">Where Law Meets Tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
