import type { MetadataRoute } from 'next';

import { getAllContent } from '@/lib/content';
import { absoluteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/about',
    '/projects',
    '/blog',
    '/contact',
  ] as const;

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = getAllContent('projects').map(
    (project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified: new Date(project.date),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  );

  const blogEntries: MetadataRoute.Sitemap = getAllContent('blog').map(
    (post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  );

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
