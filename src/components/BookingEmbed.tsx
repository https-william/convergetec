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
            <div className="w-full min-h-[500px] rounded-2xl overflow-hidden border border-navy/20 shadow-sm bg-white">
              <iframe
                src={src}
                title={title}
                className="w-full h-full min-h-[500px] border-0"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-full min-h-[480px] rounded-2xl border border-navy/15 bg-white p-8 sm:p-12 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden">
              {/* Technical Terminal Datum Header */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-navy/5 text-navy/70 text-xs font-mono tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
                Scheduling Dock // Discovery Session
              </div>

              <div className="w-16 h-16 rounded-2xl bg-navy/5 border border-navy/10 flex items-center justify-center mb-5 text-blue">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </div>

              <h3 className="font-display font-bold text-navy text-xl sm:text-2xl mb-2">
                Discovery call booking embed — placeholder
              </h3>
              <p className="font-body text-sm text-ink/70 max-w-md m-0">
                Awaiting Calendly or GoHighLevel embed URL. Ready for zero-rebuild drop-in deployment via the <code className="font-mono text-xs bg-navy/5 px-1.5 py-0.5 rounded text-navy">src</code> prop.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
