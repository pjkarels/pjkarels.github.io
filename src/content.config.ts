import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    /** One sentence used on cards, meta descriptions and social previews. */
    summary: z.string(),
    kind: z.enum(["Case study", "Open source"]),
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    /** Headline numbers shown at the top of the page and on the card. */
    highlights: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
