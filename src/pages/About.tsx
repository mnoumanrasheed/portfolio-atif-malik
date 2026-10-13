import React from 'react';
import { EXECUTIVE_PROFILE } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ExecutiveMonogram } from '../components/ui/ExecutiveMonogram';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { Card } from '../components/ui/Card';

export const About: React.FC = () => {
  const leadershipPillars = [
    {
      index: '01',
      title: 'Problem-First Discovery',
      description: 'Starting directly where work is repetitive, information is fragmented, customer engagement is inconsistent, or decisions depend on inaccessible data.'
    },
    {
      index: '02',
      title: 'Connecting Domain & Engineering',
      description: 'Bridging domain expertise, user needs, intuitive product design, robust software architecture, and applied AI into a coherent delivery path.'
    },
    {
      index: '03',
      title: 'Disciplined Execution',
      description: 'Translating strategic objectives into reliable software platforms, structured pilots, and transparent commercial governance before code commitment.'
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-canvas text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <SectionHeader
            eyebrow="Executive Profile"
            title="Technology Leadership & Applied AI"
            description="Atif I. Malik connects business problems with product thinking, applied AI, and disciplined technology delivery."
          />
        </ScrollReveal>

        {/* Narrative & Monogram Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          {/* Left Narrative: Full Depth Long Biography */}
          <div className="lg:col-span-7 space-y-10">
            <ScrollReveal>
              <div className="bg-white border border-line rounded-card p-8 sm:p-10 shadow-soft space-y-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent border-b border-line pb-3">
                  Authoritative Biography & Background
                </div>

                <div className="space-y-5 text-ink-body text-base leading-relaxed">
                  <p>
                    {EXECUTIVE_PROFILE.longBio.approach}
                  </p>

                  <p>
                    {EXECUTIVE_PROFILE.longBio.m3hiveContext}
                  </p>

                  <p>
                    {EXECUTIVE_PROFILE.longBio.technologies360Context}
                  </p>

                  <div className="p-4 rounded-lg bg-canvas-subtle border border-line text-xs text-ink-muted leading-relaxed">
                    <span className="font-semibold text-ink">Scope Notice: </span>
                    {EXECUTIVE_PROFILE.longBio.portfolioIntent}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Leadership Approach Pillars */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <div>
                  <div className="eyebrow text-accent mb-2">Pillars of Execution</div>
                  <h3 className="font-display font-bold text-2xl text-ink">
                    Leadership Principles
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {leadershipPillars.map((pillar) => (
                    <Card 
                      key={pillar.index}
                      className="p-5 bg-white border-line shadow-soft space-y-3"
                    >
                      <div className="w-8 h-8 rounded bg-accent-wash text-accent font-bold text-xs flex items-center justify-center border border-accent/20">
                        {pillar.index}
                      </div>
                      <h4 className="text-sm font-bold text-ink">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        {pillar.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Engagement Action */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button to="/contact" variant="primary" showArrow>
                Discuss an Engagement
              </Button>
              <Button to="/m3-hive" variant="secondary">
                View M3 Hive Products
              </Button>
            </div>
          </div>

          {/* Right Column: Executive Credentials & Governance */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal delay={0.15}>
              <ExecutiveMonogram />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-canvas-subtle border border-line rounded-card p-6 shadow-soft space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Institutional Governance
                </div>
                <p className="text-xs text-ink-body leading-relaxed">
                  Clear legal and operational boundaries are maintained between active M3 Hive proprietary initiatives and historical enterprise portfolio engagements delivered by 360 Technologies.
                </p>
                <div className="pt-2 border-t border-line text-xs text-ink-muted">
                  Official inquiries are routed directly to executive leadership through the contact folio.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
