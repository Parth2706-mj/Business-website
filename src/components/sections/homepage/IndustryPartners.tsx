import { industryPartners } from "@/data/homepage";

/* =============================================================================
 * IndustryPartners — Authorized partner names in a grayscale row
 * 
 * Content sourced from @/data/homepage.ts
 * ============================================================================= */

export function IndustryPartners() {
  return (
    <section
      id="partners"
      className="py-12 px-4 md:px-16 border-b border-outline-variant bg-surface-container-low"
    >
      <div className="flex flex-col items-center mb-8">
        <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline">
          Authorized Industrial Partners
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-24 opacity-40 grayscale">
        {industryPartners.map((partner) => (
          <div
            key={partner}
            className="font-headline text-2xl font-bold tracking-tighter"
          >
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}
