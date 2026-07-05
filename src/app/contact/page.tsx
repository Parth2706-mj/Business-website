"use client";

import type { Metadata } from "next";
import { pageSeo, contactPageContent } from "@/data/pages";
import { contactSectionContent } from "@/data/homepage";
import { PageHero } from "@/components/sections/shared/PageHero";

/* =============================================================================
 * Contact Page — /contact
 *
 * Office locations + full contact form.
 * ============================================================================= */

export default function ContactPage() {
  const { heroLabel, heroHeading, heroBody, offices } = contactPageContent;
  const { applicationOptions } = contactSectionContent;

  return (
    <>
      <PageHero label={heroLabel} heading={heroHeading} body={heroBody} />

      {/* ── Office Locations ── */}
      <section className="py-20 px-4 md:px-16 border-b border-outline-variant">
        <div className="mb-12">
          <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
            GLOBAL OFFICES
          </span>
          <h2 className="font-headline text-2xl font-semibold text-primary uppercase leading-tight">
            OUR LOCATIONS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((office) => (
            <div
              key={office.name}
              className="border border-outline bg-white p-6 hover:border-primary transition-colors"
            >
              <div className="w-10 h-10 bg-primary flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-on-primary text-lg">
                  location_on
                </span>
              </div>
              <h3 className="font-headline text-base font-semibold text-on-surface mb-4 uppercase">
                {office.name}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-outline text-sm mt-0.5">
                    pin_drop
                  </span>
                  <span className="font-body text-sm text-on-surface-variant leading-relaxed">
                    {office.address}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline text-sm">
                    call
                  </span>
                  <span className="font-label text-sm font-semibold text-on-surface">
                    {office.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline text-sm">
                    mail
                  </span>
                  <span className="font-label text-sm font-semibold text-primary">
                    {office.email}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="py-20 px-4 md:px-16">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
          {/* Left info column */}
          <div className="col-span-4 md:col-span-12 lg:col-span-5 mb-12 lg:mb-0">
            <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
              TECHNICAL INQUIRY
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary uppercase mb-6 leading-tight">
              START A CONVERSATION
            </h2>
            <p className="font-body text-base text-on-surface-variant mb-8 leading-relaxed">
              Whether you need a custom formulation, technical documentation, or supply chain solutions — our engineering team is here to help.
            </p>

            {/* Response time info */}
            <div className="space-y-4 border-t border-outline-variant pt-8">
              {[
                { icon: "schedule", label: "RESPONSE TIME", value: "< 24 Hours" },
                { icon: "support_agent", label: "TECHNICAL SUPPORT", value: "24/7 Available" },
                { icon: "public", label: "COVERAGE", value: "30+ Countries" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-outline">
                    <span className="material-symbols-outlined text-primary text-lg">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div className="font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-outline">
                      {item.label}
                    </div>
                    <div className="font-label text-sm font-bold text-on-surface">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7">
            <form className="border border-outline p-6 md:p-10 bg-white space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline"
                  >
                    FULL NAME *
                  </label>
                  <input
                    id="contact-name"
                    className="border-b border-outline outline-none focus:border-primary py-2 font-label text-sm bg-transparent transition-colors"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline"
                  >
                    EMAIL *
                  </label>
                  <input
                    id="contact-email"
                    className="border-b border-outline outline-none focus:border-primary py-2 font-label text-sm bg-transparent transition-colors"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-org"
                    className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline"
                  >
                    ORGANIZATION
                  </label>
                  <input
                    id="contact-org"
                    className="border-b border-outline outline-none focus:border-primary py-2 font-label text-sm bg-transparent transition-colors"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-phone"
                    className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline"
                  >
                    PHONE
                  </label>
                  <input
                    id="contact-phone"
                    className="border-b border-outline outline-none focus:border-primary py-2 font-label text-sm bg-transparent transition-colors"
                    type="tel"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-application"
                  className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline"
                >
                  INDUSTRIAL APPLICATION
                </label>
                <select
                  id="contact-application"
                  className="border-b border-outline outline-none focus:border-primary py-2 font-label text-sm bg-transparent transition-colors appearance-none"
                >
                  <option value="">Select Application</option>
                  {applicationOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline"
                >
                  PROJECT DETAILS *
                </label>
                <textarea
                  id="contact-message"
                  className="border border-outline outline-none focus:border-primary p-3 font-label text-sm bg-transparent transition-colors resize-none"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 font-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-primary-container transition-colors cursor-pointer"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
