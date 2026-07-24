import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: URL | undefined }) {
	const [articles, notes] = await Promise.all([
		getCollection("articles"),
		getCollection("notes"),
	]);

	const entries = [
		...articles
			.filter((entry) => !entry.data.draft)
			.map((entry) => ({
				...entry,
				path: "articles",
			})),
		...notes
			.filter((entry) => !entry.data.draft)
			.map((entry) => ({
				...entry,
				path: "notes",
			})),
	].sort(
		(left, right) =>
			right.data.published.valueOf() -
			left.data.published.valueOf(),
	);

	return rss({
		title: "Asmo.dev",
		description: "Articles, technical notes and project journals by Asmo.",
		site: context.site!,
		items: entries.map((entry) => ({
			title: entry.data.title,
			description: entry.data.description,
			pubDate: entry.data.published,
			link: `/${entry.path}/${entry.id}/`,
			categories: entry.data.tags,
		})),
		customData: "<language>en</language>",
	});
}