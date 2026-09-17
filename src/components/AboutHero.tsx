import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="w-full bg-offwhite pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-[800px] mx-auto text-center"
        >
          {/* Eyebrow Label */}
          <span className="font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue mb-4 inline-block">
            About ConvergeTec
          </span>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-navy leading-[1.15] tracking-tight mb-6">
            One partner. Every stage of the journey.
          </h1>

          {/* Body Paragraph (max-width 680px) */}
          <p className="font-body text-ink/85 text-lg sm:text-xl leading-relaxed max-w-[680px] mx-auto">
            ConvergeTec is an Australian business transformation and technology
            company. Rather than operating as a single-service provider — a
            consultancy, a software house, a training company, or a staffing
            agency — ConvergeTec is built to walk a client&apos;s whole journey with
            them: from advice, through people and technology, to ongoing
            capability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
