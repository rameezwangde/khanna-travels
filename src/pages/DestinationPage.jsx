import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "../components/Hero";
import InquiryForm from "../components/InquiryForm";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import TestimonialsSection from "../sections/TestimonialsSection";
import { destinations } from "../data/siteData";

export default function DestinationPage() {
  const { slug } = useParams();
  const destination = destinations.find((item) => item.slug === slug) || destinations[0];
  const similar = useMemo(() => destinations.filter((item) => item.slug !== destination.slug).slice(0, 8), [destination.slug]);
  const gallery = [destination.image, "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"];

  return (
    <>
      <SEO title={`${destination.title} Tour Packages`} description={destination.summary} image={destination.image} />
      <Hero eyebrow={destination.region} title={`${destination.title} Tour Packages`} text={destination.summary} image={destination.image} />
      <section className="py-24">
        <div className="luxury-container grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <SectionHeading eyebrow="Overview" title={`A cinematic ${destination.title} escape`} text="Each itinerary is private, flexible, and shaped around your preferred pace, hotel style, celebration needs, and budget." />
            <div className="grid gap-4 sm:grid-cols-2">
              {destination.highlights.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-gold/15 bg-white/[0.04] p-5 text-ivory/70">{item}</div>
              ))}
            </div>
          </div>
          <div className="glass rounded-[2rem] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Starting Plan</p>
            <p className="mt-4 font-serif text-5xl font-bold text-ivory">{destination.duration}</p>
            <p className="mt-3 text-2xl font-semibold text-gold">{destination.price}</p>
            <p className="mt-5 leading-8 text-ivory/62">Flights, visas, hotels, transfers, experiences, and insurance can be packaged based on your requirements.</p>
          </div>
        </div>
      </section>
      <section className="bg-white/[0.025] py-24">
        <div className="luxury-container">
          <SectionHeading eyebrow="Itinerary" title="A flexible timeline" />
          <div className="grid gap-4">
            {destination.itinerary.map((day, index) => (
              <div key={day} className="grid gap-5 rounded-[1.5rem] border border-white/10 bg-navy/65 p-5 md:grid-cols-[120px_1fr]">
                <p className="font-serif text-3xl font-bold text-gold">Day {index + 1}</p>
                <p className="leading-8 text-ivory/68">{day}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="luxury-container">
          <SectionHeading eyebrow="Gallery" title={`${destination.title} in frames`} />
          <div className="grid gap-4 md:grid-cols-3">
            {gallery.map((image, index) => (
              <img key={image} src={image} alt="" loading="lazy" className={`h-80 w-full rounded-[1.5rem] object-cover shadow-cinematic ${index === 0 ? "md:col-span-2" : ""}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white/[0.025] py-24">
        <div className="luxury-container grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="FAQs" title="Before you travel" />
            <div className="grid gap-4">
              {destination.faqs.map(([question, answer]) => (
                <details key={question} className="rounded-[1.4rem] border border-white/10 bg-navy/60 p-5">
                  <summary className="cursor-pointer font-serif text-xl font-bold text-ivory">{question}</summary>
                  <p className="mt-3 leading-7 text-ivory/62">{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
      <TestimonialsSection />
      <section className="py-24">
        <div className="luxury-container">
          <SectionHeading eyebrow="Similar Tours" title="Continue exploring" />
          <Swiper modules={[Autoplay]} autoplay={{ delay: 2600 }} spaceBetween={18} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}>
            {similar.map((item) => (
              <SwiperSlide key={item.slug}>
                <Link to={`/destinations/${item.slug}`} className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]">
                  <img src={item.image} alt={item.title} className="h-60 w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="p-5">
                    <h3 className="font-serif text-2xl font-bold text-ivory">{item.title}</h3>
                    <p className="mt-2 text-sm text-ivory/55">{item.region}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
