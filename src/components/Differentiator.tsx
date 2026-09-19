import { motion } from 'framer-motion';

export default function Differentiator() {
  return (
    <section data-glow-zone="true" className="relative w-full bg-navy text-offwhite py-16 md:py-128 overflow-hidden">
      {/* Background Texture: Faint overlapping ring outlines (stroke only, opacity 0.08) */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1000 800"
          className="w-[1200px] h-[960px] max-w-none transform -translate-x-12 translate-y-8"
          fill="none"
        >
          <circle
            cx="400"
            cy="360"
            r="260"
            stroke="#F7F9FC"
            strokeWidth="2"
            strokeOpacity="0.08"
          />
          <circle
            cx="600"
            cy="360"
            r="260"
            stroke="#F7F9FC"
            strokeWidth="2"
            strokeOpacity="0.08"
          />
          <circle
            cx="500"
            cy="520"
            r="260"
            stroke="#F7F9FC"
            strokeWidth="2"
            strokeOpacity="0.08"
          />
        </svg>
      </div>

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Executive Founding Quote (~55%) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {/* Architectural Positioning Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-mono tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              The ConvergeTec Difference
            </div>

            <blockquote className="m-0 p-0 mb-8">
              <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-relaxed md:leading-[1.25] text-offwhite tracking-tight font-medium">
                &ldquo;We do not simply advise organisations on what they should
                do. We help design the future, provide the people, build the
                technology, train the workforce, and support the organisation
                through implementation.&rdquo;
              </p>
            </blockquote>

            <div className="flex items-center gap-3 pt-6 border-t border-navy-light/80">
              <div className="w-10 h-10 rounded-full bg-blue flex items-center justify-center font-display font-bold text-white text-sm">
                CT
              </div>
              <div>
                <div className="font-display font-semibold text-white text-sm sm:text-base">
                  ConvergeTec Leadership
                </div>
                <div className="font-mono text-xs text-offwhite/60">
                  Sydney &amp; Melbourne, Australia
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Comparative Advantage Matrix (~45%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bg-navy-light/50 rounded-2xl border border-navy-light/90 p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              <div className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan mb-5 pb-3 border-b border-navy-light">
                Operating Model Comparison
              </div>

              <div className="space-y-6">
                {/* Traditional Multi-Vendor */}
                <div className="pb-5 border-b border-navy-light/80">
                  <div className="flex items-center gap-2 text-xs font-mono text-offwhite/50 uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-400/80" />
                    Traditional Fragmented Vendors
                  </div>
                  <p className="font-body text-sm text-offwhite/70 leading-relaxed m-0">
                    Strategy consulting handoffs stall in engineering. Separate recruiters place misaligned staff. External contractors leave zero capability behind.
                  </p>
                </div>

                {/* ConvergeTec Integrated Partner */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-cyan" />
                    The ConvergeTec Model
                  </div>
                  <p className="font-body text-sm text-offwhite/90 leading-relaxed m-0">
                    A single multidisciplinary partner: advisors build software, engineers understand board objectives, and your workforce is trained to own the outcome.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
