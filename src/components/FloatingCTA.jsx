import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href="https://wa.me/919167006010" target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-navy/80 text-gold shadow-gold backdrop-blur-xl transition hover:-translate-y-1 hover:bg-gold hover:text-navy" aria-label="WhatsApp">
        <MessageCircle size={22} />
      </a>
      <Link to="/contact" className="rounded-full bg-gold px-5 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-navy shadow-gold transition hover:-translate-y-1 hover:bg-ivory">
        Book Now
      </Link>
    </div>
  );
}
