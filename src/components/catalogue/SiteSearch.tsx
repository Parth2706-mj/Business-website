"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { searchCatalogue } from "@/data/products";

interface SiteSearchProps {
  className?: string;
  autoFocus?: boolean;
  onNavigate?: () => void;
}

export function SiteSearch({ className = "", autoFocus = false, onNavigate }: SiteSearchProps) {
  const router = useRouter();
  const listId = useId();
  const boxRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    const needle = query.trim();
    if (needle.length < 2) return [];
    const { products: matchedProducts, materials } = searchCatalogue(needle);
    const productHits = matchedProducts.map((product) => ({
      key: `product-${product.slug}`,
      href: `/products/${product.slug}`,
      label: product.name,
      kind: "Application",
    }));
    const materialHits = materials.slice(0, 6).map((material) => ({
      key: material.id,
      href: `/products/${material.applicationSlug}`,
      label: material.detail ? `${material.name} — ${material.detail}` : material.name,
      kind: material.applicationName,
    }));
    return [...productHits, ...materialHits].slice(0, 8);
  }, [query]);

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!boxRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  function go(href: string) {
    setOpen(false);
    setQuery("");
    onNavigate?.();
    router.push(href);
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const needle = query.trim();
    if (!needle) return;
    go(`/products?q=${encodeURIComponent(needle)}`);
  }

  return (
    <div ref={boxRef} className={`relative ${className}`}>
      <form onSubmit={onSubmit} className="flex items-center border border-outline bg-surface-container-low px-3 py-1">
        <label htmlFor={`${listId}-input`} className="sr-only">
          Search the catalogue
        </label>
        <span className="material-symbols-outlined text-outline text-sm mr-2">search</span>
        <input
          id={`${listId}-input`}
          value={query}
          autoFocus={autoFocus}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="bg-transparent border-none outline-none text-sm font-label w-full min-w-0"
          placeholder="Search materials..."
          type="search"
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
        />
      </form>

      {open && query.trim().length >= 2 && (
        <div
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-1 border border-outline bg-white shadow-md"
        >
          {results.length === 0 ? (
            <p className="px-4 py-3 font-body text-sm text-on-surface-variant">
              No catalogue match for “{query.trim()}”.
            </p>
          ) : (
            <ul>
              {results.map((result) => (
                <li key={result.key}>
                  <button
                    type="button"
                    onClick={() => go(result.href)}
                    className="w-full text-left px-4 py-3 hover:bg-surface-container-low cursor-pointer border-b border-outline-variant last:border-b-0"
                  >
                    <span className="block font-body text-sm text-on-surface">{result.label}</span>
                    <span className="block font-label text-[10px] uppercase tracking-[0.08em] text-outline mt-1">
                      {result.kind}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={() => go(`/products?q=${encodeURIComponent(query.trim())}`)}
            className="w-full px-4 py-3 text-left font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary bg-surface-container-low cursor-pointer"
          >
            See all results
          </button>
        </div>
      )}
    </div>
  );
}
