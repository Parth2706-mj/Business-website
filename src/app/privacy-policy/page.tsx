import type { Metadata } from "next";
import { pageSeo, privacyPolicyContent } from "@/data/pages";

/* =============================================================================
 * Privacy Policy Page — /privacy-policy
 * ============================================================================= */

export const metadata: Metadata = {
  title: pageSeo.privacyPolicy.title,
  description: pageSeo.privacyPolicy.description,
};

export default function PrivacyPolicyPage() {
  const { heading, lastUpdated, sections } = privacyPolicyContent;

  return (
    <>
      {/* Header */}
      <section className="bg-primary text-on-primary py-20 px-4 md:px-16">
        <h1 className="font-headline text-3xl md:text-4xl font-bold uppercase mb-3">
          {heading}
        </h1>
        <span className="font-label text-xs uppercase tracking-[0.08em] text-on-primary/60">
          LAST UPDATED: {lastUpdated.toUpperCase()}
        </span>
      </section>

      {/* Content */}
      <section className="py-20 px-4 md:px-16 max-w-4xl">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-headline text-lg font-semibold text-primary uppercase mb-4">
                {section.title}
              </h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
