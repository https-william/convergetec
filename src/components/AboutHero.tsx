import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative w-full bg-offwhite pt-16 pb-16 md:pt-24 md:pb-24 border-b border-slate-200/80 overflow-hidden">
      <div className="content-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-[760px] mx-auto text-center mb-14 sm:mb-20"
        >
          {/* Clean Human Eyebrow */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-blue mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            <span>About ConvergeTec Operating Model</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy leading-[1.08] tracking-tight mb-6">
            One partner. Every stage of the journey.
          </h1>

          {/* Intro */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-[640px] mx-auto font-normal">
            ConvergeTec unifies strategic advisory, custom software engineering,
            corporate training, and specialist talent to deliver lasting enterprise scale.
          </p>
        </motion.div>

        {/* Feature Hero Image: Clean Authentic Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100 aspect-[16/9] group">
            <img
              src="/images/about-transformation-team.jpg"
              alt="ConvergeTec leadership and advisory team conducting enterprise transformation roadmap planning in Sydney"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
