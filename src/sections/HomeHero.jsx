import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContent } from "../content/contentContext.jsx";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const { homePage } = useContent();
  const section = useRef(null);
  const title = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        map.current,
        { scale: 1.08, yPercent: 0 },
        {
          scale: 1.18,
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.9
          }
        }
      );

      gsap.fromTo(
        ".hero-route-line",
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          stagger: 0.12,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.current,
            start: "top 70%"
          }
        }
      );

      gsap.fromTo(
        ".hero-map-dot",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.08,
          duration: 0.55,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: section.current,
            start: "top 70%"
          }
        });

      gsap.fromTo(
        title.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section.current,
            start: "top 78%",
            end: "top 20%",
            scrub: 0.75
          }
        }
      );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="relative h-screen overflow-hidden">
      <img
        ref={map}
        src={homePage.mapImageUrl}
        alt="World map"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,176,106,.08),transparent_34rem),linear-gradient(90deg,rgba(7,17,31,.96),rgba(7,17,31,.66),rgba(7,17,31,.34))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy" />
      <div className="pointer-events-none absolute inset-0 opacity-75">
        <span className="hero-map-dot absolute left-[18%] top-[42%] h-3 w-3 rounded-full bg-gold shadow-gold" />
        <span className="hero-map-dot absolute left-[47%] top-[37%] h-3 w-3 rounded-full bg-gold shadow-gold" />
        <span className="hero-map-dot absolute left-[68%] top-[52%] h-3 w-3 rounded-full bg-gold shadow-gold" />
        <span className="hero-route-line absolute left-[18%] top-[43%] h-px w-[29%] origin-left rotate-[-7deg] bg-gold/70" />
        <span className="hero-route-line absolute left-[47%] top-[38%] h-px w-[22%] origin-left rotate-[14deg] bg-gold/70" />
      </div>
      <div ref={title} className="luxury-container relative z-10 flex h-full items-center">
        <div className="max-w-5xl pt-20">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.42em] text-gold">{homePage.eyebrow}</p>
          <h1 className="font-serif text-6xl font-black leading-[0.9] text-ivory md:text-8xl lg:text-[9.5rem]">{homePage.title} <span className="text-gold">{homePage.goldWord}</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/74 md:text-xl">{homePage.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <SecondaryButton to={homePage.secondaryCtaLink}>{homePage.secondaryCta}</SecondaryButton>
            <PrimaryButton to={homePage.primaryCtaLink}>{homePage.primaryCta}</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
