import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  Mail, 
  Building2, 
  User, 
  AlertCircle,
  ArrowRight,
  Send,
  Calendar,
  ChevronDown,
  Info
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';
import { BorderBeam } from '../components/ui/BorderBeam';
import { AnimatedBeamDivider } from '../components/ui/AnimatedLine';
import { ExecutiveLogo } from '../components/ui/ExecutiveLogo';

const ENQUIRY_TYPES = [
  'Product Adoption',
  'Research and Validation',
  'Distribution and Market Access',
  'Technology Integration',
  'Investment and Strategic Capital',
  'Custom Product Engineering'
] as const;

type EnquiryType = typeof ENQUIRY_TYPES[number];

const PREFERRED_NEXT_STEPS = [
  'Introductory Call',
  'Workflow Review',
  'Pilot / Feasibility Scoping Session',
  'Technical Architecture Review',
  'Written Correspondence'
] as const;

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Form Fields (Exact 7 Required Fields from Master Prompt Section 15)
  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [enquiryType, setEnquiryType] = useState<EnquiryType>('Custom Product Engineering');
  const [description, setDescription] = useState('');
  const [preferredNextStep, setPreferredNextStep] = useState<string>(PREFERRED_NEXT_STEPS[0]);
  const [consent, setConsent] = useState(false);

  // UI state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  // Map incoming URL parameters to enquiry type
  useEffect(() => {
    const pathway = searchParams.get('pathway') || searchParams.get('enquiry') || searchParams.get('intent') || searchParams.get('interest');
    if (!pathway) return;

    const lower = pathway.toLowerCase();
    if (lower.includes('nourdoc') || lower.includes('leadhive') || lower.includes('animal') || lower.includes('adoption')) {
      setEnquiryType('Product Adoption');
    } else if (lower.includes('research') || lower.includes('validation')) {
      setEnquiryType('Research and Validation');
    } else if (lower.includes('distribution') || lower.includes('market')) {
      setEnquiryType('Distribution and Market Access');
    } else if (lower.includes('integration') || lower.includes('interop')) {
      setEnquiryType('Technology Integration');
    } else if (lower.includes('investment') || lower.includes('capital')) {
      setEnquiryType('Investment and Strategic Capital');
    } else if (lower.includes('custom') || lower.includes('engineering') || lower.includes('project')) {
      setEnquiryType('Custom Product Engineering');
    }
  }, [searchParams]);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;

    const renderWidget = () => {
      if (!window.grecaptcha || !recaptchaContainerRef.current) return;
      window.grecaptcha.ready(() => {
        if (!recaptchaContainerRef.current || widgetIdRef.current !== null) return;
        try {
          recaptchaContainerRef.current.innerHTML = '';
          const id = window.grecaptcha!.render(recaptchaContainerRef.current, {
            sitekey: RECAPTCHA_SITE_KEY,
            callback: (token: string) => {
              setRecaptchaToken(token);
              setErrors((prev) => {
                if (!prev.recaptcha) return prev;
                const next = { ...prev };
                delete next.recaptcha;
                return next;
              });
            },
            'expired-callback': () => {
              setRecaptchaToken('');
            },
            'error-callback': () => {
              setRecaptchaToken('');
            }
          });
          widgetIdRef.current = id;
        } catch (err) {
          console.error('reCAPTCHA v2 render error:', err);
        }
      });
    };

    const SCRIPT_URL = 'https://www.google.com/recaptcha/api.js?render=explicit';
    const existingScript = document.querySelector(`script[src="${SCRIPT_URL}"]`) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = SCRIPT_URL;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        renderWidget();
      };
      document.head.appendChild(script);
    } else if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
      renderWidget();
    } else {
      existingScript.addEventListener('load', renderWidget);
    }

    return () => {
      if (existingScript) {
        existingScript.removeEventListener('load', renderWidget);
      }
    };
  }, [prepared]);

  // Structured brief for transmission
  const generatedBrief = `EXECUTIVE ENQUIRY : ATIF I. MALIK & M3 HIVE
--------------------------------------------------
1. Name                 : ${name.trim() || '[Not provided]'}
2. Organisation         : ${organisation.trim() || '[Not provided]'}
3. Work Email           : ${email.trim() || '[Not provided]'}
4. Enquiry Type         : ${enquiryType}
5. Challenge Description:
${description.trim() || '[Not provided]'}
6. Preferred Next Step  : ${preferredNextStep}
7. Contact Consent      : Granted
--------------------------------------------------
Note: Please do not transmit medical records, patient data, or confidential project secrets via this general enquiry form.`;

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    if (!organisation.trim()) {
      errs.organisation = 'Please provide your organisation or institution.';
    }

    if (!email.trim()) {
      errs.email = 'Please provide your work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid work email address.';
    }

    if (!description.trim()) {
      errs.description = 'Please provide a brief description of the challenge.';
    } else if (description.trim().length < 15) {
      errs.description = 'Please provide at least 15 characters describing the challenge.';
    }

    if (!consent) {
      errs.consent = 'Consent to be contacted is required before submission.';
    }

    if (!recaptchaToken) {
      errs.recaptcha = 'Please verify that you are not a robot.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!RECAPTCHA_SITE_KEY) {
      setSubmitError('The contact form security verification is being configured. Please try again shortly.');
      return;
    }

    if (!recaptchaToken) {
      setErrors(prev => ({ ...prev, recaptcha: 'Please complete the "I\'m not a robot" security check.' }));
      return;
    }

    setSubmitError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          organisation,
          email,
          enquiryType,
          description,
          preferredNextStep,
          consent,
          recaptchaToken,
          website: ''
        })
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        if (window.grecaptcha && widgetIdRef.current !== null) {
          try {
            window.grecaptcha.reset(widgetIdRef.current);
          } catch {
            // ignore
          }
        }
        setRecaptchaToken('');
        throw new Error(result?.message || 'We could not send your enquiry. Please try again shortly.');
      }

      if (window.grecaptcha && widgetIdRef.current !== null) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch {
          // ignore
        }
      }
      setRecaptchaToken('');
      widgetIdRef.current = null;
      setPrepared(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'We could not send your enquiry. Please try again shortly.');
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <div className="bg-canvas text-ink selection:bg-brand-wash selection:text-brand-dark min-h-screen">
      
      {/* Hero Section */}
      <HeroBackground
        imageSrc="/images/heroes/hero-contact.jpg"
        imageAlt="Executive Consultation Suite and Architectural Boardroom"
        glowColor="teal"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal>
            <div className="max-w-2xl space-y-6 sm:space-y-7">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] font-mono font-bold text-brand uppercase tracking-wider bg-brand/10 border border-brand/20 px-3 py-1 rounded-full shadow-xs">
                  Executive Correspondence
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Discuss a Project
              </h1>

              <p className="text-base sm:text-lg text-black leading-relaxed font-medium">
                If you are exploring AI adoption, a product pilot, technology integration, research collaboration or a custom digital platform, share the challenge and the outcome you are working toward.
              </p>

            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      <AnimatedBeamDivider glowColor="cyan" speed="normal" className="my-6 sm:my-8" />

      {/* Main Form and Executive Sidebar */}
      <div className="py-10 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (5 cols): Verified Executive Identity */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.08)] space-y-6 overflow-hidden">
                
                <BorderBeam size={220} duration={8} colorFrom="#286252" colorTo="#286252" borderWidth={1.5} />
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#286252]/40 to-transparent pointer-events-none rounded-full" />

                {/* Profile Header */}
                <div className="flex items-center gap-3.5 pb-5 border-b border-slate-100">
                  <ExecutiveLogo size="md" variant="mark-only" theme="light" />
                  <div>
                    <h2 className="font-display font-bold text-base text-slate-900">
                      Atif I. Malik
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      Chief Executive Officer, M3 Hive
                    </p>
                  </div>
                </div>

                {/* Approved Professional Positioning */}
                <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  <p>
                    Technology entrepreneur and business leader focused on product development, applied artificial intelligence, data-driven platforms, and digital transformation.
                  </p>
                </div>

                {/* Approved LinkedIn Profile */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    Verified Executive Profile
                  </span>

                  <a
                    href="https://www.linkedin.com/in/aimalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-brand-wash hover:border-brand/40 transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand font-bold text-xs shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                        in
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 group-hover:text-brand block transition-colors">
                          Connect on LinkedIn
                        </span>
                        <span className="text-[11px] text-slate-500 block">
                          linkedin.com/in/aimalik
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Direct email correspondence */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    Direct Correspondence
                  </span>
                  <a
                    href="mailto:atif.imran@gmail.com"
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-brand-wash hover:border-brand/40 transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-brand block transition-colors">
                          Prefer email?
                        </span>
                        <span className="text-[11px] text-slate-500 block truncate">
                          atif.imran@gmail.com
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                  </a>
                </div>

                {/* Privacy & Governance Notice */}
                <div className="pt-2 flex items-start gap-2 text-xs text-slate-500 leading-relaxed border-t border-slate-100">
                  <Info className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <p>
                    Please do not submit medical records, patient data, or confidential proprietary details through this general enquiry form.
                  </p>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (7 cols): Enquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.1)] overflow-hidden">
                
                <BorderBeam size={260} duration={10} colorFrom="#286252" colorTo="#286252" borderWidth={1.5} />
                <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#286252]/35 to-transparent pointer-events-none rounded-full" />

                <AnimatePresence mode="wait">
                  {prepared ? (
                    <motion.div
                      key="prepared"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="py-6 space-y-5"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                        <Check className="w-7 h-7" />
                      </div>

                      <div className="space-y-2 max-w-md mx-auto text-center">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                          Enquiry Brief Generated
                        </span>
                        <h2 className="font-display font-bold text-2xl text-slate-900 pt-1">
                          Structured Brief Ready
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Your project enquiry has been sent securely to the M3 Hive team. A copy is shown below for your records.
                        </p>
                      </div>

                      {/* Display generated brief */}
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left font-mono text-xs text-slate-800 whitespace-pre-wrap max-h-60 overflow-y-auto shadow-inner">
                        {generatedBrief}
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
                              Copied to Clipboard
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Copy className="w-4 h-4" />
                              Copy Structured Brief
                            </span>
                          )}
                        </Button>

                        <Button
                          href="https://www.linkedin.com/in/aimalik/"
                          variant="secondary"
                          size="md"
                          isExternal
                          showArrow
                        >
                          Connect on LinkedIn
                        </Button>
                      </div>

                      <div className="pt-4 border-t border-slate-100 text-center">
                        <button
                          type="button"
                          onClick={() => setPrepared(false)}
                          className="text-xs text-brand hover:underline font-semibold cursor-pointer"
                        >
                          Edit enquiry details
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmitEnquiry} className="space-y-5" noValidate>
                      
                      <div className="border-b border-slate-100 pb-4">
                        <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                          Submit a Project Enquiry
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          Share your challenge and objectives to explore alignment with M3 Hive products or tailored engineering engagements.
                        </p>
                      </div>

                      {/* Field 1 & 2: Name & Organisation */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            1. Full Name <span className="text-brand">*</span>
                          </label>
                          <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand transition-colors">
                              <User className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              required
                              placeholder="Your full name"
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

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            2. Organisation <span className="text-brand">*</span>
                          </label>
                          <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand transition-colors">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              required
                              placeholder="Organisation or institution"
                              value={organisation}
                              onChange={(e) => {
                                setOrganisation(e.target.value);
                                if (errors.organisation) setErrors(prev => ({ ...prev, organisation: '' }));
                              }}
                              className={`w-full bg-white border pl-9 pr-3 py-2.5 text-sm rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                                errors.organisation 
                                  ? 'border-red-400 focus:border-red-500 ring-2 ring-red-100' 
                                  : 'border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 shadow-2xs'
                              }`}
                            />
                          </div>
                          {errors.organisation && (
                            <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.organisation}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Field 3 & 4: Work Email & Enquiry Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            3. Work Email <span className="text-brand">*</span>
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

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            4. Enquiry Type <span className="text-brand">*</span>
                          </label>
                          <div className="relative">
                            <select
                              value={enquiryType}
                              onChange={(e) => setEnquiryType(e.target.value as EnquiryType)}
                              className="w-full bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 shadow-2xs px-3 py-2.5 text-sm rounded-xl text-slate-900 focus:outline-none transition-all cursor-pointer appearance-none pr-8"
                            >
                              {ENQUIRY_TYPES.map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Field 5: Brief Description of the Challenge */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                            5. Brief Description of the Challenge <span className="text-brand">*</span>
                          </label>
                          <span className={`text-[11px] font-mono ${
                            description.length >= 15 ? 'text-brand font-semibold' : 'text-slate-400'
                          }`}>
                            {description.length} characters
                          </span>
                        </div>
                        <textarea
                          rows={4}
                          required
                          placeholder="Describe the operational challenge, user context, technical requirements, or intended outcome..."
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value);
                            if (errors.description) setErrors(prev => ({ ...prev, description: '' }));
                          }}
                          className={`w-full bg-white border p-3 text-sm rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all leading-relaxed ${
                            errors.description 
                              ? 'border-red-400 focus:border-red-500 ring-2 ring-red-100' 
                              : 'border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 shadow-2xs'
                          }`}
                        />
                        {errors.description && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.description}</span>
                          </p>
                        )}
                      </div>

                      {/* Field 6: Preferred Next Step */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          6. Preferred Next Step <span className="text-brand">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <select
                            value={preferredNextStep}
                            onChange={(e) => setPreferredNextStep(e.target.value)}
                            className="w-full bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 shadow-2xs pl-9 pr-8 py-2.5 text-sm rounded-xl text-slate-900 focus:outline-none transition-all cursor-pointer appearance-none"
                          >
                            {PREFERRED_NEXT_STEPS.map((step) => (
                              <option key={step} value={step}>
                                {step}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Field 7: Consent to Be Contacted */}
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
                            7. I consent to be contacted regarding this project enquiry. <span className="text-brand font-bold">*</span>
                          </span>
                        </label>
                        {errors.consent && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1 pl-6 font-medium">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.consent}</span>
                          </p>
                        )}
                      </div>

                      {/* Google reCAPTCHA v2 Checkbox */}
                      <div className="pt-2">
                        <div
                          ref={recaptchaContainerRef}
                          className="min-h-[78px] flex items-center justify-start overflow-x-auto"
                          aria-label="Google reCAPTCHA verification"
                        />
                        {errors.recaptcha && (
                          <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                            <span>{errors.recaptcha}</span>
                          </p>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group inline-flex items-center gap-2.5 px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-brand via-[#2E6877] to-brand hover:from-[#2E6877] hover:to-brand rounded-full shadow-[0_4px_16px_rgba(55,122,138,0.28)] hover:shadow-[0_6px_22px_rgba(55,122,138,0.4)] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] border border-white/20 cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5 text-white/90" />
                          <span>{isSubmitting ? 'Sending Enquiry...' : 'Send Project Enquiry'}</span>
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
                              <span>Copy Structured Brief</span>
                            </span>
                          )}
                        </Button>
                      </div>

                      {submitError && (
                        <p className="text-xs text-red-600 leading-relaxed font-medium" role="alert">
                          {submitError}
                        </p>
                      )}

                      {/* Security and delivery note */}
                      <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                        This form is protected by reCAPTCHA and sends your enquiry securely to the M3 Hive team. Please do not include medical records, patient data, or confidential project secrets.
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
