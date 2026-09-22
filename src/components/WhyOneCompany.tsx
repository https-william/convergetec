import { motion } from 'framer-motion';
import { Layers, RefreshCw, Trophy } from 'lucide-react';

const reasons = [
  {
    icon: Layers,
    title: 'Zero Handoff Loss',
    description: 'Advisory roadmaps translate directly into cloud software with zero vendor friction or misaligned specifications.',
  },
  {
    icon: Trophy,
    title: 'Permanent IP Retention',
    description: 'Our Academy trains your internal team so capability and intellectual property stay within your organisation.',
  },
  {
    icon: RefreshCw,
    title: 'Rapid Resource Mobilization',
    description: 'Pre-vetted specialists and fractional executives plug immediate delivery gaps within 48 hours.',
  },
];

export default function WhyOneCompany() {
  return (
    <section className="w-full bg-white dark:bg-[#070D1E] py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-[660px] mx-auto mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3">
            <span className="w-2 h-2 bg-blue dark:bg-cyan inline-block rounded-full" />
            <span>Integrated Value Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy dark:text-white tracking-tight mb-4">
            Why one company, four divisions?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
            By keeping all four disciplines under one roof, we eliminate the structural friction that derails typical corporate transformations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-slate-50/70 dark:bg-[#0D162B] rounded-xl p-8 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-[#121E38] transition-all hover:shadow-md dark:hover:shadow-black/40 flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-lg bg-blue/10 dark:bg-blue/20 border border-blue/20 dark:border-blue/30 text-blue dark:text-cyan flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed m-0">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
