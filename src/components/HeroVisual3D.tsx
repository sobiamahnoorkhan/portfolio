import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Scale, FileText, Cpu, Sparkles, Shield, Award, Terminal } from 'lucide-react';
import legalTechAvatar from '../assets/images/legal_tech_avatar_1788280759216.jpg';

export const HeroVisual3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaMotion.matches);
    const motionHandler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaMotion.addEventListener('change', motionHandler);

    const touchCheck = window.matchMedia('(hover: none) or (pointer: coarse)');
    setIsTouchDevice(touchCheck.matches);

    return () => mediaMotion.removeEventListener('change', motionHandler);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || isTouchDevice || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to +0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to +0.5

      setMouseOffset({
        x: Math.max(-0.5, Math.min(0.5, x)),
        y: Math.max(-0.5, Math.min(0.5, y)),
      });
    },
    [prefersReducedMotion, isTouchDevice]
  );

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMouseOffset({ x: 0, y: 0 });
  };

  const shouldParallax = !prefersReducedMotion && !isTouchDevice;

  // Multi-tier parallax offsets (proportional depth layers)
  const bgX = shouldParallax ? mouseOffset.x * 10 : 0;
  const bgY = shouldParallax ? mouseOffset.y * 10 : 0;

  const avatarX = shouldParallax ? mouseOffset.x * 18 : 0;
  const avatarY = shouldParallax ? mouseOffset.y * 18 : 0;

  const docX = shouldParallax ? mouseOffset.x * 32 : 0;
  const docY = shouldParallax ? mouseOffset.y * 32 : 0;

  const techX = shouldParallax ? -mouseOffset.x * 28 : 0;
  const techY = shouldParallax ? -mouseOffset.y * 28 : 0;

  const foregroundX = shouldParallax ? mouseOffset.x * 42 : 0;
  const foregroundY = shouldParallax ? mouseOffset.y * 42 : 0;

  const tiltX = shouldParallax ? -mouseOffset.y * 12 : 0;
  const tiltY = shouldParallax ? mouseOffset.x * 12 : 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto aspect-[4/4.2] sm:aspect-[4/4] perspective-1500 select-none"
    >
      {/* 3D Root Frame */}
      <div
        className="relative w-full h-full rounded-3xl border theme-border theme-bg-card backdrop-blur-xl shadow-2xl p-5 sm:p-6 transition-transform duration-300 ease-out transform-style-3d overflow-hidden flex flex-col justify-between"
        style={{
          transform: shouldParallax
            ? `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${isHovering ? 1.015 : 1})`
            : 'none',
          boxShadow: isHovering
            ? '0 30px 60px -15px rgba(6, 182, 212, 0.25), 0 0 35px -5px rgba(59, 130, 246, 0.2)'
            : '0 20px 40px -10px rgba(0, 0, 0, 0.65)',
        }}
      >
        {/* Ambient background glow filaments */}
        <div
          className="absolute -top-16 -right-16 w-60 h-60 rounded-full blur-3xl pointer-events-none transition-all duration-700"
          style={{
            backgroundColor: 'var(--accent-primary)',
            opacity: 0.15,
            transform: `translate3d(${bgX * 1.8}px, ${bgY * 1.8}px, 0)`,
          }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full blur-3xl pointer-events-none transition-all duration-700"
          style={{
            backgroundColor: 'var(--accent-secondary)',
            opacity: 0.15,
            transform: `translate3d(${-bgX * 1.8}px, ${-bgY * 1.8}px, 0)`,
          }}
        />

        {/* Top Header info bar */}
        <div className="flex items-center justify-between border-b border-slate-800/90 pb-3 relative z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full theme-pulse-dot animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
              Legal-Tech Profile Synthesis
            </span>
          </div>
          <span 
            className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 shadow-sm transition-colors duration-500"
            style={{
              backgroundColor: 'rgba(var(--bg-card-rgb, 10, 21, 44), 0.8)',
              borderColor: 'var(--accent-primary)',
              color: 'var(--accent-primary)',
            }}
          >
            <Sparkles className="w-3 h-3" />
            <span>AI + ADVOCATE</span>
          </span>
        </div>

        {/* Interactive 3D Canvas Composition */}
        <div className="relative w-full flex-1 flex items-center justify-center min-h-[280px]">
          
          {/* LAYER 0: Background Neural Ring & Connecting Grid Lines */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${bgX}px, ${bgY}px, -15px)`,
            }}
          >
            {/* Concentric subtle glowing geometric rings */}
            <div 
              className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-dashed animate-spin-slow transition-colors duration-700"
              style={{ borderColor: 'var(--border-subtle)' }} 
            />
            <div 
              className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border transition-colors duration-700" 
              style={{ borderColor: 'rgba(var(--bg-card-rgb, 10, 21, 44), 0.5)' }}
            />
          </div>

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${bgX}px, ${bgY}px, -5px)`,
            }}
          >
            <path
              d="M 60 70 Q 240 180 420 70"
              fill="none"
              stroke="var(--accent-primary)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="opacity-40 transition-all duration-700"
            />
          </svg>

          {/* LAYER 1: Central AI Legal-Tech Avatar with Parallax Frame */}
          <div
            className="relative z-20 flex flex-col items-center transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${avatarX}px, ${avatarY}px, 20px) rotateX(${-tiltX * 0.5}deg) rotateY(${-tiltY * 0.5}deg)`,
            }}
          >
            {/* Avatar Halo Frame */}
            <div className="relative group">
              {/* Animated Outer Glow Ring */}
              <div 
                className="absolute -inset-1.5 rounded-full opacity-60 blur-md group-hover:opacity-90 transition-all duration-700 animate-pulse"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                }}
              />
              
              {/* Inner Frame */}
              <div 
                className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 shadow-2xl overflow-hidden transition-all duration-700"
                style={{
                  background: 'linear-gradient(to bottom, var(--accent-primary), var(--bg-card))',
                  border: '1px solid var(--accent-primary)',
                }}
              >
                <img
                  src={legalTechAvatar}
                  alt="Sobia Mahnoor - Legal-Tech Advocate Avatar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle scanline & shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-full" />
                
                {/* Dynamic light glint sweep on mouse hover */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none transition-transform duration-700"
                  style={{
                    transform: isHovering ? 'rotate(45deg) translateY(-20%)' : 'rotate(45deg) translateY(120%)'
                  }}
                />
              </div>

              {/* Legal Seal Floating Tag */}
              <div 
                className="absolute -bottom-2 -left-2 px-2.5 py-1 rounded-full shadow-lg text-[10px] font-mono flex items-center gap-1.5 backdrop-blur-md z-30 transition-all duration-700"
                style={{
                  backgroundColor: 'rgba(var(--bg-card-rgb, 10, 21, 44), 0.95)',
                  border: '1px solid var(--accent-primary)',
                  color: 'var(--accent-primary)',
                }}
              >
                <Scale className="w-3 h-3" />
                <span className="font-semibold">ADVOCATE</span>
              </div>

              {/* AI Badge Floating Tag */}
              <div 
                className="absolute -top-1 -right-2 px-2.5 py-1 rounded-full shadow-lg text-[10px] font-mono flex items-center gap-1.5 backdrop-blur-md z-30 transition-all duration-700"
                style={{
                  backgroundColor: 'rgba(var(--bg-card-rgb, 10, 21, 44), 0.95)',
                  border: '1px solid var(--accent-secondary)',
                  color: 'var(--accent-secondary)',
                }}
              >
                <Cpu className="w-3 h-3" />
                <span className="font-semibold">LEGAL AI</span>
              </div>
            </div>
          </div>

          {/* LAYER 2: Floating Legal Document (Isometric Tilt & High Depth) */}
          <div
            className="absolute left-1 sm:left-4 top-2 sm:top-4 w-36 sm:w-44 p-3 rounded-xl shadow-xl backdrop-blur-md z-30 transition-all duration-500 ease-out animate-float-slow"
            style={{
              backgroundColor: 'rgba(var(--bg-card-rgb, 10, 21, 44), 0.9)',
              border: '1px solid var(--border-subtle)',
              transform: `translate3d(${docX - 8}px, ${docY - 8}px, 35px) rotate(-4deg)`,
            }}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-1.5">
              <div className="flex items-center gap-1.5 theme-accent-text">
                <FileText className="w-3.5 h-3.5" />
                <span className="text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                  Court Brief
                </span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            </div>

            {/* Document Lines Representation */}
            <div className="space-y-1 opacity-70">
              <div className="h-1.5 w-full rounded bg-slate-700" />
              <div className="h-1.5 w-4/5 rounded bg-slate-700" />
              <div 
                className="h-1.5 w-2/3 rounded" 
                style={{ backgroundColor: 'var(--accent-primary)' }}
              />
            </div>

            <div className="mt-2 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[8px] font-mono text-slate-400">
              <span>Subordinate Courts</span>
              <span className="theme-accent-text">Procedural</span>
            </div>
          </div>

          {/* LAYER 2: Technology & AI Telemetry Node (Opposing Parallax) */}
          <div
            className="absolute right-1 sm:right-4 top-2 sm:top-4 w-36 sm:w-44 p-3 rounded-xl shadow-xl backdrop-blur-md z-30 transition-all duration-500 ease-out animate-float-gentle"
            style={{
              backgroundColor: 'rgba(var(--bg-card-rgb, 10, 21, 44), 0.9)',
              border: '1px solid var(--border-subtle)',
              transform: `translate3d(${techX + 8}px, ${techY - 8}px, 35px) rotate(3deg)`,
            }}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-1.5">
              <div className="flex items-center gap-1.5 theme-accent-secondary-text">
                <Terminal className="w-3.5 h-3.5" />
                <span className="text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                  AI Toolchain
                </span>
              </div>
              <span className="text-[8px] font-mono theme-accent-text">IT Diploma</span>
            </div>

            <div className="space-y-1 text-[9px] text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Legal Prompting</span>
                <span className="theme-accent-text font-mono">NLP</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">UI / Webflow</span>
                <span className="text-emerald-400 font-mono">Prototyped</span>
              </div>
            </div>
          </div>

          {/* LAYER 3: Foreground Synthesis Pill (Highest Parallax Float) */}
          <div
            className="absolute bottom-1 w-full max-w-[280px] sm:max-w-xs p-3 rounded-2xl shadow-2xl z-40 transition-all duration-500 ease-out"
            style={{
              backgroundColor: 'rgba(var(--bg-card-rgb, 10, 21, 44), 0.95)',
              border: '1px solid var(--accent-primary)',
              boxShadow: '0 0 25px var(--theme-glow)',
              transform: `translate3d(${foregroundX}px, ${foregroundY + 4}px, 50px)`,
            }}
          >
            <div className="flex items-center gap-2.5">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-500"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: '#ffffff',
                }}
              >
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono uppercase tracking-wider theme-accent-text font-semibold">
                    Dual Competency
                  </span>
                  <span className="text-[8px] font-mono text-emerald-400">Active</span>
                </div>
                <h4 className="font-cinzel text-xs sm:text-sm font-bold text-white truncate">
                  LAW × AI INNOVATION
                </h4>
              </div>
            </div>
          </div>

          {/* Floating Optical Nodes */}
          <div
            className="absolute top-1/2 left-4 w-2 h-2 rounded-full pointer-events-none animate-ping opacity-60 transition-colors duration-500"
            style={{
              backgroundColor: 'var(--accent-primary)',
              transform: `translate3d(${bgX * 2}px, ${bgY * 2}px, 30px)`,
            }}
          />
          <div
            className="absolute top-1/3 right-6 w-2 h-2 rounded-full pointer-events-none animate-pulse opacity-80 transition-colors duration-500"
            style={{
              backgroundColor: 'var(--accent-secondary)',
              transform: `translate3d(${techX * 1.2}px, ${techY * 1.2}px, 35px)`,
            }}
          />
        </div>

        {/* Bottom Status Bar */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400 relative z-20">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3 h-3 theme-accent-text" />
            <span>Advocate · Subordinate Courts</span>
          </div>
          <span className="theme-accent-text font-medium">3D Layered Parallax</span>
        </div>
      </div>
    </div>
  );
};

