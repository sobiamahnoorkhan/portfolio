import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Scale, Mail, Phone, MapPin, ArrowUp, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#050811] border-t border-slate-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Identity & Credentials */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-cinzel text-lg font-bold text-white tracking-wide">
                {PERSONAL_INFO.name}
              </span>
            </div>
            
            <p className="text-cyan-300 font-medium text-xs">
              {PERSONAL_INFO.role} | {PERSONAL_INFO.tagline}
            </p>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Practicing before Subordinate Courts in Hyderabad, combining academic grounding in law, commerce, and IT with ongoing development in Artificial Intelligence.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'education', label: 'Education' },
                { id: 'projects', label: 'Projects' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider mb-3">
              Official Contact
            </h4>
            
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 hover:underline">
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-cyan-300">
                {PERSONAL_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Github className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:underline"
              >
                github.com/{PERSONAL_INFO.githubUsername}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Linkedin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:underline"
              >
                linkedin.com/in/{PERSONAL_INFO.linkedinUsername}
              </a>
            </div>

            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Positioning: Where Law Meets Technology
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Sobia Mahnoor. All rights reserved. Subordinate Courts, Hyderabad.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
