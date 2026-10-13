import React from 'react';
import { PRODUCTS } from '../../content/portfolio';
import { AttributionBadge } from '../../components/ui/AttributionBadge';
import { Button } from '../../components/ui/Button';
import { NourDocWorkflowDiagram } from '../../components/diagrams/NourDocWorkflowDiagram';
import { ScrollReveal } from '../../components/motion/ScrollReveal';

export const NourDoc: React.FC = () => {
  const product = PRODUCTS.find((p) => p.id === 'nourdoc')!;

  return (
    <div className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Hero */}
        <ScrollReveal>
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <AttributionBadge type={product.attribution} />
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                PRIORITY 01 / HEALTHTECH AI
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
              {product.officialUrl && (
                <Button href={product.officialUrl} variant="primary" size="lg" isExternal>
                  Visit NourDoc Portal
                </Button>
              )}
              <Button to="/contact?interest=nourdoc" variant="secondary" size="lg" showArrow>
                Explore Clinical Pilot
              </Button>
              <Button to="/contact?interest=nourdoc-integration" variant="outline" size="lg">
                Discuss Integration
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Bespoke Interactive Workflow Diagram */}
        <div className="my-20">
          <ScrollReveal delay={0.1}>
            <NourDocWorkflowDiagram />
          </ScrollReveal>
        </div>

        {/* Challenge vs Value Proposition Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-20">
          {/* Challenge Box */}
          <ScrollReveal delay={0.15}>
            <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-10 h-full space-y-4">
              <div className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                [ THE OPERATIONAL BOTTLENECK ]
              </div>
              <h3 className="font-editorial-heading text-2xl text-white uppercase tracking-tight">
                Documentation Overhead & Fragmented Records
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
                Structured Drafts with Clinician Verification
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
                [ TARGET BENEFICIARIES ]
              </div>
              <h4 className="text-lg font-bold text-white uppercase font-sans">Intended Stakeholders</h4>
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
                [ COLLABORATION ROUTES ]
              </div>
              <h4 className="text-lg font-bold text-white uppercase font-sans">Partner Pathways</h4>
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
              [ COMPLIANCE STATUS & EDITORIAL GUARDRAIL ]
            </div>
            <p className="font-sans leading-relaxed">
              {product.publicationGuardrail} NourDoc maintains a strict clinician-in-the-loop review protocol. All clinical documentation remains subject to final physician review and institutional health authority compliance.
            </p>
          </div>
        </ScrollReveal>

        {/* Concluding CTA Banner */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 border border-neutral-800 bg-mono-900 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                Initiate a NourDoc Trial or Clinical Pilot
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                Connect with M3 Hive to review workflows, EHR integration parameters, and pilot criteria.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button to="/contact?interest=nourdoc" variant="primary" size="md" showArrow>
                Discuss Clinical Pilot
              </Button>
              {product.officialUrl && (
                <Button href={product.officialUrl} variant="outline" size="md" isExternal>
                  Official Link
                </Button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
