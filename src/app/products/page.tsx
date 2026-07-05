import type { Metadata } from "next";
import Link from "next/link";
import { pageSeo } from "@/data/pages";
import { products } from "@/data/products";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/shared/CTABanner";

/* =============================================================================
 * Products Overview Page — /products
 * 
 * Grid of all product categories with specs and links to detail pages.
 * ============================================================================= */

export const metadata: Metadata = {
  title: pageSeo.products.title,
  description: pageSeo.products.description,
  keywords: pageSeo.products.keywords,
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        label="PRODUCT CATALOG"
        heading="POLYMER SOLUTIONS"
        body="Explore our full range of industrial-grade PVC compounds, performance additives, and sustainable polymer systems engineered for demanding applications."
      />

      {/* Products grid */}
      <section className="py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="border border-outline bg-white hover:border-primary transition-colors"
            >
              {/* Card header */}
              <div className="p-5 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                  {product.name}
                </span>
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: 22 }}
                >
                  {product.icon}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="font-body text-base text-on-surface-variant mb-6 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Specs preview */}
                <div className="space-y-2 mb-6">
                  {product.specs.slice(0, 4).map((spec) => (
                    <div
                      key={spec.label}
                      className="flex justify-between items-center font-label text-xs border-b border-outline-variant pb-2"
                    >
                      <span className="text-outline uppercase">{spec.label}</span>
                      <span className="text-primary font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Applications preview */}
                <div className="mb-6">
                  <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline block mb-3">
                    KEY APPLICATIONS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.slice(0, 3).map((app) => (
                      <span
                        key={app}
                        className="inline-flex items-center px-2 py-0.5 bg-surface-container-high font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-on-surface"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary group"
                >
                  VIEW FULL SPECIFICATIONS
                  <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        heading="NEED A CUSTOM FORMULATION?"
        body="Our engineering team develops tailored polymer compounds for your specific application requirements."
        ctaLabel="REQUEST CONSULTATION"
        ctaHref="/contact"
      />
    </main>
  );
}
