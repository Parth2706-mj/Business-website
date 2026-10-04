import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company } from "@/data/company";
import { getAllProductSlugs, getProductBySlug, products } from "@/data/products";
import { CataloguePhoto } from "@/components/catalogue/CataloguePhoto";
import { MaterialShowcase } from "@/components/catalogue/MaterialShowcase";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/shared/CTABanner";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Line not found" };
  return {
    title: `${product.name} | ${company.name}`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = product.relatedSlugs
    .map((relatedSlug) => products.find((item) => item.slug === relatedSlug))
    .filter((item) => item !== undefined);

  return (
    <>
      <PageHero label="Application line" heading={product.name} body={product.shortDescription} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-20 px-4 md:px-16">
        <div className="lg:col-span-7">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
            From the profile
          </span>
          <div className="font-body text-base text-on-surface-variant leading-relaxed whitespace-pre-line mb-12">
            {product.longDescription}
          </div>

          <MaterialShowcase product={product} />
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="border border-outline bg-white lg:sticky lg:top-24">
            <div className="bg-primary px-6 py-4 flex items-center justify-between">
              <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-on-primary">
                This line
              </span>
              <span className="material-symbols-outlined text-on-primary" style={{ fontSize: 18 }}>
                {product.icon}
              </span>
            </div>
            <dl>
              <div className="px-6 py-4 border-b border-outline-variant">
                <dt className="font-label text-[11px] uppercase tracking-[0.08em] text-outline mb-1">Materials</dt>
                <dd className="font-headline text-2xl font-bold text-primary">{product.materials.length}</dd>
              </div>
              <div className="px-6 py-4 border-b border-outline-variant">
                <dt className="font-label text-[11px] uppercase tracking-[0.08em] text-outline mb-2">Phone</dt>
                <dd className="space-y-2">
                  {company.phones.map((phone) => (
                    <a key={phone.href} href={phone.href} className="block font-label text-sm font-bold text-primary">
                      {phone.label}: {phone.display}
                    </a>
                  ))}
                </dd>
              </div>
              <div className="px-6 py-4">
                <dt className="font-label text-[11px] uppercase tracking-[0.08em] text-outline mb-1">Locations</dt>
                <dd className="font-body text-sm text-on-surface">{company.locations.join(" · ")}</dd>
              </div>
            </dl>
            <div className="border-t border-outline-variant p-6 space-y-3">
              <Link
                href={`/contact?intent=quote&application=${product.slug}`}
                className="block w-full bg-primary text-on-primary py-3 font-label text-xs font-semibold uppercase tracking-[0.08em] text-center hover:bg-primary-container transition-colors"
              >
                Request a quotation
              </Link>
              <Link
                href={`/contact?intent=tds&application=${product.slug}`}
                className="block w-full border border-primary text-primary py-3 font-label text-xs font-semibold uppercase tracking-[0.08em] text-center hover:bg-primary hover:text-on-primary transition-all"
              >
                Request technical data
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {relatedProducts.length > 0 && (
        <section className="py-20 px-4 md:px-16 bg-surface-container-low border-t border-outline-variant">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-8">
            Related lines
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.slug}
                href={`/products/${related.slug}`}
                className="border border-outline bg-white hover:border-primary transition-colors group"
              >
                <CataloguePhoto image={related.image} className="h-40" zoom />
                <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                    {related.name}
                  </span>
                  <span className="material-symbols-outlined text-primary text-lg">{related.icon}</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">
                  {related.shortDescription}
                </p>
                <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary inline-flex items-center gap-2">
                  View materials
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTABanner
        heading="Another line, same enquiry"
        body="If the material you need sits on another application, open the catalogue and send one enquiry."
        ctaLabel="Back to catalogue"
        ctaHref="/products"
      />
    </>
  );
}
