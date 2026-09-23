import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { Car, ShieldCheck, HeartPulse, Layers, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 'mota-app',
    name: 'MOTA App',
    category: 'Fleet & Motor Automation',
    tagline: 'Automated Motor Insurance Claims, Fleet Telematics & Assessment Workflow',
    description:
      'MOTA App streamlines the end-to-end lifecycle for commercial motor insurers, fleet operators, and assessment panels. By replacing manual paperwork with automated FNOL triage, repairer allocation, and real-time telematics inspection, claims cycle times drop from weeks to hours.',
    icon: Car,
    capabilities: [
      'Instant FNOL digital capture & mobile photo assessment',
      'Automated repairer network routing & quotation validation',
      'Real-time fleet tracking & telematics telemetry integration',
      'APRA & regulatory compliance audit trails built-in',
    ],
    idealFor: 'Insurers, Fleet Operators, Broker Networks & Underwriters',
  },
  {
    id: 'care-converge',
    name: 'Care Converge',
    category: 'Healthcare & Care Operations',
    tagline: 'Unified Care Management, Clinical Workflow Orchestration & Compliance Telemetry',
    description:
      'Care Converge unifies participant and patient records, shift rostering, incident reporting, and service tracking into one connected platform. Engineered for aged care operators, NDIS providers, and clinical organizations, it eliminates fragmented paperwork, safeguards service compliance, and elevates quality of care.',
    icon: HeartPulse,
    capabilities: [
      'Connected participant & patient care plans with real-time shift logging',
      'Automated NDIS & Aged Care Quality Standards compliance reporting',
      'Incident management, clinical auditing & rapid triage workflows',
      'Interoperable electronic health records (EHR) & billing integrations',
    ],
    idealFor: 'Aged Care Operators, NDIS Providers, Hospital Networks & Allied Health Clinics',
  },
  {
    id: 'policy-vault',
    name: 'Policy Vault',
    category: 'Governance & Compliance',
    tagline: 'Enterprise Policy Management, Version Governance & Regulatory Audit Repository',
    description:
      'Policy Vault centralizes corporate policies, regulatory mandates, and operational procedures into an immutable, version-controlled compliance hub. Teams track policy attestations, automate lifecycle reviews, and generate comprehensive compliance matrices for boards and regulators.',
    icon: ShieldCheck,
    capabilities: [
      'Automated policy lifecycle reviews & executive sign-off workflows',
      'Version-controlled compliance tracking with diff auditing',
      'Enterprise-wide employee attestation & comprehension tracking',
      'Instant export of audit-ready compliance matrices for regulators',
    ],
    idealFor: 'Chief Risk Officers, Legal Counsel & Enterprise Compliance Teams',
  },
  {
    id: 'remicon',
    name: 'RemiCon',
    category: 'Financial Infrastructure',
    tagline: 'Automated High-Volume Remittance Routing & Financial Ledger Reconciliation',
    description:
      'RemiCon is the institutional engine for reconciling millions of transaction lines across multi-currency bank feeds, payment gateways, and balance sheet accounts. It automates 99.4% of exception handling, eliminating manual spreadsheet matching and balance discrepancies.',
    icon: Layers,
    capabilities: [
      'Sub-second matching engine for high-volume banking & card feeds',
      'AI-powered exception categorization & discrepancy resolution',
      'Multi-currency treasury clearing & automated journal entries',
      'Full SOX/APRA-compliant audit trail with cryptographic tamper-proofing',
    ],
    idealFor: 'CFOs, Treasury Heads, Transaction Bankers & FinTech Operators',
  },
];

export default function Products() {
  return (
    <>
      <SEO
        title="Our Products | Enterprise Software Platforms | ConvergeTec"
        description="Explore ConvergeTec's proprietary enterprise software platforms: MOTA App, Care Converge, Policy Vault, and RemiCon."
        path="/products"
      />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800 bg-offwhite dark:bg-[#070D1E] transition-colors duration-200">
        <div className="content-container text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide text-blue dark:text-cyan mb-4 px-3.5 py-1.5 rounded-full bg-blue/5 dark:bg-cyan/10">
            <Sparkles className="w-4 h-4 text-blue dark:text-cyan" />
            <span>Proprietary Software Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy dark:text-white tracking-tight leading-[1.08] mb-6">
            Engineered for scale.<br />
            Built for enterprise reality.
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            ConvergeTec designs, builds, and deploys purpose-built software platforms that automate complex workflows, govern regulatory policies, and reconcile high-volume enterprise operations.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              className="px-7 py-3.5 text-sm font-semibold rounded-xl shadow-sm gap-2"
            >
              <span>Schedule Product Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products Showcase Grid */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-[#070D1E] border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
        <div className="content-container">
          <div className="space-y-16 lg:space-y-20 max-w-5xl mx-auto">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  id={product.id}
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0D162B] p-8 sm:p-10 lg:p-12 scroll-mt-28 transition-colors duration-200"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Details */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue/10 dark:bg-blue/20 text-blue dark:text-cyan flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-sm font-bold uppercase tracking-wide text-blue dark:text-cyan block mb-0.5">
                            {product.category}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy dark:text-white tracking-tight leading-tight">
                            {product.name}
                          </h2>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100 mb-4 leading-snug">
                        {product.tagline}
                      </p>

                      <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed mb-6 font-normal">
                        {product.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200 block mb-3 uppercase tracking-wide">
                          Key Platform Capabilities:
                        </span>
                        <div className="space-y-2.5">
                          {product.capabilities.map((cap) => (
                            <div key={cap} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-100 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-blue dark:text-cyan shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Card / CTA */}
                    <div className="lg:col-span-5 bg-white dark:bg-[#121E38] rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm flex flex-col justify-between h-full transition-colors duration-200">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-2">
                          Deployment Profile
                        </span>
                        <h3 className="text-lg font-bold text-navy dark:text-white mb-3">
                          Enterprise Ready
                        </h3>
                        <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-5">
                          Available as managed multi-tenant cloud SaaS or deployed directly into your dedicated AWS/Azure private cloud.
                        </p>

                        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 mb-6 text-sm text-slate-800 dark:text-slate-200 space-y-2">
                          <div>
                            <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">Designed For:</span>
                            <span className="text-slate-700 dark:text-slate-300">{product.idealFor}</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        to={`/contact?product=${product.id}`}
                        variant="primary"
                        className="w-full py-3 text-sm font-semibold rounded-xl shadow-sm gap-2"
                      >
                        <span>Book {product.name} Demo</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
