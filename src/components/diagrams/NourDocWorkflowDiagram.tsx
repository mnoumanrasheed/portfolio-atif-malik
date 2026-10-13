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
    <div className="border border-neutral-800 bg-mono-900 p-6 sm:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
            [ ARCHITECTURAL SPECIFICATION ]
          </span>
          <h3 className="text-xl font-bold text-white uppercase tracking-tight mt-1">
            NourDoc Clinical Documentation Workflow
          </h3>
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 border border-neutral-800 px-3 py-1 bg-black">
          PHYSICIAN-IN-THE-LOOP PROTOCOL
        </div>
      </div>

      {/* Interactive Step Track */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-8">
        {steps.map((s) => {
          const isSelected = activeStep === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`p-4 text-left transition-all border ${
                isSelected
                  ? 'bg-white text-black border-white'
                  : 'bg-black text-white border-neutral-800 hover:border-neutral-500'
              }`}
            >
              <div className="font-mono text-xs font-bold mb-1 opacity-70">
                {s.number}
              </div>
              <p className="text-xs font-bold uppercase tracking-tight">{s.title}</p>
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Viewer */}
      <div className="border border-neutral-800 bg-black p-6 sm:p-8 space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <span className="uppercase text-neutral-400">
            [ PHASE {steps[activeStep].number} ]: {steps[activeStep].title.toUpperCase()}
          </span>
          <span className="text-neutral-500 text-[10px]">
            STEP {activeStep + 1} OF {steps.length}
          </span>
        </div>

        <p className="text-sm text-neutral-200 font-sans leading-relaxed pt-1">
          {steps[activeStep].desc}
        </p>

        {activeStep === 2 && (
          <div className="mt-4 p-4 border border-neutral-800 bg-mono-900 space-y-2 text-neutral-300">
            <div className="text-neutral-500 border-b border-neutral-800 pb-1 text-[10px] uppercase">
              SCHEMA DRAFT: CLINICAL ENCOUNTER
            </div>
            <div>
              <span className="text-white font-bold">[SUBJECTIVE]</span> Patient reports 3-day history of fatigue and mild cough...
            </div>
            <div>
              <span className="text-white font-bold">[OBJECTIVE]</span> Vital signs stable; auscultation clear bilaterally...
            </div>
            <div>
              <span className="text-white font-bold">[ASSESSMENT & PLAN]</span> Prescribed conservative care; follow-up in 10 days.
            </div>
            <div className="pt-2 text-[10px] text-neutral-400 uppercase">
              * ICD-10 & CPT coding assistance flagged for clinician review
            </div>
          </div>
        )}

        {activeStep === 3 && (
          <div className="mt-4 p-4 border border-white/40 bg-mono-900 text-neutral-200">
            <div className="text-white font-bold text-xs uppercase mb-1">
              [ MANDATORY PHYSICIAN SIGN-OFF ]
            </div>
            <p className="text-neutral-400 text-xs">
              Draft clinical records remain uncommitted to health records until explicitly verified and signed off by the attending clinician.
            </p>
          </div>
        )}
      </div>
      
      <p className="mt-5 text-center font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
        Schematic illustration. Deployment subject to institution EHR configuration and clinical protocols.
      </p>
    </div>
  );
};
