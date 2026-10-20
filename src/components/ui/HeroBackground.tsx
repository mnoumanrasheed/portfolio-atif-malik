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

  // Directional contrast mask: Pure white canvas strictly behind the left text (0-38%) ensuring 100% razor-sharp readability, then feathers smoothly to 100% transparent by 60%, leaving the right side image 100% clear with zero opacity
  const overlayGradients = {
    clear: 'from-white from-0% via-white via-32% sm:via-white/85 sm:via-42% to-transparent to-58%',
    light: 'from-white from-0% via-white via-35% sm:via-white/90 sm:via-45% to-transparent to-62%',
    medium: 'from-white from-0% via-white via-38% sm:via-white/90 sm:via-48% to-transparent to-65%',
    deep: 'from-white from-0% via-white via-42% sm:via-white/95 sm:via-52% to-transparent to-70%'
  }[overlayOpacity];

  return (
    <div 
      className={`relative w-full h-[100vh] min-h-[100vh] max-h-[100vh] flex flex-col justify-center overflow-hidden border-b border-line pt-20 pb-8 sm:pt-24 sm:pb-10 text-left ${className}`}
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
            Soft translucent wash under left text for pristine readability.
            Transitions smoothly to transparent by ~55%, leaving the right half completely clear with zero opacity.
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

      {/* Hero Foreground Content: Strictly Left-Aligned */}
      <div className="relative z-10 w-full flex flex-col items-start justify-center text-left">
        {children}
      </div>
    </div>
  );
};
