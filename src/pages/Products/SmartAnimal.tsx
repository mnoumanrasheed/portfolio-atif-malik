import React from 'react';
import { PRODUCTS } from '../../content/portfolio';
import { AttributionBadge } from '../../components/ui/AttributionBadge';
import { Button } from '../../components/ui/Button';
import { SmartAnimalWorkflowDiagram } from '../../components/diagrams/SmartAnimalWorkflowDiagram';
import { ScrollReveal } from '../../components/motion/ScrollReveal';

export const SmartAnimal: React.FC = () => {
  const product = PRODUCTS.find((p) => p.id === 'smart-animal')!;

  return (
    <div className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Hero */}
        <ScrollReveal>
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <AttributionBadge type={product.attribution} />
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                PRIORITY 03 / AGRITECH AI & IOT
              </span>
            </div>

            <h1 className="font-editorial-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-tighter uppercase leading-[0.9]">
              {product.name}
            </h1>

            <p className="font-mono text-lg sm:text-xl text-neutral-300">
              &quot;{product.positioningLine}&quot;
            </p>

            <p className="font-editorial-body text-base sm:text-lg text-neutral-300 leading-relaxed pt-2">
              {product.overview}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button to="/contact?interest=smart-animal" variant="primary" size="lg" showArrow>
                Discuss a Smart Animal Pilot
              </Button>
              <Button to="/contact?interest=smart-animal-research" variant="secondary" size="lg">
                AgriTech Research Collaboration
              </Button>
              <Button to="/m3-hive" variant="outline" size="lg">
                IoT Capabilities
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Bespoke Interactive Workflow Diagram */}
        <div className="my-20">
          <ScrollReveal delay={0.1}>
            <SmartAnimalWorkflowDiagram />
          </ScrollReveal>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-20">
          {/* Challenge Box */}
          <ScrollReveal delay={0.15}>
            <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-10 h-full space-y-4">
              <div className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                [ THE HERD MANAGEMENT CHALLENGE ]
              </div>
              <h3 className="font-editorial-heading text-2xl text-white uppercase tracking-tight">
                Delayed Observation in Large or Dispersed Herds
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-editorial-body leading-relaxed">
                {product.challenge}
              </p>
            </div>
          </ScrollReveal>

          {/* Value Proposition Box */}
          <ScrollReveal delay={0.2}>
            <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-10 h-full space-y-4">
              <div className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                [ VALUE PROPOSITION ]
              </div>
              <h3 className="font-editorial-heading text-2xl text-white uppercase tracking-tight">
                Connected Sensing to Timely Digital Alerts
              </h3>
              <ul className="space-y-3 pt-2">
                {product.valueProposition.map((vp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span>{vp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Audiences & Collaboration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
          {/* Who May Benefit */}
          <ScrollReveal delay={0.1}>
            <div className="border border-neutral-800 bg-black p-8 space-y-4 font-mono text-xs">
              <div className="text-neutral-500 uppercase tracking-widest">
                [ BENEFICIARIES ]
              </div>
              <h4 className="text-lg font-bold text-white uppercase font-sans">Livestock Stakeholders</h4>
              <ul className="space-y-2 pt-2">
                {product.intendedUsers.map((user, idx) => (
                  <li key={idx} className="text-xs text-neutral-300 flex items-center gap-2">
                    <span className="text-neutral-500">•</span>
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Collaboration Opportunities */}
          <ScrollReveal delay={0.15}>
            <div className="border border-neutral-800 bg-black p-8 space-y-4 font-mono text-xs">
              <div className="text-neutral-500 uppercase tracking-widest">
                [ PARTNER ROUTES ]
              </div>
              <h4 className="text-lg font-bold text-white uppercase font-sans">Field Alliances</h4>
              <ul className="space-y-2 pt-2">
                {product.collaborationOpportunities.map((collab, idx) => (
                  <li key={idx} className="text-xs text-neutral-300 flex items-center gap-2">
                    <span className="text-neutral-500">•</span>
                    <span>{collab}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Publication Guardrail / Notice */}
        <ScrollReveal>
          <div className="border border-neutral-800 bg-mono-900 p-8 my-16 font-mono text-xs text-neutral-400 space-y-2">
            <div className="text-white uppercase font-bold tracking-widest">
              [ SCIENTIFIC RIGOR & STATUS GUARDRAIL ]
            </div>
            <p className="font-sans leading-relaxed">
              {product.publicationGuardrail} Predictive models, activity thresholds, and behavioral indicators are validated iteratively against specific herd profiles and telemetry environments.
            </p>
          </div>
        </ScrollReveal>

        {/* Concluding CTA Banner */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 border border-neutral-800 bg-mono-900 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                Structure a Livestock Pilot or Research Trial
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                Engage with M3 Hive to explore farm trials, hardware telemetry, or veterinary evaluation protocols.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button to="/contact?interest=smart-animal" variant="primary" size="md" showArrow>
                Discuss Farm Pilot
              </Button>
              <Button to="/collaboration" variant="outline" size="md">
                Collaboration Pathways
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
