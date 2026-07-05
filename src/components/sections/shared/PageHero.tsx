/* =============================================================================
 * PageHero — Reusable page header banner for inner pages
 * 
 * Provides a consistent visual for all non-homepage pages.
 * Blueprint grid background + primary color overlay.
 * 
 * Usage:
 *   <PageHero label="ABOUT US" heading="OUR STORY" body="..." />
 * ============================================================================= */

interface PageHeroProps {
  label: string;
  heading: string;
  body?: string;
}

export function PageHero({ label, heading, body }: PageHeroProps) {
  return (
    <section className="relative bg-primary text-on-primary py-24 md:py-32 overflow-hidden">
      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-16">
        {/* Label */}
        <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary-fixed-dim block mb-4">
          {label}
        </span>

        {/* Heading */}
        <h1 className="font-headline text-4xl md:text-5xl font-bold uppercase leading-tight mb-6">
          {heading}
        </h1>

        {/* Optional body text */}
        {body && (
          <p className="font-body text-lg leading-relaxed text-on-primary/80 max-w-2xl">
            {body}
          </p>
        )}
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-on-primary/10" />
    </section>
  );
}
