import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Kirim pesan langsung untuk diskusi proyek, kolaborasi, atau konsultasi.',
  alternates: {
    canonical: '/contact',
  },
};

const formAction = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
const formConfigured = Boolean(formAction);

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Contact
        </h1>
        <p className="text-slate-600">
          Isi form berikut atau hubungi saya langsung melalui email/LinkedIn.
        </p>
      </section>

      <section className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:grid-cols-2">
        <p>
          <span className="font-semibold">Email:</span> jubile82@gmail.com
        </p>
        <p>
          <span className="font-semibold">Telepon:</span> 081329921166
        </p>
        <p className="sm:col-span-2">
          <span className="font-semibold">LinkedIn:</span>{' '}
          <a
            href="https://www.linkedin.com/in/engelbertjubilesl"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            linkedin.com/in/engelbertjubilesl
          </a>
        </p>
        <p className="sm:col-span-2">
          <span className="font-semibold">GitHub:</span>{' '}
          <a
            href="https://github.com/Engelbert-Jubile"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            github.com/Engelbert-Jubile
          </a>
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {!formConfigured ? (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            Set environment variable <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code>{' '}
            agar form bisa digunakan di local dan Vercel.
          </div>
        ) : null}

        <form action={formAction} method="POST" className="mt-4 space-y-4">
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-700"
            >
              Nama
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 ring-cyan-200 transition outline-none focus:ring"
              placeholder="Nama lengkap"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 ring-cyan-200 transition outline-none focus:ring"
              placeholder="nama@email.com"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-700"
            >
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 ring-cyan-200 transition outline-none focus:ring"
              placeholder="Ceritakan kebutuhan proyek Anda..."
            />
          </div>

          <button
            type="submit"
            disabled={!formConfigured}
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            Kirim Pesan
          </button>
        </form>
      </section>
    </div>
  );
}
