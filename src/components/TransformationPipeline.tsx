import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Code2,
  GraduationCap,
  Users,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    stage: 'Advise & Diagnose',
    division: 'Consulting',
    icon: Compass,
    description:
      'We assess existing operating architectures, diagnose friction, and co-design board-approved roadmaps.',
  },
  {
    number: '02',
    stage: 'Architect & Build',
    division: 'Digital & Software',
    icon: Code2,
    description:
      'Our dedicated squads write and ship cloud-native software, microservices, and automated workflows.',
  },
  {
    number: '03',
    stage: 'Equip & Upskill',
    division: 'Academy',
    icon: GraduationCap,
    description:
      'Masterclasses and workshops upskill your in-house engineering and delivery teams alongside deployment.',
  },
  {
    number: '04',
    stage: 'Staff & Scale',
    division: 'Resources & Talent',
    icon: Users,
    description:
      'Vetted contract specialists and fractional leaders embed directly into your teams to maintain continuity.',
  },
];

export default function TransformationPipeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="w-full bg-offwhite dark:bg-[#070D1E] py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800 relative overflow-hidden transition-colors duration-200">
      <div className="content-container relative z-10">
        {/* Section Header */}
        <div className="max-w-[720px] mx-auto text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan" />
            <span>Delivery Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy dark:text-white mb-4 tracking-tight">
            The Continuous Delivery Lifecycle
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed max-w-[620px] mx-auto font-normal">
            A cohesive lifecycle that connects strategic diagnosis directly to
            running production code and in-house operational ownership.
          </p>
        </div>

        {/* Connected Architectural Pipeline Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCurrent = activeStep === index;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => setActiveStep(index)}
                  className={`group cursor-pointer rounded-xl p-6 sm:p-7 border transition-all duration-200 flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-white dark:bg-[#0D162B] border-blue dark:border-blue shadow-lg ring-1 ring-blue'
                      : 'bg-white dark:bg-[#0D162B] hover:bg-white dark:hover:bg-[#121E38] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs'
                  }`}
                >
                  <div>
                    {/* Top Step Header */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800 mb-5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded ${
                            isCurrent
                              ? 'bg-blue text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {step.number}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                          {step.division}
                        </span>
                      </div>
                    </div>

                    {/* Icon & Stage Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                          isCurrent
                            ? 'bg-blue text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-navy dark:text-white leading-tight">
                        {step.stage}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Clean Card Action */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-blue dark:group-hover:text-cyan transition-colors">
                    <span>Explore Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closed-Loop Feedback Band */}
        <div className="mt-8 p-5 rounded-xl bg-white dark:bg-[#0D162B] border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-4xl mx-auto transition-colors duration-200">
          <div>
            <div className="font-bold text-sm sm:text-base text-navy dark:text-white">
              Closed-Loop Operational Continuity
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
              Staffed specialists continuously feed operational and architecture metrics back into executive roadmaps.
            </div>
          </div>
          <a
            href="/services/consulting"
            className="shrink-0 text-xs font-semibold text-navy dark:text-slate-200 hover:text-blue dark:hover:text-cyan inline-flex items-center gap-1.5 no-underline transition-colors"
          >
            <span>Read Delivery Governance Whitepaper</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue dark:text-cyan" />
          </a>
        </div>
      </div>
    </section>
  );
}
