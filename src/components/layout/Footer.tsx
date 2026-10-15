import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  ExternalLink
} from 'lucide-react';
import { EXECUTIVE_PROFILE, PRODUCTS } from '../../content/portfolio';
import { ExecutiveLogo } from '../ui/ExecutiveLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-black to-slate-950 text-slate-300 pt-14 sm:pt-16 pb-12 mt-16 sm:mt-24 border-t border-slate-800/80 relative overflow-hidden">
      
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
              Connecting business challenges with product thinking, applied AI, and technology delivery across healthcare, enterprise intelligence, and connected systems.
            </p>

            {/* Direct Roles Ledger */}
            <div className="pt-2 text-xs text-slate-300 space-y-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-slate-200">{EXECUTIVE_PROFILE.currentRole}</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Primary Focus
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
              <li><Link to="/" className="hover:text-white transition-colors block py-0.5">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors block py-0.5">About</Link></li>
              <li><Link to="/expertise" className="hover:text-white transition-colors block py-0.5">Expertise</Link></li>
              <li><Link to="/ventures" className="hover:text-white transition-colors block py-0.5">Ventures</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors block py-0.5">Selected Work</Link></li>
              <li><Link to="/360-technologies" className="hover:text-white transition-colors block py-0.5">360 Technologies</Link></li>
              <li><Link to="/collaboration" className="hover:text-white transition-colors block py-0.5">Collaboration</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors block py-0.5">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 (3 cols): Priority Products */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Priority Products
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/products/nourdoc" className="group block p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-sky-500/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-200 font-bold group-hover:text-sky-300 transition-colors">NourDoc</span>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
                      HealthTech AI
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1 leading-snug">
                    AI-enabled clinical documentation platform
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/products/leadhive-ai" className="group block p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-200 font-bold group-hover:text-indigo-300 transition-colors">LeadHive AI</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                      Sales Intelligence
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1 leading-snug">
                    AI-enabled lead engagement &amp; qualification engine
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/products/smart-animal" className="group block p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-200 font-bold group-hover:text-emerald-300 transition-colors">Smart Animal</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      AgriTech &amp; IoT
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1 leading-snug">
                    Connected livestock monitoring &amp; herd management
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
                    <span className="text-slate-200 group-hover:text-white transition-colors">NourDoc Product Page</span>
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
                    <span className="text-slate-200 group-hover:text-white transition-colors">360 Tech Clients Directory</span>
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
              360 Technologies is a separate technology-services company with a published history across enterprise systems, public-sector digitisation, data services and professional capability development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 self-start md:self-auto shrink-0 font-mono text-[11px]">
            <span className="text-slate-400">
              &copy; {new Date().getFullYear()} Atif I. Malik. All rights reserved.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
