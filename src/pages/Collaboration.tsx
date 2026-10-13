import React from 'react';
import { COLLABORATION_PATHWAYS } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const Collaboration: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <SectionHeader
            eyebrow="PARTNERSHIP FRAMEWORK"
            title="Collaboration & Strategic Pathways"
            description="Audience-aligned engagement routes for investors, clinical partners, commercial resellers, and enterprise teams to engage with M3 Hive."
          />
        </ScrollReveal>

        {/* Narrative Framework Dossier */}
        <ScrollReveal delay={0.1}>
          <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-12 mb-20">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
              Clear Value & Mutual Contribution
            </h3>
            <p className="text-base text-neutral-300 font-editorial-body leading-relaxed max-w-4xl">
              Collaboration succeeds when each party understands the challenge, the operating constraints, and the contribution required. Whether exploring an existing product pilot, academic research, commercial distribution, or a tailored engineering engagement, we establish data boundaries, governance, and transparent milestones before execution.
            </p>
          </div>
        </ScrollReveal>

        {/* All Six Sourced Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLABORATION_PATHWAYS.map((path, idx) => (
            <ScrollReveal key={path.id} delay={idx * 0.05}>
              <Card className="p-8 h-full flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3 font-mono text-xs">
                    <span className="text-white font-bold">
                      [ PATHWAY 0{idx + 1} ]
                    </span>
                    <span className="text-neutral-500 uppercase">ACTIVE ROUTE</span>
                  </div>

                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                    {path.name}
                  </h3>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                      Who It Suits
                    </span>
                    <p className="text-xs text-neutral-300 font-editorial-body">
                      {path.audience}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                      Likely Operational Challenge
                    </span>
                    <p className="text-xs text-neutral-300 font-editorial-body">
                      {path.likelyChallenge}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      What We Communicate
                    </span>
                    <p className="text-xs text-neutral-200 font-editorial-body">
                      {path.whatWeCommunicate}
                    </p>
                  </div>

                  <div className="p-4 border border-neutral-800 bg-black space-y-1 font-mono text-xs">
                    <span className="text-[10px] uppercase text-neutral-500 block">
                      Suggested First Step:
                    </span>
                    <p className="text-neutral-300">
                      {path.possibleFirstStep}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800">
                  <Button
                    to={`/contact?pathway=${path.id}`}
                    variant="primary"
                    size="sm"
                    className="w-full"
                    showArrow
                  >
                    {path.ctaText}
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Banner */}
        <ScrollReveal>
          <div className="mt-24 p-8 sm:p-14 border border-neutral-800 bg-mono-900 text-center space-y-6">
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
              [ NEXT ENGAGEMENT STEP ]
            </div>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
              &quot;Let’s start with the problem you need to solve.&quot;
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-editorial-body max-w-2xl mx-auto leading-relaxed">
              If you are exploring AI adoption, a product pilot, technology integration, research collaboration or a custom digital platform, share the challenge and the outcome you are working toward.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button to="/contact" variant="primary" size="lg" showArrow>
                Discuss a Project
              </Button>
              <Button to="/m3-hive" variant="secondary" size="lg">
                M3 Hive Capabilities
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
