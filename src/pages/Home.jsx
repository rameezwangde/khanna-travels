import SEO from "../components/SEO";
import DestinationGrid from "../sections/DestinationGrid";
import HomeHero from "../sections/HomeHero";
import InstagramSection from "../sections/InstagramSection";
import ServicesSection from "../sections/ServicesSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import WhySection from "../sections/WhySection";

export default function Home() {
  return (
    <>
      <SEO title="Luxury Holidays Redefined" />
      <HomeHero />
      <DestinationGrid limit={10} />
      <ServicesSection />
      <WhySection />
      <TestimonialsSection />
      <InstagramSection />
    </>
  );
}
