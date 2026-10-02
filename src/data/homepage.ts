/* =============================================================================
 * Homepage Content
 *
 * Copy follows the Baba Sons & Khandelwal Udyog company profile.
 * ============================================================================= */

import type { DataSetCard, HeroContent, HeroStat, ServiceItem, StatItem } from "@/types";

export const heroContent: HeroContent = {
  badge: "Single Window Service Provider",
  headline: "Chemicals with technical back-up",
  subtext:
    "Baba Sons and Khandelwal Udyog supply PVC and CPVC raw materials for pipe, wire and cable, film, panel, and flooring — and stay with you on the technical side of the formulation.",
  primaryCta: { label: "View catalogue", href: "/products" },
  secondaryCta: { label: "Send an enquiry", href: "/contact" },
};

export const heroStats: HeroStat[] = [
  { value: "6", label: "Application lines" },
  { value: "4", label: "Channel partners" },
  { value: "PVC", label: "Pipe, cable, film" },
  { value: "CPVC", label: "Pipe and fitting packs" },
];

export const aboutSectionContent = {
  label: "Baba Sons & Khandelwal Udyog",
  heading: "One window for the formulation",
  body: "The company profile is built as a single window: resin, stabilisers, plasticisers, modifiers, waxes, pigments, titanium dioxide, and calcite, listed against the application you actually run. Technical back-up sits with the supply, not as a separate desk.",
  cta: { label: "Read how we work", href: "/about" },
} as const;

export const dataSets: DataSetCard[] = [
  {
    id: "01",
    title: "Single window",
    description:
      "One enquiry covers the chemicals named for agri and SWR pipe, conduit, wire and cable, garden tubing, film, panel, flooring, and CPVC.",
  },
  {
    id: "02",
    title: "Technical back-up",
    description:
      "Materials are offered with technical support for the line you are running, from stabiliser choice through wax and pigment.",
  },
  {
    id: "03",
    title: "Channel partners",
    description:
      "Channel partner for Indofil / Reagans India, Gold Stab, Maldeep Catalysts, and Camex Ltd.",
  },
  {
    id: "04",
    title: "Named grades",
    description:
      "Where the profile names a grade or origin — DOP, DOTP, OB-1, rutile, or calcite from Vietnam, Egypt, and Malaysia — it is listed that way on the site.",
  },
];

export const productsSectionContent = {
  label: "Company catalogue",
  heading: "Application lines",
} as const;

export const techSupportContent = {
  label: "Technical back-up",
  heading: "Ask for the sheet before you run it",
  body: "Technical data and safety data are issued on request for the materials in the catalogue. Tell us the application line and the material, and the enquiry goes to both published email addresses.",
} as const;

export const techStats: StatItem[] = [
  { value: "6", label: "Lines in the profile" },
  { value: "Direct", label: "Phone and email" },
];

export const serviceDirectory: ServiceItem[] = [
  { name: "PVC pipe materials", href: "/products/pvc-agri-swr-pipe" },
  { name: "Wire and cable materials", href: "/products/pvc-wire-and-cable" },
  { name: "Film, panel and floor", href: "/products/pvc-film-panel-floor" },
  { name: "Request technical data", href: "/technical-data" },
];

export const contactSectionContent = {
  heading: "Tell us the line and the material",
  body: "Use the form to open an email to Babasons9@gmail.com and Chemicalwala9@gmail.com, or call the mobile number on this page. Include the application and the grade if you already know it.",
} as const;
