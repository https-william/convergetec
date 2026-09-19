import { motion } from 'framer-motion';
import { Check, X, ShieldCheck } from 'lucide-react';
import { DoodleCircle } from './Doodles';

const comparisons = [
  {
    feature: 'Delivery Ownership',
    fragmented: 'Scattered across 3–4 competing agencies with handoff finger-pointing',
    convergetec: 'Single accountable partner from boardroom strategy to live production code',
  },
  {
    feature: 'Software Integration',
    fragmented: 'External dev shop builds features without understanding operating model',
    convergetec: 'Advisors and engineers co-architect custom cloud platforms tailored to workflows',
  },
  {
    feature: 'Capability Retention',
    fragmented: 'External contractors leave with intellectual property and technical knowledge',
    convergetec: 'Dedicated Academy upskills internal teams to own and operate the systems',
  },
];

export default function Differentiator() {
  return (
    <section data-glow-zone="true" className="relative w-full bg-navy text-offwhite py-20 md:py-28 overflow-hidden">
      {/* Background radial highlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Thesis & Signature Accent (~50%) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-mono tracking-widest uppercase mb-6">
              <ShieldCheck className="w-4 h-4 text-cyan" />
              Strategic Advantage
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
              Why settle for fragmented consulting when you can have a{' '}
              <span className="relative inline-block text-cyan px-2 py-0.5">
                single partner?
                <span className="absolute inset-0 -m-1 pointer-events-none scale-105">
                  <DoodleCircle color="#00C4F0" className="w-full h-full" />
                </span>
              </span>
            </h2>

            <p className="font-body text-offwhite/80 text-base sm:text-lg leading-relaxed max-w-lg mb-8">
              Traditional enterprise transformation fails because strategy dies during vendor handoffs.
              ConvergeTec unifies executive advisory, custom software engineering, and corporate training into one seamless operating model.
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-navy-light/80">
              <div className="w-10 h-10 rounded-xl bg-blue/20 border border-blue/40 flex items-center justify-center font-display font-bold text-white text-sm">
                CT
              </div>
              <div>
                <div className="font-display font-semibold text-white text-sm sm:text-base">
                  ConvergeTec Operating Philosophy
                </div>
                <div className="font-mono text-xs text-offwhite/50">
                  Sydney &amp; Melbourne, Australia
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Comparative Matrix Table (~50%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="bg-navy-light/40 rounded-2xl border border-navy-light p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-navy-light">
                <span className="font-mono text-xs uppercase tracking-wider text-offwhite/50">
                  Comparison
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-cyan font-bold">
                  The ConvergeTec Model
                </span>
              </div>

              <div className="space-y-5">
                {comparisons.map((item) => (
                  <div key={item.feature} className="space-y-2 pb-5 border-b border-navy-light/60 last:border-0 last:pb-0">
                    <div className="font-display font-semibold text-sm text-white">
                      {item.feature}
                    </div>
                    {/* Fragmented Agency */}
                    <div className="flex items-start gap-2.5 text-xs font-body text-offwhite/55">
                      <div className="w-4 h-4 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-2.5 h-2.5" />
                      </div>
                      <span>{item.fragmented}</span>
                    </div>
                    {/* ConvergeTec Model */}
                    <div className="flex items-start gap-2.5 text-xs font-body text-offwhite/90">
                      <div className="w-4 h-4 rounded-full bg-cyan/15 text-cyan flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item.convergetec}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
