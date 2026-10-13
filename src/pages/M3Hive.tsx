import React from 'react';
import { 
  M3_HIVE_CAPABILITIES, 
  M3_HIVE_ENGAGEMENT_MODELS, 
  PRODUCTS, 
  EXECUTIVE_PROFILE 
} from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { AttributionBadge } from '../components/ui/AttributionBadge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const M3Hive: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-canvas text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <AttributionBadge type="M3 Hive product" />
            <span className="text-xs text-accent font-medium">
              Primary Executive Operating Vehicle
            </span>
          </div>

          <SectionHeader
            eyebrow="Company Overview"
            title="M3 Hive — Execution & Engineering Capability"
            description="M3 Hive is a technology development company focused on translating complex business needs into digital products, intelligent workflows, and applied AI solutions."
          />
        </ScrollReveal>

        {/* Corporate Overview Card */}
        <ScrollReveal delay={0.1}>
          <div className="bg-white border border-line rounded-card p-8 sm:p-12 mb-16 shadow-soft">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-line pb-6 mb-6 gap-4">
              <div>
                <span className="eyebrow text-accent">Delivery Practice & Product Engineering</span>
                <h3 className="font-display font-bold text-xl text-ink mt-1">
                  Technology Solutions Grounded in Operational Reality
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <Button href={EXECUTIVE_PROFILE.verifiedLinks.m3hive} variant="secondary" size="sm" isExternal>
                  Visit m3hive.com
                </Button>
                <Button href={EXECUTIVE_PROFILE.verifiedLinks.nourdoc} variant="primary" size="sm" isExternal>
                  NourDoc Official Site
                </Button>
              </div>
            </div>

            <p className="text-base sm:text-lg text-ink-body leading-relaxed max-w-4xl">
              M3 Hive is a technology development company focused on translating business needs into digital products, intelligent workflows and applied AI solutions. Its company portfolio spans product engineering, customer experience, intelligent automation, data engineering and analytics, cloud platforms, connected systems and digital design. M3 Hive works across product-led initiatives and custom engagements, with the aim of aligning technical choices to the problem, users and operating environment.
            </p>
          </div>
        </ScrollReveal>

        {/* Six Capability Areas */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Core Competencies"
              title="Six Capability Practices"
              description="Aligned to operational requirements, user workflows, and modern cloud/edge architectures."
            />
          </ScrollReveal>

          <div className="bg-white border border-line rounded-card divide-y divide-line shadow-soft overflow-hidden">
            {M3_HIVE_CAPABILITIES.map((cap, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.03}>
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-8 hover:bg-canvas-subtle/50 transition-colors">
                  <div className="flex items-start gap-4 max-w-md">
                    <span className="w-8 h-8 rounded-full bg-accent-wash text-accent font-bold text-xs flex items-center justify-center border border-accent/20 shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-ink">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed max-w-2xl md:pl-0">
                    {cap.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Priority Products Showcase */}
        <div className="mb-20">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Proprietary Platforms"
              title="Three Priority Product Initiatives"
              description="Proprietary platforms incubated and driven by M3 Hive under Atif's strategic direction."
            />
          </ScrollReveal>

          <div className="space-y-8">
            {PRODUCTS.map((product) => (
              <ScrollReveal key={product.id}>
                <div className="bg-white border border-line rounded-card p-8 shadow-soft">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-line mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <AttributionBadge type={product.attribution} />
                        <span className="text-xs text-ink-subtle">{product.category}</span>
                      </div>
                      <h3 className="font-display font-bold text-2xl text-ink">
                        {product.name}
                      </h3>
                      <p className="text-sm text-accent font-medium mt-0.5">
                        {product.tagline}
                      </p>
                    </div>
                    <Button to={`/products/${product.id}`} variant="secondary" size="md" showArrow>
                      Explore {product.name}
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-ink uppercase tracking-wider">Operational Challenge</div>
                      <p className="text-xs text-ink-muted leading-relaxed">{product.challenge}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-ink uppercase tracking-wider">Solution Approach</div>
                      <p className="text-xs text-ink-muted leading-relaxed">{product.valueProposition[0] || product.overview}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-ink uppercase tracking-wider">Current Status</div>
                      <p className="text-xs text-ink-muted leading-relaxed">{product.statusNote}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <div>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Partnership Structure"
              title="How M3 Hive Engages"
              description="Flexible collaboration models designed for corporate enterprise, venture builders, and product organizations."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {M3_HIVE_ENGAGEMENT_MODELS.map((model, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <Card className="p-6 bg-white border-line shadow-soft h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-7 h-7 rounded bg-accent-wash text-accent font-bold text-xs flex items-center justify-center border border-accent/20">
                      0{idx + 1}
                    </div>
                    <h3 className="font-display font-bold text-base text-ink">
                      {model.title}
                    </h3>
                    <p className="text-xs text-ink-body leading-relaxed">
                      {model.detail}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-line text-xs font-medium text-accent">
                    {model.phase}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Start an M3 Hive Engagement Discussion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
