import { Link } from "react-router-dom";
import { useContent } from "../content/contentContext.jsx";
import SectionHeading from "../components/SectionHeading";

export default function ServicesSection() {
  const { services } = useContent();

  return (
    <section className="border-y border-gold/10 bg-white/[0.025] py-24">
      <div className="luxury-container">
        <SectionHeading align="center" eyebrow="Bespoke Services" title="Every detail handled with quiet precision" text="A complete travel desk for holidays, business movement, visas, cruises, flights, insurance, hotels, and honeymoon planning." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ slug, title, summary, icon: Icon }) => (
            <Link key={slug} to={`/${slug}`} className="group rounded-[1.5rem] border border-white/10 bg-navy/50 p-6 transition hover:-translate-y-2 hover:border-gold/45 hover:bg-white/[0.06]">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-gold/12 text-gold transition group-hover:bg-gold group-hover:text-navy">
                <Icon size={23} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ivory">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ivory/60">{summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
