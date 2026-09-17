import Button from './Button';

export default function CTASection() {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#0078E0,#00C4F0)] text-offwhite py-16 md:py-24">
      <div className="content-container text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-offwhite mb-4 tracking-tight">
            Ready to move from advice to outcomes?
          </h2>
          <p className="text-lg sm:text-xl font-body text-offwhite/95 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Talk to ConvergeTec about where your organisation is trying to go.
          </p>
          <div>
            <Button
              to="/contact"
              variant="inverted"
              className="px-8 py-4 text-base sm:text-lg"
            >
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
