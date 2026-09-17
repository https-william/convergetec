import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <section className="w-full bg-offwhite py-12 md:py-20">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Card: Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
            className="bg-navy text-offwhite p-6 sm:p-8 rounded-xl shadow-sm flex flex-col justify-start border border-navy-light"
          >
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-cyan mb-4 block">
              Vision
            </span>
            <p className="font-display text-lg sm:text-xl font-medium leading-relaxed text-offwhite">
              To become a leading Australian business transformation and technology
              company that helps organisations improve how they operate, equip
              their people, and use technology to scale.
            </p>
          </motion.div>

          {/* Right Card: Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="bg-navy text-offwhite p-6 sm:p-8 rounded-xl shadow-sm flex flex-col justify-start border border-navy-light"
          >
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-cyan mb-4 block">
              Mission
            </span>
            <p className="font-display text-lg sm:text-xl font-medium leading-relaxed text-offwhite">
              To provide organisations with practical consulting, skilled
              professionals, digital solutions, training and business resources
              that turn strategy into measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
