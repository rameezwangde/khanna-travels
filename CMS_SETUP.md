# Khanna Travels TinaCMS Setup

This project now uses TinaCMS. Content is stored as JSON files in the `content/` folder and committed to Git.

## Run the Website With TinaCMS

Use this command instead of `npm run dev` when editing content:

```bash
npm run cms
```

This starts the Vite website and TinaCMS together.

Open the website:

```text
http://localhost:5173
```

Open the CMS admin:

```text
http://localhost:5173/admin
```

## Editable Content

Tina edits these local JSON files:

- `content/home.json`
- `content/settings.json`
- `content/destinations.json`
- `content/services.json`
- `content/testimonials.json`
- `content/team.json`
- `content/social-feed.json`

Editable areas:

- Homepage hero text, map image, and CTAs
- Contact details
- Destination pages, pricing, highlights, itinerary, FAQs, gallery
- Services
- Testimonials
- Team members
- Social feed cards

## Images

Images uploaded through Tina are stored under:

```text
public/uploads
```

The site can also continue to use external image URLs where existing content already has them.

## Deployment Note

For client editing after deployment, connect TinaCloud to the GitHub repo. Content edits will become Git commits.
