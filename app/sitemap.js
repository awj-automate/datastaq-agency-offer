import { client } from '../lib/sanity';

export const revalidate = 3600;

export default async function sitemap() {
  const baseUrl = 'https://datastaqai.com';

  const posts = await client.fetch(
    `*[_type == "post"] { "slug": slug.current, publishedAt }`
  );

  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.replace(/^blog\//, '')}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogEntries,
    ...['/privacy-policy', '/terms', '/cookies', '/accessibility'].map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    })),
  ];
}
