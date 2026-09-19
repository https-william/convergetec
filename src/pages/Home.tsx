import SEO from '../components/SEO';
import Hero from '../components/Hero';
import DivisionsGrid from '../components/DivisionsGrid';
import TransformationPipeline from '../components/TransformationPipeline';
import Differentiator from '../components/Differentiator';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <SEO
        title="ConvergeTec | Business Transformation & Technology Partner"
        description="ConvergeTec helps organisations improve how they operate, equip their people, and use technology to scale."
        path="/"
      />
      <Hero />
      <DivisionsGrid />
      <TransformationPipeline />
      <Differentiator />
      <CTASection />
    </>
  );
}
