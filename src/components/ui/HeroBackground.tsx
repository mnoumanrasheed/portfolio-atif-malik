import React from 'react';

interface HeroBackgroundProps {
  imageSrc: string;
  imageAlt?: string;
  overlayOpacity?: 'light' | 'medium' | 'deep' | 'clear';
  imageOpacity?: string;
  imagePosition?: string;
  glowColor?: 'teal' | 'cyan' | 'indigo' | 'emerald' | 'amber';
  className?: string;
  isCompactHeight?: boolean;
  children?: React.ReactNode;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  imageSrc,
  imageAlt = 'Executive Architecture & Systems Background',
  overlayOpacity = 'medium',
  imageOpacity = 'opacity-100',
  imagePosition = 'object-center',
  glowColor = 'teal',
  className = '',
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

  // Directional contrast mask: Clean white canvas under left text for 100% crisp legibility, smoothly dissolving to 100% transparent by ~58% so the right image remains completely clear
  const overlayGradients = {
    clear: 'from-white/95 from-0% via-white/80 via-30% sm:via-white/50 sm:via-42% to-transparent to-58%',
    light: 'from-white/95 from-0% via-white/85 via-32% sm:via-white/60 sm:via-45% to-transparent to-60%',
    medium: 'from-white from-0% via-white via-32% sm:via-white/70 sm:via-45% to-transparent to-62%',
    deep: 'from-white from-0% via-white via-36% sm:via-white/80 sm:via-48% to-transparent to-65%'
  }[overlayOpacity];

  return (
    <div 
      className={`relative w-full h-[100vh] min-h-[100vh] max-h-[100vh] flex flex-col justify-center overflow-hidden border-b border-line pt-20 pb-8 sm:pt-24 sm:pb-10 text-left ${className}`}
    >
      {/* High-Clarity Background Image Container - Centered to avoid cutting & 100% Clear on the right */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Crystal Clear High-Definition Photography Layer with Zero Haze & Centered Framing */}
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="eager"
          className={`w-full h-full object-cover ${imagePosition} filter saturate-[1.05] contrast-[1.05] brightness-[1.01] ${imageOpacity} transition-all duration-700 ease-out`}
        />

        {/* Directional Contrast Mask:
            Soft pure white on the left (0% to ~35%) guarantees 100% text readability.
            Transitions smoothly to 100% transparent by ~60%, leaving the right half completely clear with zero opacity.
        */}
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
