import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-offwhite dark:bg-[#070D1E] py-14 sm:py-20 lg:py-24 border-b border-slate-200/80 dark:border-slate-800 overflow-hidden transition-colors duration-200">
      {/* Ambient Radial Glow Background */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-blue/[0.03] dark:from-blue/10 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue/[0.05] dark:bg-cyan/10 blur-[100px] pointer-events-none" />

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Command & Strategic Narrative (6 Cols) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Editorial Eyebrow */}
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-200 uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan" />
              <span>Enterprise Transformation &amp; Technology</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-navy dark:text-white leading-[1.08] tracking-tight mb-6">
              Architecting strategy.
              <span className="block text-slate-700 dark:text-slate-300 font-semibold mt-1">
                Shipping production software.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed max-w-[540px] mb-8 font-normal">
              ConvergeTec closes the divide between high-level management consulting, custom software engineering, and talent resourcing. We unite executive advisory, engineering squads, and capability academies into one accountable partner.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <Button
                to="/contact"
                variant="primary"
                className="px-6 py-3 text-sm font-semibold rounded-md shadow-sm gap-2"
              >
                <span>Schedule Executive Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                to="#divisions-grid"
                variant="secondary"
                className="px-6 py-3 text-sm font-semibold rounded-md"
              >
                Explore Practice Divisions
              </Button>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Photography */}
          <div className="lg:col-span-6 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl dark:shadow-2xl bg-slate-100 dark:bg-slate-900 aspect-[16/10] sm:aspect-[4/3] group">
                <img
                  src="/images/hero-flagship-executive.jpg"
                  alt="ConvergeTec leadership and advisory team conducting enterprise transformation roadmap planning overlooking Sydney Harbour"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
