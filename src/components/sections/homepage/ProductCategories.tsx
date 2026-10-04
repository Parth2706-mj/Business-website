import Link from "next/link";
import { CataloguePhoto } from "@/components/catalogue/CataloguePhoto";
import { getMaterialCount, products } from "@/data/products";
import { productsSectionContent } from "@/data/homepage";

export function ProductCategories() {
  const { label, heading } = productsSectionContent;

  return (
    <section id="products" className="py-24 px-4 md:px-16 bg-surface-container-low border-b border-outline-variant">
      <div className="flex justify-between items-end mb-14 gap-6">
        <div>
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary block mb-3">
            {label}
          </span>
          <h2 className="font-headline text-3xl font-bold text-primary uppercase leading-tight">{heading}</h2>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="w-2 h-2 bg-secondary" />
          <span className="font-label text-xs font-medium text-outline uppercase tracking-[0.08em]">
            {getMaterialCount()} materials · {products.length} lines
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <article
            key={product.slug}
            className="border border-outline bg-white flex flex-col h-full hover:border-primary group transition-all duration-300 relative"
          >
            <div className="absolute -top-3 left-4 bg-primary px-2 py-0.5">
              <span className="font-label text-[10px] font-bold text-on-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <Link href={`/products/${product.slug}`} className="block border-b border-outline-variant">
              <CataloguePhoto image={product.image} className="h-44" zoom />
            </Link>

            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low group-hover:bg-primary-fixed/30 transition-colors">
              <h3 className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                {product.name}
              </h3>
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
                {product.icon}
              </span>
            </div>

            <div className="p-6 flex-grow">
              <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                {product.shortDescription}
              </p>
              <ul className="space-y-3">
                {product.materials.slice(0, 4).map((material) => (
                  <li
                    key={material.name}
                    className="flex justify-between items-start gap-3 font-label text-xs border-b border-outline-variant pb-2"
                  >
                    <span className="text-on-surface">{material.name}</span>
                    {material.detail && <span className="text-outline text-right">{material.detail}</span>}
                  </li>
                ))}
              </ul>
              {product.materials.length > 4 && (
                <p className="font-label text-[11px] uppercase tracking-[0.08em] text-outline mt-4">
                  + {product.materials.length - 4} more
                </p>
              )}
            </div>

            <Link
              href={`/products/${product.slug}`}
              className="flex items-center justify-center gap-2 w-full py-4 bg-surface-container-high border-t border-outline-variant font-label text-xs font-semibold uppercase tracking-[0.08em] text-center group-hover:bg-primary group-hover:text-on-primary transition-all"
            >
              View materials
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
