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
    <div className="border border-neutral-800 bg-mono-900 p-6 sm:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
            [ TELEMETRY & IOT PIPELINE ]
          </span>
          <h3 className="text-xl font-bold text-white uppercase tracking-tight mt-1">
            Smart Animal Continuous Monitoring Loop
          </h3>
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 border border-neutral-800 px-3 py-1 bg-black">
          NON-INVASIVE COLLAR TELEMETRY
        </div>
      </div>

      {/* Module Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-8">
        {modules.map((mod) => {
          const isSelected = activeTelemetry === mod.id;
          return (
            <button
              key={mod.id}
              onClick={() => setActiveTelemetry(mod.id)}
              className={`p-4 text-left transition-all border ${
                isSelected
                  ? 'bg-white text-black border-white'
                  : 'bg-black text-white border-neutral-800 hover:border-neutral-500'
              }`}
            >
              <div className="font-mono text-xs font-bold mb-1 opacity-70">
                {mod.number}
              </div>
              <p className="text-xs font-bold uppercase tracking-tight">{mod.title}</p>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase */}
      <div className="border border-neutral-800 bg-black p-6 sm:p-8 space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <span className="uppercase text-neutral-400">
            [ TELEMETRY LAYER {modules[activeTelemetry].number} ]: {modules[activeTelemetry].title.toUpperCase()}
          </span>
          <span className="text-neutral-500 text-[10px]">
            LAYER {activeTelemetry + 1} OF 4
          </span>
        </div>

        <p className="text-sm text-neutral-200 font-sans leading-relaxed pt-1">
          {modules[activeTelemetry].desc}
        </p>

        {activeTelemetry === 2 && (
          <div className="mt-4 p-4 border border-neutral-800 bg-mono-900 space-y-2 text-neutral-300">
            <div className="text-neutral-500 border-b border-neutral-800 pb-1 text-[10px] uppercase">
              METRIC ANALYSIS WINDOW: HERD #042
            </div>
            <div className="flex items-center justify-between">
              <span>RUMINATION DURATION:</span>
              <span className="text-white font-bold">480 MIN / DAY (BASELINE OK)</span>
            </div>
            <div className="flex items-center justify-between">
              <span>HEAT DETECTION ACTIVITY:</span>
              <span className="text-white font-bold">+38% OVER ROLLING AVERAGE</span>
            </div>
            <div className="pt-2 text-[10px] text-neutral-400 uppercase">
              * Behavior trigger logged for herd manager review
            </div>
          </div>
        )}
      </div>

      <p className="mt-5 text-center font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
        Illustrative IoT telemetry architecture. Field validation and sensor specifications configured for trial scope.
      </p>
    </div>
  );
};
