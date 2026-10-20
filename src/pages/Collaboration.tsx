import React from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';

interface PathwayItem {
  id: string;
  name: string;
  potentialParticipants: string;
  suggestedFirstStep: string;
}

const COLLABORATION_PATHWAYS_APPROVED: PathwayItem[] = [
  {
    id: 'product-adoption',
    name: 'Product Adoption',
    potentialParticipants:
      'Clinics, hospitals, sales teams or livestock operations with a defined use case.',
    suggestedFirstStep: 'Discovery call, workflow review and scoped pilot.'
  },
  {
    id: 'research-and-validation',
    name: 'Research and Validation',
    potentialParticipants:
      'Universities, domain specialists, clinicians, veterinary professionals and research teams.',
    suggestedFirstStep:
      'Agree research questions, evaluation criteria, data governance and publication review.'
  },
  {
    id: 'distribution-and-market-access',
    name: 'Distribution and Market Access',
    potentialParticipants:
      'Regional partners, resellers, industry associations and implementation partners.',
    suggestedFirstStep:
      'Define target market, customer profile, commercial model and support responsibilities.'
  },
  {
    id: 'technology-integration',
    name: 'Technology Integration',
    potentialParticipants:
      'EHR/EMR vendors, CRM providers, sensor/device vendors and enterprise platform teams.',
    suggestedFirstStep: 'Technical discovery, integration map and proof of concept.'
  },
  {
    id: 'investment-and-strategic-capital',
    name: 'Investment and Strategic Capital',
    potentialParticipants:
      'Investors aligned with product stage, market and growth requirements.',
    suggestedFirstStep:
      'Product briefing, market thesis, traction evidence and structured diligence conversation.'
  },
  {
    id: 'custom-product-engineering',
    name: 'Custom Product Engineering',
    potentialParticipants:
      'Organisations with an operational problem that needs a tailored digital solution.',
    suggestedFirstStep:
      'Problem statement, constraints, desired outcomes and discovery engagement.'
  }
];

export const Collaboration: React.FC = () => {
  return (
    <div className="bg-canvas text-ink">
      <HeroBackground
        imageSrc="/images/heroes/hero-collaboration.jpg"
        imageAlt="Executive Partnership & Collaboration Space"
        glowColor="teal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-5">
              <span className="eyebrow text-brand">Partnerships &amp; Engagements</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Let's Start With the Problem You Need to Solve.
              </h1>
              <div className="space-y-3 text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-1">
                <p>
                  If you are exploring AI adoption, a product pilot, technology integration, research collaboration or a custom digital platform, share the challenge and the outcome you are working toward.
                </p>
                <p>
                  We can determine whether an existing M3 Hive product or a tailored engagement is the right fit.
                </p>
              </div>
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Button to="/contact" variant="primary" showArrow>
                  Discuss a Project
                </Button>
                <Button
                  href="https://www.linkedin.com/in/aimalik/"
                  variant="secondary"
                  isExternal
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12">
            <span className="eyebrow text-brand">Engagement Pathways</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Six Collaboration Pathways
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Structured engagement models designed to align domain requirements, technical architecture, and measurable outcomes.
            </p>
          </div>
        </ScrollReveal>

        {/* All Six Approved Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLABORATION_PATHWAYS_APPROVED.map((path, idx) => (
            <ScrollReveal key={path.id} delay={idx * 0.05}>
              <Card className="p-7 sm:p-8 bg-white border-line shadow-soft h-full flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-line pb-3">
                    <span className="w-7 h-7 rounded bg-brand/10 text-brand font-bold text-xs flex items-center justify-center border border-brand/20">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-brand uppercase tracking-wider">
                      Pathway
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900">
                    {path.name}
                  </h3>

                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
                      Potential participants:
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {path.potentialParticipants}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <span className="font-semibold text-slate-900 block">
                      Suggested first step:
                    </span>
                    <p className="text-slate-600 leading-relaxed">
                      {path.suggestedFirstStep}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-line">
                  <Button
                    to={`/contact?enquiry=${encodeURIComponent(path.name)}`}
                    variant="primary"
                    size="sm"
                    className="w-full"
                    showArrow
                  >
                    Discuss a Project
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
