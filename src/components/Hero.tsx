export default function Hero() {
  return (
    <section className="w-full py-16 md:py-24 bg-offwhite border-b border-navy/10">
      <div className="content-container">
        <div className="rounded-2xl border-2 border-dashed border-navy/20 bg-white/60 p-8 md:p-12 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue bg-blue/10 rounded-full mb-3">
            Component Shell
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display text-navy">
            Hero
          </h1>
          <p className="text-ink/70 max-w-xl mx-auto text-base md:text-lg">
            Placeholder for Hero section (Phase 2 content)
          </p>
        </div>
      </div>
    </section>
  );
}
