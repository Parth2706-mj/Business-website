/* =============================================================================
 * Homepage Content
 * 
 * All static text for the homepage sections.
 * Content is organized by section for easy editing.
 * ============================================================================= */

import type { HeroContent, DataSetCard, StatItem, ServiceItem } from "@/types";

/* --------------------------------------------------------------------------
 * Hero Section
 * -------------------------------------------------------------------------- */
export const heroContent: HeroContent = {
  badge: "ISO 9001:2015 Certified Manufacturing",
  headline: "THE ARCHITECTURE OF POLYMERS",
  subtext:
    "Engineering industrial-grade chemical solutions with molecular precision. Our polymers define the structural integrity of modern infrastructure through advanced material science.",
  primaryCta: { label: "VIEW SPECIFICATIONS", href: "/products" },
  secondaryCta: { label: "TECHNICAL SUPPORT", href: "/technical-data" },
};

/* --------------------------------------------------------------------------
 * About / Engineering Excellence Section
 * -------------------------------------------------------------------------- */
export const aboutSectionContent = {
  /** Label shown above the heading */
  label: "ESTABLISHED 1984",
  /** Section heading */
  heading: "ENGINEERING EXCELLENCE",
  /** Paragraph text */
  body: "At POLYMER-X, we don't just manufacture chemicals; we engineer the building blocks of progress. Our laboratory-to-line approach ensures that every gram of PVC compound meets the most stringent industrial tolerances.",
  /** CTA link */
  cta: { label: "LEARN ABOUT OUR PROCESS", href: "/about" },
} as const;

/** The 4 data-set cards displayed in the About grid. */
export const dataSets: DataSetCard[] = [
  {
    id: "DATA_SET_01",
    title: "MOLECULAR STABILITY",
    description:
      "Enhanced thermal stability additives for high-temperature industrial applications, ensuring longevity under stress.",
  },
  {
    id: "DATA_SET_02",
    title: "IMPACT RESISTANCE",
    description:
      "Proprietary toughening agents that increase material ductility without compromising structural rigidity.",
  },
  {
    id: "DATA_SET_03",
    title: "UV INTEGRITY",
    description:
      "Advanced solar radiation shielding integrated at the polymer backbone level for extreme exposure environments.",
  },
  {
    id: "DATA_SET_04",
    title: "FLAME RETARDANCY",
    description:
      "Critical safety-spec polymers designed to exceed UL-94 standards for industrial fire safety compliance.",
  },
];

/* --------------------------------------------------------------------------
 * Product Categories Section
 * -------------------------------------------------------------------------- */
export const productsSectionContent = {
  label: "CATALOG_v4.2",
  heading: "PRODUCT CATEGORIES",
  entryCount: "TOTAL ENTRIES: 154",
} as const;

/* --------------------------------------------------------------------------
 * Technical Support Section
 * -------------------------------------------------------------------------- */
export const techSupportContent = {
  label: "OPERATIONAL STANDARDS",
  heading: "CERTIFIED PRECISION",
  body: "Our engineering support team provides end-to-end technical assistance, from initial material selection to full-scale production optimization. We operate with ISO 9001:2015 certification across all manufacturing facilities.",
} as const;

/** Stats shown in the Technical Support section. */
export const techStats: StatItem[] = [
  { value: "24/7", label: "TECHNICAL HOTLINE" },
  { value: "ASTM", label: "TESTING COMPLIANCE" },
];

/** Services listed in the service directory. */
export const serviceDirectory: ServiceItem[] = [
  { name: "Rheological Analysis", href: "/technical-data" },
  { name: "Custom Compounding", href: "/contact" },
  { name: "Color Matching Services", href: "/contact" },
  { name: "Regulatory Compliance Docs", href: "/safety" },
];

/* --------------------------------------------------------------------------
 * Industry Partners Section
 * -------------------------------------------------------------------------- */
export const industryPartners: string[] = [
  "GLOBAL_STEEL",
  "CHEM_TECH",
  "AERO_MAT",
  "NEXUS_MFG",
  "INFRA_STRUC",
];

/* --------------------------------------------------------------------------
 * Contact Section (homepage version)
 * -------------------------------------------------------------------------- */
export const contactSectionContent = {
  heading: "INITIATE TECHNICAL CONSULTATION",
  body: "Discuss your project requirements with our engineering staff. We provide detailed material specifications and supply chain solutions for global manufacturing operations.",
  /** Dropdown options for the application field */
  applicationOptions: [
    "Automotive & Transportation",
    "Construction & Infrastructure",
    "Electronics & Electrical",
    "Medical & Healthcare",
    "Packaging & Consumer Goods",
    "Industrial & Manufacturing",
  ],
} as const;
