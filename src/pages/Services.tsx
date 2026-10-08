import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import {
  FileText,
  Layers,
  Sparkles,
  BarChart3,
  Terminal,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: typeof FileText;
  capabilities: string[];
}

const services: ServiceItem[] = [
  {
    id: 'business-analysis',
    name: 'Business Analysis',
    tagline: 'Clarity before change.',
    description:
      'We work with your stakeholders to understand business challenges, identify opportunities and translate your needs into clear requirements. Whether you are improving operations or implementing a new system, we help you define the right solution and prepare for successful delivery.',
    icon: FileText,
    capabilities: [
      'Requirements discovery and documentation',
      'Business process mapping and improvement',
      'Stakeholder engagement and workshops',
      'Business cases and options analysis',
      'System evaluation and implementation support',
      'User acceptance testing and change readiness',
    ],
  },
  {
    id: 'product-management',
    name: 'Product Management',
    tagline: 'From idea to a product that delivers value.',
    description:
      'We help you shape, validate and manage digital products around customer needs and business priorities. From early discovery through launch and ongoing improvement, we provide the direction and delivery support needed to move your product forward.',
    icon: Layers,
    capabilities: [
      'Product discovery and customer research',
      'Product strategy and roadmap development',
      'Minimum viable product planning',
      'Feature prioritisation and backlog management',
      'Product ownership and delivery coordination',
      'Launch planning and performance analysis',
    ],
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    tagline: 'Practical AI for smarter business operations.',
    description:
      'We help you identify where AI can add value and implement solutions that fit your workflows. Our approach considers accuracy, privacy and human oversight alongside efficiency, helping your team adopt AI with confidence.',
    icon: Sparkles,
    capabilities: [
      'AI readiness assessments and strategy',
      'Use-case discovery and feasibility analysis',
      'AI assistants and knowledge tools',
      'Intelligent document processing',
      'Workflow automation and system integration',
      'AI governance and staff training',
    ],
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    tagline: 'Clear insights. Better decisions.',
    description:
      'We turn business data into useful insights that help you understand performance, identify trends and plan your next move. From data preparation to dashboards and reporting, we make information easier to access, interpret and act on.',
    icon: BarChart3,
    capabilities: [
      'Data cleaning and quality assessment',
      'Power BI dashboards and reporting',
      'KPI development and performance monitoring',
      'Operational, financial and customer analysis',
      'Data integration and reporting automation',
      'Trend analysis and forecasting',
    ],
  },
  {
    id: 'devops-engineering',
    name: 'DevOps Engineering',
    tagline: 'Reliable systems. More consistent software delivery.',
    description:
      'We help your development and operations teams improve how software is built, tested, deployed and maintained. Through automation, cloud infrastructure and monitoring, we support dependable releases and systems that can grow with your business.',
    icon: Terminal,
    capabilities: [
      'DevOps assessments and improvement planning',
      'CI/CD pipeline development',
      'Cloud infrastructure and infrastructure as code',
      'Deployment and environment automation',
      'Application monitoring and troubleshooting',
      'Security integration, backup and recovery planning',
    ],
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | ConvergeTec"
        description="Expertise that connects business goals with practical technology solutions: Business Analysis, Product Management, Artificial Intelligence, Data Analysis, and DevOps Engineering."
        path="/services"
      />

      <div className="w-full bg-offwhite dark:bg-[#070D1E] transition-colors duration-200">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 border-b border-slate-200/80 dark:border-slate-800">
          <div className="content-container">
            <div className="max-w-[880px] mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue/10 dark:bg-blue/20 text-blue dark:text-cyan text-sm font-semibold tracking-wide uppercase mb-5">
                  ConvergeTec Delivery Capabilities
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-navy dark:text-white tracking-tight mb-6">
                  Our Services
                </h1>
                <p className="text-xl sm:text-2xl font-display font-semibold text-blue dark:text-cyan mb-5">
                  Expertise that connects business goals with practical technology solutions.
                </p>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed max-w-[760px] mx-auto mb-8 font-normal">
                  At ConvergeTec, we help organisations improve processes, develop products and make better use of technology. From understanding your business needs to implementing solutions, we provide consulting and delivery support tailored to your goals.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    to="/contact"
                    variant="primary"
                    className="px-8 py-3.5 text-base font-semibold shadow-lg shadow-blue/20"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <Button
                    to="/contact#booking-discovery"
                    variant="secondary"
                    className="px-7 py-3.5 text-base font-semibold"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Book Discovery Call</span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-20 sm:py-28">
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className={`rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0D162B] p-8 sm:p-10 shadow-lg shadow-navy/5 dark:shadow-2xl transition-all hover:border-blue/50 dark:hover:border-cyan/50 flex flex-col justify-between ${
                      index === 4 ? 'lg:col-span-2 max-w-[1000px] mx-auto w-full' : ''
                    }`}
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-13 h-13 rounded-xl bg-blue/10 dark:bg-cyan/15 text-blue dark:text-cyan flex items-center justify-center shrink-0 border border-blue/20 dark:border-cyan/30">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md">
                          Service 0{index + 1}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy dark:text-white mb-2">
                        {service.name}
                      </h2>
                      <p className="text-base font-display font-semibold text-blue dark:text-cyan mb-4">
                        {service.tagline}
                      </p>
                      <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed mb-6 font-normal">
                        {service.description}
                      </p>

                      {/* Capabilities Checklist */}
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 mb-8">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3.5">
                          Key Capabilities &amp; Deliverables
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0">
                          {service.capabilities.map((cap, capIdx) => (
                            <li key={capIdx} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-blue dark:text-cyan shrink-0 mt-0.5" />
                              <span className="leading-snug">{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                      <Link
                        to={`/contact?service=${service.id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue dark:text-cyan hover:underline group no-underline"
                      >
                        <span>Inquire about {service.name}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        to="/contact#booking-discovery"
                        className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-navy dark:hover:text-white no-underline"
                      >
                        Book Discovery Session &rarr;
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#0A1224] border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
          <div className="content-container">
            <div className="max-w-[760px] mx-auto text-center">
              <span className="text-sm uppercase tracking-wide text-blue dark:text-cyan font-bold block mb-3">
                Start Today
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy dark:text-white mb-4">
                Let&apos;s Move Your Business Forward
              </h2>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-8">
                Whether you need support for a specific project or ongoing expertise alongside your team, ConvergeTec can help you take the next step.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  to="/contact"
                  variant="primary"
                  className="px-9 py-4 text-base font-semibold shadow-xl shadow-blue/20"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>Discuss Your Project</span>
                </Button>
                <Button
                  to="/contact#booking-discovery"
                  variant="secondary"
                  className="px-8 py-4 text-base font-semibold"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Schedule Practice Discovery</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
