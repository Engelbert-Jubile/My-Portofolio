import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 text-slate-600">
        URL yang Anda akses tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Kembali ke Home
      </Link>
    </section>
  );
}
