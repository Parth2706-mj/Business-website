import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 md:px-16 py-28 max-w-3xl">
      <p className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary mb-4">404</p>
      <h1 className="font-headline text-4xl font-bold text-primary uppercase mb-4">That page is not in the catalogue</h1>
      <p className="font-body text-base text-on-surface-variant mb-8 leading-relaxed">
        The address does not match a page on this site. Open the catalogue and search by material or application line.
      </p>
      <Link
        href="/products"
        className="inline-flex bg-primary text-on-primary px-6 py-3 font-label text-xs font-semibold uppercase tracking-[0.08em]"
      >
        Open catalogue
      </Link>
    </section>
  );
}
