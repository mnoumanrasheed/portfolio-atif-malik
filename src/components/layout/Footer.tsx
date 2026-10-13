import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../../content/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deep text-slate-300 pt-16 pb-12 mt-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Executive Bio Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-white font-display font-bold text-xs tracking-wider">
                AIM
              </div>
              <span className="font-display font-bold text-lg text-white">
                {EXECUTIVE_PROFILE.name}
              </span>
            </div>
            
            <p className="text-sm text-slate-300 font-medium">
              {EXECUTIVE_PROFILE.tagline}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Connecting business problems with product thinking, applied AI, and disciplined technology delivery.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>• {EXECUTIVE_PROFILE.currentRole}</div>
              <div>• {EXECUTIVE_PROFILE.separateAffiliation}</div>
            </div>
          </div>

          {/* Core Routes Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Atif</Link></li>
              <li><Link to="/m3-hive" className="hover:text-white transition-colors">M3 Hive</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link to="/360-technologies" className="hover:text-white transition-colors">360 Technologies</Link></li>
              <li><Link to="/collaboration" className="hover:text-white transition-colors">Collaboration</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Priority Products Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/products/nourdoc" className="hover:text-white transition-colors block">
                  <span className="text-slate-200 font-medium">NourDoc</span>
                  <span className="text-xs text-slate-400 block">Clinical Documentation AI</span>
                </Link>
              </li>
              <li>
                <Link to="/products/leadhive-ai" className="hover:text-white transition-colors block">
                  <span className="text-slate-200 font-medium">LeadHive AI</span>
                  <span className="text-xs text-slate-400 block">Lead Qualification & CRM</span>
                </Link>
              </li>
              <li>
                <Link to="/products/smart-animal" className="hover:text-white transition-colors block">
                  <span className="text-slate-200 font-medium">Smart Animal</span>
                  <span className="text-xs text-slate-400 block">Livestock IoT & Telemetry</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified External Sources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Verified Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.m3hive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>M3 Hive Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.nourdoc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>NourDoc Official Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={EXECUTIVE_PROFILE.verifiedLinks.technologies360}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>360 Technologies Clients</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Governance Disclosure */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Governance Disclosure: Content grounded in authoritative executive portfolio records. 360 Technologies is a separate legal entity with historical portfolio records.
          </div>
          <div className="text-slate-400">
            &copy; {new Date().getFullYear()} Atif I. Malik. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
