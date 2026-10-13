import React from 'react';

interface ExecutiveMonogramProps {
  className?: string;
  size?: 'compact' | 'standard' | 'large';
}

export const ExecutiveMonogram: React.FC<ExecutiveMonogramProps> = ({ 
  className = ''
}) => {
  return (
    <div 
      className={`relative bg-mono-900 border border-neutral-800 p-8 sm:p-10 ${className}`}
      aria-label="Executive Identity Folio: Atif I. Malik"
    >
      {/* Top Header Rule */}
      <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
        <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
          [ EXECUTIVE DOSSIER ]
        </span>
        <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
          REF: AIM-EXEC-01
        </span>
      </div>

      {/* Monogram Typography */}
      <div className="py-10 my-auto">
        <div className="font-editorial-heading text-6xl sm:text-7xl text-white tracking-tighter">
          A<span className="text-neutral-500 font-light">.</span>I<span className="text-neutral-500 font-light">.</span>M
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-white uppercase">
          Atif I. Malik
        </h2>
        <p className="mt-1 font-mono text-xs text-neutral-400 uppercase tracking-widest">
          Technology Leadership & Applied AI
        </p>
      </div>

      {/* Structured Archival Roles */}
      <div className="pt-6 border-t border-neutral-800 space-y-4">
        <div className="p-4 border border-neutral-800 bg-black space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase">
            <span>Primary Operational Focus</span>
            <span className="text-white">[ ACTIVE ]</span>
          </div>
          <p className="text-sm font-semibold text-white">
            Chief Executive Officer
          </p>
          <p className="text-xs font-mono text-neutral-300">
            M3 Hive (NourDoc, LeadHive AI, Smart Animal)
          </p>
        </div>

        <div className="p-4 border border-neutral-800/80 bg-black/40 space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase">
            <span>Separate Corporate Affiliation</span>
            <span className="text-neutral-400">[ HISTORICAL ]</span>
          </div>
          <p className="text-sm font-semibold text-neutral-200">
            Co-Founder, Director & Shareholder
          </p>
          <p className="text-xs font-mono text-neutral-400">
            360 Technologies (Company Portfolio & Legacy)
          </p>
        </div>
      </div>
    </div>
  );
};
