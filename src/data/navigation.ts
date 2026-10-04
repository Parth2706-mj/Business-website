/* =============================================================================
 * Navigation Data
 * ============================================================================= */

import type { FooterLinkGroup, NavLink } from "@/types";

export const mainNavLinks: NavLink[] = [
  { label: "Catalogue", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Technical data", href: "/technical-data" },
  { label: "Contact", href: "/contact" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Catalogue",
    links: [
      { label: "PVC Agri & SWR Pipe", href: "/products/pvc-agri-swr-pipe" },
      { label: "PVC Wire and Cable", href: "/products/pvc-wire-and-cable" },
      { label: "PVC Conduit Pipe", href: "/products/pvc-conduit-pipe" },
      { label: "Garden Pipe Tubing", href: "/products/tubing-garden-pipe" },
      { label: "Film, UPVC Panel and Floor", href: "/products/pvc-film-panel-floor" },
      { label: "CPVC", href: "/products/cpvc" },
      { label: "Masterbatches", href: "/products/masterbatches" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Full catalogue", href: "/products" },
      { label: "Request technical data", href: "/technical-data" },
      { label: "Channel partners", href: "/about#partners" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of use", href: "/terms-of-service" },
    ],
  },
];
