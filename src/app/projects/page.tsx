import type { Metadata } from 'next';

import { ProjectCard } from '@/components/project-card';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Proyek dan pengalaman kerja Engelbert dalam software engineering dan transformasi digital.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  const projects = getAllContent('projects');

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Projects
        </h1>
        <p className="max-w-2xl text-slate-600">
          Ringkasan proyek dan pengalaman profesional berdasarkan CV, mencakup
          implementasi sistem, kolaborasi agile, dan delivery hasil bisnis.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
