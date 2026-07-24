import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: URL | undefined }) {
	const articles = (await getCollection("articles"))
		.filter((article) => !article.data.draft)
		.sort(
			(left, right) =>
				right.data.published.valueOf() -
				left.data.published.valueOf(),
		);

	return rss({
		title: "Asmo.dev",
		description: "Articles, technical notes and project journals by Asmo.",
		site: context.site!,
		items: articles.map((article) => ({
			title: article.data.title,
			description: article.data.description,
			pubDate: article.data.published,
			link: `/articles/${article.id}/`,
			categories: article.data.tags,
		})),
		customData: "<language>en</language>",
	});
}