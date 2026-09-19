import { motion } from 'framer-motion';
import Button from './Button';
import { DoodleUnderline } from './Doodles';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-offwhite min-h-[85vh] flex items-center overflow-hidden py-20 md:py-28 lg:py-32 border-b border-navy/10">
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Command & SaaS Positioning (~55%) */}
          <div className="lg:col-span-7 xl:col-span-6 relative z-10">
            {/* System Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-navy/15 bg-white/90 text-navy text-xs font-mono tracking-widest uppercase mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              Australian Transformation &amp; Technology Partner
            </div>

            {/* Confident Headline in Outfit */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-bold font-display text-navy leading-[1.08] tracking-tight mb-6">
              Advise. Build.{' '}
              <span className="relative inline-block">
                Scale.
                <span className="absolute -bottom-3 sm:-bottom-4 left-0 w-full pointer-events-none">
                  <DoodleUnderline color="#0078E0" className="w-full h-auto" />
                </span>
              </span>
            </h1>

            {/* High-End Editorial Subhead in Tiempos Serif */}
            <p className="font-tiempos text-xl sm:text-2xl text-ink/80 leading-relaxed max-w-[540px] mb-10 font-normal">
              One unified partner for strategic advisory, custom cloud engineering,
              workforce academies, and elite contract talent.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12">
              <Button
                to="/contact"
                variant="primary"
                className="px-8 py-4 text-base sm:text-lg shadow-lg shadow-blue/20 w-full sm:w-auto font-display font-semibold"
              >
                Book Discovery Call
              </Button>

              <a
                href="#divisions-grid"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-base font-semibold text-navy hover:text-blue transition-colors duration-200 group no-underline font-display"
              >
                <span>Explore the 4 Divisions</span>
                <ArrowDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200 text-blue" />
              </a>
            </div>

            {/* Clean Operating Metrics Strip */}
            <div className="pt-8 border-t border-navy/10 grid grid-cols-3 gap-6 max-w-[500px]">
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-navy">04</div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink/55 mt-1">
                  Divisions
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-navy">1</div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink/55 mt-1">
                  Accountable Partner
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-navy">SYD &amp; MEL</div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink/55 mt-1">
                  Australia
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Uncluttered Executive Hero Photograph (~45%) */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-navy/15 shadow-2xl shadow-navy/10 bg-navy aspect-[4/3] group"
            >
              <img
                src="/images/hero-enterprise-flagship.jpg"
                alt="ConvergeTec leadership and technology partners in executive boardroom overlooking Sydney Harbour"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
