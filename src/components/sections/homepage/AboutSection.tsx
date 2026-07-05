import Link from "next/link";
import { aboutSectionContent, dataSets } from "@/data/homepage";

/* =============================================================================
 * AboutSection — "Engineering Excellence" with 4 data-set cards
 * 
 * Content sourced from @/data/homepage.ts
 * ============================================================================= */

export function AboutSection() {
  const { label, heading, body, cta } = aboutSectionContent;

  return (
    <section
      id="about"
      className="py-20 px-4 md:px-16 bg-surface border-b border-outline-variant relative"
    >
      {/* Corner decoration */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-primary/20" />

      <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
        {/* Left column — title + description */}
        <div className="col-span-4 lg:col-span-4 mb-12 lg:mb-0">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
            {label}
          </span>
          <h2 className="font-headline text-2xl font-semibold text-primary uppercase mb-6 leading-tight">
            {heading}
          </h2>
          <div className="w-12 h-1 bg-primary mb-8" />
          <p className="font-body text-base text-on-surface-variant mb-6 leading-relaxed">
            {body}
          </p>
          <Link
            href={cta.href}
            className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary flex items-center group"
          >
            {cta.label}
            <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Right column — 2×2 data set grid */}
        <div className="col-span-4 md:col-span-8 lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant border border-outline-variant">
            {dataSets.map((ds) => (
              <div key={ds.id} className="bg-white p-8">
                <span className="font-label text-sm font-medium text-primary mb-2 block">
                  {ds.id}
                </span>
                <h3 className="font-headline text-xl font-semibold mb-4">
                  {ds.title}
                </h3>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  {ds.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
