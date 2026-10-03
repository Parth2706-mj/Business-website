import type { Metadata } from "next";
import { Suspense } from "react";
import { contactPageContent, pageSeo } from "@/data/pages";
import { PageHero } from "@/components/sections/shared/PageHero";
import { InquiryForm } from "@/components/catalogue/InquiryForm";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  keywords: pageSeo.contact.keywords,
};

export default function ContactPage() {
  const { heroLabel, heroHeading, heroBody, channels, notes } = contactPageContent;

  return (
    <>
      <PageHero label={heroLabel} heading={heroHeading} body={heroBody} />

      <section className="py-20 px-4 md:px-16 border-b border-outline-variant">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel) => {
            const card = (
              <>
                <div className="w-10 h-10 bg-primary flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-on-primary text-lg">{channel.icon}</span>
                </div>
                <h2 className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline mb-2">
                  {channel.label}
                </h2>
                <p className="font-headline text-lg font-semibold text-primary">{channel.value}</p>
              </>
            );
            const className = "border border-outline bg-white p-6 hover:border-primary transition-colors block";
            if (channel.icon === "location_on") {
              return (
                <div key={channel.value} className={className}>
                  {card}
                </div>
              );
            }
            return (
              <a
                key={`${channel.label}-${channel.value}`}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className={className}
              >
                {card}
              </a>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary block mb-4">
              Enquiry
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary uppercase mb-6 leading-tight">
              Write to both inboxes
            </h2>
            <p className="font-body text-base text-on-surface-variant mb-8 leading-relaxed">
              The form prepares one email to both addresses on the profile. If your mail app does not open, copy the enquiry and send it yourself.
            </p>
            <div className="space-y-4 border-t border-outline-variant pt-8">
              {notes.map((note) => (
                <div key={note.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-outline shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">{note.icon}</span>
                  </div>
                  <div>
                    <div className="font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-outline">
                      {note.label}
                    </div>
                    <div className="font-body text-sm text-on-surface mt-1">{note.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Suspense fallback={<div className="border border-outline bg-white min-h-96" />}>
              <InquiryForm idPrefix="contact-enquiry" />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
