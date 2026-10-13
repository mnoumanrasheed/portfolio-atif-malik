import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Check
} from 'lucide-react';
import { M3_HIVE_ADDITIONAL_WORK } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { AttributionBadge } from '../components/ui/AttributionBadge';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';

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
    <div className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <AttributionBadge type="M3 Hive company project" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              CORPORATE CASE STUDY ARCHIVE
            </span>
          </div>

          <SectionHeader
            eyebrow="PORTFOLIO ARCHIVE"
            title="Selected Additional Work"
            description="Seven documented project initiatives demonstrating M3 Hive's technical breadth across market intelligence, computational biology, retail analytics, and digital platforms."
          />
        </ScrollReveal>

        {/* Corporate Attribution Notice */}
        <ScrollReveal delay={0.05}>
          <div className="p-6 border border-neutral-800 bg-mono-900 mb-12 font-mono text-xs text-neutral-400 space-y-1">
            <span className="text-white uppercase font-bold">[ CORPORATE ATTRIBUTION SPECIFICATION ]</span>
            <p className="font-sans leading-relaxed text-neutral-300">
              All case studies below are documented <em>M3 Hive company projects</em>. They reflect the company’s engineering capability and data engineering range rather than personally led individual assignments or commercial endorsement claims.
            </p>
          </div>
        </ScrollReveal>

        {/* Working Category Filter Chips */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-neutral-800">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mr-3">
              DOMAIN:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors border ${
                  activeFilter === cat.id
                    ? 'bg-white text-black border-white font-bold'
                    : 'bg-black text-neutral-400 border-neutral-800 hover:border-neutral-500 hover:text-white'
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
                <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-500 transition-colors">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <AttributionBadge type={project.attribution} />
                      <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest border border-neutral-800 px-2.5 py-1">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-editorial-heading text-2xl sm:text-3xl text-white uppercase tracking-tight">
                      {project.title}
                    </h3>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                        [ CHALLENGE ]
                      </span>
                      <p className="text-sm text-neutral-300 font-editorial-body leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                        [ VALUE PROPOSITION ]
                      </span>
                      <p className="text-sm text-neutral-200 font-editorial-body leading-relaxed">
                        {project.valueProposition}
                      </p>
                    </div>

                    {/* Expandable Details */}
                    {isExpanded && project.details && (
                      <div className="pt-4 border-t border-neutral-800 space-y-2 font-mono text-xs">
                        <span className="text-neutral-500 uppercase tracking-widest block mb-2">
                          [ DOCUMENTED SOLUTION ELEMENTS ]
                        </span>
                        <ul className="space-y-1.5 text-neutral-300">
                          {project.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-white">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                    <span className="text-[11px] text-neutral-500 uppercase">
                      STATUS: {project.status}
                    </span>

                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="text-white hover:underline uppercase tracking-wider inline-flex items-center gap-1"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? (
                        <>COLLAPSE <ChevronUp className="w-3.5 h-3.5" /></>
                      ) : (
                        <>EXPAND DETAILS <ChevronDown className="w-3.5 h-3.5" /></>
                      )}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Footer */}
        <ScrollReveal>
          <div className="mt-20 p-8 sm:p-12 border border-neutral-800 bg-black flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                Have a Complex Enterprise or Data Engineering Requirement?
              </h3>
              <p className="text-xs text-neutral-400 font-mono mt-1">
                Discuss problem scoping, feasibility analysis, or custom architecture with M3 Hive.
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
