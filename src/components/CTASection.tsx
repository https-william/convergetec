import Button from './Button';

export default function CTASection() {
  return (
    <section
      data-glow-zone="true"
      className="relative w-full bg-navy text-offwhite py-20 md:py-28 border-t border-navy-light overflow-hidden"
    >
      {/* Precision 1px cyan datum highlight rail */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
        aria-hidden="true"
      />

      <div className="content-container relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Architectural Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Direct Engagement
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-offwhite mb-4 tracking-tight">
            Ready to move from advice to outcomes?
          </h2>
          <p className="text-lg sm:text-xl font-body text-offwhite/85 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Talk to ConvergeTec about where your organisation is trying to go.
          </p>
          <div>
            <Button
              to="/contact"
              variant="primary"
              className="px-9 py-4 text-base sm:text-lg shadow-lg shadow-blue/20"
            >
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
