import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Cpu, 
  Database, 
  Cloud, 
  Radio, 
  Microscope,
  Layers,
  ChevronRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { 
  EXECUTIVE_PROFILE, 
  PRODUCTS, 
  M3_HIVE_ADDITIONAL_WORK, 
  TECHNOLOGIES_360 
} from '../content/portfolio';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { HeroBackground } from '../components/ui/HeroBackground';
import { HeroExecutiveCard } from '../components/ui/HeroExecutiveCard';
import { LivePulseBeacon } from '../components/ui/BorderBeam';
import { ScrollReveal } from '../components/motion/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.from('.hero-eyebrow', { opacity: 0, y: 14, duration: 0.5 })
        .from('.hero-headline', { opacity: 0, y: 22, duration: 0.6 }, '-=0.25')
        .from('.hero-statement', { opacity: 0, y: 16, duration: 0.5 }, '-=0.3')
        .from('.hero-roles', { opacity: 0, y: 14, duration: 0.45 }, '-=0.25')
        .from('.hero-cta', { opacity: 0, y: 14, duration: 0.45, stagger: 0.1 }, '-=0.3')
        .from('.hero-editorial-card', { opacity: 0, scale: 0.96, y: 18, duration: 0.75, ease: 'power3.out' }, '-=0.55');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const capabilities = [
    {
      title: 'Applied AI & Intelligent Workflows',
      desc: 'Generative AI, LLM-based experiences, retrieval-augmented generation, document processing and workflow automation.',
      icon: Sparkles
    },
    {
      title: 'AI Product Engineering',
      desc: 'Product discovery, product definition, UX/UI, software architecture, web/mobile development and iterative delivery.',
      icon: Cpu
    },
    {
      title: 'Data Engineering & Market Intelligence',
      desc: 'Data acquisition, pipeline engineering, data quality, analytics, dashboards and decision-support platforms.',
      icon: Database
    },
    {
      title: 'Cloud & Enterprise Integration',
      desc: 'Cloud-native systems, APIs, data platforms and deployment approaches aligned to client needs.',
      icon: Cloud
    },
    {
      title: 'IoT & Connected Systems',
      desc: 'Sensor-connected products, edge technologies, data capture and monitoring interfaces.',
      icon: Radio
    },
    {
      title: 'Research-Oriented Software',
      desc: 'Bioinformatics workflows, scientific data processing and interactive visualisation.',
      icon: Microscope
    }
  ];

  const featuredWork = M3_HIVE_ADDITIONAL_WORK.filter(w => !w.hidden).slice(0, 3);

  return (
    <div className="bg-canvas text-ink selection:bg-brand-wash selection:text-brand-dark overflow-x-hidden">
      
      {/* =========================================================================
          HOMEPAGE SECTION 1: EXECUTIVE HERO
          ========================================================================= */}
      <section 
        ref={heroRef} 
        className="relative bg-white overflow-hidden"
      >
        <HeroBackground 
          imageSrc="/images/heroes/hero-home.jpg" 
          imageAlt="Executive Architecture"
          glowColor="teal" 
          isCompactHeight={true}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left 7 Columns: Executive Identity & Positioning */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                
                {/* Executive Status Badge & Title */}
                <div className="hero-eyebrow flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <LivePulseBeacon label={EXECUTIVE_PROFILE.name} pulseColor="bg-[#51AAC0]" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide">
                    {EXECUTIVE_PROFILE.professionalPositioning}
                  </span>
                </div>

                {/* Main Headline */}
                <div className="hero-headline">
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                    {EXECUTIVE_PROFILE.heroHeadline}
                  </h1>
                </div>

                {/* Supporting Paragraphs */}
                <div className="hero-statement space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-xl">
                  <p>
                    {EXECUTIVE_PROFILE.heroStatement}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                    {EXECUTIVE_PROFILE.heroSecondParagraph}
                  </p>
                </div>

                {/* Verified Affiliations Ledger */}
                <div className="hero-roles p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-soft space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-1.5 border-b border-slate-100">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">
                      {EXECUTIVE_PROFILE.currentRole}
                    </span>
                    <span className="text-brand text-[11px] font-semibold tracking-wide">
                      Primary Company Focus
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-medium text-xs text-slate-700">
                      {EXECUTIVE_PROFILE.separateAffiliation}
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      Separate Company Association
                    </span>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="hero-cta flex flex-wrap items-center gap-3 pt-2">
                  <Button to="/contact" variant="primary" size="lg" showArrow>
                    Discuss a Project
                  </Button>
                  <Button to="/work" variant="secondary" size="lg">
                    Explore Selected Work
                  </Button>
                </div>

              </div>

              {/* Right 5 Columns: Executive Console Card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <HeroExecutiveCard />
              </div>

            </div>
          </div>
        </HeroBackground>
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 2: ABOUT PREVIEW
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-wash text-brand text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span>Executive Introduction</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                About Atif I. Malik
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {EXECUTIVE_PROFILE.homepageIntro}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="pt-2">
                <Button to="/about" variant="secondary" size="md" showArrow>
                  Learn More About Atif
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 3: EXPERTISE PREVIEW
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-canvas-subtle border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeader
              eyebrow="Core Competencies"
              title="Applied AI & Technical Expertise"
              description="A practical approach to digital solutions, connecting domain needs with software architecture and delivery."
            />
            <Button to="/expertise" variant="ghost" size="sm" showArrow className="self-start md:self-end">
              Explore Expertise
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal key={cap.title} delay={idx * 0.05}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:shadow-card transition-all h-full flex flex-col justify-between group">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-wash border border-brand/20 flex items-center justify-center text-brand group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-brand transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 4: FEATURED PRODUCTS
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-wash text-brand text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span>Priority Product Focus</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Featured Products
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Three priority products addressing distinct real-world needs across healthcare, sales, and agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx * 0.1}>
                <div className="bg-white border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between h-full shadow-soft hover:shadow-card hover:border-brand/40 transition-all group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono uppercase tracking-wider text-brand bg-brand-wash px-2.5 py-1 rounded-md border border-brand/20">
                        {product.category}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500">
                        Priority 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-slate-900 group-hover:text-brand transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      {product.positioningLine}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {product.overview}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6">
                    <Button 
                      to={`/products/${product.id}`} 
                      variant="secondary" 
                      size="sm" 
                      showArrow 
                      className="w-full justify-center"
                    >
                      Explore {product.name}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 5: SELECTED WORK PREVIEW
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-canvas-subtle border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeader
              eyebrow="Company Portfolio"
              title="Selected Work & Impact"
              description="Verified M3 Hive company projects spanning market intelligence, scientific software, and bioinformatics."
            />
            <Button to="/work" variant="ghost" size="sm" showArrow className="self-start md:self-end">
              View Selected Work
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWork.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 0.08}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-brand font-mono uppercase tracking-wider text-[11px]">
                        {project.category}
                      </span>
                      <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        M3 Hive
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {project.title}
                    </h3>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <p>
                        <strong className="text-slate-800 font-medium">Challenge: </strong>
                        {project.challenge}
                      </p>
                      <p>
                        <strong className="text-slate-800 font-medium">Solution: </strong>
                        {project.valueProposition}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 6: 360 TECHNOLOGIES PREVIEW
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-soft">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Separate Corporate Affiliation
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-900">
                  360 Technologies
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                Founding CEO, Director &amp; Shareholder
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal py-6">
              {TECHNOLOGIES_360.legalNotice}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button to="/360-technologies" variant="primary" size="md" showArrow>
                Explore 360 Technologies
              </Button>
              {TECHNOLOGIES_360.directoryUrl && (
                <Button href={TECHNOLOGIES_360.directoryUrl} variant="ghost" size="md" isExternal>
                  View Client Directory
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 7: COLLABORATION & CONTACT
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-canvas-subtle border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-wash text-brand text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span>Direct Strategic Inquiry</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Let&apos;s Start With the Problem You Need to Solve.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              If you are exploring AI adoption, a product pilot, technology integration, research collaboration or a custom digital platform, share the challenge and the outcome you are working toward.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" showArrow>
                Discuss a Project
              </Button>
              <Button 
                href={EXECUTIVE_PROFILE.verifiedLinks.linkedin} 
                variant="outline" 
                size="lg" 
                isExternal
              >
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
