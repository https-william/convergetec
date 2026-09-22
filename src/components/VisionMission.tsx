import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="w-full bg-offwhite py-20 md:py-28">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Card: Strategic Vision */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative overflow-hidden bg-navy text-offwhite p-8 sm:p-10 rounded-2xl shadow-sm flex flex-col justify-between border border-navy-light/90"
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-navy-light/80 mb-6">
                <div className="flex items-center gap-2.5 text-blue">
                  <Compass className="w-5 h-5" />
                  <span className="font-mono text-xs tracking-widest uppercase font-bold text-white">
                    Strategic Vision
                  </span>
                </div>
                <span className="w-2 h-2 bg-blue inline-block" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                To be Australia&apos;s definitive transformation engine.
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed m-0">
                Helping modern organisations fundamentally improve operating models, equip internal teams, and deploy cloud technology to scale without limits.
              </p>
            </div>
          </motion.div>

          {/* Right Card: Operational Mission */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="relative overflow-hidden bg-navy text-offwhite p-8 sm:p-10 rounded-2xl shadow-sm flex flex-col justify-between border border-navy-light/90"
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-navy-light/80 mb-6">
                <div className="flex items-center gap-2.5 text-blue">
                  <Target className="w-5 h-5" />
                  <span className="font-mono text-xs tracking-widest uppercase font-bold text-white">
                    Operational Mission
                  </span>
                </div>
                <span className="w-2 h-2 bg-blue inline-block" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                Turn boardroom strategy into live production outcomes.
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed m-0">
                Providing pragmatic advisory, skilled delivery talent, enterprise software engineering, and corporate learning that generate verifiable ROI.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
