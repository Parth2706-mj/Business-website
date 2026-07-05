import Link from "next/link";
import { products } from "@/data/products";
import { productsSectionContent } from "@/data/homepage";

/* =============================================================================
 * ProductCategories — Product card grid on the homepage
 * 
 * Products sourced from @/data/products.ts
 * Section labels from @/data/homepage.ts
 * ============================================================================= */

export function ProductCategories() {
  const { label, heading, entryCount } = productsSectionContent;

  return (
    <section id="products" className="py-20 px-4 md:px-16">
      {/* Section header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-2">
            {label}
          </span>
          <h2 className="font-headline text-2xl font-semibold text-primary uppercase leading-tight">
            {heading}
          </h2>
        </div>
        <div className="hidden md:block font-label text-sm font-medium text-outline">
          {entryCount}
        </div>
      </div>

      {/* Product cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.slug}
            className="border border-outline bg-white flex flex-col h-full hover:border-primary transition-colors"
          >
            {/* Card header */}
            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
              <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                {product.name}
              </span>
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: 18 }}
              >
                {product.icon}
              </span>
            </div>

            {/* Card body */}
            <div className="p-6 flex-grow">
              <p className="font-body text-base text-on-surface-variant mb-6 leading-relaxed">
                {product.shortDescription}
              </p>
              <div className="space-y-3">
                {product.specs.slice(0, 2).map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-center font-label text-xs border-b border-outline-variant pb-2"
                  >
                    <span className="text-outline uppercase">{spec.label}</span>
                    <span className="text-primary font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card action */}
            <Link
              href={`/products/${product.slug}`}
              className="block w-full py-3 bg-surface-container-high border-t border-outline-variant font-label text-xs font-semibold uppercase tracking-[0.08em] text-center hover:bg-primary hover:text-on-primary transition-all"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
