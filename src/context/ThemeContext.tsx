import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

export type ThemeMode =
  | 'legal-navy'
  | 'emerald-matrix'
  | 'amethyst-cyber'
  | 'crimson-velvet'
  | 'solar-amber'
  | 'oceanic-teal'
  | 'cyber-obsidian'
  | 'aurora-sunset';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  category: 'Legal' | 'Tech';
  tagline: string;
  bgHex: string;
  cardHex: string;
  cardRgb: string;
  accentHex: string;
  accentSecondaryHex: string;
  borderHex: string;
  glowRgba: string;
  iconName: string;
}

export const THEMES: Record<ThemeMode, ThemeConfig> = {
  'legal-navy': {
    id: 'legal-navy',
    name: 'Judicial Sapphire',
    category: 'Legal',
    tagline: 'Deep Judicial Navy · Sapphire & Gold Authority',
    bgHex: '#050b18',
    cardHex: '#0a152c',
    cardRgb: '10, 21, 44',
    accentHex: '#38bdf8',
    accentSecondaryHex: '#f59e0b',
    borderHex: '#1d3356',
    glowRgba: 'rgba(56, 189, 248, 0.3)',
    iconName: 'Scale',
  },
  'emerald-matrix': {
    id: 'emerald-matrix',
    name: 'Emerald Justice',
    category: 'Tech',
    tagline: 'Forest Slate · Electric Emerald & Mint Matrix',
    bgHex: '#04140d',
    cardHex: '#092419',
    cardRgb: '9, 36, 25',
    accentHex: '#10b981',
    accentSecondaryHex: '#34d399',
    borderHex: '#1b4d36',
    glowRgba: 'rgba(16, 185, 129, 0.3)',
    iconName: 'Cpu',
  },
  'amethyst-cyber': {
    id: 'amethyst-cyber',
    name: 'Royal Amethyst',
    category: 'Tech',
    tagline: 'Midnight Plum · Neon Violet & Magenta AI',
    bgHex: '#0c0618',
    cardHex: '#170e2e',
    cardRgb: '23, 14, 46',
    accentHex: '#a855f7',
    accentSecondaryHex: '#ec4899',
    borderHex: '#3b1e6d',
    glowRgba: 'rgba(168, 85, 247, 0.3)',
    iconName: 'Sparkles',
  },
  'crimson-velvet': {
    id: 'crimson-velvet',
    name: 'Crimson Sovereign',
    category: 'Legal',
    tagline: 'Imperial Burgundy · Rose Gold & Velvet Law',
    bgHex: '#15050a',
    cardHex: '#260a13',
    cardRgb: '38, 10, 19',
    accentHex: '#f43f5e',
    accentSecondaryHex: '#fb7185',
    borderHex: '#5c182a',
    glowRgba: 'rgba(244, 63, 94, 0.3)',
    iconName: 'Award',
  },
  'solar-amber': {
    id: 'solar-amber',
    name: 'Solar Bronze',
    category: 'Legal',
    tagline: 'Espresso Umber · Gilded Sunlight & Warm Bronze',
    bgHex: '#130d04',
    cardHex: '#221708',
    cardRgb: '34, 23, 8',
    accentHex: '#f59e0b',
    accentSecondaryHex: '#fbbf24',
    borderHex: '#543813',
    glowRgba: 'rgba(245, 158, 11, 0.3)',
    iconName: 'Shield',
  },
  'oceanic-teal': {
    id: 'oceanic-teal',
    name: 'Oceanic Abyss',
    category: 'Tech',
    tagline: 'Abyssal Teal · Pure Cyan & Aquamarine Wave',
    bgHex: '#031418',
    cardHex: '#07232b',
    cardRgb: '7, 35, 43',
    accentHex: '#06b6d4',
    accentSecondaryHex: '#2dd4bf',
    borderHex: '#144855',
    glowRgba: 'rgba(6, 182, 212, 0.3)',
    iconName: 'Terminal',
  },
  'cyber-obsidian': {
    id: 'cyber-obsidian',
    name: 'Cyber Obsidian',
    category: 'Tech',
    tagline: 'Pure Dark Carbon · Electric Sky & Indigo Glare',
    bgHex: '#07080c',
    cardHex: '#11131b',
    cardRgb: '17, 19, 27',
    accentHex: '#38bdf8',
    accentSecondaryHex: '#818cf8',
    borderHex: '#252b3d',
    glowRgba: 'rgba(56, 189, 248, 0.3)',
    iconName: 'Cpu',
  },
  'aurora-sunset': {
    id: 'aurora-sunset',
    name: 'Aurora Mirage',
    category: 'Tech',
    tagline: 'Cosmic Midnight · Vibrant Neon Pink & Twilight Violet',
    bgHex: '#0e081c',
    cardHex: '#191033',
    cardRgb: '25, 16, 51',
    accentHex: '#ec4899',
    accentSecondaryHex: '#8b5cf6',
    borderHex: '#452277',
    glowRgba: 'rgba(236, 72, 153, 0.3)',
    iconName: 'Sparkles',
  },
};

const THEME_ORDER: ThemeMode[] = [
  'legal-navy',
  'emerald-matrix',
  'amethyst-cyber',
  'crimson-velvet',
  'solar-amber',
  'oceanic-teal',
  'cyber-obsidian',
  'aurora-sunset',
];

interface ThemeContextType {
  theme: ThemeMode;
  themeConfig: ThemeConfig;
  isAutoRotate: boolean;
  timeLeft: number; // 0 to 2 seconds (or sub-second progress 0-100)
  cycleDuration: number;
  setCycleDuration: (seconds: number) => void;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  toggleLegalTech: () => void;
  toggleAutoRotate: () => void;
  resetTimer: () => void;
  themesList: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Auto-rotate every 2 seconds by default as requested by user
const DEFAULT_CYCLE_DURATION = 2;

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>('legal-navy');
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [cycleDuration, setCycleDuration] = useState<number>(DEFAULT_CYCLE_DURATION);
  const [timeLeft, setTimeLeft] = useState<number>(DEFAULT_CYCLE_DURATION);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Set theme and apply CSS variables / data-theme attribute
  const applyTheme = useCallback((newTheme: ThemeMode, notify: boolean = false) => {
    setThemeState(newTheme);
    const root = document.documentElement;
    root.setAttribute('data-theme', newTheme);
    root.className = `theme-${newTheme}`;

    const config = THEMES[newTheme];
    root.style.setProperty('--bg-main', config.bgHex);
    root.style.setProperty('--bg-card', config.cardHex);
    root.style.setProperty('--bg-card-rgb', config.cardRgb);
    root.style.setProperty('--accent-primary', config.accentHex);
    root.style.setProperty('--accent-secondary', config.accentSecondaryHex);
    root.style.setProperty('--border-subtle', config.borderHex);
    root.style.setProperty('--theme-glow', config.glowRgba);

    if (notify) {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
      setToastMessage(`${config.name} (${config.category})`);
      toastTimeoutRef.current = setTimeout(() => {
        setToastMessage(null);
      }, 1500);
    }
  }, []);

  const setTheme = useCallback((newTheme: ThemeMode) => {
    applyTheme(newTheme, true);
    setTimeLeft(cycleDuration);
  }, [applyTheme, cycleDuration]);

  const toggleLegalTech = useCallback(() => {
    const nextTheme: ThemeMode = theme === 'legal-navy' ? 'emerald-matrix' : 'legal-navy';
    setTheme(nextTheme);
  }, [theme, setTheme]);

  const toggleTheme = useCallback(() => {
    const currentIndex = THEME_ORDER.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEME_ORDER.length;
    setTheme(THEME_ORDER[nextIndex]);
  }, [theme, setTheme]);

  const toggleAutoRotate = useCallback(() => {
    setIsAutoRotate((prev) => {
      const next = !prev;
      if (next) {
        setTimeLeft(cycleDuration);
      }
      return next;
    });
  }, [cycleDuration]);

  const resetTimer = useCallback(() => {
    setTimeLeft(cycleDuration);
  }, [cycleDuration]);

  // Initialize theme on mount
  useEffect(() => {
    applyTheme('legal-navy', false);
  }, [applyTheme]);

  // 2-second automatic theme changer countdown loop
  useEffect(() => {
    if (!isAutoRotate) return;

    // Tick every 100ms for smooth progress indicators and accurate 2s transitions
    const stepMs = 100;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const nextTime = Math.max(0, +(prev - stepMs / 1000).toFixed(2));
        if (nextTime <= 0.05) {
          // Switch to next theme in cycle
          setThemeState((currTheme) => {
            const currIdx = THEME_ORDER.indexOf(currTheme);
            const nextIdx = (currIdx + 1) % THEME_ORDER.length;
            const nextTheme = THEME_ORDER[nextIdx];
            applyTheme(nextTheme, false);
            return nextTheme;
          });
          return cycleDuration;
        }
        return nextTime;
      });
    }, stepMs);

    return () => clearInterval(interval);
  }, [isAutoRotate, cycleDuration, applyTheme]);

  const themeConfig = THEMES[theme] || THEMES['legal-navy'];
  const themesList = THEME_ORDER.map((id) => THEMES[id]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeConfig,
        isAutoRotate,
        timeLeft,
        cycleDuration,
        setCycleDuration,
        setTheme,
        toggleTheme,
        toggleLegalTech,
        toggleAutoRotate,
        resetTimer,
        themesList,
      }}
    >
      {children}

      {/* Subtle Floating Theme Toast Notice */}
      {toastMessage && (
        <div
          id="theme-switch-toast"
          className="fixed top-20 right-4 sm:right-8 z-50 pointer-events-none animate-fadeIn"
        >
          <div className="glass-panel flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-white shadow-2xl text-xs font-mono border border-white/20">
            <span
              className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ backgroundColor: themeConfig.accentHex, color: themeConfig.accentHex }}
            />
            <span className="font-medium text-slate-200">Theme: {toastMessage}</span>
          </div>
        </div>
      )}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
