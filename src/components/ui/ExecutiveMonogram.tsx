import React from 'react';
import { EXECUTIVE_PROFILE } from '../../content/portfolio';

interface ExecutiveMonogramProps {
  className?: string;
  size?: 'compact' | 'standard' | 'large';
}

export const ExecutiveMonogram: React.FC<ExecutiveMonogramProps> = ({ 
  className = ''
}) => {
  return (
    <div 
      className={`bg-white border border-line rounded-card p-6 sm:p-8 shadow-card ${className}`}
      aria-label="Executive Profile: Atif I. Malik"
    >
      {/* Header mark */}
      <div className="flex items-center justify-between pb-5 border-b border-line">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent-wash border border-accent/20 flex items-center justify-center text-accent font-bold font-display text-sm">
            AIM
          </div>
          <div>
            <div className="font-display font-bold text-ink text-base">Atif I. Malik</div>
            <div className="text-xs text-ink-muted">Executive Profile</div>
          </div>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
          Active Leadership
        </span>
      </div>

      {/* Roles overview */}
      <div className="py-6 space-y-4">
        <div className="p-4 rounded-lg bg-canvas-subtle border border-line">
          <div className="text-xs text-accent font-medium mb-1">Primary Operational Focus</div>
          <div className="font-display font-semibold text-ink text-sm">Chief Executive Officer</div>
          <div className="text-xs text-ink-muted mt-0.5">M3 Hive · Applied AI & Technology Solutions</div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="text-[11px] px-2 py-0.5 rounded bg-white text-ink-muted border border-line">NourDoc</span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-white text-ink-muted border border-line">LeadHive AI</span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-white text-ink-muted border border-line">Smart Animal</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-white border border-line">
          <div className="text-xs text-ink-subtle font-medium mb-1">Corporate Affiliation & Heritage</div>
          <div className="font-display font-semibold text-ink text-sm">Co-Founder, Director & Shareholder</div>
          <div className="text-xs text-ink-muted mt-0.5">360 Technologies · Enterprise Digital Systems</div>
        </div>
      </div>

      {/* Focus Pillars */}
      <div className="pt-4 border-t border-line">
        <div className="text-xs font-medium text-ink-muted mb-2">Core Competencies</div>
        <div className="text-xs text-ink leading-relaxed">
          Applied AI Pragmatism · Product Strategy · Regulatory-Aware Architecture · Full-Lifecycle Engineering Delivery
        </div>
      </div>
    </div>
  );
};
