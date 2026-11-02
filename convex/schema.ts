import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    note: v.optional(v.string()),
    userAgent: v.optional(v.string()),
  }),
});
