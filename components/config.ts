// NEXT_PUBLIC_BOOKING_URL: your Cal.com or Calendly link (evening slots). Set it in Vercel.
// The lead endpoint is derived from the Convex deployment that Vercel builds against.
// NEXT_PUBLIC_CONVEX_URL is set automatically by `convex deploy` during the Vercel build.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/easwarharikaran1610/30min";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL ?? "";
export const LEAD_ENDPOINT =
  process.env.NEXT_PUBLIC_LEAD_ENDPOINT ||
  (convexUrl ? convexUrl.replace(".convex.cloud", ".convex.site").replace(/\/$/, "") + "/submitLead" : "");
