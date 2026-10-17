import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../../content/portfolio';
import { ExecutiveLogo } from '../ui/ExecutiveLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#51AAC0]/30 bg-[#06161B] pt-14 pb-10 text-slate-300 sm:pt-16 sm:pb-12">
      {/* Top Specular Edge Glow */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#51AAC0]/60 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle Ambient Atmosphere */}
      <div 
        className="absolute -top-28 left-1/2 h-[300px] w-[760px] -translate-x-1/2 rounded-full bg-[#377A8A]/15 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none [background-image:linear-gradient(rgba(125,226,247,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(125,226,247,0.8)_1px,transparent_1px)] [background-size:36px_36px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            MAIN 4-COLUMN EXECUTIVE LEDGER (OPEN, UNBOXED EDITORIAL ARCHITECTURE)
            ========================================================================= */}
        <div className="grid grid-cols-1 gap-10 pb-12 border-b border-white/[0.08] md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Column 1 (5 cols): Executive Identity & Leadership Bio */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block group focus-visible:outline-none" aria-label="Atif I. Malik - Home">
              <ExecutiveLogo size="md" variant="horizontal" theme="dark" />
            </Link>
            
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#7EE2F7]">
              {EXECUTIVE_PROFILE.tagline}
            </p>

            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-md font-normal">
              Connecting business challenges with product thinking, applied AI, and technology delivery across healthcare, enterprise intelligence, and connected systems.
            </p>

            {/* Direct Roles Ledger */}
            <div className="pt-2 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-white font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#51AAC0]" />
                <span>{EXECUTIVE_PROFILE.currentRole}</span>
              </div>
              <div className="flex items-start gap-2 text-slate-400 text-xs pl-3.5">
                <span>•</span>
                <span>{EXECUTIVE_PROFILE.separateAffiliation}</span>
              </div>
            </div>
          </div>

          {/* Column 2 (2 cols): Core Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li><Link to="/about" className="hover:text-white transition-colors block">About</Link></li>
              <li><Link to="/expertise" className="hover:text-white transition-colors block">Expertise</Link></li>
              <li><Link to="/ventures" className="hover:text-white transition-colors block">Ventures</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors block">Selected Work</Link></li>
              <li><Link to="/360-technologies" className="hover:text-white transition-colors block">360 Technologies</Link></li>
              <li><Link to="/collaboration" className="hover:text-white transition-colors block">Collaboration</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors block">Insights &amp; Sources</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors block">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 (3 cols): Priority Products */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-white">
              Priority Products
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li>
                <Link to="/products/nourdoc" className="group block">
                  <span className="text-slate-100 font-semibold group-hover:text-[#7EE2F7] transition-colors block">
                    NourDoc
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5 leading-relaxed">
                    AI-enabled clinical documentation platform
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/products/leadhive-ai" className="group block">
                  <span className="text-slate-100 font-semibold group-hover:text-[#7EE2F7] transition-colors block">
                    LeadHive AI
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5 leading-relaxed">
                    AI-enabled lead engagement &amp; qualification engine
                  </span>
                </Link>
              </li>

              <li>
                <Link to="/products/smart-animal" className="group block">
                  <span className="text-slate-100 font-semibold group-hover:text-[#7EE2F7] transition-colors block">
                    Smart Animal
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5 leading-relaxed">
                    Connected livestock monitoring &amp; herd management
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (2 cols): Verified Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-white">
              Verified Links
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#7EE2F7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>

              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.nourdoc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors"
                >
                  <span>NourDoc Product Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#7EE2F7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>

              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.m3hive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors"
                >
                  <span>M3 Hive Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#7EE2F7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>

              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.technologies360}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors"
                >
                  <span>360 Tech Clients Directory</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#7EE2F7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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

          <div className="font-mono text-[11px] text-slate-400 shrink-0">
            &copy; {new Date().getFullYear()} Atif I. Malik. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
