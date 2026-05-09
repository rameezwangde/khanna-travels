import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { contact, destinations, services } from "../data/siteData";

const mainLinks = [
  { label: "About", to: "/about" },
  { label: "Flights", to: "/flights" },
  { label: "Visa", to: "/visa-services" },
  { label: "Cruise", to: "/cruise-tours" },
  { label: "Corporate", to: "/corporate-travel" },
  { label: "Contact", to: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const featured = destinations.slice(0, 12);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-6">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-gold/10 font-serif text-xl font-bold text-gold">K</span>
          <span>
            <span className="block font-serif text-xl font-bold leading-none text-ivory">Khanna Travels</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Explore the unseen</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.16em] text-ivory/80 transition hover:text-gold">
              Destinations <ChevronDown size={15} />
            </button>
            <AnimatePresence>
              {open ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="glass absolute left-1/2 top-10 grid w-[720px] -translate-x-1/2 grid-cols-3 gap-3 rounded-3xl p-5"
                >
                  {featured.map((item) => (
                    <Link key={item.slug} to={`/destinations/${item.slug}`} className="group rounded-2xl border border-white/10 p-3 transition hover:border-gold/50 hover:bg-white/5">
                      <span className="block font-serif text-lg font-bold text-ivory group-hover:text-gold">{item.title}</span>
                      <span className="text-xs text-ivory/55">{item.region}</span>
                    </Link>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          {mainLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-sm font-semibold uppercase tracking-[0.16em] transition ${isActive ? "text-gold" : "text-ivory/78 hover:text-gold"}`}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <a href={`tel:${contact.phones[0]}`} className="hidden items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm font-semibold text-ivory transition hover:border-gold hover:text-gold md:flex">
          <Phone size={16} /> Call Us
        </a>

        <button className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold lg:hidden" onClick={() => setMobile((value) => !value)} aria-label="Toggle menu">
          {mobile ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {mobile ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass mx-3 mt-3 rounded-3xl p-5 lg:hidden"
          >
            <div className="grid gap-3">
              {[...mainLinks, { label: "Honeymoon", to: "/honeymoon-tours" }, { label: "Careers", to: "/careers" }, { label: "Our Team", to: "/our-team" }].map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMobile(false)} className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ivory/85">
                  {link.label}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2">
                {[...destinations.slice(0, 8), ...services.slice(0, 2)].map((item) => (
                  <Link key={item.slug} to={item.region ? `/destinations/${item.slug}` : `/${item.slug}`} onClick={() => setMobile(false)} className="rounded-xl bg-white/5 px-3 py-2 text-sm text-ivory/75">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
