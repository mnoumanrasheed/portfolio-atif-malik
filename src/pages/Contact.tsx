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
    const intent = searchParams.get('intent');

    if (intent) {
      const lower = intent.toLowerCase();
      if (lower.includes('pilot') || lower.includes('adoption')) setSelectedIntent('nourdoc-pilot');
      else if (lower.includes('research')) setSelectedIntent('research');
      else if (lower.includes('distribution')) setSelectedIntent('distribution');
      else if (lower.includes('integration')) setSelectedIntent('integration');
      else if (lower.includes('investment') || lower.includes('capital')) setSelectedIntent('investment');
      else setSelectedIntent('custom-engineering');
    } else if (pathway) {
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

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(generatedBrief);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-canvas text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <SectionHeader
            eyebrow="Communications & Inquiries"
            title="Start with the Problem to Solve"
            description="If you are exploring AI adoption, a product pilot, technology integration, research collaboration or custom engineering, share the challenge and the outcome you are working toward."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-8 items-start">
          {/* Left: Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-line rounded-card p-6 sm:p-8 space-y-6 shadow-soft">
                <div className="border-b border-line pb-4">
                  <span className="eyebrow text-accent block">
                    Verified Channels
                  </span>
                  <h3 className="font-display font-bold text-xl text-ink mt-1">
                    Direct Contact Routes
                  </h3>
                </div>

                <p className="text-xs text-ink-muted leading-relaxed">
                  In compliance with content governance standards, this portfolio routes inquiries directly through verified executive platforms rather than storing submissions on third-party servers.
                </p>

                {/* LinkedIn */}
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-accent bg-accent-wash/30 hover:bg-accent-wash transition-colors flex items-center justify-between group block"
                >
                  <div>
                    <span className="text-sm font-semibold text-accent group-hover:text-accent-hover block">
                      Connect on LinkedIn
                    </span>
                    <span className="text-xs text-ink-muted">
                      Direct Executive Correspondence
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </a>

                {/* M3 Hive */}
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.m3hive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-line bg-canvas-subtle hover:bg-white hover:border-accent/40 transition-colors flex items-center justify-between group block"
                >
                  <div>
                    <span className="text-sm font-semibold text-ink group-hover:text-accent block">
                      M3 Hive Corporate Portal
                    </span>
                    <span className="text-xs text-ink-muted">
                      Corporate Technology Inquiries
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-subtle group-hover:text-accent" />
                </a>

                {/* NourDoc */}
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.nourdoc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-line bg-canvas-subtle hover:bg-white hover:border-accent/40 transition-colors flex items-center justify-between group block"
                >
                  <div>
                    <span className="text-sm font-semibold text-ink group-hover:text-accent block">
                      NourDoc Platform Portal
                    </span>
                    <span className="text-xs text-ink-muted">
                      Clinical AI Demonstrations
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-subtle group-hover:text-accent" />
                </a>
              </div>
            </ScrollReveal>

            {/* Governance Disclosure */}
            <ScrollReveal delay={0.15}>
              <div className="p-5 rounded-card border border-line bg-canvas-subtle text-xs text-ink-muted space-y-1">
                <div className="font-semibold text-ink uppercase tracking-wider">Communications Notice</div>
                <p className="leading-relaxed">
                  No unverified personal phone numbers or synthetic inbox forms are operated. The brief-builder utility formats your requirements for clean transmission via LinkedIn or official corporate channels.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Problem Statement Framing Utility */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-line rounded-card p-6 sm:p-10 space-y-6 shadow-soft">
                <div className="border-b border-line pb-4">
                  <span className="eyebrow text-accent block">
                    Inquiry Brief Builder
                  </span>
                  <h3 className="font-display font-bold text-xl text-ink mt-1">
                    Frame Your Operational Challenge
                  </h3>
                  <p className="text-xs text-ink-muted mt-1">
                    Structure your problem statement for focused executive review prior to correspondence.
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      1. Select Inquiry Focus
                    </label>
                    <select
                      value={selectedIntent}
                      onChange={(e) => setSelectedIntent(e.target.value)}
                      className="w-full bg-white border border-line rounded-lg p-3 text-sm text-ink focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                    >
                      {intentOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      2. Organisation / Institution
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Health Clinic, Horizon Capital, AgriTech Group"
                      value={organisation}
                      onChange={(e) => setOrganisation(e.target.value)}
                      className="w-full bg-white border border-line rounded-lg p-3 text-sm text-ink placeholder:text-ink-subtle focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      3. Operational Reality & Target Outcome
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Outline where workflows are bottlenecked, data is fragmented, or what pilot integrations are required..."
                      value={challengeText}
                      onChange={(e) => setChallengeText(e.target.value)}
                      className="w-full bg-white border border-line rounded-lg p-3 text-sm text-ink placeholder:text-ink-subtle focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                    />
                  </div>

                  {/* Generated Formatted Format */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2 text-xs">
                      <span className="font-semibold text-ink uppercase tracking-wider">
                        Structured Inquiry Brief:
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="text-accent hover:text-accent-hover font-semibold inline-flex items-center gap-1.5 transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600 font-semibold">Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Brief</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="p-4 rounded-lg border border-line bg-canvas-subtle text-xs font-mono text-ink whitespace-pre-wrap leading-relaxed select-all">
                      {generatedBrief}
                    </pre>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Button
                      href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                      variant="primary"
                      size="md"
                      isExternal
                      showArrow
                    >
                      Transmit via LinkedIn
                    </Button>
                    <Button
                      href={EXECUTIVE_PROFILE.verifiedLinks.m3hive}
                      variant="secondary"
                      size="md"
                      isExternal
                    >
                      Visit M3 Hive Portal
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
