import React from 'react';
import { PRODUCTS } from '../../content/portfolio';
import { Button } from '../../components/ui/Button';
import { NourDocWorkflowDiagram } from '../../components/diagrams/NourDocWorkflowDiagram';
import { ScrollReveal } from '../../components/motion/ScrollReveal';
import { HeroBackground } from '../../components/ui/HeroBackground';
import { CheckCircle2 } from 'lucide-react';

export const NourDoc: React.FC = () => {
  const product = PRODUCTS.find((p) => p.id === 'nourdoc')!;

  return (
    <div className="bg-canvas text-ink selection:bg-brand-wash selection:text-brand-dark">
      <HeroBackground
        imageSrc="/images/heroes/hero-nourdoc.jpg"
        imageAlt="Modern Clinical Healthcare Facility"
        glowColor="cyan"
        className="pt-28 sm:pt-36 pb-16 sm:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="space-y-6 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-sky-700 bg-sky-100/90 px-3 py-1 rounded-full border border-sky-200 uppercase tracking-wider">
                  HealthTech AI
                </span>
                <span className="text-xs font-medium text-slate-500">
                  M3 Hive Product
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                {product.name}
              </h1>

              <p className="text-lg sm:text-xl text-sky-700 font-semibold tracking-tight">
                &quot;{product.positioningLine}&quot;
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {product.overview}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button to="/contact?interest=nourdoc-demo" variant="primary" size="lg" showArrow>
                  Book a Demo
                </Button>
                <Button to="/contact?interest=nourdoc-pilot" variant="secondary" size="lg">
                  Explore a Clinical Pilot
                </Button>
                <Button to="/contact?interest=nourdoc-integration" variant="outline" size="lg">
                  Discuss Integration
                </Button>
                {product.officialUrl && (
                  <Button href={product.officialUrl} variant="ghost" size="lg" isExternal>
                    Product Page
                  </Button>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Described Workflow Architecture Diagram */}
        <div className="my-16">
          <ScrollReveal delay={0.1}>
            <NourDocWorkflowDiagram />
          </ScrollReveal>
        </div>

        {/* Challenge vs Value Proposition Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
          {/* Challenge Box */}
          <ScrollReveal delay={0.15}>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 h-full space-y-4 shadow-soft">
              <div className="eyebrow text-amber-700">
                Operational Context
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900">
                Challenge
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {product.challenge}
              </p>
            </div>
          </ScrollReveal>

          {/* Value Proposition Box */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 h-full space-y-4 shadow-soft">
              <div className="eyebrow text-brand">
                Platform Architecture
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900">
                Value Proposition
              </h3>
              <ul className="space-y-3 pt-2">
                {product.valueProposition.map((vp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>{vp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Potential Users & Collaboration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {/* Potential Users */}
          <ScrollReveal delay={0.1}>
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-8 space-y-4 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Target Stakeholders
              </div>
              <h4 className="font-display font-bold text-xl text-slate-900">Potential Users</h4>
              <ul className="space-y-2.5 pt-1">
                {product.intendedUsers.map((user, idx) => (
                  <li key={idx} className="text-sm text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Collaboration Opportunities */}
          <ScrollReveal delay={0.15}>
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-8 space-y-4 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Partnership Scope
              </div>
              <h4 className="font-display font-bold text-xl text-slate-900">Collaboration Opportunities</h4>
              <ul className="space-y-2.5 pt-1">
                {product.collaborationOpportunities.map((collab, idx) => (
                  <li key={idx} className="text-sm text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span>{collab}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Concluding CTA Banner */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 border border-slate-200/90 rounded-2xl bg-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft">
            <div className="space-y-1">
              <h3 className="font-display font-bold text-2xl text-slate-900">
                Discuss NourDoc
              </h3>
              <p className="text-sm text-slate-600">
                Connect with M3 Hive to review workflows, EHR integration parameters, and pilot criteria.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button to="/contact?interest=nourdoc-demo" variant="primary" size="md" showArrow>
                Book a Demo
              </Button>
              <Button to="/contact?interest=nourdoc-pilot" variant="secondary" size="md">
                Explore a Clinical Pilot
              </Button>
              <Button to="/contact?interest=nourdoc-integration" variant="outline" size="md">
                Discuss Integration
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
