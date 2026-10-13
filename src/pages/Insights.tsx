import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EXTERNAL_SOURCES, EXECUTIVE_PROFILE } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const Insights: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-canvas text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent-wash px-3 py-1 rounded-full border border-accent/20">
              Verified Institutional Sources
            </span>
          </div>

          <SectionHeader
            eyebrow="Documentation & Verification"
            title="Selected References & Further Reading"
            description="Verified external documentation, official product platforms, corporate publications, and public institutional directories."
          />
        </ScrollReveal>

        {/* Editorial Standards Notice */}
        <ScrollReveal delay={0.1}>
          <div className="p-6 sm:p-8 rounded-card border border-line bg-canvas-subtle mb-14 space-y-2 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">
              Editorial Integrity Policy
            </div>
            <p className="text-sm text-ink-body leading-relaxed">
              In alignment with executive governance standards, this portfolio links exclusively to verified corporate profiles, official product domains, and published institutional registries. We do not manufacture synthetic blog articles, unverified press quotes, or fictional thought leadership timestamps.
            </p>
          </div>
        </ScrollReveal>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXTERNAL_SOURCES.map((source, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <Card className="p-6 sm:p-7 bg-white border-line shadow-soft h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-line pb-3">
                    <span className="text-xs font-medium text-accent">
                      {source.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-ink-subtle" />
                  </div>

                  <h3 className="font-display font-bold text-base text-ink">
                    {source.title}
                  </h3>

                  <p className="text-xs text-ink-muted leading-relaxed">
                    {source.note}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-line">
                  <Button
                    href={source.url}
                    variant="secondary"
                    size="sm"
                    className="w-full"
                    isExternal
                  >
                    Open Source Record
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Connect Directly Banner */}
        <ScrollReveal>
          <div className="mt-16 p-8 sm:p-10 border border-line rounded-card bg-canvas-subtle flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
            <div>
              <h3 className="font-display font-bold text-xl text-ink">
                Connect Directly with Atif I. Malik
              </h3>
              <p className="text-sm text-ink-muted mt-1">
                Verified professional background and executive network on LinkedIn.
              </p>
            </div>
            <Button
              href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
              variant="primary"
              size="md"
              isExternal
            >
              LinkedIn Profile
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
