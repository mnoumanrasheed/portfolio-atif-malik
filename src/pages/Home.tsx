import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronRight,
  ShieldCheck,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { 
  EXECUTIVE_PROFILE, 
  PRODUCTS, 
  M3_HIVE_ADDITIONAL_WORK, 
  TECHNOLOGIES_360, 
  COLLABORATION_PATHWAYS, 
  PERSPECTIVE, 
  CLOSING_CTA, 
  LEADERSHIP_PRINCIPLES,
  M3_HIVE_OVERVIEW,
  M3_HIVE_CAPABILITIES,
  M3_HIVE_ENGAGEMENT_MODELS,
  M3_HIVE_ENGAGEMENT_STRUCTURES
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
  const [selectedPathwayIdx, setSelectedPathwayIdx] = useState(0);

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

  return (
    <div className="bg-canvas text-ink">
      
      {/* =========================================================================
          SECTION 01 — EXECUTIVE HERO
          ========================================================================= */}
      <section 
        ref={heroRef} 
        className="relative pt-12 pb-20 sm:pb-28 border-b border-line bg-canvas overflow-hidden"
      >
        {/* Subtle executive ambient background wash */}
        <div 
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(55,122,138,0.06),rgba(255,255,255,0))]" 
          aria-hidden="true" 
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 7 Columns (58%): Dominant Executive Identity & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="hero-eyebrow space-y-1">
                <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase block">
                  {EXECUTIVE_PROFILE.name}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider block">
                  {EXECUTIVE_PROFILE.professionalPositioning}
                </span>
              </div>

              <div className="hero-headline">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                  {EXECUTIVE_PROFILE.heroHeadline}
                </h1>
              </div>

              <div className="hero-statement space-y-3.5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
                <p>
                  {EXECUTIVE_PROFILE.heroStatement}
                </p>
                <p>
                  {EXECUTIVE_PROFILE.heroSecondParagraph}
                </p>
              </div>

              {/* Formatted Affiliations Ledger */}
              <div className="hero-roles p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-3 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2.5 border-b border-slate-200/70">
                  <span className="font-bold text-slate-900">{EXECUTIVE_PROFILE.currentRole}</span>
                  <span className="text-brand text-xs sm:text-sm font-semibold">
                    Primary Operational Focus
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-medium text-slate-800">{EXECUTIVE_PROFILE.separateAffiliation}</span>
                  <span className="text-slate-500 text-xs sm:text-sm">
                    Separate Corporate Affiliation (Subject to counsel review)
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

            {/* Right 5 Columns (42%): Photo-Ready Editorial Executive Frame */}
            <div className="lg:col-span-5 hero-portrait-frame">
              <div 
                className="relative bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow"
                aria-label="Executive Profile Representation"
              >
                {/* Top brand accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-brand via-accent to-brand" />

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
                  <div className="text-center py-4 space-y-3">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-brand-wash via-white to-slate-50 border-2 border-brand/25 flex items-center justify-center shadow-soft">
                      <span className="font-display font-extrabold text-3xl tracking-wider text-slate-900">
                        A<span className="text-brand font-semibold">/</span>M
                      </span>
                    </div>
                    <div>
                      <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
                        {EXECUTIVE_PROFILE.name}
                      </h2>
                      <p className="text-xs text-brand font-semibold mt-0.5">
                        {EXECUTIVE_PROFILE.currentRole}
                      </p>
                      <p className="text-xs text-slate-600 mt-2 max-w-xs mx-auto leading-relaxed">
                        Turning complex challenges into practical, scalable digital solutions.
                      </p>
                    </div>
                  </div>

                  {/* Strategic Platform Pillars */}
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
                  <span className="text-brand-accent font-semibold">M3 Hive Technology Vehicle</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 02 — LEADERSHIP JOURNEY
          ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-line bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="eyebrow text-brand">Leadership Journey</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Connecting Business Needs with Product Strategy & Applied AI
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 7 Cols: Full 4-Paragraph Narrative from Document */}
            <div className="lg:col-span-7 space-y-5 text-base text-slate-700 leading-relaxed font-normal">
              <p>
                Atif I. Malik’s work sits at the intersection of business needs, product strategy and technology execution. His approach starts with the problem to be solved: where work is repetitive, information is fragmented, customer engagement is inconsistent, or decisions depend on data that is difficult to access and interpret. From there, he helps connect domain expertise, user needs, product design, engineering and applied AI into a coherent delivery path.
              </p>
              <p>
                As CEO of M3 Hive, Atif leads a technology company whose capabilities span digital product engineering, intelligent automation, data and AI, cloud platforms, customer experience and connected systems. Its current product priorities reflect three distinct opportunities: reducing documentation friction in healthcare through NourDoc; improving lead engagement and qualification through LeadHive AI; and using connected sensing and analytics to support livestock monitoring through Smart Animal.
              </p>
              <p>
                Atif is also a Founding CEO, Director and Shareholder of 360 Technologies. The company’s published historical portfolio includes public-sector information systems, postal workflows, digitisation, enterprise data and business intelligence, outsourcing and professional training. These achievements are presented as company history, not as a claim that Atif personally delivered every listed assignment.
              </p>
              <p className="p-4 rounded-xl bg-white border border-slate-200 text-sm text-slate-600 font-medium">
                The purpose of this website is to help investors understand product opportunities, help collaborators identify where their expertise or networks can contribute, and help prospective clients map their challenges to a suitable product, proof of concept or engineering engagement.
              </p>

              <div className="pt-2">
                <Button to="/about" variant="secondary" showArrow>
                  Read Full Executive Biography
                </Button>
              </div>
            </div>

            {/* Right 5 Cols: All Four Leadership Principles */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-brand mb-2">
                Four Principles of Execution
              </div>

              {LEADERSHIP_PRINCIPLES.map((principle, idx) => (
                <div 
                  key={idx}
                  className="p-5 bg-white border border-slate-200/90 rounded-xl shadow-soft space-y-2 hover:border-brand/40 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-md bg-brand-wash text-brand font-extrabold text-xs flex items-center justify-center border border-brand/20">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-sm text-slate-900">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-9">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 03 — EXPERTISE & CAPABILITIES
          ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-line bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Expertise & Capabilities"
            title={PERSPECTIVE.headline}
            description={PERSPECTIVE.body}
          />

          {/* Six Capability Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {M3_HIVE_CAPABILITIES.map((cap, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white border border-slate-200/90 rounded-xl shadow-soft space-y-3 hover:border-brand/40 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="w-8 h-8 rounded-lg bg-brand-wash text-brand font-extrabold text-xs flex items-center justify-center border border-brand/20 mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                    {cap.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-[11px] font-semibold text-brand">
                  M3 Hive Capability Practice
                </div>
              </div>
            ))}
          </div>

          {/* Four Engagement Steps Timeline */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="max-w-2xl mb-8">
              <span className="eyebrow text-brand">Engagement Progression</span>
              <h3 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mt-1">
                How Engagements Can Begin
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {M3_HIVE_ENGAGEMENT_MODELS.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <span className="w-7 h-7 rounded bg-brand text-white font-extrabold text-xs flex items-center justify-center mb-2 shadow-xs">
                      {idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-sm text-slate-900">{step.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">{step.detail}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-medium">
                    {step.phase}
                  </div>
                </div>
              ))}
            </div>

            {/* Engagement Models Banner */}
            <div className="mt-8 p-5 rounded-xl bg-brand-wash/60 border border-brand/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-900 block">
                  Documented Engagement Models:
                </span>
                <span className="text-xs text-slate-600">
                  Fixed-scope delivery · Time-and-materials · Embedded specialist teams · Integration projects · Strategic product collaboration.
                </span>
              </div>
              <Button to="/expertise" variant="outline" size="sm" showArrow className="shrink-0">
                Explore Full Capabilities
              </Button>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 04 — COMPANIES & VENTURES
          ========================================================================= */}
      <section id="ventures" className="py-20 sm:py-28 border-b border-line bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="eyebrow text-brand">Companies & Ventures</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              M3 Hive & Priority Product Initiatives
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              M3 Hive translates complex business needs into digital products, intelligent workflows and applied AI solutions.
            </p>
          </div>

          <div className="space-y-20">
            
            {/* PRODUCT 01: NOURDOC */}
            {(() => {
              const nourdoc = PRODUCTS.find((p) => p.id === 'nourdoc')!;
              return (
                <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-slate-200 shadow-soft space-y-8">
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

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                        <span className="font-bold text-slate-900 uppercase tracking-wider block">Operational Challenge:</span>
                        <p className="text-slate-600 leading-relaxed">{nourdoc.challenge}</p>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Button to="/products/nourdoc" variant="primary" showArrow>
                          Explore NourDoc
                        </Button>
                        <Button to="/contact?interest=nourdoc" variant="secondary" size="md">
                          Explore a Clinical Pilot
                        </Button>
                        <Button to="/contact?interest=nourdoc-integration" variant="outline" size="md">
                          Discuss Integration
                        </Button>
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
                <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-slate-200 shadow-soft space-y-8">
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

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                        <span className="font-bold text-slate-900 uppercase tracking-wider block">Operational Challenge:</span>
                        <p className="text-slate-600 leading-relaxed">{leadhive.challenge}</p>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Button to="/products/leadhive-ai" variant="primary" showArrow>
                          Explore LeadHive AI
                        </Button>
                        <Button to="/contact?interest=leadhive-ai" variant="outline" size="md">
                          Design Qualification Workflow
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
                <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-slate-200 shadow-soft space-y-8">
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

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                        <span className="font-bold text-slate-900 uppercase tracking-wider block">Operational Challenge:</span>
                        <p className="text-slate-600 leading-relaxed">{smartAnimal.challenge}</p>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Button to="/products/smart-animal" variant="primary" showArrow>
                          Explore Smart Animal
                        </Button>
                        <Button to="/contact?interest=smart-animal" variant="outline" size="md">
                          Discuss a Smart Animal Pilot
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

          {/* Separate 360 Technologies Reference Card */}
          <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-soft space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="eyebrow text-slate-500">Separate Historical Corporate Reference</span>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                360 Technologies — Company Portfolio & Legacy
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {TECHNOLOGIES_360.overview}
              </p>
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-900 font-bold">Attribution Safeguard: </strong>
                {TECHNOLOGIES_360.legalNotice}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {TECHNOLOGIES_360.practiceAreas.slice(0, 6).map((practice, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
                  <h4 className="font-display font-bold text-xs text-slate-900 mb-1">{practice.name}</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{practice.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Executive Affiliation: <strong className="text-slate-900">{TECHNOLOGIES_360.atifRole}</strong> (Subject to final counsel confirmation).
              </span>
              <Button to="/360-technologies" variant="secondary" showArrow>
                Explore 360 Technologies Archive
              </Button>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 05 — SELECTED WORK & IMPACT
          ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-line bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <SectionHeader
              eyebrow="Selected Work & Impact"
              title="Curated Case Studies & Engineering Deployments"
              description="Documented M3 Hive company initiatives demonstrating software breadth across market intelligence, computational biology, and retail analytics."
              className="mb-0"
            />
            <Button to="/work" variant="secondary" showArrow className="self-start md:self-auto shrink-0">
              View All 7 Case Studies
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {M3_HIVE_ADDITIONAL_WORK.slice(0, 3).map((work) => (
              <div 
                key={work.id} 
                className="p-7 bg-white border border-slate-200/90 rounded-2xl shadow-soft flex flex-col justify-between hover:border-brand/40 hover:shadow-card transition-all"
              >
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
                  <span className="text-slate-900 font-semibold">{work.attribution}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 06 — COLLABORATION OPPORTUNITIES & CLOSING
          ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-line bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Collaboration Opportunities"
            title={CLOSING_CTA.headline}
            description={CLOSING_CTA.body}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            {/* Pathway List (Left 5 Cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              {COLLABORATION_PATHWAYS.map((pathway, idx) => (
                <button
                  key={pathway.id}
                  onClick={() => setSelectedPathwayIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    selectedPathwayIdx === idx
                      ? 'bg-brand-wash border-brand shadow-soft'
                      : 'bg-white border-slate-200/80 hover:border-brand/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-slate-900">
                      {pathway.name}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-brand transition-transform ${selectedPathwayIdx === idx ? 'translate-x-1' : ''}`} />
                  </div>
                  <span className="text-xs text-slate-500 block mt-1 line-clamp-1">
                    {pathway.audience}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Pathway Detail View (Right 7 Cols) */}
            <div className="lg:col-span-7">
              {(() => {
                const current = COLLABORATION_PATHWAYS[selectedPathwayIdx];
                return (
                  <div className="p-8 bg-white border border-slate-200 rounded-2xl space-y-6 shadow-soft">
                    <div className="border-b border-slate-200 pb-4">
                      <span className="eyebrow text-brand">Selected Pathway</span>
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

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
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

      {/* FINAL EXECUTIVE DISCUSSION CLOSING BAND */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/30 border border-brand/40 text-brand-wash text-xs font-bold uppercase tracking-wider">
            Direct Executive Discussion
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Building Intelligent Technology. Creating Real-World Impact.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are exploring a product pilot, strategic collaboration, investment opportunity or custom technology engagement, the best place to start is with the problem you need to solve.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button to="/contact" variant="primary" size="lg" showArrow className="shadow-lg">
              Discuss a Project
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
