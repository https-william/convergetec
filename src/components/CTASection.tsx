export default function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 bg-navy-light border-b border-navy">
      <div className="content-container">
        <div className="rounded-2xl border-2 border-dashed border-cyan/30 bg-navy/60 p-8 md:p-12 text-center text-white">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan bg-cyan/10 rounded-full mb-3">
            Component Shell
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">
            CTASection
          </h2>
          <p className="text-offwhite/80 max-w-xl mx-auto text-base md:text-lg mb-6">
            Placeholder for CTA section (Phase 2 content)
          </p>
          <a
            href="#discovery-call"
            className="bg-blue hover:bg-cyan text-white hover:text-navy font-semibold px-6 py-3 rounded-lg transition-colors duration-200 inline-block no-underline"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
