import React from 'react';

interface HeroBackgroundProps {
  imageSrc: string;
  imageAlt?: string;
  overlayOpacity?: 'light' | 'medium' | 'deep' | 'clear';
  glowColor?: 'teal' | 'cyan' | 'indigo' | 'emerald' | 'amber';
  className?: string;
  children?: React.ReactNode;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  imageSrc,
  imageAlt = 'Executive Architecture & Systems Background',
  overlayOpacity = 'clear',
  glowColor = 'teal',
  className = '',
  children
}) => {
  const glowStyles = {
    teal: 'from-brand/18 via-accent-cyan/12 to-transparent',
    cyan: 'from-accent-cyan/20 via-brand/12 to-transparent',
    indigo: 'from-indigo-600/18 via-brand/12 to-transparent',
    emerald: 'from-emerald-600/18 via-teal-600/10 to-transparent',
    amber: 'from-amber-600/15 via-brand/10 to-transparent'
  }[glowColor];

  return (
    <div 
      className={`relative overflow-hidden min-h-screen min-h-[100dvh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 border-b border-line ${className}`}
    >
      {/* High-Clarity Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Crystal Clear High-Definition Photography Layer */}
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="eager"
          className="w-full h-full object-cover object-right sm:object-center filter saturate-[1.06] contrast-[1.08] brightness-[1.02] opacity-85 sm:opacity-90 transition-transform duration-1000 ease-out"
        />

        {/* Directional Contrast Mask:
            Protects dark text readability on the left (0-55% width)
            while keeping the right side (45-100% width) crystal clear and vivid
        */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-white/90 sm:via-white/70 to-white/40 sm:to-transparent"
          aria-hidden="true"
        />

        {/* Subtle Top & Bottom Seamless Blends */}
        <div
          className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/70 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"
          aria-hidden="true"
        />

        {/* Atmospheric Executive Color Aura (Adds Depth & Luster without hazing the image) */}
        <div
          className={`absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br ${glowStyles} blur-3xl pointer-events-none opacity-70`}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-accent-cyan/12 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Micro-Precision Architectural Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#17272D_1px,transparent_1px),linear-gradient(to_bottom,#17272D_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
