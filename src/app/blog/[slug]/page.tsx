import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

import { mdxComponents } from '@/components/mdx-components';
import { getAllSlugs, getContentBySlug, mdxRemoteOptions } from '@/lib/content';

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllSlugs('blog').map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getContentBySlug('blog', slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [{ url: post.cover }],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getContentBySlug('blog', slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <header className="mb-8 space-y-4 border-b border-slate-200 pb-6">
        <p className="text-xs tracking-wide text-slate-500 uppercase">
          {post.date}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {post.title}
        </h1>
        <p className="max-w-3xl leading-7 text-slate-600">{post.summary}</p>
      </header>
      <MDXRemote
        source={post.content}
        options={mdxRemoteOptions}
        components={mdxComponents}
      />
    </article>
  );
}
