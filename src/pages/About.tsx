import React from 'react';
import { EXECUTIVE_PROFILE, LEADERSHIP_PRINCIPLES } from '../content/portfolio';
import { ExecutiveMonogram } from '../components/ui/ExecutiveMonogram';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';

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

      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Narrative & Monogram Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Narrative: Executive Story */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Section A: Executive Biography */}
            <ScrollReveal>
              <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-soft space-y-5">
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
              <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-soft space-y-5">
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
                  <p className="text-sm text-slate-500 pt-2 border-t border-slate-100">
                    These achievements must be presented as company history, not as a claim that Atif personally delivered every assignment.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section C: Leadership Approach (Exactly Four Principles) */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <div>
                  <div className="eyebrow text-brand mb-1">Guiding Approach</div>
                  <h3 className="font-display font-extrabold text-2xl text-slate-900">
                    Leadership Principles
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {LEADERSHIP_PRINCIPLES.map((pillar, idx) => (
                    <div 
                      key={idx}
                      className="p-5 bg-white border border-slate-200/90 rounded-xl shadow-soft space-y-2.5 hover:border-brand/40 hover:shadow-card transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                        0{idx + 1}
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
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
          </div>

          {/* Right Column: Executive Monogram & Affiliations */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal delay={0.15}>
              <ExecutiveMonogram />
            </ScrollReveal>

            {/* Verified Corporate Affiliations */}
            <ScrollReveal delay={0.18}>
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-soft space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand border-b border-slate-100 pb-2">
                  Company Affiliations
                </div>
                
                <div className="space-y-4">
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
    </div>
  );
};
