import React from 'react';
import { Target, Layers, Compass, ShieldCheck } from 'lucide-react';
import { EXECUTIVE_PROFILE, LEADERSHIP_PRINCIPLES } from '../content/portfolio';
import { ExecutiveMonogram } from '../components/ui/ExecutiveMonogram';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';

const PRINCIPLE_ICONS = [Target, Layers, Compass, ShieldCheck];

export const About: React.FC = () => {
  return (
    <div className="bg-canvas text-ink selection:bg-brand-wash selection:text-brand-dark">
      {/* Editorial Hero Header with Architectural Background */}
      <HeroBackground 
        imageSrc="/images/heroes/hero-about.jpg" 
        imageAlt="Executive Architecture & Boardroom"
        glowColor="teal"
        className="pt-28 sm:pt-36 pb-16 sm:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl space-y-4">
              <span className="eyebrow text-brand">Executive Profile</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                {EXECUTIVE_PROFILE.name}
              </h1>
              <p className="text-lg sm:text-xl text-brand font-semibold tracking-tight">
                {EXECUTIVE_PROFILE.professionalPositioning}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 border border-slate-200/90 text-brand shadow-xs">
                  {EXECUTIVE_PROFILE.currentRole}
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 border border-slate-200/90 text-slate-700 shadow-xs">
                  {EXECUTIVE_PROFILE.separateAffiliation}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      {/* =========================================================================
          SECTION 1: EXECUTIVE STORY & LEADERSHIP ARCHITECTURE (Balanced 2-Col Grid)
          ========================================================================= */}
      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Narrative: Executive Story & Journey */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Section A: Executive Biography */}
            <ScrollReveal>
              <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-soft space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand border-b border-slate-100 pb-3">
                  Executive Biography
                </div>

                <div className="space-y-4 text-slate-700 text-base leading-relaxed font-normal">
                  <p>
                    Atif I. Malik is a technology entrepreneur and business leader focused on product development, applied artificial intelligence, data-driven platforms and digital transformation.
                  </p>
                  <p>
                    As CEO of M3 Hive, he works with teams and partners to shape practical technology solutions around real business and operational needs.
                  </p>
                  <p>
                    M3 Hive&apos;s current product focus includes NourDoc, an AI-enabled clinical documentation platform; LeadHive AI, a lead engagement and qualification engine; and Smart Animal, an IoT-based livestock monitoring and insight platform.
                  </p>
                  <p>
                    Atif is also a Founding CEO, Director and Shareholder of 360 Technologies, a separate technology-services company with a published history across enterprise systems, public-sector digitisation, data services and professional capability development.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section B: Leadership Journey */}
            <ScrollReveal delay={0.08}>
              <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-soft space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand border-b border-slate-100 pb-3">
                  Leadership Journey
                </div>

                <div className="space-y-4 text-slate-700 text-base leading-relaxed font-normal">
                  <p>
                    Atif I. Malik&apos;s work sits at the intersection of business needs, product strategy and technology execution.
                  </p>
                  <p>
                    His approach starts with the problem to be solved: where work is repetitive, information is fragmented, customer engagement is inconsistent, or decisions depend on data that is difficult to access and interpret.
                  </p>
                  <p>
                    From there, he helps connect domain expertise, user needs, product design, engineering and applied AI into a coherent delivery path.
                  </p>
                  <p>
                    As CEO of M3 Hive, Atif leads a technology company whose capabilities span digital product engineering, intelligent automation, data and AI, cloud platforms, customer experience and connected systems.
                  </p>
                  <p>
                    Its current product priorities reflect three distinct opportunities: reducing documentation friction in healthcare through NourDoc; improving lead engagement and qualification through LeadHive AI; and using connected sensing and analytics to support livestock monitoring through Smart Animal.
                  </p>
                  <p>
                    Atif is also a Founding CEO, Director and Shareholder of 360 Technologies.
                  </p>
                  <p>
                    The company&apos;s published historical portfolio includes public-sector information systems, postal workflows, digitisation, enterprise data and business intelligence, outsourcing and professional training.
                  </p>
                  <p className="text-sm text-slate-500 pt-3 border-t border-slate-100">
                    These achievements must be presented as company history, not as a claim that Atif personally delivered every assignment.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Executive Monogram & Verified Affiliations */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.15}>
              <ExecutiveMonogram />
            </ScrollReveal>

            {/* Verified Corporate Affiliations */}
            <ScrollReveal delay={0.18}>
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-soft space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand border-b border-slate-100 pb-2">
                  Company Affiliations
                </div>
                
                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/70 space-y-1">
                    <span className="text-[11px] font-bold text-brand uppercase tracking-wider">Primary Company Focus</span>
                    <h4 className="font-display font-bold text-sm text-slate-900">Chief Executive Officer</h4>
                    <p className="text-xs text-slate-600">M3 Hive · Digital products, intelligent workflows &amp; applied AI</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/70 space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Separate Company Association</span>
                    <h4 className="font-display font-bold text-sm text-slate-900">Founding CEO, Director &amp; Shareholder</h4>
                    <p className="text-xs text-slate-600">360 Technologies · Enterprise systems &amp; public sector digitization</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 2: GUIDING APPROACH & LEADERSHIP PRINCIPLES (Full-Width Responsive 4-Col Grid)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-50/60 via-slate-50 to-white border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <span className="eyebrow text-brand">Guiding Approach</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Leadership Principles
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
                Core strategic and delivery principles guiding applied AI evaluation, operational readiness, and technology execution.
              </p>
            </div>
          </ScrollReveal>

          {/* Full-width 4-column cards grid: spans the entire container width */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_PRINCIPLES.map((pillar, idx) => {
              const Icon = PRINCIPLE_ICONS[idx % PRINCIPLE_ICONS.length];
              return (
                <ScrollReveal key={idx} delay={0.06 * idx}>
                  <div className="h-full p-6 sm:p-7 bg-white border border-slate-200/90 rounded-2xl shadow-soft hover:shadow-card hover:border-[#377A8A]/50 transition-all flex flex-col justify-between group relative overflow-hidden">
                    
                    {/* Subtle top indicator hover line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#377A8A] transition-colors" />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#377A8A] text-slate-700 group-hover:text-white font-mono font-bold text-xs flex items-center justify-center transition-colors shadow-2xs">
                          0{idx + 1}
                        </span>
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-[#377A8A] transition-colors" />
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-[#377A8A] transition-colors leading-snug">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-2">
                          {pillar.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-mono font-medium text-slate-400 group-hover:text-[#377A8A] transition-colors">
                      Principle 0{idx + 1}
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Action CTAs aligned with full width */}
          <ScrollReveal delay={0.25}>
            <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-wrap items-center gap-4">
              <Button to="/contact" variant="primary" showArrow>
                Discuss a Project
              </Button>
              <Button to="/ventures" variant="secondary">
                Explore Ventures
              </Button>
              <Button to="/expertise" variant="outline">
                Explore Expertise
              </Button>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
};
