import { Quote } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "../components/SectionHeading";
import { reviews } from "../data/siteData";

export default function TestimonialsSection() {
  return (
    <section className="bg-white/[0.025] py-24">
      <div className="luxury-container">
        <SectionHeading align="center" eyebrow="Google Reviews" title="Journeys remembered for care" text="Real customer excerpts from Khanna Travels' current review feed, redesigned into a cinematic editorial experience." />
        <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 4200 }} pagination={{ clickable: true }} spaceBetween={22} breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }} className="pb-12">
          {reviews.map((review) => (
            <SwiperSlide key={review.name}>
              <article className="min-h-[330px] rounded-[2rem] border border-white/10 bg-navy/70 p-7 shadow-cinematic">
                <Quote className="mb-8 text-gold" size={42} />
                <p className="text-lg leading-8 text-ivory/75">"{review.quote}"</p>
                <div className="mt-8 h-px bg-gold-line" />
                <p className="mt-6 font-serif text-2xl font-bold text-ivory">{review.name}</p>
                <p className="text-sm uppercase tracking-[0.2em] text-gold">{review.trip}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
