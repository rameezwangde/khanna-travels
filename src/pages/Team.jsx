import Hero from "../components/Hero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import { useContent } from "../content/contentContext.jsx";

export default function Team() {
  const { team } = useContent();

  return (
    <>
      <SEO title="Our Team" />
      <Hero eyebrow="People First" title="The specialists behind each journey" text="Travel designers, visa consultants, air desk experts, and operations coordinators working together for smooth, personal journeys." image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85" />
      <section className="py-24">
        <div className="luxury-container">
          <SectionHeading eyebrow="Leadership & Team" title="Experience with a human touch" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10">
                <img src={member.image} alt={member.name} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h2 className="font-serif text-3xl font-bold">{member.name}</h2>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
