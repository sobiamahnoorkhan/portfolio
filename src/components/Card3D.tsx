import React, { useRef, useState, useCallback, useEffect } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
  depth?: number;
  borderGlow?: boolean;
  onClick?: () => void;
  id?: string;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  intensity = 8,
  glare = true,
  depth = 16,
  borderGlow = true,
  onClick,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);

    // Detect touch / pointer
    const touchCheck = window.matchMedia('(hover: none) or (pointer: coarse)');
    setIsTouchDevice(touchCheck.matches);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || isTouchDevice || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Restrict rotation to very subtle, elegant degrees (max ±intensity)
      const rotateX = Math.max(-intensity, Math.min(intensity, ((y - centerY) / centerY) * -intensity));
      const rotateY = Math.max(-intensity, Math.min(intensity, ((x - centerX) / centerX) * intensity));

      setRotation({ x: rotateX, y: rotateY });
      setMousePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.18,
      });
    },
    [intensity, prefersReducedMotion, isTouchDevice]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const shouldAnimate = !prefersReducedMotion && !isTouchDevice;

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`perspective-1000 transition-all duration-300 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="relative h-full w-full rounded-3xl transition-all duration-500 ease-out transform-style-3d glass-panel overflow-hidden"
        style={{
          transform: shouldAnimate
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(${isHovered ? depth : 0}px)`
            : 'none',
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px -4px var(--theme-glow), inset 0 1px 2px rgba(255, 255, 255, 0.25)'
            : '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)',
        }}
      >
        {/* Dynamic Border Illumination & Theme Glow */}
        {borderGlow && isHovered && shouldAnimate && (
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-20"
            style={{
              opacity: mousePos.opacity * 2.8,
              background: `radial-gradient(circle 260px at ${mousePos.x}% ${mousePos.y}%, var(--theme-glow), transparent 70%)`,
              border: '1px solid var(--accent-primary)',
            }}
          />
        )}

        {/* Specular Frosted Glare Layer */}
        {glare && shouldAnimate && (
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-30"
            style={{
              opacity: mousePos.opacity * 1.2,
              background: `radial-gradient(circle 280px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.4) 0%, var(--theme-glow) 40%, transparent 80%)`,
            }}
          />
        )}

        {/* Inner Content with subtle translateZ for multi-depth parallax */}
        <div
          className="relative z-10 h-full transition-transform duration-300 ease-out"
          style={{
            transform: shouldAnimate && isHovered ? 'translateZ(10px)' : 'none',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
