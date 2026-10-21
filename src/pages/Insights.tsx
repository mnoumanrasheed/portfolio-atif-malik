import React from 'react';
import { ArrowUpRight, BookOpen, Linkedin } from 'lucide-react';
import { EXTERNAL_SOURCES, EXECUTIVE_PROFILE } from '../content/portfolio';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';

export const Insights: React.FC = () => {
  return (
    <div className="bg-canvas text-ink">
      <HeroBackground
        imageSrc="/images/heroes/hero-insights.jpg"
        imageAlt="Corporate Documentation & Knowledge Architecture"
        glowColor="teal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal>
            <div className="max-w-3xl space-y-6 sm:space-y-7">
              {/* Executive Tag */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#286252]/30 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#286252] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-widest text-[#286252] uppercase">
                    Documentation &amp; Registry
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="text-xs font-medium text-slate-600">
                    Verified Sources
                  </span>
                </div>
              </div>

              <div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  Insights &amp; Documentation
                </h1>
              </div>

              <div className="text-base sm:text-lg text-black leading-relaxed font-medium max-w-2xl">
                <p>
                  Executive perspectives, publication updates, and verified public directories and official product platforms documenting applied AI and technology leadership.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button to="/contact" variant="primary" size="lg" showArrow>
                  Discuss a Project
                </Button>
                <Button to="/work" variant="secondary" size="lg">
                  Explore Selected Work
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      {/* Main Content */}
      <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Section 1: Executive Writing / Publications (Honest Empty State) */}
        <div>
          <ScrollReveal>
            <div className="border border-slate-200/90 rounded-3xl bg-white p-8 sm:p-12 shadow-soft space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-wash text-brand flex items-center justify-center border border-brand/20">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand">
                    Thought Leadership &amp; Analysis
                  </span>
                  <h2 className="font-display font-extrabold text-2xl text-slate-900">
                    Executive Writing &amp; Publications
                  </h2>
                </div>
              </div>

              <div className="max-w-2xl space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Formal long-form articles, whitepapers and detailed case analyses are currently in editorial preparation.
                </p>
                <p>
                  For ongoing commentary, perspectives on applied artificial intelligence, product architecture, and discussion of industry developments, connect with Atif I. Malik on LinkedIn.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                  variant="primary"
                  size="md"
                  isExternal
                  showArrow
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  View Perspectives on LinkedIn
                </Button>
                <Button to="/contact" variant="secondary" size="md">
                  Discuss a Speaking or Advisory Topic
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Section 2: Directory of Verified External Sources */}
        <div>
          <ScrollReveal>
            <div className="mb-8 space-y-2">
              <span className="eyebrow text-brand">Institutional Verification</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Verified External Source Register
              </h2>
              <p className="text-sm text-slate-600">
                Official web domains, corporate registries, and public directories referenced in this executive portfolio.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {EXTERNAL_SOURCES.map((source, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <Card className="p-6 sm:p-7 bg-white border border-slate-200/90 shadow-soft h-full flex flex-col justify-between hover:border-brand/40 transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-[11px] font-mono font-bold text-brand uppercase tracking-wider">
                        {source.category}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </div>

                    <h3 className="font-display font-bold text-base text-slate-900">
                      {source.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {source.note}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100">
                    <Button
                      href={source.url}
                      variant="secondary"
                      size="sm"
                      className="w-full"
                      isExternal
                    >
                      Open Verified Source
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
