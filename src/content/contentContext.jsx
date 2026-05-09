import { createContext, useContext } from "react";
import {
  contact as fallbackContact,
  corporateFeatures,
  destinations as fallbackDestinations,
  reviews as fallbackReviews,
  services as fallbackServices,
  socials,
  stats,
  team as fallbackTeam,
  values
} from "../data/siteData";
import destinationsContent from "../../content/destinations.json";
import homeContent from "../../content/home.json";
import servicesContent from "../../content/services.json";
import settingsContent from "../../content/settings.json";
import socialFeedContent from "../../content/social-feed.json";
import teamContent from "../../content/team.json";
import testimonialsContent from "../../content/testimonials.json";

const bySlug = (items) => new Map(items.map((item) => [item.slug, item]));

function normalizeImage(value) {
  if (!value || value.startsWith("http") || value.startsWith("/")) return value;
  return `/${value}`;
}

function normalizeImages(item) {
  return {
    ...item,
    image: normalizeImage(item.image),
    heroImage: normalizeImage(item.heroImage),
    mapImageUrl: normalizeImage(item.mapImageUrl),
    gallery: item.gallery?.map((image) => ({
      ...image,
      url: normalizeImage(image.url)
    }))
  };
}

function mergeBySlug(fallbackItems, contentItems = []) {
  if (!contentItems?.length) return fallbackItems;

  const fallbackMap = bySlug(fallbackItems);
  const merged = contentItems
    .filter((item) => item.slug)
    .map((item) => normalizeImages({
      ...(fallbackMap.get(item.slug) || {}),
      ...item
    }));

  const contentSlugs = new Set(merged.map((item) => item.slug));
  return [...merged, ...fallbackItems.filter((item) => !contentSlugs.has(item.slug))];
}

const content = {
  contact: { ...fallbackContact, ...(settingsContent.contact || {}) },
  corporateFeatures,
  destinations: mergeBySlug(fallbackDestinations, destinationsContent.destinations),
  homePage: normalizeImages(homeContent),
  instagramFeed: (socialFeedContent.instagramFeed || []).map(normalizeImages),
  reviews: testimonialsContent.reviews?.length ? testimonialsContent.reviews : fallbackReviews,
  services: mergeBySlug(fallbackServices, servicesContent.services),
  socials,
  stats,
  team: teamContent.team?.length ? teamContent.team.map(normalizeImages) : fallbackTeam,
  values
};

const ContentContext = createContext(content);

export function ContentProvider({ children }) {
  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useContent() {
  return useContext(ContentContext);
}
