import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../components/SectionHeading";
import { stats } from "../data/siteData";

gsap.registerPlugin(ScrollTrigger);

export default function WhySection() {
  const root = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", { opacity: 0, y: 36, stagger: 0.12, duration: 0.9, scrollTrigger: { trigger: root.current, start: "top 70%" } });
      gsap.to(".parallax-img", { yPercent: -12, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="overflow-hidden py-24">
      <div className="luxury-container grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <SectionHeading eyebrow="Why Khanna Travels" title="A travel house built on trust, care, and exacting detail" text="Founded in 2009 as a division of Khanna Holidays Private Limited, Khanna Travels is an IATA-accredited agency known for personalized journeys, end-to-end support, and thoughtful execution." />
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="reveal rounded-[1.5rem] border border-gold/15 bg-white/[0.04] p-6">
                <p className="font-serif text-4xl font-bold text-gold">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ivory/58">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[620px]">
          <img className="parallax-img image-mask absolute right-0 top-0 h-[470px] w-[78%] rounded-[2rem] object-cover shadow-cinematic" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1300&q=85" alt="Luxury mountain journey" loading="lazy" />
          <img className="parallax-img absolute bottom-0 left-0 h-[360px] w-[62%] rounded-[2rem] border border-gold/20 object-cover shadow-cinematic" src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1100&q=85" alt="Venice luxury travel" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
