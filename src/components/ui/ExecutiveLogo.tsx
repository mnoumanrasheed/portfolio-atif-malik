import React, { useId } from 'react';

export interface ExecutiveLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'mark-only' | 'horizontal' | 'stacked';
  theme?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const ExecutiveLogo: React.FC<ExecutiveLogoProps> = ({
  size = 'md',
  variant = 'horizontal',
  theme = 'light',
  className = '',
  showSubtitle = true
}) => {
  const uid = useId().replace(/:/g, '');

  const dimensions = {
    sm: { px: 32, box: 'w-8 h-8', textTitle: 'text-sm', textSub: 'text-[9px]' },
    md: { px: 38, box: 'w-[38px] h-[38px]', textTitle: 'text-base', textSub: 'text-[10px]' },
    lg: { px: 48, box: 'w-12 h-12', textTitle: 'text-lg', textSub: 'text-xs' },
    xl: { px: 64, box: 'w-16 h-16', textTitle: 'text-xl', textSub: 'text-xs' },
    '2xl': { px: 80, box: 'w-20 h-20', textTitle: 'text-2xl', textSub: 'text-sm' }
  }[size];

  const Mark = (
    <div className={`relative shrink-0 ${dimensions.box} transition-transform duration-300 group-hover:scale-[1.03]`}>
      <svg
        viewBox="0 0 64 64"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm select-none"
        aria-hidden="true"
      >
        <defs>
          {/* Executive Obsidian-Teal Background */}
          <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B1B20" />
            <stop offset="45%" stopColor="#122B34" />
            <stop offset="100%" stopColor="#1B3E4A" />
          </linearGradient>

          {/* Precision Rim Highlight Gradient */}
          <linearGradient id={`${uid}-rim`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#51AAC0" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#377A8A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7EE2F7" stopOpacity="0.85" />
          </linearGradient>

          {/* Outer 'A' Diagonal Highlights */}
          <linearGradient id={`${uid}-wingL`} x1="17" y1="46" x2="32" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#377A8A" />
            <stop offset="55%" stopColor="#51AAC0" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          <linearGradient id={`${uid}-wingR`} x1="47" y1="46" x2="32" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#224751" />
            <stop offset="50%" stopColor="#51AAC0" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          {/* Central 'I' Strategic Pillar Gradient */}
          <linearGradient id={`${uid}-pillar`} x1="32" y1="21" x2="32" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#9DEAF7" />
            <stop offset="100%" stopColor="#377A8A" />
          </linearGradient>

          {/* 'M' Fold Gradient */}
          <linearGradient id={`${uid}-mFold`} x1="23.5" y1="32" x2="40.5" y2="41" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#51AAC0" />
            <stop offset="100%" stopColor="#2A5C68" />
          </linearGradient>

          {/* Soft Center Ambient Radiance */}
          <radialGradient id={`${uid}-glow`} cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#51AAC0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0B1B20" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base Beveled Squircle */}
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="14"
          fill={`url(#${uid}-bg)`}
          stroke={`url(#${uid}-rim)`}
          strokeWidth="1.5"
        />

        {/* Ambient Interior Radiance */}
        <rect x="2" y="2" width="60" height="60" rx="14" fill={`url(#${uid}-glow)`} />

        {/* Precision Hairline Inset */}
        <rect
          x="5.5"
          y="5.5"
          width="53"
          height="53"
          rx="11"
          stroke="#51AAC0"
          strokeOpacity="0.18"
          strokeWidth="0.75"
        />

        {/* --- Monogram Architecture (A · I · M) --- */}

        {/* Outer 'A' Frame Wings */}
        <path
          d="M 17 46 L 32 15"
          stroke={`url(#${uid}-wingL)`}
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <path
          d="M 32 15 L 47 46"
          stroke={`url(#${uid}-wingR)`}
          strokeWidth="3.4"
          strokeLinecap="round"
        />

        {/* 'A' Horizontal Bridge connecting the outer wings */}
        <line
          x1="23.5"
          y1="32"
          x2="40.5"
          y2="32"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeOpacity="0.9"
          strokeLinecap="round"
        />

        {/* 'M' Converging Chevron Basin */}
        <path
          d="M 23.5 32 L 32 41 L 40.5 32"
          stroke={`url(#${uid}-mFold)`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central 'I' Column / Pillar */}
        <line
          x1="32"
          y1="22"
          x2="32"
          y2="36"
          stroke={`url(#${uid}-pillar)`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Apex Illuminator Vertex Node */}
        <circle cx="32" cy="15" r="2.2" fill="#FFFFFF" />
        <circle cx="32" cy="15" r="4.2" stroke="#7EE2F7" strokeWidth="0.75" strokeOpacity="0.65" />
      </svg>
    </div>
  );

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center ${className}`} aria-label="Atif I. Malik Monogram">
        {Mark}
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <div
      className={`inline-flex items-center gap-3 group ${
        variant === 'stacked' ? 'flex-col text-center' : 'flex-row text-left'
      } ${className}`}
    >
      {Mark}

      <div className="flex flex-col">
        <span
          className={`font-display font-extrabold tracking-tight ${dimensions.textTitle} ${
            isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-brand'
          } transition-colors leading-tight`}
        >
          Atif I. Malik
        </span>

        {showSubtitle && (
          <span
            className={`font-sans uppercase font-bold tracking-wider ${dimensions.textSub} ${
              isDark ? 'text-cyan-400' : 'text-brand'
            } transition-colors mt-0.5`}
          >
            CEO · M3 Hive
          </span>
        )}
      </div>
    </div>
  );
};
