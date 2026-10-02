"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavLinks } from "@/data/navigation";
import { company } from "@/data/company";
import { SiteSearch } from "@/components/catalogue/SiteSearch";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileOpen = menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-50 bg-surface border-b border-outline-variant flex justify-between items-center h-16 px-4 md:px-10 xl:px-16 transition-shadow duration-200 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <Link href="/" className="leading-none shrink-0">
          <span className="font-headline text-lg md:text-xl font-bold tracking-tight text-primary block">
            {company.shortName}
          </span>
          <span className="font-label text-[10px] uppercase tracking-[0.14em] text-secondary block">
            {company.tradeName}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-primary border-b-2 border-primary font-bold pb-1 font-label text-xs uppercase tracking-[0.08em]"
                    : "text-on-surface-variant font-label text-xs uppercase tracking-[0.08em] hover:text-primary transition-colors duration-200"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 lg:gap-4">
          <SiteSearch className="hidden lg:block w-36 xl:w-56" />
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-primary text-on-primary px-5 py-2 font-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-primary-container transition-colors"
          >
            Enquire
          </Link>
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 cursor-pointer"
            onClick={() => setMenuPath(mobileOpen ? null : pathname)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined text-primary text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-surface pt-16 overflow-y-auto">
          <div className="flex flex-col p-6 gap-1">
            <SiteSearch className="mb-4" autoFocus onNavigate={() => setMenuPath(null)} />
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-4 border-b border-outline-variant font-label text-sm uppercase tracking-[0.08em] ${
                    isActive ? "text-primary font-bold" : "text-on-surface-variant"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-6 bg-primary text-on-primary py-4 text-center font-label text-xs font-semibold uppercase tracking-[0.08em]"
            >
              Enquire
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
