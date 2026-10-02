import type { Metadata } from "next";
import { Suspense } from "react";
import { pageSeo } from "@/data/pages";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/shared/CTABanner";
import { CatalogueExplorer } from "@/components/catalogue/CatalogueExplorer";

export const metadata: Metadata = {
  title: pageSeo.products.title,
  description: pageSeo.products.description,
  keywords: pageSeo.products.keywords,
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="Catalogue"
        heading="Application lines"
        body="Six lines from the company profile. Search a material, open the line it belongs to, or send an enquiry for price and availability."
      />
      <Suspense fallback={<div className="px-4 md:px-16 py-16 font-body text-sm text-on-surface-variant">Loading catalogue…</div>}>
        <CatalogueExplorer />
      </Suspense>
      <CTABanner
        heading="Need a grade confirmed?"
        body="Name the application and the material. The enquiry opens in your email app, addressed to both published inboxes."
        ctaLabel="Send an enquiry"
        ctaHref="/contact?intent=quote"
      />
    </>
  );
}
