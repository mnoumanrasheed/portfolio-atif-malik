import React from 'react';
import { 
  M3_HIVE_CAPABILITIES, 
  M3_HIVE_ENGAGEMENT_MODELS, 
  PRODUCTS, 
  EXECUTIVE_PROFILE 
} from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { AttributionBadge } from '../components/ui/AttributionBadge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const M3Hive: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <AttributionBadge type="M3 Hive product" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              OPERATIONAL EXECUTION VEHICLE
            </span>
          </div>

          <SectionHeader
            eyebrow="COMPANY PROFILE"
            title="M3 Hive — Execution & Engineering Capability"
            description="M3 Hive is a technology development company focused on translating business needs into digital products, intelligent workflows and applied AI solutions."
          />
        </ScrollReveal>

        {/* Corporate Overview Dossier */}
        <ScrollReveal delay={0.1}>
          <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-14 mb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-800 pb-6 mb-8 gap-4 font-mono text-xs">
              <div>
                <span className="text-neutral-500 uppercase tracking-widest block">[ CORPORATE SPECIFICATION ]</span>
                <span className="text-white uppercase font-bold text-base mt-1 block">
                  Delivery Practice & Product Engineering
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Button href={EXECUTIVE_PROFILE.verifiedLinks.m3hive} variant="outline" size="sm" isExternal>
                  m3hive.com
                </Button>
                <Button href={EXECUTIVE_PROFILE.verifiedLinks.nourdoc} variant="secondary" size="sm" isExternal>
                  NourDoc Portal
                </Button>
              </div>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 font-editorial-body leading-relaxed max-w-4xl">
              M3 Hive is a technology development company focused on translating business needs into digital products, intelligent workflows and applied AI solutions. Its company portfolio spans product engineering, customer experience, intelligent automation, data engineering and analytics, cloud platforms, connected systems and digital design. M3 Hive works across product-led initiatives and custom engagements, with the aim of aligning technical choices to the problem, users and operating environment.
            </p>
          </div>
        </ScrollReveal>

        {/* Six Capability Areas */}
        <div className="mb-24">
          <ScrollReveal>
            <SectionHeader
              eyebrow="TECHNICAL DISCIPLINES"
              title="Six Core Capability Areas"
              description="Aligned to operational reality, user expectations, and modern cloud/edge environments."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {M3_HIVE_CAPABILITIES.map((cap, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <Card className="p-8 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="font-mono text-xs text-neutral-500 font-bold block">
                      [ 0{idx + 1} ]
                    </span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-editorial-body leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-800 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    M3 HIVE CORE PRACTICE
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Priority Products Showcase */}
        <div className="mb-24">
          <ScrollReveal>
            <SectionHeader
              eyebrow="PRODUCT ROSTER"
              title="Three Priority Product Initiatives"
              description="Flagship systems developed within M3 Hive targeting distinct high-friction sectors."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((p) => (
              <ScrollReveal key={p.id}>
                <div className="border border-neutral-800 bg-mono-900 p-8 flex flex-col justify-between h-full hover:border-white transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-neutral-400 uppercase font-semibold">{p.tagline}</span>
                      <AttributionBadge type="M3 Hive product" />
                    </div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{p.name}</h3>
                    <p className="text-xs text-neutral-300 font-mono">&quot;{p.positioningLine}&quot;</p>
                    <p className="text-xs text-neutral-400 font-editorial-body leading-relaxed">{p.overview}</p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-800">
                    <Button to={`/products/${p.id}`} variant="secondary" size="sm" className="w-full" showArrow>
                      Examine Product Spec
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <div className="mb-24">
          <ScrollReveal>
            <SectionHeader
              eyebrow="GOVERNANCE"
              title="Engagement & Delivery Structure"
              description="Structuring client engagements with defined data boundaries and transparent commercial models."
            />
          </ScrollReveal>

          <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-12 space-y-8">
            <p className="text-sm sm:text-base text-neutral-300 font-editorial-body leading-relaxed max-w-4xl">
              Depending on the problem and stage of maturity, a project may begin with discovery and feasibility, proceed through a proof of concept or pilot, or move directly into a defined engineering engagement. Potential structures include fixed-scope delivery, time-and-materials, embedded specialist teams, integration projects and strategic product collaboration. Scope, ownership, data access, success measures and commercial terms should be agreed before delivery begins.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-neutral-800">
              {M3_HIVE_ENGAGEMENT_MODELS.map((m, idx) => (
                <div key={idx} className="border border-neutral-800 bg-black p-5 space-y-2 font-mono text-xs">
                  <span className="text-neutral-500 uppercase block">
                    {m.phase.split(':')[0]}
                  </span>
                  <h4 className="text-xs font-bold text-white uppercase">
                    {m.phase.split(':')[1]}
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-sans leading-relaxed pt-1">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Concluding Action Banner */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 border border-neutral-800 bg-black flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                Initiate an M3 Hive Engineering Engagement
              </h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">
                Discovery sessions, feasibility architecture, or commercial pilots.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button to="/work" variant="outline" size="md">
                Selected Work
              </Button>
              <Button to="/contact" variant="primary" size="md" showArrow>
                Discuss a Project
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
