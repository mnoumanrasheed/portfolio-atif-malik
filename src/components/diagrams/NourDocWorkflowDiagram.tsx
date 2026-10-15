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
  ShieldCheck,
  Activity,
  Sparkles,
  Lock
} from 'lucide-react';

interface Step {
  id: number;
  number: string;
  title: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  operationalDetails: string[];
}

export const NourDocWorkflowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [stepProgress, setStepProgress] = useState(0);
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
      ]
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
      title: 'EHR Integration',
      tag: 'Interoperable Health Systems Export',
      icon: Database,
      summary: 'Interoperable export designed to interface with hospital electronic health record systems (subject to client technical environments).',
      operationalDetails: [
        'Standards-aligned schema export compatible with HL7/FHIR record specifications',
        'Configurable integration endpoints for hospital information management systems',
        'Deployment architecture adapted to client data sovereignty and clinical protocols'
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

  // Autoplay progression (4.5s per step with continuous live line advance)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !isPlaying || isHovered || !isIntersecting) {
      return;
    }

    const TICK_MS = 50;
    const DURATION_MS = 4500; // 4.5 seconds per step

    const timer = setInterval(() => {
      setStepProgress((prev) => {
        const next = prev + (TICK_MS / DURATION_MS) * 100;
        if (next >= 100) {
          setActiveStep((cur) => (cur + 1) % steps.length);
          return 0;
        }
        return next;
      });
    }, TICK_MS);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isIntersecting, steps.length]);

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  // Calculate live filled line percentage across the 5 nodes (10% to 90% span)
  const fillPercent = activeStep === steps.length - 1 
    ? 100 
    : Math.min(100, ((activeStep + stepProgress / 100) / (steps.length - 1)) * 100);

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] overflow-hidden"
    >
      {/* Top Ambient Specular Refraction Rim */}
      <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#51AAC0]/35 to-transparent pointer-events-none rounded-full" />

      {/* Live Auto-Progression Bar (Pauses in place on hover) */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-sky-100 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#51AAC0] to-sky-600 transition-all duration-75"
          style={{ width: `${stepProgress}%` }}
        />
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-sky-700 font-bold bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
              <span className={`w-1.5 h-1.5 rounded-full bg-sky-500 ${isHovered || !isPlaying ? '' : 'animate-ping'}`} />
              Live Simulation
            </span>
            <span className="text-[11px] text-slate-400 font-medium">5-Phase Pipeline</span>
          </div>
          <h4 className="font-display font-bold text-lg text-slate-900">
            NourDoc Clinical Documentation Workflow
          </h4>
        </div>

        {/* Play / Pause Autoplay Toggle & Protocol Badge */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Physician Sign-Off Required</span>
          </div>

          <span className={`text-[10px] font-mono font-semibold px-2 py-1 rounded-full border transition-all ${
            isHovered || !isPlaying
              ? 'text-amber-800 bg-amber-50 border-amber-200'
              : 'text-sky-700 bg-sky-50 border-sky-200'
          }`}>
            {isHovered ? 'Paused (Hover)' : !isPlaying ? 'Paused' : 'Auto 4.5s'}
          </span>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
            title={isPlaying ? 'Pause workflow demonstration' : 'Resume workflow demonstration'}
            aria-label={isPlaying ? 'Pause workflow demonstration' : 'Resume workflow demonstration'}
          >
            {isPlaying && !isHovered ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Connected Interactive Step Node Pipeline */}
      <div className="my-5 relative">
        {/* Connecting Progress Track Line (Spans from center of Node 0 at 10% to Node 4 at 90%) */}
        <div className="absolute top-5 left-[10%] right-[10%] h-[3px] bg-slate-200/90 rounded-full overflow-hidden -z-0">
          {/* Dynamic Progress Fill Line that smoothly flows forward */}
          <div 
            className="h-full bg-gradient-to-r from-[#51AAC0] via-sky-500 to-sky-600 rounded-full transition-all duration-75 relative"
            style={{ width: `${fillPercent}%` }}
          />
        </div>

        {/* Live Traveling Laser Pulse Node Indicator */}
        <div 
          className="absolute top-5 -translate-y-1/2 -translate-x-1/2 pointer-events-none transition-all duration-75 z-0"
          style={{ left: `calc(10% + ${fillPercent * 0.8}%)` }}
        >
          <span className="relative flex h-3.5 w-3.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 ${isHovered || !isPlaying ? 'opacity-0' : 'opacity-85'}`} />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-sky-600 shadow-md" />
          </span>
        </div>

        <div className="grid grid-cols-5 gap-1.5 relative z-10">
          {steps.map((s) => {
            const isSelected = activeStep === s.id;
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setActiveStep(s.id);
                  setStepProgress(0);
                }}
                className="group flex flex-col items-center text-center focus:outline-none cursor-pointer"
              >
                {/* Step Node Circle */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-md ring-4 ring-sky-100 scale-105'
                    : 'bg-white text-slate-500 border border-slate-200 group-hover:border-sky-300 group-hover:text-sky-700 shadow-2xs'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                <span className={`text-[11px] font-bold mt-2 truncate w-full ${
                  isSelected ? 'text-sky-900 font-extrabold' : 'text-slate-600 group-hover:text-slate-900'
                }`}>
                  {s.title}
                </span>
                <span className="text-[9px] font-mono text-slate-400 hidden sm:block truncate w-full">
                  Step {s.number}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Step Detail Viewer & Live Simulation Interface */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-4 sm:p-5 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/80 pb-2.5 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-sky-600 text-white font-mono text-xs font-bold flex items-center justify-center shadow-2xs">
                {currentStep.number}
              </span>
              <span className="font-display font-bold text-slate-900 text-sm">
                {currentStep.title} · {currentStep.tag}
              </span>
            </div>
            <span className="text-slate-400 font-mono text-[11px]">
              Stage {activeStep + 1} of {steps.length}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {currentStep.summary}
          </p>

          {/* DYNAMIC SIMULATION DEMONSTRATION ACCORDING TO ACTIVE STEP */}
          {activeStep === 0 && (
            /* Step 01: Ambient Acoustic Stream Visualizer */
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5 font-bold text-sky-800">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Ambient Dialogue Waveform
                </span>
                <span>48 kHz Stereo Array</span>
              </div>
              <div className="flex items-center gap-1 h-8 pt-1">
                {[18, 35, 60, 25, 45, 80, 50, 20, 65, 90, 40, 70, 30, 85, 45, 25, 60, 40, 20, 50, 75, 30].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h}%`, `${(h * 1.3) % 100}%`, `${h}%`] }}
                    transition={{ duration: 0.8 + (i % 5) * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex-1 bg-gradient-to-t from-sky-500 to-[#51AAC0] rounded-full opacity-80"
                  />
                ))}
              </div>
            </div>
          )}

          {activeStep === 1 && (
            /* Step 02: Clinical Concept Extraction Cloud */
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-800 block">
                Extracted Clinical Entities:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded-md bg-sky-50 border border-sky-200 text-sky-800 text-[11px] font-mono font-semibold">
                  Symptom: Exertional Dyspnea
                </span>
                <span className="px-2 py-0.5 rounded-md bg-sky-50 border border-sky-200 text-sky-800 text-[11px] font-mono font-semibold">
                  Chronology: 3 Days
                </span>
                <span className="px-2 py-0.5 rounded-md bg-sky-50 border border-sky-200 text-sky-800 text-[11px] font-mono font-semibold">
                  Vitals: BP 124/82 mmHg
                </span>
                <span className="px-2 py-0.5 rounded-md bg-sky-50 border border-sky-200 text-sky-800 text-[11px] font-mono font-semibold">
                  Auscultation: Clear Bilateral
                </span>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            /* Step 03: Structured SOAP Synthesis Card */
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 text-slate-800 shadow-2xs">
              <div className="text-sky-800 border-b border-slate-100 pb-1.5 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Clinical Encounter Synthesis (SOAP Note Draft)</span>
                <span className="text-slate-400 font-normal">ICD-10 Mapped</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-bold text-sky-900 block text-[10px] uppercase">Subjective</span>
                  <span className="text-slate-700 text-[11px]">42yo presenting with 3d exertional dyspnea &amp; non-productive cough.</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-bold text-sky-900 block text-[10px] uppercase">Objective</span>
                  <span className="text-slate-700 text-[11px]">BP 124/82, HR 74, SpO2 98%. Clear breath sounds bilaterally.</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-bold text-sky-900 block text-[10px] uppercase">Assessment</span>
                  <span className="text-slate-700 text-[11px]">Mild viral bronchitis; hemodynamically stable.</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-bold text-sky-900 block text-[10px] uppercase">Plan</span>
                  <span className="text-slate-700 text-[11px]">Supportive hydration, return precautions reviewed.</span>
                </div>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            /* Step 04: Physician-in-the-Loop Verification Stamp */
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-950 block">
                    Physician Verification Confirmed
                  </span>
                  <span className="text-[11px] text-emerald-700 font-mono">
                    Signed by Attending Physician · Audit Timestamp Commuted
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                Verified
              </span>
            </div>
          )}

          {activeStep === 4 && (
            /* Step 05: Standards Interop Payload */
            <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 font-mono text-[11px] space-y-1">
              <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1 text-[10px]">
                <span>FHIR R4 / HL7 Encrypted Payload</span>
                <span className="text-emerald-400">● RESTful Ready</span>
              </div>
              <div className="text-sky-300 pt-1">
                {`{ "resourceType": "Bundle", "type": "document", "entry": [ { "resource": "ClinicalImpression" } ] }`}
              </div>
            </div>
          )}

          {/* Operational Details Bullets */}
          <div className="pt-2 border-t border-slate-200/70">
            <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider block mb-1.5 font-mono">
              Key Safeguards &amp; Architecture:
            </span>
            <ul className="space-y-1">
              {currentStep.operationalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
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
