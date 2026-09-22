export default function ContactHero() {
  return (
    <section className="relative w-full bg-offwhite pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden border-b border-slate-200/80">
      <div className="content-container relative z-10">
        <div className="max-w-[700px] mx-auto text-center">
          {/* Clean Human Eyebrow */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-blue mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            <span>Direct Advisory &amp; Practice Engagement</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy leading-[1.08] tracking-tight mb-5">
            Let&apos;s talk about where your organization is scaling.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-[560px] mx-auto font-normal">
            Schedule an executive diagnostic session with our partners across Australia and Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
}
