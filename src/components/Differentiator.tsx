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
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-[760px] mx-auto text-center"
        >
          {/* Architectural Positioning Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-offwhite/15 bg-offwhite/5 text-offwhite/70 text-xs font-mono tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            The ConvergeTec Difference
          </div>

          <blockquote className="m-0 p-0">
            <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-relaxed md:leading-[1.3] text-offwhite tracking-tight font-medium">
              &ldquo;We do not simply advise organisations on what they should
              do. We help design the future, provide the people, build the
              technology, train the workforce, and support the organisation
              through implementation.&rdquo;
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
