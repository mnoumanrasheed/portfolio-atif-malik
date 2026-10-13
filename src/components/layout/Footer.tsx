import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../../content/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-800 bg-black text-neutral-400 pt-20 pb-16 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-neutral-900">
          {/* Executive Bio Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center border border-white bg-black text-white">
                <span className="font-mono text-xs font-bold">AIM</span>
              </div>
              <span className="font-sans font-bold text-base text-white uppercase tracking-tight">
                {EXECUTIVE_PROFILE.name}
              </span>
            </div>
            
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-300">
              {EXECUTIVE_PROFILE.tagline}
            </p>

            <p className="text-xs text-neutral-400 font-editorial-body leading-relaxed max-w-sm">
              Connecting business problems with product thinking, applied AI, and disciplined technology delivery.
            </p>

            <div className="pt-2 text-xs font-mono text-neutral-500 space-y-1">
              <div>• {EXECUTIVE_PROFILE.currentRole}</div>
              <div>• {EXECUTIVE_PROFILE.separateAffiliation}</div>
            </div>
          </div>

          {/* Core Routes Column */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
              Index
            </h4>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider">
              <li><Link to="/" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Atif</Link></li>
              <li><Link to="/m3-hive" className="hover:text-white transition-colors">M3 Hive Company</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link to="/360-technologies" className="hover:text-white transition-colors">360 Technologies</Link></li>
              <li><Link to="/collaboration" className="hover:text-white transition-colors">Collaboration</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Priority Products Column */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
              Products
            </h4>
            <ul className="space-y-3 text-xs font-mono uppercase tracking-wider">
              <li>
                <Link to="/products/nourdoc" className="hover:text-white transition-colors block">
                  <span className="text-white">NourDoc</span>
                  <span className="text-[10px] text-neutral-500 block">HealthTech AI</span>
                </Link>
              </li>
              <li>
                <Link to="/products/leadhive-ai" className="hover:text-white transition-colors block">
                  <span className="text-white">LeadHive AI</span>
                  <span className="text-[10px] text-neutral-500 block">Qualification</span>
                </Link>
              </li>
              <li>
                <Link to="/products/smart-animal" className="hover:text-white transition-colors block">
                  <span className="text-white">Smart Animal</span>
                  <span className="text-[10px] text-neutral-500 block">AgriTech IoT</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified External Sources */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
              Sources
            </h4>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider">
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.m3hive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>M3 Hive</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.nourdoc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>NourDoc Site</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.technologies360}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>360 Clients</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Colophon Footnote */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] font-mono text-neutral-500">
          <div>
            [ GOVERNANCE DISCLOSURE ]: Content grounded in authoritative master portfolio document. 360 Technologies is a separate entity with historical portfolio records.
          </div>
          <div className="uppercase tracking-widest text-neutral-400">
            &copy; {new Date().getFullYear()} ATIF I. MALIK. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};
