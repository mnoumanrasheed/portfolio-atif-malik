import React from 'react';
import { 
  M3_HIVE_CAPABILITIES, 
  M3_HIVE_ENGAGEMENT_MODELS, 
  M3_HIVE_ENGAGEMENT_STRUCTURES, 
  M3_HIVE_ENGAGEMENT_TEXT,
  PERSPECTIVE 
} from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Expertise: React.FC = () => {
  const capabilityDetails = [
    {
      number: '01',
      title: 'Applied AI & Intelligent Workflows',
      description: 'Generative AI, LLM-based experiences, retrieval-augmented generation, document processing and workflow automation.',
      subareas: [
        'Generative AI & LLM application architectures',
        'Retrieval-augmented generation (RAG) & knowledge bases',
        'Structured document ingestion & conversational extraction',
        'Human-in-the-loop validation & review protocols',
        'Workflow automation across enterprise software'
      ]
    },
    {
      number: '02',
      title: 'AI Product Engineering',
      description: 'Product discovery, product definition, UX/UI, software architecture, web/mobile development and iterative delivery.',
      subareas: [
        'Problem definition & user friction discovery',
        'System architecture & scalable tech stack selection',
        'Responsive web and mobile product development',
        'Design systems & accessible executive interfaces',
        'Continuous delivery with operational milestones'
      ]
    },
    {
      number: '03',
      title: 'Data Engineering & Market Intelligence',
      description: 'Data acquisition, pipeline engineering, data quality, analytics, dashboards and decision-support platforms.',
      subareas: [
        'Multi-source data acquisition & ingestion pipelines',
        'Automated data cleansing, standardization & normalization',
        'Market intelligence & company benchmarking dashboards',
        'Executive decision-support and reporting tooling',
        'Audit-ready data lineage and governance standards'
      ]
    },
    {
      number: '04',
      title: 'Cloud & Enterprise Integration',
      description: 'Cloud-native systems, APIs, data platforms and deployment approaches aligned to client needs.',
      subareas: [
        'Cloud-native containerized architectures (AWS, Azure, GCP)',
        'RESTful & event-driven API service layers',
        'Enterprise system interoperability (CRM, ERP, EHR/HIMS)',
        'Private cloud & on-premises deployment configurations',
        'Information security, encryption and data boundary controls'
      ]
    },
    {
      number: '05',
      title: 'IoT & Connected Systems',
      description: 'Sensor-connected products, edge technologies, data capture and monitoring interfaces.',
      subareas: [
        'Hardware telemetry ingestion & gateway architecture',
        'Continuous kinetic, environmental & activity metrics',
        'Edge filtering, bandwidth efficiency & offline buffering',
        'Real-time behavioral deviation & anomaly alerting',
        'Operational field dashboards for operators & teams'
      ]
    },
    {
      number: '06',
      title: 'Research-Oriented Software',
      description: 'Bioinformatics workflows, scientific data processing and interactive visualisation.',
      subareas: [
        'Bioinformatics pipelines: alignment, quantification & variant analysis',
        'Scientific dataset processing & reproducible tooling',
        'Interactive network visualization & compound-target graphs',
        'High-dimensional exploratory research interfaces',
        'Collaborative data sharing with transparent provenance'
      ]
    }
  ];

  return (
    <div className="bg-canvas text-ink">
      <HeroBackground
        imageSrc="/images/heroes/hero-expertise.jpg"
        imageAlt="Applied AI & Data Architecture Lattice"
        glowColor="cyan"
        className="pt-28 sm:pt-36 pb-16 sm:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="eyebrow text-brand">Core Competencies &amp; Capabilities</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                {PERSPECTIVE.headline}
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-1">
                {PERSPECTIVE.body}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button to="/contact" variant="primary" showArrow>
                  Discuss a Project
                </Button>
                <Button to="/ventures" variant="secondary">
                  Explore Priority Ventures
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilityDetails.map((cap, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="p-8 bg-white border border-slate-200/90 rounded-2xl shadow-soft flex flex-col justify-between h-full hover:border-brand/40 hover:shadow-card transition-all">
                  <div className="space-y-4">
                    <span className="w-9 h-9 rounded-lg bg-brand-wash text-brand font-extrabold text-sm flex items-center justify-center border border-brand/20">
                      {cap.number}
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-slate-900 tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {cap.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                        Technical Focus Areas:
                      </span>
                      <ul className="space-y-2">
                        {cap.subareas.map((sub, sIdx) => (
                          <li key={sIdx} className="text-xs text-slate-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        {/* How Engagements Can Begin: 4 Steps */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <span className="eyebrow text-brand">Delivery Methodology</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-1">
                How Engagements Can Begin
              </h2>
              <p className="text-base text-slate-600 mt-2">
                A disciplined four-phase delivery framework that matches technical architecture directly to operating realities and verifiable milestones.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {M3_HIVE_ENGAGEMENT_MODELS.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="p-6 bg-white border border-slate-200/90 rounded-xl space-y-3 shadow-soft flex flex-col justify-between h-full">
                  <div>
                    <span className="w-8 h-8 rounded-lg bg-brand text-white font-extrabold text-xs flex items-center justify-center shadow-xs mb-3">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                      {step.detail}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                    {step.phase}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Engagement Structures & Commercial Governance */}
        <div className="mt-16">
          <ScrollReveal>
            <div className="p-8 sm:p-10 rounded-2xl bg-brand-wash/60 border border-brand/20 shadow-soft space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="eyebrow text-brand">Commercial Governance</span>
                <h3 className="font-display font-extrabold text-2xl text-slate-900">
                  Engagement Models & Transparency
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {M3_HIVE_ENGAGEMENT_TEXT}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
                {M3_HIVE_ENGAGEMENT_STRUCTURES.map((struct, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-brand/20 text-center">
                    <span className="text-xs font-bold text-slate-900 block">{struct}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-brand/20 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-600">
                  Scope, ownership, data access, success measures and commercial terms should be agreed before work begins.
                </span>
                <Button to="/contact" variant="primary" showArrow>
                  Discuss a Project
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </div>
  );
};

