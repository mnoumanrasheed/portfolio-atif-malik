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
  ShieldCheck,
  Zap,
  BatteryCharging,
  Gauge
} from 'lucide-react';

interface Module {
  id: number;
  number: string;
  title: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  operationalDetails: string[];
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
      ]
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

  // Autoplay progression (4.5s per tier)
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
      className="relative bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] overflow-hidden"
    >
      {/* Top Ambient Specular Refraction Rim */}
      <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#34D399]/35 to-transparent pointer-events-none rounded-full" />

      {/* Live Auto-Progression Bar */}
      {isPlaying && !isHovered && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-emerald-100 overflow-hidden">
          <motion.div
            key={activeTelemetry}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 4.5, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-[#34D399] to-emerald-600"
          />
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Live Simulation
            </span>
            <span className="text-[11px] text-slate-400 font-medium">4-Tier IoT Loop</span>
          </div>
          <h4 className="font-display font-bold text-lg text-slate-900 leading-snug">
            Smart Animal Monitoring Loop
          </h4>
        </div>

        {/* Play / Pause Toggle & Non-Invasive Badge */}
        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Non-Invasive Collar</span>
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-2xs"
            title={isPlaying ? 'Pause telemetry demonstration' : 'Resume telemetry demonstration'}
            aria-label={isPlaying ? 'Pause telemetry demonstration' : 'Resume telemetry demonstration'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Connected Interactive Tier Node Pipeline */}
      <div className="my-5 relative">
        {/* Connecting Progress Track Line */}
        <div className="absolute top-5 left-6 right-6 h-[2px] bg-slate-200 -z-0" />
        
        {/* Dynamic Progress Fill Line */}
        <div 
          className="absolute top-5 left-6 h-[2px] bg-emerald-500 transition-all duration-300 -z-0"
          style={{ width: `${(activeTelemetry / (modules.length - 1)) * 92}%` }}
        />

        <div className="grid grid-cols-4 gap-2 relative z-10">
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
                className="group flex flex-col items-center text-center focus:outline-none"
              >
                {/* Tier Node Circle */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md ring-4 ring-emerald-100 scale-105'
                    : 'bg-white text-slate-500 border border-slate-200 group-hover:border-emerald-300 group-hover:text-emerald-700 shadow-2xs'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                <span className={`text-[11px] font-bold mt-2 truncate w-full ${
                  isSelected ? 'text-emerald-900 font-extrabold' : 'text-slate-600 group-hover:text-slate-900'
                }`}>
                  {mod.title}
                </span>
                <span className="text-[9px] font-mono text-slate-400 hidden sm:block truncate w-full">
                  Tier {mod.number}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Tier Detail Viewer & Live Telemetry Stream */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTelemetry}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-4 sm:p-5 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/80 pb-2.5 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center shadow-2xs">
                {currentModule.number}
              </span>
              <span className="font-display font-bold text-slate-900 text-sm">
                {currentModule.title} · {currentModule.tag}
              </span>
            </div>
            <span className="text-slate-400 font-mono text-[11px]">
              IoT Tier {activeTelemetry + 1} of {modules.length}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {currentModule.summary}
          </p>

          {/* DYNAMIC SIMULATION DEMONSTRATION ACCORDING TO TIER */}
          {activeTelemetry === 0 && (
            /* Tier 01: Collar Hardware Sensor Specs */
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="font-bold text-emerald-900">Collar Hardware Telemetry</span>
                <span className="text-emerald-600 font-bold">● Sensor Active · 98% Battery</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 font-mono text-[11px]">
                  <span className="text-emerald-700 font-bold block">Accelerometer</span>
                  <span className="text-slate-500 text-[10px]">Tri-Axis Motion</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 font-mono text-[11px]">
                  <span className="text-emerald-700 font-bold block">Acoustic Audio</span>
                  <span className="text-slate-500 text-[10px]">Rumination Sensor</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 font-mono text-[11px]">
                  <span className="text-emerald-700 font-bold block">LoRa Transmitter</span>
                  <span className="text-slate-500 text-[10px]">5km Range</span>
                </div>
              </div>
            </div>
          )}

          {activeTelemetry === 1 && (
            /* Tier 02: LoRaWAN Telemetry Packet Ingestion Stream */
            <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 font-mono text-[11px] space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1 text-[10px]">
                <span>LoRaWAN Gateway Packet Stream</span>
                <span className="text-emerald-400 font-bold">● Uplink -82 dBm</span>
              </div>
              <div className="space-y-1 text-[11px] text-emerald-300">
                <div className="flex items-center justify-between">
                  <span>PACKET #10842 [NODE_042]</span>
                  <span className="text-slate-400">RUM_MIN: 448 | ACT_PTS: 112</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>PACKET #10841 [NODE_041]</span>
                  <span className="text-slate-500">RUM_MIN: 432 | ACT_PTS: 108</span>
                </div>
              </div>
            </div>
          )}

          {activeTelemetry === 2 && (
            /* Tier 03: Live Biometric Telemetry Station */
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 shadow-2xs">
              <div className="text-emerald-900 border-b border-slate-100 pb-1.5 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Sample Telemetry Stream : Cow ID #042 (Holst.)</span>
                <span className="text-emerald-600 font-normal">● Ingestion Nominal</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[10px] block">Rumination Rhythm</span>
                  <span className="font-bold text-emerald-900 text-[11px]">448 min/day (Optimal)</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[10px] block">Active Grazing</span>
                  <span className="font-bold text-emerald-900 text-[11px]">7.8 hrs/day (Stable)</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[10px] block">Kinetic Activity Index</span>
                  <span className="font-bold text-emerald-900 text-[11px]">112 pts (+4% Baseline)</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[10px] block">Algorithmic Anomaly Score</span>
                  <span className="font-bold text-emerald-900 text-[11px]">0.02 (Nominal Range)</span>
                </div>
              </div>
            </div>
          )}

          {activeTelemetry === 3 && (
            /* Tier 04: Push Notification Alert Card */
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <BellRing className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-950 block">
                    Veterinary Early Warning System Active
                  </span>
                  <span className="text-[11px] text-emerald-700 font-mono">
                    Estrus window notification &amp; rumination deviation alerts armed
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                Armed
              </span>
            </div>
          )}

          {/* Operational Details Bullets */}
          <div className="pt-2 border-t border-slate-200/70">
            <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider block mb-1.5 font-mono">
              Tier Technical Controls:
            </span>
            <ul className="space-y-1">
              {currentModule.operationalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
