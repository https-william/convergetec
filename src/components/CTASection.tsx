import Button from './Button';
import { ArrowRight, ShieldCheck, Mail, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-t border-slate-200/80">
      <div className="content-container relative z-10 text-center">
        <div className="max-w-3xl mx-auto bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 md:p-16 shadow-xl text-left sm:text-center">
          {/* Category Tag */}
          <div className="flex items-center sm:justify-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            <span>Executive Practice Intake</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-navy mb-4 tracking-tight leading-tight">
            Ready to transition strategy into production reality?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl sm:mx-auto mb-9 leading-relaxed font-normal">
            Consult directly with ConvergeTec practice partners in Sydney and Melbourne to assess your
            operating model, cloud systems, and delivery velocity.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-md sm:mx-auto mb-8">
            <Button
              to="/contact"
              variant="primary"
              className="px-7 py-3.5 text-base font-display font-semibold rounded-md shadow-sm gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Practice Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <a
              href="mailto:contact@convergetec.com.au"
              className="px-5 py-3.5 text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-100 transition-colors no-underline inline-flex items-center justify-center gap-2 border border-slate-200 rounded-md bg-white"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span>contact@convergetec.com.au</span>
            </a>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              Direct Partner-Led Advisory
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Non-Disclosure Protected</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Sydney &amp; Melbourne</span>
          </div>
        </div>
      </div>
    </section>
  );
}
