import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative w-full bg-offwhite pt-16 pb-16 md:pt-24 md:pb-24 border-b border-slate-200/80 overflow-hidden bg-grid-pattern">
      <div className="content-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-[760px] mx-auto text-center mb-14 sm:mb-20"
        >
          {/* Minimal Eyebrow (Non-Pill) */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold mb-4">
            <span className="w-2 h-2 bg-blue inline-block" />
            <span>About ConvergeTec // Operating Framework</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-navy leading-[1.12] tracking-tight mb-6">
            One partner. Every stage of the journey.
          </h1>

          {/* Intro */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-[640px] mx-auto font-normal">
            ConvergeTec unifies strategic advisory, custom software engineering,
            corporate training, and specialist talent to deliver lasting enterprise scale.
          </p>
        </motion.div>

        {/* Feature Hero Image: Clean Authentic Photo Without Subtitles or Overlays */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-navy/10 bg-navy aspect-[16/9] group">
            <img
              src="/images/about-transformation-team.jpg"
              alt="ConvergeTec leadership and advisory team conducting enterprise transformation roadmap planning in Sydney"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              loading="eager"
            />
          </div>

          {/* Clean Editorial Caption Below Image */}
          <div className="mt-3.5 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>ConvergeTec Advisory Directorate // Sydney &amp; Melbourne Practice Leadership</span>
            <span className="hidden sm:inline">100% Retained IP Standard</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
