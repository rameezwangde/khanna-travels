import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export function PrimaryButton({ to = "/contact", children = "Book Consultation", className = "" }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-navy shadow-gold transition hover:-translate-y-0.5 hover:bg-ivory ${className}`}
    >
      <CalendarDays size={18} />
      <span>{children}</span>
    </Link>
  );
}

export function SecondaryButton({ to = "/destinations/bali", children = "Discover Journeys", className = "" }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 rounded-full border border-gold/40 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-ivory transition hover:border-gold hover:bg-gold/10 ${className}`}
    >
      <span>{children}</span>
      <ArrowRight size={18} className="transition group-hover:translate-x-1" />
    </Link>
  );
}
