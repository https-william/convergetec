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
    <section className="w-full bg-white py-24 md:py-32 border-t border-navy/10">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-[660px] mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-offwhite text-navy text-xs font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            Integrated Value
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy tracking-tight mb-4">
            Why one company, four divisions?
          </h2>
          <p className="text-ink/75 text-lg sm:text-xl leading-relaxed">
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
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-offwhite rounded-2xl p-8 border border-navy/10 hover:border-navy/20 transition-all hover:shadow-md flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-blue/10 border border-blue/20 text-blue flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-ink/75 text-base leading-relaxed m-0">
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
