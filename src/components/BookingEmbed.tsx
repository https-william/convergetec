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
            <div className="w-full rounded-3xl border border-navy/15 bg-white p-6 sm:p-10 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* 2.5D Contact Art */}
                <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-navy/15 shadow-md aspect-[4/3] bg-navy group">
                  <img
                    src="/images/art-25d-contact.jpg"
                    alt="2.5D editorial illustration of ConvergeTec practice leads ready for executive discovery sessions"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/85 backdrop-blur-md border border-white/20 text-offwhite text-xs font-mono tracking-wider uppercase font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                    Discovery Dock
                  </div>
                </div>

                {/* Scheduling Overview & Agenda */}
                <div className="lg:col-span-6 flex flex-col justify-center text-left">
                  <span className="font-mono text-xs uppercase tracking-wider text-blue font-bold mb-2">
                    Executive Consultation // 30 Minutes
                  </span>
                  <h3 className="font-display font-bold text-navy text-2xl sm:text-3xl mb-3 leading-snug">
                    Direct Access to Practice Leadership
                  </h3>
                  <p className="text-ink/75 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    Speak directly with our senior Australian advisors and cloud architects to diagnose operating model bottlenecks, scope custom engineering, or staff fractional teams.
                  </p>

                  <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-ink/80 font-medium">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                      <span>Zero-obligation architectural &amp; strategy review</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                      <span>Sydney &amp; Melbourne practice leads directly</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                      <span>Ready for live Calendly drop-in via the <code className="font-mono text-xs bg-navy/5 px-1 rounded text-navy">src</code> prop</span>
                    </div>
                  </div>

                  <a
                    href="#contact-form-section"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue text-white font-semibold font-display text-sm hover:bg-navy transition-colors no-underline shadow-md shadow-blue/20 w-fit"
                  >
                    <span>Or Send a Message Below</span>
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
