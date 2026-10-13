import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExecutiveHeroDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<'nourdoc' | 'leadhive' | 'smartanimal' | 'core'>('core');

  return (
    <div className="bg-white border border-line rounded-card p-6 sm:p-8 shadow-soft">
      {/* Folio Header */}
      <div className="flex items-center justify-between pb-4 border-b border-line">
        <span className="eyebrow text-accent">
          Applied AI Systems Matrix
        </span>
        <span className="text-xs font-semibold text-ink-subtle uppercase tracking-wider">
          M3 Hive Core Platforms
        </span>
      </div>

      {/* Central Interactive Triangulation */}
      <div className="py-6 flex flex-col items-center justify-center relative">
        {/* Core Center Node */}
        <button 
          type="button"
          onClick={() => setActiveNode('core')}
          className={`w-full text-left p-4 rounded-lg transition-all border ${
            activeNode === 'core'
              ? 'bg-accent text-white border-accent shadow-sm'
              : 'bg-canvas-subtle text-ink border-line hover:border-accent/40 hover:bg-white'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className={`text-xs font-semibold uppercase tracking-wider ${activeNode === 'core' ? 'text-white/80' : 'text-accent'}`}>
              Executive Leadership
            </span>
            <span className="text-[11px] uppercase tracking-wider font-medium opacity-80">Hub</span>
          </div>
          <div className="font-display text-lg font-bold tracking-tight">
            Atif I. Malik
          </div>
          <p className="text-xs opacity-90 mt-0.5">
            Chief Executive Officer, M3 Hive
          </p>
        </button>

        {/* 3 Satellite Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-3">
          {/* NourDoc */}
          <button
            type="button"
            onClick={() => setActiveNode('nourdoc')}
            className={`p-3.5 rounded-lg text-left transition-all border ${
              activeNode === 'nourdoc'
                ? 'bg-accent text-white border-accent shadow-sm'
                : 'bg-canvas-subtle text-ink border-line hover:border-accent/40 hover:bg-white'
            }`}
          >
            <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${activeNode === 'nourdoc' ? 'text-white/80' : 'text-accent'}`}>
              Priority 01
            </div>
            <p className="font-display text-sm font-bold">NourDoc</p>
            <p className="text-xs opacity-80 mt-0.5">Clinical AI</p>
          </button>

          {/* LeadHive AI */}
          <button
            type="button"
            onClick={() => setActiveNode('leadhive')}
            className={`p-3.5 rounded-lg text-left transition-all border ${
              activeNode === 'leadhive'
                ? 'bg-accent text-white border-accent shadow-sm'
                : 'bg-canvas-subtle text-ink border-line hover:border-accent/40 hover:bg-white'
            }`}
          >
            <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${activeNode === 'leadhive' ? 'text-white/80' : 'text-accent'}`}>
              Priority 02
            </div>
            <p className="font-display text-sm font-bold">LeadHive AI</p>
            <p className="text-xs opacity-80 mt-0.5">Sales Engine</p>
          </button>

          {/* Smart Animal */}
          <button
            type="button"
            onClick={() => setActiveNode('smartanimal')}
            className={`p-3.5 rounded-lg text-left transition-all border ${
              activeNode === 'smartanimal'
                ? 'bg-accent text-white border-accent shadow-sm'
                : 'bg-canvas-subtle text-ink border-line hover:border-accent/40 hover:bg-white'
            }`}
          >
            <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${activeNode === 'smartanimal' ? 'text-white/80' : 'text-accent'}`}>
              Priority 03
            </div>
            <p className="font-display text-sm font-bold">Smart Animal</p>
            <p className="text-xs opacity-80 mt-0.5">AgriTech IoT</p>
          </button>
        </div>
      </div>

      {/* Dynamic Summary Panel */}
      <div className="pt-4 border-t border-line text-xs">
        {activeNode === 'core' && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-ink-body">
              Transforming complex operational bottlenecks into practical digital products.
            </span>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-1 text-accent font-semibold hover:underline shrink-0"
            >
              Executive Story <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {activeNode === 'nourdoc' && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-ink-body">
              <strong className="text-ink">NourDoc:</strong> Ambient conversation to structured SOAP notes with clinician review.
            </span>
            <Link 
              to="/products/nourdoc" 
              className="inline-flex items-center gap-1 text-accent font-semibold hover:underline shrink-0"
            >
              Examine Product <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {activeNode === 'leadhive' && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-ink-body">
              <strong className="text-ink">LeadHive AI:</strong> Conversational qualification and high-intent routing across channels.
            </span>
            <Link 
              to="/products/leadhive-ai" 
              className="inline-flex items-center gap-1 text-accent font-semibold hover:underline shrink-0"
            >
              Examine Product <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {activeNode === 'smartanimal' && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-ink-body">
              <strong className="text-ink">Smart Animal:</strong> IoT collar sensors transmitting rumination and activity telemetry.
            </span>
            <Link 
              to="/products/smart-animal" 
              className="inline-flex items-center gap-1 text-accent font-semibold hover:underline shrink-0"
            >
              Examine Product <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
