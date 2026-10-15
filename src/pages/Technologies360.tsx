import React from 'react';
import { TECHNOLOGIES_360 } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';

export const Technologies360: React.FC = () => {
  return (
    <div className="bg-canvas text-ink selection:bg-brand-wash selection:text-brand-dark">
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
                <span className="text-xs text-slate-700 font-bold uppercase tracking-wider bg-white/90 border border-slate-200 px-3 py-1 rounded-full shadow-xs">
                  Separate Company Association
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                360 Technologies
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-1">
                Atif I. Malik is a Founding CEO, Director and Shareholder of 360 Technologies. 360 Technologies is presented as a separate company with a published history across enterprise systems, public-sector digitisation, data services and professional capability development.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button href={TECHNOLOGIES_360.directoryUrl} variant="primary" isExternal showArrow>
                  Explore 360 Technologies&apos; Company Portfolio
                </Button>
                <Button to="/ventures" variant="secondary">
                  Explore Ventures
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Company Overview Card */}
        <ScrollReveal delay={0.1}>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 mb-20 shadow-soft">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 mb-6 gap-4">
              <div>
                <span className="eyebrow text-slate-500">Historical Company Overview</span>
                <h2 className="font-display font-bold text-2xl text-slate-900 mt-1">
                  Enterprise Systems &amp; Digitisation
                </h2>
              </div>
              <Button href={TECHNOLOGIES_360.directoryUrl} variant="secondary" size="sm" isExternal>
                Official 360 Registry
              </Button>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl font-normal">
              {TECHNOLOGIES_360.overview}
            </p>
          </div>
        </ScrollReveal>

        {/* Six Practice Areas */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Practice Areas"
              title="Six Historical Practice Areas"
              description="Published practice areas from 360 Technologies company documentation."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNOLOGIES_360.practiceAreas.map((area, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <Card className="p-6 sm:p-7 bg-white border-slate-200/90 shadow-soft h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="w-8 h-8 rounded bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center border border-slate-200">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-base text-slate-900">
                      {area.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-medium text-slate-400">
                    360 Technologies Practice Area
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Historical Company Project References */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Historical Portfolio"
              title="Historical Company Project References"
              description="Historical assignments documented in 360 Technologies company portfolio records."
            />
          </ScrollReveal>

          <div className="bg-white border border-slate-200/90 rounded-2xl divide-y divide-slate-100 shadow-soft overflow-hidden">
            {TECHNOLOGIES_360.historicalProjects.map((proj, idx) => (
              <div key={idx} className="p-6 sm:p-7 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-slate-50/50 transition-colors">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-brand">0{idx + 1}</span>
                    <h4 className="font-display font-bold text-base text-slate-900">{proj.organisation}</h4>
                    {proj.sector && <span className="text-xs text-slate-500">({proj.sector})</span>}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-7 font-normal">
                    {proj.projects}
                  </p>
                </div>
                <div className="shrink-0 pl-7 md:pl-0">
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    360 Tech Company Reference
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Historical Company References */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Historical Directory"
              title="Additional Historical Company References"
              description="Organisations listed in the published 360 Technologies corporate directory, presented as a historical company index."
            />
          </ScrollReveal>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-8 shadow-soft">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {TECHNOLOGIES_360.publishedClients.map((client, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-lg border border-slate-200/80 bg-slate-50/60 text-xs font-medium text-slate-800"
                >
                  <span className="text-brand mr-1.5">•</span>
                  {client}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
              <span>Source: Published 360 Technologies historical company portfolio.</span>
              <a
                href={TECHNOLOGIES_360.directoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand font-semibold hover:underline"
              >
                View original directory online &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Cross-Link to Active Ventures */}
        <ScrollReveal>
          <div className="p-8 sm:p-10 border border-slate-200/90 rounded-2xl bg-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Explore M3 Hive &amp; Priority Products
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Discover M3 Hive products: NourDoc, LeadHive AI, and Smart Animal.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button to="/ventures" variant="primary" size="md" showArrow>
                Explore Ventures
              </Button>
              <Button to="/products/nourdoc" variant="secondary" size="md">
                Discover NourDoc
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
