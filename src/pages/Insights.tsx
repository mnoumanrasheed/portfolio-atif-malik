import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EXTERNAL_SOURCES, EXECUTIVE_PROFILE } from '../content/portfolio';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';

export const Insights: React.FC = () => {
  return (
    <div className="bg-canvas text-ink">
      <HeroBackground
        imageSrc="/images/heroes/hero-insights.jpg"
        imageAlt="Corporate Documentation & Knowledge Architecture"
        glowColor="teal"
        className="pt-28 sm:pt-36 pb-16 sm:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand-wash px-3 py-1 rounded-full border border-brand/20">
                  Verified Institutional Sources
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Documentation &amp; External Verification
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-1">
                Verified external documentation, official product platforms, corporate publications, and public institutional directories.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      {/* Main Content */}
      <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
