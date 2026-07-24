import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const datedContentSchema = z.object({
	title: z.string(),
	description: z.string(),
	published: z.coerce.date(),
	updated: z.coerce.date().optional(),
	tags: z.array(z.string()).default([]),
	draft: z.boolean().default(false),
});

const articles = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/articles",
	}),
	schema: datedContentSchema,
});

const notes = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/notes",
	}),
	schema: datedContentSchema,
});

const projects = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/projects",
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		status: z.enum([
			"idea",
			"active",
			"paused",
			"completed",
			"archived",
		]),
		started: z.coerce.date().optional(),
		updated: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		repository: z.string().url().optional(),
		website: z.string().url().optional(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

export const collections = {
	articles,
	notes,
	projects,
};