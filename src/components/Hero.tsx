import { motion } from 'framer-motion';
import Button from './Button';
import { DoodleUnderline } from './Doodles';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-offwhite flex items-center overflow-hidden py-10 sm:py-16 md:py-20 lg:py-24 border-b border-navy/10">
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Command & Positioning (~55%) */}
          <div className="lg:col-span-7 xl:col-span-6 relative z-10 flex flex-col justify-center">
            {/* System Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-navy/15 bg-white/90 text-navy text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-5 sm:mb-6 shadow-xs w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
              <span className="truncate">Australian Transformation Partner</span>
            </div>

            {/* Confident Headline in Outfit */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.2rem] font-bold font-display text-navy leading-[1.08] tracking-tight mb-5 sm:mb-6">
              Advise. Build.{' '}
              <span className="relative inline-block whitespace-nowrap">
                Scale.
                <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full pointer-events-none">
                  <DoodleUnderline color="#0078E0" className="w-full h-auto" />
                </span>
              </span>
            </h1>

            {/* High-End Editorial Subhead in Tiempos Serif */}
            <p className="font-tiempos text-lg sm:text-xl md:text-2xl text-ink/80 leading-relaxed max-w-[560px] mb-8 sm:mb-10 font-normal">
              One unified partner for strategic advisory, custom cloud engineering,
              workforce academies, and elite contract talent.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6 mb-8 lg:mb-12">
              <Button
                to="/contact"
                variant="primary"
                className="px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg shadow-lg shadow-blue/20 w-full sm:w-auto font-display font-semibold text-center"
              >
                Book Discovery Call
              </Button>

              <a
                href="#divisions-grid"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-4 text-base font-semibold text-navy hover:text-blue transition-colors duration-200 group no-underline font-display"
              >
                <span>Explore the 4 Divisions</span>
                <ArrowDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200 text-blue" />
              </a>
            </div>

            {/* Desktop Metrics Strip (hidden on mobile, shown on lg screens) */}
            <div className="hidden lg:grid pt-8 border-t border-navy/10 grid-cols-3 gap-6 max-w-[500px]">
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

          {/* Right Column: Hero Photograph (Visible on mobile right after CTA!) */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-navy/15 shadow-2xl shadow-navy/10 bg-navy aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] group"
            >
              <img
                src="/images/hero-enterprise-flagship.jpg"
                alt="ConvergeTec leadership and technology partners in executive boardroom overlooking Sydney Harbour"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                loading="eager"
              />
            </motion.div>
          </div>

          {/* Mobile Metrics Strip (rendered under the image on mobile screens) */}
          <div className="lg:hidden col-span-1 pt-6 border-t border-navy/10 grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="font-display font-bold text-2xl text-navy">04</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink/55 mt-0.5">
                Divisions
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-navy">1</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink/55 mt-0.5">
                Partner
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-xl text-navy">SYD &amp; MEL</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink/55 mt-0.5">
                Australia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
