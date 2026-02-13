import Image from 'next/image';
import Link from 'next/link';

import type { ContentSummary } from '@/lib/content';

export function ProjectCard({ project }: { project: ContentSummary }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Image
        src={project.cover}
        alt={project.title}
        width={1200}
        height={675}
        className="h-48 w-full object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="space-y-3 p-5">
        <p className="text-xs tracking-wide text-slate-500 uppercase">
          {project.date}
        </p>
        <h3 className="text-lg font-semibold text-slate-900">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={`${project.slug}-${tag}`}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
