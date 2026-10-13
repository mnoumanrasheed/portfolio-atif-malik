import React from 'react';

interface ExecutiveMonogramProps {
  className?: string;
  portraitUrl?: string; // Replaceable photo slot for when verified executive portrait is available
}

export const ExecutiveMonogram: React.FC<ExecutiveMonogramProps> = ({ 
  className = '',
  portraitUrl
}) => {
  return (
    <div 
      className={`relative bg-canvas-subtle border border-line rounded-lg overflow-hidden shadow-soft ${className}`}
      aria-label="Executive Identity: Atif I. Malik"
    >
      {portraitUrl ? (
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img 
            src={portraitUrl} 
            alt="Atif I. Malik" 
            className="w-full h-full object-cover object-center" 
          />
        </div>
      ) : (
        /* Photo-ready editorial frame with tasteful monogram and architectural lines */
        <div className="aspect-[4/5] w-full flex flex-col justify-between p-8 sm:p-10 bg-gradient-to-b from-canvas-subtle to-canvas border-b border-line">
          {/* Subtle top indicator */}
          <div className="flex items-center justify-between text-xs text-ink-muted">
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-medium">AIM / M3 HIVE</span>
            <span className="text-[11px] text-ink-subtle">Executive Profile</span>
          </div>

          {/* Central Monogram */}
          <div className="my-auto text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-white border border-line flex items-center justify-center shadow-soft">
              <span className="font-display font-bold text-2xl tracking-wider text-ink">
                A<span className="text-accent font-light">/</span>M
              </span>
            </div>
            <div>
              <div className="font-display font-bold text-xl text-ink tracking-tight">Atif I. Malik</div>
              <div className="text-xs text-ink-muted mt-1">Chief Executive Officer, M3 Hive</div>
            </div>
          </div>

          {/* Bottom Caption */}
          <div className="pt-4 border-t border-line/60 text-center">
            <span className="text-[11px] text-ink-subtle">
              Technology Leadership · Applied AI
            </span>
          </div>
        </div>
      )}

      {/* Brief Credentials Bar */}
      <div className="p-5 bg-white border-t border-line space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-ink">Primary Role:</span>
          <span className="text-accent font-medium">Chief Executive Officer, M3 Hive</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-ink-muted">Corporate Affiliation:</span>
          <span className="text-ink-body">Co-Founder, Director & Shareholder, 360 Technologies</span>
        </div>
      </div>
    </div>
  );
};
