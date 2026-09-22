import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative w-full bg-offwhite dark:bg-[#070D1E] pt-14 pb-14 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 border-b border-slate-200/80 dark:border-slate-800 overflow-hidden transition-colors duration-200">
      <div className="content-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Clean Human Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-blue dark:text-cyan mb-4 px-3 py-1 rounded-full bg-blue/5 dark:bg-cyan/10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan" />
            <span>About ConvergeTec Operating Model</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy dark:text-white leading-[1.08] tracking-tight mb-6">
            One partner. Every stage of the journey.
          </h1>

          {/* Intro */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
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
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-900 aspect-[16/9] group">
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
