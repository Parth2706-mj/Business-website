import { industryPartners } from "@/data/homepage";

/* =============================================================================
 * IndustryPartners — Enhanced partner logos strip with dividers
 * ============================================================================= */

export function IndustryPartners() {
  return (
    <section
      id="partners"
      className="py-16 px-4 md:px-16 border-b border-outline-variant bg-surface"
    >
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-px bg-outline-variant" />
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline">
            Authorized Industrial Partners
          </span>
          <div className="w-12 h-px bg-outline-variant" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-0">
        {industryPartners.map((partner, i) => (
          <div
            key={partner}
            className={`flex items-center justify-center px-8 lg:px-12 py-4 hover:opacity-80 transition-opacity ${
              i < industryPartners.length - 1
                ? "border-r border-outline-variant"
                : ""
            }`}
          >
            <span className="font-headline text-xl md:text-2xl font-bold tracking-tighter text-on-surface/30 hover:text-primary/50 transition-colors">
              {partner}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
