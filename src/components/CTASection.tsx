import Button from './Button';
import { DoodleSparkle } from './Doodles';
import { Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      data-glow-zone="true"
      className="relative w-full bg-navy text-offwhite py-20 md:py-28 border-t border-navy-light overflow-hidden"
    >
      {/* Precision 1px cyan highlight rail */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
        aria-hidden="true"
      />

      <div className="content-container relative z-10 text-center">
        <div className="max-w-2xl mx-auto relative">
          {/* Subtle Organic Sparkle Accents */}
          <div className="absolute -top-6 -left-8 hidden sm:block pointer-events-none opacity-80" aria-hidden="true">
            <DoodleSparkle color="#00C4F0" className="w-6 h-6" />
          </div>
          <div className="absolute -bottom-4 -right-8 hidden sm:block pointer-events-none opacity-80" aria-hidden="true">
            <DoodleSparkle color="#0078E0" className="w-5 h-5" />
          </div>

          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-mono tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            Direct Partner Engagement
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
            Ready to move from advice to live outcomes?
          </h2>
          <p className="text-base sm:text-lg font-body text-offwhite/80 max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
            Talk to ConvergeTec executive leadership about your organisation&apos;s transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              className="px-9 py-4 text-base shadow-xl shadow-blue/25 w-full sm:w-auto"
            >
              Book a Discovery Call
            </Button>
            <a
              href="mailto:contact@convergetec.com.au"
              className="px-6 py-4 text-sm font-mono uppercase tracking-wider text-offwhite/70 hover:text-white transition-colors no-underline"
            >
              contact@convergetec.com.au
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
