import Link from "next/link";
import { aboutSectionContent, dataSets } from "@/data/homepage";

/* =============================================================================
 * AboutSection — "Engineering Excellence" with 4 data-set cards
 *
 * Enhanced with:
 *   - Hover effects on data cards
 *   - Animated accent bar
 *   - Structural decorations
 * ============================================================================= */

export function AboutSection() {
  const { label, heading, body, cta } = aboutSectionContent;

  return (
    <section
      id="about"
      className="py-24 px-4 md:px-16 bg-surface border-b border-outline-variant relative"
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-primary/15" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-primary/15" />

      <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
        {/* Left column — title + description */}
        <div className="col-span-4 lg:col-span-4 mb-12 lg:mb-0">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary block mb-4">
            {label}
          </span>
          <h2 className="font-headline text-3xl font-bold text-primary uppercase mb-6 leading-tight">
            {heading}
          </h2>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-12 h-1 bg-primary" />
            <div className="w-3 h-1 bg-secondary" />
          </div>
          <p className="font-body text-base text-on-surface-variant mb-8 leading-relaxed">
            {body}
          </p>
          <Link
            href={cta.href}
            className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary flex items-center group border-b border-transparent hover:border-primary pb-1 transition-all"
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
              <div
                key={ds.id}
                className="bg-white p-8 group hover:bg-surface-container-lowest transition-colors relative"
              >
                {/* ID badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-primary-fixed flex items-center justify-center">
                    <span className="font-label text-[10px] font-bold text-primary">
                      {ds.id.split("_")[2]}
                    </span>
                  </span>
                  <span className="font-label text-[11px] font-medium text-outline uppercase tracking-[0.08em]">
                    {ds.id}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-semibold mb-4 text-on-surface group-hover:text-primary transition-colors">
                  {ds.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {ds.description}
                </p>
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
