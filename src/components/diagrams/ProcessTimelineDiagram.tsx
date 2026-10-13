import React from 'react';
import { M3_HIVE_ENGAGEMENT_MODELS } from '../../content/portfolio';

export const ProcessTimelineDiagram: React.FC = () => {
  return (
    <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-12">
      <div className="flex items-center justify-between pb-8 border-b border-neutral-800 mb-10">
        <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
          [ DELIVERY & GOVERNANCE PHASES ]
        </span>
        <span className="font-mono text-[10px] tracking-wider text-neutral-500 uppercase">
          STRUCTURED ENGAGEMENT
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {M3_HIVE_ENGAGEMENT_MODELS.map((model, idx) => (
          <div key={idx} className="flex flex-col justify-between border-t border-neutral-800 pt-6">
            <div>
              <div className="font-mono text-xs font-bold text-neutral-400 mb-3">
                [ 0{idx + 1} ]
              </div>
              <h3 className="text-base font-bold text-white uppercase tracking-tight mb-3">
                {model.phase.split(':')[1]?.trim() || model.phase}
              </h3>
              <p className="text-xs text-neutral-400 font-editorial-body leading-relaxed">
                {model.detail}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-900">
              <span className="font-mono text-[10px] uppercase text-neutral-500">
                Phase 0{idx + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-neutral-400">
        <span className="text-white uppercase font-bold">[ GOVERNANCE REQUIREMENT ]</span>
        <span className="text-neutral-400 text-[11px]">
          Scope, ownership boundaries, data access, and milestones are agreed prior to delivery commencement.
        </span>
      </div>
    </div>
  );
};
