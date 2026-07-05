import Link from "next/link";
import { footerLinkGroups } from "@/data/navigation";
import { company } from "@/data/company";


export function Footer() {
  return (
    <footer
      id="site-footer"
      className="bg-primary text-on-primary border-t border-primary-container"
    >
      {/* Main footer grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-16 py-20 w-full">
        {/* Brand column */}
        <div className="col-span-1">
          <Link
            href="/"
            className="font-headline text-2xl font-bold text-on-primary block mb-6"
          >
            POLYMER-X
          </Link>
          <p className="font-body text-sm text-on-primary/80 max-w-xs leading-relaxed">
            {company.description}
          </p>
        </div>

        {/* Link groups */}
        {footerLinkGroups.map((group) => (
          <div key={group.title}>
            <h5 className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-secondary-fixed-dim mb-6">
              {group.title}
            </h5>
            <ul className="space-y-4">
              {group.links.map((link) => (
                <li key={link.label}>
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

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center font-label text-xs uppercase tracking-[0.08em] text-white/50">
        <div>
          © {new Date().getFullYear()} {company.name}. ISO 9001:2015 CERTIFIED.
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            PRIVACY POLICY
          </Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">
            TERMS OF SERVICE
          </Link>
        </div>
      </div>
    </footer>
  );
}
