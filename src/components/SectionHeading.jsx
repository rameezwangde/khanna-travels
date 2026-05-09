export default function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`mb-10 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow ? <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.32em] text-gold">{eyebrow}</p> : null}
      <h2 className="font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-ivory/62 md:text-lg">{text}</p> : null}
    </div>
  );
}
