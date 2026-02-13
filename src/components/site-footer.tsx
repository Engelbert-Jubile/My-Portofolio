import Link from 'next/link';

import { siteConfig } from '@/lib/seo';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          (c) {new Date().getFullYear()} Engelbert Jubile. Dibuat dengan Next.js
          + Vercel.
        </p>
        <div className="flex items-center gap-4">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
