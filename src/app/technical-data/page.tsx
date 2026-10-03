import type { Metadata } from "next";
import { Suspense } from "react";
import { pageSeo, technicalDataContent } from "@/data/pages";
import { PageHero } from "@/components/sections/shared/PageHero";
import { InquiryForm } from "@/components/catalogue/InquiryForm";
import { MaterialLibrary } from "@/components/catalogue/MaterialLibrary";

export const metadata: Metadata = {
  title: pageSeo.technicalData.title,
  description: pageSeo.technicalData.description,
  keywords: pageSeo.technicalData.keywords,
};

export default function TechnicalDataPage() {
  const { heroLabel, heroHeading, heroBody } = technicalDataContent;

  return (
    <>
      <PageHero label={heroLabel} heading={heroHeading} body={heroBody} />
      <section className="py-16 px-4 md:px-16 border-b border-outline-variant">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-headline text-3xl font-bold text-primary uppercase mb-4">
              Ask us for the sheet
            </h2>
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              Grades are confirmed by us, not by a file sitting on the website. Name the line and the material, and we answer on priority.
            </p>
          </div>
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="border border-outline bg-white min-h-96" />}>
              <InquiryForm idPrefix="technical-enquiry" defaultIntent="tds" />
            </Suspense>
          </div>
        </div>
      </section>
      <MaterialLibrary intent="tds" actionLabel="Request sheet" />
    </>
  );
}
