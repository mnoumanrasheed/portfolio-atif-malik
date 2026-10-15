import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  Mail, 
  ShieldCheck, 
  Building2, 
  User, 
  AlertCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Send,
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../content/portfolio';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';
import { BorderBeam, LivePulseBeacon } from '../components/ui/BorderBeam';
import { AnimatedBeamDivider, AnimatedLineAccent } from '../components/ui/AnimatedLine';
import { ExecutiveLogo } from '../components/ui/ExecutiveLogo';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [inquiryType, setInquiryType] = useState('custom-engineering');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  // Status states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Clean, focused inquiry categories
  const inquiryCategories = [
    { id: 'nourdoc', label: 'NourDoc : Clinical AI Pilot or Demo', short: 'NourDoc AI' },
    { id: 'leadhive', label: 'LeadHive AI : Lead Qualification Engine', short: 'LeadHive AI' },
    { id: 'smart-animal', label: 'Smart Animal : Livestock IoT Telemetry', short: 'Smart Animal IoT' },
    { id: 'custom-engineering', label: 'Custom AI & Product Engineering', short: 'Custom Engineering' },
    { id: 'integration', label: 'Enterprise Systems & Platform Integration', short: 'Systems Interop' },
    { id: 'partnership', label: 'Strategic Partnership & Advisory', short: 'Advisory / Capital' }
  ];

  // Map incoming URL parameters to inquiry type
  useEffect(() => {
    const pathway = searchParams.get('pathway');
    const interest = searchParams.get('interest');
    const intent = searchParams.get('intent');

    const checkStr = (intent || pathway || interest || '').toLowerCase();
    if (checkStr.includes('nourdoc')) {
      setInquiryType('nourdoc');
    } else if (checkStr.includes('leadhive')) {
      setInquiryType('leadhive');
    } else if (checkStr.includes('smart-animal') || checkStr.includes('animal')) {
      setInquiryType('smart-animal');
    } else if (checkStr.includes('integration')) {
      setInquiryType('integration');
    } else if (checkStr.includes('investment') || checkStr.includes('capital') || checkStr.includes('research') || checkStr.includes('distribution')) {
      setInquiryType('partnership');
    } else if (checkStr.includes('custom') || checkStr.includes('engineering')) {
      setInquiryType('custom-engineering');
    }
  }, [searchParams]);

  const selectedCategory = inquiryCategories.find(c => c.id === inquiryType) || inquiryCategories[3];

  // Structured brief format for transmission
  const generatedBrief = `EXECUTIVE INQUIRY : ATIF I. MALIK & M3 HIVE
--------------------------------------------------
Sender Name  : ${name.trim() || '[Name]'}
Work Email   : ${email.trim() || '[Email]'}
Organisation : ${organisation.trim() || '[Organisation]'}
Inquiry Focus: ${selectedCategory.label}

MESSAGE / OPERATIONAL CONTEXT:
${message.trim() || '[No additional details provided]'}

--------------------------------------------------
Direct executive inquiries are reviewed under enterprise confidentiality principles.`;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your full name.';
    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid work email address.';
    }
    if (!message.trim()) {
      errs.message = 'Please share a brief note about your operational inquiry.';
    } else if (message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters.';
    }
    if (!consent) {
      errs.consent = 'Please confirm consent to correspond.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Executive Inquiry: ${selectedCategory.label} | ${organisation.trim() || name.trim()}`);
    const body = encodeURIComponent(generatedBrief);
    const mailtoUrl = `mailto:atif.imran@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(generatedBrief);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('atif.imran@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="bg-canvas text-ink selection:bg-brand-wash selection:text-brand-dark min-h-screen">
      
      {/* =========================================================================
          HERO SECTION (100vh Viewport Locked Composition with Live Accents)
          ========================================================================= */}
      <HeroBackground
        imageSrc="/images/heroes/hero-contact.jpg"
        imageAlt="Executive Consultation Suite and Architectural Boardroom"
        glowColor="teal"
        isCompactHeight={true}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal>
            <div className="max-w-2xl space-y-3.5">
              
              {/* Radar Status Beacon Pill */}
              <div className="flex flex-wrap items-center gap-2.5">
                <LivePulseBeacon label="DIRECT EXECUTIVE INQUIRIES" />
                <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider bg-white/90 border border-slate-200/90 px-3 py-1 rounded-full shadow-xs">
                  CEO Office Protocol
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Start a Conversation.
              </h1>

              {/* Luminous Accent Sheen */}
              <AnimatedLineAccent glowColor="cyan" className="mt-2 mb-3" />

              {/* Narrative Statement */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Whether evaluating clinical AI documentation, conversational lead qualification, IoT livestock telemetry, or a bespoke product engineering engagement, share your requirements for direct executive review.
              </p>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 border border-slate-200/90 shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-brand" />
                  <span>24–48h Response SLA</span>
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 border border-slate-200/90 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Confidential &amp; NDA Standard</span>
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 border border-slate-200/90 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Direct CEO Oversight</span>
                </span>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      {/* Luminous Traveling Beam Divider */}
      <AnimatedBeamDivider glowColor="cyan" speed="normal" className="my-6 sm:my-8" />

      {/* =========================================================================
          MAIN EXECUTIVE SECTION (Decent, Minimal, and Highly Animated)
          ========================================================================= */}
      <div className="py-10 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* =====================================================================
              LEFT COLUMN (5 cols): Executive Identity, Channels & Live Border Beam
              ===================================================================== */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.1}>
              
              {/* Luxury Executive Identity Card with Live Border Beam */}
              <div className="relative bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.08)] space-y-6 overflow-hidden">
                
                {/* Circulating Live Border Beam */}
                <BorderBeam size={220} duration={8} colorFrom="#51AAC0" colorTo="#377A8A" borderWidth={1.5} />
                
                {/* Top Ambient Specular Refraction Rim */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#51AAC0]/40 to-transparent pointer-events-none rounded-full" />

                {/* Profile Header */}
                <div className="flex items-center gap-3.5 pb-5 border-b border-slate-100">
                  <ExecutiveLogo size="md" variant="mark-only" theme="light" />
                  <div>
                    <h2 className="font-display font-bold text-base text-slate-900">
                      Atif I. Malik
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      CEO, M3 Hive · Technology &amp; AI Executive
                    </p>
                  </div>
                </div>

                {/* Live Channel Status Indicator */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                  </span>
                  <span>Direct Communication Lines Active</span>
                </div>

                {/* Direct Contact Channels */}
                <div className="space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    Direct Contact Routes
                  </span>

                  {/* Email Box with One-Click Copy */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-brand/40 transition-all flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center text-brand shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                          Executive Email
                        </span>
                        <a
                          href="mailto:atif.imran@gmail.com"
                          className="text-xs font-mono font-bold text-slate-900 hover:text-brand truncate block transition-colors"
                        >
                          atif.imran@gmail.com
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-brand hover:bg-white transition-all flex items-center gap-1.5 border border-transparent hover:border-slate-200 shadow-2xs"
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {emailCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-[11px] text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* LinkedIn Box */}
                  <a
                    href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-brand-wash hover:border-brand/40 transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center text-brand font-bold text-xs shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                        in
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 group-hover:text-brand block transition-colors">
                          Connect on LinkedIn
                        </span>
                        <span className="text-[11px] text-slate-500 block">
                          Direct executive correspondence
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Operating Venture Links */}
                <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-xs">
                  <a
                    href={EXECUTIVE_PROFILE.verifiedLinks.m3hive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white text-slate-700 hover:text-brand transition-all font-semibold shadow-2xs hover:scale-[1.02]"
                  >
                    m3hive.com
                  </a>
                  <a
                    href={EXECUTIVE_PROFILE.verifiedLinks.nourdoc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white text-slate-700 hover:text-brand transition-all font-semibold shadow-2xs hover:scale-[1.02]"
                  >
                    nour-doc.com
                  </a>
                </div>

                {/* Confidentiality Standard Note */}
                <div className="pt-2 flex items-start gap-2.5 text-xs text-slate-500 leading-relaxed border-t border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <p>
                    All inquiries are held in strict confidence under non-disclosure protocols.
                  </p>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* =====================================================================
              RIGHT COLUMN (7 cols): Decent, Clean Form with Live Border Beam
              ===================================================================== */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="relative bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.1)] overflow-hidden">
                
                {/* Circulating Live Border Beam */}
                <BorderBeam size={260} duration={10} colorFrom="#51AAC0" colorTo="#377A8A" borderWidth={1.5} />
                
                {/* Top Ambient Specular Refraction Rim */}
                <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#51AAC0]/35 to-transparent pointer-events-none rounded-full" />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    /* =========================================================
                       POST-SUBMISSION CLEAN RECEIPT CARD (Animated)
                       ========================================================= */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="py-8 text-center space-y-5"
                    >
                      <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-25" />
                        <div className="relative w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center shadow-xs">
                          <Check className="w-7 h-7" />
                        </div>
                      </div>

                      <div className="space-y-1.5 max-w-md mx-auto">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                          Email Application Launched
                        </span>
                        <h2 className="font-display font-bold text-2xl text-slate-900 pt-1">
                          Inquiry Draft Prepared
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Your structured brief has been prepared for direct dispatch to <strong className="text-slate-900 font-semibold">atif.imran@gmail.com</strong>.
                        </p>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
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
                              Copy Formatted Message
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
                          Connect via LinkedIn
                        </Button>
                      </div>

                      <div className="pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="text-xs text-brand hover:underline font-semibold"
                        >
                          ← Prepare another inquiry
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* =========================================================
                       ACTIVE CLEAN EXECUTIVE FORM
                       ========================================================= */
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                      
                      {/* Form Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
                        <div>
                          <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                            Send an Executive Inquiry
                          </h2>
                          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                            Direct transmission to Atif I. Malik &amp; M3 Hive leadership.
                          </p>
                        </div>
                        <span className="self-start sm:self-auto text-[11px] font-mono text-brand font-bold bg-brand-wash px-2.5 py-1 rounded-full border border-brand/20">
                          Direct Protocol
                        </span>
                      </div>

                      {/* Quick Focus Area Interactive Selector Pills */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center justify-between">
                          <span>Quick Focus Selector</span>
                          <span className="text-[10px] text-slate-400 font-normal">Click to pre-set</span>
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {inquiryCategories.map((cat) => {
                            const isSelected = inquiryType === cat.id;
                            return (
                              <button
                                key={cat.id}
                                type="button"
                                onClick={() => setInquiryType(cat.id)}
                                className={`px-2.5 py-1 text-xs font-semibold rounded-full border transition-all ${
                                  isSelected
                                    ? 'bg-brand text-white border-brand shadow-xs'
                                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                              >
                                {cat.short}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Row 1: Name and Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Full Name <span className="text-brand">*</span>
                          </label>
                          <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand transition-colors">
                              <User className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              required
                              placeholder="Your Name"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                                if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                              }}
                              className={`w-full bg-white border pl-9 pr-3 py-2.5 text-sm rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                                errors.name 
                                  ? 'border-red-400 focus:border-red-500 ring-2 ring-red-100' 
                                  : 'border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 shadow-2xs'
                              }`}
                            />
                          </div>
                          {errors.name && (
                            <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.name}</span>
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Work Email <span className="text-brand">*</span>
                          </label>
                          <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand transition-colors">
                              <Mail className="w-4 h-4" />
                            </div>
                            <input
                              type="email"
                              required
                              placeholder="name@company.com"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                              }}
                              className={`w-full bg-white border pl-9 pr-3 py-2.5 text-sm rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                                errors.email 
                                  ? 'border-red-400 focus:border-red-500 ring-2 ring-red-100' 
                                  : 'border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 shadow-2xs'
                              }`}
                            />
                          </div>
                          {errors.email && (
                            <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.email}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Organisation and Inquiry Focus */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Organisation */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Organisation / Institution
                          </label>
                          <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand transition-colors">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              placeholder="e.g. Apex Health, Enterprise Ltd"
                              value={organisation}
                              onChange={(e) => setOrganisation(e.target.value)}
                              className="w-full bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 shadow-2xs pl-9 pr-3 py-2.5 text-sm rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        {/* Inquiry Focus Dropdown */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Inquiry Focus Area <span className="text-brand">*</span>
                          </label>
                          <div className="relative">
                            <select
                              value={inquiryType}
                              onChange={(e) => setInquiryType(e.target.value)}
                              className="w-full bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 shadow-2xs px-3 py-2.5 text-sm rounded-xl text-slate-900 focus:outline-none transition-all cursor-pointer appearance-none pr-8"
                            >
                              {inquiryCategories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                  {cat.label}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Message Textarea */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                            Message / Operational Context <span className="text-brand">*</span>
                          </label>
                          <span className={`text-[11px] font-mono ${
                            message.length >= 10 ? 'text-brand font-semibold' : 'text-slate-400'
                          }`}>
                            {message.length} characters
                          </span>
                        </div>
                        <div className="relative group">
                          <textarea
                            rows={4}
                            required
                            placeholder="Please describe your operational requirements, pilot goals, or collaboration context..."
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value);
                              if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                            }}
                            className={`w-full bg-white border p-3 text-sm rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all leading-relaxed ${
                              errors.message 
                                ? 'border-red-400 focus:border-red-500 ring-2 ring-red-100' 
                                : 'border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 shadow-2xs'
                            }`}
                          />
                        </div>
                        {errors.message && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Consent Checkbox */}
                      <div className="pt-1">
                        <label className="flex items-start gap-2.5 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => {
                              setConsent(e.target.checked);
                              if (errors.consent) setErrors(prev => ({ ...prev, consent: '' }));
                            }}
                            className="mt-1 h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand cursor-pointer"
                          />
                          <span className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                            I agree to correspond with Atif I. Malik and M3 Hive regarding this executive inquiry. <span className="text-brand font-bold">*</span>
                          </span>
                        </label>
                        {errors.consent && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1 pl-6 font-medium">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.consent}</span>
                          </p>
                        )}
                      </div>

                      {/* Actions: Send & Copy with Live Ping Node */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                          type="submit"
                          className="group inline-flex items-center gap-2.5 px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-brand via-[#2E6877] to-brand hover:from-[#2E6877] hover:to-brand rounded-full shadow-[0_4px_16px_rgba(55,122,138,0.28)] hover:shadow-[0_6px_22px_rgba(55,122,138,0.4)] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] border border-white/20"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                          <span>Send Inquiry</span>
                          <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <Button
                          type="button"
                          onClick={handleCopyBrief}
                          variant="secondary"
                          size="md"
                        >
                          {copied ? (
                            <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                              <Check className="w-4 h-4" />
                              <span>Copied to Clipboard</span>
                            </span>
                          ) : (
                            <span className="flex items-center gap-1.5">
                              <Copy className="w-4 h-4" />
                              <span>Copy Brief</span>
                            </span>
                          )}
                        </Button>
                      </div>

                      {/* Helper Footer */}
                      <p className="text-[11px] text-slate-400 pt-1">
                        Clicking &quot;Send Inquiry&quot; launches your email client pre-addressed to{' '}
                        <a href="mailto:atif.imran@gmail.com" className="text-brand font-semibold hover:underline">
                          atif.imran@gmail.com
                        </a>.
                      </p>

                    </form>
                  )}
                </AnimatePresence>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

    </div>
  );
};
