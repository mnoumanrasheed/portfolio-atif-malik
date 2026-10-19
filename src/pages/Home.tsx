import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  Cpu, 
  Database, 
  Cloud, 
  Radio, 
  Microscope,
  Shield
} from 'lucide-react';
import { 
  EXECUTIVE_PROFILE, 
  M3_HIVE_ADDITIONAL_WORK, 
  TECHNOLOGIES_360,
  CLOSING_CTA 
} from '../content/portfolio';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { HeroBackground } from '../components/ui/HeroBackground';
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
      tl.from('.hero-headline', { opacity: 0, y: 22, duration: 0.6 })
        .from('.hero-statement', { opacity: 0, y: 16, duration: 0.5 }, '-=0.3')
        .from('.hero-cta', { opacity: 0, y: 14, duration: 0.45, stagger: 0.1 }, '-=0.25');
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
          HOMEPAGE SECTION 01: EXECUTIVE HERO
          ========================================================================= */}
      <section 
        ref={heroRef} 
        className="relative bg-white overflow-hidden"
      >
        <HeroBackground 
          imageSrc="/images/heroes/hero-home.jpg" 
          imageAlt="Executive Architectural Technology Space"
          glowColor="teal" 
          isCompactHeight={true}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 sm:py-16">
            <div className="max-w-3xl space-y-6 sm:space-y-7">
              
              {/* Executive Identity Tag & Professional Descriptor */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#286252]/30 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#286252] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-widest text-[#286252] uppercase">
                    {EXECUTIVE_PROFILE.name}
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="text-xs font-medium text-slate-600">
                    {EXECUTIVE_PROFILE.tagline}
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="hero-headline">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  {EXECUTIVE_PROFILE.heroHeadline}
                </h1>
              </div>

              {/* Supporting Copy */}
              <div className="hero-statement text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
                <p>
                  {EXECUTIVE_PROFILE.heroStatement}
                </p>
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
          </div>
        </HeroBackground>
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 02: LEADERSHIP JOURNEY
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-wash text-brand text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span>Leadership Journey</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                About Atif I. Malik
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-left sm:text-center">
                {EXECUTIVE_PROFILE.shortBio}
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
          HOMEPAGE SECTION 03: EXPERTISE & CAPABILITIES
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
          HOMEPAGE SECTION 04: COMPANIES & VENTURES
          ========================================================================= */}
      <section className="pt-6 pb-20 sm:pt-8 sm:pb-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* M3 Hive Operating Vehicle Overview */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-8 sm:px-10 sm:py-10 shadow-soft">
            <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-[#286252]/10 blur-3xl pointer-events-none" />
            <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-wash border border-brand/15 text-brand text-[11px] font-bold uppercase tracking-[0.12em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                  <span>Primary Operating Vehicle</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400 mb-2">M3 Hive portfolio</p>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
                    Products built around real operational needs.
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  M3 Hive translates business needs into digital products, intelligent workflows and applied AI solutions across healthcare, customer engagement and connected systems.
                </p>
              </div>
              <Button to="/ventures" variant="secondary" size="sm" showArrow className="shrink-0">
                View Ventures Overview
              </Button>
            </div>
          </div>

          {/* Subordinate Compact 360 Technologies Card */}
          <ScrollReveal delay={0.15}>
            <div className="relative bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold">
                      <Shield className="w-3 h-3 text-[#286252]" />
                      <span>Separate Company Affiliation</span>
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-brand-wash border border-brand/20 text-brand">
                      Founding CEO, Director &amp; Shareholder
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                      360 Technologies
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      A separate technology-services company with a published history across enterprise systems, public-sector digitisation, data services and professional capability development. Presented as company history, not as a claim of personal delivery of every listed assignment.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex flex-wrap items-center gap-3">
                  <Button to="/360-technologies" variant="secondary" size="sm" showArrow>
                    Explore 360 Technologies
                  </Button>
                  {TECHNOLOGIES_360.directoryUrl && (
                    <Button href={TECHNOLOGIES_360.directoryUrl} variant="ghost" size="sm" isExternal>
                      Client Directory
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 05: SELECTED WORK & IMPACT
          ========================================================================= */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="absolute right-0 top-12 h-80 w-80 rounded-full bg-[#286252]/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-soft sm:px-10 sm:py-10 mb-7 sm:mb-8">
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-tl-full bg-[#286252]/[0.06]" />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <SectionHeader
                eyebrow="Company Portfolio"
                title="Selected Work & Impact"
                description="M3 Hive projects spanning market intelligence, scientific software, and bioinformatics."
              />
              <Button to="/work" variant="secondary" size="sm" showArrow className="shrink-0 self-start lg:self-end">
                View Selected Work
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {featuredWork.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 0.08}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#286252]/40 hover:shadow-card sm:p-7">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#286252] via-[#286252] to-transparent opacity-70" />
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#286252]/0 transition-colors duration-300 group-hover:bg-[#286252]/10" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#286252]">
                        {project.category}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 font-mono text-[10px] font-bold text-slate-400 transition-colors group-hover:border-[#286252]/30 group-hover:bg-brand-wash group-hover:text-[#286252]">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="mt-6 inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[9px] font-medium text-slate-500">
                      {project.attribution}
                    </span>

                    <h3 className="mt-4 font-display text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#286252]">
                      {project.title}
                    </h3>

                    <div className="mt-5 space-y-4 text-xs sm:text-sm leading-relaxed">
                      <div className="border-l-2 border-slate-200 pl-3.5">
                        <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">Challenge</span>
                        <p className="text-slate-600">
                        {project.challenge}
                        </p>
                      </div>
                      <div className="border-l-2 border-[#286252] pl-3.5">
                        <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-[#286252]">Solution</span>
                        <p className="text-slate-700">
                        {project.valueProposition}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 06: COLLABORATION OPPORTUNITIES
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-wash text-brand text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span>Collaboration Opportunities</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              {CLOSING_CTA.headline}
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {CLOSING_CTA.body}
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
