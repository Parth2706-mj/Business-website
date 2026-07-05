import type { Metadata } from "next";
import Link from "next/link";
import { pageSeo } from "@/data/pages";
import {
  aboutPageContent,
  milestones,
  leadership,
} from "@/data/pages";
import { company } from "@/data/company";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTABanner } from "@/components/sections/shared/CTABanner";

/* =============================================================================
 * About Page — /about
 *
 * Company story, values, capabilities, timeline, and leadership.
 * ============================================================================= */

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  keywords: pageSeo.about.keywords,
};

export default function AboutPage() {
  const { heroLabel, heroHeading, heroBody, mission, values, capabilities } =
    aboutPageContent;

  return (
    <>
      <PageHero label={heroLabel} heading={heroHeading} body={heroBody} />

      {/* ── Mission Statement ── */}
      <section className="py-20 px-4 md:px-16 border-b border-outline-variant">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="col-span-4 md:col-span-3">
            <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block">
              OUR MISSION
            </span>
          </div>
          <div className="col-span-4 md:col-span-8 md:col-start-5">
            <p className="font-body text-lg text-on-surface leading-relaxed">
              {mission}
            </p>
            <div className="w-16 h-1 bg-secondary mt-8" />
          </div>
        </div>
      </section>

      {/* ── Values Grid ── */}
      <section className="py-20 px-4 md:px-16 bg-surface-container-low border-b border-outline-variant">
        <div className="mb-12">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
            CORE VALUES
          </span>
          <h2 className="font-headline text-2xl font-semibold text-primary uppercase leading-tight">
            WHAT DRIVES US
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant border border-outline-variant">
          {values.map((value) => (
            <div key={value.title} className="bg-white p-8 flex flex-col">
              <div className="w-12 h-12 flex items-center justify-center border border-primary mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  {value.icon}
                </span>
              </div>
              <h3 className="font-headline text-lg font-semibold text-on-surface mb-3 uppercase">
                {value.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Capabilities Stats ── */}
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
          {capabilities.map((cap) => (
            <div key={cap.label} className="border-l-2 border-secondary-fixed-dim pl-6">
              <div className="font-headline text-4xl md:text-5xl font-bold mb-2">
                {cap.value}
              </div>
              <div className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-on-primary/60">
                {cap.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 px-4 md:px-16 border-b border-outline-variant">
        <div className="mb-12">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
            COMPANY HISTORY
          </span>
          <h2 className="font-headline text-2xl font-semibold text-primary uppercase leading-tight">
            KEY MILESTONES
          </h2>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-outline-variant" />
          <div className="space-y-12">
            {milestones.map((ms) => (
              <div key={ms.year} className="relative pl-14 md:pl-20">
                {/* Year marker */}
                <div className="absolute left-0 md:left-3.5 top-0 w-9 h-9 bg-primary flex items-center justify-center">
                  <span className="font-label text-[10px] font-bold text-on-primary">
                    {ms.year}
                  </span>
                </div>
                <h3 className="font-headline text-lg font-semibold text-on-surface uppercase mb-2">
                  {ms.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-xl">
                  {ms.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="py-20 px-4 md:px-16 bg-surface-container-low border-b border-outline-variant">
        <div className="mb-12">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
            LEADERSHIP
          </span>
          <h2 className="font-headline text-2xl font-semibold text-primary uppercase leading-tight">
            EXECUTIVE TEAM
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((member) => (
            <div
              key={member.name}
              className="border border-outline bg-white p-6 hover:border-primary transition-colors"
            >
              {/* Avatar placeholder */}
              <div className="w-14 h-14 bg-primary flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-on-primary text-2xl">
                  person
                </span>
              </div>
              <h4 className="font-headline text-base font-semibold text-on-surface mb-1">
                {member.name}
              </h4>
              <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary block mb-3">
                {member.role}
              </span>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" className="py-20 px-4 md:px-16 border-b border-outline-variant">
        <div className="mb-12">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
            QUALITY ASSURANCE
          </span>
          <h2 className="font-headline text-2xl font-semibold text-primary uppercase leading-tight">
            CERTIFICATIONS & COMPLIANCE
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {company.certifications.map((cert) => (
            <div
              key={cert}
              className="border border-outline-variant p-4 flex items-center justify-center text-center hover:border-primary transition-colors"
            >
              <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
                {cert}
              </span>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        heading="JOIN OUR TEAM"
        body="We're always looking for talented engineers and scientists to push the boundaries of polymer science."
        ctaLabel="VIEW OPENINGS"
        ctaHref="/contact"
      />
    </>
  );
}
