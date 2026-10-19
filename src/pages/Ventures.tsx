import React from 'react';
import { 
  M3_HIVE_OVERVIEW, 
  PRODUCTS, 
  TECHNOLOGIES_360, 
  EXECUTIVE_PROFILE 
} from '../content/portfolio';
import { AttributionBadge } from '../components/ui/AttributionBadge';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { NourDocWorkflowDiagram } from '../components/diagrams/NourDocWorkflowDiagram';
import { LeadHiveWorkflowDiagram } from '../components/diagrams/LeadHiveWorkflowDiagram';
import { SmartAnimalWorkflowDiagram } from '../components/diagrams/SmartAnimalWorkflowDiagram';
import { HeroBackground } from '../components/ui/HeroBackground';

export const Ventures: React.FC = () => {
  return (
    <div className="bg-canvas text-ink selection:bg-brand-wash selection:text-brand-dark">
      <HeroBackground
        imageSrc="/images/heroes/hero-ventures.jpg"
        imageAlt="Technology Ventures & Studio Hub"
        glowColor="teal"
        className="pt-28 sm:pt-36 pb-16 sm:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs text-brand font-bold uppercase tracking-wider bg-brand-wash px-3 py-1 rounded-full border border-brand/20">
                  Primary Company Focus
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Products &amp; Ventures
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-1">
                M3 Hive serves as Atif I. Malik&apos;s primary company focus, leading product development, applied AI solutions, and digital platforms.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button to="/contact" variant="primary" showArrow>
                  Discuss a Project
                </Button>
                <Button href={EXECUTIVE_PROFILE.verifiedLinks.m3hive} variant="secondary" isExternal>
                  Visit m3hive.com
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. M3 HIVE COMPANY OVERVIEW */}
        <ScrollReveal delay={0.1}>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 mb-20 shadow-soft">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 mb-6 gap-4">
              <div>
                <span className="eyebrow text-brand">Company Overview</span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
                  M3 Hive
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Button href={EXECUTIVE_PROFILE.verifiedLinks.m3hive} variant="secondary" size="sm" isExternal>
                  Visit m3hive.com
                </Button>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl font-normal">
              {M3_HIVE_OVERVIEW}
            </p>
          </div>
        </ScrollReveal>

        {/* 2. THREE PRIORITY PRODUCTS */}
        <div className="mb-24 space-y-20">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <span className="eyebrow text-brand">Priority Products</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-1">
                Three Priority Products
              </h2>
              <p className="text-base text-slate-600 mt-2">
                Focused technology initiatives addressing specific operational friction in healthcare, lead qualification, and livestock management.
              </p>
            </div>
          </ScrollReveal>

          {/* Product 01: NourDoc */}
          {(() => {
            const nourdoc = PRODUCTS.find((p) => p.id === 'nourdoc')!;
            return (
              <ScrollReveal>
                <div className="relative overflow-hidden rounded-[2rem] border border-sky-200 bg-[#eaf8fc] p-3 shadow-[0_24px_60px_-35px_rgba(14,116,144,0.4)]">
                  <div className="grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-[1.45rem] bg-white lg:grid-cols-12">
                    <div className="lg:col-span-5 space-y-5 p-7 sm:p-10 lg:p-12">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-sky-700 bg-sky-100 px-3 py-1.5 rounded-full">
                          HealthTech AI
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-4xl text-slate-950 tracking-tight">
                        <a
                          href="https://nour-doc.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#286252] transition-colors inline-flex items-center gap-2"
                        >
                          <span>{nourdoc.name}</span>
                          <span className="text-xl text-slate-400 font-normal">↗</span>
                        </a>
                      </h3>
                      <p className="text-base text-sky-700 font-semibold">
                        &quot;{nourdoc.positioningLine}&quot;
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal border-l-2 border-sky-400 pl-4">
                        {nourdoc.overview}
                      </p>

                      <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2 text-xs">
                        <span className="font-bold text-sky-900 uppercase tracking-[0.14em] block">Operational Challenge</span>
                        <p className="text-slate-600 leading-relaxed">{nourdoc.challenge}</p>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Button to="/products/nourdoc" variant="primary" showArrow>
                          Explore NourDoc
                        </Button>
                        <Button to="/contact?interest=nourdoc-demo" variant="secondary" size="md">
                          Book a Demo
                        </Button>
                        <Button to="/contact?interest=nourdoc-pilot" variant="outline" size="md">
                          Explore a Clinical Pilot
                        </Button>
                        <Button href={nourdoc.officialUrl || "https://nour-doc.com/"} variant="ghost" size="md" isExternal>
                          Official Website &rarr;
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-7 border-t border-sky-100 bg-sky-50/50 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-9">
                      <div className="mb-4 flex items-center gap-3"><span className="h-px flex-1 bg-sky-200" /><span className="font-mono text-[10px] font-bold tracking-[0.16em] text-sky-700">CARE PATHWAY</span><span className="h-px flex-1 bg-sky-200" /></div>
                      <NourDocWorkflowDiagram />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })()}

          {/* Product 02: LeadHive AI */}
          {(() => {
            const leadhive = PRODUCTS.find((p) => p.id === 'leadhive-ai')!;
            return (
              <ScrollReveal>
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-3 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.22)]">
                  <div className="grid grid-cols-1 overflow-hidden rounded-[1.45rem] bg-white lg:grid-cols-12">
                    <div className="lg:col-span-7 order-2 border-t border-slate-200 bg-slate-50/70 p-5 sm:p-7 lg:order-1 lg:border-r lg:border-t-0 lg:p-9">
                      <div className="mb-4 flex items-center justify-between"><span className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[10px] font-bold tracking-[0.14em] text-slate-500">OPPORTUNITY SYSTEM</span><span className="h-px w-16 bg-slate-200" /></div>
                      <LeadHiveWorkflowDiagram />
                    </div>

                    <div className="lg:col-span-5 space-y-5 order-1 bg-white p-7 sm:p-10 lg:order-2 lg:p-12">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">
                          Lead Engagement &amp; Qualification
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-4xl text-slate-950 tracking-tight">
                        {leadhive.name}
                      </h3>
                      <p className="text-base text-slate-700 font-semibold">
                        &quot;{leadhive.positioningLine}&quot;
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal border-l-2 border-slate-300 pl-4">
                        {leadhive.overview}
                      </p>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                        <span className="font-bold text-slate-700 uppercase tracking-[0.14em] block">Operational Challenge</span>
                        <p className="text-slate-600 leading-relaxed">{leadhive.challenge}</p>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Button to="/products/leadhive-ai" variant="primary" showArrow>
                          Explore LeadHive AI
                        </Button>
                        <Button to="/contact?interest=leadhive-ai" variant="secondary" size="md">
                          Design a Lead Qualification Workflow
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })()}

          {/* Product 03: Smart Animal */}
          {(() => {
            const smartAnimal = PRODUCTS.find((p) => p.id === 'smart-animal')!;
            return (
              <ScrollReveal>
                <div className="relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-white shadow-[0_24px_60px_-35px_rgba(5,150,105,0.35)]">
                  <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-transparent" />
                  <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-12">
                    <div className="lg:col-span-5 space-y-5 bg-gradient-to-br from-emerald-50 via-white to-white p-7 sm:p-10 lg:p-12">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-full">
                          AgriTech &amp; IoT
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-4xl text-slate-950 tracking-tight">
                        {smartAnimal.name}
                      </h3>
                      <p className="text-base text-emerald-700 font-semibold">
                        &quot;{smartAnimal.positioningLine}&quot;
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal border-l-2 border-emerald-400 pl-4">
                        {smartAnimal.overview}
                      </p>

                      <div className="p-5 rounded-2xl bg-white border border-emerald-200 space-y-2 text-xs shadow-sm">
                        <span className="font-bold text-emerald-900 uppercase tracking-[0.14em] block">Operational Challenge</span>
                        <p className="text-slate-600 leading-relaxed">{smartAnimal.challenge}</p>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Button to="/products/smart-animal" variant="primary" showArrow>
                          Explore Smart Animal
                        </Button>
                        <Button to="/contact?interest=smart-animal" variant="secondary" size="md">
                          Discuss a Smart Animal Pilot
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-7 p-5 sm:p-7 lg:p-9">
                      <div className="mb-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3"><span className="h-px bg-emerald-200" /><span className="font-mono text-[10px] font-bold tracking-[0.16em] text-emerald-700">FIELD SYSTEMS</span><span className="h-px bg-emerald-200" /></div>
                      <SmartAnimalWorkflowDiagram />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })()}
        </div>

        {/* 3. SEPARATE 360 TECHNOLOGIES SECTION */}
        <ScrollReveal>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 shadow-soft space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="eyebrow text-slate-500">Separate Company Reference</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                360 Technologies
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {TECHNOLOGIES_360.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECHNOLOGIES_360.practiceAreas.map((practice, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-slate-200/80 bg-slate-50/50">
                  <h3 className="font-display font-bold text-sm text-slate-900 mb-1">{practice.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{practice.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Executive Association: <strong className="text-slate-900">{TECHNOLOGIES_360.atifRole}</strong>
              </span>
              <Button to="/360-technologies" variant="secondary" showArrow>
                Explore 360 Technologies
              </Button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
