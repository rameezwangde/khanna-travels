import SectionHeading from "../components/SectionHeading";
import { instagramFeed } from "../data/siteData";

export default function InstagramSection() {
  const images = [
    "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=85"
  ];
  return (
    <section className="py-24">
      <div className="luxury-container">
        <SectionHeading eyebrow="Khanna Travels Feed" title="Travel inspiration in motion" text="A premium editorial treatment for social stories, destination tips, cultural moments, and community-led travel inspiration." />
        <div className="grid gap-4 md:grid-cols-3">
          {instagramFeed.map((caption, index) => (
            <a key={caption} href="https://www.instagram.com/khanna.travels/" target="_blank" rel="noreferrer" className={`group relative overflow-hidden rounded-[1.6rem] border border-white/10 ${index === 0 ? "md:col-span-2 md:row-span-2" : ""} min-h-[260px]`}>
              <img src={images[index]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 font-serif text-2xl font-bold text-ivory">{caption}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
