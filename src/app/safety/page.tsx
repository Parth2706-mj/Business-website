"use client";

import { useState } from "react";
import { safetyPageContent, safetyDocuments } from "@/data/pages";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/shared/CTABanner";

/* =============================================================================
 * Safety (SDS) Page — /safety
 *
 * GHS-compliant Safety Data Sheets download page with category filtering.
 * ============================================================================= */

const categories = ["All", ...Array.from(new Set(safetyDocuments.map((d) => d.category!)))];

export default function SafetyPage() {
  const { heroLabel, heroHeading, heroBody } = safetyPageContent;
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? safetyDocuments
      : safetyDocuments.filter((d) => d.category === activeCategory);

  return (
    <>
      <PageHero label={heroLabel} heading={heroHeading} body={heroBody} />

      {/* ── Hazard Warning Banner ── */}
      <div className="bg-error/5 border-b border-error/20 px-4 md:px-16 py-4 flex items-center gap-4">
        <div className="w-8 h-8 bg-error flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-on-error text-sm">
            warning
          </span>
        </div>
        <p className="font-label text-xs uppercase tracking-[0.08em] text-error">
          IMPORTANT: Always consult the latest Safety Data Sheet before handling any chemical product. SDS documents are updated regularly to reflect current regulatory requirements.
        </p>
      </div>

      {/* ── Category Filter + Document Table ── */}
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

        {/* Document Table */}
        <div className="border border-outline overflow-x-auto">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 bg-surface-container-low border-b border-outline px-6 py-3">
            <div className="col-span-5 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
              SDS TITLE
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
              <div className="col-span-5 font-body text-sm text-on-surface flex items-center gap-3 mb-2 md:mb-0">
                <span className="material-symbols-outlined text-error text-base flex-shrink-0">
                  gpp_maybe
                </span>
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
          SHOWING {filtered.length} OF {safetyDocuments.length} SDS DOCUMENTS
        </div>
      </section>

      {/* ── GHS Compliance Info ── */}
      <section className="py-16 px-4 md:px-16 bg-surface-container-low border-t border-b border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "verified", title: "GHS COMPLIANT", desc: "All SDS documents follow the Globally Harmonized System of Classification and Labelling." },
            { icon: "update", title: "REGULARLY UPDATED", desc: "Documents are reviewed and updated in accordance with OSHA and international regulatory changes." },
            { icon: "language", title: "MULTI-LANGUAGE", desc: "SDS available in English, German, Mandarin, and Spanish upon request." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-10 h-10 border border-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary mb-2">
                  {item.title}
                </h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        heading="NEED A SPECIFIC SDS?"
        body="Contact our regulatory compliance team for product-specific safety documentation."
        ctaLabel="CONTACT COMPLIANCE TEAM"
        ctaHref="/contact"
      />
    </>
  );
}
