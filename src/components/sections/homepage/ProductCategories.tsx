import Link from "next/link";
import { products } from "@/data/products";
import { productsSectionContent } from "@/data/homepage";

/* =============================================================================
 * ProductCategories — Enhanced product card grid
 *
 * Features:
 *   - Hover border + shadow animation
 *   - Card number indexing
 *   - Full-width action bar
 * ============================================================================= */

export function ProductCategories() {
  const { label, heading, entryCount } = productsSectionContent;

  return (
    <section id="products" className="py-24 px-4 md:px-16 bg-surface-container-low border-b border-outline-variant">
      {/* Section header */}
      <div className="flex justify-between items-end mb-14">
        <div>
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary block mb-3">
            {label}
          </span>
          <h2 className="font-headline text-3xl font-bold text-primary uppercase leading-tight">
            {heading}
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="w-2 h-2 bg-secondary" />
          <span className="font-label text-xs font-medium text-outline uppercase tracking-[0.08em]">
            {entryCount}
          </span>
        </div>
      </div>

      {/* Product cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <div
            key={product.slug}
            className="border border-outline bg-white flex flex-col h-full hover:border-primary group transition-all duration-300 relative"
          >
            {/* Index number */}
            <div className="absolute -top-3 -left-px bg-primary px-2 py-0.5">
              <span className="font-label text-[10px] font-bold text-on-primary">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Card header */}
            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low group-hover:bg-primary-fixed/30 transition-colors">
              <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                {product.name}
              </span>
              <span
                className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform"
                style={{ fontSize: 20 }}
              >
                {product.icon}
              </span>
            </div>

            {/* Card body */}
            <div className="p-6 flex-grow">
              <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                {product.shortDescription}
              </p>
              <div className="space-y-3">
                {product.specs.slice(0, 3).map((spec) => (
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
              className="flex items-center justify-center gap-2 w-full py-4 bg-surface-container-high border-t border-outline-variant font-label text-xs font-semibold uppercase tracking-[0.08em] text-center group-hover:bg-primary group-hover:text-on-primary transition-all"
            >
              VIEW DETAILS
              <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                arrow_forward
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
