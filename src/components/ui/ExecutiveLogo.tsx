import React from 'react';

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
  className = ''
}) => {
  const isDark = theme === 'dark';
  const logoSrc = isDark ? '/logo-dark.png' : '/logo-light.png';

  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-10',
    lg: 'h-11 sm:h-12',
    xl: 'h-14 sm:h-16',
    '2xl': 'h-20 sm:h-24'
  }[size];

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center transition-transform duration-200 group-hover:scale-[1.03] ${className}`} aria-label="Atif I. Malik Logo">
        <img
          src="/favicon.png"
          alt="Atif I. Malik Mark"
          className={`${heights} w-auto object-contain select-none`}
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center transition-transform duration-200 group-hover:scale-[1.02] ${className}`}
      aria-label="Atif I. Malik"
    >
      <img
        src={logoSrc}
        alt="Atif I. Malik"
        className={`${heights} w-auto object-contain select-none`}
        loading="eager"
      />
    </div>
  );
};
