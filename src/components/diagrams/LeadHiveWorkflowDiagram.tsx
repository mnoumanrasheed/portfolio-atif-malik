import React, { useState } from 'react';

export const LeadHiveWorkflowDiagram: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState(1);

  const stages = [
    {
      id: 0,
      number: '01',
      title: 'Inbound Ingestion',
      desc: 'Capture enquiries across web forms, messaging platforms, and digital campaigns in real time.'
    },
    {
      id: 1,
      number: '02',
      title: 'Conversational Qualification',
      desc: 'Structured qualification dialogue matching prospect responses against business-defined criteria.'
    },
    {
      id: 2,
      number: '03',
      title: 'Intent Scoring',
      desc: 'Categorise urgency, budget alignment, and requirements prior to human sales notification.'
    },
    {
      id: 3,
      number: '04',
      title: 'Executive Hand-Off',
      desc: 'Seamless dispatch to human sales reps or CRM with full conversational summary and profile context.'
    }
  ];

  return (
    <div className="border border-neutral-800 bg-mono-900 p-6 sm:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
            [ PIPELINE ARCHITECTURE ]
          </span>
          <h3 className="text-xl font-bold text-white uppercase tracking-tight mt-1">
            LeadHive AI Qualification & Hand-off Pipeline
          </h3>
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 border border-neutral-800 px-3 py-1 bg-black">
          MULTI-CHANNEL CHANNEL INTEGRATION
        </div>
      </div>

      {/* Stage Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-8">
        {stages.map((stage) => {
          const isSelected = selectedPhase === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedPhase(stage.id)}
              className={`p-4 text-left transition-all border ${
                isSelected
                  ? 'bg-white text-black border-white'
                  : 'bg-black text-white border-neutral-800 hover:border-neutral-500'
              }`}
            >
              <div className="font-mono text-xs font-bold mb-1 opacity-70">
                {stage.number}
              </div>
              <p className="text-xs font-bold uppercase tracking-tight">{stage.title}</p>
            </button>
          );
        })}
      </div>

      {/* Interactive Phase Details */}
      <div className="border border-neutral-800 bg-black p-6 sm:p-8 space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <span className="uppercase text-neutral-400">
            [ STAGE {stages[selectedPhase].number} ]: {stages[selectedPhase].title.toUpperCase()}
          </span>
          <span className="text-neutral-500 text-[10px]">
            STEP {selectedPhase + 1} OF 4
          </span>
        </div>

        <p className="text-sm text-neutral-200 font-sans leading-relaxed pt-1">
          {stages[selectedPhase].desc}
        </p>

        {selectedPhase === 1 && (
          <div className="mt-4 p-4 border border-neutral-800 bg-mono-900 space-y-2 text-neutral-300">
            <div className="text-neutral-500 border-b border-neutral-800 pb-1 text-[10px] uppercase">
              BRANCHING PROTOCOL RUNTIME
            </div>
            <div>
              <span className="text-white font-bold">[PROMPT]</span> &quot;Are you seeking an enterprise rollout or a single-division pilot?&quot;
            </div>
            <div className="text-neutral-400">
              <span className="text-neutral-200">[QUALIFICATION]</span> Criteria matched &gt; Score updated &gt; Branch selected
            </div>
          </div>
        )}

        {selectedPhase === 3 && (
          <div className="mt-4 p-4 border border-white/40 bg-mono-900 text-neutral-200 flex items-center justify-between">
            <div>
              <div className="text-white font-bold text-xs uppercase mb-0.5">
                [ CRM & SALES DESK DISPATCH ]
              </div>
              <p className="text-neutral-400 text-xs">
                Complete profile, answers, and intent scorecard committed directly to CRM.
              </p>
            </div>
            <span className="font-mono text-xs uppercase text-neutral-400 border border-neutral-800 px-3 py-1">
              DISPATCHED
            </span>
          </div>
        )}
      </div>

      <p className="mt-5 text-center font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
        Illustrative architecture. Channel connectors and qualification playbooks configured per engagement.
      </p>
    </div>
  );
};
