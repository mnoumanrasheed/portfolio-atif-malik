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
      setScrolled(window.scrollY > 20);
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
    { name: 'M3 Hive', path: '/m3-hive' },
    { name: 'Selected Work', path: '/work' },
    { name: '360 Technologies', path: '/360-technologies' },
    { name: 'Collaboration', path: '/collaboration' },
    { name: 'References', path: '/insights' }
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
          ? 'bg-black/95 backdrop-blur-md border-b border-neutral-800 py-4 shadow-subtle'
          : 'bg-black/80 backdrop-blur-sm border-b border-neutral-900 py-6'
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
            <div className="flex h-8 w-8 items-center justify-center border border-white bg-black text-white group-hover:bg-white group-hover:text-black transition-colors">
              <span className="font-mono text-xs font-bold tracking-tight">AIM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-tight text-white uppercase group-hover:text-neutral-300 transition-colors">
                Atif I. Malik
              </span>
              <span className="font-mono text-[9px] text-neutral-400 tracking-[0.2em] uppercase">
                Executive Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3" aria-label="Main Navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs font-mono uppercase tracking-widest transition-colors ${
                  isActive
                    ? 'text-white border-b border-white'
                    : 'text-neutral-400 hover:text-white'
                }`
              }
            >
              Overview
            </NavLink>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                onMouseEnter={() => setProductsOpen(true)}
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-mono uppercase tracking-widest transition-colors ${
                  location.pathname.startsWith('/products')
                    ? 'text-white border-b border-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
                aria-expanded={productsOpen}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsOpen && (
                <div
                  onMouseLeave={() => setProductsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 border border-neutral-800 bg-black p-3 shadow-elevated z-50"
                >
                  <div className="px-3 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-500 border-b border-neutral-900 mb-1">
                    Priority M3 Hive Products
                  </div>
                  {productLinks.map((p) => (
                    <Link
                      key={p.path}
                      to={p.path}
                      className="block px-3 py-2.5 hover:bg-neutral-900 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase group-hover:underline">
                          {p.name}
                        </span>
                        <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 block mt-0.5">
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
                  `px-3 py-1.5 text-xs font-mono uppercase tracking-widest transition-colors ${
                    isActive
                      ? 'text-white border-b border-white'
                      : 'text-neutral-400 hover:text-white'
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
              Discuss a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-neutral-800 text-white hover:bg-neutral-900"
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
        <div className="lg:hidden border-b border-neutral-800 bg-black px-6 pt-6 pb-8 mt-4 space-y-6">
          <div className="space-y-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block py-2 text-sm font-mono uppercase tracking-widest ${
                  isActive ? 'text-white font-bold underline' : 'text-neutral-400'
                }`
              }
            >
              Overview
            </NavLink>

            <div className="pt-4 pb-2 border-t border-neutral-900">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                Priority Products
              </span>
              <div className="mt-2 space-y-2 pl-3">
                {productLinks.map((p) => (
                  <NavLink
                    key={p.path}
                    to={p.path}
                    className={({ isActive }) =>
                      `block py-1 text-xs font-mono uppercase ${
                        isActive ? 'text-white font-bold' : 'text-neutral-400'
                      }`
                    }
                  >
                    {p.name} — <span className="text-neutral-500">{p.desc}</span>
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-900 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-2 text-sm font-mono uppercase tracking-widest ${
                      isActive ? 'text-white font-bold underline' : 'text-neutral-400'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-900">
            <Button to="/contact" size="md" variant="primary" className="w-full">
              Discuss a Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
