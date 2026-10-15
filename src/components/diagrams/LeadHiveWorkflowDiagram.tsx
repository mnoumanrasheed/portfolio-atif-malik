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
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface Stage {
  id: number;
  number: string;
  title: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  operationalDetails: string[];
  flowExample?: {
    header: string;
    transcript: { speaker: string; text: string }[];
  };
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
      tag: 'Multi-Channel Capture',
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
      ],
      flowExample: {
        header: 'Sample LeadHive Dialogue Session',
        transcript: [
          { speaker: 'Prospect', text: 'Looking to automate our healthcare intake workflows across 4 clinics.' },
          { speaker: 'LeadHive AI', text: 'Understood. Are you seeking EHR integration (such as Epic or Cerner) or standalone physician transcription?' },
          { speaker: 'Prospect', text: 'EHR integration with our internal system, targeting deployment by Q2.' },
          { speaker: 'LeadHive AI', text: 'Perfect. I have catalogued your 4-clinic footprint and Q2 timeline for our healthcare solutions team.' }
        ]
      }
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
      className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-soft transition-all"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-700 font-bold bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
              Pipeline Architecture
            </span>
            <span className="text-xs text-slate-400 font-medium">4-Stage Funnel</span>
          </div>
          <h3 className="font-display font-extrabold text-xl text-slate-900">
            LeadHive AI Qualification &amp; Hand-Off Pipeline
          </h3>
        </div>

        {/* Play / Pause Autoplay Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Structured Sales Hand-Off</span>
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            title={isPlaying ? 'Pause pipeline demonstration' : 'Resume pipeline demonstration'}
            aria-label={isPlaying ? 'Pause pipeline demonstration' : 'Resume pipeline demonstration'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Stage Selector Grid */}
      <div className="my-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 relative">
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
                className={`group relative p-3 sm:p-3.5 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-indigo-50/90 text-indigo-950 border-indigo-300 shadow-sm ring-1 ring-indigo-300/40'
                    : 'bg-slate-50/70 text-slate-700 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {/* Active progress indicator bar */}
                {isSelected && (
                  <motion.div
                    layoutId="leadhive-active-track"
                    className="absolute top-0 left-0 right-0 h-1 bg-indigo-600 rounded-t-xl"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-indigo-700' : 'text-slate-400'}`}>
                    {stage.number}
                  </span>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-200/70 text-slate-500 group-hover:text-slate-700'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="text-xs font-bold leading-tight text-slate-900 group-hover:text-indigo-900 transition-colors">
                  {stage.title}
                </p>
                <span className="text-[10px] text-slate-500 block mt-0.5 truncate">
                  {stage.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Stage Detail Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPhase}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-50/80 border border-slate-200/90 rounded-xl p-5 sm:p-6 space-y-4 text-xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-3 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center">
                {currentStage.number}
              </span>
              <span className="font-display font-bold text-slate-900 text-sm">
                {currentStage.title} · {currentStage.tag}
              </span>
            </div>
            <span className="text-slate-400 font-mono text-[11px]">
              Stage {selectedPhase + 1} of {stages.length}
            </span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            {currentStage.summary}
          </p>

          {/* Operational Details List */}
          <div className="pt-2 border-t border-slate-200">
            <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-2">
              Pipeline Operational Controls:
            </span>
            <ul className="space-y-1.5">
              {currentStage.operationalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Flow Dialogue Example for Stage 2 */}
          {currentStage.flowExample && (
            <div className="mt-3 p-4 rounded-lg bg-white border border-slate-200 space-y-2.5">
              <div className="text-indigo-800 border-b border-slate-100 pb-1.5 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>{currentStage.flowExample.header}</span>
                <span className="text-slate-400 font-normal">Live Transcript Simulation</span>
              </div>
              <div className="space-y-2 text-xs">
                {currentStage.flowExample.transcript.map((item, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-2 leading-relaxed">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                      item.speaker === 'Prospect' 
                        ? 'bg-slate-100 text-slate-700' 
                        : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {item.speaker}
                    </span>
                    <span className="text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
