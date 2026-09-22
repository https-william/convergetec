interface BookingEmbedProps {
  src?: string;
  title?: string;
}

export default function BookingEmbed({
  src = '',
  title = 'ConvergeTec Discovery Call Booking',
}: BookingEmbedProps) {
  return (
    <section className="w-full bg-offwhite pb-12 sm:pb-16">
      <div className="content-container">
        <div className="max-w-[850px] mx-auto">
          {src ? (
            <div className="w-full min-h-[500px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <iframe
                src={src}
                title={title}
                className="w-full h-full min-h-[500px] border-0"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Executive Scheduling Console */}
                <div className="lg:col-span-6 relative rounded-xl overflow-hidden bg-navy text-offwhite p-6 border border-navy-light shadow-md flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue inline-block" />
                      <span className="font-mono text-xs tracking-wider uppercase text-offwhite/90">
                        CONVERGETEC // INTAKE DOCK
                      </span>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-offwhite border border-white/15">
                      AEST (UTC+10/11)
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-offwhite/50 block mb-1">Duration &amp; Format</span>
                      <p className="text-sm font-display font-semibold text-white">
                        30-Min Executive Diagnostic Session
                      </p>
                      <p className="text-xs text-offwhite/70">
                        Confidential Microsoft Teams or in-person at Barangaroo (Sydney) or Collins Square (Melbourne).
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase text-offwhite/50 block mb-1.5">Focus Areas Available</span>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-[11px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-offwhite">Operating Models (TOM)</span>
                        <span className="text-[11px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-offwhite">Cloud SaaS Architecture</span>
                        <span className="text-[11px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-offwhite">Workforce Academy</span>
                        <span className="text-[11px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-offwhite">Fractional Bench</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3 text-xs font-mono text-offwhite/80">
                      <span>Led By: Practice Partners</span>
                      <span className="text-white font-medium shrink-0">Strict NDA Standard</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-offwhite font-mono text-center">
                    AVAILABILITY: Current sprint slots open for Q4
                  </div>
                </div>

                {/* Scheduling Overview & Agenda */}
                <div className="lg:col-span-6 flex flex-col justify-center text-left">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Executive Consultation // Direct Advisory
                  </span>
                  <h3 className="font-display font-bold text-navy text-2xl sm:text-3xl mb-3 leading-snug">
                    Direct Access to Practice Leadership
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    Speak directly with our senior Australian advisors and cloud architects to diagnose operating model bottlenecks, scope custom engineering, or mobilize fractional delivery teams.
                  </p>

                  <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-blue shrink-0" />
                      <span>Zero-obligation architectural &amp; strategy diagnostic</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-blue shrink-0" />
                      <span>Sydney &amp; Melbourne practice leads directly</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-blue shrink-0" />
                      <span>Board-ready execution feasibility scoping</span>
                    </div>
                  </div>

                  <a
                    href="#contact-form-section"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-blue text-white font-semibold font-display text-sm hover:bg-navy transition-all no-underline shadow-sm w-fit"
                  >
                    <span>Request Discovery Session Below</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
