import React from 'react';
import { EXECUTIVE_PROFILE } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ExecutiveMonogram } from '../components/ui/ExecutiveMonogram';
import { AttributionBadge } from '../components/ui/AttributionBadge';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';

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
    <div className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <SectionHeader
            eyebrow="EXECUTIVE DOSSIER"
            title="Technology Leadership & Applied AI"
            description="Atif I. Malik connects business problems with product thinking, applied AI, and disciplined technology delivery."
          />
        </ScrollReveal>

        {/* Narrative & Monogram Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-12">
          {/* Left Narrative: Full Depth Long Biography */}
          <div className="lg:col-span-7 space-y-12">
            <ScrollReveal>
              <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-12 space-y-8">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4 font-mono text-xs uppercase tracking-widest text-neutral-400">
                  <span>[ AUTHORITATIVE BIOGRAPHY ]</span>
                  <span>RECORD REF: AIM-BIO-01</span>
                </div>

                <div className="space-y-6 text-neutral-300 font-editorial-body text-base sm:text-lg leading-relaxed">
                  <p>
                    {EXECUTIVE_PROFILE.longBio.approach}
                  </p>

                  <p>
                    {EXECUTIVE_PROFILE.longBio.m3hiveContext}
                  </p>

                  <p>
                    {EXECUTIVE_PROFILE.longBio.technologies360Context}
                  </p>

                  <p className="text-neutral-400 pt-4 border-t border-neutral-800 text-sm font-mono">
                    {EXECUTIVE_PROFILE.longBio.portfolioIntent}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Leadership Approach Pillars */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <div className="font-mono text-xs tracking-widest uppercase text-neutral-400">
                  [ PHILOSOPHICAL PILLARS ]
                </div>
                <h3 className="font-editorial-heading text-3xl text-white uppercase tracking-tight">
                  Leadership Approach
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {leadershipPillars.map((pillar) => (
                    <div 
                      key={pillar.index}
                      className="p-6 border border-neutral-800 bg-mono-900 space-y-3"
                    >
                      <div className="font-mono text-xs font-bold text-neutral-500">
                        [{pillar.index}]
                      </div>
                      <h4 className="text-base font-bold text-white uppercase tracking-tight">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-editorial-body leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Identity Plaque & Affiliations */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal delay={0.15}>
              <ExecutiveMonogram />
            </ScrollReveal>

            {/* Verified Corporate Affiliations */}
            <ScrollReveal delay={0.2}>
              <div className="border border-neutral-800 bg-mono-900 p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 font-mono text-xs uppercase tracking-widest text-neutral-400">
                  <span>[ CORPORATE AFFILIATIONS ]</span>
                  <span>VERIFIED</span>
                </div>

                {/* M3 Hive */}
                <div className="p-5 border border-white/30 bg-black space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white uppercase">
                      M3 Hive
                    </span>
                    <AttributionBadge type="M3 Hive product" />
                  </div>
                  <p className="font-mono text-xs text-white uppercase font-semibold">
                    Chief Executive Officer
                  </p>
                  <p className="text-xs text-neutral-400 font-editorial-body leading-relaxed">
                    Primary operational leadership. Focused on AI-led products (NourDoc, LeadHive AI, Smart Animal) and custom engineering solutions.
                  </p>
                </div>

                {/* 360 Technologies */}
                <div className="p-5 border border-neutral-800 bg-black/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-neutral-300 uppercase">
                      360 Technologies
                    </span>
                    <AttributionBadge type="360 Technologies company portfolio" />
                  </div>
                  <p className="font-mono text-xs text-neutral-300 uppercase font-semibold">
                    Co-Founder, Director & Shareholder
                  </p>
                  <p className="text-xs text-neutral-400 font-editorial-body leading-relaxed">
                    Separate technology-services company. Historical enterprise systems, public-sector digitisation, and capability development.
                  </p>
                </div>

                <div className="pt-2">
                  <Button to="/contact" variant="primary" size="md" className="w-full" showArrow>
                    Discuss Collaboration
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
