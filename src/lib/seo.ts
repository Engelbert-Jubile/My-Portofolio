export const siteConfig = {
  name: 'Engelbert Jubile',
  title: 'Engelbert Jubile | Software Engineer',
  description:
    'Portfolio Engelbert Jubile Satrio Lukito, Software Engineer dengan fokus Next.js, TypeScript, dan pengembangan solusi digital.',
  locale: 'id_ID',
  links: {
    github: 'https://github.com/Engelbert-Jubile',
    linkedin: 'https://www.linkedin.com/in/engelbertjubilesl',
  },
};

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
}

export function absoluteUrl(pathname = '/') {
  const baseUrl = getBaseUrl();
  return new URL(pathname, baseUrl).toString();
}
