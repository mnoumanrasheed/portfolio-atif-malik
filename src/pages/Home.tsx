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
  CheckCircle2,
  Activity,
  Cpu,
  Compass,
  Zap,
  Globe2
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
import { ExecutiveLogo } from '../components/ui/ExecutiveLogo';
import { HeroBackground } from '../components/ui/HeroBackground';
import { 
  AnimatedBeamDivider, 
  AnimatedLineAccent, 
  AnimatedVerticalSpine 
} from '../components/ui/AnimatedLine';
import { BorderBeam, LivePulseBeacon } from '../components/ui/BorderBeam';
import { NourDocWorkflowDiagram } from '../components/diagrams/NourDocWorkflowDiagram';
import { LeadHiveWorkflowDiagram } from '../components/diagrams/LeadHiveWorkflowDiagram';
import { SmartAnimalWorkflowDiagram } from '../components/diagrams/SmartAnimalWorkflowDiagram';
import { HeroExecutiveCard } from '../components/ui/HeroExecutiveCard';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedPathwayIdx, setSelectedPathwayIdx] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.from('.hero-eyebrow', { opacity: 0, y: 14, duration: 0.5 })
        .from('.hero-headline', { opacity: 0, y: 22, duration: 0.6 }, '-=0.25')
        .from('.hero-accent-line', { scaleX: 0, transformOrigin: 'left', duration: 0.55 }, '-=0.25')
        .from('.hero-statement', { opacity: 0, y: 16, duration: 0.5 }, '-=0.3')
        .from('.hero-metrics', { opacity: 0, y: 14, duration: 0.45 }, '-=0.25')
        .from('.hero-roles', { opacity: 0, y: 14, duration: 0.45 }, '-=0.3')
        .from('.hero-cta', { opacity: 0, y: 14, duration: 0.45, stagger: 0.1 }, '-=0.3')
        .from('.hero-editorial-card', { opacity: 0, scale: 0.96, y: 18, duration: 0.75, ease: 'power3.out' }, '-=0.55');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-canvas text-ink selection:bg-brand-wash selection:text-brand-dark overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 01: EXECUTIVE HERO (100vh Viewport Composition with Live Animation)
          ========================================================================= */}
      <section 
        ref={heroRef} 
        className="relative bg-canvas overflow-hidden"
      >
        <HeroBackground 
          imageSrc="/images/heroes/hero-home.jpg" 
          imageAlt="Executive Architecture"
          glowColor="teal" 
          isCompactHeight={true}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left 7 Columns (58%): Dominant Executive Identity & Narrative */}
              <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 xl:space-y-5">
                
                {/* Live Status Beacon & Positioning Pill */}
                <div className="hero-eyebrow flex flex-wrap items-center gap-2.5">
                  <LivePulseBeacon label={EXECUTIVE_PROFILE.name} pulseColor="bg-[#51AAC0]" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider">
                    {EXECUTIVE_PROFILE.professionalPositioning}
                  </span>
                </div>

                {/* Main Headline */}
                <div className="hero-headline">
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                    {EXECUTIVE_PROFILE.heroHeadline}
                  </h1>
                </div>

                {/* Animated Luminous Accent Line */}
                <div className="hero-accent-line">
                  <AnimatedLineAccent width="w-28 sm:w-36" height="h-[2px]" />
                </div>

                {/* High-Readability Narrative Paragraph */}
                <div className="hero-statement space-y-2 text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-xl">
                  <p>
                    {EXECUTIVE_PROFILE.heroStatement}
                  </p>
                  <p className="hidden xl:block text-sm text-slate-600 leading-normal">
                    {EXECUTIVE_PROFILE.heroSecondParagraph}
                  </p>
                </div>

                {/* Live Executive Metrics Quick-Ticker Bar */}
                <div className="hero-metrics flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                    <span className="font-bold text-slate-900">03 Priority Products</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500 font-medium">Healthcare · Sales · IoT</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#51AAC0]" />
                    <span className="font-bold text-slate-900">15+ Systems Legacy</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500 font-medium">360 Technologies</span>
                  </div>
                </div>

                {/* Verified Roles Ledger */}
                <div className="hero-roles p-3.5 sm:p-4 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-soft space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-slate-200/70">
                    <span className="font-bold text-sm sm:text-base text-slate-900">{EXECUTIVE_PROFILE.currentRole}</span>
                    <span className="text-brand text-xs font-bold uppercase tracking-wider">
                      Primary Operational Focus
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-medium text-xs sm:text-sm text-slate-800">{EXECUTIVE_PROFILE.separateAffiliation}</span>
                    <span className="text-slate-500 text-xs font-medium">
                      Separate Corporate Affiliation (Subject to counsel review)
                    </span>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="hero-cta flex flex-wrap items-center gap-3 pt-1">
                  <Button to="/contact" variant="primary" size="md" showArrow className="shadow-md">
                    Discuss a Project
                  </Button>
                  <Button to="/work" variant="secondary" size="md">
                    Explore Selected Work
                  </Button>
                </div>
              </div>

              {/* Right 5 Columns (42%): Executive Editorial Plate with Live Console & Floating Levitation */}
              <div className="lg:col-span-5">
                <HeroExecutiveCard />
              </div>

            </div>
          </div>
        </HeroBackground>
      </section>

      {/* Luminous Animated Beam Divider */}
      <AnimatedBeamDivider glowColor="cyan" speed="normal" />

      {/* =========================================================================
          SECTION 02: LEADERSHIP JOURNEY (With Live Traveling Light Timeline)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-14">
            <span className="eyebrow text-brand">Leadership Journey</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Connecting Business Needs with Product Strategy &amp; Applied AI
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              A disciplined, problem-first methodology transforming domain friction into verifiable digital systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 7 Cols: Full Narrative with High-Legibility Editorial Pull-Quote */}
            <div className="lg:col-span-7 space-y-6 text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                Atif I. Malik’s work sits at the intersection of business needs, product strategy and technology execution. His approach starts with the problem to be solved: where work is repetitive, information is fragmented, customer engagement is inconsistent, or decisions depend on data that is difficult to access and interpret. From there, he helps connect domain expertise, user needs, product design, engineering and applied AI into a coherent delivery path.
              </p>

              {/* Editorial Pull-Quote with Glowing Cyan Accent */}
              <blockquote className="relative border-l-4 border-brand pl-6 py-4 my-6 bg-white/90 backdrop-blur-sm rounded-r-2xl border-y border-r border-slate-200/80 shadow-xs overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-2xl pointer-events-none" />
                <p className="text-slate-900 font-serif italic text-lg sm:text-xl leading-relaxed">
                  &quot;Connect domain expertise, user needs, product design, engineering and applied AI into a coherent, verifiable delivery path.&quot;
                </p>
              </blockquote>

              <p>
                As CEO of M3 Hive, Atif leads a technology company whose capabilities span digital product engineering, intelligent automation, data and AI, cloud platforms, customer experience and connected systems. Its current product priorities reflect three distinct opportunities: reducing documentation friction in healthcare through NourDoc; improving lead engagement and qualification through LeadHive AI; and using connected sensing and analytics to support livestock monitoring through Smart Animal.
              </p>

              <p>
                Atif is also a Founding CEO, Director and Shareholder of 360 Technologies. The company’s published historical portfolio includes public-sector information systems, postal workflows, digitisation, enterprise data and business intelligence, outsourcing and professional training. These achievements are presented as company history, not as a claim that Atif personally delivered every listed assignment.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-2.5 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-accent" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand block">
                  Strategic Objective
                </span>
                <p className="text-base text-slate-700 leading-relaxed font-medium">
                  The purpose of this website is to help investors understand product opportunities, help collaborators identify where their expertise or networks can contribute, and help prospective clients map their challenges to a suitable product, proof of concept or engineering engagement.
                </p>
              </div>

              <div className="pt-2">
                <Button to="/about" variant="secondary" size="lg" showArrow>
                  Read Full Executive Biography
                </Button>
              </div>
            </div>

            {/* Right 5 Cols: Four Principles of Execution (With Live Animated Traveling Light Spine) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand block">
                  Executive Governance
                </span>
                <h3 className="font-display font-bold text-2xl text-slate-900 mt-1">
                  Four Principles of Execution
                </h3>
              </div>

              {/* Timeline Container with Animated Traveling Light Spine */}
              <div className="relative pl-8 space-y-6">
                <AnimatedVerticalSpine />
                
                {LEADERSHIP_PRINCIPLES.map((principle, idx) => (
                  <div 
                    key={idx}
                    className="relative group transition-all"
                  >
                    {/* Spine Node Dot with Hover Scale & Glow */}
                    <div className="absolute -left-[37px] top-4 w-4 h-4 rounded-full bg-white border-2 border-brand group-hover:scale-125 group-hover:bg-brand transition-all shadow-xs" />

                    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft group-hover:border-brand/50 group-hover:shadow-card transition-all space-y-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono font-bold text-brand bg-brand-wash px-2.5 py-1 rounded-md border border-brand/20">
                          0{idx + 1}
                        </span>
                        <h4 className="font-display font-bold text-base sm:text-lg text-slate-900">
                          {principle.title}
                        </h4>
                      </div>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal pt-1">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Luminous Animated Beam Divider */}
      <AnimatedBeamDivider glowColor="teal" speed="normal" />

      {/* =========================================================================
          SECTION 03: EXPERTISE & CAPABILITIES (With Live Hover Accents)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-canvas relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Expertise & Capabilities"
            title={PERSPECTIVE.headline}
            description={PERSPECTIVE.body}
          />

          {/* Six Capability Areas Grid with Hover Beam Accents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {M3_HIVE_CAPABILITIES.map((cap, idx) => (
              <div 
                key={idx}
                className="group relative p-7 sm:p-8 bg-white border border-slate-200/90 rounded-2xl shadow-soft space-y-4 hover:border-brand/50 hover:shadow-card transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Animated Line Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#51AAC0] group-hover:to-transparent transition-all" />

                <div>
                  <span className="w-9 h-9 rounded-xl bg-brand-wash text-brand font-extrabold text-sm flex items-center justify-center border border-brand/20 mb-4 shadow-xs">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-brand transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-2.5 font-normal">
                    {cap.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-brand flex items-center justify-between">
                  <span>M3 Hive Practice</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          {/* Four Engagement Steps Timeline with Connecting Light Beam */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow text-brand">Engagement Progression</span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
                How Engagements Can Begin
              </h3>
            </div>

            {/* Connecting Horizontal Runner on Desktop */}
            <div className="hidden lg:block relative w-full h-[2px] bg-slate-200 mb-6 overflow-hidden rounded-full">
              <div className="absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-[#51AAC0] to-transparent animate-beam-x" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {M3_HIVE_ENGAGEMENT_MODELS.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-slate-50/80 border border-slate-200/90 rounded-2xl space-y-3 flex flex-col justify-between hover:bg-white hover:border-brand/40 hover:shadow-soft transition-all"
                >
                  <div>
                    <span className="w-8 h-8 rounded-lg bg-brand text-white font-extrabold text-xs flex items-center justify-center mb-3 shadow-xs">
                      {idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-base text-slate-900">{step.title}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed mt-1.5 font-normal">{step.detail}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/70 text-xs text-slate-600 font-semibold uppercase tracking-wider">
                    {step.phase}
                  </div>
                </div>
              ))}
            </div>

            {/* Engagement Models Banner */}
            <div className="mt-8 p-6 rounded-2xl bg-brand-wash/70 border border-brand/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="space-y-1">
                <span className="text-sm font-bold text-slate-900 block">
                  Documented Engagement Models:
                </span>
                <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Fixed-scope delivery · Time-and-materials · Embedded specialist teams · Integration projects · Strategic product collaboration.
                </span>
              </div>
              <Button to="/expertise" variant="outline" size="md" showArrow className="shrink-0">
                Explore Full Capabilities
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Luminous Animated Beam Divider */}
      <AnimatedBeamDivider glowColor="cyan" speed="normal" />

      {/* =========================================================================
          SECTION 04: COMPANIES & PRIORITY PRODUCTS (With Live Border Beams)
          ========================================================================= */}
      <section id="ventures" className="py-20 sm:py-28 bg-slate-50/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="eyebrow text-brand">Companies & Ventures</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              M3 Hive & Priority Product Initiatives
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              M3 Hive translates complex business needs into digital products, intelligent workflows and applied AI solutions.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20">
            
            {/* PRODUCT 01: NOURDOC (With Live Cyan Border Beam & Atmospheric Aura) */}
            {(() => {
              const nourdoc = PRODUCTS.find((p) => p.id === 'nourdoc')!;
              return (
                <div className="relative p-7 sm:p-10 lg:p-12 rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/80 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_60px_-15px_rgba(15,23,42,0.1)] transition-all space-y-8 overflow-hidden">
                  {/* Live Cyan Border Beam */}
                  <BorderBeam size={280} duration={9} colorFrom="#38BDF8" colorTo="#0284C7" borderWidth={1.5} />

                  {/* Atmospheric Ambient Glow & Specular Hairline Rim */}
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-400/8 rounded-full blur-3xl pointer-events-none -z-0" />
                  <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400/35 to-transparent pointer-events-none rounded-full" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                    <div className="lg:col-span-5 space-y-5">
                      <div className="flex items-center gap-2.5">
                        <AttributionBadge type={nourdoc.attribution} />
                        <span className="text-[11px] font-mono font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full uppercase tracking-wider">
                          01 · HealthTech AI Flagship
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                        {nourdoc.name}
                      </h3>

                      <p className="text-lg sm:text-xl text-sky-900 font-serif italic font-semibold leading-snug">
                        &quot;{nourdoc.positioningLine}&quot;
                      </p>

                      <p className="text-base text-slate-700 leading-relaxed font-normal">
                        {nourdoc.overview}
                      </p>

                      {/* Editorial Problem & Clinical Friction Bridge */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border-l-4 border-l-sky-500 border-y border-r border-slate-200/80 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                          <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                            Operational Challenge &amp; Clinical Friction
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed font-normal pl-4">
                          {nourdoc.challenge}
                        </p>
                      </div>

                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <Link
                          to="/products/nourdoc"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-brand via-[#2E6877] to-brand hover:from-[#2E6877] hover:to-brand rounded-full shadow-[0_4px_16px_rgba(55,122,138,0.28)] hover:shadow-[0_6px_22px_rgba(55,122,138,0.4)] transition-all duration-200 transform hover:scale-[1.02] border border-white/20"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                          <span>Explore NourDoc</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Button to="/contact?interest=nourdoc" variant="secondary" size="md">
                          Clinical Pilot Inquiries
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

            {/* PRODUCT 02: LEADHIVE AI (With Live Indigo Border Beam & Atmospheric Aura) */}
            {(() => {
              const leadhive = PRODUCTS.find((p) => p.id === 'leadhive-ai')!;
              return (
                <div className="relative p-7 sm:p-10 lg:p-12 rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/80 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_60px_-15px_rgba(15,23,42,0.1)] transition-all space-y-8 overflow-hidden">
                  {/* Live Indigo Border Beam */}
                  <BorderBeam size={280} duration={9} colorFrom="#818CF8" colorTo="#4F46E5" borderWidth={1.5} />

                  {/* Atmospheric Ambient Glow & Specular Hairline Rim */}
                  <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-400/8 rounded-full blur-3xl pointer-events-none -z-0" />
                  <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-400/35 to-transparent pointer-events-none rounded-full" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                      <LeadHiveWorkflowDiagram />
                    </div>

                    <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
                      <div className="flex items-center gap-2.5">
                        <AttributionBadge type={leadhive.attribution} />
                        <span className="text-[11px] font-mono font-bold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full uppercase tracking-wider">
                          02 · Sales Enablement AI
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                        {leadhive.name}
                      </h3>

                      <p className="text-lg sm:text-xl text-indigo-900 font-serif italic font-semibold leading-snug">
                        &quot;{leadhive.positioningLine}&quot;
                      </p>

                      <p className="text-base text-slate-700 leading-relaxed font-normal">
                        {leadhive.overview}
                      </p>

                      {/* Editorial Problem & Sales Friction Bridge */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border-l-4 border-l-indigo-500 border-y border-r border-slate-200/80 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                          <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                            Operational Challenge &amp; Conversion Friction
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed font-normal pl-4">
                          {leadhive.challenge}
                        </p>
                      </div>

                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <Link
                          to="/products/leadhive-ai"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-brand via-[#2E6877] to-brand hover:from-[#2E6877] hover:to-brand rounded-full shadow-[0_4px_16px_rgba(55,122,138,0.28)] hover:shadow-[0_6px_22px_rgba(55,122,138,0.4)] transition-all duration-200 transform hover:scale-[1.02] border border-white/20"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                          <span>Explore LeadHive AI</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Button to="/contact?interest=leadhive-ai" variant="secondary" size="md">
                          Design Qualification Funnel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* PRODUCT 03: SMART ANIMAL (With Live Emerald Border Beam & Atmospheric Aura) */}
            {(() => {
              const smartAnimal = PRODUCTS.find((p) => p.id === 'smart-animal')!;
              return (
                <div className="relative p-7 sm:p-10 lg:p-12 rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/80 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_60px_-15px_rgba(15,23,42,0.1)] transition-all space-y-8 overflow-hidden">
                  {/* Live Emerald Border Beam */}
                  <BorderBeam size={280} duration={9} colorFrom="#34D399" colorTo="#059669" borderWidth={1.5} />

                  {/* Atmospheric Ambient Glow & Specular Hairline Rim */}
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-400/8 rounded-full blur-3xl pointer-events-none -z-0" />
                  <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent pointer-events-none rounded-full" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                    <div className="lg:col-span-5 space-y-5">
                      <div className="flex items-center gap-2.5">
                        <AttributionBadge type={smartAnimal.attribution} />
                        <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                          03 · AgriTech IoT &amp; Telemetry
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                        {smartAnimal.name}
                      </h3>

                      <p className="text-lg sm:text-xl text-emerald-900 font-serif italic font-semibold leading-snug">
                        &quot;{smartAnimal.positioningLine}&quot;
                      </p>

                      <p className="text-base text-slate-700 leading-relaxed font-normal">
                        {smartAnimal.overview}
                      </p>

                      {/* Editorial Problem & Herd Visibility Bridge */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border-l-4 border-l-emerald-500 border-y border-r border-slate-200/80 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                            Operational Challenge &amp; Herd Visibility
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed font-normal pl-4">
                          {smartAnimal.challenge}
                        </p>
                      </div>

                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <Link
                          to="/products/smart-animal"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-brand via-[#2E6877] to-brand hover:from-[#2E6877] hover:to-brand rounded-full shadow-[0_4px_16px_rgba(55,122,138,0.28)] hover:shadow-[0_6px_22px_rgba(55,122,138,0.4)] transition-all duration-200 transform hover:scale-[1.02] border border-white/20"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                          <span>Explore Smart Animal</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Button to="/contact?interest=smart-animal" variant="secondary" size="md">
                          Discuss Farm Pilots
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
          <div className="mt-16 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-soft space-y-6 relative overflow-hidden">
            <div className="max-w-3xl space-y-3">
              <span className="eyebrow text-slate-500">Separate Historical Corporate Reference</span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                360 Technologies: Company Portfolio & Legacy
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {TECHNOLOGIES_360.overview}
              </p>
              
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900 font-bold">Attribution Safeguard: </strong>
                {TECHNOLOGIES_360.legalNotice}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
              {TECHNOLOGIES_360.practiceAreas.slice(0, 6).map((practice, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-brand/30 transition-all">
                  <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mb-1">{practice.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{practice.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm text-slate-600">
                Executive Affiliation: <strong className="text-slate-900 font-bold">{TECHNOLOGIES_360.atifRole}</strong> (Subject to final counsel confirmation).
              </span>
              <Button to="/360-technologies" variant="secondary" size="md" showArrow>
                Explore 360 Technologies Archive
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Luminous Animated Beam Divider */}
      <AnimatedBeamDivider glowColor="indigo" speed="normal" />

      {/* =========================================================================
          SECTION 05: SELECTED WORK & IMPACT
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-canvas relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <SectionHeader
              eyebrow="Selected Work & Impact"
              title="Curated Case Studies & Engineering Deployments"
              description="Documented M3 Hive company initiatives demonstrating software breadth across market intelligence, computational biology, and retail analytics."
              className="mb-0"
            />
            <Button to="/work" variant="secondary" size="lg" showArrow className="self-start md:self-auto shrink-0">
              View All 7 Case Studies
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {M3_HIVE_ADDITIONAL_WORK.slice(0, 3).map((work) => (
              <div 
                key={work.id} 
                className="group p-8 bg-white border border-slate-200/90 rounded-3xl shadow-soft flex flex-col justify-between hover:border-brand/40 hover:shadow-card transition-all relative overflow-hidden"
              >
                {/* Top Animated Specular Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-brand group-hover:to-transparent transition-all" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-brand uppercase tracking-wider">{work.category}</span>
                    <span className="text-slate-500 font-semibold uppercase">{work.group}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-brand transition-colors">
                    {work.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {work.challenge}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm">
                    <span className="font-bold text-slate-900 block mb-1">Delivered Approach:</span>
                    <p className="text-slate-700 leading-relaxed font-normal">{work.valueProposition}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 text-xs sm:text-sm flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Corporate Attribution:</span>
                  <span className="text-slate-900 font-bold">{work.attribution}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Luminous Animated Beam Divider */}
      <AnimatedBeamDivider glowColor="emerald" speed="normal" />

      {/* =========================================================================
          SECTION 06: COLLABORATION PATHWAYS & CLOSING
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Collaboration Opportunities"
            title={CLOSING_CTA.headline}
            description={CLOSING_CTA.body}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            {/* Pathway List (Left 5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              {COLLABORATION_PATHWAYS.map((pathway, idx) => (
                <button
                  key={pathway.id}
                  onClick={() => setSelectedPathwayIdx(idx)}
                  className={`w-full text-left p-5 rounded-2xl transition-all border ${
                    selectedPathwayIdx === idx
                      ? 'bg-brand-wash border-brand shadow-soft'
                      : 'bg-white border-slate-200/80 hover:border-brand/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-base sm:text-lg text-slate-900">
                      {pathway.name}
                    </span>
                    <ChevronRight className={`w-5 h-5 text-brand transition-transform ${selectedPathwayIdx === idx ? 'translate-x-1.5' : ''}`} />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-600 block mt-1 line-clamp-1">
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
                  <div className="p-8 sm:p-10 bg-white border border-slate-200 rounded-3xl space-y-6 shadow-soft relative overflow-hidden">
                    <div className="border-b border-slate-200 pb-5">
                      <span className="eyebrow text-brand">Selected Pathway</span>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
                        {current.name}
                      </h3>
                      <p className="text-base text-slate-700 mt-2 font-medium">
                        {current.audience}
                      </p>
                    </div>

                    <div className="space-y-5 text-sm sm:text-base">
                      <div>
                        <span className="font-bold text-slate-900 uppercase tracking-wider text-xs block mb-1.5">
                          Operational Challenge:
                        </span>
                        <p className="text-slate-700 leading-relaxed font-normal">
                          {current.likelyChallenge}
                        </p>
                      </div>

                      <div>
                        <span className="font-bold text-brand uppercase tracking-wider text-xs block mb-1.5">
                          What We Communicate:
                        </span>
                        <p className="text-slate-800 leading-relaxed font-medium">
                          {current.whatWeCommunicate}
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <span className="font-bold text-slate-900 uppercase tracking-wider text-xs block mb-1.5">
                          Suggested First Step:
                        </span>
                        <p className="text-slate-700 leading-relaxed font-normal">
                          {current.possibleFirstStep}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3">
                      <Button 
                        to={`/contact?intent=${encodeURIComponent(current.name)}`} 
                        variant="primary" 
                        size="lg" 
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
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-[#132B33] to-slate-950 text-white relative overflow-hidden">
        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#51AAC0]/50 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/30 border border-brand/40 text-brand-wash text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Direct Executive Discussion
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
            Building Intelligent Technology. Creating Real-World Impact.
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
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
