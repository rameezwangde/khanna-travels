import {
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  CircleDollarSign,
  Compass,
  Facebook,
  FileCheck2,
  Heart,
  Hotel,
  Instagram,
  Mail,
  MapPin,
  Plane,
  Sailboat,
  ShieldCheck,
  Sparkles,
  Twitter,
  Users,
  Youtube
} from "lucide-react";

export const contact = {
  phones: ["+91 9167006010", "+91 8108191005", "022 41555555", "022 41555500"],
  email: "bookings@khannatravels.com",
  hours: "10AM - 8PM",
  address: "Sanpada, Navi Mumbai, Maharashtra",
  whatsapp: "https://wa.me/919167006010"
};

export const socials = [
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/khanna.travels/" },
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/khannatravels" },
  { label: "YouTube", icon: Youtube, href: "https://www.youtube.com/" },
  { label: "X", icon: Twitter, href: "https://x.com/" }
];

export const services = [
  {
    slug: "customized-holidays",
    title: "Customized Holidays",
    navTitle: "Holidays",
    icon: Compass,
    summary: "Tailor-made leisure, adventure, cultural, and family holidays designed around your personal rhythm.",
    highlights: ["Private itinerary design", "Handpicked stays", "On-trip support", "Experiential upgrades"],
    heroImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85"
  },
  {
    slug: "corporate-travel",
    title: "Corporate Travel",
    icon: BriefcaseBusiness,
    summary: "High-touch business travel, MICE programs, incentives, executive journeys, and corporate retreats.",
    highlights: ["MICE travel", "Executive air desk", "Incentive tours", "Policy-compliant bookings"],
    heroImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"
  },
  {
    slug: "visa-services",
    title: "Visa Services",
    icon: FileCheck2,
    summary: "Documentation guidance, submission planning, interview readiness, and travel insurance assistance.",
    highlights: ["Document checklist", "Country-specific guidance", "Insurance support", "Status coordination"],
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=85"
  },
  {
    slug: "cruise-tours",
    title: "Cruise Tours",
    icon: Sailboat,
    summary: "Premium cruise holidays from Disney and Cordelia to private sailing-led luxury escapes.",
    highlights: ["Cabin selection", "Shore experiences", "Family cruises", "Celebration journeys"],
    heroImage: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1800&q=85"
  },
  {
    slug: "flights",
    title: "Flights",
    icon: Plane,
    summary: "IATA-accredited fare guidance, international ticketing, upgrades, and multi-city routing support.",
    highlights: ["International fares", "Multi-city routing", "Seat and meal requests", "Corporate air desk"],
    heroImage: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1800&q=85"
  },
  {
    slug: "honeymoon-tours",
    title: "Honeymoon Tours",
    icon: Heart,
    summary: "Romantic, private, and highly personal journeys for once-in-a-lifetime celebrations.",
    highlights: ["Private villas", "Candlelight experiences", "Island escapes", "Surprise planning"],
    heroImage: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1800&q=85"
  },
  {
    slug: "travel-insurance",
    title: "Travel Insurance",
    icon: ShieldCheck,
    summary: "Overseas travel insurance support for holidays, business travel, student trips, and senior travelers.",
    highlights: ["Coverage guidance", "Emergency assistance", "Family plans", "Senior travel support"],
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85"
  },
  {
    slug: "hotel-bookings",
    title: "Hotel Bookings",
    icon: Hotel,
    summary: "Curated hotels, resorts, lodges, villas, and city stays matched to every itinerary.",
    highlights: ["Luxury hotels", "Resort stays", "Private villas", "Room upgrade requests"],
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85"
  }
];

const destinationImages = {
  bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=85",
  japan: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85",
  dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=85",
  vietnam: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1800&q=85",
  kashmir: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1800&q=85",
  kerala: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1800&q=85",
  switzerland: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=85",
  europe: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1800&q=85",
  scandinavia: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=85",
  kenya: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=85",
  malaysia: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1800&q=85",
  singapore: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1800&q=85",
  thailand: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1800&q=85",
  australia: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1800&q=85",
  "new-zealand": "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1800&q=85",
  "abu-dhabi": "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1800&q=85",
  paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1800&q=85",
  egypt: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1800&q=85"
};

const names = [
  ["bali", "Bali", "Indonesia", "Temple sunsets, cliff villas, jungle retreats, and private beach clubs."],
  ["japan", "Japan", "Asia", "Cherry blossoms, ryokans, bullet trains, cuisine, and precise cultural immersion."],
  ["dubai", "Dubai", "Middle East", "Skyline glamour, desert safaris, shopping, and five-star family escapes."],
  ["vietnam", "Vietnam", "Asia", "Lantern-lit towns, limestone bays, street food, and handcrafted touring."],
  ["kashmir", "Kashmir", "India", "Houseboats, pine valleys, alpine meadows, and serene Himalayan romance."],
  ["kerala", "Kerala", "India", "Backwaters, Ayurveda, tea estates, wildlife, and slow coastal luxury."],
  ["switzerland", "Switzerland", "Europe", "Alpine rail journeys, lakeside hotels, glacier views, and refined cities."],
  ["europe", "Europe", "World", "Classic capitals, scenic rail, boutique stays, and curated multi-country routes."],
  ["scandinavia", "Scandinavia", "Europe", "Northern lights, fjords, glass cabins, design-led cities, and arctic wonder."],
  ["kenya", "Kenya", "Africa", "Luxury safaris, great migration landscapes, lodges, and Indian Ocean extensions."],
  ["malaysia", "Malaysia", "Asia", "Kuala Lumpur, Langkawi, rainforests, islands, and family-friendly escapes."],
  ["singapore", "Singapore", "Asia", "Urban gardens, luxury shopping, Sentosa, family attractions, and fine dining."],
  ["thailand", "Thailand", "Asia", "Island resorts, Bangkok energy, wellness retreats, and private cultural touring."],
  ["australia", "Australia", "Oceania", "Sydney, reefs, road trips, wildlife, vineyards, and vast coastal drama."],
  ["new-zealand", "New Zealand", "Oceania", "Glaciers, lakes, self-drives, lodges, adventure, and cinematic scenery."],
  ["abu-dhabi", "Abu Dhabi", "Middle East", "Museums, islands, desert resorts, Yas experiences, and Arabian elegance."],
  ["paris", "Paris", "Europe", "Iconic monuments, couture, culinary rituals, museums, and romantic city stays."],
  ["egypt", "Egypt", "Africa", "Pyramids, Nile cruises, ancient temples, Red Sea add-ons, and guided history."]
];

export const destinations = names.map(([slug, title, region, summary], index) => ({
  slug,
  title,
  region,
  summary,
  image: destinationImages[slug],
  duration: index % 3 === 0 ? "6N / 7D" : index % 3 === 1 ? "7N / 8D" : "8N / 9D",
  price: index % 3 === 0 ? "On request" : index % 3 === 1 ? "From INR 89,000" : "From INR 1,25,000",
  highlights: [
    "Private airport transfers",
    "Curated luxury hotel selection",
    "Signature local experiences",
    "Dedicated Khanna Travels support"
  ],
  itinerary: [
    "Arrival, private transfer, welcome briefing, and relaxed first evening.",
    "Landmark orientation with a locally guided cultural experience.",
    "Scenic day journey with premium dining and photography stops.",
    "Leisure day with optional spa, shopping, adventure, or family activities.",
    "Signature excursion designed around the destination's strongest experience.",
    "Final breakfast, airport assistance, and onward travel support."
  ],
  faqs: [
    ["Can this itinerary be customized?", "Yes. Every journey can be adjusted for pace, hotels, budget, celebrations, and travel style."],
    ["Do you include flights and visas?", "Flights, visa guidance, insurance, hotels, transfers, and experiences can all be handled end to end."],
    ["Is support available during travel?", "Yes. The Khanna Travels team provides active coordination before and during the journey."]
  ]
}));

export const reviews = [
  {
    name: "Ranjit Rajput",
    trip: "Europe Family Journey",
    quote: "Our 11-night Italy and Switzerland trip was memorable. Hotels, train connections, reminders, guidance, and daily support made it comfortable and stress-free."
  },
  {
    name: "Kunda Jaggi",
    trip: "Vietnam",
    quote: "Our 15-day Vietnam trip was planned beautifully, from hotels and sightseeing to transfers and guides. The team made it relaxing, fun, and memorable."
  },
  {
    name: "Swayamprabha Rajput",
    trip: "Italy Visa",
    quote: "Dhvani handled our Italy visa application with professionalism, patience, clarity, and prompt communication. The process felt smooth and stress-free."
  },
  {
    name: "Shrikant Pandey",
    trip: "Turkey Visa",
    quote: "The visa processing service was excellent. Manisha guided every step, answered queries patiently, and ensured all documents were in order."
  },
  {
    name: "Shilpa Marwah",
    trip: "Vietnam",
    quote: "Everything was smooth and well organized on our 8-day Vietnam tour. The itinerary was well planned and the team was always responsive."
  }
];

export const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "50,000+", label: "Tours Crafted" },
  { value: "15+", label: "Years Experience" },
  { value: "100+", label: "Team Members" }
];

export const team = [
  {
    name: "Manoj Khanna",
    role: "Founder & Travel Strategist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Mohit Khanna",
    role: "Director, Product & Experiences",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Shivam Khanna",
    role: "Director, Operations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Khanna Travels Team",
    role: "Visa, Holidays, Flights & Support Desk",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85"
  }
];

export const values = [
  { icon: Sparkles, title: "Bespoke Design", text: "Every itinerary is shaped around people, pace, purpose, and preference." },
  { icon: ShieldCheck, title: "Trusted Support", text: "Round-the-clock coordination keeps each trip smooth before and during travel." },
  { icon: CalendarCheck, title: "Operational Precision", text: "Flights, hotels, transfers, visas, and daily logistics are handled in detail." },
  { icon: Users, title: "Human Expertise", text: "Real travel specialists guide families, couples, groups, and corporates." }
];

export const instagramFeed = [
  "POV: Same destination, two different travel moods.",
  "Most people think international travel means long planning.",
  "If destinations walked the Gala carpet, which one wins?",
  "Mother's Day journeys that say thank you.",
  "A Guinness World Record made underwater.",
  "Maharashtra Day, culture, forts, nature, and pride."
];

export const corporateFeatures = [
  { icon: Building2, title: "MICE Travel", text: "Conferences, exhibitions, annual meets, and dealer incentives with polished ground handling." },
  { icon: Plane, title: "Executive Travel", text: "Priority routing, premium cabins, hotel alignment, and quick-change support for leadership teams." },
  { icon: CircleDollarSign, title: "Policy Control", text: "Managed fares, budgets, consolidated billing, and practical reporting for finance teams." },
  { icon: Users, title: "Incentive Tours", text: "Reward journeys that feel aspirational while staying operationally precise." }
];
