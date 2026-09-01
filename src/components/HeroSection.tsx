import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroNameAnimation } from './HeroNameAnimation';
import { HeroVisual3D } from './HeroVisual3D';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, Compass, Mail, ShieldCheck, Github, Linkedin } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient 3D geometric grid & soft lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-blue-700/10 to-indigo-900/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Sequenced Reveal */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Sequenced Hero Name Reveal (SOBIA MAHNOOR -> ADVOCATE -> LAW × AI × TECHNOLOGY) */}
            <HeroNameAnimation
              name={PERSONAL_INFO.name}
              role={PERSONAL_INFO.role}
              tagline={PERSONAL_INFO.tagline}
              positioning={PERSONAL_INFO.positioning}
              badge={PERSONAL_INFO.badge}
            />

            {/* Factual Description */}
            <ScrollReveal delay={300}>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                {PERSONAL_INFO.summary}
              </p>
            </ScrollReveal>

            {/* Location & Practice pill */}
            <ScrollReveal delay={400}>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-300 font-mono">
                <div className="glass-pill flex items-center gap-2 px-3.5 py-2 rounded-2xl">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Subordinate Courts, Hyderabad</span>
                </div>
                <div className="glass-pill flex items-center gap-2 px-3.5 py-2 rounded-2xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
                  <span>Active Practice Since Dec 4, 2025</span>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Action Buttons */}
            <ScrollReveal delay={500}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="hero-btn-explore"
                  onClick={() => onNavigate('projects')}
                  className="theme-btn-primary px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 group cursor-pointer active:scale-95"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  id="hero-btn-journey"
                  onClick={() => onNavigate('story')}
                  className="glass-pill px-5 py-3.5 rounded-2xl font-medium text-sm text-slate-200 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Compass className="w-4 h-4 theme-accent-text" />
                  <span>View Legal & AI Journey</span>
                </button>

                <button
                  id="hero-btn-contact"
                  onClick={() => onNavigate('contact')}
                  className="glass-pill px-5 py-3.5 rounded-2xl font-medium text-sm theme-accent-text hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </button>

                <a
                  id="hero-btn-github"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-pill px-4 py-3.5 rounded-2xl font-medium text-sm text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  title="Open GitHub Profile"
                >
                  <Github className="w-4 h-4 theme-accent-text" />
                  <span>GitHub</span>
                </a>

                <a
                  id="hero-btn-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-pill px-4 py-3.5 rounded-2xl font-medium text-sm text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  title="Open LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 theme-accent-secondary-text" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive 3D Visual Centerpiece */}
          {/* LAW + TECHNOLOGY + AI with Parallax, Floating Document & Glowing Nodes */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={200}>
              <HeroVisual3D />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

