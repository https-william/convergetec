interface BookingEmbedProps {
  src?: string;
  title?: string;
}

export default function BookingEmbed({
  src = import.meta.env.VITE_GHL_FORM_URL || '',
  title = 'ConvergeTec Discovery Call Booking',
}: BookingEmbedProps) {
  return (
    <section id="booking-discovery" className="w-full bg-offwhite dark:bg-[#070D1E] pb-12 sm:pb-16 scroll-mt-24 transition-colors duration-200">
      <div className="content-container">
        <div className="max-w-[850px] mx-auto">
          {src ? (
            <div className="w-full min-h-[560px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-[#0D162B]">
              <iframe
                src={src}
                title={title}
                className="w-full h-full min-h-[560px] border-0"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-full rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0D162B] p-8 sm:p-12 shadow-xl transition-colors duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Column: Clean Executive Consultation Briefing */}
                <div className="lg:col-span-6 rounded-xl bg-slate-50/80 dark:bg-[#121E38] border border-slate-200/90 dark:border-slate-800 p-7 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue dark:bg-cyan" />
                        <span className="text-sm font-bold uppercase tracking-wide text-navy dark:text-white">
                          Executive Consultation
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                        30 Min Discovery
                      </span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-bold text-navy dark:text-white text-lg mb-1">
                          Direct Partner-Led Advisory
                        </h4>
                        <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                          Conducted virtually via Microsoft Teams or in-person across our Sydney, Melbourne, Queensland, and Nigeria practices.
                        </p>
                      </div>

                      <div className="pt-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-2">
                          Diagnostic Scope:
                        </span>
                        <ul className="space-y-2 text-sm text-slate-800 dark:text-slate-100 font-medium list-none p-0 m-0">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan shrink-0" />
                            <span>Target Operating Model &amp; Architecture Review</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan shrink-0" />
                            <span>Custom Cloud SaaS &amp; Microservices Scoping</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan shrink-0" />
                            <span>Workforce Academy &amp; In-House IP Retention</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan shrink-0" />
                            <span>Fractional Executives &amp; Pod Deployment</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Strict NDA Protected</span>
                    <span>No Obligation Feasibility</span>
                  </div>
                </div>

                {/* Right Column: Scheduling Overview & Direct Action */}
                <div className="lg:col-span-6 flex flex-col justify-center text-left">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-blue dark:text-cyan mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan" />
                    <span>Executive Intake</span>
                  </div>

                  <h3 className="font-extrabold text-navy dark:text-white text-2xl sm:text-3xl lg:text-4xl mb-4 leading-tight tracking-tight">
                    Schedule Your Discovery Session
                  </h3>

                  <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed mb-6 font-normal">
                    Connect directly with senior practice leadership to diagnose operating bottlenecks, scope bespoke engineering, and architect executable technical roadmaps.
                  </p>

                  <div className="space-y-3 mb-8 text-sm sm:text-base text-slate-800 dark:text-slate-100 font-medium">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan shrink-0" />
                      <span>Confidential board-level feasibility diagnosis</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan shrink-0" />
                      <span>Direct partner access — no intermediaries</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue dark:bg-cyan shrink-0" />
                      <span>Guaranteed follow-up within one business day</span>
                    </div>
                  </div>

                  <div>
                    <a
                      href="#contact-form-section"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-navy dark:bg-blue hover:bg-blue dark:hover:bg-[#006fd6] text-white font-semibold text-sm transition-colors no-underline shadow-sm"
                    >
                      <span>Complete Intake Form Below</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
