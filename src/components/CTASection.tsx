import Button from './Button';
import { ArrowRight, ShieldCheck, Mail, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative w-full bg-slate-50 dark:bg-[#070D1E] py-16 sm:py-24 lg:py-28 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
      <div className="content-container relative z-10 text-center">
        <div className="max-w-5xl mx-auto bg-white dark:bg-[#0D162B] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl shadow-navy/5 dark:shadow-2xl text-center transition-all duration-200">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2 text-sm font-bold tracking-wide text-blue dark:text-cyan uppercase mb-5 px-3.5 py-1.5 rounded-full bg-blue/5 dark:bg-cyan/10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan" />
            <span>Executive Practice Intake</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy dark:text-white mb-4 tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to transition strategy into production reality?
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Consult directly with ConvergeTec practice partners in Sydney, Melbourne, Queensland, and Nigeria to assess your
            operating model, cloud systems, and delivery velocity.
          </p>

          {/* Action Buttons - Spacious, Non-wrapping Flex Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-10">
            <Button
              to="/contact"
              variant="primary"
              className="w-full sm:w-auto px-7 py-3.5 text-base font-display font-semibold rounded-xl shadow-md gap-2.5 justify-center whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Practice Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <a
              href="mailto:contact@convergetec.com.au"
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-slate-800 dark:text-slate-100 hover:text-navy dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors no-underline inline-flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900/60 shadow-xs whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              <span>contact@convergetec.com.au</span>
            </a>
          </div>

          {/* Trust strip */}
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-slate-700 dark:text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue dark:text-cyan" />
              Direct Partner-Led Advisory
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span>Non-Disclosure Protected</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span>Sydney · Melbourne · Queensland · Nigeria</span>
          </div>
        </div>
      </div>
    </section>
  );
}
