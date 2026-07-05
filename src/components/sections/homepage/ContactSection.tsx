import { company } from "@/data/company";
import { contactSectionContent } from "@/data/homepage";

/* =============================================================================
 * ContactSection — Enhanced homepage contact form with visual polish
 * ============================================================================= */

export function ContactSection() {
  const { heading, body, applicationOptions } = contactSectionContent;

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-16 grid grid-cols-4 md:grid-cols-12 gap-6 relative"
    >
      {/* Corner decoration */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-primary/10" />

      {/* Left column — heading + contact info */}
      <div className="col-span-4 md:col-span-12 lg:col-span-6 mb-12 lg:mb-0">
        <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary block mb-4">
          GET IN TOUCH
        </span>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary uppercase mb-6 leading-tight">
          {heading}
        </h2>
        <div className="flex items-center gap-2 mb-8">
          <div className="w-12 h-1 bg-primary" />
          <div className="w-3 h-1 bg-secondary" />
        </div>
        <p className="font-body text-base text-on-surface-variant mb-12 max-w-md leading-relaxed">
          {body}
        </p>

        {/* Contact details */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 flex items-center justify-center border border-outline group-hover:border-primary group-hover:bg-primary-fixed/30 transition-colors">
              <span className="material-symbols-outlined text-primary">
                mail
              </span>
            </div>
            <div>
              <div className="font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-outline">
                INQUIRIES
              </div>
              <div className="font-label text-sm font-bold text-on-surface">{company.email}</div>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 flex items-center justify-center border border-outline group-hover:border-primary group-hover:bg-primary-fixed/30 transition-colors">
              <span className="material-symbols-outlined text-primary">
                call
              </span>
            </div>
            <div>
              <div className="font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-outline">
                GLOBAL SUPPORT
              </div>
              <div className="font-label text-sm font-bold text-on-surface">{company.phone}</div>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 flex items-center justify-center border border-outline group-hover:border-primary group-hover:bg-primary-fixed/30 transition-colors">
              <span className="material-symbols-outlined text-primary">
                location_on
              </span>
            </div>
            <div>
              <div className="font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-outline">
                HEADQUARTERS
              </div>
              <div className="font-label text-sm font-bold text-on-surface">{company.address}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right column — form */}
      <div className="col-span-4 md:col-span-12 lg:col-span-6">
        <form className="border border-outline p-6 md:p-10 bg-white space-y-6 relative">
          {/* Form header */}
          <div className="flex items-center gap-3 pb-6 border-b border-outline-variant mb-2">
            <span className="material-symbols-outlined text-primary">
              assignment
            </span>
            <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
              SPECIFICATION REQUEST FORM
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-name"
                className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline"
              >
                NAME *
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
              className="border-b border-outline outline-none focus:border-primary py-2 font-label text-sm bg-transparent transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select Application</option>
              {applicationOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-brief"
              className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline"
            >
              TECHNICAL BRIEF
            </label>
            <textarea
              id="contact-brief"
              className="border border-outline outline-none focus:border-primary p-3 font-label text-sm bg-transparent transition-colors resize-none"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-on-primary py-4 font-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-primary-container transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">
              send
            </span>
            SEND SPECIFICATION REQUEST
          </button>
        </form>
      </div>
    </section>
  );
}
