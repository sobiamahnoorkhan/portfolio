import React from 'react';
import { NAVIGATION_ITEMS } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

interface SectionPaginationProps {
  currentSectionId: string;
  onNavigate: (sectionId: string) => void;
}

export const SectionPagination: React.FC<SectionPaginationProps> = ({
  currentSectionId,
  onNavigate,
}) => {
  const currentIndex = NAVIGATION_ITEMS.findIndex((item) => item.id === currentSectionId);
  if (currentIndex === -1) return null;

  const prevItem = currentIndex > 0 ? NAVIGATION_ITEMS[currentIndex - 1] : null;
  const nextItem = currentIndex < NAVIGATION_ITEMS.length - 1 ? NAVIGATION_ITEMS[currentIndex + 1] : null;

  return (
    <div className="mt-16 pt-8 border-t border-slate-800/80 max-w-5xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Previous Chapter */}
        {prevItem ? (
          <button
            onClick={() => onNavigate(prevItem.id)}
            className="w-full sm:w-auto flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group cursor-pointer text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-cyan-950 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 border border-slate-700 group-hover:border-cyan-500/30 transition-all flex-shrink-0">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-cyan-400">
                ← Previous Stage 0{prevItem.step}
              </div>
              <div className="text-sm font-semibold text-white">
                {prevItem.label}
              </div>
            </div>
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* Center Progress Pill */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400">
          <span className="text-cyan-400">0{currentIndex + 1}</span>
          <span className="text-slate-600">/</span>
          <span>0{NAVIGATION_ITEMS.length}</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-300 font-sans">{NAVIGATION_ITEMS[currentIndex].label}</span>
        </div>

        {/* Next Chapter */}
        {nextItem ? (
          <button
            onClick={() => onNavigate(nextItem.id)}
            className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group cursor-pointer text-right"
          >
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-cyan-400">
                Next Stage 0{nextItem.step} →
              </div>
              <div className="text-sm font-semibold text-white">
                {nextItem.label}
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 group-hover:bg-cyan-900 flex items-center justify-center text-cyan-400 border border-cyan-500/30 group-hover:border-cyan-400 transition-all flex-shrink-0">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        ) : (
          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono cursor-pointer transition-all"
          >
            <span>Back to Presentation Start (01 Home)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
