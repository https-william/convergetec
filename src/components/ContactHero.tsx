export default function ContactHero() {
  return (
    <section className="w-full bg-offwhite py-16 md:py-24">
      <div className="content-container">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue mb-4 inline-block">
            Contact
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-navy leading-[1.15] tracking-tight mb-4 sm:mb-6">
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
