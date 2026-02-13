import type { Metadata } from 'next';
import Link from 'next/link';

import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Catatan teknis seputar React, Next.js, dan web performance.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllContent('blog');

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Blog
        </h1>
        <p className="max-w-2xl text-slate-600">
          Berisi insight singkat dari proyek nyata: arsitektur, optimasi, dan
          praktik deployment.
        </p>
      </section>

      <section className="space-y-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300"
          >
            <p className="text-xs tracking-wide text-slate-500 uppercase">
              {post.date}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {post.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={`${post.slug}-${tag}`}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
