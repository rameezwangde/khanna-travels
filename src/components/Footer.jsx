import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, destinations, services, socials } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-[#050b14] py-16">
      <div className="luxury-container">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <p className="font-serif text-4xl font-bold text-ivory">Khanna Travels</p>
            <p className="mt-4 max-w-sm leading-7 text-ivory/62">
              Your trusted partner in unforgettable holidays. Explore, relax, and discover the world through personalized luxury travel experiences.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-gold/25 text-ivory/70 transition hover:border-gold hover:text-gold">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-gold">Services</p>
            <div className="grid gap-3 text-sm text-ivory/65">
              {services.slice(0, 6).map((service) => (
                <Link key={service.slug} to={`/${service.slug}`} className="transition hover:text-gold">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-gold">Destinations</p>
            <div className="grid gap-3 text-sm text-ivory/65">
              {destinations.slice(0, 8).map((item) => (
                <Link key={item.slug} to={`/destinations/${item.slug}`} className="transition hover:text-gold">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-gold">Contact</p>
            <div className="space-y-4 text-sm text-ivory/65">
              <p className="flex gap-3"><Phone size={17} className="text-gold" /> {contact.phones[0]} / {contact.phones[2]}</p>
              <p className="flex gap-3"><Mail size={17} className="text-gold" /> {contact.email}</p>
              <p className="flex gap-3"><MapPin size={17} className="text-gold" /> {contact.address}</p>
            </div>
            <form className="mt-6 grid gap-3">
              <input className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-gold" placeholder="Email for newsletter" />
              <button className="rounded-full bg-gold px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-ivory">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ivory/45 md:flex-row">
          <p>Copyright © 2026 Khanna Travels | Best Tours with great offers | Visa & passport services</p>
          <div className="flex gap-5">
            <Link to="/careers" className="hover:text-gold">Careers</Link>
            <Link to="/about" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gold">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
