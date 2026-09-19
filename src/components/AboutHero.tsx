import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="w-full bg-offwhite pt-20 pb-16 md:pt-28 md:pb-24 border-b border-navy/10">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-[800px] mx-auto text-center mb-12 sm:mb-16"
        >
          {/* Architectural System Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-navy/5 text-navy/75 text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            Enterprise Overview // About ConvergeTec
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-navy leading-[1.12] tracking-tight mb-6">
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

        {/* Feature Hero Image: Collaborative Transformation Team */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-navy/15 shadow-xl shadow-navy/5 bg-navy aspect-[16/9] group">
            <img
              src="/images/about-transformation-team.jpg"
              alt="ConvergeTec leadership and advisory team in strategic session"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Technical Location / Coordinate Overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent p-6 sm:p-8 pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-offwhite text-xs sm:text-sm font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="font-semibold uppercase text-cyan">Live Practice</span>
                <span className="text-offwhite/40">|</span>
                <span className="text-offwhite/90">Multidisciplinary Advisory Boardroom // Sydney, NSW</span>
              </div>
              <span className="text-xs font-mono text-offwhite/60 uppercase tracking-widest hidden sm:inline-block">
                SYS-ARCH // INTEGRATED
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
