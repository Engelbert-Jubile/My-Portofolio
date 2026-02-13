import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const collections = ['projects', 'blog'] as const;

export type ContentCollection = (typeof collections)[number];

export interface ContentFrontmatter {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  cover: string;
  draft: boolean;
  featured: boolean;
}

export interface ContentSummary extends ContentFrontmatter {
  slug: string;
  collection: ContentCollection;
}

export interface ContentDetail extends ContentSummary {
  content: string;
}

export const mdxRemoteOptions: NonNullable<MDXRemoteProps['options']> = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
  parseFrontmatter: false,
};

function getCollectionDir(collection: ContentCollection) {
  return path.join(process.cwd(), 'src', 'content', collection);
}

function slugToTitle(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function safeDate(date?: string) {
  if (!date) return new Date().toISOString().split('T')[0];
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime()))
    return new Date().toISOString().split('T')[0];
  return parsed.toISOString().split('T')[0];
}

function normalizeFrontmatter(
  frontmatter: Record<string, unknown>,
  slug: string
): ContentFrontmatter {
  return {
    title:
      typeof frontmatter.title === 'string'
        ? frontmatter.title
        : slugToTitle(slug),
    date: safeDate(
      typeof frontmatter.date === 'string' ? frontmatter.date : undefined
    ),
    summary:
      typeof frontmatter.summary === 'string'
        ? frontmatter.summary
        : 'Konten belum memiliki ringkasan.',
    tags: Array.isArray(frontmatter.tags)
      ? frontmatter.tags.filter((tag): tag is string => typeof tag === 'string')
      : [],
    cover:
      typeof frontmatter.cover === 'string'
        ? frontmatter.cover
        : '/images/placeholder-cover.svg',
    draft: frontmatter.draft === true,
    featured: frontmatter.featured === true,
  };
}

function readCollection(collection: ContentCollection): ContentDetail[] {
  const dir = getCollectionDir(collection);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs
    .readdirSync(dir)
    .filter(
      (filename) => filename.endsWith('.mdx') || filename.endsWith('.md')
    );

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, '');
      const fullPath = path.join(dir, filename);
      const raw = fs.readFileSync(fullPath, 'utf-8');
      const { data, content } = matter(raw);
      const frontmatter = normalizeFrontmatter(
        data as Record<string, unknown>,
        slug
      );

      return {
        ...frontmatter,
        slug,
        collection,
        content,
      };
    })
    .filter((item) => !item.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllContent(collection: ContentCollection): ContentSummary[] {
  return readCollection(collection).map((item) => ({
    title: item.title,
    date: item.date,
    summary: item.summary,
    tags: item.tags,
    cover: item.cover,
    draft: item.draft,
    featured: item.featured,
    slug: item.slug,
    collection: item.collection,
  }));
}

export function getFeaturedContent(
  collection: ContentCollection,
  limit = 3
): ContentSummary[] {
  const content = getAllContent(collection);
  const featured = content.filter((item) => item.featured);
  const nonFeatured = content.filter((item) => !item.featured);
  return [...featured, ...nonFeatured].slice(0, limit);
}

export function getAllSlugs(collection: ContentCollection): string[] {
  return getAllContent(collection).map((item) => item.slug);
}

export function getContentBySlug(
  collection: ContentCollection,
  slug: string
): ContentDetail | null {
  return readCollection(collection).find((item) => item.slug === slug) ?? null;
}
