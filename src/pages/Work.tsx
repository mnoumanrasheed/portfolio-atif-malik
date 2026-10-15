import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2
} from 'lucide-react';
import { M3_HIVE_ADDITIONAL_WORK } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { AttributionBadge } from '../components/ui/AttributionBadge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects (7)' },
    { id: 'market', label: 'Market Intelligence' },
    { id: 'bio', label: 'Bioinformatics & Science' },
    { id: 'retail', label: 'Retail Analytics' },
    { id: 'commerce', label: 'Marketplaces & Commerce' },
    { id: 'art', label: 'Experimental R&D' }
  ];

  const filteredWork = M3_HIVE_ADDITIONAL_WORK.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'market') return item.id === 'intelligent-comparison';
    if (activeFilter === 'bio') return item.id === 'drug-target-profiler' || item.id === 'genomic-analytics';
    if (activeFilter === 'retail') return item.id === 'decoding-behavior';
    if (activeFilter === 'commerce') return item.id === 'mazdoori' || item.id === 'your-door';
    if (activeFilter === 'art') return item.id === 'regenerative-art';
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-canvas text-ink">
      <HeroBackground
        imageSrc="/images/heroes/hero-work.jpg"
        imageAlt="Computational Engineering & Data Systems Workspace"
        glowColor="teal"
        className="pt-28 sm:pt-36 pb-16 sm:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <AttributionBadge type="M3 Hive company project" />
                <span className="text-xs text-brand font-bold uppercase tracking-wider bg-brand-wash px-3 py-1 rounded-full border border-brand/20">
                  Documented Engineering Case Studies
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Selected Additional Work
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-1">
                Seven documented project initiatives demonstrating M3 Hive&apos;s technical breadth across market intelligence, computational biology, retail analytics, and digital platforms.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Corporate Attribution Notice */}
        <ScrollReveal delay={0.05}>
          <div className="p-5 rounded-card border border-line bg-canvas-subtle mb-10 text-xs text-ink-muted space-y-1">
            <span className="font-semibold text-ink uppercase tracking-wider">Attribution Notice</span>
            <p className="leading-relaxed">
              All case studies below are documented <em>M3 Hive company projects</em>. They reflect the company’s engineering capability and data engineering range rather than personally led individual assignments or commercial endorsement claims.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-line">
            <span className="text-xs uppercase tracking-wider text-ink-subtle font-medium mr-2">
              Domain:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                  activeFilter === cat.id
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-white text-ink-body border border-line hover:border-accent/40 hover:bg-canvas-subtle'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredWork.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            return (
              <ScrollReveal key={project.id} delay={idx * 0.05}>
                <div className="border border-line bg-white rounded-card p-7 sm:p-8 flex flex-col justify-between shadow-soft hover:shadow-card hover:border-accent/40 transition-all">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <AttributionBadge type={project.attribution} />
                      <span className="text-xs text-ink-subtle font-medium">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
                      {project.title}
                    </h3>

                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-accent block mb-1">
                        Operational Challenge
                      </span>
                      <p className="text-xs sm:text-sm text-ink-body leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted block mb-1">
                        Value Proposition
                      </span>
                      <p className="text-xs sm:text-sm text-ink-body leading-relaxed">
                        {project.valueProposition}
                      </p>
                    </div>

                    {/* Expandable Details with Smooth Animation */}
                    <AnimatePresence>
                      {isExpanded && project.details && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                            <span className="font-bold text-slate-900 uppercase tracking-wider block mb-1">
                              Documented Solution Elements:
                            </span>
                            <ul className="space-y-2 text-slate-600">
                              {project.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="pt-5 mt-5 border-t border-line flex flex-wrap items-center justify-between gap-4 text-xs">
                    <span className="text-slate-500">
                      Status: <strong className="text-slate-900 font-semibold">{project.status}</strong>
                    </span>

                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="text-brand font-bold hover:text-brand-hover inline-flex items-center gap-1 transition-colors"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? (
                        <>Collapse Elements <ChevronUp className="w-3.5 h-3.5" /></>
                      ) : (
                        <>View Solution Elements <ChevronDown className="w-3.5 h-3.5" /></>
                      )}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Banner */}
        <ScrollReveal>
          <div className="mt-16 p-8 sm:p-10 border border-line rounded-card bg-canvas-subtle flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
            <div>
              <h3 className="font-display font-bold text-xl text-ink">
                Have a Complex Enterprise or Data Engineering Requirement?
              </h3>
              <p className="text-sm text-ink-muted mt-1">
                Discuss problem scoping, feasibility analysis, or custom architecture with M3 Hive.
              </p>
            </div>
            <Button to="/contact" variant="primary" size="md" showArrow>
              Discuss an Engagement
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
