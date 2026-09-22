import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Button from './Button';

const differences = [
  {
    topic: 'Accountability Model',
    traditionalTitle: 'Fragmented Finger-Pointing',
    traditionalDesc: 'Separate consultancies, software houses, and staffing agencies blame each other whenever project timelines slip or architectures break.',
    convergeTitle: 'Single Board-Level Accountability',
    convergeDesc: 'One partner and one accountable leadership team owns end-to-end delivery across operating model, cloud software, and permanent workforce adoption.',
  },
  {
    topic: 'Architecture & Execution',
    traditionalTitle: 'Strategy Decks That Cannot Be Built',
    traditionalDesc: 'Strategy consultants deliver theoretical slide decks with no implementation accountability, leaving engineers to untangle unviable blueprints.',
    convergeTitle: 'Co-Located Architects & Engineers',
    convergeDesc: 'Senior software engineers and enterprise architects co-design systems alongside advisors, ensuring every blueprint translates immediately into running cloud code.',
  },
  {
    topic: 'Workforce & IP Retention',
    traditionalTitle: 'Knowledge Evaporates on Contract End',
    traditionalDesc: 'External agencies walk away when contracts finish. In-house teams are left without the documentation or capability to operate the technology.',
    convergeTitle: 'Permanent In-House Capability',
    convergeDesc: 'Our Workforce Academy upskills your permanent staff during delivery, guaranteeing 100% of intellectual property and operational capability stays inside your business.',
  },
  {
    topic: 'Velocity & Scaling',
    traditionalTitle: '3-to-6 Month Procurement Lag',
    traditionalDesc: 'Months lost negotiating separate supplier MSAs, vetting contractor recruiters, and re-explaining context to disparate teams.',
    convergeTitle: '48-Hour Pod Mobilization',
    convergeDesc: 'Deploy vetted fractional executives, technical leads, and pre-aligned delivery triads directly into your workstreams within 48 hours.',
  },
];

export default function Differentiator() {
  return (
    <section className="relative w-full bg-white py-20 sm:py-28 border-t border-slate-200/80">
      <div className="content-container">
        {/* Section Header */}
        <div className="max-w-[760px] mx-auto text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-wider text-blue uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            <span>The Accountability Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-[1.1] mb-5">
            The Strategic Divide:<br />
            Multi-Vendor Fragmentation vs. One Cohesive Engine
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-[640px] mx-auto">
            Traditional transformations collapse in the handoff gaps between strategy firms, development agencies, and recruitment vendors. ConvergeTec closes those gaps under a single accountable partnership.
          </p>
        </div>

        {/* Side-by-Side Architectural Contrast Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Card 1: The Multi-Vendor Sourcing Bottleneck */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-slate-50/60 p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Status Quo Approach
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-md">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Fragmented Sourcing
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-3">
                Where Transformations Bleed Velocity
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                Juggling multiple specialized suppliers creates friction, misaligned incentives, and conflicting milestones.
              </p>

              <div className="space-y-6">
                {differences.map((item) => (
                  <div key={item.topic} className="pb-5 border-b border-slate-200/70 last:border-0 last:pb-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      {item.topic}
                    </span>
                    <h4 className="text-base font-bold text-slate-800 mb-1.5">
                      {item.traditionalTitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0">
                      {item.traditionalDesc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-200 text-xs text-slate-500">
              Typical outcome: Scope creep, delayed launch, and reliance on external staff.
            </div>
          </motion.div>

          {/* Card 2: The ConvergeTec Integrated Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border-2 border-blue/40 bg-white p-8 sm:p-10 shadow-xl shadow-blue/5 flex flex-col justify-between relative"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue">
                  ConvergeTec Operating Model
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue bg-blue/10 border border-blue/20 px-2.5 py-1 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Unified Enterprise Partner
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-3">
                The Single-Engine Advantage
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                All four disciplines — strategy, engineering, academy, and talent — aligned under one direct contract.
              </p>

              <div className="space-y-6">
                {differences.map((item) => (
                  <div key={item.topic} className="pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue block mb-1">
                      {item.topic}
                    </span>
                    <h4 className="text-base font-bold text-navy mb-1.5">
                      {item.convergeTitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed m-0">
                      {item.convergeDesc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs font-semibold text-navy">
                Board accountability backed by delivery milestones.
              </span>
              <Button
                to="/contact"
                variant="primary"
                className="px-5 py-2.5 text-xs font-semibold rounded-md shadow-xs gap-1.5"
              >
                <span>Schedule Architecture Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
