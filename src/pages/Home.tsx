import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2,
  ChevronRight,
  Activity,
  Layers,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { 
  EXECUTIVE_PROFILE, 
  PRODUCTS, 
  M3_HIVE_ADDITIONAL_WORK, 
  TECHNOLOGIES_360, 
  COLLABORATION_PATHWAYS, 
  PERSPECTIVE,
  CLOSING_CTA,
  LEADERSHIP_PRINCIPLES
} from '../content/portfolio';
import { Button } from '../components/ui/Button';
import { AttributionBadge } from '../components/ui/AttributionBadge';
import { SectionHeader } from '../components/ui/SectionHeader';
import { NourDocWorkflowDiagram } from '../components/diagrams/NourDocWorkflowDiagram';
import { LeadHiveWorkflowDiagram } from '../components/diagrams/LeadHiveWorkflowDiagram';
import { SmartAnimalWorkflowDiagram } from '../components/diagrams/SmartAnimalWorkflowDiagram';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedAudienceIdx, setSelectedAudienceIdx] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-eyebrow', { opacity: 0, y: 12, duration: 0.5, ease: 'power2.out' })
        .from('.hero-headline', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' }, '-=0.3')
        .from('.hero-statement', { opacity: 0, y: 15, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .from('.hero-roles', { opacity: 0, y: 15, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .from('.hero-cta', { opacity: 0, y: 15, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .from('.hero-portrait-frame', { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out' }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const deliverySteps = [
    {
      step: '01',
      name: 'Understand',
      focus: 'Operating Reality & Root Bottlenecks',
      desc: 'Grounding technology choices in the day-to-day workflow, domain constraints, and user frictions before proposing architecture.'
    },
    {
      step: '02',
      name: 'Define',
      focus: 'Target Outcomes & System Governance',
      desc: 'Specifying verifiable deliverables, data access boundaries, security parameters, and measurable operational goals.'
    },
    {
      step: '03',
      name: 'Pilot',
      focus: 'Focused Trial & Validation',
      desc: 'Deploying a scoped proof of concept or field trial in a controlled environment to validate real-world utility.'
    },
    {
      step: '04',
      name: 'Iterate',
      focus: 'Feedback-Driven Production Refinement',
      desc: 'Scaling the solution with clear engineering discipline, ongoing monitoring, and continuous stakeholder feedback.'
    }
  ];

  return (
    <div className="bg-canvas text-ink">
      {/* 1. EXECUTIVE HERO: SPLIT 55-60% TYPOGRAPHY / 40-45% EDITORIAL PHOTO-READY FRAME */}
      <section 
        ref={heroRef} 
        className="relative pt-10 pb-20 sm:pb-28 border-b border-line bg-canvas overflow-hidden"
      >
        {/* Ambient Executive Radial Glow */}
        <div 
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(30,64,175,0.07),rgba(255,255,255,0))]" 
          aria-hidden="true" 
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 7 Columns (58%): Dominant Executive Typography */}
            <div className="lg:col-span-7 space-y-7">
              <div className="hero-eyebrow inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-brand-wash border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                Chief Executive Officer · M3 Hive
              </div>

              <div className="hero-headline space-y-3">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
                  {EXECUTIVE_PROFILE.name}
                </h1>
                <p className="text-lg sm:text-xl text-brand font-semibold tracking-tight">
                  {EXECUTIVE_PROFILE.tagline}
                </p>
              </div>

              <p className="hero-statement text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed font-normal">
                {EXECUTIVE_PROFILE.heroStatement}
              </p>

              {/* Verified Roles Ledger */}
              <div className="hero-roles p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-3 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2.5 border-b border-slate-200/60">
                  <span className="font-bold text-slate-900">Chief Executive Officer</span>
                  <span className="text-brand text-xs sm:text-sm font-semibold">
                    M3 Hive · Primary Operational Focus
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-medium text-slate-700">Co-Founder, Director & Shareholder</span>
                  <span className="text-slate-500 text-xs sm:text-sm">
                    360 Technologies · Separate Corporate Affiliation (Subject to counsel review)
                  </span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="hero-cta flex flex-wrap items-center gap-4 pt-1">
                <Button to="/contact" variant="primary" size="lg" showArrow>
                  Discuss an Engagement
                </Button>
                <Button to="/work" variant="secondary" size="lg">
                  Explore Selected Work
                </Button>
              </div>
            </div>

            {/* Right 5 Columns (42%): Photo-Ready Editorial Frame */}
            <div className="lg:col-span-5 hero-portrait-frame">
              <div 
                className="relative bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow"
                aria-label="Executive Profile Representation"
              >
                {/* Subtle top sapphire accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-brand via-accent to-blue-400" />

                {/* 
                  PHOTO-READY SLOT:
                  When an approved, official executive portrait is supplied, set the image source here:
                  <img src="/assets/atif-malik-portrait.jpg" alt="Atif I. Malik" className="w-full h-full object-cover" />
                */}
                <div className="w-full flex flex-col justify-between p-7 sm:p-9 space-y-6">
                  <div className="flex items-center justify-between text-xs pb-4 border-b border-slate-100">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-brand font-bold bg-brand-wash px-3 py-1 rounded-md border border-brand/20">
                      EXECUTIVE PROFILE
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      M3 Hive Leadership
                    </span>
                  </div>

                  {/* Typographic Monogram Accent */}
                  <div className="text-center py-4 space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-brand-wash via-white to-blue-50/60 border-2 border-brand/25 flex items-center justify-center shadow-soft">
                      <span className="font-display font-extrabold text-3xl tracking-wider text-slate-900">
                        A<span className="text-brand font-semibold">/</span>M
                      </span>
                    </div>
                    <div>
                      <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
                        Atif I. Malik
                      </h2>
                      <p className="text-xs text-brand font-semibold mt-0.5">
                        Chief Executive Officer · M3 Hive
                      </p>
                      <p className="text-xs text-slate-600 mt-2 max-w-xs mx-auto leading-relaxed">
                        Connecting business problems with product thinking, applied AI, and disciplined technology delivery.
                      </p>
                    </div>
                  </div>

                  {/* Strategic Focus Areas */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                    <div className="p-2.5 rounded-lg bg-sky-50/60 border border-sky-100">
                      <div className="text-[10px] font-bold text-sky-800 uppercase tracking-wide">01 · HealthTech</div>
                      <div className="text-xs font-bold text-slate-900 mt-0.5">NourDoc</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100">
                      <div className="text-[10px] font-bold text-indigo-800 uppercase tracking-wide">02 · Sales AI</div>
                      <div className="text-xs font-bold text-slate-900 mt-0.5">LeadHive</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100">
                      <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">03 · AgriTech</div>
                      <div className="text-xs font-bold text-slate-900 mt-0.5">Smart Animal</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium text-slate-600">Verified Platform Presence</span>
                    <a 
                      href={EXECUTIVE_PROFILE.verifiedLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand font-bold hover:text-brand-hover inline-flex items-center gap-1 transition-colors"
                    >
                      LinkedIn Profile <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Applied AI Initiatives</span>
                  <span className="text-blue-300 font-semibold">M3 Hive Technology Vehicle</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP PERSPECTIVE: OPEN EDITORIAL COMPOSITION */}
      <section className="py-20 sm:py-24 border-b border-line bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="eyebrow text-brand">Leadership Perspective</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              {PERSPECTIVE.headline}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {PERSPECTIVE.body}
            </p>
          </div>

          {/* Three Open Editorial Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
            {LEADERSHIP_PRINCIPLES.map((item, idx) => (
              <div key={idx} className="p-6 rounded-card bg-white border border-slate-200/80 shadow-soft space-y-3 hover:border-brand/30 hover:shadow-card transition-all">
                <span className="w-9 h-9 rounded-lg bg-brand-wash text-brand font-extrabold text-sm flex items-center justify-center border border-brand/25">
                  0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE PRODUCT WORK: NOURDOC -> LEADHIVE AI -> SMART ANIMAL */}
      <section id="products" className="py-20 sm:py-28 border-b border-line bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="eyebrow text-brand">M3 Hive Product Work</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Proprietary Product Initiatives
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Addressing acute domain bottlenecks with applied machine intelligence and connected telemetry.
            </p>
          </div>

          <div className="space-y-24">
            
            {/* PRODUCT 01: NOURDOC */}
            {(() => {
              const nourdoc = PRODUCTS.find((p) => p.id === 'nourdoc')!;
              return (
                <div className="space-y-8 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-sky-50/40 via-white to-white border-2 border-sky-100 shadow-soft">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-2">
                        <AttributionBadge type={nourdoc.attribution} />
                        <span className="text-xs font-bold text-sky-700 bg-sky-100/80 px-2.5 py-0.5 rounded-full">
                          01 · HealthTech AI
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
                        {nourdoc.name}
                      </h3>
                      <p className="text-base text-sky-700 font-semibold">
                        &quot;{nourdoc.positioningLine}&quot;
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {nourdoc.overview}
                      </p>

                      <div className="p-4 rounded-xl bg-white border border-sky-200/80 space-y-1.5 text-xs shadow-xs">
                        <span className="font-bold text-slate-900 uppercase tracking-wider block">Operational Challenge:</span>
                        <p className="text-slate-600 leading-relaxed">{nourdoc.challenge}</p>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Button to="/products/nourdoc" variant="primary" showArrow>
                          Explore NourDoc
                        </Button>
                        {nourdoc.officialUrl && (
                          <Button href={nourdoc.officialUrl} variant="outline" size="md" isExternal>
                            Official Site
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <NourDocWorkflowDiagram />
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* PRODUCT 02: LEADHIVE AI */}
            {(() => {
              const leadhive = PRODUCTS.find((p) => p.id === 'leadhive-ai')!;
              return (
                <div className="space-y-8 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-indigo-50/40 via-white to-white border-2 border-indigo-100 shadow-soft">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                      <LeadHiveWorkflowDiagram />
                    </div>

                    <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
                      <div className="flex items-center gap-2">
                        <AttributionBadge type={leadhive.attribution} />
                        <span className="text-xs font-bold text-indigo-700 bg-indigo-100/80 px-2.5 py-0.5 rounded-full">
                          02 · Sales Enablement AI
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
                        {leadhive.name}
                      </h3>
                      <p className="text-base text-indigo-700 font-semibold">
                        &quot;{leadhive.positioningLine}&quot;
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {leadhive.overview}
                      </p>

                      <div className="p-4 rounded-xl bg-white border border-indigo-200/80 space-y-1.5 text-xs shadow-xs">
                        <span className="font-bold text-slate-900 uppercase tracking-wider block">Operational Challenge:</span>
                        <p className="text-slate-600 leading-relaxed">{leadhive.challenge}</p>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Button to="/products/leadhive-ai" variant="primary" showArrow>
                          Explore LeadHive AI
                        </Button>
                        <Button to="/contact?interest=leadhive" variant="outline" size="md">
                          Qualification Pilot
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* PRODUCT 03: SMART ANIMAL */}
            {(() => {
              const smartAnimal = PRODUCTS.find((p) => p.id === 'smart-animal')!;
              return (
                <div className="space-y-8 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-emerald-50/40 via-white to-white border-2 border-emerald-100 shadow-soft">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-2">
                        <AttributionBadge type={smartAnimal.attribution} />
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                          03 · AgriTech IoT & Telemetry
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
                        {smartAnimal.name}
                      </h3>
                      <p className="text-base text-emerald-700 font-semibold">
                        &quot;{smartAnimal.positioningLine}&quot;
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {smartAnimal.overview}
                      </p>

                      <div className="p-4 rounded-xl bg-white border border-emerald-200/80 space-y-1.5 text-xs shadow-xs">
                        <span className="font-bold text-slate-900 uppercase tracking-wider block">Operational Challenge:</span>
                        <p className="text-slate-600 leading-relaxed">{smartAnimal.challenge}</p>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Button to="/products/smart-animal" variant="primary" showArrow>
                          Explore Smart Animal
                        </Button>
                        <Button to="/contact?interest=smart-animal" variant="outline" size="md">
                          Livestock Pilot
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <SmartAnimalWorkflowDiagram />
                    </div>
                  </div>
                </div>
              );
            })()}

          </div>
        </div>
      </section>

      {/* 4. HOW IDEAS MOVE INTO DELIVERY: RESTRAINED 4-STEP TIMELINE */}
      <section className="py-20 sm:py-24 border-b border-line bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Delivery Methodology"
            title="How Ideas Move into Reliable Delivery"
            description="A disciplined execution framework that aligns technical architecture directly to operating realities and stakeholder requirements."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {deliverySteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200/90 rounded-card space-y-3 shadow-soft flex flex-col justify-between hover:border-brand/40 hover:shadow-card transition-all">
                <div>
                  <span className="w-8 h-8 rounded-lg bg-brand text-white font-extrabold text-xs flex items-center justify-center shadow-xs mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    {step.name}
                  </h3>
                  <div className="text-xs text-brand font-semibold mb-1">
                    {step.focus}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                  Stage {step.step} of 04
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-brand-wash border border-brand/20 text-xs text-slate-700 text-center max-w-3xl mx-auto font-medium">
            Governance Commitment: Scope, ownership, data access, and milestones are transparently agreed before code delivery begins.
          </div>
        </div>
      </section>

      {/* 5. SELECTED M3 HIVE WORK: 3 EDITORIAL CASE STUDY TEASERS */}
      <section className="py-20 sm:py-24 border-b border-line bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <SectionHeader
              eyebrow="Case Studies"
              title="Selected Engineering Deployments"
              description="Documented M3 Hive company initiatives demonstrating software breadth across market intelligence, computational biology, and retail analytics."
              className="mb-0"
            />
            <Button to="/work" variant="secondary" showArrow className="self-start md:self-auto shrink-0">
              View All 7 Case Studies
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {M3_HIVE_ADDITIONAL_WORK.slice(0, 3).map((work) => (
              <div key={work.id} className="p-7 bg-white border border-slate-200/90 rounded-card shadow-soft flex flex-col justify-between hover:border-brand/40 hover:shadow-card transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-brand uppercase tracking-wider">{work.category}</span>
                    <span className="text-slate-500 font-medium">{work.group}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900">
                    {work.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {work.challenge}
                  </p>

                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs">
                    <span className="font-bold text-slate-900 block mb-0.5">Delivered Approach:</span>
                    <p className="text-slate-600 leading-relaxed">{work.valueProposition}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 text-xs flex items-center justify-between">
                  <span className="text-slate-400 font-medium">Corporate Attribution:</span>
                  <span className="text-slate-900 font-semibold">M3 Hive Company Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 360 TECHNOLOGIES: HISTORICAL CORPORATE FOUNDATION (CLEAR SEPARATION) */}
      <section className="py-20 sm:py-24 border-b border-line bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200/90 rounded-card p-8 sm:p-12 shadow-soft">
            <div className="max-w-3xl space-y-4 mb-10">
              <div className="eyebrow text-slate-500">Historical Corporate Archive</div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                360 Technologies
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                As Co-Founder, Director and Shareholder, Atif contributed to establishing 360 Technologies as an enterprise digital systems partner serving multinational brands, financial institutions, and public-sector bodies.
              </p>
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-900 font-bold">Attribution Safeguard: </strong>
                {TECHNOLOGIES_360.legalNotice}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {TECHNOLOGIES_360.practiceAreas.slice(0, 6).map((practice, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-brand/30 transition-all">
                  <h3 className="font-display font-bold text-sm text-slate-900 mb-1">{practice.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{practice.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <span className="text-xs text-slate-500 font-medium">
                Documented delivery portfolio spanning telecommunications, healthcare, postal systems, and public records.
              </span>
              <Button to="/360-technologies" variant="secondary" showArrow>
                View 360 Technologies Archive
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WAYS TO COLLABORATE: AUDIENCE-ALIGNED PATHWAYS */}
      <section className="py-20 sm:py-24 border-b border-line bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Engagement Pathways"
            title="Ways to Collaborate"
            description="Clear collaboration routes aligned to organizational context, domain validation, and strategic timelines."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Audience List (Left) */}
            <div className="lg:col-span-5 space-y-2.5">
              {COLLABORATION_PATHWAYS.map((pathway, idx) => (
                <button
                  key={pathway.id}
                  onClick={() => setSelectedAudienceIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    selectedAudienceIdx === idx
                      ? 'bg-brand-wash border-brand shadow-soft'
                      : 'bg-white border-slate-200/80 hover:border-brand/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-slate-900">
                      {pathway.name}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-brand transition-transform ${selectedAudienceIdx === idx ? 'translate-x-1' : ''}`} />
                  </div>
                  <span className="text-xs text-slate-500 block mt-1 line-clamp-1">
                    {pathway.audience}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Pathway Detail View (Right) */}
            <div className="lg:col-span-7">
              {(() => {
                const current = COLLABORATION_PATHWAYS[selectedAudienceIdx];
                return (
                  <div className="p-8 bg-slate-50/70 border border-slate-200 rounded-card space-y-6 shadow-soft">
                    <div className="border-b border-slate-200 pb-4">
                      <span className="eyebrow text-brand">Selected Route</span>
                      <h3 className="font-display font-extrabold text-2xl text-slate-900 mt-1">
                        {current.name}
                      </h3>
                      <p className="text-sm text-slate-700 mt-2 font-medium">
                        {current.audience}
                      </p>
                    </div>

                    <div className="space-y-4 text-xs">
                      <div>
                        <span className="font-bold text-slate-900 uppercase tracking-wider block mb-1">
                          Operational Challenge:
                        </span>
                        <p className="text-slate-600 leading-relaxed font-normal">
                          {current.likelyChallenge}
                        </p>
                      </div>

                      <div>
                        <span className="font-bold text-brand uppercase tracking-wider block mb-1">
                          What We Communicate:
                        </span>
                        <p className="text-slate-700 leading-relaxed font-normal">
                          {current.whatWeCommunicate}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-slate-200">
                        <span className="font-bold text-slate-900 uppercase tracking-wider block mb-1">
                          Suggested First Step:
                        </span>
                        <p className="text-slate-600 leading-relaxed font-normal">
                          {current.possibleFirstStep}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button 
                        to={`/contact?intent=${encodeURIComponent(current.name)}`} 
                        variant="primary" 
                        size="md" 
                        showArrow
                      >
                        {current.ctaText}
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BAND: DISTINGUISHED EXECUTIVE BAND */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            Direct Executive Discussion
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {CLOSING_CTA.headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {CLOSING_CTA.body}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button to="/contact" variant="primary" size="lg" showArrow className="bg-brand text-white hover:bg-brand-hover shadow-lg">
              Discuss an Engagement
            </Button>
            <Button href={EXECUTIVE_PROFILE.verifiedLinks.linkedin} isExternal variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 hover:text-white">
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
