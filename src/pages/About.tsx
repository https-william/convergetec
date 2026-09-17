import SEO from '../components/SEO';
import AboutHero from '../components/AboutHero';
import VisionMission from '../components/VisionMission';
import WhyOneCompany from '../components/WhyOneCompany';
import CTASection from '../components/CTASection';

export default function About() {
  return (
    <>
      <SEO
        title="About ConvergeTec"
        description="To become a leading Australian business transformation and technology company that helps organisations improve how they operate, equip their people, and use technology to scale."
        path="/about"
      />
      <AboutHero />
      <VisionMission />
      <WhyOneCompany />
      <CTASection />
    </>
  );
}
