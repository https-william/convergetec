import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';

interface HeroDivision {
  id: string;
  tabLabel: string;
  name: string;
  eyebrow: string;
  description: string;
  href: string;
  accentColor: string;
  accentBorder: string;
  tags: string[];
  deliverable: string;
}

const heroDivisions: HeroDivision[] = [
  {
    id: 'consulting',
    tabLabel: '01 Advisory',
    name: 'ConvergeTec Consulting',
    eyebrow: 'Strategy & Delivery',
    description:
      'Rigorous advisory and transformation services across business analysis, project delivery, change management, and data & AI strategy.',
    href: '/services/consulting',
    accentColor: 'text-cyan',
    accentBorder: 'border-l-cyan',
    tags: ['Business Analysis', 'Project Delivery', 'Change Management', 'Data & AI Strategy'],
    deliverable: 'Defensible roadmaps built to survive contact with implementation.',
  },
  {
    id: 'software',
    tabLabel: '02 Software',
    name: 'ConvergeTec Digital & Software',
    eyebrow: 'Engineering & Cloud',
    description:
      'Custom cloud software, SaaS products, automated workflow systems, and enterprise architecture integration engineered around how your business actually runs.',
    href: '/services/digital-software',
    accentColor: 'text-blue',
    accentBorder: 'border-l-blue',
    tags: ['Custom SaaS', 'Cloud Microservices', 'API Integration', 'Workflow Automation'],
    deliverable: 'Scalable production software tailored to real operating models.',
  },
  {
    id: 'academy',
    tabLabel: '03 Academy',
    name: 'ConvergeTec Academy',
    eyebrow: 'Workforce Capability',
    description:
      'Corporate training, executive masterclasses, and online learning in business analysis, transformation methodologies, and technology leadership.',
    href: '/services/academy',
    accentColor: 'text-cyan',
    accentBorder: 'border-l-cyan',
    tags: ['Enterprise Training', 'Transformation Leadership', 'Methodology Certs', 'Workforce Upskilling'],
    deliverable: 'Lasting internal capability that outlasts external consulting engagements.',
  },
  {
    id: 'talent',
    tabLabel: '04 Talent',
    name: 'ConvergeTec Resources & Talent',
    eyebrow: 'Contract & Fractional',
    description:
      'Vetted contract professionals, delivery specialists, and fractional executives deployed directly into critical transformation initiatives.',
    href: '/services/resources-talent',
    accentColor: 'text-blue',
    accentBorder: 'border-l-blue',
    tags: ['Fractional Executives', 'Delivery Leads', 'Specialist Placement', 'Embedded Teams'],
    deliverable: 'Proven senior capability placed precisely where you need it.',
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<string>('consulting');
  const activeDivision = heroDivisions.find((d) => d.id === activeTab) || heroDivisions[0];

  return (
    <section className="relative w-full bg-offwhite min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24 border-b border-navy/10">
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Command & Narrative (~55%) */}
          <div className="lg:col-span-7 xl:col-span-6 relative z-10">
            {/* Architectural System Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-navy/15 bg-navy/5 text-navy/75 text-xs font-mono tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
              Australian Transformation &amp; Technology Partner
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] font-bold font-display text-navy leading-[1.08] tracking-tight mb-6">
              Advise. Transform. Build. Equip. Scale.
            </h1>

            <p className="font-body text-lg sm:text-xl text-ink/85 leading-relaxed max-w-[600px] mb-8 sm:mb-10">
              ConvergeTec is an Australian business transformation and technology
              partner — helping organisations improve how they operate, equip
              their people, and use technology to scale.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12">
              <Button
                to="/contact"
                variant="primary"
                className="px-8 py-4 text-base sm:text-lg shadow-md shadow-blue/20"
              >
                Book a Discovery Call
              </Button>
              <a
                href="#divisions-grid"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base sm:text-lg font-semibold text-navy hover:text-blue transition-colors duration-200 group no-underline"
              >
                <span>Explore the Four Divisions</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200 text-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            {/* Operating Metrics Bar */}
            <div className="pt-8 border-t border-navy/10 grid grid-cols-3 gap-4 sm:gap-6 max-w-[560px]">
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-navy">04</div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink/60 mt-1">
                  Divisions
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-navy">End-to-End</div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink/60 mt-1">
                  Delivery
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-navy">SYD &amp; MEL</div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink/60 mt-1">
                  Australia
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Transformation Engine Terminal (~45%) */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <div
              data-glow-zone="true"
              className="w-full bg-navy text-offwhite rounded-2xl border border-navy-light shadow-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Top 1px precision datum highlight rail */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
                aria-hidden="true"
              />

              {/* Terminal Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-navy-light/80 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-[0.16em] font-semibold text-cyan">
                    System Architecture // Matrix
                  </span>
                </div>
                <span className="font-mono text-[11px] text-offwhite/50 tracking-widest hidden sm:inline-block">
                  4 DIVISIONS CONNECTED
                </span>
              </div>

              {/* Interactive Division Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-xl bg-navy-light/60 border border-navy-light mb-6">
                {heroDivisions.map((div) => {
                  const isSelected = activeTab === div.id;
                  return (
                    <button
                      key={div.id}
                      type="button"
                      onClick={() => setActiveTab(div.id)}
                      className={`relative px-2.5 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 text-center cursor-pointer border-0 ${
                        isSelected
                          ? 'text-white'
                          : 'text-offwhite/60 hover:text-offwhite hover:bg-navy-light/40'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="active-hero-tab"
                          className="absolute inset-0 bg-blue rounded-lg shadow-sm"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{div.tabLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Division Capability Console */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDivision.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex flex-col justify-between min-h-[260px]"
                >
                  <div>
                    {/* Eyebrow & Name */}
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-[11px] uppercase tracking-widest font-semibold ${activeDivision.accentColor}`}>
                        {activeDivision.eyebrow}
                      </span>
                      <span className="font-mono text-[11px] text-offwhite/40">
                        STATUS: DEPLOYED
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                      {activeDivision.name}
                    </h3>

                    <p className="font-body text-sm text-offwhite/80 leading-relaxed mb-5">
                      {activeDivision.description}
                    </p>

                    {/* Capability Chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {activeDivision.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide bg-navy-light/70 text-offwhite/90 border border-navy-light/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverable Callout & Action Link */}
                  <div className="pt-4 border-t border-navy-light/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-body text-offwhite/70 max-w-xs leading-relaxed">
                      <span className="text-white font-medium">Outcome:</span>{' '}
                      {activeDivision.deliverable}
                    </div>

                    <Link
                      to={activeDivision.href}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-cyan hover:underline no-underline shrink-0"
                    >
                      <span>Explore Practice</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
