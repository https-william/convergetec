import { motion } from 'framer-motion';
import Button from './Button';
import { DoodleUnderline } from './Doodles';
import { ArrowDown, CheckCircle2, Compass, Code2, GraduationCap, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-offwhite flex items-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 border-b border-navy/10">
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Command & Positioning (~55%) */}
          <div className="lg:col-span-7 xl:col-span-6 relative z-10 flex flex-col justify-center">
            {/* High-Converting Outcome-Driven Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] font-bold font-display text-navy leading-[1.08] tracking-tight mb-6">
              Turn boardroom strategy into{' '}
              <span className="relative inline-block">
                live production software.
                <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full pointer-events-none">
                  <DoodleUnderline color="#0078E0" className="w-full h-auto" />
                </span>
              </span>
              <span className="block text-blue font-semibold text-2xl sm:text-3xl md:text-[2.1rem] mt-3 sm:mt-4 tracking-tight leading-snug">
                Without the vendor handoff friction.
              </span>
            </h1>

            {/* Sharp Value Proposition Subheadline */}
            <p className="text-lg sm:text-xl text-ink/80 leading-relaxed max-w-[580px] mb-8 sm:mb-10 font-normal">
              ConvergeTec bridges the costly divide between executive advisory and real-world execution.
              We unite strategic advisory, custom cloud engineering, workforce capability, and elite contract
              talent into one accountable engine.
            </p>

            {/* Primary & Secondary Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <Button
                to="/contact"
                variant="primary"
                className="px-8 py-4 text-base sm:text-lg shadow-xl shadow-blue/20 w-full sm:w-auto font-display font-semibold text-center"
              >
                Book an Executive Discovery Call
              </Button>

              <a
                href="#divisions-grid"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 sm:px-5 sm:py-4 text-base font-semibold text-navy hover:text-blue transition-colors duration-200 group no-underline font-display"
              >
                <span>Explore the 4 Divisions</span>
                <ArrowDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200 text-blue" />
              </a>
            </div>

            {/* Above-the-Fold Trust Signals & Risk Reversal */}
            <div className="pt-6 sm:pt-8 border-t border-navy/10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[560px]">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-navy/85 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                <span>1 Single Accountable Partner</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-navy/85 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                <span>Zero Handoff Delay &amp; Lost Context</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-navy/85 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                <span>100% Retained Internal IP</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-navy/85 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                <span>Sydney &amp; Melbourne Practice Leads</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Proof ("The Live Transformation Showcase") */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden border border-navy/15 shadow-2xl shadow-navy/10 bg-navy aspect-[16/12] sm:aspect-[16/11] lg:aspect-[4/3] group"
            >
              {/* Flagship Photography */}
              <img
                src="/images/hero-enterprise-flagship.jpg"
                alt="ConvergeTec leadership and technology partners in executive boardroom overlooking Sydney Harbour"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Contrast scrim */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Integrated Transformation Command Deck (Floating Showcase) */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 rounded-2xl bg-navy/90 backdrop-blur-xl border border-white/20 p-4 sm:p-5 text-offwhite shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                    <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-white">
                      Unified Delivery Engine
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-offwhite/60 tracking-wider hidden sm:inline uppercase">
                    Sydney &amp; Melbourne
                  </span>
                </div>

                {/* 4 Connected Transformation Vectors */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-3">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                    <Compass className="w-3.5 h-3.5 text-cyan shrink-0" />
                    <div className="truncate">
                      <div className="font-mono text-[10px] text-white/50 uppercase">01 Strategy</div>
                      <div className="text-xs font-semibold text-white truncate">Target Model</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                    <Code2 className="w-3.5 h-3.5 text-blue shrink-0" />
                    <div className="truncate">
                      <div className="font-mono text-[10px] text-white/50 uppercase">02 Software</div>
                      <div className="text-xs font-semibold text-white truncate">Production SaaS</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan shrink-0" />
                    <div className="truncate">
                      <div className="font-mono text-[10px] text-white/50 uppercase">03 Academy</div>
                      <div className="text-xs font-semibold text-white truncate">Team Capability</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                    <Users className="w-3.5 h-3.5 text-blue shrink-0" />
                    <div className="truncate">
                      <div className="font-mono text-[10px] text-white/50 uppercase">04 Talent</div>
                      <div className="text-xs font-semibold text-white truncate">Fractional Squads</div>
                    </div>
                  </div>
                </div>

                {/* Impact Metric Callout */}
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan/90 pt-2 border-t border-white/10">
                  <span>● 3.4x Faster Path to Production</span>
                  <span>100% IP Retained</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
