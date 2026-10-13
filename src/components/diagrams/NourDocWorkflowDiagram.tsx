import React, { useState } from 'react';

export const NourDocWorkflowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    {
      id: 0,
      number: '01',
      title: 'Clinical Encounter',
      desc: 'Ambient audio capture of patient-clinician dialogue without disrupting clinical examination.'
    },
    {
      id: 1,
      number: '02',
      title: 'Speech & Medical NLP',
      desc: 'Conversational transcription and extraction of medical symptoms, clinical history, and observations.'
    },
    {
      id: 2,
      number: '03',
      title: 'Draft SOAP Note',
      desc: 'Structured drafting of Subjective, Objective, Assessment, and Plan with coding support.'
    },
    {
      id: 3,
      number: '04',
      title: 'Clinician Verification',
      desc: 'Mandatory clinical review, physician sign-off and finalisation prior to record commitment.'
    },
    {
      id: 4,
      number: '05',
      title: 'EHR / HIMS Export',
      desc: 'Interoperable export to downstream electronic health record systems.'
    }
  ];

  return (
    <div className="bg-white border border-line rounded-card p-6 sm:p-8 shadow-soft">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-line gap-4">
        <div>
          <span className="eyebrow text-accent block">
            Architectural Specification
          </span>
          <h3 className="font-display font-bold text-xl text-ink mt-0.5">
            NourDoc Clinical Documentation Workflow
          </h3>
        </div>
        <div className="inline-flex items-center text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full self-start sm:self-auto">
          Physician-in-the-Loop Protocol
        </div>
      </div>

      {/* Interactive Step Track */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 my-6">
        {steps.map((s) => {
          const isSelected = activeStep === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`p-3.5 rounded-lg text-left transition-all border ${
                isSelected
                  ? 'bg-accent text-white border-accent shadow-sm'
                  : 'bg-canvas-subtle text-ink border-line hover:border-accent/40 hover:bg-white'
              }`}
            >
              <div className={`text-xs font-bold mb-1 ${isSelected ? 'text-white/80' : 'text-accent'}`}>
                {s.number}
              </div>
              <p className="text-xs font-semibold leading-tight">{s.title}</p>
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Viewer */}
      <div className="bg-canvas-subtle border border-line rounded-lg p-5 sm:p-6 space-y-3 text-xs">
        <div className="flex items-center justify-between border-b border-line pb-2.5">
          <span className="font-semibold text-accent uppercase tracking-wider text-xs">
            Phase {steps[activeStep].number}: {steps[activeStep].title}
          </span>
          <span className="text-ink-subtle text-[11px]">
            Step {activeStep + 1} of {steps.length}
          </span>
        </div>

        <p className="text-sm text-ink-body leading-relaxed">
          {steps[activeStep].desc}
        </p>

        {activeStep === 2 && (
          <div className="mt-3 p-4 rounded-md bg-white border border-line space-y-2 text-ink">
            <div className="text-ink-subtle border-b border-line pb-1 text-[11px] font-semibold uppercase tracking-wider">
              Sample Schema Output: Clinical Encounter
            </div>
            <div className="text-xs space-y-1 text-ink-body">
              <div><strong className="text-ink">[Subjective]</strong> Patient reports 3-day history of fatigue and mild cough...</div>
              <div><strong className="text-ink">[Objective]</strong> BP 120/80, HR 72 bpm, chest clear to auscultation...</div>
              <div><strong className="text-ink">[Assessment]</strong> Acute viral upper respiratory infection...</div>
              <div><strong className="text-ink">[Plan]</strong> Symptomatic relief, hydration, follow-up if symptoms persist...</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
