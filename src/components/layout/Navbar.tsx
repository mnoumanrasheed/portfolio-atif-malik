import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

interface VenturesDropdownItem {
  name: string;
  category?: string;
  desc: string;
  path: string;
  isSeparateCompany?: boolean;
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [venturesOpen, setVenturesOpen] = useState(false);
  const [mobileVenturesOpen, setMobileVenturesOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const justClosedRef = useRef(false);

  // Scroll detection for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setVenturesOpen(false);
    setMobileVenturesOpen(false);
    justClosedRef.current = true;
    const t = setTimeout(() => {
      justClosedRef.current = false;
    }, 350);
    return () => clearTimeout(t);
  }, [location.pathname]);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setVenturesOpen(false);
        justClosedRef.current = true;
        setTimeout(() => {
          justClosedRef.current = false;
        }, 250);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setVenturesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleDropdownLinkClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    justClosedRef.current = true;
    setVenturesOpen(false);
    setHoveredNav(null);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setTimeout(() => {
      justClosedRef.current = false;
    }, 400);
  };

  const handleDropdownEnter = () => {
    if (justClosedRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setVenturesOpen(true);
  };

  const handleDropdownLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setVenturesOpen(false);
    }, 200);
  };

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setVenturesOpen((prev) => !prev);
  };

  // Priority Products under Ventures (Simple & Executive)
  const venturesDropdownItems: VenturesDropdownItem[] = [
    {
      name: 'NourDoc',
      desc: 'HealthTech AI · Clinical Documentation',
      path: '/products/nourdoc'
    },
    {
      name: 'LeadHive AI',
      desc: 'Conversational AI & Lead Qualification',
      path: '/products/leadhive-ai'
    },
    {
      name: 'Smart Animal',
      desc: 'AgriTech & IoT Livestock Management',
      path: '/products/smart-animal'
    }
  ];

  // Check if Ventures or any of its subpages is active
  const isVenturesActive =
    location.pathname === '/ventures' ||
    location.pathname.startsWith('/products/');

  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-200">
      <div
        className={`w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200/90 shadow-xs py-3'
            : 'bg-white border-slate-100 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Section 4: Brand Name on the Left */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#377A8A]/40 rounded-lg py-1"
            aria-label="Atif I. Malik - Home"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0B1B20] to-[#1B3E4A] border border-[#51AAC0]/30 text-white font-display font-black text-xs flex items-center justify-center tracking-tight shadow-2xs group-hover:border-[#51AAC0] transition-colors shrink-0">
              AIM
            </span>
            <span className="font-display font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-[#377A8A] transition-colors tracking-tight">
              Atif I. Malik
            </span>
          </Link>

          {/* Main Navigation Tabs */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* 1. About */}
            <NavLink
              to="/about"
              onMouseEnter={() => setHoveredNav('About')}
              className={({ isActive }) =>
                `relative px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 ${
                  isActive
                    ? 'text-[#377A8A] font-bold'
                    : 'text-slate-700 hover:text-slate-950'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>About</span>
                  {(isActive || hoveredNav === 'About') && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#377A8A] rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* 3. Expertise */}
            <NavLink
              to="/expertise"
              onMouseEnter={() => setHoveredNav('Expertise')}
              className={({ isActive }) =>
                `relative px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 ${
                  isActive
                    ? 'text-[#377A8A] font-bold'
                    : 'text-slate-700 hover:text-slate-950'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Expertise</span>
                  {(isActive || hoveredNav === 'Expertise') && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#377A8A] rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* 4. Ventures (Links to /ventures with 4-item Dropdown) */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center">
                <NavLink
                  to="/ventures"
                  onMouseEnter={() => setHoveredNav('Ventures')}
                  className={({ isActive }) =>
                    `relative pl-3.5 pr-1 py-2 text-xs font-semibold rounded-l-lg transition-colors duration-150 ${
                      isActive || isVenturesActive
                        ? 'text-[#377A8A] font-bold'
                        : 'text-slate-700 hover:text-slate-950'
                    }`
                  }
                >
                  {() => (
                    <>
                      <span>Ventures</span>
                      {(isVenturesActive || hoveredNav === 'Ventures') && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-2 right-0 h-[2px] bg-[#377A8A] rounded-full"
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>

                {/* Accessible Dropdown Toggle Button */}
                <button
                  type="button"
                  onClick={handleDropdownToggle}
                  aria-expanded={venturesOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Ventures dropdown menu"
                  className={`pr-2.5 pl-0.5 py-2 rounded-r-lg transition-colors duration-150 focus-visible:outline-none ${
                    isVenturesActive ? 'text-[#377A8A]' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      venturesOpen ? 'rotate-180 text-[#377A8A]' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Ventures Dropdown Menu (Simple & Clean) */}
              <AnimatePresence>
                {venturesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute top-full left-0 pt-2 w-[290px] z-50 focus:outline-none"
                  >
                    {/* Mouse gap bridge */}
                    <div className="absolute top-0 left-0 right-0 h-2.5 pointer-events-auto" />

                    <div className="bg-white border border-slate-200/90 rounded-2xl p-2 shadow-[0_16px_36px_-8px_rgba(15,23,42,0.1)] overflow-hidden">
                      <div className="space-y-0.5">
                        {venturesDropdownItems.map((item) => {
                          const isCurrent = location.pathname === item.path;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={handleDropdownLinkClick}
                              className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all ${
                                isCurrent
                                  ? 'bg-brand-wash text-[#377A8A]'
                                  : 'hover:bg-slate-50 text-slate-800'
                              }`}
                            >
                              <div>
                                <span
                                  className={`text-sm font-semibold block transition-colors ${
                                    isCurrent ? 'text-[#377A8A]' : 'group-hover:text-[#377A8A]'
                                  }`}
                                >
                                  {item.name}
                                </span>
                                <span className="text-[11px] text-slate-500 block mt-0.5 font-normal">
                                  {item.desc}
                                </span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#377A8A] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                            </Link>
                          );
                        })}
                      </div>

                      {/* View All Selected Work Link */}
                      <div className="pt-1.5 mt-1.5 border-t border-slate-100">
                        <Link
                          to="/work"
                          onClick={handleDropdownLinkClick}
                          className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-[#377A8A] hover:bg-slate-50 transition-all group"
                        >
                          <span>View All Selected Work</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#377A8A] group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 5. Selected Work */}
            <NavLink
              to="/work"
              onMouseEnter={() => setHoveredNav('Selected Work')}
              className={({ isActive }) =>
                `relative px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 ${
                  isActive
                    ? 'text-[#377A8A] font-bold'
                    : 'text-slate-700 hover:text-slate-950'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Selected Work</span>
                  {(isActive || hoveredNav === 'Selected Work') && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#377A8A] rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* 6. Collaboration */}
            <NavLink
              to="/collaboration"
              onMouseEnter={() => setHoveredNav('Collaboration')}
              className={({ isActive }) =>
                `relative px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 ${
                  isActive
                    ? 'text-[#377A8A] font-bold'
                    : 'text-slate-700 hover:text-slate-950'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Collaboration</span>
                  {(isActive || hoveredNav === 'Collaboration') && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#377A8A] rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </>
              )}
            </NavLink>

          </nav>

          {/* Section 4: Action Button CTA on the Right */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#377A8A] hover:bg-[#2E6877] rounded-full shadow-sm transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/90" />
            </Link>
          </div>

          {/* Section 5: Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#377A8A] shadow-xs"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Section 5: Responsive Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-b border-slate-200 bg-white shadow-lg overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
              
              {/* 1. About */}
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'text-[#377A8A] font-bold bg-brand-wash border border-[#377A8A]/20 shadow-2xs'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950 border border-transparent'
                  }`
                }
              >
                About
              </NavLink>

              {/* 3. Expertise */}
              <NavLink
                to="/expertise"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'text-[#377A8A] font-bold bg-brand-wash border border-[#377A8A]/20 shadow-2xs'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950 border border-transparent'
                  }`
                }
              >
                Expertise
              </NavLink>

              {/* 4. Ventures with Expandable Submenu (4 Links) */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-1">
                <div className="flex items-center justify-between">
                  <NavLink
                    to="/ventures"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#377A8A]"
                  >
                    Ventures
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => setMobileVenturesOpen(!mobileVenturesOpen)}
                    aria-label="Expand Ventures links"
                    aria-expanded={mobileVenturesOpen}
                    className="p-2 text-slate-400 hover:text-slate-700"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileVenturesOpen ? 'rotate-180 text-[#377A8A]' : ''
                      }`}
                    />
                  </button>
                </div>

                {mobileVenturesOpen && (
                  <div className="space-y-1 pt-1 pb-1 px-1 border-t border-slate-200/60 mt-1">
                    {venturesDropdownItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-start gap-2.5 p-2 rounded-lg transition-all border ${
                            isActive
                              ? 'bg-brand-wash border-[#377A8A]/30 text-[#377A8A] font-bold'
                              : 'bg-white hover:bg-slate-100 border-slate-200/60 text-slate-700'
                          }`
                        }
                      >
                        <div className="min-w-0 flex-1">
                          <span className="text-xs font-bold text-slate-900 block">{item.name}</span>
                          <span className="text-[11px] text-slate-500 block mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      </NavLink>
                    ))}
                    <NavLink
                      to="/work"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-100/70 hover:bg-slate-100 text-xs font-bold text-slate-800 hover:text-[#377A8A] transition-colors mt-1"
                    >
                      <span>View All Selected Work</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </NavLink>
                  </div>
                )}
              </div>

              {/* 5. Selected Work */}
              <NavLink
                to="/work"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'text-[#377A8A] font-bold bg-brand-wash border border-[#377A8A]/20 shadow-2xs'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950 border border-transparent'
                  }`
                }
              >
                Selected Work
              </NavLink>

              {/* 6. Collaboration */}
              <NavLink
                to="/collaboration"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'text-[#377A8A] font-bold bg-brand-wash border border-[#377A8A]/20 shadow-2xs'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950 border border-transparent'
                  }`
                }
              >
                Collaboration
              </NavLink>

              {/* Mobile CTA Action Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#377A8A] hover:bg-[#2E6877] shadow-sm text-center"
                >
                  <span>Discuss a Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/90" />
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};