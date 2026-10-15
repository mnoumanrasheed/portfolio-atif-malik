import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  Send, 
  AlertCircle,
  Mail,
  ShieldCheck,
  Building2,
  User,
  MessageSquare
} from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../content/portfolio';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();

  // 7 Form Fields
  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [selectedEnquiryType, setSelectedEnquiryType] = useState<string>('custom-engineering');
  const [challengeDescription, setChallengeDescription] = useState('');
  const [preferredNextStep, setPreferredNextStep] = useState<string>('Discovery call');
  const [consentAgreed, setConsentAgreed] = useState(false);

  // UI / Feedback states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const enquiryOptions = [
    { id: 'nourdoc-demo', label: 'NourDoc : Book a Demo / Workflow Walkthrough' },
    { id: 'nourdoc-pilot', label: 'NourDoc : Clinical Pilot / Trial' },
    { id: 'nourdoc-integration', label: 'NourDoc : EHR/EMR Integration' },
    { id: 'leadhive-workflow', label: 'LeadHive AI : Design Qualification Workflow' },
    { id: 'leadhive-pilot', label: 'LeadHive AI : Enterprise Pilot' },
    { id: 'smart-animal-pilot', label: 'Smart Animal : Livestock IoT Pilot' },
    { id: 'smart-animal-research', label: 'Smart Animal : AgriTech & Veterinary Research' },
    { id: 'custom-engineering', label: 'M3 Hive : Custom Applied AI & Engineering' },
    { id: 'research-validation', label: 'Research & Academic Validation' },
    { id: 'distribution-market-access', label: 'Distribution & Channel Reselling' },
    { id: 'technology-integration', label: 'Technology & Enterprise Platform Integration' },
    { id: 'investment-strategic-capital', label: 'Investment & Strategic Capital Diligence' }
  ];

  const nextStepOptions = [
    'Discovery call',
    'Product briefing',
    'Technical discussion',
    'Scoping engagement'
  ];

  useEffect(() => {
    const pathway = searchParams.get('pathway');
    const interest = searchParams.get('interest');
    const intent = searchParams.get('intent');

    if (intent) {
      const lower = intent.toLowerCase();
      if (lower.includes('demo')) setSelectedEnquiryType('nourdoc-demo');
      else if (lower.includes('pilot') || lower.includes('adoption')) setSelectedEnquiryType('nourdoc-pilot');
      else if (lower.includes('research')) setSelectedEnquiryType('research-validation');
      else if (lower.includes('distribution')) setSelectedEnquiryType('distribution-market-access');
      else if (lower.includes('integration')) setSelectedEnquiryType('technology-integration');
      else if (lower.includes('investment') || lower.includes('capital')) setSelectedEnquiryType('investment-strategic-capital');
      else setSelectedEnquiryType('custom-engineering');
    } else if (pathway) {
      if (pathway === 'product-adoption') setSelectedEnquiryType('nourdoc-pilot');
      else if (pathway === 'research-validation') setSelectedEnquiryType('research-validation');
      else if (pathway === 'distribution-market-access') setSelectedEnquiryType('distribution-market-access');
      else if (pathway === 'technology-integration') setSelectedEnquiryType('technology-integration');
      else if (pathway === 'investment-strategic-capital') setSelectedEnquiryType('investment-strategic-capital');
      else if (pathway === 'custom-product-engineering') setSelectedEnquiryType('custom-engineering');
    } else if (interest) {
      if (interest === 'nourdoc-demo') setSelectedEnquiryType('nourdoc-demo');
      else if (interest.includes('nourdoc-integration')) setSelectedEnquiryType('nourdoc-integration');
      else if (interest.includes('nourdoc')) setSelectedEnquiryType('nourdoc-pilot');
      else if (interest.includes('leadhive-workflow') || interest.includes('leadhive')) setSelectedEnquiryType('leadhive-workflow');
      else if (interest.includes('smart-animal-research')) setSelectedEnquiryType('smart-animal-research');
      else if (interest.includes('smart-animal')) setSelectedEnquiryType('smart-animal-pilot');
      else setSelectedEnquiryType(interest);
    }
  }, [searchParams]);

  const selectedEnquiryLabel = enquiryOptions.find(o => o.id === selectedEnquiryType)?.label || selectedEnquiryType;

  const generatedBrief = `EXECUTIVE ENQUIRY FOR ATIF I. MALIK & M3 HIVE:
--------------------------------------------------
CONTACT NAME: ${name.trim() || '[Your Name]'}
ORGANISATION: ${organisation.trim() || '[Your Organisation]'}
WORK EMAIL: ${email.trim() || '[Your Work Email]'}
ENQUIRY TYPE: ${selectedEnquiryLabel}
PREFERRED NEXT STEP: ${preferredNextStep}

BRIEF DESCRIPTION OF THE CHALLENGE:
${challengeDescription.trim() || '[Describe the operating context, constraints, and target outcome]'}`;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Full name is required.';
    if (!organisation.trim()) errs.organisation = 'Organisation or institution is required.';
    if (!email.trim()) {
      errs.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please provide a valid work email address.';
    }
    if (!challengeDescription.trim()) {
      errs.challengeDescription = 'Please provide a brief description of the challenge.';
    } else if (challengeDescription.trim().length < 15) {
      errs.challengeDescription = 'Please share at least 15 characters describing the operational challenge.';
    }
    if (!consentAgreed) {
      errs.consent = 'You must confirm consent to be contacted regarding this enquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build mailto link for direct transmission
    const subject = encodeURIComponent(`Executive Enquiry: ${selectedEnquiryLabel} | ${organisation}`);
    const body = encodeURIComponent(generatedBrief);
    const mailtoUrl = `mailto:contact@m3hive.com?subject=${subject}&body=${body}`;

    // Attempt to open email client
    window.location.href = mailtoUrl;

    // Show submitted feedback state
    setSubmitted(true);
  };

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
    <div className="bg-canvas text-ink">
      <HeroBackground
        imageSrc="/images/heroes/hero-contact.jpg"
        imageAlt="Executive Consultation Suite"
        glowColor="teal"
        className="pt-28 sm:pt-36 pb-16 sm:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="eyebrow text-brand">Communications &amp; Inquiries</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Start with the Problem to Solve
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-1">
                If you are exploring AI adoption, a product pilot, technology integration, research collaboration or custom engineering, share the challenge and the outcome you are working toward.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Verified Channels & Fallback Guidance */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-line rounded-card p-6 sm:p-8 space-y-6 shadow-soft">
                <div className="border-b border-line pb-4">
                  <span className="eyebrow text-accent block">
                    Verified Direct Channels
                  </span>
                  <h3 className="font-display font-bold text-xl text-ink mt-1">
                    Direct Contact Routes
                  </h3>
                </div>

                <p className="text-xs text-ink-muted leading-relaxed">
                  In compliance with executive governance standards, this portfolio routes inquiries directly through verified executive platforms and institutional email destinations.
                </p>

                {/* Direct Email Fallback */}
                <div className="p-4 rounded-xl border border-line bg-canvas-subtle space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-ink uppercase tracking-wider">
                    <Mail className="w-4 h-4 text-accent" />
                    <span>Direct Institutional Email</span>
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    If you prefer not to use the form, you can reach out directly via LinkedIn or email:
                  </p>
                  <a
                    href="mailto:contact@m3hive.com"
                    className="inline-block text-sm font-mono font-bold text-accent hover:underline"
                  >
                    contact@m3hive.com
                  </a>
                </div>

                {/* LinkedIn */}
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-accent bg-accent-wash/30 hover:bg-accent-wash transition-colors flex items-center justify-between group block"
                >
                  <div>
                    <span className="text-sm font-semibold text-accent group-hover:text-accent-hover block">
                      Connect on LinkedIn
                    </span>
                    <span className="text-xs text-ink-muted">
                      Direct Executive Correspondence · Atif I. Malik
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </a>

                {/* M3 Hive Corporate Portal */}
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.m3hive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-line bg-canvas-subtle hover:bg-white hover:border-accent/40 transition-colors flex items-center justify-between group block"
                >
                  <div>
                    <span className="text-sm font-semibold text-ink group-hover:text-accent block">
                      M3 Hive Corporate Portal
                    </span>
                    <span className="text-xs text-ink-muted">
                      Corporate Technology & AI Services
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-subtle group-hover:text-accent" />
                </a>

                {/* NourDoc Platform */}
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.nourdoc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-line bg-canvas-subtle hover:bg-white hover:border-accent/40 transition-colors flex items-center justify-between group block"
                >
                  <div>
                    <span className="text-sm font-semibold text-ink group-hover:text-accent block">
                      NourDoc Platform Portal
                    </span>
                    <span className="text-xs text-ink-muted">
                      Clinical AI Documentation Demonstrations
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-subtle group-hover:text-accent" />
                </a>
              </div>
            </ScrollReveal>

            {/* Governance Disclosure & Privacy Notice */}
            <ScrollReveal delay={0.15}>
              <div className="p-6 rounded-card border border-line bg-canvas-subtle text-xs text-ink-muted space-y-2.5">
                <div className="flex items-center gap-2 font-semibold text-ink uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Confidentiality & Data Security</span>
                </div>
                <p className="leading-relaxed">
                  Please avoid submitting sensitive patient health records, customer personal data, or confidential proprietary IP through this general contact form.
                </p>
                <p className="leading-relaxed text-[11px] text-ink-subtle">
                  All submitted enquiries are reviewed directly by Atif I. Malik and the M3 Hive leadership team.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 7-Field Authoritative Enquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-line rounded-card p-6 sm:p-10 shadow-soft">
                {submitted ? (
                  <div className="py-8 space-y-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-ink">
                        Email Draft Prepared &amp; Opened
                      </h3>
                      <p className="text-sm text-ink-muted max-w-lg mx-auto">
                        Your structured brief has been prepared for direct dispatch to{' '}
                        <strong className="text-ink">contact@m3hive.com</strong>. Please verify the draft in your email application and click <strong className="text-ink">Send</strong> to complete delivery.
                      </p>
                    </div>

                    {/* Pre-formatted brief view */}
                    <div className="text-left bg-canvas-subtle border border-line rounded-xl p-5 text-xs font-mono text-ink whitespace-pre-wrap leading-relaxed max-w-xl mx-auto">
                      {generatedBrief}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                      <Button
                        type="button"
                        onClick={handleCopyBrief}
                        variant="primary"
                        size="md"
                      >
                        {copied ? (
                          <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-white" />
                            Copied to Clipboard!
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Copy className="w-4 h-4" />
                            Copy Enquiry Brief
                          </span>
                        )}
                      </Button>

                      <Button
                        href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                        variant="secondary"
                        size="md"
                        isExternal
                        showArrow
                      >
                        Open LinkedIn Profile
                      </Button>

                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-ink-muted hover:text-ink underline block w-full text-center mt-2"
                      >
                        Edit Enquiry Details
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="border-b border-line pb-4">
                      <span className="eyebrow text-accent block">
                        Executive Enquiry Form
                      </span>
                      <h3 className="font-display font-bold text-xl text-ink mt-1">
                        Frame Your Operational Challenge
                      </h3>
                      <p className="text-xs text-ink-muted mt-1">
                        Structure your operational context for focused executive review prior to correspondence.
                      </p>
                    </div>

                    {/* Field 1: Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 flex items-center justify-between">
                        <span>1. Full Name <span className="text-accent">*</span></span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Sarah Jenkins, Director of Operations"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                          }}
                          className={`w-full bg-white border ${
                            errors.name ? 'border-red-400 focus:border-red-500' : 'border-line focus:border-accent'
                          } rounded-lg p-3 text-sm text-ink placeholder:text-ink-subtle focus:ring-1 focus:ring-accent focus:outline-none transition-colors`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 2: Organisation */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                        2. Organisation / Institution <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Health Group, Horizon Capital, AgriTech Cooperative"
                        value={organisation}
                        onChange={(e) => {
                          setOrganisation(e.target.value);
                          if (errors.organisation) setErrors(prev => ({ ...prev, organisation: '' }));
                        }}
                        className={`w-full bg-white border ${
                          errors.organisation ? 'border-red-400 focus:border-red-500' : 'border-line focus:border-accent'
                        } rounded-lg p-3 text-sm text-ink placeholder:text-ink-subtle focus:ring-1 focus:ring-accent focus:outline-none transition-colors`}
                      />
                      {errors.organisation && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.organisation}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 3: Work Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                        3. Work Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. s.jenkins@institution.org"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                        }}
                        className={`w-full bg-white border ${
                          errors.email ? 'border-red-400 focus:border-red-500' : 'border-line focus:border-accent'
                        } rounded-lg p-3 text-sm text-ink placeholder:text-ink-subtle focus:ring-1 focus:ring-accent focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 4: Enquiry Type */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                        4. Enquiry Type <span className="text-accent">*</span>
                      </label>
                      <select
                        value={selectedEnquiryType}
                        onChange={(e) => setSelectedEnquiryType(e.target.value)}
                        className="w-full bg-white border border-line rounded-lg p-3 text-sm text-ink focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                      >
                        {enquiryOptions.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Field 5: Brief description of the challenge */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                        5. Brief Description of the Challenge <span className="text-accent">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Outline where workflows are bottlenecked, data is fragmented, or what integration/pilot requirements exist..."
                        value={challengeDescription}
                        onChange={(e) => {
                          setChallengeDescription(e.target.value);
                          if (errors.challengeDescription) setErrors(prev => ({ ...prev, challengeDescription: '' }));
                        }}
                        className={`w-full bg-white border ${
                          errors.challengeDescription ? 'border-red-400 focus:border-red-500' : 'border-line focus:border-accent'
                        } rounded-lg p-3 text-sm text-ink placeholder:text-ink-subtle focus:ring-1 focus:ring-accent focus:outline-none transition-colors`}
                      />
                      {errors.challengeDescription && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.challengeDescription}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 6: Preferred next step */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                        6. Preferred Next Step <span className="text-accent">*</span>
                      </label>
                      <select
                        value={preferredNextStep}
                        onChange={(e) => setPreferredNextStep(e.target.value)}
                        className="w-full bg-white border border-line rounded-lg p-3 text-sm text-ink focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                      >
                        {nextStepOptions.map((step) => (
                          <option key={step} value={step}>
                            {step}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Field 7: Consent checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={consentAgreed}
                          onChange={(e) => {
                            setConsentAgreed(e.target.checked);
                            if (errors.consent) setErrors(prev => ({ ...prev, consent: '' }));
                          }}
                          className="mt-1 h-4 w-4 rounded border-line text-accent focus:ring-accent"
                        />
                        <span className="text-xs text-ink-body leading-relaxed">
                          I understand this enquiry will be formatted as a structured brief for correspondence with Atif I. Malik and the M3 Hive team, and agree to correspond regarding this matter. <span className="text-accent">*</span>
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1 pl-7">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.consent}</span>
                        </p>
                      )}
                    </div>

                    {/* Actions: Open Email Draft & Copy Enquiry Brief */}
                    <div className="pt-4 border-t border-line flex flex-wrap items-center gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        showArrow
                      >
                        Open Email Draft
                      </Button>

                      <Button
                        type="button"
                        onClick={handleCopyBrief}
                        variant="secondary"
                        size="md"
                      >
                        {copied ? (
                          <span className="flex items-center gap-1.5 text-emerald-600">
                            <Check className="w-4 h-4" />
                            <span>Copied to Clipboard</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5">
                            <Copy className="w-4 h-4" />
                            <span>Copy Enquiry Brief</span>
                          </span>
                        )}
                      </Button>
                    </div>

                    {/* Secondary Fallback note */}
                    <p className="text-xs text-ink-subtle pt-2 border-t border-line/60">
                      If you prefer not to use the form, you can reach out directly via LinkedIn or email: <a href="mailto:contact@m3hive.com" className="text-accent font-semibold hover:underline">contact@m3hive.com</a>
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

