# Day One Studio

Landing page for Day One Studio: AI product reels for Indian food, beverage and wellness brands.
Next.js (App Router), plain CSS in `app/globals.css`, leads stored in Convex.

## How leads work
- `convex/` holds the lead backend: a `leads` table and an HTTP endpoint at `/submitLead`.
- On Vercel, the build runs `npx convex deploy` when `CONVEX_DEPLOY_KEY` is set. That pushes the backend and sets `NEXT_PUBLIC_CONVEX_URL`, which the form uses to post leads.
- Without the key, the site still builds and the form shows a confirmation but saves nothing.

## Vercel environment variables
- `CONVEX_DEPLOY_KEY` (Production): from Convex dashboard > your project > Settings > Generate Production Deploy Key.
- `NEXT_PUBLIC_BOOKING_URL` (optional): Cal.com or Calendly link.

## See your leads
Convex dashboard > your project > Data > `leads`.
