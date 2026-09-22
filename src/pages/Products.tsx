import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { Car, ShieldCheck, Database, Layers, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 'motor-app',
    name: 'Motor App',
    category: 'Fleet & Motor Automation',
    tagline: 'Automated Motor Insurance Claims, Fleet Telematics & Assessment Workflow',
    description:
      'Motor App streamlines the end-to-end lifecycle for commercial motor insurers, fleet operators, and assessment panels. By replacing manual paperwork with automated FNOL triage, repairer allocation, and real-time telematics inspection, claims cycle times drop from weeks to hours.',
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
    id: 'big-converge',
    name: 'Big Converge',
    category: 'Data & Systems Integration',
    tagline: 'Unified Enterprise Integration Engine & Real-Time Operational Telemetry',
    description:
      'Big Converge deconstructs enterprise data silos by seamlessly orchestrating real-time data sync across disparate legacy systems, core banking engines, modern cloud SaaS, and specialized ERPs. It provides executives with a single pane of glass over operational performance.',
    icon: Database,
    capabilities: [
      'High-throughput microservices pipeline & zero-downtime event streaming',
      'Pre-built connectors for legacy on-prem systems & modern cloud APIs',
      'Automated schema reconciliation & real-time deduplication',
      'Executive dashboard telemetry with latency-free KPI monitoring',
    ],
    idealFor: 'Enterprise CIOs, Chief Data Officers & Solutions Architects',
  },
  {
    id: 'remicon',
    name: 'Remicon',
    category: 'Financial Infrastructure',
    tagline: 'Automated High-Volume Remittance Routing & Financial Ledger Reconciliation',
    description:
      'Remicon is the institutional engine for reconciling millions of transaction lines across multi-currency bank feeds, payment gateways, and balance sheet accounts. It automates 99.4% of exception handling, eliminating manual spreadsheet matching and balance discrepancies.',
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
        description="Explore ConvergeTec's proprietary enterprise software products: Motor App, Policy Vault, Big Converge, and Remicon."
        path="/products"
      />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 border-b border-slate-200/80 bg-offwhite">
        <div className="content-container text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-blue mb-4">
            <Sparkles className="w-4 h-4 text-blue" />
            <span>Proprietary Software Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy tracking-tight leading-[1.08] mb-6">
            Engineered for scale.<br />
            Built for enterprise reality.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            ConvergeTec designs, builds, and deploys purpose-built software platforms that automate complex workflows, govern regulatory policies, and reconcile high-volume enterprise operations.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              className="px-7 py-3.5 text-sm font-semibold rounded-md shadow-sm gap-2"
            >
              <span>Schedule Product Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products Showcase Grid */}
      <section className="w-full py-16 md:py-24 bg-white border-b border-slate-200/80">
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
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-8 sm:p-10 lg:p-12 scroll-mt-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Details */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue/10 text-blue flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-blue block">
                            {product.category}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight leading-tight">
                            {product.name}
                          </h2>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg font-medium text-slate-800 mb-4 leading-snug">
                        {product.tagline}
                      </p>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        {product.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-xs font-semibold text-slate-500 block mb-3 uppercase tracking-wider">
                          Key Platform Capabilities:
                        </span>
                        <div className="space-y-2">
                          {product.capabilities.map((cap) => (
                            <div key={cap} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Card / CTA */}
                    <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between h-full">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Deployment Profile
                        </span>
                        <h3 className="text-lg font-bold text-navy mb-3">
                          Enterprise Ready
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-5">
                          Available as managed multi-tenant cloud SaaS or deployed directly into your dedicated AWS/Azure private cloud.
                        </p>

                        <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 mb-6 text-xs text-slate-700 space-y-2">
                          <div>
                            <span className="font-semibold text-slate-900 block">Designed For:</span>
                            <span className="text-slate-600">{product.idealFor}</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        to={`/contact?product=${product.id}`}
                        variant="primary"
                        className="w-full py-3 text-sm font-semibold rounded-md shadow-sm gap-2"
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
