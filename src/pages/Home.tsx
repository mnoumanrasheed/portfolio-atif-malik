import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronRight,
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
  LEADERSHIP_PRINCIPLES
} from '../content/portfolio';
import { Button } from '../components/ui/Button';
import { AttributionBadge } from '../components/ui/AttributionBadge';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
        .from('.hero-card', { opacity: 0, y: 25, duration: 0.7, ease: 'power2.out' }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-canvas text-ink">
      {/* 1. EXECUTIVE HERO */}
      <section 
        ref={heroRef} 
        className="relative pt-6 pb-20 sm:pb-24 border-b border-line bg-canvas"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Authoritative Editorial Header */}
            <div className="lg:col-span-7 space-y-6">
              <div className="hero-eyebrow eyebrow text-accent font-semibold">
                Chief Executive Officer · M3 Hive
              </div>

              <div className="hero-headline space-y-3">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.1]">
                  {EXECUTIVE_PROFILE.name}
                </h1>
                <p className="text-lg sm:text-xl text-ink-muted font-normal leading-relaxed">
                  {EXECUTIVE_PROFILE.tagline}
                </p>
              </div>

              <p className="hero-statement text-base sm:text-lg text-ink-body max-w-2xl leading-relaxed">
                {EXECUTIVE_PROFILE.heroStatement}
              </p>

              {/* Roles Ledger */}
              <div className="hero-roles pt-4 pb-2 border-y border-line space-y-3 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-semibold text-ink">Chief Executive Officer</span>
                  <span className="text-accent text-xs sm:text-sm font-medium">M3 Hive · Primary Operational Focus</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-medium text-ink-muted">Co-Founder, Director & Shareholder</span>
                  <span className="text-ink-subtle text-xs sm:text-sm">360 Technologies · Corporate Affiliation</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="hero-cta flex flex-wrap items-center gap-4 pt-2">
                <Button to="/contact" variant="primary" size="lg" showArrow>
                  Discuss an Engagement
                </Button>
                <Button to="/m3-hive" variant="secondary" size="lg">
                  Explore Products
                </Button>
              </div>
            </div>

            {/* Right Column: Executive Folio Card */}
            <div className="lg:col-span-5 hero-card">
              <div className="bg-white border border-line rounded-card p-6 sm:p-8 shadow-card space-y-6">
                <div className="flex items-center justify-between pb-5 border-b border-line">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent-wash text-accent font-display font-bold text-lg flex items-center justify-center border border-accent/20 shadow-sm">
                      AIM
                    </div>
                    <div>
                      <div className="font-display font-bold text-ink text-base">Atif I. Malik</div>
                      <div className="text-xs text-ink-muted">Executive Folio · Verified Profile</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Active
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                    Active M3 Hive Product Portfolio
                  </div>
                  <div className="space-y-2">
                    {PRODUCTS.map((prod) => (
                      <Link 
                        key={prod.id} 
                        to={`/products/${prod.id}`}
                        className="flex items-center justify-between p-3 rounded-lg border border-line bg-canvas-subtle hover:bg-accent-wash/40 hover:border-accent/30 transition-all group"
                      >
                        <div>
                          <div className="font-semibold text-sm text-ink group-hover:text-accent transition-colors">
                            {prod.name}
                          </div>
                          <div className="text-xs text-ink-muted">
                            {prod.tagline}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-ink-subtle group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-line flex items-center justify-between text-xs text-ink-muted">
                  <span>Based in United Kingdom & UAE</span>
                  <a 
                    href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent font-medium hover:underline"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PERSPECTIVE & PHILOSOPHY */}
      <section className="py-20 border-b border-line bg-canvas-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Leadership Philosophy"
            title={PERSPECTIVE.headline}
            description={PERSPECTIVE.body}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {LEADERSHIP_PRINCIPLES.map((item, idx) => (
              <Card key={idx} className="p-6 sm:p-8 bg-white border-line shadow-soft flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-accent-wash text-accent flex items-center justify-center font-bold text-sm mb-5 border border-accent/20">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRIORITY PRODUCT PORTFOLIO */}
      <section id="products" className="py-20 sm:py-24 border-b border-line bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <SectionHeader
              eyebrow="Active Innovation"
              title="Priority M3 Hive Product Portfolio"
              description="Under Atif's leadership, M3 Hive develops proprietary AI and IoT platforms designed to solve acute operational bottlenecks across healthcare, commercial engagement, and agricultural telemetry."
              className="mb-0"
            />
            <Button to="/m3-hive" variant="secondary" showArrow className="self-start md:self-auto shrink-0">
              M3 Hive Overview
            </Button>
          </div>

          <div className="space-y-8">
            {PRODUCTS.map((product, idx) => {
              const isFlagship = idx === 0; // NourDoc
              return (
                <div 
                  key={product.id}
                  className={`border border-line rounded-card transition-all duration-200 ${
                    isFlagship ? 'bg-white shadow-card p-8 sm:p-10 border-accent/30' : 'bg-white shadow-soft p-6 sm:p-8'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <AttributionBadge type={product.attribution} />
                        {isFlagship && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent text-white">
                            Primary Flagship
                          </span>
                        )}
                        <span className="text-xs text-ink-subtle">
                          {product.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink">
                          {product.name}
                        </h3>
                        <p className="text-base text-accent font-medium mt-1">
                          {product.tagline}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-ink-body leading-relaxed">
                        {product.overview}
                      </p>

                      <div className="p-4 rounded-lg bg-canvas-subtle border border-line">
                        <div className="text-xs font-semibold text-ink uppercase tracking-wider mb-1">Operational Challenge</div>
                        <p className="text-xs text-ink-muted leading-relaxed">{product.challenge}</p>
                      </div>

                      <div className="text-xs text-ink-subtle italic pt-1">
                        Status Note: {product.statusNote}
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-line lg:pl-8">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-ink-subtle mb-3">
                          Key Value Propositions
                        </div>
                        <ul className="space-y-2.5">
                          {product.valueProposition.slice(0, 3).map((vp, vIdx) => (
                            <li key={vIdx} className="text-xs text-ink-body flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                              <span>{vp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-line">
                        <Button to={`/products/${product.id}`} variant={isFlagship ? 'primary' : 'secondary'} size="md" showArrow className="w-full">
                          View {product.name} Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SELECTED WORK & CASE STUDIES */}
      <section className="py-20 sm:py-24 border-b border-line bg-canvas-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <SectionHeader
              eyebrow="Case Studies"
              title="Selected Work & Engineering Deployments"
              description="Real-world engineering initiatives demonstrating architecture rigor, regulatory compliance, and cross-functional technology delivery."
              className="mb-0"
            />
            <Button to="/work" variant="secondary" showArrow className="self-start md:self-auto shrink-0">
              View All Case Studies
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {M3_HIVE_ADDITIONAL_WORK.slice(0, 3).map((work) => (
              <Card key={work.id} className="p-6 sm:p-7 bg-white border-line shadow-soft flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-accent">{work.category}</span>
                    <span className="text-xs text-ink-subtle">{work.group}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-ink">
                    {work.title}
                  </h3>
                  <p className="text-xs text-ink-body leading-relaxed">
                    {work.challenge}
                  </p>
                  <div className="pt-2">
                    <div className="text-[11px] font-semibold text-ink uppercase tracking-wider mb-1">Delivered Solution:</div>
                    <p className="text-xs text-ink-muted leading-relaxed">{work.valueProposition}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-line mt-6 flex items-center justify-between text-xs">
                  <span className="font-medium text-ink-muted">Status:</span>
                  <span className="text-accent font-semibold">{work.status}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HISTORICAL CORPORATE FOUNDATION (360 TECHNOLOGIES) */}
      <section className="py-20 sm:py-24 border-b border-line bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-canvas-subtle border border-line rounded-card p-8 sm:p-12 shadow-soft">
            <div className="max-w-3xl space-y-4 mb-10">
              <div className="eyebrow text-ink-muted">Corporate Affiliation & Heritage</div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
                360 Technologies
              </h2>
              <p className="text-base text-ink-body leading-relaxed">
                As Co-Founder, Director and Shareholder, Atif contributed to establishing 360 Technologies as an enterprise digital systems partner serving multinational brands, financial institutions, and public-sector bodies.
              </p>
              <div className="p-4 rounded-lg bg-white border border-line text-xs text-ink-muted leading-relaxed">
                <span className="font-semibold text-ink">Attribution Notice: </span>
                {TECHNOLOGIES_360.legalNotice}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {TECHNOLOGIES_360.practiceAreas.slice(0, 6).map((practice, idx) => (
                <div key={idx} className="p-5 rounded-lg bg-white border border-line shadow-soft">
                  <div className="font-display font-semibold text-sm text-ink mb-1">{practice.name}</div>
                  <div className="text-xs text-ink-muted">{practice.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-line">
              <div className="text-xs text-ink-muted">
                Documented delivery portfolio spanning telecommunications, healthcare, FinTech, and government services.
              </div>
              <Button to="/360-technologies" variant="secondary" showArrow>
                View 360 Technologies Archive
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COLLABORATION PATHWAYS */}
      <section className="py-20 sm:py-24 border-b border-line bg-canvas-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Advisory & Leadership"
            title="Executive Engagement Pathways"
            description="Structuring strategic relationships with enterprise leaders, venture builders, and product organizations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {COLLABORATION_PATHWAYS.slice(0, 6).map((pathway) => (
              <Card key={pathway.id} className="p-6 sm:p-7 bg-white border-line shadow-soft flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-ink mb-2">
                    {pathway.name}
                  </h3>
                  <p className="text-xs text-ink-body leading-relaxed mb-4">
                    {pathway.audience}
                  </p>
                  
                  <div className="p-3 rounded bg-canvas-subtle border border-line text-xs space-y-1 mb-4">
                    <div className="font-medium text-ink">Challenge: {pathway.likelyChallenge}</div>
                    <div className="text-ink-muted">Focus: {pathway.whatWeCommunicate}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-line">
                  <Button 
                    to={`/contact?intent=${encodeURIComponent(pathway.name)}`} 
                    variant="ghost" 
                    size="sm" 
                    showArrow
                    className="p-0 text-accent font-semibold hover:text-accent-hover justify-start"
                  >
                    {pathway.ctaText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA BAND */}
      <section className="py-20 bg-canvas">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="eyebrow text-accent">Direct Executive Channel</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            {CLOSING_CTA.headline}
          </h2>
          <p className="text-base sm:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            {CLOSING_CTA.body}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Discuss an Engagement
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
