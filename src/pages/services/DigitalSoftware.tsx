import ServicePageTemplate, {
  type Pillar,
  type CrossSellItem,
} from '../../components/ServicePageTemplate';

const pillars: Pillar[] = [
  {
    title: 'Custom Software',
    description:
      'Purpose-built applications designed around your specific operations, not generic off-the-shelf workarounds.',
  },
  {
    title: 'SaaS Products',
    description:
      'Scalable software products designed for ongoing use across your organisation.',
  },
  {
    title: 'Automation',
    description:
      'Removing manual, repetitive work from day-to-day operations.',
  },
  {
    title: 'Systems Integration',
    description:
      'Making sure your existing tools and platforms actually talk to each other.',
  },
];

const crossSell: CrossSellItem[] = [
  { name: 'Consulting', route: '/services/consulting' },
  { name: 'Academy', route: '/services/academy' },
  { name: 'Resources & Talent', route: '/services/resources-talent' },
];

export default function DigitalSoftware() {
  return (
    <ServicePageTemplate
      accentColor="blue"
      eyebrow="ConvergeTec Digital & Software"
      headline="Technology built around how your business actually runs"
      intro="Custom software, SaaS products, automation and systems integration."
      pillars={pillars}
      crossSell={crossSell}
      heroImage="/images/digital-software-architecture.jpg"
      imageCaption="Software Engineering // Cloud Systems & Architecture"
    />
  );
}
