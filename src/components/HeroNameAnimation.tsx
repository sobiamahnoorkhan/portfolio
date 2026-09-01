import React, { useEffect, useState } from 'react';

interface HeroNameAnimationProps {
  name: string;
  role: string;
  tagline: string;
  positioning: string;
  badge: string;
}

export const HeroNameAnimation: React.FC<HeroNameAnimationProps> = ({
  name,
  role,
  tagline,
  positioning,
  badge,
}) => {
  const [stage, setStage] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setStage(3);
      return;
    }

    // Sequenced reveal:
    // 0: Initial Mount
    // 1: Name (0ms)
    // 2: Advocate (300ms)
    // 3: Law × AI × Technology & Positioning (600ms)
    const t1 = setTimeout(() => setStage(1), 100);
    const t2 = setTimeout(() => setStage(2), 450);
    const t3 = setTimeout(() => setStage(3), 850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="space-y-4 text-left">
      {/* 1. Badge Pill */}
      <div
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-badge text-xs font-semibold tracking-wider transition-all duration-700"
        style={{
          opacity: stage >= 1 ? 1 : 0,
          transform: stage >= 1 ? 'translateY(0)' : 'translateY(10px)',
        }}
      >
        <span className="w-2 h-2 rounded-full theme-pulse-dot animate-pulse" />
        <span className="font-mono tracking-widest">{badge}</span>
      </div>

      {/* 2. Primary Name: SOBIA MAHNOOR with smooth reveal and light sweep */}
      <div className="relative overflow-hidden py-1">
        <h1
          className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] text-depth-3d transition-all duration-1000 ease-out select-none"
          style={{
            opacity: stage >= 1 ? 1 : 0,
            transform: stage >= 1 ? 'translateY(0) scale(1)' : 'translateY(18px) scale(0.98)',
            letterSpacing: stage >= 1 ? '-0.02em' : '0.08em',
          }}
        >
          <span className="relative inline-block">
            {name}
            {/* Subtle light sweep overlay */}
            <span
              className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay animate-light-sweep"
              aria-hidden="true"
            />
          </span>
        </h1>
      </div>

      {/* 3. Role: ADVOCATE with high contrast & dynamic theme aura */}
      <div
        className="flex items-center gap-3 transition-all duration-700 ease-out"
        style={{
          opacity: stage >= 2 ? 1 : 0,
          transform: stage >= 2 ? 'translateY(0)' : 'translateY(14px)',
        }}
      >
        <div 
          className="h-4 w-1 rounded-full" 
          style={{ background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))' }}
        />
        <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-white">
          {role}
        </span>
        <span 
          className="text-xs font-mono px-2.5 py-0.5 rounded border transition-colors duration-500"
          style={{
            backgroundColor: 'rgba(var(--bg-card-rgb, 10, 21, 44), 0.7)',
            borderColor: 'var(--accent-primary)',
            color: 'var(--accent-primary)',
          }}
        >
          Subordinate Courts
        </span>
      </div>

      {/* 4. Sequence: LAW × AI × TECHNOLOGY / Positioning */}
      <div
        className="space-y-2 pt-1 transition-all duration-800 ease-out"
        style={{
          opacity: stage >= 3 ? 1 : 0,
          transform: stage >= 3 ? 'translateY(0)' : 'translateY(16px)',
        }}
      >
        <div 
          className="text-lg sm:text-2xl font-display font-semibold tracking-wide flex items-center gap-2"
          style={{
            color: 'var(--accent-primary)',
            textShadow: '0 0 20px var(--theme-glow)',
          }}
        >
          <span>{tagline}</span>
        </div>

        <h2 className="text-base sm:text-xl font-normal text-slate-300 tracking-normal text-depth-subtle">
          {positioning} · <span className="theme-accent-text font-medium">Advocate Exploring AI & Legal Technology</span>
        </h2>
      </div>
    </div>
  );
};
