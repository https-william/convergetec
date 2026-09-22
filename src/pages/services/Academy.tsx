import ServicePageTemplate, {
  type Pillar,
  type CrossSellItem,
} from '../../components/ServicePageTemplate';

const pillars: Pillar[] = [
  {
    title: 'Business Analysis Training',
    description:
      'Practical skills for understanding and documenting how organisations operate.',
  },
  {
    title: 'Project & Transformation Management',
    description:
      'Training for the people responsible for delivering change.',
  },
  {
    title: 'Technology Upskilling',
    description:
      'Helping teams build the technical capability transformation requires.',
  },
  {
    title: 'Leadership Development',
    description:
      'Preparing people to lead through periods of organisational change.',
  },
];

const crossSell: CrossSellItem[] = [
  { name: 'Consulting', route: '/services/consulting' },
  { name: 'Digital & Software', route: '/services/digital-software' },
  { name: 'Resources & Talent', route: '/services/resources-talent' },
];

export default function Academy() {
  return (
    <ServicePageTemplate
      accentColor="cyan"
      eyebrow="ConvergeTec Academy"
      headline="Building capability that outlasts any single project"
      intro="Corporate training, professional development and online learning across business analysis, project management, transformation, technology and leadership."
      pillars={pillars}
      crossSell={crossSell}
      heroImage="/images/practice-academy.jpg"
      imageCaption="Capability Academy // Executive Agile Delivery Framework"
    />
  );
}
