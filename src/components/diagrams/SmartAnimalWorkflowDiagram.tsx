import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Radio, 
  Wifi, 
  Activity, 
  BellRing, 
  Play, 
  Pause, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface Module {
  id: number;
  number: string;
  title: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  operationalDetails: string[];
  telemetryStreamExample?: {
    header: string;
    metrics: { key: string; value: string; status: string }[];
  };
}

export const SmartAnimalWorkflowDiagram: React.FC = () => {
  const [activeTelemetry, setActiveTelemetry] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  const modules: Module[] = [
    {
      id: 0,
      number: '01',
      title: 'Livestock Sensor Collar',
      tag: 'Kinetic & Acoustic Telemetry',
      icon: Radio,
      summary: 'Ruggedised on-animal collar collecting kinetic movement, feeding duration, and acoustic rumination rhythms under real pasture conditions.',
      operationalDetails: [
        'Non-invasive collar casing engineered for multi-season all-weather durability',
        'Multi-axis accelerometer captures grazing posture and active jaw motions',
        'Acoustic transducer captures rumination frequency and mastication cycles'
      ]
    },
    {
      id: 1,
      number: '02',
      title: 'Telemetry Ingestion',
      tag: 'Edge Filtering & Cloud Gateway',
      icon: Wifi,
      summary: 'Field gateway reception and low-bandwidth transmission of continuous telemetry streams into scalable cloud analytics pipelines.',
      operationalDetails: [
        'LoRaWAN / cellular field gateways capture sensor data over expansive pastures',
        'Local edge buffering ensures telemetry persistence during intermittent connectivity',
        'Compressed data ingestion optimises power consumption for multi-year battery life'
      ]
    },
    {
      id: 2,
      number: '03',
      title: 'Behavioral Modeling',
      tag: 'Algorithmic Anomaly Detection',
      icon: Activity,
      summary: 'Statistical time-series modelling detecting deviations from baseline herd rumination and identifying estrus or health events.',
      operationalDetails: [
        'Individual baseline calibration accounts for age, lactation stage, and season',
        'Rumination decline indicators provide early warning prior to clinical symptoms',
        'Activity surge modelling assists in timely detection of insemination windows'
      ],
      telemetryStreamExample: {
        header: 'Sample Telemetry Stream — Cow ID #042 (Holst.)',
        metrics: [
          { key: 'Rumination Rhythm', value: '448 min/day (Normal)', status: 'Nominal' },
          { key: 'Active Grazing', value: '7.8 hrs/day (Stable)', status: 'Nominal' },
          { key: 'Kinetic Activity Index', value: '112 pts (+4% baseline)', status: 'Optimal' },
          { key: 'Health Alert State', value: 'No deviation flags', status: 'Clear' }
        ]
      }
    },
    {
      id: 3,
      number: '04',
      title: 'Alerts & Herd Ops',
      tag: 'Operational Decision Support',
      icon: BellRing,
      summary: 'Mobile and desktop herd management dashboards providing actionable notifications to veterinarians and agricultural operators.',
      operationalDetails: [
        'Timely push alerts highlight animals requiring veterinary inspection',
        'Population-level dashboards summarise pasture health and nutritional adequacy',
        'Historical telemetry graphs support informed breeding and treatment decisions'
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

  // Autoplay progression (4.5s per module)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !isPlaying || isHovered || !isIntersecting) {
      return;
    }

    const timer = setInterval(() => {
      setActiveTelemetry((prev) => (prev + 1) % modules.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isIntersecting, modules.length]);

  const currentModule = modules[activeTelemetry];
  const ModuleIcon = currentModule.icon;

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
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Telemetry Architecture
            </span>
            <span className="text-xs text-slate-400 font-medium">4-Tier IoT Loop</span>
          </div>
          <h3 className="font-display font-extrabold text-xl text-slate-900">
            Smart Animal Continuous Monitoring Loop
          </h3>
        </div>

        {/* Play / Pause Autoplay Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Non-Invasive Collar Telemetry</span>
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            title={isPlaying ? 'Pause telemetry demonstration' : 'Resume telemetry demonstration'}
            aria-label={isPlaying ? 'Pause telemetry demonstration' : 'Resume telemetry demonstration'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Module Selector Grid */}
      <div className="my-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 relative">
          {modules.map((mod) => {
            const isSelected = activeTelemetry === mod.id;
            const Icon = mod.icon;
            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => {
                  setActiveTelemetry(mod.id);
                  setIsPlaying(false);
                }}
                className={`group relative p-3 sm:p-3.5 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-emerald-50/90 text-emerald-950 border-emerald-300 shadow-sm ring-1 ring-emerald-300/40'
                    : 'bg-slate-50/70 text-slate-700 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {/* Active progress indicator bar */}
                {isSelected && (
                  <motion.div
                    layoutId="smartanimal-active-track"
                    className="absolute top-0 left-0 right-0 h-1 bg-emerald-600 rounded-t-xl"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-emerald-700' : 'text-slate-400'}`}>
                    {mod.number}
                  </span>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-200/70 text-slate-500 group-hover:text-slate-700'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="text-xs font-bold leading-tight text-slate-900 group-hover:text-emerald-900 transition-colors">
                  {mod.title}
                </p>
                <span className="text-[10px] text-slate-500 block mt-0.5 truncate">
                  {mod.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Module Detail Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTelemetry}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-50/80 border border-slate-200/90 rounded-xl p-5 sm:p-6 space-y-4 text-xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-3 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center">
                {currentModule.number}
              </span>
              <span className="font-display font-bold text-slate-900 text-sm">
                {currentModule.title} — {currentModule.tag}
              </span>
            </div>
            <span className="text-slate-400 font-mono text-[11px]">
              Tier {activeTelemetry + 1} of {modules.length}
            </span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            {currentModule.summary}
          </p>

          {/* Operational Details List */}
          <div className="pt-2 border-t border-slate-200">
            <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-2">
              Hardware &amp; Telemetry Specifications:
            </span>
            <ul className="space-y-1.5">
              {currentModule.operationalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Telemetry Stream Simulation for Module 2 */}
          {currentModule.telemetryStreamExample && (
            <div className="mt-3 p-4 rounded-lg bg-white border border-slate-200 space-y-2.5">
              <div className="text-emerald-800 border-b border-slate-100 pb-1.5 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>{currentModule.telemetryStreamExample.header}</span>
                <span className="text-slate-400 font-normal">Live Ingestion Telemetry</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {currentModule.telemetryStreamExample.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="p-2 rounded bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="text-slate-600">{metric.key}:</span>
                    <span className="font-bold text-slate-900">{metric.value}</span>
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
