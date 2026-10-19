import React from 'react';

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  borderWidth?: number;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  size = 200,
  duration = 8,
  delay = 0,
  colorFrom = '#388470',
  colorTo = '#286252',
  className = '',
  borderWidth = 1.5
}) => {
  return (
    <div
      style={
        {
          '--size': `${size}px`,
          '--duration': `${duration}s`,
          '--delay': `-${delay}s`,
          '--color-from': colorFrom,
          '--color-to': colorTo,
          '--border-width': `${borderWidth}px`,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <div
        className="absolute aspect-square w-[calc(var(--size))] animate-border-beam [animation-delay:var(--delay)] [animation-duration:var(--duration)] [background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] [offset-anchor:calc(var(--size)/2)_50%] [offset-path:rect(0_auto_auto_0_round_calc(var(--size)))]"
      />
    </div>
  );
};

interface LivePulseBeaconProps {
  label?: string;
  pulseColor?: string;
  className?: string;
}

export const LivePulseBeacon: React.FC<LivePulseBeaconProps> = ({
  label = 'Active Strategy',
  pulseColor = 'bg-accent',
  className = ''
}) => {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#388470]/30 shadow-xs ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pulseColor} opacity-75`} />
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${pulseColor}`} />
      </span>
      <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">
        {label}
      </span>
    </span>
  );
};
