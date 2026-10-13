import React from 'react';
import { EXECUTIVE_PROFILE, PERSPECTIVE, LEADERSHIP_PRINCIPLES } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ExecutiveMonogram } from '../components/ui/ExecutiveMonogram';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const About: React.FC = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-6">
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
                    <strong className="text-ink">Portfolio Scope: </strong>
                    {EXECUTIVE_PROFILE.longBio.portfolioIntent}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Editorial Pull Quote */}
            <ScrollReveal delay={0.08}>
              <div className="p-8 border-l-2 border-accent bg-canvas-subtle rounded-r-lg space-y-3">
                <blockquote className="font-display font-medium text-lg sm:text-xl text-ink italic leading-snug">
                  &ldquo;{PERSPECTIVE.headline}&rdquo;
                </blockquote>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {PERSPECTIVE.body}
                </p>
              </div>
            </ScrollReveal>

            {/* Leadership Approach Pillars */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <div>
                  <div className="eyebrow text-accent mb-1">Pillars of Execution</div>
                  <h3 className="font-display font-bold text-2xl text-ink">
                    Leadership Principles
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {LEADERSHIP_PRINCIPLES.map((pillar, idx) => (
                    <div 
                      key={idx}
                      className="p-5 bg-white border border-line rounded-lg shadow-soft space-y-2.5"
                    >
                      <div className="w-8 h-8 rounded bg-accent-wash text-accent font-bold text-xs flex items-center justify-center border border-accent/20">
                        0{idx + 1}
                      </div>
                      <h4 className="text-sm font-bold text-ink">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Engagement Action */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button to="/contact" variant="primary" showArrow>
                Discuss an Engagement
              </Button>
              <Button to="/m3-hive" variant="secondary">
                View M3 Hive Overview
              </Button>
            </div>
          </div>

          {/* Right Column: Executive Credentials & Governance */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal delay={0.15}>
              <ExecutiveMonogram />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-canvas-subtle border border-line rounded-card p-6 shadow-soft space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Corporate Governance Safeguards
                </div>
                <p className="text-xs text-ink-body leading-relaxed">
                  Distinct legal and operational separation is maintained between active M3 Hive proprietary initiatives and historical enterprise portfolio engagements delivered by 360 Technologies.
                </p>
                <div className="pt-2 border-t border-line text-xs text-ink-muted">
                  Inquiries regarding investment, clinical pilots, or custom technology delivery route through executive channels.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
