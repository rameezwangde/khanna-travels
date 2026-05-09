import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";

export default function Careers() {
  const roles = ["Travel Consultant", "Visa Documentation Executive", "Corporate Travel Specialist", "Digital Marketing Executive"];
  return (
    <>
      <SEO title="Careers" />
      <Hero eyebrow="Careers" title="Build journeys for discerning travelers" text="Join a team that combines destination knowledge, operational discipline, and genuine hospitality." image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85" />
      <section className="py-24">
        <div className="luxury-container">
          <SectionHeading eyebrow="Openings" title="Current opportunities" text="Send your profile to bookings@khannatravels.com with your preferred role and experience summary." />
          <div className="grid gap-4 md:grid-cols-2">
            {roles.map((role) => (
              <article key={role} className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold">{role}</h3>
                  <p className="mt-2 text-sm text-ivory/58">Navi Mumbai · Full time</p>
                </div>
                <ArrowRight className="text-gold" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
