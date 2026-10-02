import type { Metadata } from "next";
import { pageSeo, technicalDataContent } from "@/data/pages";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/shared/CTABanner";
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
      <MaterialLibrary intent="tds" actionLabel="Request sheet" />
      <CTABanner
        heading="Need the sheet for a whole line?"
        body="Leave the material blank and name the application. The desk can reply with the sheets that match."
        ctaLabel="Request documentation"
        ctaHref="/contact?intent=tds"
      />
    </>
  );
}
