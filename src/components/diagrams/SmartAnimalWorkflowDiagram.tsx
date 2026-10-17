import React from 'react';
import { Radio, Wifi, Activity, BellRing, ShieldCheck } from 'lucide-react';

const modules = [
  ['01', 'Livestock Sensor Collar', 'Kinetic & Acoustic Telemetry', 'Ruggedised on-animal collar collecting kinetic movement, feeding duration, and acoustic rumination rhythms under real pasture conditions.', Radio],
  ['02', 'Telemetry Ingestion', 'Edge Filtering & Cloud Gateway', 'Field gateway reception and low-bandwidth transmission of continuous telemetry streams into scalable cloud analytics pipelines.', Wifi],
  ['03', 'Behavioral Modeling', 'Algorithmic Anomaly Detection', 'Statistical time-series modelling detecting deviations from baseline herd rumination and identifying estrus or health events.', Activity],
  ['04', 'Alerts & Herd Ops', 'Operational Decision Support', 'Mobile and desktop herd management dashboards providing actionable notifications to veterinarians and agricultural operators.', BellRing]
] as const;

export const SmartAnimalWorkflowDiagram: React.FC = () => (
  <div className="overflow-hidden rounded-3xl border border-emerald-200/90 bg-white shadow-[0_20px_45px_-28px_rgba(5,150,105,0.28)]">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white px-6 py-5 sm:px-7"><div><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700">Connected herd operations</span><h4 className="mt-1 font-display text-lg font-bold text-slate-900">Smart Animal field overview</h4></div><span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white px-3 py-1 text-[10px] font-bold text-emerald-700"><ShieldCheck className="h-3.5 w-3.5" /> Non-invasive monitoring</span></div>
    <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">{modules.map(([number, title, tag, summary, Icon]) => <div key={number} className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-4"><div className="flex items-start gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm"><Icon className="h-4 w-4" /></span><div><span className="font-mono text-[10px] font-bold text-emerald-600">MODULE {number}</span><h5 className="mt-1 font-display text-sm font-bold text-slate-900">{title}</h5></div></div><p className="mt-4 text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-700">{tag}</p><p className="mt-2 text-xs leading-relaxed text-slate-600">{summary}</p></div>)}</div>
  </div>
);
