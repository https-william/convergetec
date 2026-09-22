import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-offwhite py-14 sm:py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Command & Strategic Narrative (6 Cols) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Editorial Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              <span>Enterprise Transformation &amp; Technology</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-navy leading-[1.08] tracking-tight mb-6">
              Architecting strategy.
              <span className="block text-slate-700 font-semibold mt-1">
                Shipping production software.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[540px] mb-8 font-normal">
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

            {/* Enterprise Sector Trust Strip */}
            <div className="pt-6 border-t border-slate-200/80 max-w-[540px]">
              <span className="text-xs font-semibold text-slate-500 block mb-2">
                Delivering across mission-critical sectors:
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  Banking &amp; Financial Services
                </span>
                <span className="text-slate-300">•</span>
                <span>Healthcare &amp; MedTech</span>
                <span className="text-slate-300">•</span>
                <span>Energy &amp; Utilities</span>
                <span className="text-slate-300">•</span>
                <span>Enterprise SaaS</span>
              </div>
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
              <div className="relative rounded-xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-100 aspect-[16/10] sm:aspect-[4/3] group">
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
