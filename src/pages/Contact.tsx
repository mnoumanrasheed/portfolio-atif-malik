import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Copy, 
  Check
} from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedIntent, setSelectedIntent] = useState<string>('custom-engineering');
  const [organisation, setOrganisation] = useState('');
  const [challengeText, setChallengeText] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const pathway = searchParams.get('pathway');
    const interest = searchParams.get('interest');

    if (pathway) {
      if (pathway === 'product-adoption') setSelectedIntent('product-pilot');
      else if (pathway === 'research-validation') setSelectedIntent('research');
      else if (pathway === 'distribution-market-access') setSelectedIntent('distribution');
      else if (pathway === 'technology-integration') setSelectedIntent('integration');
      else if (pathway === 'investment-strategic-capital') setSelectedIntent('investment');
      else if (pathway === 'custom-product-engineering') setSelectedIntent('custom-engineering');
    } else if (interest) {
      if (interest.includes('nourdoc')) setSelectedIntent('nourdoc-pilot');
      else if (interest.includes('leadhive')) setSelectedIntent('leadhive-workflow');
      else if (interest.includes('smart-animal')) setSelectedIntent('smart-animal-pilot');
      else setSelectedIntent(interest);
    }
  }, [searchParams]);

  const intentOptions = [
    { id: 'nourdoc-pilot', label: 'NourDoc — Clinical Pilot / Trial' },
    { id: 'nourdoc-integration', label: 'NourDoc — EHR/EMR Integration' },
    { id: 'leadhive-workflow', label: 'LeadHive AI — Lead Qualification Workflow' },
    { id: 'smart-animal-pilot', label: 'Smart Animal — Herd IoT Trial / Research' },
    { id: 'custom-engineering', label: 'M3 Hive — Custom Applied AI Engineering' },
    { id: 'research', label: 'Academic & Clinical Research Partnership' },
    { id: 'distribution', label: 'Regional Distribution & Channel Reselling' },
    { id: 'investment', label: 'Strategic Investment & Diligence Briefing' }
  ];

  const generatedBrief = `EXECUTIVE INQUIRY FOR ATIF I. MALIK:
--------------------------------------------------
INTENT: ${intentOptions.find(o => o.id === selectedIntent)?.label || selectedIntent}
ORGANISATION: ${organisation.trim() || '[Your Organisation Name]'}
OPERATIONAL PROBLEM:
${challengeText.trim() || '[Describe the operating reality and target outcome]'}`;

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(generatedBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <SectionHeader
            eyebrow="COMMUNICATIONS DESK"
            title="Start with the Problem to Solve"
            description="If you are exploring AI adoption, a product pilot, technology integration, research collaboration or custom engineering, share the challenge and the outcome you are working toward."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12 items-start">
          {/* Left: Verified Channels */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-10 space-y-6">
                <div className="border-b border-neutral-800 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
                    [ VERIFIED DESPATCH CHANNELS ]
                  </span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight mt-1">
                    Direct Contact Routes
                  </h3>
                </div>

                <p className="text-xs text-neutral-400 font-editorial-body leading-relaxed">
                  In compliance with content governance rules, this portfolio provides verified external channels directly rather than storing correspondence on unmonitored servers.
                </p>

                {/* LinkedIn */}
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 border border-white bg-black hover:bg-neutral-900 transition-colors flex items-center justify-between group block"
                >
                  <div>
                    <span className="text-sm font-bold text-white uppercase tracking-wide group-hover:underline block">
                      Connect on LinkedIn
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      Executive Correspondence
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>

                {/* M3 Hive */}
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.m3hive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 border border-neutral-800 bg-black hover:border-neutral-500 transition-colors flex items-center justify-between group block"
                >
                  <div>
                    <span className="text-sm font-bold text-white uppercase tracking-wide group-hover:underline block">
                      M3 Hive Corporate Portal
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      Corporate Technology Inquiries
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white" />
                </a>

                {/* NourDoc */}
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.nourdoc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 border border-neutral-800 bg-black hover:border-neutral-500 transition-colors flex items-center justify-between group block"
                >
                  <div>
                    <span className="text-sm font-bold text-white uppercase tracking-wide group-hover:underline block">
                      NourDoc Platform Portal
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      Clinical AI Inquiries
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white" />
                </a>
              </div>
            </ScrollReveal>

            {/* Governance Disclosure */}
            <ScrollReveal delay={0.15}>
              <div className="p-6 border border-neutral-800 bg-black font-mono text-xs text-neutral-500 space-y-1">
                <div className="text-white uppercase font-bold">[ TRANSPARENCY NOTICE ]</div>
                <p className="font-sans leading-relaxed text-neutral-400">
                  No unverified personal phone numbers or synthetic email endpoints are published. The dispatch utility on the right structures an executive inquiry for communication through verified channels.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Problem Statement Framing Utility */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <div className="border border-neutral-800 bg-mono-900 p-8 sm:p-12 space-y-8">
                <div className="border-b border-neutral-800 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
                    [ DISPATCH UTILITY ]
                  </span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight mt-1">
                    Frame Your Problem Statement
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-1">
                    Format your operational challenge prior to correspondence.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 uppercase tracking-widest mb-2">
                      1. Select Inquiry Focus
                    </label>
                    <select
                      value={selectedIntent}
                      onChange={(e) => setSelectedIntent(e.target.value)}
                      className="w-full bg-black border border-neutral-800 p-3.5 text-xs sm:text-sm text-white focus:border-white focus:outline-none rounded-none font-mono"
                    >
                      {intentOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 uppercase tracking-widest mb-2">
                      2. Organisation / Institution
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Health Clinic, Horizon Capital, AgriTech Group"
                      value={organisation}
                      onChange={(e) => setOrganisation(e.target.value)}
                      className="w-full bg-black border border-neutral-800 p-3.5 text-xs sm:text-sm text-white placeholder:text-neutral-700 focus:border-white focus:outline-none rounded-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 uppercase tracking-widest mb-2">
                      3. Operational Reality & Target Outcome
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Outline where work is repetitive, data is fragmented, or which pilot integration is required..."
                      value={challengeText}
                      onChange={(e) => setChallengeText(e.target.value)}
                      className="w-full bg-black border border-neutral-800 p-3.5 text-xs sm:text-sm text-white placeholder:text-neutral-700 focus:border-white focus:outline-none rounded-none font-mono"
                    />
                  </div>

                  {/* Generated Formatted Format */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2 font-mono text-xs">
                      <span className="text-neutral-400 uppercase">
                        STRUCTURED DISPATCH FORMAT:
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="text-white hover:underline uppercase inline-flex items-center gap-1.5"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>COPIED TO CLIPBOARD</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>COPY BRIEF</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="p-5 border border-neutral-800 bg-black text-xs font-mono text-neutral-300 whitespace-pre-wrap leading-relaxed select-all">
                      {generatedBrief}
                    </pre>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Button
                      href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                      variant="primary"
                      size="md"
                      isExternal
                    >
                      Send via LinkedIn
                    </Button>
                    <Button
                      href={EXECUTIVE_PROFILE.verifiedLinks.m3hive}
                      variant="outline"
                      size="md"
                      isExternal
                    >
                      Visit M3 Hive
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
