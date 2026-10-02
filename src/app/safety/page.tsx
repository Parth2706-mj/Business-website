import type { Metadata } from "next";
import { pageSeo, safetyPageContent } from "@/data/pages";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/shared/CTABanner";
import { MaterialLibrary } from "@/components/catalogue/MaterialLibrary";

export const metadata: Metadata = {
  title: pageSeo.safety.title,
  description: pageSeo.safety.description,
  keywords: pageSeo.safety.keywords,
};

export default function SafetyPage() {
  const { heroLabel, heroHeading, heroBody, notices } = safetyPageContent;

  return (
    <>
      <PageHero label={heroLabel} heading={heroHeading} body={heroBody} />
      <div className="bg-error/5 border-b border-error/20 px-4 md:px-16 py-4 flex items-start gap-4">
        <div className="w-8 h-8 bg-error flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-on-error text-sm">warning</span>
        </div>
        <p className="font-body text-sm text-error">
          Handle a chemical only against the safety data sheet you have been sent. The list below is the catalogue, not the sheet.
        </p>
      </div>
      <MaterialLibrary intent="sds" actionLabel="Request SDS" />
      <section className="py-16 px-4 md:px-16 bg-surface-container-low border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {notices.map((notice) => (
            <div key={notice.title} className="flex gap-4">
              <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-lg">{notice.icon}</span>
              </div>
              <div>
                <h2 className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary mb-2">
                  {notice.title}
                </h2>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{notice.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTABanner
        heading="Need a sheet that is not listed?"
        body="Send the trade name you have. If it sits outside the printed profile, the desk can say so."
        ctaLabel="Contact the desk"
        ctaHref="/contact?intent=sds"
      />
    </>
  );
}
