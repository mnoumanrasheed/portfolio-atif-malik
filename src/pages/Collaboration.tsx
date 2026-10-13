import React from 'react';
import { COLLABORATION_PATHWAYS } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const Collaboration: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-canvas text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <SectionHeader
            eyebrow="Strategic Engagement"
            title="Collaboration & Partnership Pathways"
            description="Audience-aligned engagement routes for investors, clinical partners, commercial resellers, and enterprise teams to collaborate with Atif and M3 Hive."
          />
        </ScrollReveal>

        {/* Narrative Framework Card */}
        <ScrollReveal delay={0.1}>
          <div className="bg-white border border-line rounded-card p-8 sm:p-10 mb-16 shadow-soft">
            <h3 className="font-display font-bold text-xl text-ink mb-3">
              Clear Value & Mutual Contribution
            </h3>
            <p className="text-base text-ink-body leading-relaxed max-w-4xl">
              Collaboration succeeds when each party understands the challenge, the operating constraints, and the contribution required. Whether exploring an existing product pilot, academic research, commercial distribution, or a tailored engineering engagement, we establish data boundaries, governance, and transparent milestones before execution.
            </p>
          </div>
        </ScrollReveal>

        {/* All Six Sourced Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLABORATION_PATHWAYS.map((path, idx) => (
            <ScrollReveal key={path.id} delay={idx * 0.05}>
              <Card className="p-7 sm:p-8 bg-white border-line shadow-soft h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-line pb-3">
                    <span className="w-7 h-7 rounded bg-accent-wash text-accent font-bold text-xs flex items-center justify-center border border-accent/20">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      Engagement Route
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-ink">
                    {path.name}
                  </h3>

                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-subtle block mb-1">
                      Who It Suits
                    </span>
                    <p className="text-xs text-ink-body leading-relaxed">
                      {path.audience}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-subtle block mb-1">
                      Operational Challenge
                    </span>
                    <p className="text-xs text-ink-body leading-relaxed">
                      {path.likelyChallenge}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent block mb-1">
                      What We Communicate
                    </span>
                    <p className="text-xs text-ink-body leading-relaxed">
                      {path.whatWeCommunicate}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-canvas-subtle border border-line text-xs space-y-1">
                    <span className="font-semibold text-ink block">
                      Suggested First Step:
                    </span>
                    <p className="text-ink-muted">
                      {path.possibleFirstStep}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-line">
                  <Button
                    to={`/contact?intent=${encodeURIComponent(path.name)}`}
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

        {/* Tailored Inquiries */}
        <ScrollReveal>
          <div className="mt-16 p-8 sm:p-10 border border-line rounded-card bg-canvas-subtle flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
            <div>
              <h3 className="font-display font-bold text-xl text-ink">
                Require a Bespoke Partnership Structure?
              </h3>
              <p className="text-sm text-ink-muted mt-1">
                Reach out directly with your organizational context or institutional scope.
              </p>
            </div>
            <Button to="/contact" variant="secondary" size="md" showArrow>
              Submit an Inquiry Brief
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
