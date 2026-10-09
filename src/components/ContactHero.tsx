export default function ContactHero() {
  return (
    <section className="relative w-full bg-offwhite dark:bg-[#070D1E] pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
      <div className="content-container relative z-10">
        <div className="max-w-[700px] mx-auto text-center">
          {/* Clean Human Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide text-blue dark:text-cyan mb-4 px-3.5 py-1.5 rounded-full bg-blue/5 dark:bg-cyan/10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan" />
            <span>Direct Advisory &amp; Practice Engagement</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy dark:text-white leading-[1.08] tracking-tight mb-5">
            Let&apos;s talk about where your organization is scaling.
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-[560px] mx-auto font-normal">
            Schedule an executive diagnostic session with our partners across Australia.
          </p>
        </div>
      </div>
    </section>
  );
}
