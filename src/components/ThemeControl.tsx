import React, { useState, useRef, useEffect } from 'react';
import { useTheme, ThemeMode, THEMES } from '../context/ThemeContext';
import {
  Palette,
  Scale,
  Cpu,
  Sparkles,
  Award,
  Shield,
  Terminal,
  Play,
  Pause,
  RotateCw,
  Check,
  ChevronDown,
  Clock,
  SlidersHorizontal,
} from 'lucide-react';

interface ThemeControlProps {
  variant?: 'compact' | 'full' | 'dropdown';
  className?: string;
}

export const ThemeControl: React.FC<ThemeControlProps> = ({ variant = 'compact', className = '' }) => {
  const {
    theme,
    themeConfig,
    isAutoRotate,
    timeLeft,
    cycleDuration,
    setCycleDuration,
    setTheme,
    toggleTheme,
    toggleAutoRotate,
    resetTimer,
    themesList,
  } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeIcon = (iconName: string, className = 'w-3.5 h-3.5') => {
    switch (iconName) {
      case 'Scale':
        return <Scale className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Award':
        return <Award className={className} />;
      case 'Shield':
        return <Shield className={className} />;
      case 'Terminal':
        return <Terminal className={className} />;
      default:
        return <Palette className={className} />;
    }
  };

  // Progress fraction (0 to 1) for the circular progress gauge
  const progressRatio = Math.max(0, Math.min(1, timeLeft / cycleDuration));
  const strokeDashoffset = 56.5 * (1 - progressRatio);

  return (
    <div className={`relative inline-flex items-center ${className}`} ref={dropdownRef}>
      {/* Quick Glassmorphic Theme Switch Bar */}
      <div className="glass-panel flex items-center rounded-2xl p-1 shadow-lg gap-1 border border-white/10">
        {/* Next Theme Quick Step Button */}
        <button
          id="theme-quick-next-btn"
          onClick={toggleTheme}
          title={`Active: ${themeConfig.name}. Click to switch to next theme.`}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer hover:bg-white/10 text-slate-200 hover:text-white"
        >
          <span
            className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor] transition-colors duration-500"
            style={{ backgroundColor: themeConfig.accentHex, color: themeConfig.accentHex }}
          />
          <span className="hidden sm:inline font-sans font-semibold text-xs text-slate-100 truncate max-w-[110px]">
            {themeConfig.name}
          </span>
          <span className="sm:hidden font-sans font-semibold text-xs text-slate-100">
            {themeConfig.name.split(' ')[0]}
          </span>
        </button>

        {/* 2s Auto-Timer Progress Pill & Play/Pause Toggle */}
        <button
          id="theme-auto-rotate-btn"
          onClick={toggleAutoRotate}
          title={
            isAutoRotate
              ? `Auto-cycling theme every ${cycleDuration}s (${timeLeft.toFixed(1)}s left). Click to pause.`
              : `Auto-cycle paused. Click to resume ${cycleDuration}s auto-rotation.`
          }
          className={`flex items-center gap-1.5 px-2 py-1 rounded-xl text-[11px] font-mono transition-all cursor-pointer ${
            isAutoRotate
              ? 'text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          {isAutoRotate ? (
            <>
              <div className="relative w-4 h-4 flex items-center justify-center">
                <svg className="w-4 h-4 -rotate-90" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    className="stroke-slate-700/60 fill-none stroke-[3]"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    className="stroke-cyan-400 fill-none stroke-[3] transition-all duration-100 ease-linear"
                    strokeDasharray={56.5}
                    strokeDashoffset={strokeDashoffset}
                  />
                </svg>
              </div>
              <span className="text-[10px] font-bold tracking-tight">{timeLeft.toFixed(1)}s</span>
              <Pause className="w-2.5 h-2.5 opacity-70 ml-0.5" />
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-slate-400" />
              <span className="text-[10px] text-slate-400 font-semibold">{cycleDuration}s Auto</span>
            </>
          )}
        </button>

        {/* Palette Dropdown Trigger */}
        <button
          id="theme-palette-dropdown-btn"
          onClick={() => setIsOpen(!isOpen)}
          title="Browse all 8 color themes and controls"
          className={`p-1.5 rounded-xl text-slate-300 hover:text-white transition-all cursor-pointer ${
            isOpen ? 'bg-white/15 text-cyan-300' : 'hover:bg-white/5'
          }`}
          aria-expanded={isOpen}
          aria-label="Select Theme Palette"
        >
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
        </button>
      </div>

      {/* Expanded Glassmorphism Palette Dropdown Menu */}
      {isOpen && (
        <div
          id="theme-palette-menu"
          className="glass-panel absolute right-0 top-full mt-2 w-80 sm:w-88 rounded-3xl p-4 z-50 animate-fadeIn shadow-2xl border border-white/15"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-cyan-400" />
              <span className="font-cinzel text-xs font-bold text-white tracking-wider">
                Themes & Glass Morphism
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-300">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>Auto-Rotate:</span>
              <button
                onClick={toggleAutoRotate}
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold cursor-pointer transition-all ${
                  isAutoRotate
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                    : 'bg-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {isAutoRotate ? 'ON (2s)' : 'PAUSED'}
              </button>
            </div>
          </div>

          {/* Speed Selector (2s, 3s, 5s) */}
          <div className="flex items-center justify-between px-2 py-1.5 mb-3 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono">
            <span className="text-slate-400 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3 text-slate-400" />
              Cycle Speed:
            </span>
            <div className="flex items-center gap-1">
              {[2, 3, 5, 8].map((sec) => (
                <button
                  key={sec}
                  onClick={() => {
                    setCycleDuration(sec);
                    resetTimer();
                  }}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                    cycleDuration === sec
                      ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-sm'
                      : 'text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {sec}s
                </button>
              ))}
            </div>
          </div>

          {/* 8 Themes Grid */}
          <div className="space-y-1.5 max-h-[320px] overflow-y-auto pr-1">
            {themesList.map((t) => {
              const isSelected = theme === t.id;
              return (
                <button
                  key={t.id}
                  id={`theme-select-${t.id}`}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-2xl border text-left transition-all cursor-pointer group ${
                    isSelected
                      ? 'bg-white/15 border-white/30 shadow-lg'
                      : 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Theme Swatch & Icon */}
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center border shadow-sm transition-transform group-hover:scale-105 flex-shrink-0"
                      style={{
                        backgroundColor: t.cardHex,
                        borderColor: isSelected ? t.accentHex : t.borderHex,
                        color: t.accentHex,
                        boxShadow: isSelected ? `0 0 12px ${t.glowRgba}` : 'none',
                      }}
                    >
                      {getThemeIcon(t.iconName, 'w-4 h-4')}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-white group-hover:text-cyan-300 truncate">
                          {t.name}
                        </span>
                        <span
                          className="text-[9px] font-mono px-1.5 py-0.2 rounded-full border border-white/10"
                          style={{
                            backgroundColor: `${t.accentHex}20`,
                            color: t.accentHex,
                          }}
                        >
                          {t.category}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-300/80 leading-tight mt-0.5 truncate">
                        {t.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Color dots preview & Checkmark */}
                  <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                    <div className="flex -space-x-1">
                      <span
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: t.bgHex }}
                        title="Background"
                      />
                      <span
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: t.cardHex }}
                        title="Card surface"
                      />
                      <span
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: t.accentHex }}
                        title="Accent"
                      />
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer controls */}
          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Glassmorphism UI enabled</span>
            <button
              onClick={() => {
                resetTimer();
                toggleTheme();
              }}
              className="text-cyan-400 hover:text-cyan-300 cursor-pointer flex items-center gap-1 font-semibold"
            >
              <RotateCw className="w-3 h-3" />
              <span>Next Theme ➔</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
