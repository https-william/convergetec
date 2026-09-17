import ServicePageTemplate, {
  type Pillar,
  type CrossSellItem,
} from '../../components/ServicePageTemplate';

const pillars: Pillar[] = [
  {
    title: 'Business Analysts',
    description:
      'Experienced BAs placed directly into your project or team.',
  },
  {
    title: 'Project & Change Managers',
    description:
      'Delivery-ready professionals for transformation initiatives.',
  },
  {
    title: 'Developers',
    description:
      'Contract technical talent for build and integration work.',
  },
  {
    title: 'Fractional Executives',
    description:
      'Senior leadership capacity without a full-time hire.',
  },
];

const crossSell: CrossSellItem[] = [
  { name: 'Consulting', route: '/services/consulting' },
  { name: 'Digital & Software', route: '/services/digital-software' },
  { name: 'Academy', route: '/services/academy' },
];

export default function ResourcesTalent() {
  return (
    <ServicePageTemplate
      accentColor="blue"
      eyebrow="ConvergeTec Resources & Talent"
      headline="The right people, placed where you need them"
      intro="Skilled contract professionals and fractional executives, placed where you need them."
      pillars={pillars}
      crossSell={crossSell}
    />
  );
}
