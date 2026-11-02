import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

function cors(res: Response) {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}

const json = (body: unknown, status: number) =>
  cors(new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } }));

http.route({
  path: "/submitLead",
  method: "OPTIONS",
  handler: httpAction(async () => cors(new Response(null, { status: 204 }))),
});

http.route({
  path: "/submitLead",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const name = String(body.name || "").trim().slice(0, 200);
      const email = String(body.email || "").trim().slice(0, 320);
      const note = String(body.note || "").trim().slice(0, 2000);
      if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return json({ ok: false, error: "Missing or invalid name or email" }, 400);
      }
      await ctx.runMutation(api.leads.submit, { name, email, note, userAgent: request.headers.get("user-agent") || "" });
      return json({ ok: true }, 200);
    } catch {
      return json({ ok: false, error: "Server error, please try again" }, 500);
    }
  }),
});

export default http;
