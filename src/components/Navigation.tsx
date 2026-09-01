import React, { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS, PERSONAL_INFO } from '../data/portfolioData';
import { ThemeControl } from './ThemeControl';
import {
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Scale,
  Sparkles,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Layers,
  Github,
  Linkedin,
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isPresentationMode?: boolean;
  onTogglePresentationMode?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  isPresentationMode = false,
  onTogglePresentationMode,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentIndex = NAVIGATION_ITEMS.findIndex((item) => item.id === activeSection);
  const safeIndex = currentIndex !== -1 ? currentIndex : 0;
  const activeStep = safeIndex + 1;
  const progressPercentage = ((activeStep - 1) / (NAVIGATION_ITEMS.length - 1)) * 100;

  const prevItem = safeIndex > 0 ? NAVIGATION_ITEMS[safeIndex - 1] : null;
  const nextItem = safeIndex < NAVIGATION_ITEMS.length - 1 ? NAVIGATION_ITEMS[safeIndex + 1] : null;

  const handleItemClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isPresentationMode
            ? 'glass-nav shadow-2xl py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Logo / Identity */}
            <a
              id="nav-logo"
              href="#home"
              onClick={(e) => handleItemClick(e, 'home')}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-2xl p-1"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl glass-panel flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_var(--theme-glow)] transition-all duration-300">
                <Scale className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-sm sm:text-lg font-bold tracking-wide text-white flex items-center gap-1.5">
                  {PERSONAL_INFO.name}
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-300/80 tracking-wider uppercase font-mono truncate max-w-[170px] sm:max-w-none">
                  Advocate · Law × Tech
                </span>
              </div>
            </a>

            {/* Desktop Left-to-Right Horizontal Presentation Navigation */}
            <nav
              id="desktop-nav-items"
              className="hidden xl:flex items-center glass-panel rounded-full px-2 py-1 shadow-lg"
              aria-label="Main Navigation"
            >
              {/* Fast Prev jump */}
              <button
                onClick={() => prevItem && onNavigate(prevItem.id)}
                disabled={!prevItem}
                title={prevItem ? `Previous: ${prevItem.label}` : 'At first stage'}
                className="p-1 rounded-full text-slate-400 hover:text-cyan-300 disabled:opacity-20 cursor-pointer disabled:cursor-not-allowed transition-colors mr-1"
                aria-label="Navigate to previous stage"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-1">
                {NAVIGATION_ITEMS.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      id={`nav-item-${item.id}`}
                      href={item.href}
                      onClick={(e) => handleItemClick(e, item.id)}
                      className={`relative px-2.5 py-1 rounded-full text-xs font-medium tracking-wide transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 ${
                        isActive
                          ? 'text-white bg-white/20 border border-white/30 shadow-[0_0_16px_var(--theme-glow)] font-semibold scale-[1.03]'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span className={`text-[10px] font-mono ${isActive ? 'text-cyan-300 font-bold' : 'text-slate-400'}`}>
                        0{idx + 1}
                      </span>
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_currentColor]" />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Fast Next jump */}
              <button
                onClick={() => nextItem && onNavigate(nextItem.id)}
                disabled={!nextItem}
                title={nextItem ? `Next: ${nextItem.label}` : 'At last stage'}
                className="p-1 rounded-full text-slate-400 hover:text-cyan-300 disabled:opacity-20 cursor-pointer disabled:cursor-not-allowed transition-colors ml-1"
                aria-label="Navigate to next stage"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </nav>

            {/* Right Action: Theme Switcher, GitHub, Stage Counter, Let's Connect CTA & Mobile Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Control: Legal/Tech Quick Toggle & 10s Auto Rotate */}
              <ThemeControl className="hidden sm:inline-flex" />

              {/* GitHub Link */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center justify-center w-9 h-9 rounded-2xl glass-panel hover:bg-white/15 text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
                title={`GitHub: @${PERSONAL_INFO.githubUsername}`}
              >
                <Github className="w-4 h-4 text-cyan-400" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center justify-center w-9 h-9 rounded-2xl glass-panel hover:bg-white/15 text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
                title={`LinkedIn: ${PERSONAL_INFO.linkedinUsername}`}
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>

              {/* Stepper info on tablet */}
              <div className="hidden lg:flex xl:hidden items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-300">
                <span>STAGE 0{activeStep}/09</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-200 font-sans truncate max-w-[120px]">
                  {NAVIGATION_ITEMS[safeIndex]?.label}
                </span>
              </div>

              {/* Presentation Mode Switcher Button (if handler provided) */}
              {onTogglePresentationMode && (
                <button
                  onClick={onTogglePresentationMode}
                  title={isPresentationMode ? 'Switch to Continuous Scroll' : 'Switch to Presentation Deck Mode'}
                  className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-mono border transition-all cursor-pointer ${
                    isPresentationMode
                      ? 'glass-panel text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_var(--theme-glow)]'
                      : 'glass-pill text-slate-300 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden xl:inline">{isPresentationMode ? 'Deck' : 'Scroll'}</span>
                </button>
              )}

              {/* Prominent CTA: Let's Connect */}
              <a
                id="nav-cta-connect"
                href="#contact"
                onClick={(e) => handleItemClick(e, 'contact')}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-[0_4px_20px_-4px_rgba(6,182,212,0.5)] hover:shadow-[0_4px_25px_-2px_rgba(6,182,212,0.7)] border border-white/20 transition-all duration-300 active:scale-95 group"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Mobile Menu Button */}
              <button
                id="nav-mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded-2xl glass-panel text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Presentation Progress Bar */}
        <div className="w-full h-[2px] bg-white/10 mt-2.5 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300 ease-out shadow-[0_0_8px_var(--theme-glow)]"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="xl:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-md pt-20 px-4 pb-8 flex flex-col justify-between animate-fadeIn"
        >
          <div className="bg-[#0b1329] border border-slate-800 rounded-2xl p-4 shadow-2xl space-y-1 mt-2">
            <div className="px-3 py-2 text-xs font-mono text-cyan-400 uppercase tracking-widest border-b border-slate-800 flex items-center justify-between mb-2">
              <span>Presentation Stages (L → R)</span>
              <span>Stage 0{activeStep}/09</span>
            </div>
            
            {/* Mobile Prev / Next Quick Actions */}
            <div className="grid grid-cols-2 gap-2 pb-2 mb-2 border-b border-slate-800/80">
              <button
                onClick={() => {
                  if (prevItem) {
                    onNavigate(prevItem.id);
                    setIsMobileMenuOpen(false);
                  }
                }}
                disabled={!prevItem}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 text-cyan-400" />
                <span>Prev Stage</span>
              </button>

              <button
                onClick={() => {
                  if (nextItem) {
                    onNavigate(nextItem.id);
                    setIsMobileMenuOpen(false);
                  }
                }}
                disabled={!nextItem}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {NAVIGATION_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs ${isActive ? 'text-cyan-400 font-bold' : 'text-slate-500'}`}>
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-600'}`} />
                </a>
              );
            })}
          </div>

          <div className="mt-4 space-y-2">
            {/* Theme switcher on mobile */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0e162e] border border-slate-800">
              <span className="text-xs font-mono text-slate-300">Theme & 10s Cycle</span>
              <ThemeControl />
            </div>

            {/* GitHub Profile direct link on mobile */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub: @{PERSONAL_INFO.githubUsername}</span>
              </span>
              <span className="text-cyan-400 text-[10px]">Open ↗</span>
            </a>

            {/* LinkedIn Profile direct link on mobile */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn: {PERSONAL_INFO.linkedinUsername}</span>
              </span>
              <span className="text-blue-400 text-[10px]">Open ↗</span>
            </a>

            {onTogglePresentationMode && (
              <button
                onClick={() => {
                  onTogglePresentationMode();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono text-cyan-300 bg-slate-900 border border-slate-800"
              >
                <Layers className="w-4 h-4" />
                <span>Toggle: {isPresentationMode ? 'Switch to Continuous Scroll' : 'Switch to Deck Mode (L→R)'}</span>
              </button>
            )}

            <a
              id="mobile-nav-cta-connect"
              href="#contact"
              onClick={(e) => handleItemClick(e, 'contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-950 border border-cyan-400/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
