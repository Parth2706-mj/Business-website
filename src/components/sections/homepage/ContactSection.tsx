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
            <div key={email} className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a href={`mailto:${email}`} className="flex items-center gap-4 group">
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
              {index === 0 && (
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-primary px-3 py-2 font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  WhatsApp
                </a>
              )}
            </div>
          ))}
          {company.phones.map((phone) => (
            <a key={phone.href} href={phone.href} className="flex items-center gap-4 group">
              <div className="w-12 h-12 flex items-center justify-center border border-outline group-hover:border-primary group-hover:bg-primary-fixed/30 transition-colors">
                <span className="material-symbols-outlined text-primary">call</span>
              </div>
              <div>
                <div className="font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-outline">
                  {phone.label}
                </div>
                <div className="font-label text-sm font-bold text-on-surface">{phone.display}</div>
              </div>
            </a>
          ))}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center border border-outline">
              <span className="material-symbols-outlined text-primary">location_on</span>
            </div>
            <div>
              <div className="font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-outline">
                Locations
              </div>
              <div className="font-label text-sm font-bold text-on-surface">
                {company.locations.join(" · ")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div className="border border-outline bg-white min-h-96" />}>
        <InquiryForm idPrefix="home-enquiry" />
      </Suspense>
    </section>
  );
}
