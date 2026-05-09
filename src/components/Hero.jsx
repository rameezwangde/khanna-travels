import { PrimaryButton, SecondaryButton } from "./Buttons";

export default function Hero({ eyebrow, title, text, image, primary = "Book Consultation", secondary = "Explore Journeys" }) {
  return (
    <section className="relative min-h-[74vh] overflow-hidden pt-32">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/78 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/35" />
      <div className="luxury-container relative z-10 flex min-h-[62vh] items-center">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.36em] text-gold">{eyebrow}</p>
          <h1 className="font-serif text-5xl font-bold leading-[0.98] text-ivory md:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/70">{text}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <SecondaryButton>{secondary}</SecondaryButton>
            <PrimaryButton>{primary}</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
