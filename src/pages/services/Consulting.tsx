import ServicePageTemplate, {
  type Pillar,
  type CrossSellItem,
} from '../../components/ServicePageTemplate';

const pillars: Pillar[] = [
  {
    title: 'Business Analysis',
    description:
      'Understanding how your organisation actually works today, before recommending how it should work tomorrow.',
  },
  {
    title: 'Project Delivery',
    description:
      'Structured delivery of transformation initiatives, from scoping through to go-live.',
  },
  {
    title: 'Change Management',
    description:
      'Helping people, not just systems, adapt — so new ways of working actually stick.',
  },
  {
    title: 'Data & AI',
    description:
      'Practical advisory on using data and AI to support better business decisions.',
  },
];

const crossSell: CrossSellItem[] = [
  { name: 'Digital & Software', route: '/services/digital-software' },
  { name: 'Academy', route: '/services/academy' },
  { name: 'Resources & Talent', route: '/services/resources-talent' },
];

export default function Consulting() {
  return (
    <ServicePageTemplate
      accentColor="navy"
      eyebrow="ConvergeTec Consulting"
      headline="Advice that survives contact with implementation"
      intro="Advisory, transformation and implementation services across business analysis, project delivery, change management, data and AI."
      pillars={pillars}
      crossSell={crossSell}
      heroImage="/images/consulting-strategy.jpg"
      imageCaption="Advisory Practice // Enterprise Operating Model"
    />
  );
}
