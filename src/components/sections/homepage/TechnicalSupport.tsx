import Link from "next/link";
import { techSupportContent, techStats, serviceDirectory } from "@/data/homepage";

/* =============================================================================
 * TechnicalSupport — "Certified Precision" with stats + service directory
 * 
 * Content sourced from @/data/homepage.ts
 * ============================================================================= */

export function TechnicalSupport() {
  const { label, heading, body } = techSupportContent;

  return (
    <section
      id="technical-support"
      className="py-20 px-4 md:px-16 bg-primary text-on-primary relative overflow-hidden"
    >
      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(0,30,64,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,30,64,0.05) 1px, transparent 1px)",
        }}
      />

      <div className="relative z-10 grid grid-cols-4 md:grid-cols-12 gap-6 items-center">
        {/* Left column */}
        <div className="col-span-4 md:col-span-12 lg:col-span-6">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary-fixed-dim block mb-4">
            {label}
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-8 leading-[1.1]">
            {heading}
          </h2>
          <p className="font-body text-lg text-on-primary/80 mb-10 leading-relaxed">
            {body}
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-8">
            {techStats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-secondary-fixed-dim pl-4">
                <div className="font-headline text-2xl font-semibold mb-1">
                  {stat.value}
                </div>
                <div className="font-label text-xs font-semibold uppercase tracking-[0.08em] opacity-60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — service directory */}
        <div className="col-span-4 md:col-span-12 lg:col-span-5 lg:col-start-8 mt-12 lg:mt-0">
          <div className="border border-on-primary/20 p-8 bg-white/5 backdrop-blur-sm">
            <h4 className="font-label text-xs font-semibold uppercase tracking-[0.08em] mb-6 text-secondary-fixed-dim border-b border-on-primary/20 pb-2">
              SERVICE DIRECTORY
            </h4>
            <ul className="space-y-6">
              {serviceDirectory.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex justify-between items-center group font-body text-base"
                  >
                    <span>{service.name}</span>
                    <span className="material-symbols-outlined text-lg opacity-40 group-hover:opacity-100 transition-opacity">
                      chevron_right
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/technical-data"
              className="block w-full mt-10 border border-secondary-fixed-dim text-secondary-fixed-dim py-4 font-label text-xs font-semibold uppercase tracking-[0.08em] text-center hover:bg-secondary-fixed-dim hover:text-primary transition-all"
            >
              ACCESS PORTAL
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
