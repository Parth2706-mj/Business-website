import Link from "next/link";
import { techSupportContent, techStats, serviceDirectory } from "@/data/homepage";

/* =============================================================================
 * TechnicalSupport — "Certified Precision" — enhanced with micro-animations
 * ============================================================================= */

export function TechnicalSupport() {
  const { label, heading, body } = techSupportContent;

  return (
    <section
      id="technical-support"
      className="py-24 px-4 md:px-16 bg-primary text-on-primary relative overflow-hidden"
    >
      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundSize: "60px 60px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)",
        }}
      />
      {/* Diagonal accent */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] opacity-[0.03]"
        style={{
          background: "linear-gradient(135deg, transparent 40%, rgba(167,200,255,0.6) 50%, transparent 60%)",
        }}
      />

      <div className="relative z-10 grid grid-cols-4 md:grid-cols-12 gap-6 items-start">
        {/* Left column */}
        <div className="col-span-4 md:col-span-12 lg:col-span-6">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary-fixed-dim block mb-4">
            {label}
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-4 leading-[1.05]">
            {heading}
          </h2>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-12 h-1 bg-secondary-fixed-dim" />
            <div className="w-3 h-1 bg-secondary-fixed-dim/50" />
          </div>
          <p className="font-body text-lg text-on-primary/80 mb-12 leading-relaxed max-w-lg">
            {body}
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-8">
            {techStats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-secondary-fixed-dim pl-5">
                <div className="font-headline text-3xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-on-primary/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — service directory */}
        <div className="col-span-4 md:col-span-12 lg:col-span-5 lg:col-start-8 mt-12 lg:mt-0">
          <div className="border border-on-primary/15 bg-white/5 backdrop-blur-sm">
            <div className="px-8 py-5 border-b border-on-primary/15 flex items-center justify-between">
              <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary-fixed-dim">
                SERVICE DIRECTORY
              </span>
              <span className="material-symbols-outlined text-secondary-fixed-dim text-lg">
                folder_open
              </span>
            </div>
            <ul>
              {serviceDirectory.map((service, i) => (
                <li
                  key={service.name}
                  className={
                    i < serviceDirectory.length - 1
                      ? "border-b border-on-primary/10"
                      : ""
                  }
                >
                  <Link
                    href={service.href}
                    className="flex justify-between items-center px-8 py-5 group hover:bg-white/5 transition-colors"
                  >
                    <span className="font-body text-sm flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-secondary-fixed-dim/50 group-hover:bg-secondary-fixed-dim transition-colors" />
                      {service.name}
                    </span>
                    <span className="material-symbols-outlined text-base opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      chevron_right
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-6 border-t border-on-primary/15">
              <Link
                href="/technical-data"
                className="flex items-center justify-center gap-2 w-full border border-secondary-fixed-dim text-secondary-fixed-dim py-4 font-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-secondary-fixed-dim hover:text-primary transition-all"
              >
                <span className="material-symbols-outlined text-base">
                  open_in_new
                </span>
                ACCESS PORTAL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
