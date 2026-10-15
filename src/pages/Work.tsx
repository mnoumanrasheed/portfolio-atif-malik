import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2
} from 'lucide-react';
import { M3_HIVE_ADDITIONAL_WORK } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';
import { AnimatedLineAccent } from '../components/ui/AnimatedLine';

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Exclude hidden/unverified items per Section 12 instructions
  const visibleProjects = M3_HIVE_ADDITIONAL_WORK.filter(item => !item.hidden);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'analytics', label: 'Market & Consumer Intelligence' },
    { id: 'research', label: 'Research & Bioinformatics' },
    { id: 'explorations', label: 'Exploratory Work' }
  ];

  const filteredWork = visibleProjects.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.group === activeFilter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-canvas text-ink selection:bg-brand-wash selection:text-brand-dark">
      <HeroBackground
        imageSrc="/images/heroes/hero-work.jpg"
        imageAlt="Computational Engineering & Data Systems Workspace"
        glowColor="teal"
        className="pt-28 sm:pt-36 pb-16 sm:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#51AAC0]/30 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#51AAC0]" />
                  <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">
                    M3 Hive Company Projects
                  </span>
                </span>
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider bg-white/85 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200/80">
                  Verified Case Studies
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Selected Work &amp; Impact
              </h1>

              <AnimatedLineAccent width="w-36 sm:w-48" height="h-[3px]" />

              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal pt-1 max-w-2xl">
                Verified M3 Hive company projects demonstrating technical breadth across market intelligence, scientific software, bioinformatics, and data integration.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button to="/contact" variant="primary" showArrow>
                  Discuss a Project
                </Button>
                <Button to="/ventures" variant="secondary">
                  Explore Priority Ventures
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Corporate Attribution Notice */}
        <ScrollReveal delay={0.05}>
          <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-soft mb-12 space-y-1.5">
            <span className="text-xs font-bold text-brand uppercase tracking-wider block">Company Attribution</span>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              All projects below are documented <strong>M3 Hive company projects</strong>. They reflect the company&apos;s product development, data engineering and technical delivery capabilities.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-slate-200">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mr-2">
              Filter by Domain:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-brand text-white shadow-xs font-bold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-brand/40 hover:bg-slate-50'
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
                <div className="border border-slate-200/90 bg-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-soft hover:shadow-card hover:border-brand/40 transition-all">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand bg-brand-wash px-2.5 py-1 rounded-md border border-brand/20">
                        {project.attribution}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                      {project.title}
                    </h3>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
                        Challenge
                      </span>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        Solution / Description
                      </span>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {project.valueProposition}
                      </p>
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {isExpanded && project.details && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-slate-100 space-y-2.5 text-sm">
                            <span className="font-bold text-slate-900 uppercase tracking-wider text-xs block mb-1">
                              Documented Solution Elements:
                            </span>
                            <ul className="space-y-2 text-slate-700 leading-relaxed font-normal">
                              {project.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2.5">
                                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-sm">
                    <span className="text-xs text-slate-500">
                      Attribution: <strong className="text-slate-800 font-semibold">{project.attribution}</strong>
                    </span>

                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="text-brand font-bold hover:text-brand-dark inline-flex items-center gap-1.5 transition-colors text-xs cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? (
                        <>Collapse Details <ChevronUp className="w-3.5 h-3.5" /></>
                      ) : (
                        <>View Details <ChevronDown className="w-3.5 h-3.5" /></>
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
          <div className="mt-16 p-8 sm:p-10 border border-slate-200/90 rounded-2xl bg-slate-50/70 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Explore a Custom Engineering Engagement
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Share the operational challenge and outcome you are working toward.
              </p>
            </div>
            <Button to="/contact" variant="primary" size="md" showArrow>
              Discuss a Project
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
