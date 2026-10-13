import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExecutiveHeroDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<'nourdoc' | 'leadhive' | 'smartanimal' | 'core'>('core');

  return (
    <div className="relative border border-neutral-800 bg-mono-900 p-6 sm:p-8">
      {/* Folio Header */}
      <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
        <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
          [ SCHEMATIC MATRIX ]
        </span>
        <span className="font-mono text-[10px] tracking-wider text-neutral-500 uppercase">
          FIG. 01 — APPLIED AI
        </span>
      </div>

      {/* Central Interactive Triangulation */}
      <div className="py-8 flex flex-col items-center justify-center relative">
        {/* Core Center Node */}
        <button 
          type="button"
          onClick={() => setActiveNode('core')}
          className={`w-full text-left p-5 transition-all border ${
            activeNode === 'core'
              ? 'bg-white text-black border-white'
              : 'bg-black text-white border-neutral-800 hover:border-neutral-500'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-widest font-semibold opacity-70">
              Core Leadership
            </span>
            <span className="font-mono text-[10px] uppercase">[ HUB ]</span>
          </div>
          <div className="text-xl font-bold tracking-tight uppercase">
            Atif I. Malik
          </div>
          <p className="text-xs font-mono opacity-80 mt-1">
            Chief Executive Officer, M3 Hive
          </p>
        </button>

        {/* 3 Satellite Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-4">
          {/* NourDoc */}
          <button
            type="button"
            onClick={() => setActiveNode('nourdoc')}
            className={`p-4 text-left transition-all border ${
              activeNode === 'nourdoc'
                ? 'bg-white text-black border-white'
                : 'bg-black text-white border-neutral-800 hover:border-neutral-500'
            }`}
          >
            <div className="font-mono text-[10px] uppercase tracking-wider opacity-60 mb-1">
              Priority 01
            </div>
            <p className="text-sm font-bold uppercase">NourDoc</p>
            <p className="text-[11px] opacity-70 mt-1 font-mono">Clinical AI</p>
          </button>

          {/* LeadHive AI */}
          <button
            type="button"
            onClick={() => setActiveNode('leadhive')}
            className={`p-4 text-left transition-all border ${
              activeNode === 'leadhive'
                ? 'bg-white text-black border-white'
                : 'bg-black text-white border-neutral-800 hover:border-neutral-500'
            }`}
          >
            <div className="font-mono text-[10px] uppercase tracking-wider opacity-60 mb-1">
              Priority 02
            </div>
            <p className="text-sm font-bold uppercase">LeadHive AI</p>
            <p className="text-[11px] opacity-70 mt-1 font-mono">Sales Engine</p>
          </button>

          {/* Smart Animal */}
          <button
            type="button"
            onClick={() => setActiveNode('smartanimal')}
            className={`p-4 text-left transition-all border ${
              activeNode === 'smartanimal'
                ? 'bg-white text-black border-white'
                : 'bg-black text-white border-neutral-800 hover:border-neutral-500'
            }`}
          >
            <div className="font-mono text-[10px] uppercase tracking-wider opacity-60 mb-1">
              Priority 03
            </div>
            <p className="text-sm font-bold uppercase">Smart Animal</p>
            <p className="text-[11px] opacity-70 mt-1 font-mono">AgriTech IoT</p>
          </button>
        </div>
      </div>

      {/* Dynamic Summary Panel */}
      <div className="pt-5 border-t border-neutral-800 font-mono text-xs">
        {activeNode === 'core' && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-neutral-300">
              Transforming complex operational bottlenecks into practical digital products.
            </span>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-1 text-white hover:underline uppercase tracking-wider flex-shrink-0"
            >
              Executive Story <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {activeNode === 'nourdoc' && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-neutral-300">
              <strong>NourDoc:</strong> Ambient conversation to structured SOAP notes with clinician review.
            </span>
            <Link 
              to="/products/nourdoc" 
              className="inline-flex items-center gap-1 text-white hover:underline uppercase tracking-wider flex-shrink-0"
            >
              Examine Product <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {activeNode === 'leadhive' && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-neutral-300">
              <strong>LeadHive AI:</strong> Conversational qualification and high-intent routing across channels.
            </span>
            <Link 
              to="/products/leadhive-ai" 
              className="inline-flex items-center gap-1 text-white hover:underline uppercase tracking-wider flex-shrink-0"
            >
              Examine Product <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {activeNode === 'smartanimal' && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-neutral-300">
              <strong>Smart Animal:</strong> IoT collar sensors transmitting rumination and activity telemetry.
            </span>
            <Link 
              to="/products/smart-animal" 
              className="inline-flex items-center gap-1 text-white hover:underline uppercase tracking-wider flex-shrink-0"
            >
              Examine Product <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
