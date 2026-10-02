import type { Metadata } from "next";
import Link from "next/link";
import { aboutPageContent, pageSeo } from "@/data/pages";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/shared/CTABanner";

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  keywords: pageSeo.about.keywords,
};

export default function AboutPage() {
  const { heroLabel, heroHeading, heroBody, mission, values, capabilities } = aboutPageContent;

  return (
    <>
      <PageHero label={heroLabel} heading={heroHeading} body={heroBody} />

      <section className="py-20 px-4 md:px-16 border-b border-outline-variant">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block">
              What the profile says
            </span>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className="font-body text-lg text-on-surface leading-relaxed">{mission}</p>
            <div className="w-16 h-1 bg-secondary mt-8" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-16 bg-surface-container-low border-b border-outline-variant">
        <div className="mb-12">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
            How the desk works
          </span>
          <h2 className="font-headline text-2xl font-semibold text-primary uppercase leading-tight">
            Four things the profile commits to
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border border-outline-variant">
          {values.map((value) => (
            <div key={value.title} className="bg-white p-8 flex flex-col">
              <div className="w-12 h-12 flex items-center justify-center border border-primary mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">{value.icon}</span>
              </div>
              <h3 className="font-headline text-lg font-semibold text-on-surface mb-3 uppercase">{value.title}</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 md:px-16 bg-primary text-on-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          }}
        />
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability) => (
            <div key={capability.label} className="border-l-2 border-secondary-fixed-dim pl-6">
              <div className="font-headline text-4xl md:text-5xl font-bold mb-2">{capability.value}</div>
              <div className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-on-primary/60">
                {capability.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 md:px-16 border-b border-outline-variant">
        <div className="mb-12">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
            Coverage
          </span>
          <h2 className="font-headline text-2xl font-semibold text-primary uppercase leading-tight">
            Lines in the catalogue
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="border border-outline bg-white p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline text-lg font-semibold text-on-surface uppercase">{product.name}</h3>
                <span className="material-symbols-outlined text-primary">{product.icon}</span>
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">
                {product.shortDescription}
              </p>
              <span className="font-label text-xs uppercase tracking-[0.08em] text-outline">
                {product.materials.length} materials
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="partners" className="py-20 px-4 md:px-16 bg-surface-container-low border-b border-outline-variant">
        <div className="mb-12">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
            Supply
          </span>
          <h2 className="font-headline text-2xl font-semibold text-primary uppercase leading-tight">
            Channel partners
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {company.channelPartners.map((partner) => (
            <div key={partner} className="border border-outline bg-white p-6">
              <span className="material-symbols-outlined text-primary mb-4 block">handshake</span>
              <h3 className="font-headline text-lg font-semibold text-on-surface">{partner}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 md:px-16 border-b border-outline-variant">
        <div className="mb-8">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
            Reach the desk
          </span>
          <h2 className="font-headline text-2xl font-semibold text-primary uppercase leading-tight">
            Published contact
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {company.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} className="border border-outline p-6 hover:border-primary">
              <span className="font-label text-[11px] uppercase tracking-[0.08em] text-outline block mb-2">Email</span>
              <span className="font-label text-sm font-bold text-primary">{email}</span>
            </a>
          ))}
          <a href={company.phoneHref} className="border border-outline p-6 hover:border-primary">
            <span className="font-label text-[11px] uppercase tracking-[0.08em] text-outline block mb-2">Mobile</span>
            <span className="font-label text-sm font-bold text-primary">{company.phone}</span>
          </a>
        </div>
        <p className="font-body text-sm text-on-surface-variant mt-6 max-w-2xl leading-relaxed">
          A street address is not printed on the company profile, so it is not shown here. Send the next change — address, extra grades, or a photograph — and it can be added without rebuilding the catalogue structure.
        </p>
      </section>

      <CTABanner
        heading="Start with the material"
        body="Open a line in the catalogue or send the application and grade you need."
        ctaLabel="Send an enquiry"
        ctaHref="/contact"
      />
    </>
  );
}
