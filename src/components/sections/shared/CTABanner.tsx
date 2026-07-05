/* =============================================================================
 * CTABanner — Reusable call-to-action strip
 * 
 * Used at the bottom of inner pages to drive conversions.
 * 
 * Usage:
 *   <CTABanner
 *     heading="Ready to get started?"
 *     body="Contact our engineering team."
 *     ctaLabel="CONTACT US"
 *     ctaHref="/contact"
 *   />
 * ============================================================================= */

import { Button } from "@/components/ui/button";

interface CTABannerProps {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export function CTABanner({ heading, body, ctaLabel, ctaHref }: CTABannerProps) {
  return (
    <section className="bg-primary text-on-primary py-20 relative overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 md:px-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase mb-4">
          {heading}
        </h2>
        <p className="font-body text-lg text-on-primary/80 mb-8">{body}</p>
        <Button
          href={ctaHref}
          className="bg-on-primary text-primary hover:bg-on-primary/90 px-8 py-4"
        >
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
