import React from 'react';
import { PRODUCTS } from '../../content/portfolio';
import { AttributionBadge } from '../../components/ui/AttributionBadge';
import { Button } from '../../components/ui/Button';
import { LeadHiveWorkflowDiagram } from '../../components/diagrams/LeadHiveWorkflowDiagram';
import { ScrollReveal } from '../../components/motion/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

export const LeadHiveAI: React.FC = () => {
  const product = PRODUCTS.find((p) => p.id === 'leadhive-ai')!;

  return (
    <div className="py-12 sm:py-20 bg-canvas text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Hero */}
        <ScrollReveal>
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <AttributionBadge type={product.attribution} />
              <span className="text-xs font-bold text-indigo-700 bg-indigo-100/80 px-3 py-1 rounded-full border border-indigo-200 uppercase tracking-wider">
                Priority 02 · Conversational AI & Sales Enablement
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              {product.name}
            </h1>

            <p className="text-lg sm:text-xl text-indigo-700 font-semibold tracking-tight">
              &quot;{product.positioningLine}&quot;
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {product.overview}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button to="/contact?interest=leadhive-workflow" variant="primary" size="lg" showArrow>
                Design a Lead Qualification Workflow
              </Button>
              <Button to="/contact?interest=leadhive-ai" variant="secondary" size="lg">
                Explore LeadHive AI
              </Button>
              <Button to="/expertise" variant="outline" size="lg">
                M3 Hive Capabilities
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Workflow Diagram */}
        <div className="my-16">
          <ScrollReveal delay={0.1}>
            <LeadHiveWorkflowDiagram />
          </ScrollReveal>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
          {/* Challenge Box */}
          <ScrollReveal delay={0.15}>
            <div className="bg-white border border-line rounded-card p-8 sm:p-10 h-full space-y-4 shadow-soft">
              <div className="eyebrow text-amber-700">
                The Inbound Bottleneck
              </div>
              <h3 className="font-display font-bold text-2xl text-ink">
                Delayed Responses & Inconsistent Qualification
              </h3>
              <p className="text-sm sm:text-base text-ink-body leading-relaxed">
                {product.challenge}
              </p>
            </div>
          </ScrollReveal>

          {/* Value Proposition Box */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white border border-line rounded-card p-8 sm:p-10 h-full space-y-4 shadow-soft">
              <div className="eyebrow text-accent">
                Architectural Value Proposition
              </div>
              <h3 className="font-display font-bold text-2xl text-ink">
                Structured Qualification to Organized Hand-Off
              </h3>
              <ul className="space-y-3 pt-2">
                {product.valueProposition.map((vp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-ink-body">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{vp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Audiences & Collaboration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {/* Who May Benefit */}
          <ScrollReveal delay={0.1}>
            <div className="bg-canvas-subtle border border-line rounded-card p-8 space-y-4 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                Target Stakeholders
              </div>
              <h4 className="font-display font-bold text-lg text-ink">Intended Beneficiaries</h4>
              <ul className="space-y-2.5 pt-1">
                {product.intendedUsers.map((user, idx) => (
                  <li key={idx} className="text-sm text-ink-body flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Collaboration Opportunities */}
          <ScrollReveal delay={0.15}>
            <div className="bg-canvas-subtle border border-line rounded-card p-8 space-y-4 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                Commercial Pathways
              </div>
              <h4 className="font-display font-bold text-lg text-ink">Partner Opportunities</h4>
              <ul className="space-y-2.5 pt-1">
                {product.collaborationOpportunities.map((collab, idx) => (
                  <li key={idx} className="text-sm text-ink-body flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{collab}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Status Guardrail / Notice */}
        <ScrollReveal>
          <div className="bg-white border border-line rounded-card p-6 sm:p-8 my-14 text-xs text-ink-muted space-y-2 shadow-soft">
            <div className="font-semibold text-ink uppercase tracking-wider">
              Integration & Scope Governance
            </div>
            <p className="leading-relaxed">
              {product.publicationGuardrail} LeadHive AI operates with business-defined qualification logic and human-directed CRM dispatch protocols.
            </p>
          </div>
        </ScrollReveal>

        {/* Concluding CTA Banner */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 border border-line rounded-card bg-canvas-subtle flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft">
            <div className="space-y-1">
              <h3 className="font-display font-bold text-xl text-ink">
                Deploy an Automated Qualification Engine
              </h3>
              <p className="text-sm text-ink-muted">
                Connect with M3 Hive to review qualification criteria, channels, and CRM integrations.
              </p>
            </div>
            <Button to="/contact?interest=leadhive" variant="primary" size="md" showArrow>
              Discuss LeadHive AI
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
