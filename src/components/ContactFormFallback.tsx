import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import Button from './Button';

const topics = [
  'Operating Model Transformation',
  'Custom Software & Cloud Systems',
  'Workforce Capability Academy',
  'Fractional Leadership & Talent',
  'Product Demonstration',
  'Product Partnership / Joint Venture',
];

const productMap: Record<string, string> = {
  'mota-app': 'MOTA App',
  'care-converge': 'Care Converge',
  'policy-vault': 'Policy Vault',
  'remicon': 'RemiCon',
};

export default function ContactFormFallback() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    const productParam = searchParams.get('product');
    if (productParam && productMap[productParam]) {
      const productName = productMap[productParam];
      setSelectedTopic('Product Demonstration');
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `We would like to request an executive demonstration and discovery session for ${productName}.`,
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const webhookUrl = import.meta.env.VITE_GHL_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        setLoading(true);
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company || 'Not Specified',
            topic: selectedTopic,
            message: formData.message,
            source: 'ConvergeTec Website Contact Form',
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.warn('GHL Webhook submission notice:', err);
      } finally {
        setLoading(false);
      }
    }
    setSubmitted(true);
  };

  return (
    <section id="contact-form-section" className="w-full bg-offwhite dark:bg-[#070D1E] py-16 sm:py-24 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
      <div className="content-container">
        <div className="max-w-[720px] mx-auto bg-white dark:bg-[#0D162B] rounded-2xl shadow-xl shadow-navy/5 dark:shadow-2xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 transition-colors duration-200">
          <div className="mb-10">
            <span className="text-sm uppercase tracking-wide text-blue dark:text-cyan font-bold block mb-2">
              Direct Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy dark:text-white mb-3">
              Send a Direct Message
            </h2>
            <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg m-0 leading-relaxed">
              Our Sydney &amp; Melbourne leadership responds within one business day.
            </p>
          </div>

          {submitted ? (
            <div
              role="alert"
              className="rounded-2xl bg-blue/5 dark:bg-blue/10 border border-blue/20 dark:border-blue/30 p-8 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue/10 dark:bg-blue/20 text-blue dark:text-cyan mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-navy dark:text-white font-bold text-xl mb-2">
                Inquiry Dispatched
              </h3>
              <p className="text-slate-700 dark:text-slate-200 text-base max-w-sm mx-auto m-0 leading-relaxed">
                Thank you. A ConvergeTec practice lead will follow up with you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7" noValidate={false}>
              {/* Interactive Topic Selector */}
              <div>
                <label className="block font-display text-sm font-bold uppercase tracking-wider text-navy dark:text-white mb-3">
                  How can we help?
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {topics.map((topic) => {
                    const isSelected = selectedTopic === topic;
                    return (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer border ${
                          isSelected
                            ? 'bg-blue text-white border-blue shadow-sm'
                            : 'bg-offwhite dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                        }`}
                      >
                        {topic}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-display text-sm font-bold uppercase tracking-wider text-navy dark:text-white mb-2"
                  >
                    Your Name <span className="text-blue dark:text-cyan" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-offwhite/50 dark:bg-slate-900/80 px-4 py-3.5 font-body text-slate-900 dark:text-white text-base transition-all focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent focus:bg-white dark:focus:bg-slate-900"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-display text-sm font-bold uppercase tracking-wider text-navy dark:text-white mb-2"
                  >
                    Work Email <span className="text-blue dark:text-cyan" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@enterprise.com.au"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-offwhite/50 dark:bg-slate-900/80 px-4 py-3.5 font-body text-slate-900 dark:text-white text-base transition-all focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent focus:bg-white dark:focus:bg-slate-900"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="contact-company"
                  className="block font-display text-sm font-bold uppercase tracking-wider text-navy dark:text-white mb-2"
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
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-offwhite/50 dark:bg-slate-900/80 px-4 py-3.5 font-body text-slate-900 dark:text-white text-base transition-all focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent focus:bg-white dark:focus:bg-slate-900"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-display text-sm font-bold uppercase tracking-wider text-navy dark:text-white mb-2"
                >
                  Project Context <span className="text-blue dark:text-cyan" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the initiative or challenge..."
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-offwhite/50 dark:bg-slate-900/80 px-4 py-3.5 font-body text-slate-900 dark:text-white text-base transition-all focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent focus:bg-white dark:focus:bg-slate-900 resize-y leading-relaxed"
                />
              </div>

              {/* Submit */}
              <div className="pt-3">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={loading}
                  className="w-full sm:w-auto px-9 py-4 text-base font-display font-semibold flex items-center justify-center gap-2.5 shadow-lg shadow-blue/20 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
