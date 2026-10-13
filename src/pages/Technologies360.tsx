import React from 'react';
import { TECHNOLOGIES_360 } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { AttributionBadge } from '../components/ui/AttributionBadge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const Technologies360: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <AttributionBadge type="360 Technologies company portfolio" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              SEPARATE HISTORICAL ENTITY
            </span>
          </div>

          <SectionHeader
            eyebrow="HISTORICAL PORTFOLIO & ARCHIVE"
            title="360 Technologies — Company Portfolio & Legacy"
            description="360 Technologies is a separate IT services organisation whose published historical portfolio spans software development, enterprise data, digitisation, outsourcing, and capability development."
          />
        </ScrollReveal>

        {/* Legal & Governance Notice Callout */}
        <ScrollReveal delay={0.1}>
          <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-12 mb-16 space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              [ ATTRIBUTION & LEGAL GOVERNANCE DISCLOSURE ]
            </div>
            <p className="text-sm text-neutral-300 font-editorial-body leading-relaxed">
              {TECHNOLOGIES_360.legalNotice}
            </p>
            <div className="pt-2 font-mono text-xs text-neutral-400">
              AFFILIATION TITLE: <strong className="text-white uppercase">{TECHNOLOGIES_360.atifRole}</strong> (Subject to final corporate counsel review).
            </div>
          </div>
        </ScrollReveal>

        {/* Company Overview Dossier */}
        <ScrollReveal delay={0.15}>
          <div className="border border-neutral-800 bg-black p-8 sm:p-12 mb-24">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-800 pb-6 mb-8 gap-4 font-mono text-xs">
              <div>
                <span className="text-neutral-500 uppercase tracking-widest block">[ ARCHIVAL CONTEXT ]</span>
                <span className="text-white uppercase font-bold text-base mt-1 block">
                  Enterprise Systems & Public-Sector Footprint
                </span>
              </div>
              <Button href={TECHNOLOGIES_360.directoryUrl} variant="outline" size="sm" isExternal>
                Official 360 Registry
              </Button>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 font-editorial-body leading-relaxed max-w-4xl">
              {TECHNOLOGIES_360.overview}
            </p>
          </div>
        </ScrollReveal>

        {/* Six Practice Areas */}
        <div className="mb-24">
          <ScrollReveal>
            <SectionHeader
              eyebrow="DIVISIONS"
              title="Six Published Business Lines"
              description="Historical business areas established in published 360 Technologies materials."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TECHNOLOGIES_360.practiceAreas.map((area, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <Card className="p-8 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="font-mono text-xs text-neutral-500 font-bold block">
                      [ DIVISION 0{idx + 1} ]
                    </span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                      {area.name}
                    </h3>
                    <p className="text-xs text-neutral-400 font-editorial-body leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-800 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    PUBLISHED 360 SERVICE LINE
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Selected Historical Projects */}
        <div className="mb-24">
          <ScrollReveal>
            <SectionHeader
              eyebrow="INSTITUTIONAL RECORD"
              title="Selected Historical Project References"
              description="Documented government contracts and automation systems listed in 360 Technologies’ historical public records."
            />
          </ScrollReveal>

          <div className="border border-neutral-800 divide-y divide-neutral-800 bg-mono-900">
            {TECHNOLOGIES_360.historicalProjects.map((proj, idx) => (
              <ScrollReveal key={idx}>
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-black transition-colors">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-neutral-500">[{idx < 9 ? `0${idx + 1}` : idx + 1}]</span>
                      <h4 className="text-base font-bold text-white uppercase tracking-tight">{proj.organisation}</h4>
                      <span className="font-mono text-[10px] text-neutral-400 uppercase">({proj.sector})</span>
                    </div>
                    <p className="text-xs text-neutral-300 font-editorial-body leading-relaxed pl-7">
                      {proj.projects}
                    </p>
                  </div>
                  <div className="flex-shrink-0 pl-7 md:pl-0">
                    <AttributionBadge type="360 Technologies company portfolio" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Published Client Directory */}
        <div className="mb-24">
          <ScrollReveal>
            <SectionHeader
              eyebrow="CLIENT REGISTRY"
              title="Published Historical Client Directory"
              description="Company-reported organisations listed in the published historical 360 Technologies directory. Preserved in editorial text rather than an unverified customer logo showcase."
            />
          </ScrollReveal>

          <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {TECHNOLOGIES_360.publishedClients.map((client, idx) => (
                <div 
                  key={idx}
                  className="p-4 border border-neutral-800 bg-black text-xs font-mono text-neutral-300 uppercase tracking-wider"
                >
                  <span className="text-neutral-500 mr-2">•</span>
                  {client}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-neutral-500">
              <span>SOURCE: PUBLISHED 360 TECHNOLOGIES CORPORATE ARCHIVES.</span>
              <a
                href={TECHNOLOGIES_360.directoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline uppercase"
              >
                VIEW ORIGINAL REGISTRY ONLINE &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Back Link to Current Leadership */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 border border-neutral-800 bg-black flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                Review Atif I. Malik&apos;s Current Applied AI Focus
              </h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">
                Explore M3 Hive and priority products: NourDoc, LeadHive AI, and Smart Animal.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button to="/m3-hive" variant="secondary" size="md">
                Explore M3 Hive
              </Button>
              <Button to="/products/nourdoc" variant="primary" size="md" showArrow>
                Discover NourDoc
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
