import Link from "next/link";
import { heroContent } from "@/data/homepage";
import { company } from "@/data/company";

/* =============================================================================
 * HeroSection — Full-bleed hero with animated blueprint grid overlay
 *
 * Enhanced with:
 *   - Animated gradient shimmer on the grid
 *   - Stats bar at the bottom
 *   - Structural decorative elements
 * ============================================================================= */

export function HeroSection() {
  const { badge, headline, subtext, primaryCta, secondaryCta } = heroContent;

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary via-primary-container to-primary" />
        {/* Blueprint grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundSize: "60px 60px",
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)",
          }}
        />
        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04]"
          style={{
            background: "linear-gradient(135deg, transparent 45%, rgba(167,200,255,0.5) 50%, transparent 55%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-16 w-full grid grid-cols-4 md:grid-cols-12 gap-6">
        <div className="col-span-4 md:col-span-8 lg:col-span-7">
          {/* Certification badge */}
          <div className="inline-flex items-center gap-2 border border-on-primary/20 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 animate-pulse" />
            <span className="text-on-primary font-label text-xs font-semibold uppercase tracking-[0.08em]">
              {badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline text-4xl md:text-5xl lg:text-[56px] font-bold text-on-primary uppercase mb-6 leading-[1.05] tracking-tight">
            {headline}
          </h1>

          {/* Decorative bar */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-1 bg-secondary-fixed-dim" />
            <div className="w-4 h-1 bg-secondary-fixed-dim/50" />
          </div>

          {/* Subtext */}
          <p className="font-body text-lg text-on-primary/85 max-w-xl mb-12 leading-relaxed">
            {subtext}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={primaryCta.href}
              className="bg-on-primary text-primary px-8 py-4 font-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-on-primary/90 transition-all hover:shadow-lg hover:shadow-white/10"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="border border-on-primary/40 text-on-primary px-8 py-4 font-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-on-primary hover:text-primary transition-all backdrop-blur-sm"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* Right side — Molecular data visualization */}
        <div className="hidden lg:flex col-span-5 items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Hexagonal structure */}
            <div className="absolute inset-0 border border-on-primary/10 rotate-45" />
            <div className="absolute inset-8 border border-on-primary/15 rotate-12" />
            <div className="absolute inset-16 border border-secondary-fixed-dim/30 -rotate-12" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-headline text-5xl font-bold text-on-primary/20">PX</div>
                <div className="font-label text-[10px] uppercase tracking-[0.2em] text-on-primary/30 mt-1">
                  INDUSTRIAL
                </div>
              </div>
            </div>
            {/* Corner dots */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-secondary-fixed-dim/40" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-secondary-fixed-dim/40" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-secondary-fixed-dim/40" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-secondary-fixed-dim/40" />
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-on-primary/10 bg-black/10 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-on-primary/10">
          {[
            { value: "40+", label: "YEARS" },
            { value: "6", label: "FACILITIES" },
            { value: "30+", label: "COUNTRIES" },
            { value: "500+", label: "FORMULATIONS" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 md:px-8 py-4 text-center">
              <div className="font-headline text-xl md:text-2xl font-bold text-on-primary">
                {stat.value}
              </div>
              <div className="font-label text-[10px] uppercase tracking-[0.1em] text-on-primary/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side decoration */}
      <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-end text-on-primary/40 font-label text-[11px] space-y-2">
        <div>COORD_X: 40.7128° N</div>
        <div>COORD_Y: 74.0060° W</div>
        <div className="w-24 h-px bg-on-primary/20 mt-2" />
        <div className="mt-3 flex gap-2">
          <span className="w-2 h-2 bg-secondary-container" />
          <span className="w-2 h-2 bg-on-primary/20" />
          <span className="w-2 h-2 bg-on-primary/20" />
        </div>
      </div>
    </section>
  );
}
