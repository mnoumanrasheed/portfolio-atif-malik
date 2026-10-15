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
  Stethoscope,
  Layers,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Shield
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
import { BorderBeam } from '../components/ui/BorderBeam';
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

  const featuredProducts = [
    {
      id: 'nourdoc',
      name: 'NourDoc',
      category: 'HealthTech AI',
      headline: 'Let AI handle the documentation. Let clinicians focus on care.',
      description:
        'An AI-enabled clinical documentation platform designed to transform clinical conversations and notes into structured healthcare documentation.',
      cta: 'Explore NourDoc',
      path: '/products/nourdoc',
      icon: Stethoscope,
      tags: ['Clinical Documentation', 'Conversational Capture', 'Structured Notes'],
      accentText: 'text-[#377A8A]',
      accentBg: 'bg-[#377A8A]/10',
      accentBorder: 'border-[#377A8A]/20',
      hoverBorder: 'group-hover:border-[#377A8A]/50',
      glowGradient: 'from-[#377A8A]/15 via-[#51AAC0]/10 to-transparent'
    },
    {
      id: 'leadhive-ai',
      name: 'LeadHive AI',
      category: 'Lead Engagement & Qualification',
      headline: 'Turn incoming interest into better-qualified sales conversations.',
      description:
        'An AI-enabled lead engagement and qualification engine that helps organisations respond to enquiries, understand prospect intent, and organise follow-up.',
      cta: 'Explore LeadHive AI',
      path: '/products/leadhive-ai',
      icon: Sparkles,
      tags: ['Inquiry Qualification', 'Intent Understanding', 'Sales Hand-Off'],
      accentText: 'text-indigo-600',
      accentBg: 'bg-indigo-50',
      accentBorder: 'border-indigo-200/80',
      hoverBorder: 'group-hover:border-indigo-400/50',
      glowGradient: 'from-indigo-500/15 via-sky-400/10 to-transparent'
    },
    {
      id: 'smart-animal',
      name: 'Smart Animal',
      category: 'AgriTech & IoT',
      headline: 'Connected livestock monitoring for more informed herd management.',
      description:
        'An IoT-based livestock monitoring and insight platform combining connected sensing with digital interfaces to support animal activity monitoring and herd management.',
      cta: 'Explore Smart Animal',
      path: '/products/smart-animal',
      icon: Radio,
      tags: ['Connected Sensing', 'Activity Monitoring', 'Herd Insights'],
      accentText: 'text-emerald-700',
      accentBg: 'bg-emerald-50',
      accentBorder: 'border-emerald-200/80',
      hoverBorder: 'group-hover:border-emerald-500/50',
      glowGradient: 'from-emerald-500/15 via-teal-400/10 to-transparent'
    }
  ];

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 sm:py-16">
            <div className="max-w-3xl space-y-6 sm:space-y-8">
              
              {/* Main Headline */}
              <div className="hero-headline">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  {EXECUTIVE_PROFILE.heroHeadline}
                </h1>
              </div>

              {/* Supporting Paragraph */}
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
            {featuredProducts.map((product, idx) => {
              const Icon = product.icon;
              return (
                <ScrollReveal key={product.id} delay={idx * 0.1}>
                  <div className={`relative bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-full shadow-soft hover:shadow-card ${product.hoverBorder} transition-all duration-300 group hover:-translate-y-1 overflow-hidden`}>
                    
                    {/* Ambient top illumination sheen on hover */}
                    <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${product.glowGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                    {/* Top specular accent line */}
                    <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#51AAC0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-4 relative z-10">
                      
                      {/* Category Badge & Product Icon */}
                      <div className="flex items-center justify-between gap-3">
                        <span className={`text-[11px] font-bold uppercase tracking-wider ${product.accentText} ${product.accentBg} px-3 py-1 rounded-full border ${product.accentBorder}`}>
                          {product.category}
                        </span>

                        <div className={`w-9 h-9 rounded-xl ${product.accentBg} ${product.accentText} border ${product.accentBorder} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Product Name & Approved Headline */}
                      <div>
                        <h3 className="font-display font-extrabold text-2xl text-slate-900 group-hover:text-[#377A8A] transition-colors tracking-tight">
                          {product.name}
                        </h3>
                        <p className="text-sm font-semibold text-slate-800 leading-snug mt-2">
                          {product.headline}
                        </p>
                      </div>

                      {/* Approved Concise Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {product.description}
                      </p>

                      {/* Capability Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-200/70 px-2.5 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* CTA Button */}
                    <div className="pt-6 border-t border-slate-100 mt-6 relative z-10">
                      <Button 
                        to={product.path} 
                        variant="secondary" 
                        size="md" 
                        showArrow 
                        className="w-full justify-center group-hover:border-[#377A8A] group-hover:text-[#377A8A]"
                      >
                        {product.cta}
                      </Button>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
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
          HOMEPAGE SECTION 6: 360 TECHNOLOGIES PREVIEW (Executive Redesign)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/70 to-white border-t border-slate-200/80 relative overflow-hidden">
        {/* Subtle background ambient blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#377A8A]/5 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="relative bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.08)] overflow-hidden">
              
              {/* Live Border Beam */}
              <BorderBeam size={280} duration={9} colorFrom="#51AAC0" colorTo="#377A8A" borderWidth={1.5} />
              
              {/* Top ambient refraction line */}
              <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#51AAC0]/40 to-transparent pointer-events-none rounded-full" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left 7 Columns: Executive Overview & Legal Identity */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                      <Shield className="w-3.5 h-3.5 text-[#377A8A]" />
                      <span>Separate Corporate Affiliation</span>
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-wash border border-brand/20 text-brand">
                      Founding CEO, Director &amp; Shareholder
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                      360 Technologies
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 mt-1">
                      Enterprise Systems, Public-Sector Digitisation &amp; Corporate Legacy
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {TECHNOLOGIES_360.legalNotice}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Button to="/360-technologies" variant="primary" size="md" showArrow>
                      Explore 360 Technologies
                    </Button>
                    {TECHNOLOGIES_360.directoryUrl && (
                      <Button href={TECHNOLOGIES_360.directoryUrl} variant="secondary" size="md" isExternal>
                        View Client Directory
                      </Button>
                    )}
                  </div>
                </div>

                {/* Right 5 Columns: Historical Practice Areas Ledger */}
                <div className="lg:col-span-5">
                  <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-4">
                    <div className="border-b border-slate-200/80 pb-3 flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                        Historical Practice Areas
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                        Enterprise Footprint
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-xs">
                      <li className="flex items-start gap-2.5 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#377A8A] mt-1.5 shrink-0" />
                        <span className="font-medium">Enterprise Systems &amp; Public-Sector Digitisation</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#377A8A] mt-1.5 shrink-0" />
                        <span className="font-medium">Land Records &amp; Revenue Automation</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#377A8A] mt-1.5 shrink-0" />
                        <span className="font-medium">Systems Integration &amp; Software Development</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#377A8A] mt-1.5 shrink-0" />
                        <span className="font-medium">Professional Capability &amp; Training</span>
                      </li>
                    </ul>

                    {/* Institutional Clients Strip */}
                    <div className="pt-3 border-t border-slate-200/80">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                        Published Client References
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {['Pakistan Post', 'Pakistan Navy', 'NADRA', 'IBM', 'UNDP'].map((client) => (
                          <span
                            key={client}
                            className="text-[10px] font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded shadow-2xs"
                          >
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
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
