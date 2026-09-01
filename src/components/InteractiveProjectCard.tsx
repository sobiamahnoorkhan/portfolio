import React, { useState } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { Card3D } from './Card3D';
import {
  FileText,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  BookOpen,
  Scale,
} from 'lucide-react';

interface InteractiveProjectCardProps {
  project: ProjectItem;
}

export const InteractiveProjectCard: React.FC<InteractiveProjectCardProps> = ({ project }) => {
  const [activeLayer, setActiveLayer] = useState<'overview' | 'document' | 'ai'>('overview');

  const isCitizenLegalAid = project.id === 'citizen-legal-aid';

  return (
    <Card3D intensity={10} depth={24} className="h-full">
      <div className="p-6 sm:p-8 flex flex-col justify-between h-full glass-card rounded-3xl transition-all shadow-2xl relative overflow-hidden group">
        
        {/* Top Badges & Interactive Layer Switcher */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full glass-pill theme-accent-text text-xs font-mono font-medium border border-white/10 shadow-sm">
                {project.type}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                {project.statusLabel}
              </span>
            </div>

            {/* Interactive Layer Toggle for Citizen Legal Aid */}
            {isCitizenLegalAid && (
              <div className="flex items-center gap-1 p-1 rounded-2xl glass-panel text-[11px] font-mono border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveLayer('overview')}
                  className={`px-3 py-1 rounded-xl transition-all cursor-pointer ${
                    activeLayer === 'overview'
                      ? 'theme-btn-primary text-white font-bold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLayer('document')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-xl transition-all cursor-pointer ${
                    activeLayer === 'document'
                      ? 'theme-badge font-bold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileText className="w-3 h-3" />
                  <span>Document</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLayer('ai')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-xl transition-all cursor-pointer ${
                    activeLayer === 'ai'
                      ? 'theme-badge font-bold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>AI Analysis</span>
                </button>
              </div>
            )}
          </div>

          {/* Project Title & Category */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest theme-accent-text block mb-1">
              {project.category || project.badge || 'Project'}
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:opacity-90 transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Dynamic Layer Display */}
          {activeLayer === 'overview' && (
            <div className="space-y-4 transition-all duration-300">
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Factual Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Core Architecture
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl glass-pill text-xs text-slate-300 flex items-start gap-2 border border-white/5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 theme-accent-text mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* LAYER 1: Legal Document View (Real Pakistan Law Context) */}
          {activeLayer === 'document' && (
            <div className="p-4 rounded-2xl glass-panel border border-[var(--accent-primary)] space-y-3 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2 theme-accent-text">
                  <Scale className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase text-white">
                    Raw Legal Document Layer
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full glass-pill text-slate-300">
                  Subordinate Court Filing
                </span>
              </div>

              <div className="space-y-2 font-serif text-xs text-slate-200 bg-black/40 p-3 rounded-xl border border-white/10 leading-relaxed italic">
                <p>
                  "Subject: Application for execution of decree / statutory grievance under procedural statutory provisions..."
                </p>
                <div className="text-[10px] font-mono not-italic text-slate-400 pt-1 border-t border-white/10">
                  Grounding: Complex legal citations & terminology often confusing for unrepresented citizens.
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Citizen Challenge: High Jargon</span>
                <span className="theme-accent-text font-mono">Input Document</span>
              </div>
            </div>
          )}

          {/* LAYER 2: AI Analysis Transformation Layer */}
          {activeLayer === 'ai' && (
            <div className="p-4 rounded-2xl glass-panel border border-[var(--accent-secondary)] space-y-3 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2 theme-accent-secondary-text">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase text-white">
                    AI Analysis & Translation Layer
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full glass-pill theme-accent-secondary-text">
                  Structured Output
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-200 bg-black/40 p-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 theme-accent-text font-semibold font-mono">
                  <span>1. Plain English / Urdu Explanation:</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  Breaks down formal clauses into plain actionable language, explaining citizen rights, required paperwork, and hearing steps.
                </p>
                <div className="pt-1 text-[10px] font-mono text-emerald-400">
                  ✓ Pakistan Law Library cross-references identified
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Accessibility Output</span>
                <span className="theme-accent-secondary-text font-mono">Citizen Empowerment</span>
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack Pills & Footer */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {(project.technologies || []).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg glass-pill text-[11px] font-mono text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <span className="font-mono">Real Concept Architecture</span>
            <span className="theme-accent-text font-semibold flex items-center gap-1">
              <span>Interactive 3D Depth</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

      </div>
    </Card3D>
  );
};
