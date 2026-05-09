import { Send } from "lucide-react";

export default function InquiryForm({ compact = false }) {
  return (
    <form className={`glass grid gap-4 rounded-[2rem] p-5 ${compact ? "" : "md:p-8"}`}>
      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded-full border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-gold" placeholder="Name" />
        <input className="rounded-full border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-gold" placeholder="Mobile No" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded-full border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-gold" placeholder="Email" />
        <select className="rounded-full border border-white/10 bg-[#101a2a] px-5 py-4 outline-none transition focus:border-gold">
          <option>Travel Interest</option>
          <option>Luxury Holiday</option>
          <option>Visa Services</option>
          <option>Corporate Travel</option>
          <option>Cruise Tour</option>
        </select>
      </div>
      <textarea className="min-h-32 rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-gold" placeholder="Tell us about your ideal journey" />
      <button className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-6 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-navy transition hover:bg-ivory">
        Send Inquiry <Send size={17} />
      </button>
    </form>
  );
}
