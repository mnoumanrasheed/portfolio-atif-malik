import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, 
  Cpu, 
  FileText, 
  UserCheck, 
  Database, 
  Play, 
  Pause, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface Step {
  id: number;
  number: string;
  title: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  operationalDetails: string[];
  schemaExample?: {
    header: string;
    lines: { label: string; text: string }[];
  };
}

export const NourDocWorkflowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  const steps: Step[] = [
    {
      id: 0,
      number: '01',
      title: 'Clinical Encounter',
      tag: 'Ambient Dialogue Capture',
      icon: Mic,
      summary: 'Non-intrusive audio capture of the clinician-patient consultation without interfering with the physical examination or bedside rapport.',
      operationalDetails: [
        'Passive microphone array captures bilateral patient-clinician conversation',
        'Noise suppression isolates clinical speech from ambient hospital equipment',
        'No direct manual keyboard entry required during the physical consultation'
      ]
    },
    {
      id: 1,
      number: '02',
      title: 'Speech & Medical NLP',
      tag: 'Clinical Concept Extraction',
      icon: Cpu,
      summary: 'Conversational transcription and extraction of medical symptoms, diagnostic terms, clinical history, and physician observations.',
      operationalDetails: [
        'Domain-specific medical vocabulary transcription with clinical accuracy',
        'Entity recognition extracts symptoms, duration, dosage, and patient chronology',
        'Discards conversational small talk and retains relevant diagnostic facts'
      ]
    },
    {
      id: 2,
      number: '03',
      title: 'Draft SOAP Note',
      tag: 'Structured Clinical Synthesis',
      icon: FileText,
      summary: 'Algorithmic structuring of consultation dialogue into standard Subjective, Objective, Assessment, and Plan documentation.',
      operationalDetails: [
        'Subjective: Patient-reported symptoms, timeline, and current medications',
        'Objective: Clinical examination findings, vitals, and diagnostic results',
        'Assessment & Plan: Clinical diagnostic considerations and physician action items'
      ],
      schemaExample: {
        header: 'Synthesised Clinical Encounter Note (Draft)',
        lines: [
          { label: 'Subjective', text: '42yo patient presents with 3-day history of exertional dyspnea and persistent non-productive cough.' },
          { label: 'Objective', text: 'BP 124/82 mmHg, HR 74 bpm, SpO2 98% room air. Bilateral breath sounds clear without wheezing.' },
          { label: 'Assessment', text: 'Upper respiratory infection vs mild viral bronchitis; hemodynamically stable.' },
          { label: 'Plan', text: 'Supportive hydration, symptomatic relief. Return precautions advised if dyspnea accelerates.' }
        ]
      }
    },
    {
      id: 3,
      number: '04',
      title: 'Clinician Review',
      tag: 'Mandatory Human Verification',
      icon: UserCheck,
      summary: 'Mandatory physician sign-off where the clinician reviews, edits, and verifies the generated summary before record finalisation.',
      operationalDetails: [
        'Strict Physician-in-the-Loop protocol: no note committed without sign-off',
        'Inline editing allows the physician to amend clinical nuances or add observations',
        'Full audit trail preserves original audio reference and physician modifications'
      ]
    },
    {
      id: 4,
      number: '05',
      title: 'Potential System Integration',
      tag: 'EHR / HIMS Export Interface',
      icon: Database,
      summary: 'Interoperable export designed to interface with hospital electronic health record systems (subject to client technical environments).',
      operationalDetails: [
        'Standards-aligned schema export compatible with HL7/FHIR record specifications',
        'Configurable integration endpoints for hospital information management systems',
        'Deployment architecture adapted to client data sovereignty and clinical protocols'
      ]
    }
  ];

  // IntersectionObserver to pause autoplay when off-screen
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

  // Autoplay progression (4.5s per step)
  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !isPlaying || isHovered || !isIntersecting) {
      return;
    }

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isIntersecting, steps.length]);

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

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
            <span className="text-[10px] font-mono uppercase tracking-widest text-sky-700 font-bold bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
              Clinical Architecture
            </span>
            <span className="text-xs text-slate-400 font-medium">5-Phase Pipeline</span>
          </div>
          <h3 className="font-display font-extrabold text-xl text-slate-900">
            NourDoc Clinical Documentation Workflow
          </h3>
        </div>

        {/* Play / Pause Autoplay Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Physician-in-the-Loop Protocol</span>
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            title={isPlaying ? 'Pause workflow demonstration' : 'Resume workflow demonstration'}
            aria-label={isPlaying ? 'Pause workflow demonstration' : 'Resume workflow demonstration'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Interactive Step Track with Animated Connecting Line */}
      <div className="my-6">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5 relative">
          {steps.map((s, idx) => {
            const isSelected = activeStep === s.id;
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setActiveStep(s.id);
                  setIsPlaying(false); // Pause autoplay when user explicitly selects
                }}
                className={`group relative p-3 sm:p-3.5 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-sky-50/90 text-sky-950 border-sky-300 shadow-sm ring-1 ring-sky-300/40'
                    : 'bg-slate-50/70 text-slate-700 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {/* Active progress indicator bar */}
                {isSelected && (
                  <motion.div
                    layoutId="nourdoc-active-track"
                    className="absolute top-0 left-0 right-0 h-1 bg-sky-600 rounded-t-xl"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-sky-700' : 'text-slate-400'}`}>
                    {s.number}
                  </span>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-sky-600 text-white' : 'bg-slate-200/70 text-slate-500 group-hover:text-slate-700'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="text-xs font-bold leading-tight text-slate-900 group-hover:text-sky-900 transition-colors">
                  {s.title}
                </p>
                <span className="text-[10px] text-slate-500 block mt-0.5 truncate">
                  {s.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Step Detail Viewer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-50/80 border border-slate-200/90 rounded-xl p-5 sm:p-6 space-y-4 text-xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-3 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-sky-600 text-white font-mono text-xs font-bold flex items-center justify-center">
                {currentStep.number}
              </span>
              <span className="font-display font-bold text-slate-900 text-sm">
                {currentStep.title} · {currentStep.tag}
              </span>
            </div>
            <span className="text-slate-400 font-mono text-[11px]">
              Step {activeStep + 1} of {steps.length}
            </span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            {currentStep.summary}
          </p>

          {/* Operational Details List */}
          <div className="pt-2 border-t border-slate-200">
            <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-2">
              Architectural &amp; Clinical Safeguards:
            </span>
            <ul className="space-y-1.5">
              {currentStep.operationalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sample Schema Output for Step 3 (SOAP Synthesis) */}
          {currentStep.schemaExample && (
            <div className="mt-3 p-4 rounded-lg bg-white border border-slate-200 space-y-2 text-slate-800">
              <div className="text-sky-800 border-b border-slate-100 pb-1.5 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>{currentStep.schemaExample.header}</span>
                <span className="text-slate-400 font-normal">SOAP Format</span>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                {currentStep.schemaExample.lines.map((line, lIdx) => (
                  <div key={lIdx} className="leading-relaxed">
                    <span className="font-bold text-sky-900">[{line.label}]</span>{' '}
                    <span className="text-slate-700">{line.text}</span>
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
