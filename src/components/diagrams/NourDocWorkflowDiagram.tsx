import React from 'react';
import { Mic, Cpu, FileText, UserCheck, Database, ShieldCheck } from 'lucide-react';

const steps = [
  ['01', 'Clinical Encounter', 'Ambient Dialogue Capture', 'Non-intrusive audio capture of the clinician-patient consultation without interfering with the physical examination or bedside rapport.', Mic],
  ['02', 'Speech & Medical NLP', 'Clinical Concept Extraction', 'Conversational transcription and extraction of medical symptoms, diagnostic terms, clinical history, and physician observations.', Cpu],
  ['03', 'Draft SOAP Note', 'Structured Clinical Synthesis', 'Algorithmic structuring of consultation dialogue into standard Subjective, Objective, Assessment, and Plan documentation.', FileText],
  ['04', 'Clinician Review', 'Mandatory Human Verification', 'Mandatory physician sign-off where the clinician reviews, edits, and verifies the generated summary before record finalisation.', UserCheck],
  ['05', 'EHR Integration', 'Interoperable Health Systems Export', 'Interoperable export designed to interface with hospital electronic health record systems (subject to client technical environments).', Database]
] as const;

export const NourDocWorkflowDiagram: React.FC = () => (
  <div className="overflow-hidden rounded-3xl border border-sky-200/90 bg-white shadow-[0_20px_45px_-28px_rgba(14,116,144,0.32)]">
    <div className="border-b border-sky-100 bg-gradient-to-r from-sky-50 via-white to-white px-6 py-5 sm:px-7"><div className="flex flex-wrap items-center justify-between gap-3"><div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-700">Clinical documentation system</span><h4 className="mt-1 font-display text-lg font-bold text-slate-900">NourDoc clinical record pathway</h4></div><span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white px-3 py-1 text-[10px] font-bold text-sky-700"><ShieldCheck className="h-3.5 w-3.5" /> Physician review required</span></div></div>
    <div className="p-5 sm:p-7"><div className="relative space-y-3 before:absolute before:bottom-5 before:left-5 before:top-5 before:w-px before:bg-sky-200">{steps.map(([number, title, tag, summary, Icon]) => <div key={number} className="relative grid grid-cols-[40px_1fr] gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4"><div className="z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm"><Icon className="h-4 w-4" /></div><div><div className="flex flex-wrap items-center gap-2"><h5 className="font-display text-sm font-bold text-slate-900">{title}</h5><span className="font-mono text-[9px] text-sky-700">STEP {number}</span></div><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{tag}</p><p className="mt-2 text-xs leading-relaxed text-slate-600">{summary}</p></div></div>)}</div></div>
  </div>
);
