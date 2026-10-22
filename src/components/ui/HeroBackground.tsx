import React from 'react';

interface HeroBackgroundProps {
  imageSrc: string;
  imageAlt?: string;
  overlayOpacity?: 'light' | 'medium' | 'deep' | 'clear';
  imageOpacity?: string;
  imagePosition?: string;
  glowColor?: 'teal' | 'cyan' | 'indigo' | 'emerald' | 'amber';
  className?: string;
  contentHeight?: boolean;
  isCompactHeight?: boolean;
  children?: React.ReactNode;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  imageSrc,
  imageAlt = 'Executive Architecture & Systems Background',
  overlayOpacity = 'medium',
  imageOpacity = 'opacity-100',
  imagePosition = 'object-right',
  glowColor = 'teal',
  className = '',
  contentHeight = false,
  isCompactHeight = false,
  children
}) => {
  const glowStyles = {
    teal: 'from-brand/15 via-accent-cyan/10 to-transparent',
    cyan: 'from-accent-cyan/15 via-brand/10 to-transparent',
    indigo: 'from-indigo-600/15 via-brand/10 to-transparent',
    emerald: 'from-emerald-600/15 via-teal-600/10 to-transparent',
    amber: 'from-amber-600/12 via-brand/8 to-transparent'
  }[glowColor];

  // Keep a light contrast layer only behind the left-aligned copy, so the imagery remains clear on the right.
  const overlayGradients = {
    clear: 'from-white/90 from-0% via-white/75 via-30% sm:via-white/55 sm:via-40% to-transparent to-54%',
    light: 'from-white/95 from-0% via-white/85 via-34% sm:via-white/65 sm:via-44% to-transparent to-57%',
    medium: 'from-white from-0% via-white/90 via-38% sm:via-white/75 sm:via-46% to-transparent to-60%',
    deep: 'from-white from-0% via-white/95 via-42% sm:via-white/85 sm:via-50% to-transparent to-63%'
  }[overlayOpacity];

  return (
    <div 
      className={`relative w-full ${contentHeight ? 'min-h-[100svh] h-auto max-h-none' : 'h-[100vh] min-h-[100vh] max-h-[100vh]'} flex flex-col justify-center overflow-hidden border-b border-line pt-20 pb-8 sm:pt-24 sm:pb-10 text-left ${className}`}
    >
      {/* Background image is right-aligned to leave space for the hero copy. */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Clear photography, framed to the right by default. */}
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className={`w-full h-full object-cover ${imagePosition} filter saturate-[1.05] contrast-[1.05] brightness-[1.01] ${imageOpacity} transition-all duration-700 ease-out`}
        />

        {/* A short, soft left-side contrast mask preserves text readability. */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${overlayGradients} pointer-events-none`}
          aria-hidden="true"
        />

        {/* Atmospheric Executive Color Aura (Softened and restricted behind text) */}
        <div
          className={`absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full bg-gradient-to-br ${glowStyles} blur-3xl pointer-events-none opacity-40`}
          aria-hidden="true"
        />
      </div>

      {/* Hero Foreground Content: Balanced Executive Centering in 100vh container */}
      <div className="relative z-10 w-full my-auto flex flex-col items-start justify-center text-left">
        {children}
      </div>
    </div>
  );
};
