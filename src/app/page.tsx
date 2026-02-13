import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ProjectCard } from '@/components/project-card';
import { getAllContent, getFeaturedContent } from '@/lib/content';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const featuredProjects = getFeaturedContent('projects', 2);
  const recentPosts = getAllContent('blog').slice(0, 3);
  const techStack = ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'];

  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[1.4fr_1fr] sm:p-10">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-700">
            SOFTWARE ENGINEER
          </p>
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Engelbert Jubile Satrio Lukito
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Lulusan Teknik Komputer dengan pengalaman pengembangan software,
            digital transformation, dan kolaborasi agile. Saat ini fokus pada
            pengembangan aplikasi modern dengan Next.js dan TypeScript.
          </p>
          <ul className="flex flex-wrap gap-2">
            {techStack.map((stack) => (
              <li
                key={stack}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {stack}
              </li>
            ))}
          </ul>
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            GPA 3.59/4.00 | Universitas Diponegoro | Terbiasa menangani proyek
            lintas tim dari tahap planning sampai delivery.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Lihat Proyek
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              Hubungi Saya
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="pointer-events-none absolute -inset-4 rounded-full bg-cyan-100 blur-2xl" />
          <Image
            src="/images/profile-photo.jpeg"
            alt={`Foto profil ${siteConfig.name}`}
            width={800}
            height={1200}
            priority
            className="relative h-auto w-full rounded-3xl border border-slate-200 object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-slate-700 underline"
          >
            Lihat semua
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Tulisan Terbaru
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-700 underline"
          >
            Buka blog
          </Link>
        </div>
        <div className="grid gap-4">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300"
            >
              <p className="text-xs tracking-wide text-slate-500 uppercase">
                {post.date}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {post.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
