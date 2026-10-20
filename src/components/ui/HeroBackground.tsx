import React from 'react';

interface HeroBackgroundProps {
  imageSrc: string;
  imageAlt?: string;
  overlayOpacity?: 'light' | 'medium' | 'deep' | 'clear';
  imageOpacity?: string;
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

  // Soft contrast wash strictly under the left text (0-45%), completely transparent on the right (50-100%)
  const overlayGradients = {
    clear: 'from-white/95 from-0% via-white/70 via-25% sm:via-white/40 sm:via-35% to-transparent to-50%',
    light: 'from-white/95 from-0% via-white/80 via-28% sm:via-white/50 sm:via-38% to-transparent to-52%',
    medium: 'from-white from-0% via-white/90 via-30% sm:via-white/55 sm:via-42% to-transparent to-55%',
    deep: 'from-white from-0% via-white/95 via-35% sm:via-white/70 sm:via-48% to-transparent to-60%'
  }[overlayOpacity];

  return (
    <div 
      className={`relative w-full min-h-[90vh] sm:h-screen sm:min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b border-line pt-24 pb-12 sm:pt-28 sm:pb-16 text-left ${className}`}
    >
      {/* High-Clarity Background Image Container - 100% Clear on the right */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Crystal Clear High-Definition Photography Layer with Zero Haze */}
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="eager"
          className={`w-full h-full object-cover object-right filter saturate-[1.05] contrast-[1.05] brightness-[1.01] ${imageOpacity} transition-all duration-700 ease-out`}
        />

        {/* Directional Contrast Mask:
            Soft white only on the left text area (0% to ~45%) for crystal-clear text readability.
            Transitions smoothly to 100% transparent by ~55%, leaving the right half completely clear with zero opacity.
        */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${overlayGradients} pointer-events-none`}
          aria-hidden="true"
        />

        {/* Subtle Top Border Blend to avoid hard cuts at navbar edge */}
        <div
          className="absolute top-0 left-0 w-1/2 h-12 bg-gradient-to-b from-white/50 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Atmospheric Executive Color Aura (Softened and restricted to top-left behind text) */}
        <div
          className={`absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br ${glowStyles} blur-3xl pointer-events-none opacity-50`}
          aria-hidden="true"
        />

        {/* Micro-Precision Architectural Grid Lines on the left */}
        <div
          className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#17272D_1px,transparent_1px),linear-gradient(to_bottom,#17272D_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_right,white,transparent_60%)]"
          aria-hidden="true"
        />
      </div>

      {/* Hero Foreground Content: Strictly Left-Aligned */}
      <div className="relative z-10 w-full flex flex-col items-start justify-center text-left">
        {children}
      </div>
    </div>
  );
};
