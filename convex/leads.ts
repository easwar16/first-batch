import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    note: v.optional(v.string()),
    userAgent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("leads", args);
    return { ok: true };
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => ctx.db.query("leads").order("desc").collect(),
});
