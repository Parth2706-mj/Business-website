import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getAllProductSlugs } from "@/data/products";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/shared/CTABanner";

/* =============================================================================
 * Product Detail Page — /products/[slug]
 *
 * Full specifications, applications, and compliance for a single product.
 * ============================================================================= */

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
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | POLYMER-X INDUSTRIAL`,
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
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <>
      <PageHero
        label="PRODUCT SPECIFICATION"
        heading={product.name}
        body={product.shortDescription}
      />

      <div className="grid grid-cols-4 md:grid-cols-12 gap-6 py-20 px-4 md:px-16">
        {/* ── Left Column: Full Description ── */}
        <div className="col-span-4 md:col-span-12 lg:col-span-7">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
            OVERVIEW
          </span>
          <div className="font-body text-base text-on-surface-variant leading-relaxed whitespace-pre-line mb-12">
            {product.longDescription}
          </div>

          {/* Applications */}
          <div className="border-t border-outline-variant pt-10 mb-12">
            <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-6">
              KEY APPLICATIONS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.applications.map((app) => (
                <div key={app} className="flex items-center gap-3 py-2">
                  <span className="w-2 h-2 bg-secondary flex-shrink-0" />
                  <span className="font-body text-sm text-on-surface">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance */}
          <div className="border-t border-outline-variant pt-10">
            <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-6">
              COMPLIANCE & CERTIFICATIONS
            </span>
            <div className="space-y-3">
              {product.compliance.map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-600 text-lg">
                    check_circle
                  </span>
                  <span className="font-body text-sm text-on-surface">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right Column: Specs Table ── */}
        <div className="col-span-4 md:col-span-12 lg:col-span-4 lg:col-start-9">
          <div className="border border-outline bg-white sticky top-24">
            {/* Specs header */}
            <div className="bg-primary px-6 py-4 flex items-center justify-between">
              <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-on-primary">
                TECHNICAL SPECIFICATIONS
              </span>
              <span
                className="material-symbols-outlined text-on-primary"
                style={{ fontSize: 18 }}
              >
                {product.icon}
              </span>
            </div>

            {/* Specs rows */}
            <div>
              {product.specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex justify-between items-center px-6 py-3 ${
                    i < product.specs.length - 1
                      ? "border-b border-outline-variant"
                      : ""
                  }`}
                >
                  <span className="font-label text-xs uppercase tracking-[0.08em] text-outline">
                    {spec.label}
                  </span>
                  <span className="font-label text-xs font-bold text-primary">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="border-t border-outline-variant p-6 space-y-3">
              <Link
                href="/contact"
                className="block w-full bg-primary text-on-primary py-3 font-label text-xs font-semibold uppercase tracking-[0.08em] text-center hover:bg-primary-container transition-colors"
              >
                REQUEST SAMPLE
              </Link>
              <Link
                href="/technical-data"
                className="block w-full border border-primary text-primary py-3 font-label text-xs font-semibold uppercase tracking-[0.08em] text-center hover:bg-primary hover:text-on-primary transition-all"
              >
                DOWNLOAD TDS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Related Products ── */}
      {relatedProducts.length > 0 && (
        <section className="py-20 px-4 md:px-16 bg-surface-container-low border-t border-outline-variant">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-8">
            RELATED PRODUCTS
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rp) =>
              rp ? (
                <Link
                  key={rp.slug}
                  href={`/products/${rp.slug}`}
                  className="border border-outline bg-white p-6 hover:border-primary transition-colors group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                      {rp.name}
                    </span>
                    <span className="material-symbols-outlined text-primary text-lg">
                      {rp.icon}
                    </span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">
                    {rp.shortDescription}
                  </p>
                  <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                    VIEW DETAILS
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </span>
                </Link>
              ) : null
            )}
          </div>
        </section>
      )}

      <CTABanner
        heading="NEED A CUSTOM FORMULATION?"
        body="Our engineering team develops tailored polymer compounds for your specific application requirements."
        ctaLabel="REQUEST CONSULTATION"
        ctaHref="/contact"
      />
    </>
  );
}
