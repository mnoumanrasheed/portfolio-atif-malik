import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { ExecutiveLogo } from '../ui/ExecutiveLogo';

interface ProductItem {
  name: string;
  category: string;
  desc: string;
  path: string;
  badgeColor: string;
  dotColor: string;
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const justClosedRef = useRef(false);

  // Monitor scroll for glass compression effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
    justClosedRef.current = true;
    const t = setTimeout(() => {
      justClosedRef.current = false;
    }, 450);
    return () => clearTimeout(t);
  }, [location.pathname]);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setProductsOpen(false);
        justClosedRef.current = true;
        setTimeout(() => {
          justClosedRef.current = false;
        }, 300);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
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

  // Immediate close upon clicking any item inside dropdown
  const handleProductLinkClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    justClosedRef.current = true;
    setProductsOpen(false);
    setHoveredNav(null);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setTimeout(() => {
      justClosedRef.current = false;
    }, 500);
  };

  // Robust hover management with grace-period debounce to prevent premature dismissal
  const handleDropdownEnter = () => {
    if (justClosedRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setProductsOpen(true);
  };

  const handleDropdownLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // 220ms grace window prevents mouse-out dropouts when traversing gaps or diagonal movements
    timeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 220);
  };

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setProductsOpen((prev) => {
      const next = !prev;
      if (!next) {
        justClosedRef.current = true;
        setTimeout(() => {
          justClosedRef.current = false;
        }, 400);
      }
      return next;
    });
  };

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Ventures', path: '/ventures' },
    { name: 'Selected Work', path: '/work' },
    { name: '360 Technologies', path: '/360-technologies' },
    { name: 'Collaboration', path: '/collaboration' },
    { name: 'Contact', path: '/contact' }
  ];

  const productLinks: ProductItem[] = [
    {
      name: 'NourDoc',
      category: 'HealthTech AI',
      desc: 'AI-enabled clinical documentation platform transforming clinical conversations into structured notes.',
      path: '/products/nourdoc',
      badgeColor: 'text-sky-700 bg-sky-50 border-sky-200/80',
      dotColor: 'bg-sky-500'
    },
    {
      name: 'LeadHive AI',
      category: 'Lead Engagement & Qualification',
      desc: 'AI-enabled lead engagement and qualification engine turning incoming interest into qualified conversations.',
      path: '/products/leadhive-ai',
      badgeColor: 'text-indigo-700 bg-indigo-50 border-indigo-200/80',
      dotColor: 'bg-indigo-500'
    },
    {
      name: 'Smart Animal',
      category: 'AgriTech & IoT',
      desc: 'IoT-based livestock monitoring and insight platform combining connected sensing with digital interfaces.',
      path: '/products/smart-animal',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/80',
      dotColor: 'bg-emerald-500'
    }
  ];

  const isProductsActive = location.pathname.startsWith('/products');

  return (
    <header className="fixed top-2.5 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto rounded-2xl sm:rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl backdrop-saturate-200 border border-slate-200/90 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.16),0_0_0_1px_rgba(255,255,255,0.9)_inset] py-2 px-4 sm:px-5'
            : 'bg-white/75 backdrop-blur-2xl backdrop-saturate-150 border border-white/80 shadow-[0_12px_36px_-8px_rgba(15,23,42,0.09),0_0_0_1px_rgba(255,255,255,0.85)_inset] py-2.5 px-4 sm:px-6'
        } relative flex items-center justify-between`}
      >
        {/* Top Hairline Ambient Accent & Specular Reflection */}
        <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#51AAC0]/40 to-transparent pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none rounded-full" />

        {/* Identity & Monogram (Operates as Home / Overview Trigger) */}
        <Link
          to="/"
          className="flex items-center group focus-visible:outline-none transition-transform duration-200 hover:scale-[1.01]"
          aria-label="Atif I. Malik - Home & Overview"
          title="Atif I. Malik - Home & Overview"
        >
          <ExecutiveLogo size="md" variant="horizontal" theme="light" />
        </Link>

        {/* Desktop Navigation */}
        <nav 
          className="hidden lg:flex items-center gap-1 xl:gap-1.5" 
          aria-label="Main Navigation"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {/* Products Animated Dropdown (With Hover Bridge & Grace Period) */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={handleDropdownToggle}
              onMouseEnter={() => setHoveredNav('products')}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              className={`relative flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 ${
                isProductsActive
                  ? 'text-brand font-bold bg-[#E6F4F7]/85 backdrop-blur-sm border border-[#51AAC0]/30 shadow-xs'
                  : 'text-slate-700 hover:text-slate-950 border border-transparent'
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-250 ease-out ${
                  productsOpen ? 'rotate-180 text-brand' : ''
                }`}
              />

              {hoveredNav === 'products' && !isProductsActive && (
                <motion.div
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 bg-slate-900/[0.04] backdrop-blur-xs border border-slate-900/[0.05] rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
            </button>

            {/* Animated Dropdown Menu with Anti-Disappearance Bridge */}
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 pt-3 w-[340px] z-50 focus:outline-none"
                >
                  {/* INVISIBLE MOUSE BRIDGE */}
                  <div className="absolute top-0 left-0 right-0 h-4 pointer-events-auto" />

                  {/* Dropdown Card Container with Luxury Glassmorphism */}
                  <div className="bg-white/90 backdrop-blur-2xl backdrop-saturate-200 border border-white/90 rounded-2xl p-2.5 shadow-[0_25px_60px_-12px_rgba(15,23,42,0.18),0_0_0_1px_rgba(15,23,42,0.05)]">
                      
                      {/* Dropdown Header */}
                      <div className="px-3 py-2 flex items-center justify-between border-b border-slate-100 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-brand" />
                          <span className="text-[10px] font-mono uppercase tracking-wider text-brand font-bold">
                            Priority M3 Hive Products
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold bg-slate-100 px-2 py-0.5 rounded-full">
                          3 Flagships
                        </span>
                      </div>

                      {/* Product Item Cards */}
                      <div className="space-y-1">
                        {productLinks.map((p) => {
                          const isCurrent = location.pathname === p.path;
                          return (
                            <Link
                              key={p.path}
                              to={p.path}
                              onClick={handleProductLinkClick}
                              className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all border ${
                                isCurrent
                                  ? 'bg-brand-wash/80 border-brand/20 shadow-xs'
                                  : 'hover:bg-slate-50/90 border-transparent hover:border-slate-200/60'
                              }`}
                            >
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-white border border-slate-200/80 shadow-xs group-hover:scale-105 transition-transform">
                                <span className={`w-2.5 h-2.5 rounded-full ${p.dotColor} animate-pulse`} />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-slate-900 group-hover:text-brand transition-colors">
                                    {p.name}
                                  </span>
                                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                                    {p.category}
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-500 leading-snug mt-1 line-clamp-2">
                                  {p.desc}
                                </p>
                              </div>

                              <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all mt-1 shrink-0" />
                            </Link>
                          );
                        })}
                      </div>

                      {/* Dropdown Footer: Link to Ventures */}
                      <div className="mt-2 pt-2 border-t border-slate-100">
                        <Link
                          to="/ventures"
                          onClick={handleProductLinkClick}
                          className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 hover:bg-brand-wash text-slate-700 hover:text-brand text-xs font-semibold transition-all group border border-slate-200/60 hover:border-brand/30"
                        >
                          <span>Explore All Ventures &amp; Architecture</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                        </Link>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard Nav Links */}
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onMouseEnter={() => setHoveredNav(link.name)}
                className={({ isActive }) =>
                  `relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 ${
                    isActive
                      ? 'text-brand font-bold bg-[#E6F4F7]/85 backdrop-blur-sm border border-[#51AAC0]/30 shadow-xs'
                      : 'text-slate-700 hover:text-slate-950 border border-transparent'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {hoveredNav === link.name && !isActive && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 bg-slate-900/[0.04] backdrop-blur-xs border border-slate-900/[0.05] rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA with Live Indicator */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-brand via-[#2E6877] to-brand hover:from-[#2E6877] hover:to-brand rounded-full shadow-[0_4px_16px_rgba(55,122,138,0.28)] hover:shadow-[0_6px_22px_rgba(55,122,138,0.4)] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] border border-white/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              <span>Discuss a Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full border border-white/80 bg-white/70 backdrop-blur-lg text-slate-700 hover:bg-white hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand shadow-xs"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

      {/* Mobile Animated Floating Glassmorphism Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto lg:hidden mt-2 overflow-hidden rounded-2xl border border-white/90 bg-white/95 backdrop-blur-2xl backdrop-saturate-200 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.2)]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-4">
              
              <div className="space-y-1">
                {/* Priority Products Accordion on Mobile */}
                <div className="pb-1">
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider"
                  >
                    <span className="flex items-center gap-1.5 text-brand">
                      <Sparkles className="w-3.5 h-3.5" />
                      Priority Products
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        mobileProductsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {mobileProductsOpen && (
                    <div className="space-y-1.5 mt-1.5 pl-2">
                      {productLinks.map((p) => (
                        <NavLink
                          key={p.path}
                          to={p.path}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileProductsOpen(false);
                          }}
                          className={({ isActive }) =>
                            `flex items-start gap-3 px-3 py-2.5 rounded-xl border transition-all ${
                              isActive
                                ? 'bg-[#E6F4F7]/85 backdrop-blur-sm border-[#51AAC0]/30 shadow-xs'
                                : 'bg-white/50 backdrop-blur-sm border-white/80 hover:bg-white/80'
                            }`
                          }
                        >
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-white border border-slate-200/80 shadow-xs">
                            <span className={`w-2 h-2 rounded-full ${p.dotColor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900">
                                {p.name}
                              </span>
                              <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full border ${p.badgeColor}`}>
                                {p.category}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-500 block mt-0.5">
                              {p.desc}
                            </span>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>

                {/* Standard Nav Links on Mobile */}
                <div className="pt-2 border-t border-slate-200/60 space-y-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                          isActive
                            ? 'text-brand font-bold bg-[#E6F4F7]/85 backdrop-blur-sm border border-[#51AAC0]/30 shadow-xs'
                            : 'text-slate-700 hover:bg-white/70 hover:text-slate-950 border border-transparent'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-3 border-t border-slate-100">
                <Button 
                  to="/contact" 
                  size="md" 
                  variant="primary" 
                  className="w-full shadow-soft" 
                  showArrow
                  onClick={() => setIsOpen(false)}
                >
                  Discuss a Project
                </Button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
