"use client";

import { useState } from "react";
import Link from "next/link";
import { CataloguePhoto } from "@/components/catalogue/CataloguePhoto";
import type { Product } from "@/types";

export function MaterialShowcase({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = product.materials[activeIndex] ?? product.materials[0];
  const photo = active?.image ?? product.image;

  const thumbs = product.materials.filter(
    (item, index, list) => list.findIndex((other) => other.image.src === item.image.src) === index,
  );

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

      <figure className="mb-4">
        <CataloguePhoto image={photo} className="h-72 md:h-96" sizes="(max-width: 1024px) 100vw, 58vw" priority />
        <figcaption className="mt-3 flex flex-col gap-1">
          <p className="font-body text-sm text-on-surface">{active?.imageNote ?? photo.alt}</p>
          <p className="font-label text-[11px] uppercase tracking-[0.06em] text-outline">
            Photo: {photo.credit} · {photo.license} ·{" "}
            <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
              Wikimedia Commons
            </a>
          </p>
        </figcaption>
      </figure>

      <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-5">
        Photographs illustrate the material or the application. They are reference images, not warehouse shots, and the grade is confirmed on enquiry.
      </p>

      <div className="flex gap-2 overflow-x-auto pb-4 mb-2">
        {thumbs.map((item) => {
          const index = product.materials.findIndex((candidate) => candidate.image.src === item.image.src);
          const selected = photo.src === item.image.src;
          return (
            <button
              key={item.image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${item.image.alt}`}
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
