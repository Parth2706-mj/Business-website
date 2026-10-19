"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getCatalogueHits, type CatalogueSearchHit } from "@/data/products";

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
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => getCatalogueHits(query), [query]);
  const categories = results.filter((hit) => hit.kind === "Category");
  const products = results.filter((hit) => hit.kind === "Product");
  const ordered = [...categories, ...products];

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
    setActiveIndex(0);
    onNavigate?.();
    router.push(href);
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const selected = ordered[activeIndex];
    if (open && selected) {
      go(selected.href);
      return;
    }
    const needle = query.trim();
    if (!needle) return;
    go(`/products?q=${encodeURIComponent(needle)}`);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => (ordered.length === 0 ? 0 : (index + 1) % ordered.length));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => (ordered.length === 0 ? 0 : (index - 1 + ordered.length) % ordered.length));
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={boxRef} className={`relative ${className}`}>
      <form onSubmit={onSubmit} className="flex items-center border border-outline bg-surface-container-low px-3 py-1">
        <label htmlFor={`${listId}-input`} className="sr-only">
          Search categories and products
        </label>
        <span className="material-symbols-outlined text-outline text-sm mr-2">search</span>
        <input
          id={`${listId}-input`}
          value={query}
          autoFocus={autoFocus}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          className="bg-transparent border-none outline-none text-sm font-label w-full min-w-0"
          placeholder="Categories and products"
          type="search"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={open && ordered[activeIndex] ? `${listId}-${ordered[activeIndex].id}` : undefined}
        />
      </form>

      {open && (
        <div
          id={listId}
          role="listbox"
          className="absolute right-0 top-full z-50 mt-1 w-[min(26rem,calc(100vw-2rem))] max-h-[70vh] overflow-y-auto border border-outline bg-white shadow-md"
        >
          {ordered.length === 0 ? (
            <p className="px-4 py-3 font-body text-sm text-on-surface-variant">
              No category or product matches “{query.trim()}”.
            </p>
          ) : (
            <>
              <HitGroup
                title="Categories"
                hits={categories}
                listId={listId}
                activeId={ordered[activeIndex]?.id}
                onPick={go}
              />
              <HitGroup
                title="Products"
                hits={products}
                listId={listId}
                activeId={ordered[activeIndex]?.id}
                onPick={go}
              />
            </>
          )}
          {query.trim() && (
            <button
              type="button"
              onClick={() => go(`/products?q=${encodeURIComponent(query.trim())}`)}
              className="w-full px-4 py-3 text-left font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary bg-surface-container-low cursor-pointer"
            >
              See all results
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function HitGroup({
  title,
  hits,
  listId,
  activeId,
  onPick,
}: {
  title: string;
  hits: CatalogueSearchHit[];
  listId: string;
  activeId?: string;
  onPick: (href: string) => void;
}) {
  if (hits.length === 0) return null;
  return (
    <div>
      <p className="px-4 pt-3 pb-1 font-label text-[10px] font-semibold uppercase tracking-[0.08em] text-outline">
        {title}
      </p>
      <ul>
        {hits.map((hit) => {
          const active = hit.id === activeId;
          return (
            <li key={hit.id} id={`${listId}-${hit.id}`} role="option" aria-selected={active}>
              <button
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => onPick(hit.href)}
                className={`w-full text-left px-4 py-2.5 cursor-pointer border-b border-outline-variant last:border-b-0 ${
                  active ? "bg-primary-fixed/50" : "hover:bg-surface-container-low"
                }`}
              >
                <span className="block font-body text-sm text-on-surface">{hit.label}</span>
                <span className="block font-label text-[10px] uppercase tracking-[0.08em] text-outline mt-1">
                  {hit.detail}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
