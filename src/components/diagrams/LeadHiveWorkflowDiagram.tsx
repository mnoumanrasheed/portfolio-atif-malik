import React from 'react';
import { Inbox, MessageSquareCode, Target, UserCheck, Sparkles } from 'lucide-react';

const stages = [
  ['01', 'Incoming Enquiry', 'Multi-Channel Ingestion', 'Inbound capture across enterprise web forms, direct chat widgets, messaging platforms, and digital acquisition channels in real time.', Inbox],
  ['02', 'Conversational Qualification', 'Adaptive Logic Dialogue', 'Structured qualification dialogue matching prospect responses against business-defined parameters and operational criteria.', MessageSquareCode],
  ['03', 'Prospect Information', 'Intent Scoring & Synthesis', 'Automated synthesis categorising prospect urgency, requirement fidelity, and business fit prior to human notification.', Target],
  ['04', 'Human Sales Hand-Off', 'Configurable Dispatch', 'Prepared hand-off dispatching the structured conversation brief to the designated sales executive or CRM notification endpoint.', UserCheck]
] as const;

export const LeadHiveWorkflowDiagram: React.FC = () => (
  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_45px_-28px_rgba(15,23,42,0.18)]">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-6 py-5 sm:px-7"><div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">Qualification board</span><h4 className="mt-1 font-display text-lg font-bold text-slate-900">LeadHive opportunity routing</h4></div><span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-bold text-slate-600"><Sparkles className="h-3.5 w-3.5" /> Structured hand-off</span></div>
    <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-7">{stages.map(([number, title, tag, summary, Icon]) => <div key={number} className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:bg-slate-100"><div className="flex items-center justify-between"><span className="font-mono text-[10px] font-bold text-slate-500">STAGE {number}</span><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm"><Icon className="h-4 w-4" /></span></div><h5 className="mt-5 font-display text-sm font-bold text-slate-900">{title}</h5><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">{tag}</p><p className="mt-3 text-xs leading-relaxed text-slate-600">{summary}</p></div>)}</div>
  </div>
);
