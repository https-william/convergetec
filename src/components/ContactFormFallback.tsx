import { useState, type FormEvent } from 'react';

export default function ContactFormFallback() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire to form handler once backend confirmed
    console.log('Contact form submission (placeholder):', formData);
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-offwhite py-12 sm:py-16 border-t border-navy/10">
      <div className="content-container">
        <div className="max-w-[700px] mx-auto bg-white rounded-2xl shadow-sm border border-navy/10 p-6 sm:p-10">
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy mb-2">
              Prefer to send a direct message?
            </h2>
            <p className="font-body text-ink/70 text-sm sm:text-base m-0">
              Leave your details below and our team will respond within one business day.
            </p>
          </div>

          {submitted ? (
            <div
              role="alert"
              className="rounded-xl bg-blue/10 border border-blue/30 p-6 text-center"
            >
              <h3 className="font-display text-navy font-bold text-lg mb-2">
                Thank you for reaching out
              </h3>
              <p className="font-body text-ink/80 text-sm m-0">
                Your message has been received. We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-body text-xs font-semibold uppercase tracking-wider text-navy mb-2"
                  >
                    Name <span className="text-blue" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-navy/20 bg-offwhite/50 px-4 py-3 font-body text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent focus:bg-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-body text-xs font-semibold uppercase tracking-wider text-navy mb-2"
                  >
                    Email <span className="text-blue" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@organisation.com.au"
                    className="w-full rounded-lg border border-navy/20 bg-offwhite/50 px-4 py-3 font-body text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="contact-company"
                  className="block font-body text-xs font-semibold uppercase tracking-wider text-navy mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Organisation or business name"
                  className="w-full rounded-lg border border-navy/20 bg-offwhite/50 px-4 py-3 font-body text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent focus:bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-body text-xs font-semibold uppercase tracking-wider text-navy mb-2"
                >
                  Message <span className="text-blue" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can ConvergeTec support your organisation?"
                  className="w-full rounded-lg border border-navy/20 bg-offwhite/50 px-4 py-3 font-body text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent focus:bg-white resize-y"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue hover:bg-cyan text-white hover:text-navy font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 cursor-pointer inline-flex items-center justify-center"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
