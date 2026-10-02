import Link from "next/link";
import { heroContent, heroStats } from "@/data/homepage";
import { company } from "@/data/company";

export function HeroSection() {
  const { badge, headline, subtext, primaryCta, secondaryCta } = heroContent;

  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary via-primary-container to-primary" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundSize: "60px 60px",
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)",
          }}
        />
      </div>

      <div className="relative z-10 px-4 md:px-16 w-full grid grid-cols-4 md:grid-cols-12 gap-6">
        <div className="col-span-4 md:col-span-8 lg:col-span-7">
          <div className="inline-flex items-center gap-2 border border-on-primary/20 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-secondary-fixed-dim" />
            <span className="text-on-primary font-label text-xs font-semibold uppercase tracking-[0.08em]">
              {badge}
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-5xl lg:text-[56px] font-bold text-on-primary uppercase mb-6 leading-[1.05] tracking-tight">
            {headline}
          </h1>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-1 bg-secondary-fixed-dim" />
            <div className="w-4 h-1 bg-secondary-fixed-dim/50" />
          </div>

          <p className="font-body text-lg text-on-primary/85 max-w-xl mb-12 leading-relaxed">{subtext}</p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={primaryCta.href}
              className="bg-on-primary text-primary px-8 py-4 font-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-on-primary/90 transition-all"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="border border-on-primary/40 text-on-primary px-8 py-4 font-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-on-primary hover:text-primary transition-all"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex col-span-5 items-center justify-center">
          <div className="border border-on-primary/20 bg-white/5 px-8 py-10 max-w-sm">
            <p className="font-label text-[11px] uppercase tracking-[0.16em] text-secondary-fixed-dim mb-4">
              {company.tagline}
            </p>
            <p className="font-headline text-3xl font-bold text-on-primary leading-tight mb-2">
              {company.shortName}
            </p>
            <p className="font-headline text-xl text-on-primary/80 mb-6">{company.tradeName}</p>
            <p className="font-body text-sm text-on-primary/70 leading-relaxed">
              Channel partner for Indofil / Reagans India, Gold Stab, Maldeep Catalysts, and Camex Ltd.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-on-primary/10 bg-black/10 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-on-primary/10">
          {heroStats.map((stat) => (
            <div key={stat.label} className="px-4 md:px-8 py-4 text-center">
              <div className="font-headline text-xl md:text-2xl font-bold text-on-primary">{stat.value}</div>
              <div className="font-label text-[10px] uppercase tracking-[0.1em] text-on-primary/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
