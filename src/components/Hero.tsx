import { motion } from 'framer-motion';
import Button from './Button';
import { DoodleArrow } from './Doodles';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-offwhite flex items-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 border-b border-navy/10">
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Command & Positioning (~55%) */}
          <div className="lg:col-span-7 xl:col-span-6 relative z-10 flex flex-col justify-center">
            {/* High-Converting Outcome-Driven Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] font-bold font-display text-navy leading-[1.08] tracking-tight mb-6">
              Turn boardroom strategy into live production software.
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 relative">
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

              {/* Tasteful subtle hand-drawn arrow */}
              <div className="hidden xl:block absolute -right-16 -top-5 pointer-events-none text-blue">
                <DoodleArrow color="#0078E0" className="w-10 h-8 rotate-[-10deg]" />
              </div>
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

          {/* Right Column: 2.5D Transformation Web Art */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden border border-navy/15 shadow-2xl shadow-navy/10 bg-navy aspect-[4/3] group"
            >
              {/* 2.5D Editorial Web Art Asset */}
              <img
                src="/images/art-25d-hero.jpg"
                alt="2.5D editorial illustration of ConvergeTec leadership team collaborating alongside cloud architecture and enterprise roadmap UI cards"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Floating chip badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/85 backdrop-blur-md border border-white/20 text-offwhite text-xs font-mono tracking-wider uppercase font-semibold shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                Integrated Delivery Engine
              </div>

              {/* Subtle bottom telemetry bar */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 rounded-xl bg-navy/90 backdrop-blur-md border border-white/15 px-4 py-2.5 flex items-center justify-between text-xs font-mono text-offwhite shadow-lg">
                <span className="text-cyan font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  Live Program Delivery
                </span>
                <span className="text-offwhite/80">3.4x Faster to Production</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
