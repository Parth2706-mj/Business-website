/* =============================================================================
 * Company Information
 * 
 * Core brand identity, contact details, and certifications.
 * Single source of truth for all company-related text across the site.
 * ============================================================================= */

import type { CompanyInfo } from "@/types";

export const company: CompanyInfo = {
  /* ── Brand Identity ── */
  name: "POLYMER-X INDUSTRIAL",
  tagline: "Engineering Excellence in Polymer Science",
  description:
    "Industrial leader in high-performance polymer science and chemical engineering solutions. We engineer the building blocks of progress with molecular precision.",

  /* ── History ── */
  foundedYear: 1984,

  /* ── Contact ── */
  email: "SALES@POLYMER-X.TECH",
  phone: "+1 (800) POLY-IND",
  address: "1200 Industrial Parkway, Newark, NJ 07114, United States",

  /* ── Certifications & Standards ── */
  certifications: [
    "ISO 9001:2015",
    "ISO 14001:2015",
    "ASTM International",
    "REACH Compliant",
    "RoHS Compliant",
    "UL Certified",
  ],

  /* ── Social Media ── */
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com/company/polymer-x" },
    { platform: "Twitter", url: "https://twitter.com/polymerx" },
  ],
};
