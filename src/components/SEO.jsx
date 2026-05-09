import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, image }) {
  const pageTitle = title ? `${title} | Khanna Travels` : "Khanna Travels | Luxury Holidays Redefined";
  const pageDescription =
    description || "Khanna Travels crafts bespoke luxury holidays, visas, flights, cruises, corporate travel, and premium destination experiences from Navi Mumbai.";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      {image ? <meta property="og:image" content={image} /> : null}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
