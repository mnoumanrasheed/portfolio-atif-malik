import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ArrowRight,
  Mail, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Activity,
  Layers,
  ExternalLink
} from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../../content/portfolio';
import { ExecutiveLogo } from '../ui/ExecutiveLogo';
import { Button } from '../ui/Button';
import { BorderBeam } from '../ui/BorderBeam';

export const Footer: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const executiveEmail = EXECUTIVE_PROFILE.verifiedLinks.email || 'atif.imran@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(executiveEmail);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      // Clipboard fallback
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-black to-slate-950 text-slate-300 pt-16 sm:pt-20 pb-12 mt-28 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Ambient Deep Atmospheric Glows */}
      <div 
        className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-64 bg-[#377A8A]/12 blur-3xl pointer-events-none rounded-full" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-10 right-1/4 translate-x-1/2 w-[500px] h-60 bg-[#51AAC0]/10 blur-3xl pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      {/* Top Specular Refraction Rim */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#51AAC0]/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            EXECUTIVE ACTION GATEWAY (Pre-Footer Architectural Callout)
            ========================================================================= */}
        <div className="relative bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-950/90 backdrop-blur-2xl border border-slate-800/90 rounded-3xl p-6 sm:p-9 md:p-11 mb-16 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
          {/* Circulating Live Light Border Beam */}
          <BorderBeam size={320} duration={10} colorFrom="#51AAC0" colorTo="#377A8A" borderWidth={1.5} />
          
          {/* Subtle Top Refraction Line */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#51AAC0]/30 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Direct Strategic Invitation */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#51AAC0]/10 border border-[#51AAC0]/25 text-[#51AAC0] text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#51AAC0] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#51AAC0]" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider font-bold">
                  Executive Consultation &amp; Advisory Gateway
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                Let&apos;s start with the operational problem you need to solve.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
                Whether exploring AI-driven clinical documentation, automated conversational lead qualification, IoT livestock telemetry, or custom product engineering, connect directly to evaluate pilot scopes and technical alignment.
              </p>
            </div>

            {/* Right Column: High-Impact Action Dispatch */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3.5 w-full">
              <Button 
                to="/contact" 
                variant="primary" 
                size="lg" 
                showArrow
                className="w-full sm:w-auto shadow-[0_4px_20px_rgba(81,170,192,0.3)] hover:shadow-[0_6px_28px_rgba(81,170,192,0.45)] text-center justify-center"
              >
                Initiate Executive Inquiry
              </Button>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-start lg:justify-end">
                {/* One-Click Direct Copy Email Pill */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#51AAC0]/50 transition-all flex items-center gap-2 shadow-2xs group cursor-pointer"
                  title="Copy executive email"
                >
                  <Mail className="w-3.5 h-3.5 text-[#51AAC0]" />
                  <span className="font-mono text-[11px]">{executiveEmail}</span>
                  {emailCopied ? (
                    <span className="flex items-center gap-1 text-emerald-400 font-bold text-[10px]">
                      <Check className="w-3 h-3" />
                      <span>Copied!</span>
                    </span>
                  ) : (
                    <Copy className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors" />
                  )}
                </button>

                {/* LinkedIn Quick Connect */}
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#51AAC0]/50 transition-all flex items-center gap-1.5 shadow-2xs group"
                >
                  <span className="font-bold text-xs text-[#51AAC0]">in</span>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAIN FOOTER ARCHITECTURE (4-Column Luxury Ledger)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Column 1 (4 cols): Executive Identity & Leadership Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group focus-visible:outline-none" aria-label="Atif I. Malik - Home">
              <ExecutiveLogo size="lg" variant="horizontal" theme="dark" />
            </Link>
            
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              {EXECUTIVE_PROFILE.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Connecting business problems with product thinking, applied AI, and disciplined technology delivery across health, enterprise, and connected systems.
            </p>

            {/* Direct Roles Ledger */}
            <div className="pt-2 text-xs text-slate-300 space-y-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-slate-200">{EXECUTIVE_PROFILE.currentRole}</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Active Focus
                </span>
              </div>
              <div className="text-slate-400 text-[11px] pl-4">
                • {EXECUTIVE_PROFILE.separateAffiliation}
              </div>
            </div>
          </div>

          {/* Column 2 (2 cols): Core Navigation */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#51AAC0]" />
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-white transition-colors block py-0.5">Overview</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors block py-0.5">About Atif</Link></li>
              <li><Link to="/expertise" className="hover:text-white transition-colors block py-0.5">Applied AI Expertise</Link></li>
              <li><Link to="/ventures" className="hover:text-white transition-colors block py-0.5">Ventures &amp; M3 Hive</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors block py-0.5">Selected Work</Link></li>
              <li><Link to="/360-technologies" className="hover:text-white transition-colors block py-0.5">360 Technologies</Link></li>
              <li><Link to="/collaboration" className="hover:text-white transition-colors block py-0.5">Collaboration Pathways</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors block py-0.5">Insights &amp; Sources</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors block py-0.5">Executive Inquiries</Link></li>
            </ul>
          </div>

          {/* Column 3 (3 cols): Flagship Products & Technology Engines */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Flagship Products
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/products/nourdoc" className="group block p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-sky-500/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-200 font-bold group-hover:text-sky-300 transition-colors">NourDoc</span>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
                      Live Pilot
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-0.5 leading-snug">
                    AI Clinical Documentation &amp; FHIR R4 Ingestion
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/products/leadhive-ai" className="group block p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-200 font-bold group-hover:text-indigo-300 transition-colors">LeadHive AI</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                      Operational
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-0.5 leading-snug">
                    Conversational Lead Qualification &amp; CRM Hand-Off
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/products/smart-animal" className="group block p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-200 font-bold group-hover:text-emerald-300 transition-colors">Smart Animal</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      Telemetry
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-0.5 leading-snug">
                    Livestock IoT Sensing &amp; Biometric Health Loops
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (3 cols): Verified Sources & Direct Channels */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Verified Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a
                  href={`mailto:${executiveEmail}`}
                  className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-[#51AAC0]/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#51AAC0]" />
                    <span className="text-slate-200 group-hover:text-white transition-colors">Executive Email</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#51AAC0] transition-colors" />
                </a>
              </li>

              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-[#51AAC0]/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#51AAC0]">in</span>
                    <span className="text-slate-200 group-hover:text-white transition-colors">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#51AAC0] transition-colors" />
                </a>
              </li>

              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.nourdoc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-[#51AAC0]/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-slate-200 group-hover:text-white transition-colors">NourDoc Portal</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#51AAC0] transition-colors" />
                </a>
              </li>

              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.m3hive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-[#51AAC0]/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-slate-200 group-hover:text-white transition-colors">M3 Hive Platform</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#51AAC0] transition-colors" />
                </a>
              </li>

              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.technologies360}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-[#51AAC0]/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-200 group-hover:text-white transition-colors">360 Tech Clients</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#51AAC0] transition-colors" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* =========================================================================
            LEGAL, FIDUCIARY & GOVERNANCE DISCLOSURE BASE
            ========================================================================= */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-start gap-2 max-w-2xl text-[11px] leading-relaxed text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#51AAC0] shrink-0 mt-0.5" />
            <p>
              Governance Disclosure: Content grounded in authoritative executive records. 360 Technologies is a distinct legal entity with historical portfolio records. Executive inquiries are treated under enterprise non-disclosure principles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 self-start md:self-auto shrink-0 font-mono text-[11px]">
            <span className="text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Systems Online</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">·</span>
            <span className="text-slate-400">
              &copy; {new Date().getFullYear()} Atif I. Malik
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
