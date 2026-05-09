import { Link } from "react-router-dom";
import { useContent } from "../content/contentContext.jsx";
import SectionHeading from "../components/SectionHeading";

export default function DestinationGrid({ limit, title = "Curated Destinations" }) {
  const { destinations } = useContent();
  const items = limit ? destinations.slice(0, limit) : destinations;
  return (
    <section className="py-24">
      <div className="luxury-container">
        <SectionHeading eyebrow="Private Worlds" title={title} text="From alpine railways to island villas and safari lodges, every destination is reframed as a cinematic, seamless journey." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((item) => (
            <Link key={item.slug} to={`/destinations/${item.slug}`} className="group relative min-h-[330px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-cinematic transition duration-500 hover:-translate-y-2 hover:border-gold/50">
              <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
              <div className="absolute inset-x-4 top-4 h-px bg-gold-line opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-0 p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-gold">{item.region}</p>
                <h3 className="font-serif text-3xl font-bold text-ivory">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ivory/65">{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
