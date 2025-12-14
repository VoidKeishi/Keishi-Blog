import { defineCollection, z } from 'astro:content';

// Topic enum for type safety
const topicEnum = z.enum(['tech', 'systems', 'society', 'startups', 'life']);

// Blog posts collection
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    topic: topicEnum,
    tags: z.array(z.string()).optional().default([]),
    description: z.string(),
    pinned: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    image: z.string().optional(),
  }),
});

// Topic metadata (for the topics pages)
export const topics = {
  tech: {
    name: 'Tech',
    slug: 'tech',
    description: 'Engineering, AI, tools, code, building software',
  },
  systems: {
    name: 'Systems',
    slug: 'systems',
    description: 'Mental models, processes, thinking frameworks',
  },
  society: {
    name: 'Society',
    slug: 'society',
    description: 'Social issues, education, justice, culture',
  },
  startups: {
    name: 'Startups',
    slug: 'startups',
    description: 'Founder journey, lessons, building companies',
  },
  life: {
    name: 'Life',
    slug: 'life',
    description: 'Personal essays, philosophy, reflections',
  },
} as const;

export type Topic = keyof typeof topics;

export const collections = { posts };



