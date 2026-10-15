import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Inbox, 
  MessageSquareCode, 
  Target, 
  UserCheck, 
  Play, 
  Pause, 
  CheckCircle2, 
  Sparkles,
  Zap,
  TrendingUp,
  CalendarCheck
} from 'lucide-react';

interface Stage {
  id: number;
  number: string;
  title: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  operationalDetails: string[];
}

export const LeadHiveWorkflowDiagram: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  const stages: Stage[] = [
    {
      id: 0,
      number: '01',
      title: 'Incoming Enquiry',
      tag: 'Multi-Channel Ingestion',
      icon: Inbox,
      summary: 'Inbound capture across enterprise web forms, direct chat widgets, messaging platforms, and digital acquisition channels in real time.',
      operationalDetails: [
        'Instant response initiation prevents prospect decay from delayed human follow-up',
        'Captures initial prospect context, referral channel, and declared business focus',
        'Normalises inbound inputs into a unified qualification session'
      ]
    },
    {
      id: 1,
      number: '02',
      title: 'Conversational Qualification',
      tag: 'Adaptive Logic Dialogue',
      icon: MessageSquareCode,
      summary: 'Structured qualification dialogue matching prospect responses against business-defined parameters and operational criteria.',
      operationalDetails: [
        'Dynamically probes for operational scope, timeline, decision authority, and technical constraints',
        'Adapts conversation tone according to enterprise vs mid-market business contexts',
        'Gathers critical qualification data naturally without rigid, repetitive form fields'
      ]
    },
    {
      id: 2,
      number: '03',
      title: 'Prospect Information',
      tag: 'Intent Scoring & Synthesis',
      icon: Target,
      summary: 'Automated synthesis categorising prospect urgency, requirement fidelity, and business fit prior to human notification.',
      operationalDetails: [
        'Generates an executive prospect dossier with key conversation extracts',
        'Assigns objective urgency ratings based on declared budget, timeline, and authority',
        'Flags key objections or compliance requirements for the account executive'
      ]
    },
    {
      id: 3,
      number: '04',
      title: 'Human Sales Hand-Off',
      tag: 'Configurable Dispatch',
      icon: UserCheck,
      summary: 'Prepared hand-off dispatching the structured conversation brief to the designated sales executive or CRM notification endpoint.',
      operationalDetails: [
        'Sales representative receives pre-screened prospect dossier before discovery call',
        'Zero repeated questions for the client: representative has complete background context',
        'Configurable dispatch via email notification, webhook, or enterprise CRM interface'
      ]
    }
  ];

  // Pause autoplay when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Autoplay progression (4.5s per stage)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !isPlaying || isHovered || !isIntersecting) {
      return;
    }

    const timer = setInterval(() => {
      setSelectedPhase((prev) => (prev + 1) % stages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isIntersecting, stages.length]);

  const currentStage = stages[selectedPhase];
  const StageIcon = currentStage.icon;

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] overflow-hidden"
    >
      {/* Top Ambient Specular Refraction Rim */}
      <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#818CF8]/35 to-transparent pointer-events-none rounded-full" />

      {/* Live Auto-Progression Bar */}
      {isPlaying && !isHovered && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-indigo-100 overflow-hidden">
          <motion.div
            key={selectedPhase}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 4.5, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-[#818CF8] to-indigo-600"
          />
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-indigo-700 font-bold bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
              Live Simulation
            </span>
            <span className="text-[11px] text-slate-400 font-medium">4-Stage Pipeline</span>
          </div>
          <h4 className="font-display font-bold text-lg text-slate-900 leading-snug">
            LeadHive AI Qualification Pipeline
          </h4>
        </div>

        {/* Play / Pause Toggle & Hand-Off Badge */}
        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-indigo-800 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Autonomous Routing</span>
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-2xs"
            title={isPlaying ? 'Pause pipeline demonstration' : 'Resume pipeline demonstration'}
            aria-label={isPlaying ? 'Pause pipeline demonstration' : 'Resume pipeline demonstration'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Connected Interactive Stage Node Pipeline */}
      <div className="my-5 relative">
        {/* Connecting Progress Track Line */}
        <div className="absolute top-5 left-6 right-6 h-[2px] bg-slate-200 -z-0" />
        
        {/* Dynamic Progress Fill Line */}
        <div 
          className="absolute top-5 left-6 h-[2px] bg-indigo-500 transition-all duration-300 -z-0"
          style={{ width: `${(selectedPhase / (stages.length - 1)) * 92}%` }}
        />

        <div className="grid grid-cols-4 gap-2 relative z-10">
          {stages.map((stage) => {
            const isSelected = selectedPhase === stage.id;
            const Icon = stage.icon;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => {
                  setSelectedPhase(stage.id);
                  setIsPlaying(false);
                }}
                className="group flex flex-col items-center text-center focus:outline-none"
              >
                {/* Stage Node Circle */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md ring-4 ring-indigo-100 scale-105'
                    : 'bg-white text-slate-500 border border-slate-200 group-hover:border-indigo-300 group-hover:text-indigo-700 shadow-2xs'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                <span className={`text-[11px] font-bold mt-2 truncate w-full ${
                  isSelected ? 'text-indigo-900 font-extrabold' : 'text-slate-600 group-hover:text-slate-900'
                }`}>
                  {stage.title}
                </span>
                <span className="text-[9px] font-mono text-slate-400 hidden sm:block truncate w-full">
                  Stage {stage.number}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Stage Detail Viewer & Simulation Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPhase}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-4 sm:p-5 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/80 pb-2.5 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center shadow-2xs">
                {currentStage.number}
              </span>
              <span className="font-display font-bold text-slate-900 text-sm">
                {currentStage.title} · {currentStage.tag}
              </span>
            </div>
            <span className="text-slate-400 font-mono text-[11px]">
              Funnel Stage {selectedPhase + 1} of {stages.length}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {currentStage.summary}
          </p>

          {/* DYNAMIC SIMULATION DEMONSTRATION ACCORDING TO STAGE */}
          {selectedPhase === 0 && (
            /* Stage 01: Multi-Channel Ingestion Visualizer */
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="font-bold text-indigo-900">Active Ingestion Channels</span>
                <span className="text-emerald-600 font-bold">● Multi-Channel Listening</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 font-mono text-[11px]">
                  <span className="text-indigo-700 font-bold block">Web Widget</span>
                  <span className="text-slate-500 text-[10px]">Instant Engagement</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 font-mono text-[11px]">
                  <span className="text-indigo-700 font-bold block">WhatsApp API</span>
                  <span className="text-slate-500 text-[10px]">Direct Mobile Messaging</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 font-mono text-[11px]">
                  <span className="text-indigo-700 font-bold block">Inbound Email</span>
                  <span className="text-slate-500 text-[10px]">Structured Parser</span>
                </div>
              </div>
            </div>
          )}

          {selectedPhase === 1 && (
            /* Stage 02: Interactive Conversational Dialogue Preview */
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 shadow-2xs">
              <div className="text-indigo-900 border-b border-slate-100 pb-1.5 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Adaptive Qualification Dialogue</span>
                <span className="text-emerald-600 font-normal">● Live Session #419</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-mono font-bold shrink-0">Prospect</span>
                  <span className="text-slate-700 text-[11px]">Looking to automate healthcare intake workflows across 4 clinic locations.</span>
                </div>
                <div className="flex items-start gap-2 bg-indigo-50/70 p-2 rounded-lg border border-indigo-100">
                  <span className="px-1.5 py-0.5 rounded bg-indigo-600 text-white text-[10px] font-mono font-bold shrink-0">LeadHive AI</span>
                  <span className="text-indigo-950 text-[11px]">Understood. Are you seeking EHR integration (Epic/Cerner) or standalone physician transcription?</span>
                </div>
              </div>
            </div>
          )}

          {selectedPhase === 2 && (
            /* Stage 03: Intent & Budget Scoring Meter */
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">Prospect Intent &amp; Qualification Score</span>
                <span className="text-xs font-mono font-bold text-indigo-700">94 / 100 · High Priority</span>
              </div>
              {/* Animated Progress Bar */}
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '94%' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-[#51AAC0] rounded-full"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                <span>Budget: $50k+ Verified</span>
                <span>Timeline: Q2 Deployment</span>
                <span>Decision Maker: Direct</span>
              </div>
            </div>
          )}

          {selectedPhase === 3 && (
            /* Stage 04: Sales Calendar Hand-Off Card */
            <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo-950 block">
                    Enterprise Sales Hand-Off Dispatched
                  </span>
                  <span className="text-[11px] text-indigo-700 font-mono">
                    Pre-screened brief routed to Lead Enterprise Solutions Director
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded border border-indigo-300">
                Routed
              </span>
            </div>
          )}

          {/* Operational Details Bullets */}
          <div className="pt-2 border-t border-slate-200/70">
            <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider block mb-1.5 font-mono">
              Pipeline Operational Controls:
            </span>
            <ul className="space-y-1">
              {currentStage.operationalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
