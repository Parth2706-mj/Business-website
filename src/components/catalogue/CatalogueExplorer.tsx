"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CataloguePhoto } from "@/components/catalogue/CataloguePhoto";
import { getCatalogueHits, getMaterialCount, products, searchCatalogue } from "@/data/products";

export function CatalogueExplorer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const line = searchParams.get("line") ?? "all";

  const boxRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const hits = useMemo(() => getCatalogueHits(query), [query]);
  const categories = hits.filter((hit) => hit.kind === "Category");
  const productHits = hits.filter((hit) => hit.kind === "Product");

  const result = useMemo(() => searchCatalogue(query), [query]);
  const visibleProducts =
    line === "all" ? result.products : result.products.filter((product) => product.slug === line);
  const visibleMaterials =
    line === "all"
      ? result.materials
      : result.materials.filter((material) => material.applicationSlug === line);

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!boxRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  function writeParams(nextQuery: string, nextLine: string) {
    const params = new URLSearchParams();
    if (nextQuery.trim()) params.set("q", nextQuery);
    if (nextLine !== "all") params.set("line", nextLine);
    const suffix = params.toString();
    router.replace(suffix ? `/products?${suffix}` : "/products", { scroll: false });
  }

  return (
    <section className="py-16 px-4 md:px-16">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div ref={boxRef} className="relative">
          <label htmlFor="catalogue-search" className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline block mb-3">
            Search categories and products
          </label>
          <input
            id="catalogue-search"
            value={query}
            onChange={(event) => {
              writeParams(event.target.value, line);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder="Categories and products"
            className="border border-outline bg-white px-4 py-3 font-body text-sm w-full lg:w-96 outline-none focus:border-primary"
            type="search"
            role="combobox"
            aria-expanded={open}
            aria-controls="catalogue-search-list"
            aria-autocomplete="list"
          />
          {open && (
            <div
              id="catalogue-search-list"
              role="listbox"
              className="absolute left-0 top-full z-40 mt-1 w-full lg:w-[26rem] max-h-[70vh] overflow-y-auto border border-outline bg-white shadow-md"
            >
              {hits.length === 0 ? (
                <p className="px-4 py-3 font-body text-sm text-on-surface-variant">
                  No category or product matches “{query.trim()}”.
                </p>
              ) : (
                <>
                  {categories.length > 0 && (
                    <p className="px-4 pt-3 pb-1 font-label text-[10px] font-semibold uppercase tracking-[0.08em] text-outline">
                      Categories
                    </p>
                  )}
                  <ul>
                    {categories.map((hit) => (
                      <li key={hit.id} role="option">
                        <Link
                          href={hit.href}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-2.5 hover:bg-surface-container-low border-b border-outline-variant"
                        >
                          <span className="block font-body text-sm text-on-surface">{hit.label}</span>
                          <span className="block font-label text-[10px] uppercase tracking-[0.08em] text-outline mt-1">
                            {hit.detail}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {productHits.length > 0 && (
                    <p className="px-4 pt-3 pb-1 font-label text-[10px] font-semibold uppercase tracking-[0.08em] text-outline">
                      Products
                    </p>
                  )}
                  <ul>
                    {productHits.map((hit) => (
                      <li key={hit.id} role="option">
                        <Link
                          href={hit.href}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-2.5 hover:bg-surface-container-low border-b border-outline-variant last:border-b-0"
                        >
                          <span className="block font-body text-sm text-on-surface">{hit.label}</span>
                          <span className="block font-label text-[10px] uppercase tracking-[0.08em] text-outline mt-1">
                            {hit.detail}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
        <p className="font-label text-xs uppercase tracking-[0.08em] text-outline">
          {getMaterialCount()} materials · {products.length} application lines
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        <FilterChip active={line === "all"} onClick={() => writeParams(query, "all")}>
          All lines
        </FilterChip>
        {products.map((product) => (
          <FilterChip
            key={product.slug}
            active={line === product.slug}
            onClick={() => writeParams(query, product.slug)}
          >
            {product.name}
          </FilterChip>
        ))}
      </div>

      {visibleProducts.length === 0 ? (
        <div className="border border-outline bg-white p-8 mb-12">
          <h2 className="font-headline text-2xl font-bold text-primary uppercase mb-3">
            No application line matched
          </h2>
          <p className="font-body text-sm text-on-surface-variant">
            Try a material name from the profile, such as stearic acid, paraffin wax, or fitting super pack.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {visibleProducts.map((product) => (
            <article key={product.slug} className="border border-outline bg-white flex flex-col hover:border-primary transition-colors group">
              <Link href={`/products/${product.slug}`} className="block">
                <CataloguePhoto image={product.image} className="h-44" zoom />
              </Link>
              <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                <h2 className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                  <Link href={`/products/${product.slug}`} className="hover:underline">
                    {product.name}
                  </Link>
                </h2>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>
                  {product.icon}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-5">
                  {product.shortDescription}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.materials.slice(0, 4).map((material) => (
                    <li key={material.name} className="flex justify-between gap-4 font-label text-xs border-b border-outline-variant pb-2">
                      <span className="text-on-surface">{material.name}</span>
                      <span className="text-outline text-right">{material.detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-label text-[11px] uppercase tracking-[0.08em] text-outline mb-6">
                  {product.materials.length} materials on this line
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-auto inline-flex items-center font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary"
                >
                  Open line
                  <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="flex items-end justify-between mb-6">
        <h2 className="font-headline text-2xl font-bold text-primary uppercase">Material index</h2>
        <span className="font-label text-xs uppercase tracking-[0.08em] text-outline">
          Showing {visibleMaterials.length}
        </span>
      </div>

      <div className="border border-outline overflow-x-auto">
        <div className="hidden md:grid grid-cols-12 bg-surface-container-low border-b border-outline px-6 py-3">
          <div className="col-span-4 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
            Material
          </div>
          <div className="col-span-3 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
            Detail
          </div>
          <div className="col-span-3 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
            Application
          </div>
          <div className="col-span-2 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary text-right">
            Enquire
          </div>
        </div>
        {visibleMaterials.length === 0 ? (
          <p className="px-6 py-8 font-body text-sm text-on-surface-variant">
            Nothing in the catalogue matches that search.
          </p>
        ) : (
          visibleMaterials.map((material, index) => (
            <div
              key={material.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-2 px-6 py-4 items-center ${
                index < visibleMaterials.length - 1 ? "border-b border-outline-variant" : ""
              }`}
            >
              <div className="md:col-span-4 flex items-center gap-3 font-body text-sm text-on-surface">
                <CataloguePhoto image={material.image} className="h-10 w-10 shrink-0" sizes="40px" decorative />
                <Link
                  href={`/products/${material.applicationSlug}?material=${encodeURIComponent(material.name)}#${material.id}`}
                  className="hover:text-primary"
                >
                  {material.name}
                </Link>
              </div>
              <div className="md:col-span-3 font-label text-xs text-outline">{material.detail ?? "—"}</div>
              <div className="md:col-span-3">
                <Link
                  href={`/products/${material.applicationSlug}`}
                  className="font-label text-xs uppercase tracking-[0.08em] text-primary"
                >
                  {material.applicationName}
                </Link>
              </div>
              <div className="md:col-span-2 md:text-right">
                <Link
                  href={`/contact?intent=quote&application=${material.applicationSlug}&material=${encodeURIComponent(material.name)}`}
                  className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary"
                >
                  Request
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.08em] border cursor-pointer transition-colors ${
        active
          ? "bg-primary text-on-primary border-primary"
          : "border-outline text-on-surface-variant hover:border-primary hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}
