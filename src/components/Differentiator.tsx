import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const comparisons = [
  {
    category: 'Accountability Model',
    traditional: 'Multiple fragmented vendors pointing fingers when timelines slip',
    convergeTec: '1 single accountable leadership team across strategy, software, and talent',
  },
  {
    category: 'Technical Translation',
    traditional: 'Strategy consultants write slide decks that software engineers cannot implement',
    convergeTec: 'Engineers & advisors co-design software directly from the strategic blueprint',
  },
  {
    category: 'IP & Capability Retention',
    traditional: 'Agency leaves when the contract ends; internal teams lack knowledge to run the system',
    convergeTec: 'Academy masterclasses institutionalize technical capabilities within your permanent staff',
  },
  {
    category: 'Scaling & Squad Velocity',
    traditional: 'Recruiting agency delays of 3-6 months to find specialized tech contractors',
    convergeTec: 'Pre-vetted fractional executives & delivery triads deployed within 48 hours',
  },
];

export default function Differentiator() {
  return (
    <section className="relative w-full bg-navy text-offwhite py-20 sm:py-28 border-t border-navy-light/60">
      <div className="content-container relative z-10">
        {/* Section Header */}
        <div className="max-w-[780px] mx-auto text-center mb-14 sm:mb-18">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            <span>Structural Contrast</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-5">
            Why enterprise transformations fail with fragmented suppliers.
          </h2>

          <p className="text-base sm:text-lg text-offwhite/80 leading-relaxed font-normal max-w-[660px] mx-auto">
            Traditional programs collapse in the gaps between strategy consultancies, development shops,
            and contract recruiters. ConvergeTec closes the gaps under one single contract.
          </p>
        </div>

        {/* Executive Comparison Table */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden bg-navy-light/40 border border-white/10 shadow-2xl">
          {/* Header Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
            <div className="p-6 sm:p-7 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/10">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Fragmented Sourcing Model
              </span>
              <h3 className="font-bold text-lg sm:text-xl text-white">
                Multi-Vendor Disconnect
              </h3>
            </div>

            <div className="p-6 sm:p-7 bg-white/[0.04]">
              <span className="text-xs uppercase tracking-wider text-blue font-semibold block mb-1">
                ConvergeTec Integrated Model
              </span>
              <h3 className="font-bold text-lg sm:text-xl text-white">
                Unified Accountability Architecture
              </h3>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/10">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                {/* Traditional Side */}
                <div className="p-6 sm:p-7 bg-transparent md:border-r border-white/10">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
                    {item.category}
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed m-0">
                    {item.traditional}
                  </p>
                </div>

                {/* ConvergeTec Side */}
                <div className="p-6 sm:p-7 bg-white/[0.02]">
                  <div className="text-xs text-blue uppercase tracking-wider mb-1.5 font-semibold">
                    ConvergeTec Approach
                  </div>
                  <p className="text-white text-sm sm:text-base font-medium leading-relaxed m-0">
                    {item.convergeTec}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Bottom Callout */}
          <div className="p-5 sm:p-6 bg-navy-light/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-offwhite/70">
              Direct board accountability backed by SLA-driven deliverables.
            </span>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono text-blue hover:text-white font-semibold no-underline"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
