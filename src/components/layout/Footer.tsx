import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../../content/portfolio';
import { ExecutiveLogo } from '../ui/ExecutiveLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#09171C] via-[#0D2228] to-[#071318] text-slate-300 pt-14 sm:pt-16 pb-12 border-t border-[#377A8A]/30 relative overflow-hidden">
      {/* Top Specular Edge Glow */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#51AAC0]/60 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle Ambient Atmosphere */}
      <div 
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-[#377A8A]/12 blur-3xl pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================================
            MAIN FOOTER ARCHITECTURE (4-Column Executive Ledger)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.08]">
          
          {/* Column 1 (4 cols): Executive Identity & Leadership Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group focus-visible:outline-none" aria-label="Atif I. Malik - Home">
              <ExecutiveLogo size="md" variant="horizontal" theme="dark" />
            </Link>
            
            <p className="text-xs font-semibold text-[#51AAC0] tracking-wide uppercase">
              {EXECUTIVE_PROFILE.tagline}
            </p>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Connecting business challenges with product thinking, applied AI, and technology delivery across healthcare, enterprise intelligence, and connected systems.
            </p>

            {/* Direct Roles Ledger */}
            <div className="pt-3 border-t border-white/[0.08] space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#51AAC0]" />
                <span className="font-semibold text-white">{EXECUTIVE_PROFILE.currentRole}</span>
              </div>
              <div className="flex items-start gap-2 text-slate-400 text-[11px] pl-3.5">
                <span>•</span>
                <span>{EXECUTIVE_PROFILE.separateAffiliation}</span>
              </div>
            </div>
          </div>

          {/* Column 2 (2 cols): Core Navigation */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/about" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block py-0.5">About</Link></li>
              <li><Link to="/expertise" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block py-0.5">Expertise</Link></li>
              <li><Link to="/ventures" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block py-0.5">Ventures</Link></li>
              <li><Link to="/work" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block py-0.5">Selected Work</Link></li>
              <li><Link to="/360-technologies" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block py-0.5">360 Technologies</Link></li>
              <li><Link to="/collaboration" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block py-0.5">Collaboration</Link></li>
              <li><Link to="/insights" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block py-0.5">Insights &amp; Sources</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white hover:translate-x-0.5 transition-all block py-0.5">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 (3 cols): Priority Products */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Priority Products
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li>
                <Link to="/products/nourdoc" className="group block transition-colors py-0.5">
                  <span className="text-slate-100 font-semibold group-hover:text-[#7EE2F7] transition-colors text-xs block">
                    NourDoc
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5 leading-relaxed group-hover:text-slate-300 transition-colors">
                    AI-enabled clinical documentation platform
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/products/leadhive-ai" className="group block transition-colors py-0.5">
                  <span className="text-slate-100 font-semibold group-hover:text-indigo-300 transition-colors text-xs block">
                    LeadHive AI
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5 leading-relaxed group-hover:text-slate-300 transition-colors">
                    AI-enabled lead engagement &amp; qualification engine
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/products/smart-animal" className="group block transition-colors py-0.5">
                  <span className="text-slate-100 font-semibold group-hover:text-emerald-300 transition-colors text-xs block">
                    Smart Animal
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5 leading-relaxed group-hover:text-slate-300 transition-colors">
                    Connected livestock monitoring &amp; herd management
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (3 cols): Verified Links & Direct Channels */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Verified Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 text-slate-300 hover:text-white transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#51AAC0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>

              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.nourdoc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 text-slate-300 hover:text-white transition-colors"
                >
                  <span>NourDoc Product Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#51AAC0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>

              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.m3hive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 text-slate-300 hover:text-white transition-colors"
                >
                  <span>M3 Hive Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#51AAC0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>

              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.technologies360}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 text-slate-300 hover:text-white transition-colors"
                >
                  <span>360 Tech Clients Directory</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#51AAC0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
