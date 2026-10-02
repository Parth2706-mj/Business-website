/* =============================================================================
 * Product Catalogue
 *
 * Application lines and the materials named for each line in the
 * Baba Sons & Khandelwal Udyog company profile.
 *
 * This module is the catalogue source of truth for the public site.
 * An admin portal can replace these arrays later without changing page routes.
 *
 * To add a line:
 *   1. Add an entry to `products`
 *   2. The slug becomes /products/[slug]
 *   3. Point relatedSlugs at the closest other lines
 * ============================================================================= */

import type { MaterialIndexEntry, Product } from "@/types";

export const products: Product[] = [
  {
    slug: "pvc-agri-swr-pipe",
    name: "PVC Agri & SWR Pipe",
    icon: "water_drop",
    shortDescription:
      "Resin, stabiliser packs, CPE, modifiers, lubricants, titanium dioxide, and calcite for agricultural and SWR pipe.",
    longDescription: `Baba Sons and Khandelwal Udyog supply the raw materials listed below for PVC agricultural pipe and SWR pipe, with technical back-up alongside the material.

Lead and calcium-zinc systems are both listed, including one-pack and super-pack grades. Calcite is offered from Vietnam, Egypt, and Malaysia. Titanium dioxide is offered in rutile and anatase.

Grades, packing, and current availability are confirmed when you enquire. This page follows the company profile and does not add specifications that are not printed there.`,
    materials: [
      { name: "PVC Resin" },
      { name: "Lead one pack / Super pack" },
      { name: "Ca-Zn one pack / Super pack" },
      { name: "Plasticizers" },
      { name: "Additives, CPE" },
      { name: "Impact Modifier" },
      { name: "Processing Aid" },
      { name: "Lubricants" },
      { name: "Titanium Dioxide", detail: "Rutile and anatase" },
      { name: "Calcite", detail: "Vietnam, Egypt, Malaysia" },
    ],
    relatedSlugs: ["pvc-conduit-pipe", "cpvc"],
  },
  {
    slug: "pvc-wire-and-cable",
    name: "PVC Wire and Cable",
    icon: "cable",
    shortDescription:
      "PVC resin, lead and calcium-zinc stabilisers, plasticisers, titanium dioxide, and calcite for wire and cable compounds.",
    longDescription: `For PVC wire and cable, the catalogue lists resin, lead stabilisers, calcium-zinc stabilisers, plasticisers, titanium dioxide, and calcite.

Plasticisers named for this line are DOP, DIBP, and DINP. Titanium dioxide is rutile and anatase. Calcite origins are Vietnam, Egypt, and Malaysia.

Ask for the grade and packing you need. Technical data is shared on request.`,
    materials: [
      { name: "PVC Resin" },
      { name: "Lead Stabilizers" },
      { name: "Ca-Zn Stabilizers" },
      { name: "Plasticizers", detail: "DOP, DIBP, DINP" },
      { name: "Titanium Dioxide", detail: "Rutile and anatase" },
      { name: "Calcite", detail: "Vietnam, Egypt, Malaysia" },
    ],
    relatedSlugs: ["tubing-garden-pipe", "pvc-film-panel-floor"],
  },
  {
    slug: "pvc-conduit-pipe",
    name: "PVC Conduit Pipe",
    icon: "electrical_services",
    shortDescription:
      "Resin, one-pack stabilisers, CPE, brightener, stearic acid, waxes, titanium, and calcite for conduit pipe.",
    longDescription: `The conduit-pipe line covers resin, lead one pack, calcium-zinc one pack, CPE, brightener, stearic acid, waxes, titanium, and calcite.

Calcite for this line is listed from Vietnam, Egypt, and Malaysia. Use the enquiry form to ask which wax and which brightener grade is available for your conduit formulation.`,
    materials: [
      { name: "PVC Resin" },
      { name: "Lead one pack" },
      { name: "Ca-Zn one pack" },
      { name: "CPE" },
      { name: "Brightener" },
      { name: "Stearic Acid" },
      { name: "Waxes" },
      { name: "Titanium" },
      { name: "Calcite", detail: "Vietnam, Egypt, Malaysia" },
    ],
    relatedSlugs: ["pvc-agri-swr-pipe", "cpvc"],
  },
  {
    slug: "tubing-garden-pipe",
    name: "Tubing (Garden Pipe)",
    icon: "sprinkler",
    shortDescription:
      "Resin, plasticisers, liquid methyl tin and antimony, a calcium-zinc tin replacement, brighteners, and pigments for garden pipe.",
    longDescription: `Garden-pipe tubing is listed with resin and the plasticisers DOP, DIBP, and CPW. Stabiliser options are liquid methyl tin or antimony, and a calcium-zinc system offered as a replacement to tin.

Optical brighteners OB and OB-1, and colour pigments, are included on this line. Confirm the pigment shade and the stabiliser route when you enquire.`,
    materials: [
      { name: "PVC Resin" },
      { name: "Plasticizers", detail: "DOP, DIBP, CPW" },
      { name: "Methyl Tin / Antimony", detail: "Liquid" },
      { name: "Ca-Zn replacement to tin" },
      { name: "Brightener", detail: "OB, OB-1" },
      { name: "Pigments", detail: "Colours" },
    ],
    relatedSlugs: ["pvc-wire-and-cable", "pvc-film-panel-floor"],
  },
  {
    slug: "pvc-film-panel-floor",
    name: "PVC Film, Panel and Floor",
    icon: "layers",
    shortDescription:
      "Suspension and paste resin, plasticisers, processing aid, impact modifier, waxes, brighteners, and pigments for film, panel, and flooring.",
    longDescription: `For PVC film, panel, and flooring, the profile lists both suspension and paste resin. Plasticisers named here are DOP, DIBP, DINP, and DOTP.

The same line includes processing aid and impact modifier, Honeywell waxes, paraffin wax, brighteners OB and OB-1, and colour pigments. Tell us the end product — film, panel, or floor — so the grade can be matched.`,
    materials: [
      { name: "PVC Resin", detail: "Suspension and paste" },
      { name: "Plasticizers", detail: "DOP, DIBP, DINP, DOTP" },
      { name: "Processing Aid & Impact Modifier" },
      { name: "Honeywell waxes" },
      { name: "Paraffin wax" },
      { name: "Brightener", detail: "OB, OB-1" },
      { name: "Pigments", detail: "Colours" },
    ],
    relatedSlugs: ["tubing-garden-pipe", "pvc-wire-and-cable"],
  },
  {
    slug: "cpvc",
    name: "CPVC",
    icon: "valve",
    shortDescription:
      "Processing aid, impact modifier, FT and oxidised waxes, Honeywell waxes, and pipe and fitting super packs for CPVC.",
    longDescription: `The CPVC line is listed separately from rigid PVC pipe. It covers processing aid and impact modifier, FT and oxidised waxes, Honeywell waxes, a pipe super pack, and a fitting super pack.

Pipe and fitting packs are different entries in the profile. Name which one you need when you ask for a quotation or a technical sheet.`,
    materials: [
      { name: "Processing Aid & Impact Modifier" },
      { name: "FT & Oxidized Waxes" },
      { name: "Honeywell waxes" },
      { name: "Pipe Super Pack" },
      { name: "Fitting Super Pack" },
    ],
    relatedSlugs: ["pvc-agri-swr-pipe", "pvc-conduit-pipe"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}

export function getMaterialCount(): number {
  return products.reduce((total, product) => total + product.materials.length, 0);
}

/** One row per material, kept in catalogue order, for search and request tables. */
export function getMaterialIndex(): MaterialIndexEntry[] {
  return products.flatMap((product) =>
    product.materials.map((material, index) => ({
      id: `${product.slug}-${index}`,
      name: material.name,
      detail: material.detail,
      applicationSlug: product.slug,
      applicationName: product.name,
    })),
  );
}

export function searchCatalogue(query: string): {
  products: Product[];
  materials: MaterialIndexEntry[];
} {
  const needle = query.trim().toLowerCase();
  if (!needle) {
    return { products, materials: getMaterialIndex() };
  }

  const matchedProducts = products.filter((product) => {
    const haystack = [
      product.name,
      product.shortDescription,
      product.longDescription,
      ...product.materials.flatMap((material) => [material.name, material.detail ?? ""]),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });

  const materials = getMaterialIndex().filter((material) => {
    const haystack = [material.name, material.detail ?? "", material.applicationName]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });

  return { products: matchedProducts, materials };
}
