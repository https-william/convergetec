import SEO from '../components/SEO';
import ContactHero from '../components/ContactHero';
import BookingEmbed from '../components/BookingEmbed';
import ContactFormFallback from '../components/ContactFormFallback';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact ConvergeTec"
        description="Book a discovery call, or send a quick message and we'll get back to you."
        path="/contact"
      />
      <ContactHero />
      <BookingEmbed />
      <ContactFormFallback />
    </>
  );
}
