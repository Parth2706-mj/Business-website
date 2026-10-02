import { Suspense } from "react";
import { company } from "@/data/company";
import { contactSectionContent } from "@/data/homepage";
import { InquiryForm } from "@/components/catalogue/InquiryForm";

export function ContactSection() {
  const { heading, body } = contactSectionContent;

  return (
    <section id="contact" className="py-24 px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
      <div>
        <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary block mb-4">
          Get in touch
        </span>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary uppercase mb-6 leading-tight">
          {heading}
        </h2>
        <div className="flex items-center gap-2 mb-8">
          <div className="w-12 h-1 bg-primary" />
          <div className="w-3 h-1 bg-secondary" />
        </div>
        <p className="font-body text-base text-on-surface-variant mb-12 max-w-md leading-relaxed">{body}</p>

        <div className="space-y-6">
          {company.emails.map((email, index) => (
            <a key={email} href={`mailto:${email}`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 flex items-center justify-center border border-outline group-hover:border-primary group-hover:bg-primary-fixed/30 transition-colors">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <div className="font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-outline">
                  {index === 0 ? company.shortName : company.tradeName}
                </div>
                <div className="font-label text-sm font-bold text-on-surface">{email}</div>
              </div>
            </a>
          ))}
          <a href={company.phoneHref} className="flex items-center gap-4 group">
            <div className="w-12 h-12 flex items-center justify-center border border-outline group-hover:border-primary group-hover:bg-primary-fixed/30 transition-colors">
              <span className="material-symbols-outlined text-primary">call</span>
            </div>
            <div>
              <div className="font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-outline">
                Mobile
              </div>
              <div className="font-label text-sm font-bold text-on-surface">{company.phone}</div>
            </div>
          </a>
        </div>
      </div>

      <Suspense fallback={<div className="border border-outline bg-white min-h-96" />}>
        <InquiryForm idPrefix="home-enquiry" />
      </Suspense>
    </section>
  );
}
