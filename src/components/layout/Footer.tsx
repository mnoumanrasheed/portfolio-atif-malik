import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../../content/portfolio';
import { ExecutiveLogo } from '../ui/ExecutiveLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#286252]/30 bg-[#06161B] pt-14 pb-10 text-slate-300 sm:pt-16 sm:pb-12">
      {/* Top Specular Edge Glow */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#286252]/60 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle Ambient Atmosphere */}
      <div 
        className="absolute -top-28 left-1/2 h-[300px] w-[760px] -translate-x-1/2 rounded-full bg-[#286252]/15 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none [background-image:linear-gradient(rgba(84,203,168,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(84,203,168,0.7)_1px,transparent_1px)] [background-size:36px_36px]" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            BALANCED 3-COLUMN EXECUTIVE ARCHITECTURE
            1. Personal Branding & Introduction
            2. Navigation
            3. Official Websites & Profiles
            ========================================================================= */}
        <div className="grid grid-cols-1 gap-10 pb-12 border-b border-white/[0.08] md:grid-cols-12 lg:gap-12">
          
          {/* Column 1 (5 cols): Personal Branding & Introduction */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block group focus-visible:outline-none" aria-label="Atif I. Malik - Home">
              <ExecutiveLogo size="md" variant="horizontal" theme="dark" />
            </Link>
            
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#54CBA8]">
              {EXECUTIVE_PROFILE.tagline}
            </p>

            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-md font-normal">
              Connecting business challenges with product thinking, applied AI, and technology delivery across healthcare, enterprise intelligence, and connected systems.
            </p>
          </div>

          {/* Column 2 (3 cols): Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs font-medium text-slate-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="hover:text-white transition-colors block">
                  Expertise
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="hover:text-white transition-colors block">
                  Ventures
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors block">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/collaboration" className="hover:text-white transition-colors block">
                  Collaboration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (4 cols): Official Websites & Profiles */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-white">
              Official Websites &amp; Profiles
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              {/* 1. LinkedIn Profile */}
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#54CBA8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>

              {/* 2. 360 Technologies */}
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.technologies360About || "https://www.360technologies.net/index.php/about-us"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors"
                >
                  <span>360 Technologies</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#54CBA8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>

              {/* 3. NourDoc */}
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.nourdoc || "https://nour-doc.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors"
                >
                  <span>NourDoc</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#54CBA8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>

              {/* 4. LeadHive AI */}
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.leadhive || "https://leadhive-ai.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors"
                >
                  <span>LeadHive AI</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#54CBA8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>

              {/* 5. 360 Tech Clients Directory */}
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.technologies360}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors"
                >
                  <span>360 Tech Clients Directory</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#54CBA8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
            <ShieldCheck className="w-4 h-4 text-[#54CBA8] shrink-0 mt-0.5" />
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
