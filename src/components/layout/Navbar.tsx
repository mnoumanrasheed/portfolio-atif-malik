import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setProductsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Ventures', path: '/ventures' },
    { name: 'Selected Work', path: '/work' },
    { name: '360 Technologies', path: '/360-technologies' },
    { name: 'Collaboration', path: '/collaboration' },
    { name: 'Insights', path: '/insights' }
  ];

  const productLinks = [
    { name: 'NourDoc', desc: 'Clinical Documentation AI', path: '/products/nourdoc' },
    { name: 'LeadHive AI', desc: 'Lead Engagement Engine', path: '/products/leadhive-ai' },
    { name: 'Smart Animal', desc: 'Livestock IoT & Telemetry', path: '/products/smart-animal' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-line py-3.5 shadow-soft'
          : 'bg-white/85 backdrop-blur-sm border-b border-line/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Identity & Monogram */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Atif I. Malik - Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white font-display font-bold text-xs tracking-wider group-hover:bg-brand-hover transition-colors shadow-sm">
              AIM
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-ink group-hover:text-brand transition-colors">
                Atif I. Malik
              </span>
              <span className="text-[11px] text-ink-muted leading-none">
                Chief Executive Officer, M3 Hive
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs font-semibold transition-colors rounded-md ${
                  isActive
                    ? 'text-brand font-bold bg-brand-wash shadow-sm'
                    : 'text-ink-body hover:text-ink hover:bg-canvas-subtle'
                }`
              }
            >
              Overview
            </NavLink>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                onMouseEnter={() => setProductsOpen(true)}
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold transition-colors rounded-md ${
                  location.pathname.startsWith('/products')
                    ? 'text-brand font-bold bg-brand-wash shadow-sm'
                    : 'text-ink-body hover:text-ink hover:bg-canvas-subtle'
                }`}
                aria-expanded={productsOpen}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-brand' : ''}`} />
              </button>

              {productsOpen && (
                <div
                  className="absolute top-full left-0 mt-1.5 w-64 border border-line bg-white rounded-card p-2 shadow-card z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-brand font-bold border-b border-line mb-1">
                    Priority M3 Hive Products
                  </div>
                  {productLinks.map((p) => (
                    <Link
                      key={p.path}
                      to={p.path}
                      className="block px-3 py-2 rounded-md hover:bg-brand-wash/60 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-ink group-hover:text-brand transition-colors">
                          {p.name}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-ink-subtle group-hover:text-brand transition-colors" />
                      </div>
                      <span className="text-[11px] text-ink-muted block mt-0.5">
                        {p.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs font-semibold transition-colors rounded-md ${
                    isActive
                      ? 'text-brand font-bold bg-brand-wash shadow-sm'
                      : 'text-ink-body hover:text-ink hover:bg-canvas-subtle'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button to="/contact" size="sm" variant="primary">
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md border border-line text-ink hover:bg-canvas-subtle"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-line bg-white px-6 pt-4 pb-6 mt-3 space-y-4 shadow-card">
          <div className="space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-3 py-2 text-sm rounded-md ${
                  isActive ? 'text-accent font-semibold bg-accent-wash' : 'text-ink-body'
                }`
              }
            >
              Overview
            </NavLink>

            <div className="pt-2 pb-1 border-t border-line">
              <span className="px-3 text-[11px] uppercase tracking-wider text-ink-subtle font-medium block mb-1">
                Priority Products
              </span>
              <div className="space-y-1">
                {productLinks.map((p) => (
                  <NavLink
                    key={p.path}
                    to={p.path}
                    className={({ isActive }) =>
                      `block px-3 py-1.5 text-xs rounded-md ${
                        isActive ? 'text-accent font-semibold bg-accent-wash' : 'text-ink-body hover:bg-canvas-subtle'
                      }`
                    }
                  >
                    <span className="font-medium text-ink">{p.name}</span>
                    <span className="text-ink-muted ml-1.5 text-[11px]">· {p.desc}</span>
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-line space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-sm rounded-md ${
                      isActive ? 'text-accent font-semibold bg-accent-wash' : 'text-ink-body hover:bg-canvas-subtle'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-line">
            <Button to="/contact" size="md" variant="primary" className="w-full">
              Let's Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
