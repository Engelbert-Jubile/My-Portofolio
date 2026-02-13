import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Profil Engelbert Jubile Satrio Lukito, Software Engineer dengan latar belakang Teknik Komputer.',
  alternates: {
    canonical: '/about',
  },
};

const skills = [
  'Next.js',
  'TypeScript',
  'React.js',
  'Node.js',
  'Laravel',
  'MySQL',
  'PostgreSQL',
  'Tailwind CSS',
  'Agile Development',
];

const experiences = [
  {
    role: 'Software Engineer',
    company: 'PT Kimia Farma Trading & Distribution (KFTD)',
    period: 'Aug 2025 - Present',
    description:
      'Mengembangkan fitur software berbasis AI, aktif di siklus agile, dan menjembatani komunikasi teknis dengan stakeholder non-teknis.',
  },
  {
    role: 'Software Engineer',
    company: 'SoVoism',
    period: 'Aug 2024 - Oct 2024',
    description:
      'Memimpin pengembangan web untuk inovasi internal perusahaan dan berkontribusi pada sprint planning serta daily scrum.',
  },
  {
    role: 'Software Engineer',
    company: 'BPSDM Universitas Diponegoro',
    period: 'Dec 2022 - Mar 2023',
    description:
      'Membangun solusi backend menggunakan Laravel dan MySQL untuk transformasi sistem digital tingkat universitas.',
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[220px_1fr] sm:p-10">
        <Image
          src="/images/profile-photo.jpeg"
          alt="Foto profil Engelbert Jubile"
          width={220}
          height={300}
          className="h-auto w-full rounded-2xl border border-slate-200 object-cover"
          sizes="220px"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Tentang Saya
          </h1>
          <p className="leading-7 text-slate-700">
            Saya Engelbert Jubile Satrio Lukito, lulusan Teknik Komputer
            Universitas Diponegoro (GPA 3.59/4.00) dengan pengalaman dalam
            software development, kolaborasi proyek, dan digital transformation.
          </p>
          <p className="leading-7 text-slate-700">
            Saya terbiasa bekerja di lingkungan agile, cepat beradaptasi, dan
            fokus pada solusi yang berdampak untuk bisnis maupun pengguna. Fokus
            stack saya saat ini adalah Next.js dan TypeScript.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Tech Stack & Skills
        </h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Pendidikan
        </h2>
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold text-slate-900">
            S1 Teknik Komputer - Universitas Diponegoro
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Sep 2020 - Jun 2024 | Semarang, Indonesia | GPA 3.59/4.00
          </p>
        </article>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Pengalaman Kerja
        </h2>
        <div className="grid gap-4">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <h3 className="font-semibold text-slate-900">
                {experience.role} - {experience.company}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{experience.period}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
