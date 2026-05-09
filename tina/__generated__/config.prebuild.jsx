// tina/config.js
import { defineConfig } from "tinacms";
var env = globalThis.process?.env || {};
var cleanEnv = (value) => value ? String(value).trim().replace(/[\r\n"'`]/g, "") : void 0;
var singletonUi = {
  allowedActions: {
    create: false,
    delete: false,
    createNestedFolder: false
  }
};
var imageField = (name, label) => ({
  type: "image",
  name,
  label
});
var stringList = (name, label) => ({
  type: "string",
  name,
  label,
  list: true
});
var config_default = defineConfig({
  branch: cleanEnv(env.TINA_BRANCH || env.VERCEL_GIT_COMMIT_REF || env.HEAD) || "main",
  clientId: cleanEnv(env.TINA_CLIENT_ID),
  token: cleanEnv(env.TINA_TOKEN),
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content",
        format: "json",
        match: { include: "home" },
        ui: singletonUi,
        fields: [
          { type: "string", name: "eyebrow", label: "Hero Eyebrow" },
          { type: "string", name: "title", label: "Hero Title" },
          { type: "string", name: "goldWord", label: "Gold Highlight Word" },
          { type: "string", name: "subtitle", label: "Hero Subtitle", ui: { component: "textarea" } },
          imageField("mapImageUrl", "Hero Map Image"),
          { type: "string", name: "secondaryCta", label: "Secondary CTA Text" },
          { type: "string", name: "secondaryCtaLink", label: "Secondary CTA Link" },
          { type: "string", name: "primaryCta", label: "Primary CTA Text" },
          { type: "string", name: "primaryCtaLink", label: "Primary CTA Link" }
        ]
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content",
        format: "json",
        match: { include: "settings" },
        ui: singletonUi,
        fields: [
          {
            type: "object",
            name: "contact",
            label: "Contact Details",
            fields: [
              stringList("phones", "Phone Numbers"),
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "hours", label: "Business Hours" },
              { type: "string", name: "address", label: "Address", ui: { component: "textarea" } },
              { type: "string", name: "whatsapp", label: "WhatsApp Link" }
            ]
          }
        ]
      },
      {
        name: "destinations",
        label: "Destinations",
        path: "content",
        format: "json",
        match: { include: "destinations" },
        ui: singletonUi,
        fields: [
          {
            type: "object",
            name: "destinations",
            label: "Destination Pages",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "Destination" })
            },
            fields: [
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "slug", label: "Slug", required: true },
              { type: "string", name: "region", label: "Region" },
              { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
              imageField("image", "Hero Image"),
              {
                type: "object",
                name: "gallery",
                label: "Gallery Images",
                list: true,
                fields: [imageField("url", "Image")]
              },
              { type: "string", name: "duration", label: "Duration" },
              { type: "string", name: "price", label: "Price" },
              stringList("highlights", "Highlights"),
              stringList("itinerary", "Itinerary Steps"),
              {
                type: "object",
                name: "faqs",
                label: "FAQs",
                list: true,
                fields: [
                  { type: "string", name: "question", label: "Question" },
                  { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "services",
        label: "Services",
        path: "content",
        format: "json",
        match: { include: "services" },
        ui: singletonUi,
        fields: [
          {
            type: "object",
            name: "services",
            label: "Service Pages",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "Service" })
            },
            fields: [
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "navTitle", label: "Short Navigation Title" },
              { type: "string", name: "slug", label: "Slug", required: true },
              { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
              imageField("heroImage", "Hero Image"),
              stringList("highlights", "Highlights")
            ]
          }
        ]
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "content",
        format: "json",
        match: { include: "testimonials" },
        ui: singletonUi,
        fields: [
          {
            type: "object",
            name: "reviews",
            label: "Reviews",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || "Review" })
            },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "trip", label: "Trip / Service" },
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      {
        name: "team",
        label: "Team Members",
        path: "content",
        format: "json",
        match: { include: "team" },
        ui: singletonUi,
        fields: [
          {
            type: "object",
            name: "team",
            label: "Team Members",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || "Team member" })
            },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "role", label: "Role" },
              imageField("image", "Portrait")
            ]
          }
        ]
      },
      {
        name: "socialFeed",
        label: "Social Feed",
        path: "content",
        format: "json",
        match: { include: "social-feed" },
        ui: singletonUi,
        fields: [
          {
            type: "object",
            name: "instagramFeed",
            label: "Social Feed Cards",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.caption || "Social card" })
            },
            fields: [
              { type: "string", name: "caption", label: "Caption" },
              { type: "string", name: "href", label: "Link" },
              imageField("image", "Image")
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
