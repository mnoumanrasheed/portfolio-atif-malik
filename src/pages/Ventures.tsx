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
                <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-sky-50/40 via-white to-white border border-sky-100 shadow-soft space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-sky-700 bg-sky-100/80 px-2.5 py-0.5 rounded-full">
                          Priority 01 · HealthTech AI
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-3xl text-slate-900">
                        {nourdoc.name}
                      </h3>
                      <p className="text-base text-sky-700 font-semibold">
                        &quot;{nourdoc.positioningLine}&quot;
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {nourdoc.overview}
                      </p>

                      <div className="p-4 rounded-xl bg-white border border-sky-200/80 space-y-1.5 text-xs">
                        <span className="font-bold text-slate-900 uppercase tracking-wider block">Operational Challenge:</span>
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
                      </div>
                    </div>

                    <div className="lg:col-span-7">
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
                <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-indigo-50/40 via-white to-white border border-indigo-100 shadow-soft space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                      <LeadHiveWorkflowDiagram />
                    </div>

                    <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-indigo-700 bg-indigo-100/80 px-2.5 py-0.5 rounded-full">
                          Priority 02 · Lead Engagement &amp; Qualification
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-3xl text-slate-900">
                        {leadhive.name}
                      </h3>
                      <p className="text-base text-indigo-700 font-semibold">
                        &quot;{leadhive.positioningLine}&quot;
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {leadhive.overview}
                      </p>

                      <div className="p-4 rounded-xl bg-white border border-indigo-200/80 space-y-1.5 text-xs">
                        <span className="font-bold text-slate-900 uppercase tracking-wider block">Operational Challenge:</span>
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
                <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-emerald-50/40 via-white to-white border border-emerald-100 shadow-soft space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                          Priority 03 · AgriTech &amp; IoT
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-3xl text-slate-900">
                        {smartAnimal.name}
                      </h3>
                      <p className="text-base text-emerald-700 font-semibold">
                        &quot;{smartAnimal.positioningLine}&quot;
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {smartAnimal.overview}
                      </p>

                      <div className="p-4 rounded-xl bg-white border border-emerald-200/80 space-y-1.5 text-xs">
                        <span className="font-bold text-slate-900 uppercase tracking-wider block">Operational Challenge:</span>
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

                    <div className="lg:col-span-7">
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
              <span className="eyebrow text-slate-500">Separate Historical Company Reference</span>
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
