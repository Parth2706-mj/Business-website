"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavLinks } from "@/data/navigation";
import { company } from "@/data/company";

/* =============================================================================
 * Header — Sticky navigation bar
 * 
 * Features:
 *   - Scroll-based shadow effect
 *   - Active link highlighting based on current route
 *   - Mobile hamburger menu
 *   - Search input (desktop only)
 *   - Contact Sales CTA
 * ============================================================================= */

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-50 bg-surface border-b border-outline-variant flex justify-between items-center h-16 px-4 md:px-16 transition-shadow duration-200 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          className="font-headline text-xl md:text-2xl font-bold tracking-tighter text-primary"
        >
          {company.name}
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.label}
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

        {/* Search + CTA + Mobile toggle */}
        <div className="flex items-center gap-3 lg:gap-6">
          {/* Search (desktop only) */}
          <div className="hidden xl:flex items-center border border-outline px-3 py-1 bg-surface-container-low">
            <span className="material-symbols-outlined text-outline text-sm mr-2">
              search
            </span>
            <input
              id="search-polymers"
              className="bg-transparent border-none outline-none text-sm font-label w-44"
              placeholder="Search Polymers..."
              type="text"
            />
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-primary text-on-primary px-5 py-2 font-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-primary-container transition-colors"
          >
            Contact Sales
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-primary text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-surface pt-16">
          <div className="flex flex-col p-6 gap-1">
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`py-4 border-b border-outline-variant font-label text-sm uppercase tracking-[0.08em] ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-on-surface-variant"
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
              Contact Sales
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
