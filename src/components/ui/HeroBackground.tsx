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
  imageOpacity = 'opacity-80 sm:opacity-85',
  glowColor = 'teal',
  className = '',
  isCompactHeight = false,
  children
}) => {
  const glowStyles = {
    teal: 'from-brand/18 via-accent-cyan/12 to-transparent',
    cyan: 'from-accent-cyan/20 via-brand/12 to-transparent',
    indigo: 'from-indigo-600/18 via-brand/12 to-transparent',
    emerald: 'from-emerald-600/18 via-teal-600/10 to-transparent',
    amber: 'from-amber-600/15 via-brand/10 to-transparent'
  }[glowColor];

  const overlayGradients = {
    clear: 'from-white from-0% via-white/85 via-25% sm:via-white/65 sm:via-45% to-transparent to-90%',
    light: 'from-white from-0% via-white/90 via-28% sm:via-white/70 sm:via-45% to-white/10 to-85%',
    medium: 'from-white from-0% via-white/95 via-30% sm:via-white/80 sm:via-45% to-white/10 sm:to-transparent to-85%',
    deep: 'from-white from-0% via-white via-35% sm:via-white/90 sm:via-55% to-white/20 sm:to-transparent to-90%'
  }[overlayOpacity];

  return (
    <div 
      className={`relative w-full h-screen min-h-[100vh] min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b border-line pt-20 pb-8 sm:pt-24 sm:pb-12 ${className}`}
    >
      {/* High-Clarity Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Crystal Clear High-Definition Photography Layer with Refined Opacity */}
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="eager"
          className={`w-full h-full object-cover object-right filter saturate-[1.05] contrast-[1.05] brightness-[1.02] ${imageOpacity} transition-all duration-700 ease-out`}
        />

        {/* Directional Contrast Mask:
            Solid white on the left text area guarantees pristine legibility and zero interference.
            Smooth feathered transition to the right allows photography to be clearly visible with balanced depth.
        */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${overlayGradients}`}
          aria-hidden="true"
        />

        {/* Subtle Top & Bottom Seamless Blends */}
        <div
          className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Atmospheric Executive Color Aura */}
        <div
          className={`absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br ${glowStyles} blur-3xl pointer-events-none opacity-60`}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-accent-cyan/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Micro-Precision Architectural Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#17272D_1px,transparent_1px),linear-gradient(to_bottom,#17272D_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
      </div>

      {/* Hero Foreground Content Vertically Centered */}
      <div className="relative z-10 w-full my-auto flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};
