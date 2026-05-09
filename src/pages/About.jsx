import Hero from "../components/Hero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import { stats, team, values } from "../data/siteData";

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about Khanna Travels, an IATA-accredited Navi Mumbai travel agency crafting personalized holidays since 2009." />
      <Hero
        eyebrow="Since 2009"
        title="A legacy of holidays redefined"
        text="At Khanna Travels, a division of Khanna Holidays Private Limited, travel is seamless, enriching, and memorable, backed by trust, care, and a team that stays with you at every step."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="py-24">
        <div className="luxury-container grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <SectionHeading eyebrow="Company Story" title="More than a travel agency" text="Located in Navi Mumbai and IATA-accredited, Khanna Travels has built a reputation for customized holidays, visa guidance, airfares, hotel planning, corporate travel, and round-the-clock journey support." />
          <div className="grid gap-5">
            {["Mission", "Vision", "Promise"].map((title, index) => (
              <article key={title} className="rounded-[1.5rem] border border-gold/15 bg-white/[0.04] p-7">
                <p className="font-serif text-3xl font-bold text-gold">{title}</p>
                <p className="mt-3 leading-8 text-ivory/66">
                  {index === 0 && "To craft journeys that reflect individual preferences across leisure, adventure, business, and cultural exploration."}
                  {index === 1 && "To be India's most trusted premium travel partner for families, couples, groups, and corporate travelers."}
                  {index === 2 && "Har Pal Apke Saath: thoughtful planning, dependable support, and joyful memories on every trip."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white/[0.025] py-24">
        <div className="luxury-container">
          <SectionHeading align="center" eyebrow="Values" title="The standards behind every itinerary" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-navy/70 p-6">
                <Icon className="mb-6 text-gold" size={32} />
                <h3 className="font-serif text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-ivory/60">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-gold/15 p-6 text-center">
                <p className="font-serif text-4xl font-bold text-gold">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ivory/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="luxury-container">
          <SectionHeading eyebrow="Leadership" title="A team built for personal attention" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]">
                <img src={member.image} alt={member.name} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="p-5">
                  <h3 className="font-serif text-2xl font-bold">{member.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-gold">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
