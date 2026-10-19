import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { EXECUTIVE_PROFILE, PRODUCTS } from '../../content/portfolio';
import { ExecutiveLogo } from './ExecutiveLogo';
import { BorderBeam } from './BorderBeam';

export const HeroExecutiveCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const TABS = [
    { id: 0, label: 'Positioning', icon: Sparkles },
    { id: 1, label: 'Products', icon: Zap },
    { id: 2, label: 'Governance', icon: ShieldCheck }
  ];

  const CYCLE_INTERVAL_MS = 6000;
  const STEP_TICK_MS = 60;

  // Auto-progression loop with smooth progress tracking
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (STEP_TICK_MS / CYCLE_INTERVAL_MS) * 100;
        if (next >= 100) {
          setActiveTab((cur) => (cur + 1) % TABS.length);
          return 0;
        }
        return next;
      });
    }, STEP_TICK_MS);

    return () => clearInterval(timer);
  }, [isPaused, TABS.length]);

  const handleSelectTab = (idx: number) => {
    setActiveTab(idx);
    setProgress(0);
  };

  return (
    <div 
      className="relative group hero-editorial-card select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Ambient Backlight Glow Aura */}
      <div 
        className="absolute -inset-2 bg-gradient-to-tr from-[#286252]/20 via-[#388470]/25 to-emerald-400/20 rounded-3xl blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Floating Levitation Wrapper */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(15,23,42,0.14)] hover:shadow-[0_25px_60px_-10px_rgba(15,23,42,0.18)] transition-all duration-300"
        aria-label="Executive Profile Console"
      >
        {/* Circulating Live Light Border Beam */}
        <BorderBeam size={280} duration={8} colorFrom="#51AAC0" colorTo="#377A8A" borderWidth={1.5} />

        {/* Shimmering Top Hairline Refraction Accent */}
        <div className="relative h-1.5 w-full bg-slate-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand via-accent to-brand opacity-90" />
          <div className="absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-white to-transparent animate-beam-x-fast" />
        </div>

        {/* Content Container */}
        <div className="p-4 sm:p-5 space-y-3 relative z-10">
          
          {/* Header Bar: Status Badge + Mode Toggle */}
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100/90">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-brand font-bold">
                Executive Profile
              </span>
            </div>

            {/* Live Mode Tabs */}
            <div className="flex items-center gap-1 bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/60">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleSelectTab(tab.id)}
                    type="button"
                    className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                      isActive
                        ? 'bg-white text-slate-900 shadow-2xs font-bold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Icon className={`w-3 h-3 ${isActive ? 'text-brand' : 'text-slate-400'}`} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Auto-Progression Countdown Line */}
          <div className="relative h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-brand to-accent rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear', duration: 0.06 }}
            />
          </div>

          {/* Architectural Monogram Emblem with Dynamic Orbital Field */}
          <div className="relative py-2 flex items-center justify-center">
            <div className="absolute w-20 h-20 rounded-full border border-dashed border-[#51AAC0]/30 animate-spin [animation-duration:24s] pointer-events-none" />
            <span className="absolute w-14 h-14 rounded-full bg-[#51AAC0]/10 animate-ping opacity-35 pointer-events-none" />
            
            <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
              <ExecutiveLogo size="xl" variant="stacked" theme="light" />
            </div>
          </div>

          {/* Dynamic Content Panel with Animated Transitions */}
          <div className="min-h-[110px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                /* TAB 01: Approved Professional Positioning */
                <motion.div
                  key="positioning"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="w-full text-center space-y-2 py-1"
                >
                  <p className="text-xs text-slate-700 leading-relaxed px-2 border-y border-slate-100 py-2.5 bg-slate-50/50 rounded-lg font-normal">
                    Connecting business challenges with product thinking, applied AI, and technology delivery.
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#51AAC0]" />
                    <span>Focus: Problem Definition &amp; Coherent Delivery</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 1 && (
                /* TAB 02: Three Priority Products */
                <motion.div
                  key="products"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="w-full space-y-1.5 py-0.5"
                >
                  {/* NourDoc */}
                  <a
                    href="https://nour-doc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 flex items-center justify-between text-xs hover:border-[#286252]/40 hover:bg-emerald-50 transition-all group/item block"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#286252]" />
                      <div>
                        <span className="font-bold text-slate-900 group-hover/item:text-[#286252] transition-colors block leading-tight">
                          NourDoc ↗
                        </span>
                        <span className="text-[10px] text-slate-500 block leading-none">AI-Enabled Clinical Documentation</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#286252] bg-white px-2 py-0.5 rounded border border-[#286252]/20">
                      nour-doc.com
                    </span>
                  </a>

                  {/* LeadHive AI */}
                  <div className="p-2 rounded-lg bg-indigo-50/70 border border-indigo-100/90 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      <div>
                        <span className="font-bold text-slate-900 block leading-tight">LeadHive AI</span>
                        <span className="text-[10px] text-slate-500 block leading-none">Lead Engagement &amp; Qualification</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-700 bg-white px-2 py-0.5 rounded border border-indigo-200">
                      Sales Engine
                    </span>
                  </div>

                  {/* Smart Animal */}
                  <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100/90 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <div>
                        <span className="font-bold text-slate-900 block leading-tight">Smart Animal</span>
                        <span className="text-[10px] text-slate-500 block leading-none">Connected Livestock Monitoring</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">
                      AgriTech &amp; IoT
                    </span>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                /* TAB 03: Governance & Delivery Approach */
                <motion.div
                  key="governance"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="w-full space-y-1.5 py-0.5"
                >
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                      <span className="text-slate-700 font-medium">Outcome Defined Before Technology Selection</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                      <span className="text-slate-700 font-medium">Multidisciplinary Delivery Alignment</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-slate-700 font-medium">Adoption, Trust &amp; Governance by Design</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Credentials Ledger */}
          <div className="space-y-1 text-xs pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between py-0.5">
              <span className="text-slate-500 font-medium text-[11px]">Primary Role</span>
              <span className="text-slate-900 font-bold text-xs">{EXECUTIVE_PROFILE.currentRole}</span>
            </div>
            <div className="flex items-center justify-between py-0.5">
              <span className="text-slate-500 font-medium text-[11px]">Secondary Association</span>
              <span className="text-slate-800 font-medium text-xs">360 Technologies (Founding CEO)</span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
