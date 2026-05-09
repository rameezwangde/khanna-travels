import SEO from "../components/SEO";
import Hero from "../components/Hero";
import DestinationGrid from "../sections/DestinationGrid";

export default function DestinationsIndex() {
  return (
    <>
      <SEO title="Destinations" />
      <Hero eyebrow="World Collection" title="Private journeys across the world" text="A curated portfolio of domestic and international holidays redesigned for a premium travel audience." image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=85" />
      <DestinationGrid title="All Destinations" />
    </>
  );
}
