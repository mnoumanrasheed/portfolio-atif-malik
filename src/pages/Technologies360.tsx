import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal>
            <div className="max-w-3xl space-y-6 sm:space-y-7">
              {/* Executive Tag */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#286252]/30 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#286252] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-widest text-[#286252] uppercase">
                    360 Technologies
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="text-xs font-medium text-slate-600">
                    Separate Corporate Association
                  </span>
                </div>
              </div>

              <div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  360 Technologies
                </h1>
              </div>

              <div className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
                <p>
                  Atif I. Malik is a Founding CEO, Director and Shareholder of 360 Technologies. 360 Technologies is presented as a separate company with a published history across enterprise systems, public-sector digitisation, data services and professional capability development.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button href={TECHNOLOGIES_360.directoryUrl} variant="primary" size="lg" isExternal showArrow>
                  Explore 360 Technologies&apos; Company Portfolio
                </Button>
                <Button to="/ventures" variant="secondary" size="lg">
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
                <span className="eyebrow text-slate-500">Company Overview</span>
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
              title="Six Practice Areas"
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

        {/* Company Project References (Unified Section) */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Company Portfolio"
              title="Company Project References"
              description="Project assignments and organisational references documented in 360 Technologies' company portfolio and published directory."
            />
          </ScrollReveal>

          <div className="bg-white border border-slate-200/90 rounded-2xl divide-y divide-slate-100 shadow-soft overflow-hidden">
            {TECHNOLOGIES_360.companyProjects.map((proj, idx) => (
              <div 
                key={idx} 
                className="p-5 sm:p-6 transition-all duration-200 hover:bg-slate-50/70 group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#286252] bg-[#286252]/5 border border-[#286252]/15 px-2 py-0.5 rounded-md shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-[#286252] transition-colors">
                        {proj.organisation}
                      </h3>
                      {proj.sector && (
                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60">
                          {proj.sector}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal sm:pl-9">
                      {proj.projects}
                    </p>
                  </div>

                  <div className="shrink-0 pl-9 md:pl-0 pt-1 md:pt-0">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/90 group-hover:border-[#286252]/30 group-hover:bg-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#286252]" />
                      360 Tech Company Reference
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Source Attribution & Official Directory Link */}
            <div className="p-4 sm:p-5 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                Source: Published 360 Technologies company portfolio and published directory.
              </span>
              <a
                href={TECHNOLOGIES_360.directoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#286252] font-semibold hover:underline"
              >
                <span>View original directory online</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
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
