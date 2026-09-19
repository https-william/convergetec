export default function ContactHero() {
  return (
    <section className="w-full bg-offwhite py-16 md:py-24">
      <div className="content-container">
        <div className="max-w-[720px] mx-auto text-center">
          {/* Architectural System Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-navy/5 text-navy/75 text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            Direct Engagement // Contact
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-navy leading-[1.12] tracking-tight mb-4 sm:mb-6">
            Let&apos;s talk about where you&apos;re trying to go.
          </h1>
          <p className="font-body text-ink/85 text-lg sm:text-xl leading-relaxed max-w-[640px] mx-auto">
            Book a discovery call, or send a quick message and we&apos;ll get back to
            you.
          </p>
        </div>
      </div>
    </section>
  );
}
