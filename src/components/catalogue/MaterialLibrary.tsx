"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CataloguePhoto } from "@/components/catalogue/CataloguePhoto";
import { getMaterialIndex, products } from "@/data/products";
import type { EnquiryIntent } from "@/types";

interface MaterialLibraryProps {
  intent: Extract<EnquiryIntent, "tds" | "sds">;
  actionLabel: string;
}

export function MaterialLibrary({ intent, actionLabel }: MaterialLibraryProps) {
  const materials = useMemo(() => getMaterialIndex(), []);
  const [line, setLine] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = materials.filter((material) => {
    const matchesLine = line === "all" || material.applicationSlug === line;
    const needle = query.trim().toLowerCase();
    const haystack = `${material.name} ${material.detail ?? ""} ${material.applicationName}`.toLowerCase();
    return matchesLine && (!needle || haystack.includes(needle));
  });

  return (
    <section className="py-16 px-4 md:px-16">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-end justify-between mb-8">
        <div className="flex flex-col gap-2">
          <label htmlFor={`${intent}-search`} className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline">
            Find a material
          </label>
          <input
            id={`${intent}-search`}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Search the profile..."
            className="border border-outline bg-white px-4 py-3 font-body text-sm w-full lg:w-80 outline-none focus:border-primary"
          />
        </div>
        <p className="font-label text-xs uppercase tracking-[0.08em] text-outline">
          Showing {filtered.length} of {materials.length}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <FilterChip active={line === "all"} onClick={() => setLine("all")}>
          All lines
        </FilterChip>
        {products.map((product) => (
          <FilterChip key={product.slug} active={line === product.slug} onClick={() => setLine(product.slug)}>
            {product.name}
          </FilterChip>
        ))}
      </div>

      <div className="border border-outline">
        <div className="hidden md:grid grid-cols-12 bg-surface-container-low border-b border-outline px-6 py-3">
          <div className="col-span-4 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">Material</div>
          <div className="col-span-3 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">Detail</div>
          <div className="col-span-3 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">Application</div>
          <div className="col-span-2 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary text-right">Action</div>
        </div>
        {filtered.length === 0 ? (
          <p className="px-6 py-8 font-body text-sm text-on-surface-variant">No material matches that filter.</p>
        ) : (
          filtered.map((material, index) => (
            <div
              key={material.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-2 px-6 py-4 items-center ${
                index < filtered.length - 1 ? "border-b border-outline-variant" : ""
              }`}
            >
              <div className="md:col-span-4 flex items-center gap-3 font-body text-sm text-on-surface">
                <CataloguePhoto image={material.image} className="h-10 w-10 shrink-0" sizes="40px" />
                <span>{material.name}</span>
              </div>
              <div className="md:col-span-3 font-label text-xs text-outline">{material.detail ?? "—"}</div>
              <div className="md:col-span-3 font-label text-xs uppercase tracking-[0.08em] text-on-surface-variant">
                {material.applicationName}
              </div>
              <div className="md:col-span-2 md:text-right">
                <Link
                  href={`/contact?intent=${intent}&application=${material.applicationSlug}&material=${encodeURIComponent(material.name)}`}
                  className="inline-flex items-center font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary"
                >
                  {actionLabel}
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
