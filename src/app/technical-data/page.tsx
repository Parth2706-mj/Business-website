"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { pageSeo, technicalDataContent, technicalDocuments } from "@/data/pages";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/shared/CTABanner";

/* =============================================================================
 * Technical Data Page — /technical-data
 *
 * Searchable/filterable document library with high-density data table.
 * ============================================================================= */

const categories = ["All", ...Array.from(new Set(technicalDocuments.map((d) => d.category!)))];

export default function TechnicalDataPage() {
  const { heroLabel, heroHeading, heroBody } = technicalDataContent;
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? technicalDocuments
      : technicalDocuments.filter((d) => d.category === activeCategory);

  return (
    <>
      <PageHero label={heroLabel} heading={heroHeading} body={heroBody} />

      {/* ── Category Filter ── */}
      <section className="py-20 px-4 md:px-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 font-label text-xs font-semibold uppercase tracking-[0.08em] border cursor-pointer transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-on-primary border-primary"
                  : "border-outline text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Document Table ── */}
        <div className="border border-outline overflow-x-auto">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 bg-surface-container-low border-b border-outline px-6 py-3">
            <div className="col-span-5 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
              DOCUMENT TITLE
            </div>
            <div className="col-span-2 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
              CATEGORY
            </div>
            <div className="col-span-1 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary text-center">
              FORMAT
            </div>
            <div className="col-span-1 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary text-center">
              SIZE
            </div>
            <div className="col-span-2 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary text-center">
              UPDATED
            </div>
            <div className="col-span-1 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary text-center">
              ACTION
            </div>
          </div>

          {/* Table rows */}
          {filtered.map((doc, i) => (
            <div
              key={doc.title}
              className={`grid grid-cols-1 md:grid-cols-12 px-6 py-4 items-center hover:bg-surface-container-low transition-colors ${
                i < filtered.length - 1 ? "border-b border-outline-variant" : ""
              }`}
            >
              <div className="col-span-5 font-body text-sm text-on-surface mb-2 md:mb-0">
                {doc.title}
              </div>
              <div className="col-span-2">
                <span className="inline-flex items-center px-2 py-0.5 bg-primary-fixed font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-primary">
                  {doc.category}
                </span>
              </div>
              <div className="col-span-1 font-label text-xs text-center text-outline">
                {doc.format}
              </div>
              <div className="col-span-1 font-label text-xs text-center text-outline">
                {doc.size}
              </div>
              <div className="col-span-2 font-label text-xs text-center text-outline">
                {doc.updated}
              </div>
              <div className="col-span-1 text-center">
                <button className="w-8 h-8 border border-outline inline-flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-base">
                    download
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 font-label text-xs text-outline uppercase tracking-[0.08em]">
          SHOWING {filtered.length} OF {technicalDocuments.length} DOCUMENTS
        </div>
      </section>

      <CTABanner
        heading="NEED CUSTOM SPECIFICATIONS?"
        body="Our engineering team can provide application-specific technical documentation and testing reports."
        ctaLabel="REQUEST DOCUMENTATION"
        ctaHref="/contact"
      />
    </>
  );
}
