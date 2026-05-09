import { useContent } from "../content/contentContext.jsx";

export default function SocialSidebar() {
  const { socials } = useContent();

  return (
    <aside className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
      {socials.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-gold/25 bg-navy/65 text-ivory/70 backdrop-blur-xl transition hover:border-gold hover:text-gold">
          <Icon size={17} />
        </a>
      ))}
    </aside>
  );
}
