import { useState, type FormEvent } from 'react';
import Button from './Button';
import { CheckCircle2, Send } from 'lucide-react';

const topics = [
  'Strategic Advisory',
  'Custom Cloud Software',
  'Workforce Academy',
  'Embedded Talent',
  'Full Transformation',
];

export default function ContactFormFallback() {
  const [selectedTopic, setSelectedTopic] = useState<string>('Full Transformation');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', { ...formData, topic: selectedTopic });
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-offwhite py-12 sm:py-16 border-t border-navy/10">
      <div className="content-container">
        <div className="max-w-[720px] mx-auto bg-white rounded-2xl shadow-xl shadow-navy/5 border border-navy/10 p-6 sm:p-10">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-blue font-bold block mb-1">
              Direct Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy mb-2">
              Send a Direct Message
            </h2>
            <p className="font-body text-ink/70 text-sm sm:text-base m-0">
              Our Sydney &amp; Melbourne leadership responds within one business day.
            </p>
          </div>

          {submitted ? (
            <div
              role="alert"
              className="rounded-2xl bg-blue/5 border border-blue/20 p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue/10 text-blue mx-auto flex items-center justify-center mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-navy font-bold text-xl mb-2">
                Inquiry Dispatched
              </h3>
              <p className="font-body text-ink/80 text-sm max-w-sm mx-auto m-0">
                Thank you. A ConvergeTec practice lead will follow up with you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
              {/* Interactive Topic Selector */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider text-navy mb-2.5">
                  How can we help?
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => {
                    const isSelected = selectedTopic === topic;
                    return (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer border ${
                          isSelected
                            ? 'bg-blue text-white border-blue shadow-sm'
                            : 'bg-offwhite text-navy/70 border-navy/10 hover:border-navy/30'
                        }`}
                      >
                        {topic}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-body text-xs font-semibold uppercase tracking-wider text-navy mb-2"
                  >
                    Your Name <span className="text-blue" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-navy/15 bg-offwhite/50 px-4 py-3 font-body text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent focus:bg-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-body text-xs font-semibold uppercase tracking-wider text-navy mb-2"
                  >
                    Work Email <span className="text-blue" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@enterprise.com.au"
                    className="w-full rounded-xl border border-navy/15 bg-offwhite/50 px-4 py-3 font-body text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="contact-company"
                  className="block font-body text-xs font-semibold uppercase tracking-wider text-navy mb-2"
                >
                  Organisation
                </label>
                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company or Department Name"
                  className="w-full rounded-xl border border-navy/15 bg-offwhite/50 px-4 py-3 font-body text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent focus:bg-white"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-body text-xs font-semibold uppercase tracking-wider text-navy mb-2"
                >
                  Project Context <span className="text-blue" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the initiative or challenge..."
                  className="w-full rounded-xl border border-navy/15 bg-offwhite/50 px-4 py-3 font-body text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent focus:bg-white resize-y"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto px-8 py-3.5 text-base flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
