// Set these in Vercel > Project > Settings > Environment Variables.
// NEXT_PUBLIC_BOOKING_URL: your Cal.com or Calendly link (evening slots).
// NEXT_PUBLIC_LEAD_ENDPOINT: your own Convex endpoint, e.g. https://<your-project>.convex.site/submitLead
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "";
export const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "";
