import type { Metadata } from 'next';
import { JetBrains_Mono, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { absoluteUrl, siteConfig } from '@/lib/seo';

import './globals.css';

const fontSans = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
});

const fontMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl('/')),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: absoluteUrl('/'),
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Lewati ke konten utama
        </a>
        <div className="relative min-h-screen bg-slate-50 text-slate-900">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(circle at 20% 20%, rgba(14, 116, 144, 0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(217, 70, 239, 0.12), transparent 35%)',
            }}
          />
          <SiteHeader />
          <main
            id="main-content"
            className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14"
          >
            {children}
          </main>
          <SiteFooter />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
