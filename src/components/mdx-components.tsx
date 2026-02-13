import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-10 scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 scroll-mt-24 text-xl font-semibold tracking-tight text-slate-900">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 leading-7 text-slate-700">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
      {children}
    </ol>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-900">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mt-5 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-slate-50">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-5 border-l-4 border-slate-200 pl-4 text-slate-600 italic">
      {children}
    </blockquote>
  ),
};
