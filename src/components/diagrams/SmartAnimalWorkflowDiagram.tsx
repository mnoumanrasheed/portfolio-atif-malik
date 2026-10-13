import React, { useState } from 'react';

export const SmartAnimalWorkflowDiagram: React.FC = () => {
  const [activeTelemetry, setActiveTelemetry] = useState(1);

  const modules = [
    {
      id: 0,
      number: '01',
      title: 'Sensor Collar',
      desc: 'Ruggedised on-animal collar collecting kinetic activity, eating motions, and rumination metrics.'
    },
    {
      id: 1,
      number: '02',
      title: 'Telemetry Ingestion',
      desc: 'Gateway capture and transmission of continuous sensor streams to cloud analytics pipelines.'
    },
    {
      id: 2,
      number: '03',
      title: 'Behavioral Modeling',
      desc: 'Algorithmic indicators for heat detection, rumination irregularities, and digestion deviations.'
    },
    {
      id: 3,
      number: '04',
      title: 'Alerts & Herd Ops',
      desc: 'Mobile herd management interface providing timely alerts and operational decision support.'
    }
  ];

  return (
    <div className="bg-white border border-line rounded-card p-6 sm:p-8 shadow-soft">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-line gap-4">
        <div>
          <span className="eyebrow text-accent block">
            Telemetry & IoT Architecture
          </span>
          <h3 className="font-display font-bold text-xl text-ink mt-0.5">
            Smart Animal Continuous Monitoring Loop
          </h3>
        </div>
        <div className="inline-flex items-center text-xs font-semibold text-accent bg-accent-wash border border-accent/20 px-3 py-1 rounded-full self-start sm:self-auto">
          Non-Invasive Collar Telemetry
        </div>
      </div>

      {/* Module Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6">
        {modules.map((mod) => {
          const isSelected = activeTelemetry === mod.id;
          return (
            <button
              key={mod.id}
              onClick={() => setActiveTelemetry(mod.id)}
              className={`p-3.5 rounded-lg text-left transition-all border ${
                isSelected
                  ? 'bg-accent text-white border-accent shadow-sm'
                  : 'bg-canvas-subtle text-ink border-line hover:border-accent/40 hover:bg-white'
              }`}
            >
              <div className={`text-xs font-bold mb-1 ${isSelected ? 'text-white/80' : 'text-accent'}`}>
                {mod.number}
              </div>
              <p className="text-xs font-semibold leading-tight">{mod.title}</p>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase */}
      <div className="bg-canvas-subtle border border-line rounded-lg p-5 sm:p-6 space-y-3 text-xs">
        <div className="flex items-center justify-between border-b border-line pb-2.5">
          <span className="font-semibold text-accent uppercase tracking-wider text-xs">
            Layer {modules[activeTelemetry].number}: {modules[activeTelemetry].title}
          </span>
          <span className="text-ink-subtle text-[11px]">
            Layer {activeTelemetry + 1} of 4
          </span>
        </div>

        <p className="text-sm text-ink-body leading-relaxed">
          {modules[activeTelemetry].desc}
        </p>

        {activeTelemetry === 2 && (
          <div className="mt-3 p-4 rounded-md bg-white border border-line space-y-2 text-ink">
            <div className="text-ink-subtle border-b border-line pb-1 text-[11px] font-semibold uppercase tracking-wider">
              Sample Herd Metric Stream: Herd #042
            </div>
            <div className="text-xs space-y-1.5 text-ink-body">
              <div className="flex items-center justify-between">
                <span>Rumination Duration:</span>
                <span className="font-semibold text-ink">480 min/day (Normal Baseline)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estrus Activity Indication:</span>
                <span className="font-semibold text-accent">+38% Above Rolling 7-Day Average</span>
              </div>
              <div className="text-[11px] text-ink-muted pt-1">
                Triggered Automated Mobile Notification &rarr; Livestock Manager
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
