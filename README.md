# Personal Portfolio (Next.js + Vercel)

Portfolio pribadi berbasis Next.js App Router + TypeScript + Tailwind CSS, dengan konten MDX dan deploy langsung ke Vercel tanpa custom backend server.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX content via `next-mdx-remote` + `gray-matter`
- Vercel Analytics + Speed Insights
- Formspree untuk contact form

## Struktur Konten

```txt
src/content/projects/*.mdx
src/content/blog/*.mdx
```

Contoh frontmatter:

```md
---
title: 'Judul Konten'
date: '2026-02-10'
summary: 'Ringkasan singkat.'
tags: ['Next.js', 'SEO']
cover: '/images/placeholder-cover.svg'
featured: false
draft: false
---
```

## Setup Lokal

1. Install dependency:

```bash
npm install
```

2. Siapkan env:

```bash
cp .env.example .env.local
```

3. Isi `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

4. Jalankan development server:

```bash
npm run dev
```

## Quality Checks (Sebelum Deploy)

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

Target Lighthouse production:

- Performance >= 90
- Accessibility >= 95
- Best Practices >= 90
- SEO >= 95

## Deployment ke Vercel

1. Push repo ke GitHub.
2. Import project di Vercel.
3. Pastikan framework terdeteksi sebagai Next.js.
4. Tambahkan environment variables yang sama seperti `.env.local`.
5. Deploy.
6. Hubungkan custom domain.

## Checklist Post-Deploy

- `https://your-domain.com/sitemap.xml` aktif
- `https://your-domain.com/robots.txt` aktif
- OG preview tampil benar saat share link
- Contact form mengirim email/entry ke Formspree
- Tidak ada 404 pada route utama

## Branching Strategy

- `main`: production branch
- `feat/<nama-fitur>`: branch pengembangan fitur
- Pull request -> Vercel preview deployment -> merge ke `main`
