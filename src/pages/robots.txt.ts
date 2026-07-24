import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
	if (!site) {
		throw new Error("The Astro site URL is not configured.");
	}

	const sitemapUrl = new URL("/sitemap-index.xml", site);

	return new Response(
		[
			"User-agent: *",
			"Allow: /",
			"",
			`Sitemap: ${sitemapUrl}`,
			"",
		].join("\n"),
		{
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
			},
		},
	);
};