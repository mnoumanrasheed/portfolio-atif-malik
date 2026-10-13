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
    <div className="bg-white border border-line rounded-card p-6 sm:p-8 shadow-soft">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-line gap-4">
        <div>
          <span className="eyebrow text-accent block">
            Pipeline Architecture
          </span>
          <h3 className="font-display font-bold text-xl text-ink mt-0.5">
            LeadHive AI Qualification & Hand-off Pipeline
          </h3>
        </div>
        <div className="inline-flex items-center text-xs font-semibold text-accent bg-accent-wash border border-accent/20 px-3 py-1 rounded-full self-start sm:self-auto">
          Multi-Channel Integration
        </div>
      </div>

      {/* Stage Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6">
        {stages.map((stage) => {
          const isSelected = selectedPhase === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedPhase(stage.id)}
              className={`p-3.5 rounded-lg text-left transition-all border ${
                isSelected
                  ? 'bg-accent text-white border-accent shadow-sm'
                  : 'bg-canvas-subtle text-ink border-line hover:border-accent/40 hover:bg-white'
              }`}
            >
              <div className={`text-xs font-bold mb-1 ${isSelected ? 'text-white/80' : 'text-accent'}`}>
                {stage.number}
              </div>
              <p className="text-xs font-semibold leading-tight">{stage.title}</p>
            </button>
          );
        })}
      </div>

      {/* Interactive Phase Details */}
      <div className="bg-canvas-subtle border border-line rounded-lg p-5 sm:p-6 space-y-3 text-xs">
        <div className="flex items-center justify-between border-b border-line pb-2.5">
          <span className="font-semibold text-accent uppercase tracking-wider text-xs">
            Stage {stages[selectedPhase].number}: {stages[selectedPhase].title}
          </span>
          <span className="text-ink-subtle text-[11px]">
            Step {selectedPhase + 1} of 4
          </span>
        </div>

        <p className="text-sm text-ink-body leading-relaxed">
          {stages[selectedPhase].desc}
        </p>

        {selectedPhase === 1 && (
          <div className="mt-3 p-4 rounded-md bg-white border border-line space-y-2 text-ink">
            <div className="text-ink-subtle border-b border-line pb-1 text-[11px] font-semibold uppercase tracking-wider">
              Sample Qualification Flow
            </div>
            <div className="text-xs space-y-1 text-ink-body">
              <div><strong className="text-ink">[Automated Inquiry]</strong> &quot;What is the current monthly volume of leads your team processes?&quot;</div>
              <div><strong className="text-ink">[Prospect Response]</strong> &quot;Approximately 1,200 inquiries across web and WhatsApp.&quot;</div>
              <div><strong className="text-ink">[Routing Decision]</strong> Matched High-Volume Enterprise tier &rarr; Priority Sales notification assigned.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
