import Button from './Button';
import TransformationSimulator from './TransformationSimulator';
import { DoodleUnderline, DoodleArrow } from './Doodles';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-offwhite min-h-[85vh] flex items-center overflow-hidden py-16 md:py-24 border-b border-navy/10">
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Command & SaaS Positioning (~55%) */}
          <div className="lg:col-span-7 xl:col-span-6 relative z-10">
            {/* System Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-navy/15 bg-white/90 text-navy text-xs font-mono tracking-widest uppercase mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              Australian Transformation &amp; Technology Partner
            </div>

            {/* Confident, Punchy Headline with SVG Doodle Underline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.2rem] font-bold font-display text-navy leading-[1.08] tracking-tight mb-6">
              Advise. Build.{' '}
              <span className="relative inline-block">
                Scale.
                <span className="absolute -bottom-3 sm:-bottom-4 left-0 w-full pointer-events-none">
                  <DoodleUnderline color="#0078E0" className="w-full h-auto" />
                </span>
              </span>
            </h1>

            {/* Ultra-Crisp 1-Sentence Value Proposition */}
            <p className="font-body text-lg sm:text-xl text-ink/80 leading-relaxed max-w-[560px] mb-8 sm:mb-10">
              One unified partner for strategic advisory, custom cloud engineering,
              workforce academies, and elite contract talent.
            </p>

            {/* Action Group with Hand-Drawn Directional Arrow */}
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12">
              <div className="relative">
                <Button
                  to="/contact"
                  variant="primary"
                  className="px-8 py-4 text-base sm:text-lg shadow-lg shadow-blue/20 w-full sm:w-auto"
                >
                  Book Discovery Call
                </Button>

                {/* Subtle hand-drawn arrow pointing to CTA on larger screens */}
                <div
                  className="hidden xl:block absolute -left-16 -top-10 pointer-events-none"
                  aria-hidden="true"
                >
                  <DoodleArrow color="#0078E0" className="w-14 h-12 rotate-[-10deg]" />
                  <span className="block font-mono text-[10px] text-blue font-bold tracking-wider -mt-1 -ml-3">
                    Start here
                  </span>
                </div>
              </div>

              <a
                href="#divisions-grid"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-base font-semibold text-navy hover:text-blue transition-colors duration-200 group no-underline"
              >
                <span>Explore the 4 Divisions</span>
                <ArrowDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200 text-blue" />
              </a>
            </div>

            {/* Clean Operating Metrics Strip */}
            <div className="pt-8 border-t border-navy/10 grid grid-cols-3 gap-6 max-w-[520px]">
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-navy">04</div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink/60 mt-1">
                  Divisions
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-navy">1</div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink/60 mt-1">
                  Accountable Partner
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-navy">SYD &amp; MEL</div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink/60 mt-1">
                  Australia
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Generative UI Simulator (~45%) */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <TransformationSimulator />
          </div>
        </div>
      </div>
    </section>
  );
}
