import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EXTERNAL_SOURCES, EXECUTIVE_PROFILE } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const Insights: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 border border-neutral-800 px-3 py-1">
              VERIFIED INSTITUTIONAL RECORDS
            </span>
          </div>

          <SectionHeader
            eyebrow="BIBLIOGRAPHY & AUDIT"
            title="Selected References & Further Reading"
            description="Verified external documentation, official product portals, corporate publications, and public institutional registers."
          />
        </ScrollReveal>

        {/* Editorial Standards Notice */}
        <ScrollReveal delay={0.1}>
          <div className="p-8 border border-neutral-800 bg-mono-900 mb-16 space-y-2 font-mono text-xs">
            <div className="text-white uppercase font-bold tracking-widest">
              [ EDITORIAL TRANSPARENCY POLICY ]
            </div>
            <p className="font-sans text-neutral-300 text-sm leading-relaxed">
              In alignment with executive governance standards, this portfolio links exclusively to verified corporate profiles, official product domains, and published institutional directories. We do not manufacture synthetic blog articles, unverified press quotes, or fictional thought leadership timestamps.
            </p>
          </div>
        </ScrollReveal>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXTERNAL_SOURCES.map((source, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <Card className="p-8 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3 font-mono text-xs">
                    <span className="text-neutral-400 uppercase tracking-widest">
                      {source.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                  </div>

                  <h3 className="text-base font-bold text-white uppercase tracking-tight">
                    {source.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                    {source.note}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800">
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
          <div className="mt-20 p-8 sm:p-12 border border-neutral-800 bg-mono-900 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                Connect Directly with Atif I. Malik
              </h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">
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
