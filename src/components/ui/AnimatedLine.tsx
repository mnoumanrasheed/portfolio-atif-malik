import React from 'react';

interface AnimatedBeamDividerProps {
  className?: string;
  glowColor?: 'teal' | 'cyan' | 'indigo' | 'emerald';
  speed?: 'normal' | 'fast';
}

export const AnimatedBeamDivider: React.FC<AnimatedBeamDividerProps> = ({
  className = '',
  glowColor = 'cyan',
  speed = 'normal'
}) => {
  const glowGradients = {
    teal: 'from-transparent via-[#377A8A] to-transparent',
    cyan: 'from-transparent via-[#51AAC0] to-transparent',
    indigo: 'from-transparent via-[#6366F1] to-transparent',
    emerald: 'from-transparent via-[#10B981] to-transparent'
  };

  const animClass = speed === 'fast' ? 'animate-beam-x-fast' : 'animate-beam-x';

  return (
    <div className={`relative w-full h-[1px] bg-slate-200/80 overflow-hidden my-8 sm:my-12 ${className}`} aria-hidden="true">
      {/* Background soft ambient highlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/40 to-transparent" />
      {/* High-speed luminous traveling light beam */}
      <div 
        className={`absolute inset-y-0 w-48 sm:w-72 bg-gradient-to-r ${glowGradients[glowColor]} ${animClass} blur-[0.5px] opacity-90`}
      />
      {/* Secondary tight intense core for realistic laser sheen */}
      <div 
        className={`absolute inset-y-0 w-24 sm:w-36 bg-gradient-to-r from-transparent via-white to-transparent ${animClass} opacity-80`}
      />
    </div>
  );
};

interface AnimatedLineAccentProps {
  width?: string;
  height?: string;
  className?: string;
  glowColor?: 'teal' | 'cyan' | 'gold';
}

export const AnimatedLineAccent: React.FC<AnimatedLineAccentProps> = ({
  width = 'w-24 sm:w-32',
  height = 'h-[2px]',
  className = '',
  glowColor = 'cyan'
}) => {
  return (
    <div className={`relative ${width} ${height} rounded-full overflow-hidden bg-slate-200/90 ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-r from-brand via-accent to-brand opacity-60" />
      <div className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white to-transparent animate-beam-x-fast opacity-90" />
    </div>
  );
};

interface AnimatedVerticalSpineProps {
  className?: string;
  height?: string;
}

export const AnimatedVerticalSpine: React.FC<AnimatedVerticalSpineProps> = ({
  className = '',
  height = 'h-full'
}) => {
  return (
    <div className={`absolute left-0 top-0 w-[2px] ${height} bg-gradient-to-b from-brand/20 via-brand/40 to-brand/10 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-x-0 h-28 bg-gradient-to-b from-transparent via-[#51AAC0] to-transparent animate-beam-y blur-[0.5px]" />
      <div className="absolute inset-x-0 h-14 bg-gradient-to-b from-transparent via-white to-transparent animate-beam-y opacity-90" />
    </div>
  );
};
