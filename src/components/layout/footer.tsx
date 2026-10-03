import Link from "next/link";
import { footerLinkGroups } from "@/data/navigation";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer id="site-footer" className="bg-primary text-on-primary border-t border-primary-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-16 py-20 w-full">
        <div>
          <Link href="/" className="font-headline text-2xl font-bold text-on-primary block">
            {company.shortName}
          </Link>
          <p className="font-label text-xs uppercase tracking-[0.14em] text-secondary-fixed-dim mt-1 mb-6">
            {company.tradeName}
          </p>
          <p className="font-body text-sm text-on-primary/80 max-w-xs leading-relaxed mb-6">
            {company.description}
          </p>
          <div className="space-y-2">
            {company.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="block font-label text-xs text-on-primary/80 hover:text-white"
              >
                {email}
              </a>
            ))}
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="block font-label text-xs text-on-primary/80 hover:text-white"
            >
              WhatsApp {company.whatsappDisplay}
            </a>
            {company.phones.map((phone) => (
              <a key={phone.href} href={phone.href} className="block font-label text-xs text-on-primary/80 hover:text-white">
                {phone.label}: {phone.display}
              </a>
            ))}
            <p className="font-label text-xs text-on-primary/80">{company.locations.join(" · ")}</p>
          </div>
        </div>

        {footerLinkGroups.map((group) => (
          <div key={group.title}>
            <h2 className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary-fixed-dim mb-6">
              {group.title}
            </h2>
            <ul className="space-y-4">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-label text-xs uppercase tracking-[0.08em] text-on-primary/80 hover:text-white transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-4 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4 font-label text-xs uppercase tracking-[0.08em] text-white/50">
        <div>
          © {new Date().getFullYear()} {company.name}
        </div>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
}
