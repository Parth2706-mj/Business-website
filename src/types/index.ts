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

export interface PhoneLine {
  label: string;
  display: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tradeName: string;
  tagline: string;
  description: string;
  emails: string[];
  phones: PhoneLine[];
  whatsappDisplay: string;
  whatsappHref: string;
  locations: string[];
  since: number;
  channelPartners: string[];
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

export interface HeroStat {
  value: string;
  label: string;
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

/* ── Catalogue ── */
export interface CatalogueImage {
  src: string;
  alt: string;
}

export interface MaterialLine {
  name: string;
  detail?: string;
  image: CatalogueImage;
}

export interface Product {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  image: CatalogueImage;
  materials: MaterialLine[];
  relatedSlugs: string[];
}

export interface MaterialIndexEntry {
  id: string;
  name: string;
  detail?: string;
  image: CatalogueImage;
  applicationSlug: string;
  applicationName: string;
}

/* ── Pages ── */
export interface PageSeo {
  title: string;
  description: string;
  keywords?: string[];
}

export type EnquiryIntent = "general" | "quote" | "tds" | "sds";
