import React from 'react';
import { M3_HIVE_ENGAGEMENT_MODELS } from '../../content/portfolio';

export const ProcessTimelineDiagram: React.FC = () => {
  return (
    <div className="bg-white border border-line rounded-card p-6 sm:p-10 shadow-soft">
      <div className="flex items-center justify-between pb-5 border-b border-line mb-8">
        <div>
          <span className="eyebrow text-accent block">
            Delivery & Governance Phases
          </span>
          <h3 className="font-display font-bold text-xl text-ink mt-0.5">
            Structured Engagement Lifecycle
          </h3>
        </div>
        <span className="inline-flex items-center text-xs font-semibold text-accent bg-accent-wash border border-accent/20 px-3 py-1 rounded-full">
          Disciplined Execution
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {M3_HIVE_ENGAGEMENT_MODELS.map((model, idx) => (
          <div key={idx} className="flex flex-col justify-between border-t border-line pt-4 bg-canvas-subtle p-4 rounded-lg">
            <div>
              <div className="w-7 h-7 rounded bg-white text-accent font-bold text-xs flex items-center justify-center border border-line mb-3">
                0{idx + 1}
              </div>
              <h4 className="font-display font-bold text-sm text-ink mb-2">
                {model.phase.split(':')[1]?.trim() || model.phase}
              </h4>
              <p className="text-xs text-ink-muted leading-relaxed">
                {model.detail}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-line text-[11px] font-medium text-accent">
              Phase 0{idx + 1}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-5 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-ink-muted">
        <span className="font-semibold text-ink uppercase tracking-wider">Governance Commitment:</span>
        <span className="text-ink-body">
          Scope boundaries, ownership rights, data access, and milestones are transparently agreed before code delivery commencement.
        </span>
      </div>
    </div>
  );
};
