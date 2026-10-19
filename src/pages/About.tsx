import React from 'react';
import { 
  Target, 
  Layers, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { HeroBackground } from '../components/ui/HeroBackground';

export const About: React.FC = () => {
  const leadershipApproach = [
    {
      number: '01',
      icon: Target,
      text: 'Start with the operational reality and define the outcome before selecting the technology.'
    },
    {
      number: '02',
      icon: Layers,
      text: 'Bring domain expertise, user needs, product design and engineering into the same conversation.'
    },
    {
      number: '03',
      icon: Compass,
      text: 'Choose a practical path: discovery, prototype, pilot, integration or a defined engineering engagement.'
    },
    {
      number: '04',
      icon: ShieldCheck,
      text: 'Treat adoption, trust, data governance and commercial viability as part of product design—not afterthoughts.'
    }
  ];

  return (
    <div className="bg-canvas text-ink selection:bg-brand-wash selection:text-brand-dark min-h-screen">
      
      {/* =========================================================================
          HERO: EXACT APPROVED EXECUTIVE HERO (MATCHING VERCEL PRODUCTION REFERENCE)
          ========================================================================= */}
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
                Atif I. Malik
              </h1>
              <p className="text-lg sm:text-xl text-brand font-semibold tracking-tight">
                Technology &amp; AI Executive <span className="text-[#286252] mx-1 font-normal">|</span> AI Product Innovator
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white/95 border border-slate-200/90 text-slate-800 shadow-2xs">
                  Chief Executive Officer, M3 Hive
                </span>
                <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white/95 border border-slate-200/90 text-slate-800 shadow-2xs">
                  Founding CEO, Director &amp; Shareholder, 360 Technologies
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </HeroBackground>

      {/* =========================================================================
          EXECUTIVE NARRATIVE: EXACT APPROVED TEXT
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="space-y-8 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              
              {/* Paragraph 1 */}
              <p className="border-l-2 border-[#286252] pl-5 sm:pl-6 text-slate-900 font-medium text-lg sm:text-xl leading-relaxed">
                Atif I. Malik’s work sits at the intersection of business needs, product strategy and technology execution. His approach starts with the problem to be solved: where work is repetitive, information is fragmented, customer engagement is inconsistent, or decisions depend on data that is difficult to access and interpret. From there, he helps connect domain expertise, user needs, product design, engineering and applied AI into a coherent delivery path.
              </p>

              {/* Paragraph 2 */}
              <p>
                As CEO of M3 Hive, Atif leads a technology company whose capabilities span digital product engineering, intelligent automation, data and AI, cloud platforms, customer experience and connected systems. Its current product priorities reflect three distinct opportunities: reducing documentation friction in healthcare through{' '}
                <a
                  href="https://nour-doc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand font-semibold hover:underline"
                >
                  NourDoc
                </a>
                ; improving lead engagement and qualification through{' '}
                <a
                  href="https://leadhive-ai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand font-semibold hover:underline"
                >
                  LeadHive AI
                </a>
                ; and using connected sensing and analytics to support livestock monitoring through Smart Animal.
              </p>

              {/* Paragraph 3 */}
              <p>
                Atif is also a Founding CEO, Director and Shareholder of 360 Technologies. The company’s published portfolio includes public-sector information systems, postal workflows, digitisation, enterprise data and business intelligence, outsourcing and professional training. These achievements are presented as company history, not as a claim that Atif personally delivered every listed assignment.
              </p>

              {/* Paragraph 4 */}
              <p className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-800">
                The purpose of this website is to help investors understand product opportunities, help collaborators identify where their expertise or networks can contribute, and help prospective clients map their challenges to a suitable product, proof of concept or engineering engagement.
              </p>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          LEADERSHIP APPROACH: EXACT APPROVED BULLET POINTS
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-canvas-subtle border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Leadership approach
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {leadershipApproach.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.06}>
                  <div className="p-7 sm:p-8 bg-white border border-slate-200/90 rounded-2xl shadow-soft hover:shadow-card hover:border-[#377A8A]/40 transition-all flex items-start gap-4 h-full">
                    <div className="w-10 h-10 rounded-xl bg-brand-wash text-brand border border-brand/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {item.number}
                      </span>
                      <p className="text-base text-slate-800 leading-relaxed font-normal">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>


    </div>
  );
};
