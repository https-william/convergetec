import Button from './Button';
import { DoodleArrow } from './Doodles';

export default function CTASection() {
  return (
    <section
      data-glow-zone="true"
      className="relative w-full bg-navy text-offwhite py-24 md:py-32 border-t border-navy-light/60 overflow-hidden"
    >
      <div className="content-container relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            Executive Leadership
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-5 tracking-tight">
            Ready to move from advice to live outcomes?
          </h2>

          <p className="text-lg sm:text-xl text-offwhite/80 max-w-lg mx-auto mb-10 leading-relaxed font-normal">
            Talk to ConvergeTec partners about your organisation&apos;s strategic and technological goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative">
            {/* Subtle corporate doodle arrow pointing to CTA */}
            <div className="hidden lg:flex items-center gap-1.5 absolute -left-32 top-1/2 -translate-y-1/2 text-cyan pointer-events-none">
              <span className="font-mono text-[11px] tracking-wider uppercase text-cyan/75">Talk to leads</span>
              <DoodleArrow color="#00C4F0" className="w-8 h-6 rotate-[-10deg]" />
            </div>

            <Button
              to="/contact"
              variant="primary"
              className="px-9 py-4 text-base font-display font-semibold shadow-xl shadow-blue/25 w-full sm:w-auto"
            >
              Book a Discovery Call
            </Button>
            <a
              href="mailto:contact@convergetec.com.au"
              className="px-5 py-4 text-sm font-mono tracking-wider text-offwhite/60 hover:text-white transition-colors no-underline"
            >
              contact@convergetec.com.au
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
