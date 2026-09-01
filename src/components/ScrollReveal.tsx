import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 20,
  duration = 650,
  threshold = 0.12,
  once = true,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, once, prefersReducedMotion]);

  const getTransform = () => {
    if (prefersReducedMotion || isVisible) {
      return 'none';
    }

    let translate = '';
    switch (direction) {
      case 'up':
        translate = `translate3d(0, ${distance}px, 0)`;
        break;
      case 'down':
        translate = `translate3d(0, -${distance}px, 0)`;
        break;
      case 'left':
        translate = `translate3d(${distance}px, 0, 0)`;
        break;
      case 'right':
        translate = `translate3d(-${distance}px, 0, 0)`;
        break;
      case 'none':
        translate = 'translate3d(0, 0, 0)';
        break;
    }

    return `${translate} scale(0.97)`;
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: prefersReducedMotion ? 1 : isVisible ? 1 : 0,
        transform: getTransform(),
        transition: prefersReducedMotion
          ? 'none'
          : `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
