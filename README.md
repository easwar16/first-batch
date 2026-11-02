# First Batch

Landing page for First Batch: AI product reels for Indian food, beverage and wellness brands.

Next.js (App Router), no Tailwind. Styles in `app/globals.css`.

## Environment variables (Vercel)
- `NEXT_PUBLIC_BOOKING_URL`: Cal.com or Calendly link. Without it, "Book a call" scrolls to the lead form.
- `NEXT_PUBLIC_LEAD_ENDPOINT`: your own Convex `/submitLead` endpoint. Without it, the form shows a confirmation but saves nothing.

## Develop
npm run dev
