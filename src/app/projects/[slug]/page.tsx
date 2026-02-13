import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { mdxComponents } from '@/components/mdx-components';
import { getAllSlugs, getContentBySlug, mdxRemoteOptions } from '@/lib/content';

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllSlugs('projects').map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getContentBySlug('projects', slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.cover }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getContentBySlug('projects', slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <header className="space-y-4">
        <p className="text-xs tracking-wide text-slate-500 uppercase">
          {project.date}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {project.title}
        </h1>
        <p className="max-w-3xl leading-7 text-slate-600">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <Image
        src={project.cover}
        alt={project.title}
        width={1200}
        height={675}
        className="h-auto w-full rounded-2xl border border-slate-200"
        sizes="(max-width: 1024px) 100vw, 1024px"
      />

      <div className="border-t border-slate-200 pt-6">
        <MDXRemote
          source={project.content}
          options={mdxRemoteOptions}
          components={mdxComponents}
        />
      </div>
    </article>
  );
}
