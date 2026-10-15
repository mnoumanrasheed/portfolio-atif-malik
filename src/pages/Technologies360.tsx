import React from 'react';
import { TECHNOLOGIES_360 } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { AttributionBadge } from '../components/ui/AttributionBadge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';

export const Technologies360: React.FC = () => {
  return (
    <div className="bg-canvas text-ink">
      <HeroBackground
        imageSrc="/images/heroes/hero-technologies360.jpg"
        imageAlt="Monumental Civic & Enterprise Systems Architecture"
        glowColor="teal"
        className="pt-28 sm:pt-36 pb-16 sm:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <AttributionBadge type="360 Technologies company portfolio" />
                <span className="text-xs text-slate-600 font-bold uppercase tracking-wider bg-white/90 border border-slate-200 px-3 py-1 rounded-full shadow-xs">
                  Separate Corporate Heritage &amp; Archive
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                360 Technologies — Company Portfolio &amp; Legacy
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-1">
                360 Technologies is a separate IT services organisation whose published historical portfolio spans enterprise software development, data architectures, digitisation, and offshore capability delivery.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button href={TECHNOLOGIES_360.directoryUrl} variant="primary" isExternal showArrow>
                  Official Client Registry
                </Button>
                <Button to="/ventures" variant="secondary">
                  Return to Active Ventures
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Legal & Governance Notice Callout */}
        <ScrollReveal delay={0.1}>
          <div className="bg-canvas-subtle border border-line rounded-card p-6 sm:p-8 mb-16 space-y-3 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">
              Attribution & Governance Disclosure
            </div>
            <p className="text-sm text-ink-body leading-relaxed">
              {TECHNOLOGIES_360.legalNotice}
            </p>
            <div className="pt-2 text-xs text-ink-muted">
              Executive Affiliation: <strong className="text-ink font-semibold">{TECHNOLOGIES_360.atifRole}</strong> (Maintained as documented in authoritative records).
            </div>
          </div>
        </ScrollReveal>

        {/* Company Overview Card */}
        <ScrollReveal delay={0.15}>
          <div className="bg-white border border-line rounded-card p-8 sm:p-12 mb-20 shadow-soft">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-line pb-6 mb-6 gap-4">
              <div>
                <span className="eyebrow text-ink-muted">Historical Corporate Scope</span>
                <h3 className="font-display font-bold text-xl text-ink mt-1">
                  Enterprise Systems & Public-Sector Footprint
                </h3>
              </div>
              <Button href={TECHNOLOGIES_360.directoryUrl} variant="secondary" size="sm" isExternal>
                Official 360 Registry
              </Button>
            </div>

            <p className="text-base sm:text-lg text-ink-body leading-relaxed max-w-4xl">
              {TECHNOLOGIES_360.overview}
            </p>
          </div>
        </ScrollReveal>

        {/* Six Practice Areas */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Business Divisions"
              title="Six Published Business Lines"
              description="Historical business practice lines documented across 360 Technologies client deliveries."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNOLOGIES_360.practiceAreas.map((area, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <Card className="p-6 sm:p-7 bg-white border-line shadow-soft h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="w-8 h-8 rounded bg-canvas-subtle text-ink-muted font-bold text-xs flex items-center justify-center border border-line">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-base text-ink">
                      {area.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-line text-[11px] font-medium text-ink-muted">
                    Documented 360 Practice Area
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Selected Historical Projects */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Institutional Record"
              title="Selected Historical Project References"
              description="Documented enterprise deployments and public systems listed in 360 Technologies historical records."
            />
          </ScrollReveal>

          <div className="bg-white border border-line rounded-card divide-y divide-line shadow-soft overflow-hidden">
            {TECHNOLOGIES_360.historicalProjects.map((proj, idx) => (
              <div key={idx} className="p-6 sm:p-7 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-canvas-subtle/50 transition-colors">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-accent">0{idx + 1}</span>
                    <h4 className="font-display font-bold text-base text-ink">{proj.organisation}</h4>
                    <span className="text-xs text-ink-muted">({proj.sector})</span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-body leading-relaxed pl-7">
                    {proj.projects}
                  </p>
                </div>
                <div className="shrink-0 pl-7 md:pl-0">
                  <AttributionBadge type="360 Technologies company portfolio" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Published Client Directory */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Client Registry"
              title="Published Historical Client Directory"
              description="Organisations listed in the published 360 Technologies corporate directory, presented as a verified text index rather than unverified logos."
            />
          </ScrollReveal>

          <div className="bg-white border border-line rounded-card p-8 shadow-soft">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {TECHNOLOGIES_360.publishedClients.map((client, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-lg border border-line bg-canvas-subtle text-xs font-medium text-ink"
                >
                  <span className="text-accent mr-1.5">•</span>
                  {client}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-ink-muted">
              <span>Source: Published 360 Technologies corporate registry.</span>
              <a
                href={TECHNOLOGIES_360.directoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:underline"
              >
                View original registry online &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Cross-Link to Current M3 Hive Leadership */}
        <ScrollReveal>
          <div className="p-8 sm:p-10 border border-line rounded-card bg-canvas-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-xl text-ink">
                Review Atif I. Malik&apos;s Active Focus at M3 Hive
              </h3>
              <p className="text-sm text-ink-muted mt-1">
                Explore M3 Hive and priority products: NourDoc, LeadHive AI, and Smart Animal.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
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
