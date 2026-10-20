import React from 'react';
import { 
  M3_HIVE_CAPABILITIES, 
  M3_HIVE_ENGAGEMENT_MODELS, 
  M3_HIVE_ENGAGEMENT_STRUCTURES, 
  M3_HIVE_ENGAGEMENT_TEXT,
  PERSPECTIVE 
} from '../content/portfolio';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';

export const Expertise: React.FC = () => {
  return (
    <div className="bg-canvas text-ink">
      <HeroBackground
        imageSrc="/images/heroes/hero-expertise.jpg"
        imageAlt="Applied AI & Data Architecture Lattice"
        glowColor="cyan"
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
        
        {/* Six Documented Capability Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {M3_HIVE_CAPABILITIES.map((cap, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div className="p-8 bg-white border border-slate-200/90 rounded-2xl shadow-soft flex flex-col justify-between h-full hover:border-brand/40 hover:shadow-card transition-all">
                <div className="space-y-4">
                  <span className="w-9 h-9 rounded-lg bg-brand-wash text-brand font-extrabold text-sm flex items-center justify-center border border-brand/20">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {cap.description}
                  </p>
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

        {/* Engagement Structures & Commercial Governance (5 Models) */}
        <div className="mt-16">
          <ScrollReveal>
            <div className="p-8 sm:p-10 rounded-2xl bg-brand-wash/60 border border-brand/20 shadow-soft space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="eyebrow text-brand">Commercial Governance</span>
                <h3 className="font-display font-extrabold text-2xl text-slate-900">
                  Engagement Models &amp; Transparency
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
