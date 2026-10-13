import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronRight,
  Check
} from 'lucide-react';
import { 
  EXECUTIVE_PROFILE, 
  PRODUCTS, 
  M3_HIVE_ADDITIONAL_WORK, 
  TECHNOLOGIES_360, 
  COLLABORATION_PATHWAYS, 
  EXTERNAL_SOURCES 
} from '../content/portfolio';
import { Button } from '../components/ui/Button';
import { AttributionBadge } from '../components/ui/AttributionBadge';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { ExecutiveHeroDiagram } from '../components/diagrams/ExecutiveHeroDiagram';
import { ProcessTimelineDiagram } from '../components/diagrams/ProcessTimelineDiagram';
import { ScrollReveal } from '../components/motion/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-folio', { opacity: 0, y: 15, duration: 0.5, ease: 'power3.out' })
        .from('.hero-headline', { opacity: 0, y: 25, duration: 0.7, ease: 'power3.out' }, '-=0.3')
        .from('.hero-statement', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .from('.hero-roles', { opacity: 0, y: 15, duration: 0.5, ease: 'power3.out' }, '-=0.3')
        .from('.hero-cta', { opacity: 0, y: 15, duration: 0.5, ease: 'power3.out' }, '-=0.3')
        .from('.hero-schematic', { opacity: 0, scale: 0.98, duration: 0.7, ease: 'power3.out' }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black text-white">
      {/* 1. HERO: LUXURY EDITORIAL BROADSHEET */}
      <section 
        ref={heroRef} 
        className="relative border-b border-neutral-800 pt-6 pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Top Editorial Index Folio */}
          <div className="hero-folio flex items-center justify-between pb-6 border-b border-neutral-800 text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-12">
            <span>VOL. 2026 / EXECUTIVE DOSSIER</span>
            <span>EDITION 01 / APPLIED AI & TECHNOLOGY LEADERSHIP</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Authoritative Editorial Header */}
            <div className="lg:col-span-7 space-y-8">
              <div className="hero-headline space-y-3">
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                  [ EXECUTIVE PROFILE ]
                </div>
                <h1 className="font-editorial-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tighter uppercase leading-[0.9]">
                  {EXECUTIVE_PROFILE.name}
                </h1>
                <p className="font-mono text-xs sm:text-sm text-neutral-400 tracking-widest uppercase pt-2">
                  {EXECUTIVE_PROFILE.tagline}
                </p>
              </div>

              <p className="hero-statement font-editorial-body text-lg sm:text-xl text-neutral-200 max-w-2xl leading-relaxed">
                I work with organisations to turn complex operational challenges into practical digital products, AI-enabled workflows and scalable technology solutions.
              </p>

              {/* Roles Ledger */}
              <div className="hero-roles pt-6 border-t border-neutral-800 space-y-3 font-mono text-xs">
                <div className="flex items-baseline justify-between border-b border-neutral-900 pb-2">
                  <span className="text-white uppercase font-bold">Chief Executive Officer</span>
                  <span className="text-neutral-400">M3 Hive [ Primary Focus ]</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-neutral-900 pb-2">
                  <span className="text-neutral-300 uppercase">Co-Founder, Director & Shareholder</span>
                  <span className="text-neutral-500">360 Technologies [ Historical ]</span>
                </div>
              </div>

              {/* Working Action CTAs */}
              <div className="hero-cta flex flex-wrap items-center gap-4 pt-4">
                <Button to="/contact" variant="primary" size="lg" showArrow>
                  Discuss a Project
                </Button>
                <Button to="/work" variant="secondary" size="lg">
                  Explore Selected Work
                </Button>
                <Button 
                  href={EXECUTIVE_PROFILE.verifiedLinks.linkedin} 
                  variant="outline" 
                  size="lg" 
                  isExternal
                >
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Right Column: Technical Schematic Matrix */}
            <div className="lg:col-span-5 hero-schematic">
              <ExecutiveHeroDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CORE PROBLEM-FIRST THESIS */}
      <section className="py-24 border-b border-neutral-800 bg-mono-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="border border-neutral-800 bg-black p-8 sm:p-14 space-y-6">
              <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
                [ THESIS STATEMENT ]
              </div>

              <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl text-white tracking-tighter uppercase leading-tight">
                Technology should solve a real problem.
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 font-editorial-body leading-relaxed max-w-3xl">
                Whether the challenge is clinical documentation, lead conversion, livestock monitoring or a complex enterprise workflow, the starting point is the same: understand the operating reality, define the outcome, and build the right digital solution.
              </p>

              <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                <span className="text-neutral-500 uppercase">
                  OPERATING LOGIC: PROBLEM &gt; PRODUCT &gt; DELIVERY
                </span>
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-1.5 text-white hover:underline uppercase tracking-wider"
                >
                  Executive Philosophy <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. THREE SIGNATURE PRODUCTS */}
      <section id="products" className="py-28 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="PORTFOLIO CORE"
              title="Three Priority Product Stories"
              description="M3 Hive's current initiatives address three distinct operational bottlenecks through practical applied AI and scalable engineering."
            />
          </ScrollReveal>

          <div className="space-y-16">
            {PRODUCTS.map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx * 0.1}>
                <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-12 hover:border-neutral-500 transition-colors">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Product Information */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <AttributionBadge type={product.attribution} />
                        <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                          PRIORITY 0{idx + 1}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-editorial-heading text-3xl sm:text-4xl text-white uppercase tracking-tight">
                          {product.name}
                        </h3>
                        <p className="font-mono text-sm text-neutral-300">
                          &quot;{product.positioningLine}&quot;
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-300 font-editorial-body leading-relaxed">
                        {product.overview}
                      </p>

                      <div className="pt-2">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-3">
                          [ VALUE SPECIFICATION ]
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                          {product.valueProposition.slice(0, 3).map((vp, vIdx) => (
                            <li key={vIdx} className="flex items-start gap-2.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                              <span>{vp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 pt-4">
                        <Button to={`/products/${product.id}`} variant="primary" size="sm" showArrow>
                          Examine {product.name}
                        </Button>
                        {product.officialUrl && (
                          <Button href={product.officialUrl} variant="outline" size="sm" isExternal>
                            Official Portal
                          </Button>
                        )}
                        <Button to={`/contact?interest=${product.id}`} variant="secondary" size="sm">
                          Discuss Pilot
                        </Button>
                      </div>
                    </div>

                    {/* Right: Technical Operating Constraints */}
                    <div className="lg:col-span-5 border border-neutral-800 bg-black p-6 sm:p-8 space-y-6 font-mono text-xs">
                      <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                        <span className="text-neutral-400 uppercase tracking-widest">[ DOMAIN CONTEXT ]</span>
                        <span className="text-white uppercase">{product.tagline}</span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <span className="text-neutral-500 uppercase block mb-1">Target Stakeholders</span>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {product.intendedUsers.slice(0, 4).map((u, uIdx) => (
                              <span key={uIdx} className="text-[11px] bg-mono-900 border border-neutral-800 px-2.5 py-1 text-neutral-300">
                                {u}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-neutral-500 uppercase block mb-1">Operational Challenge</span>
                          <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                            {product.challenge}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-neutral-900 text-[10px] text-neutral-500">
                          STATUS: {product.statusNote}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WORK TAKES SHAPE (DELIVERY TIMELINE) */}
      <section className="py-28 border-b border-neutral-800 bg-mono-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="METHODOLOGY"
              title="How Work Takes Shape"
              description="A disciplined progression from domain analysis through prototype, implementation, and iterative scaling."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ProcessTimelineDiagram />
          </ScrollReveal>
        </div>
      </section>

      {/* 5. SELECTED M3 HIVE CORPORATE WORK */}
      <section className="py-28 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionHeader
                eyebrow="CORPORATE ARCHIVE"
                title="Selected Additional Work"
                description="Technical depth across bioinformatics pipelines, market intelligence platforms, and digital systems."
                className="mb-0"
              />
              <Button to="/work" variant="outline" size="sm" showArrow>
                View All 7 Projects
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {M3_HIVE_ADDITIONAL_WORK.slice(0, 3).map((study, idx) => (
              <ScrollReveal key={study.id} delay={idx * 0.1}>
                <Card className="p-8 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <AttributionBadge type={study.attribution} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                      {study.title}
                    </h3>
                    <p className="font-mono text-xs text-neutral-400">
                      {study.category}
                    </p>
                    <p className="text-xs text-neutral-300 font-editorial-body leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-800 font-mono text-[11px] text-neutral-400">
                    VALUE: {study.valueProposition}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 360 TECHNOLOGIES LEGACY BLOCK */}
      <section className="py-28 border-b border-neutral-800 bg-mono-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="border border-neutral-800 bg-black p-8 sm:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <AttributionBadge type="360 Technologies company portfolio" />
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                      SEPARATE HISTORICAL ENTITY
                    </span>
                  </div>

                  <h3 className="font-editorial-heading text-3xl sm:text-4xl text-white uppercase tracking-tight">
                    360 Technologies — Enterprise & Public-Sector Portfolio
                  </h3>

                  <p className="font-mono text-xs text-neutral-300">
                    Atif I. Malik: <strong className="text-white uppercase">{TECHNOLOGIES_360.atifRole}</strong>
                  </p>

                  <p className="text-sm text-neutral-300 font-editorial-body leading-relaxed max-w-2xl">
                    {TECHNOLOGIES_360.legalNotice}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
                    <span className="border border-neutral-800 px-3 py-1 bg-mono-900">Pakistan Post</span>
                    <span className="border border-neutral-800 px-3 py-1 bg-mono-900">Pakistan Navy</span>
                    <span className="border border-neutral-800 px-3 py-1 bg-mono-900">NADRA Public Records</span>
                    <span className="border border-neutral-800 px-3 py-1 bg-mono-900">Provincial Land Records</span>
                    <span className="border border-neutral-800 px-3 py-1 bg-mono-900">Sindh RSU Education</span>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Button to="/360-technologies" variant="secondary" size="md" showArrow>
                      Examine 360 History
                    </Button>
                    <Button href={TECHNOLOGIES_360.directoryUrl} variant="outline" size="md" isExternal>
                      Published Directory
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-4 border border-neutral-800 bg-mono-900 p-6 space-y-3 font-mono text-xs">
                  <div className="text-white uppercase font-bold tracking-wider">
                    [ GOVERNANCE GUARDRAIL ]
                  </div>
                  <p className="text-neutral-400 font-sans text-xs leading-relaxed">
                    Achievements and client records belong to 360 Technologies as an organisation. Presented transparently as historical records without implying current executive management or personal delivery of every contract.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. COLLABORATION PATHWAYS */}
      <section className="py-28 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionHeader
                eyebrow="ENGAGEMENT DOSSIER"
                title="Structured Ways to Collaborate"
                description="Audience-aligned engagement routes for investors, clinical partners, commercial resellers, and enterprise teams."
                className="mb-0"
              />
              <Button to="/collaboration" variant="secondary" size="sm" showArrow>
                All 6 Pathways
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COLLABORATION_PATHWAYS.slice(0, 6).map((path, idx) => (
              <ScrollReveal key={path.id} delay={idx * 0.05}>
                <Card className="p-8 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="font-mono text-xs font-bold text-neutral-400 block">
                      [ PATHWAY 0{idx + 1} ]
                    </span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                      {path.name}
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono uppercase">
                      Target: {path.audience}
                    </p>
                    <p className="text-xs text-neutral-300 font-editorial-body leading-relaxed">
                      {path.whatWeCommunicate}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-800">
                    <Link
                      to={`/contact?pathway=${path.id}`}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:underline"
                    >
                      {path.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VERIFIED REFERENCES */}
      <section className="py-24 border-b border-neutral-800 bg-mono-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                  [ VERIFICATION & AUDIT ]
                </span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mt-1">
                  Selected References & Sources
                </h3>
              </div>
              <Button to="/insights" variant="outline" size="sm">
                View All Sources
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {EXTERNAL_SOURCES.slice(0, 3).map((source, idx) => (
              <a
                key={idx}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-neutral-800 bg-black hover:border-white transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">{source.category}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white" />
                </div>
                <p className="text-sm font-bold text-white uppercase group-hover:underline">
                  {source.title}
                </p>
                <p className="text-xs text-neutral-400 mt-2 font-mono">
                  {source.note}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONCLUDING EDITORIAL CTA */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <ScrollReveal>
            <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
              [ INITIATE CORRESPONDENCE ]
            </div>

            <h2 className="font-editorial-heading text-4xl sm:text-5xl lg:text-6xl text-white tracking-tighter uppercase leading-tight">
              &quot;Let’s start with the problem you need to solve.&quot;
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-editorial-body leading-relaxed max-w-2xl mx-auto">
              If you are exploring AI adoption, a product pilot, technology integration, research collaboration or a custom digital platform, share the challenge and the outcome you are working toward.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg" showArrow>
                Discuss a Project
              </Button>
              <Button to="/collaboration" variant="secondary" size="lg">
                Collaboration Pathways
              </Button>
              <Button 
                href={EXECUTIVE_PROFILE.verifiedLinks.linkedin} 
                variant="outline" 
                size="lg" 
                isExternal
              >
                LinkedIn Profile
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
