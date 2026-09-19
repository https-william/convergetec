import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Code2, GraduationCap, Users, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';

interface SimulationTrack {
  id: 'consulting' | 'software' | 'academy' | 'talent';
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  title: string;
  oneLiner: string;
  metric: string;
  metricLabel: string;
  deliverables: string[];
  href: string;
}

const tracks: SimulationTrack[] = [
  {
    id: 'consulting',
    label: 'Advisory',
    icon: Compass,
    accentColor: '#00C4F0',
    title: 'Strategic Advisory & Architecture',
    oneLiner: 'Defensible roadmaps structured for immediate engineering execution.',
    metric: '3.4x',
    metricLabel: 'Faster Path to Production',
    deliverables: ['Target Operating Model', 'Data & AI Blueprint', 'Executive Change Framework'],
    href: '/services/consulting',
  },
  {
    id: 'software',
    label: 'Software',
    icon: Code2,
    accentColor: '#0078E0',
    title: 'Digital & Cloud Software',
    oneLiner: 'Custom cloud SaaS, workflow automation, and enterprise microservices.',
    metric: '99.9%',
    metricLabel: 'Architecture Reliability',
    deliverables: ['Full-Stack Production SaaS', 'Automated Integration Pipelines', 'AWS / Azure Cloud Infrastructure'],
    href: '/services/digital-software',
  },
  {
    id: 'academy',
    label: 'Academy',
    icon: GraduationCap,
    accentColor: '#00C4F0',
    title: 'Workforce Capability Academy',
    oneLiner: 'Executive masterclasses and certified enterprise transformation training.',
    metric: '100%',
    metricLabel: 'Internal IP Retention',
    deliverables: ['Enterprise Agile Masterclass', 'BA & Solution Architecture', 'Leadership Upskilling'],
    href: '/services/academy',
  },
  {
    id: 'talent',
    label: 'Talent',
    icon: Users,
    accentColor: '#0078E0',
    title: 'Resources & Embedded Talent',
    oneLiner: 'Pre-vetted fractional executives, tech leads, and agile delivery squads.',
    metric: '48hr',
    metricLabel: 'Squad Deployment SLA',
    deliverables: ['Fractional CTO / Head of Delivery', 'Senior Full-Stack Engineers', 'Lead Business Analysts'],
    href: '/services/resources-talent',
  },
];

export default function TransformationSimulator() {
  const [activeId, setActiveId] = useState<'consulting' | 'software' | 'academy' | 'talent'>('consulting');
  const activeTrack = tracks.find((t) => t.id === activeId) || tracks[0];

  return (
    <div
      data-glow-zone="true"
      className="w-full bg-navy text-offwhite rounded-2xl border border-navy-light/90 shadow-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl"
    >
      {/* Top 1px precision gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent"
        aria-hidden="true"
      />

      {/* Cockpit Header */}
      <div className="flex items-center justify-between pb-4 border-b border-navy-light/80 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="font-mono text-[11px] font-semibold tracking-widest uppercase text-cyan">
            Live Transformation Simulator
          </span>
        </div>
        <span className="text-[11px] font-mono text-offwhite/40 tracking-wider hidden sm:inline">
          INTERACTIVE ENGINE
        </span>
      </div>

      {/* Dynamic Topology Node Canvas */}
      <div className="relative h-32 sm:h-36 bg-navy-light/40 rounded-xl border border-navy-light p-3 mb-6 overflow-hidden flex items-center justify-between px-4 sm:px-8">
        {/* Animated Background Mesh Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="#0078E0" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#00C4F0" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Animated data pulse */}
          <circle cx="35%" cy="50%" r="3" fill="#00C4F0">
            <animate attributeName="cx" values="20%;50%" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="65%" cy="50%" r="3" fill="#0078E0">
            <animate attributeName="cx" values="50%;80%" dur="2.4s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Node 1: Advisory */}
        <div
          onClick={() => setActiveId('consulting')}
          className={`relative z-10 cursor-pointer flex flex-col items-center gap-1.5 transition-transform duration-200 ${
            activeId === 'consulting' ? 'scale-110' : 'opacity-60 hover:opacity-100'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
              activeId === 'consulting'
                ? 'bg-cyan/20 border-cyan text-cyan shadow-lg shadow-cyan/20'
                : 'bg-navy-light border-navy-light text-offwhite/70'
            }`}
          >
            <Compass className="w-5 h-5" />
          </div>
          <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">Advise</span>
        </div>

        {/* Node 2: Software */}
        <div
          onClick={() => setActiveId('software')}
          className={`relative z-10 cursor-pointer flex flex-col items-center gap-1.5 transition-transform duration-200 ${
            activeId === 'software' ? 'scale-110' : 'opacity-60 hover:opacity-100'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
              activeId === 'software'
                ? 'bg-blue/20 border-blue text-white shadow-lg shadow-blue/20'
                : 'bg-navy-light border-navy-light text-offwhite/70'
            }`}
          >
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">Build</span>
        </div>

        {/* Node 3: Academy */}
        <div
          onClick={() => setActiveId('academy')}
          className={`relative z-10 cursor-pointer flex flex-col items-center gap-1.5 transition-transform duration-200 ${
            activeId === 'academy' ? 'scale-110' : 'opacity-60 hover:opacity-100'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
              activeId === 'academy'
                ? 'bg-cyan/20 border-cyan text-cyan shadow-lg shadow-cyan/20'
                : 'bg-navy-light border-navy-light text-offwhite/70'
            }`}
          >
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">Equip</span>
        </div>

        {/* Node 4: Talent */}
        <div
          onClick={() => setActiveId('talent')}
          className={`relative z-10 cursor-pointer flex flex-col items-center gap-1.5 transition-transform duration-200 ${
            activeId === 'talent' ? 'scale-110' : 'opacity-60 hover:opacity-100'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
              activeId === 'talent'
                ? 'bg-blue/20 border-blue text-white shadow-lg shadow-blue/20'
                : 'bg-navy-light border-navy-light text-offwhite/70'
            }`}
          >
            <Users className="w-5 h-5" />
          </div>
          <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">Scale</span>
        </div>
      </div>

      {/* Track Selector Tabs */}
      <div className="grid grid-cols-4 gap-1 p-1 bg-navy-light/60 rounded-xl border border-navy-light mb-5">
        {tracks.map((track) => {
          const isSelected = activeId === track.id;
          return (
            <button
              key={track.id}
              type="button"
              onClick={() => setActiveId(track.id)}
              className={`relative py-2 px-1 text-xs font-mono font-medium rounded-lg text-center transition-colors cursor-pointer border-0 ${
                isSelected ? 'text-white' : 'text-offwhite/60 hover:text-offwhite'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="simulator-active-tab"
                  className="absolute inset-0 bg-blue rounded-lg shadow-sm"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{track.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Simulated Capability Readout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTrack.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                {activeTrack.title}
              </h3>
              <p className="text-offwhite/75 font-body text-xs sm:text-sm mt-1 leading-snug">
                {activeTrack.oneLiner}
              </p>
            </div>

            {/* Impact Metric Pill */}
            <div className="shrink-0 text-right bg-navy-light/60 border border-navy-light px-3 py-2 rounded-xl">
              <div className="flex items-center justify-end gap-1 text-cyan font-mono font-bold text-base">
                <Zap className="w-3.5 h-3.5" />
                {activeTrack.metric}
              </div>
              <div className="text-[10px] font-mono text-offwhite/60 whitespace-nowrap">
                {activeTrack.metricLabel}
              </div>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-1.5 pt-2">
            {activeTrack.deliverables.map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs font-body text-offwhite/85">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action Link */}
          <div className="pt-3 border-t border-navy-light/80 flex items-center justify-between">
            <span className="text-[11px] font-mono text-offwhite/40">
              STATE: READY TO MOBILIZE
            </span>
            <Link
              to={activeTrack.href}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan hover:underline no-underline"
            >
              <span>Explore Practice</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
