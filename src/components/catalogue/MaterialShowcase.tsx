"use client";

import { useState } from "react";
import Link from "next/link";
import { CataloguePhoto } from "@/components/catalogue/CataloguePhoto";
import type { Product } from "@/types";

export function MaterialShowcase({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = product.materials[activeIndex] ?? product.materials[0];
  const photo = active?.image ?? product.image;

  return (
    <div className="border-t border-outline-variant pt-10">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
        <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
          Materials supplied for this line
        </span>
        <span className="font-label text-[11px] uppercase tracking-[0.08em] text-outline">
          Select a material to change the photograph
        </span>
      </div>

      <CataloguePhoto image={photo} className="h-72 md:h-96 mb-5" sizes="(max-width: 1024px) 100vw, 58vw" priority />

      <div className="flex gap-2 overflow-x-auto pb-4 mb-2">
        {product.materials.map((item, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={`${item.name}-thumb`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={item.name}
              aria-pressed={selected}
              className={`relative h-16 w-24 shrink-0 overflow-hidden border cursor-pointer ${
                selected ? "border-primary" : "border-outline-variant hover:border-primary"
              }`}
            >
              <CataloguePhoto image={item.image} className="h-16 w-24" sizes="96px" decorative />
            </button>
          );
        })}
      </div>

      <ul className="border border-outline">
        {product.materials.map((item, index) => {
          const selected = index === activeIndex;
          return (
            <li
              key={item.name}
              className={`flex flex-col md:flex-row md:items-center gap-3 px-3 py-3 ${
                index < product.materials.length - 1 ? "border-b border-outline-variant" : ""
              } ${selected ? "bg-primary-fixed/40" : "bg-white"}`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={selected}
                className="flex flex-1 items-center gap-3 text-left cursor-pointer"
              >
                <CataloguePhoto image={item.image} className="h-14 w-14 shrink-0" sizes="56px" decorative />
                <span>
                  <span className="block font-body text-sm text-on-surface">{item.name}</span>
                  {item.detail && (
                    <span className="block font-label text-xs uppercase tracking-[0.08em] text-outline mt-1">
                      {item.detail}
                    </span>
                  )}
                </span>
              </button>
              <Link
                href={`/contact?intent=quote&application=${product.slug}&material=${encodeURIComponent(item.name)}`}
                className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary shrink-0 md:px-2"
              >
                Enquire
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
