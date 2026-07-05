import Link from "next/link";
import { heroContent } from "@/data/homepage";

/* =============================================================================
 * HeroSection — Full-bleed hero with blueprint grid overlay
 * 
 * Content sourced from @/data/homepage.ts
 * ============================================================================= */

export function HeroSection() {
  const { badge, headline, subtext, primaryCta, secondaryCta } = heroContent;

  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-primary" />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        {/* Blueprint grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, rgba(0,30,64,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,30,64,0.05) 1px, transparent 1px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-16 w-full grid grid-cols-4 md:grid-cols-12 gap-6">
        <div className="col-span-4 md:col-span-8 lg:col-span-7">
          {/* Certification badge */}
          <div className="inline-block border border-on-primary/30 px-3 py-1 mb-6">
            <span className="text-on-primary font-label text-xs font-semibold uppercase tracking-[0.08em]">
              {badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline text-4xl md:text-5xl lg:text-[48px] font-bold text-on-primary uppercase mb-6 leading-[1.1] tracking-tight">
            {headline}
          </h1>

          {/* Subtext */}
          <p className="font-body text-lg text-on-primary/90 max-w-xl mb-10 leading-relaxed">
            {subtext}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={primaryCta.href}
              className="bg-on-primary text-primary px-8 py-4 font-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-on-primary/90 transition-colors"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="border border-on-primary text-on-primary px-8 py-4 font-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-on-primary hover:text-primary transition-all"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Side decoration */}
      <div className="absolute right-4 md:right-16 bottom-12 hidden md:flex flex-col items-end text-on-primary/60 font-label text-sm space-y-2">
        <div>COORD_X: 40.7128° N</div>
        <div>COORD_Y: 74.0060° W</div>
        <div className="w-32 h-px bg-on-primary/30 mt-2" />
        <div className="mt-4 flex gap-2">
          <span className="w-2 h-2 bg-secondary-container" />
          <span className="w-2 h-2 bg-on-primary/30" />
          <span className="w-2 h-2 bg-on-primary/30" />
        </div>
      </div>
    </section>
  );
}
