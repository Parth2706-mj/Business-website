/* =============================================================================
 * Shared TypeScript Types
 *
 * Single source of truth for all interfaces used across data and components.
 * ============================================================================= */

/* ── Company ── */
export interface SocialLink {
  platform: string;
  url: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  email: string;
  phone: string;
  address: string;
  certifications: string[];
  socialLinks: SocialLink[];
}

/* ── Navigation ── */
export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

/* ── Homepage — Hero ── */
export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroContent {
  badge: string;
  headline: string;
  subtext: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}

/* ── Homepage — About / Data Sets ── */
export interface DataSetCard {
  id: string;
  title: string;
  description: string;
}

/* ── Homepage — Technical Support ── */
export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  name: string;
  href: string;
}

/* ── Products ── */
export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  specs: ProductSpec[];
  applications: string[];
  compliance: string[];
  relatedSlugs: string[];
}

/* ── Pages (about, safety, technical-data, contact) ── */
export interface DocumentEntry {
  title: string;
  description?: string;
  category?: string;
  format?: string;
  size?: string;
  updated?: string;
  href?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface Milestone {
  year: number;
  title: string;
  description: string;
}

export interface PageSeo {
  title: string;
  description: string;
  keywords?: string[];
}
