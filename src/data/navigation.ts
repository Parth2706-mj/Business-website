/* =============================================================================
 * Navigation Data
 * 
 * All navigation links for header and footer.
 * Update these when adding new pages to the site.
 * ============================================================================= */

import type { NavLink, FooterLinkGroup } from "@/types";

/* --------------------------------------------------------------------------
 * Header — Primary Navigation
 * -------------------------------------------------------------------------- */
export const mainNavLinks: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Technical Data", href: "/technical-data" },
  { label: "Safety (SDS)", href: "/safety" },
  { label: "Contact", href: "/contact" },
];

/* --------------------------------------------------------------------------
 * Footer — Link Groups
 * -------------------------------------------------------------------------- */
export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Products",
    links: [
      { label: "Rigid PVC", href: "/products/rigid-pvc" },
      { label: "Flexible PVC", href: "/products/flexible-pvc" },
      { label: "Additives", href: "/products/additives" },
      { label: "Sustainable Polymers", href: "/products/sustainable" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Technical Data Sheets", href: "/technical-data" },
      { label: "Safety Data (SDS)", href: "/safety" },
      { label: "ISO Certifications", href: "/about#certifications" },
      { label: "Quality Assurance", href: "/about#quality" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];
