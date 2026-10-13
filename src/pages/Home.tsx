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
        className="relative pt-8 pb-20 sm:pb-28 border-b border-line bg-canvas"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 7 Columns (58%): Dominant Executive Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="hero-eyebrow eyebrow text-accent font-semibold tracking-wide">
                Chief Executive Officer · M3 Hive
              </div>

              <div className="hero-headline space-y-3">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink tracking-tight leading-[1.08]">
                  {EXECUTIVE_PROFILE.name}
                </h1>
                <p className="text-base sm:text-lg text-ink-muted font-medium">
                  {EXECUTIVE_PROFILE.tagline}
                </p>
              </div>

              <p className="hero-statement text-base sm:text-lg text-ink-body max-w-2xl leading-relaxed">
                {EXECUTIVE_PROFILE.heroStatement}
              </p>

              {/* Verified Roles Ledger */}
              <div className="hero-roles pt-4 pb-4 border-y border-line space-y-2.5 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-bold text-ink">Chief Executive Officer</span>
                  <span className="text-accent text-xs sm:text-sm font-medium">
                    M3 Hive · Primary Operational Focus
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-medium text-ink-muted">Co-Founder, Director & Shareholder</span>
                  <span className="text-ink-subtle text-xs sm:text-sm">
                    360 Technologies · Separate Corporate Affiliation (Subject to counsel review)
                  </span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="hero-cta flex flex-wrap items-center gap-4 pt-2">
                <Button to="/contact" variant="primary" size="lg" showArrow>
                  Discuss a Project
                </Button>
                <Button to="/work" variant="secondary" size="lg">
                  Explore Selected Work
                </Button>
              </div>
            </div>

            {/* Right 5 Columns (42%): Photo-Ready Editorial Frame */}
            <div className="lg:col-span-5 hero-portrait-frame">
              <div 
                className="relative bg-gradient-to-b from-canvas-subtle to-canvas border border-line rounded-card overflow-hidden shadow-soft"
                aria-label="Executive Profile Representation"
              >
                {/* 
                  PHOTO-READY SLOT:
                  When an approved, official executive portrait is supplied, set the image source here:
                  <img src="/assets/atif-malik-portrait.jpg" alt="Atif I. Malik" className="w-full h-full object-cover" />
                */}
                <div className="aspect-[4/4.5] w-full flex flex-col justify-between p-8 sm:p-10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-medium">
                      AIM / M3 HIVE
                    </span>
                    <span className="text-[11px] text-ink-subtle">
                      Leadership Profile
                    </span>
                  </div>

                  {/* Typographic Monogram Accent */}
                  <div className="my-auto text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-white border border-line flex items-center justify-center shadow-soft">
                      <span className="font-display font-bold text-2xl tracking-wider text-ink">
                        A<span className="text-accent font-light">/</span>M
                      </span>
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-xl text-ink tracking-tight">
                        Atif I. Malik
                      </h2>
                      <p className="text-xs text-ink-muted mt-1 max-w-xs mx-auto">
                        Connecting business problems with product thinking and applied AI delivery.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-line/70 flex items-center justify-between text-[11px] text-ink-subtle">
                    <span>M3 Hive Technology Leadership</span>
                    <a 
                      href={EXECUTIVE_PROFILE.verifiedLinks.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent font-medium hover:underline inline-flex items-center gap-1"
                    >
                      LinkedIn <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="px-6 py-3.5 bg-white border-t border-line flex items-center justify-between text-xs">
                  <span className="text-ink-muted">Core Platforms:</span>
                  <span className="text-ink font-medium">NourDoc · LeadHive AI · Smart Animal</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP PERSPECTIVE: OPEN EDITORIAL COMPOSITION (NOT 3 REPETITIVE CARDS) */}
      <section className="py-20 sm:py-24 border-b border-line bg-canvas-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="eyebrow text-accent">Leadership Perspective</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight leading-tight">
              {PERSPECTIVE.headline}
            </h2>
            <p className="text-base sm:text-lg text-ink-body leading-relaxed">
              {PERSPECTIVE.body}
            </p>
          </div>

          {/* Three Open Editorial Pillars — fine separators rather than boxed card tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4 border-t border-line">
            {LEADERSHIP_PRINCIPLES.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <span className="font-display text-accent font-bold text-lg block">
                  0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-xl text-ink">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
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
            <div className="eyebrow text-accent">M3 Hive Product Work</div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
              Proprietary Product Initiatives
            </h2>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Addressing acute domain bottlenecks with applied machine intelligence and connected telemetry.
            </p>
          </div>

          <div className="space-y-24">
            
            {/* PRODUCT 01: NOURDOC */}
            {(() => {
              const nourdoc = PRODUCTS.find((p) => p.id === 'nourdoc')!;
              return (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-2">
                        <AttributionBadge type={nourdoc.attribution} />
                        <span className="text-xs text-ink-subtle">01 / HealthTech AI</span>
                      </div>
                      <h3 className="font-display font-bold text-3xl sm:text-4xl text-ink">
                        {nourdoc.name}
                      </h3>
                      <p className="text-base text-accent font-medium">
                        &quot;{nourdoc.positioningLine}&quot;
                      </p>
                      <p className="text-sm text-ink-body leading-relaxed">
                        {nourdoc.overview}
                      </p>

                      <div className="p-4 rounded-lg bg-canvas-subtle border border-line space-y-1.5 text-xs">
                        <span className="font-semibold text-ink uppercase tracking-wider block">Operational Challenge:</span>
                        <p className="text-ink-muted leading-relaxed">{nourdoc.challenge}</p>
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

            <div className="h-px bg-line w-full" />

            {/* PRODUCT 02: LEADHIVE AI */}
            {(() => {
              const leadhive = PRODUCTS.find((p) => p.id === 'leadhive-ai')!;
              return (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                      <LeadHiveWorkflowDiagram />
                    </div>

                    <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
                      <div className="flex items-center gap-2">
                        <AttributionBadge type={leadhive.attribution} />
                        <span className="text-xs text-ink-subtle">02 / Sales Enablement</span>
                      </div>
                      <h3 className="font-display font-bold text-3xl sm:text-4xl text-ink">
                        {leadhive.name}
                      </h3>
                      <p className="text-base text-accent font-medium">
                        &quot;{leadhive.positioningLine}&quot;
                      </p>
                      <p className="text-sm text-ink-body leading-relaxed">
                        {leadhive.overview}
                      </p>

                      <div className="p-4 rounded-lg bg-canvas-subtle border border-line space-y-1.5 text-xs">
                        <span className="font-semibold text-ink uppercase tracking-wider block">Operational Challenge:</span>
                        <p className="text-ink-muted leading-relaxed">{leadhive.challenge}</p>
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

            <div className="h-px bg-line w-full" />

            {/* PRODUCT 03: SMART ANIMAL */}
            {(() => {
              const smartAnimal = PRODUCTS.find((p) => p.id === 'smart-animal')!;
              return (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-2">
                        <AttributionBadge type={smartAnimal.attribution} />
                        <span className="text-xs text-ink-subtle">03 / AgriTech IoT</span>
                      </div>
                      <h3 className="font-display font-bold text-3xl sm:text-4xl text-ink">
                        {smartAnimal.name}
                      </h3>
                      <p className="text-base text-accent font-medium">
                        &quot;{smartAnimal.positioningLine}&quot;
                      </p>
                      <p className="text-sm text-ink-body leading-relaxed">
                        {smartAnimal.overview}
                      </p>

                      <div className="p-4 rounded-lg bg-canvas-subtle border border-line space-y-1.5 text-xs">
                        <span className="font-semibold text-ink uppercase tracking-wider block">Operational Challenge:</span>
                        <p className="text-ink-muted leading-relaxed">{smartAnimal.challenge}</p>
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
      <section className="py-20 sm:py-24 border-b border-line bg-canvas-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Delivery Methodology"
            title="How Ideas Move into Reliable Delivery"
            description="A disciplined execution framework that aligns technical architecture directly to operating realities and stakeholder requirements."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {deliverySteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-white border border-line rounded-card space-y-3 shadow-soft flex flex-col justify-between">
                <div>
                  <span className="w-8 h-8 rounded-full bg-accent-wash text-accent font-bold text-xs flex items-center justify-center border border-accent/20 mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-display font-bold text-lg text-ink">
                    {step.name}
                  </h3>
                  <div className="text-xs text-accent font-medium mb-1">
                    {step.focus}
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-line text-[11px] text-ink-subtle">
                  Stage {step.step} of 04
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg bg-white border border-line text-xs text-ink-muted text-center max-w-3xl mx-auto">
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
              <div key={work.id} className="p-7 bg-white border border-line rounded-card shadow-soft flex flex-col justify-between hover:shadow-card transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-accent uppercase tracking-wider">{work.category}</span>
                    <span className="text-ink-subtle">{work.group}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-ink">
                    {work.title}
                  </h3>

                  <p className="text-xs text-ink-body leading-relaxed">
                    {work.challenge}
                  </p>

                  <div className="p-3 rounded-lg bg-canvas-subtle border border-line text-xs">
                    <span className="font-semibold text-ink block mb-0.5">Delivered Approach:</span>
                    <p className="text-ink-muted leading-relaxed">{work.valueProposition}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-line text-xs flex items-center justify-between">
                  <span className="text-ink-subtle">Corporate Attribution:</span>
                  <span className="text-ink font-medium">M3 Hive Company Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 360 TECHNOLOGIES: HISTORICAL CORPORATE FOUNDATION (CLEAR SEPARATION) */}
      <section className="py-20 sm:py-24 border-b border-line bg-canvas-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-line rounded-card p-8 sm:p-12 shadow-soft">
            <div className="max-w-3xl space-y-4 mb-10">
              <div className="eyebrow text-ink-muted">Historical Corporate Archive</div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
                360 Technologies
              </h2>
              <p className="text-base text-ink-body leading-relaxed">
                As Co-Founder, Director and Shareholder, Atif contributed to establishing 360 Technologies as an enterprise digital systems partner serving multinational brands, financial institutions, and public-sector bodies.
              </p>
              
              <div className="p-4 rounded-lg bg-canvas-subtle border border-line text-xs text-ink-muted leading-relaxed">
                <strong className="text-ink font-semibold">Attribution Safeguard: </strong>
                {TECHNOLOGIES_360.legalNotice}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {TECHNOLOGIES_360.practiceAreas.slice(0, 6).map((practice, idx) => (
                <div key={idx} className="p-5 rounded-lg border border-line bg-canvas-subtle">
                  <h3 className="font-display font-semibold text-sm text-ink mb-1">{practice.name}</h3>
                  <p className="text-xs text-ink-muted">{practice.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-line">
              <span className="text-xs text-ink-muted">
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
            <div className="lg:col-span-5 space-y-2">
              {COLLABORATION_PATHWAYS.map((pathway, idx) => (
                <button
                  key={pathway.id}
                  onClick={() => setSelectedAudienceIdx(idx)}
                  className={`w-full text-left p-4 rounded-lg transition-all border ${
                    selectedAudienceIdx === idx
                      ? 'bg-accent-wash border-accent/40 shadow-soft'
                      : 'bg-white border-line hover:border-accent/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-sm text-ink">
                      {pathway.name}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-accent transition-transform ${selectedAudienceIdx === idx ? 'translate-x-1' : ''}`} />
                  </div>
                  <span className="text-xs text-ink-muted block mt-1 line-clamp-1">
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
                  <div className="p-8 bg-canvas-subtle border border-line rounded-card space-y-6 shadow-soft">
                    <div className="border-b border-line pb-4">
                      <span className="eyebrow text-accent">Selected Route</span>
                      <h3 className="font-display font-bold text-2xl text-ink mt-1">
                        {current.name}
                      </h3>
                      <p className="text-sm text-ink-body mt-2">
                        {current.audience}
                      </p>
                    </div>

                    <div className="space-y-4 text-xs">
                      <div>
                        <span className="font-semibold text-ink uppercase tracking-wider block mb-1">
                          Operational Challenge:
                        </span>
                        <p className="text-ink-muted leading-relaxed">
                          {current.likelyChallenge}
                        </p>
                      </div>

                      <div>
                        <span className="font-semibold text-accent uppercase tracking-wider block mb-1">
                          What We Communicate:
                        </span>
                        <p className="text-ink-body leading-relaxed">
                          {current.whatWeCommunicate}
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-white border border-line">
                        <span className="font-semibold text-ink uppercase tracking-wider block mb-1">
                          Suggested First Step:
                        </span>
                        <p className="text-ink-muted leading-relaxed">
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

      {/* 8. FINAL CTA BAND */}
      <section className="py-20 sm:py-24 bg-canvas border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="eyebrow text-accent">Direct Executive Discussion</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            {CLOSING_CTA.headline}
          </h2>
          <p className="text-base sm:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            {CLOSING_CTA.body}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Discuss a Project
            </Button>
            <Button href={EXECUTIVE_PROFILE.verifiedLinks.linkedin} isExternal variant="secondary" size="lg">
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
