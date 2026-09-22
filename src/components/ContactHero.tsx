export default function ContactHero() {
  return (
    <section className="relative w-full bg-offwhite pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-grid-pattern border-b border-slate-200/80">
      <div className="content-container relative z-10">
        <div className="max-w-[700px] mx-auto text-center">
          {/* Minimal Non-Pill Eyebrow */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold mb-4">
            <span className="w-2 h-2 bg-blue inline-block" />
            <span>Direct Practice Engagement // Australia</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-navy leading-[1.1] tracking-tight mb-5">
            Let&apos;s talk about where you&apos;re trying to{' '}
            <span className="text-blue">scale.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-[560px] mx-auto font-normal">
            Book an executive discovery session, or send an inquiry directly to our Australian practice leads.
          </p>
        </div>
      </div>
    </section>
  );
}
