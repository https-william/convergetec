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
            <div className="w-full min-h-[500px] rounded-2xl border-2 border-dashed border-navy/30 bg-white/60 p-8 flex flex-col items-center justify-center text-center">
              <svg
                className="w-12 h-12 text-navy/40 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              <p className="font-display font-medium text-navy/70 text-lg sm:text-xl m-0">
                Discovery call booking embed — placeholder
              </p>
              <span className="font-body text-xs text-ink/50 mt-2">
                Drop in Calendly or GoHighLevel embed URL into src prop
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
