import { useParams } from "react-router-dom";
import { useContent } from "../content/contentContext.jsx";
import Hero from "../components/Hero";
import InquiryForm from "../components/InquiryForm";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";

export default function ServicePage({ slug: propSlug }) {
  const params = useParams();
  const { corporateFeatures, services } = useContent();
  const slug = propSlug || params.slug;
  const service = services.find((item) => item.slug === slug) || services[0];
  const isCorporate = service.slug === "corporate-travel";

  return (
    <>
      <SEO title={service.title} description={service.summary} image={service.heroImage} />
      <Hero eyebrow="Khanna Travels Service" title={service.title} text={service.summary} image={service.heroImage} />
      <section className="py-24">
        <div className="luxury-container grid gap-10 lg:grid-cols-[1fr_.85fr]">
          <div>
            <SectionHeading eyebrow="What We Handle" title="Designed for seamless movement" text="From the first call to the final return, Khanna Travels coordinates the moving parts so your journey feels effortless." />
            <div className="grid gap-4 md:grid-cols-2">
              {(isCorporate ? corporateFeatures : service.highlights.map((title) => ({ title, text: "Handled with detailed coordination, transparent communication, and premium supplier alignment." }))).map(({ title, text, icon: Icon }) => (
                <article key={title} className="rounded-[1.5rem] border border-gold/15 bg-white/[0.04] p-6">
                  {Icon ? <Icon className="mb-5 text-gold" /> : null}
                  <h3 className="font-serif text-2xl font-bold text-ivory">{title}</h3>
                  <p className="mt-3 leading-7 text-ivory/60">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
