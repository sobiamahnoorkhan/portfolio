import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { LegalExperienceSection } from './components/LegalExperienceSection';
import { EducationSection } from './components/EducationSection';
import { LawAiSection } from './components/LawAiSection';
import { CentralStorySection } from './components/CentralStorySection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { TechnologyJourneySection } from './components/TechnologyJourneySection';
import { SkillsLanguagesSection } from './components/SkillsLanguagesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SectionPagination } from './components/SectionPagination';
import { NAVIGATION_ITEMS } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const sectionOrder = NAVIGATION_ITEMS.map((item) => item.id);

  const navigateToSection = useCallback((sectionId: string) => {
    const currentIndex = sectionOrder.indexOf(activeSection);
    const newIndex = sectionOrder.indexOf(sectionId);
    
    if (newIndex !== -1 && currentIndex !== -1) {
      setSlideDirection(newIndex >= currentIndex ? 1 : -1);
    }

    setActiveSection(sectionId);

    if (!isPresentationMode) {
      const element = document.getElementById(sectionId);
      if (element) {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection, isPresentationMode, sectionOrder]);

  const navigateNext = useCallback(() => {
    const currentIndex = sectionOrder.indexOf(activeSection);
    if (currentIndex < sectionOrder.length - 1) {
      navigateToSection(sectionOrder[currentIndex + 1]);
    }
  }, [activeSection, sectionOrder, navigateToSection]);

  const navigatePrev = useCallback(() => {
    const currentIndex = sectionOrder.indexOf(activeSection);
    if (currentIndex > 0) {
      navigateToSection(sectionOrder[currentIndex - 1]);
    }
  }, [activeSection, sectionOrder, navigateToSection]);

  // Global Keyboard Navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when typing in inputs/textareas
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        navigateNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        navigatePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        navigateToSection('home');
      } else if (e.key === 'End') {
        e.preventDefault();
        navigateToSection('contact');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateNext, navigatePrev, navigateToSection]);

  // Touch Swipe Gesture Support (Swipe left -> Next, Swipe right -> Prev)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartXRef.current === null || touchStartYRef.current === null) return;
      
      const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
      const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;
      
      // Check if horizontal swipe is dominant and significant (> 60px)
      if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < 0) {
          // Swipe Left -> Go to Next Stage (L → R flow)
          navigateNext();
        } else {
          // Swipe Right -> Go to Previous Stage
          navigatePrev();
        }
      }

      touchStartXRef.current = null;
      touchStartYRef.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigateNext, navigatePrev]);

  // IntersectionObserver for Continuous Scroll Mode
  useEffect(() => {
    if (isPresentationMode) return;

    const sections = [
      'home',
      'about',
      'experience',
      'education',
      'law-ai',
      'story',
      'projects',
      'certifications',
      'journey',
      'skills',
      'contact',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'story') {
            setActiveSection('law-ai');
          } else if (id === 'journey') {
            setActiveSection('certifications');
          } else {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isPresentationMode]);

  const togglePresentationMode = () => {
    setIsPresentationMode((prev) => {
      const nextMode = !prev;
      if (!nextMode) {
        setTimeout(() => {
          const element = document.getElementById(activeSection);
          if (element) {
            const navOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      }
      return nextMode;
    });
  };

  // Render individual stage view for Presentation Deck Mode
  const renderCurrentStage = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div>
            <HeroSection onNavigate={navigateToSection} />
            <SectionPagination currentSectionId="home" onNavigate={navigateToSection} />
          </div>
        );
      case 'about':
        return (
          <div>
            <AboutSection onNavigate={navigateToSection} />
            <SectionPagination currentSectionId="about" onNavigate={navigateToSection} />
          </div>
        );
      case 'experience':
        return (
          <div>
            <LegalExperienceSection />
            <SectionPagination currentSectionId="experience" onNavigate={navigateToSection} />
          </div>
        );
      case 'education':
        return (
          <div>
            <EducationSection />
            <SectionPagination currentSectionId="education" onNavigate={navigateToSection} />
          </div>
        );
      case 'law-ai':
        return (
          <div>
            <LawAiSection />
            <CentralStorySection onNavigate={navigateToSection} />
            <SectionPagination currentSectionId="law-ai" onNavigate={navigateToSection} />
          </div>
        );
      case 'projects':
        return (
          <div>
            <ProjectsSection />
            <SectionPagination currentSectionId="projects" onNavigate={navigateToSection} />
          </div>
        );
      case 'certifications':
        return (
          <div>
            <CertificationsSection />
            <TechnologyJourneySection />
            <SectionPagination currentSectionId="certifications" onNavigate={navigateToSection} />
          </div>
        );
      case 'skills':
        return (
          <div>
            <SkillsLanguagesSection />
            <SectionPagination currentSectionId="skills" onNavigate={navigateToSection} />
          </div>
        );
      case 'contact':
        return (
          <div>
            <ContactSection />
            <SectionPagination currentSectionId="contact" onNavigate={navigateToSection} />
            <Footer onNavigate={navigateToSection} />
          </div>
        );
      default:
        return <HeroSection onNavigate={navigateToSection} />;
    }
  };

  return (
    <div className="min-h-screen theme-bg-main text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 relative font-sans transition-colors duration-500">
      {/* Fixed Horizontal Navigation with Left-to-Right Controls */}
      <Navigation
        activeSection={activeSection}
        onNavigate={navigateToSection}
        isPresentationMode={isPresentationMode}
        onTogglePresentationMode={togglePresentationMode}
      />

      {/* Main Content: Presentation Deck Mode vs Continuous Scroll Mode */}
      {isPresentationMode ? (
        <main className="pt-20 min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-x-hidden">
          <AnimatePresence mode="wait" custom={slideDirection}>
            <motion.div
              key={activeSection}
              custom={slideDirection}
              initial={{ opacity: 0, x: slideDirection > 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDirection > 0 ? -80 : 80 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="w-full"
            >
              {renderCurrentStage()}
            </motion.div>
          </AnimatePresence>
        </main>
      ) : (
        <main className="relative">
          <HeroSection onNavigate={navigateToSection} />
          <SectionPagination currentSectionId="home" onNavigate={navigateToSection} />

          <AboutSection onNavigate={navigateToSection} />
          <SectionPagination currentSectionId="about" onNavigate={navigateToSection} />

          <LegalExperienceSection />
          <SectionPagination currentSectionId="experience" onNavigate={navigateToSection} />

          <EducationSection />
          <SectionPagination currentSectionId="education" onNavigate={navigateToSection} />

          <LawAiSection />
          <CentralStorySection onNavigate={navigateToSection} />
          <SectionPagination currentSectionId="law-ai" onNavigate={navigateToSection} />

          <ProjectsSection />
          <SectionPagination currentSectionId="projects" onNavigate={navigateToSection} />

          <CertificationsSection />
          <TechnologyJourneySection />
          <SectionPagination currentSectionId="certifications" onNavigate={navigateToSection} />

          <SkillsLanguagesSection />
          <SectionPagination currentSectionId="skills" onNavigate={navigateToSection} />

          <ContactSection />
          <SectionPagination currentSectionId="contact" onNavigate={navigateToSection} />

          {/* Footer */}
          <Footer onNavigate={navigateToSection} />
        </main>
      )}
    </div>
  );
}

