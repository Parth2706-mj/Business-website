import { company } from "@/data/company";

export function IndustryPartners() {
  return (
    <section id="partners" className="py-16 px-4 md:px-16 border-b border-outline-variant bg-surface">
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-px bg-outline-variant" />
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline">
            Channel partners
          </span>
          <div className="w-12 h-px bg-outline-variant" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border border-outline-variant">
        {company.channelPartners.map((partner) => (
          <div key={partner} className="bg-white px-6 py-8 text-center">
            <span className="font-headline text-lg md:text-xl font-bold tracking-tight text-primary">
              {partner}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
