/* =============================================================================
 * Product Catalogue
 *
 * Application lines and the materials named for each line in the
 * Baba Sons & Khandelwal Udyog company profile, plus the masterbatch
 * line named in the company description.
 *
 * This module is the catalogue source of truth for the public site.
 * An admin portal can replace these arrays later without changing page routes.
 *
 * To add a line:
 *   1. Add an entry to `products`
 *   2. The slug becomes /products/[slug]
 *   3. Point relatedSlugs at the closest other lines
 * ============================================================================= */

import { catalogueImages, type CatalogueImageKey } from "@/data/catalogue-images";
import type { MaterialIndexEntry, MaterialLine, Product } from "@/types";

function material(
  name: string,
  image: CatalogueImageKey,
  detail?: string,
  imageNote?: string,
): MaterialLine {
  return { name, detail, image: catalogueImages[image], imageNote };
}

export const products: Product[] = [
  {
    slug: "pvc-agri-swr-pipe",
    name: "PVC Agri & SWR Pipe",
    icon: "water_drop",
    image: catalogueImages.pipe,
    shortDescription:
      "Resin, stabiliser packs, CPE, modifiers, lubricants, titanium dioxide, and calcite for agricultural and SWR pipe.",
    longDescription: `Baba Sons and Khandelwal Udyog supply the raw materials listed below for PVC agricultural pipe and SWR pipe, with technical back-up alongside the material.

Lead and calcium-zinc systems are both listed, including one-pack and super-pack grades. Calcite is offered from Vietnam, Egypt, and Malaysia. Titanium dioxide is offered in rutile and anatase.

Grades, packing, and current availability are confirmed when you enquire. This page follows the company profile and does not add specifications that are not printed there.`,
    materials: [
      material("PVC Resin", "granules"),
      material("Lead one pack / Super pack", "pipe", undefined, "Supplied for this pipe line"),
      material("Ca-Zn one pack / Super pack", "pipe", undefined, "Supplied for this pipe line"),
      material("Plasticizers", "pipe", undefined, "Supplied for this pipe line"),
      material("Additives, CPE", "granules"),
      material("Impact Modifier", "granules"),
      material("Processing Aid", "granules"),
      material("Lubricants", "wax"),
      material("Titanium Dioxide", "tio2", "Rutile and anatase"),
      material("Calcite", "calcite", "Vietnam, Egypt, Malaysia"),
    ],
    relatedSlugs: ["pvc-conduit-pipe", "cpvc"],
  },
  {
    slug: "pvc-wire-and-cable",
    name: "PVC Wire and Cable",
    icon: "cable",
    image: catalogueImages.cable,
    shortDescription:
      "PVC resin, lead and calcium-zinc stabilisers, plasticisers, titanium dioxide, and calcite for wire and cable compounds.",
    longDescription: `For PVC wire and cable, the catalogue lists resin, lead stabilisers, calcium-zinc stabilisers, plasticisers, titanium dioxide, and calcite.

Plasticisers named for this line are DOP, DIBP, and DINP. Titanium dioxide is rutile and anatase. Calcite origins are Vietnam, Egypt, and Malaysia.

Ask for the grade and packing you need. Technical data is shared on request.`,
    materials: [
      material("PVC Resin", "granules"),
      material("Lead Stabilizers", "cable", undefined, "Supplied for this cable line"),
      material("Ca-Zn Stabilizers", "cable", undefined, "Supplied for this cable line"),
      material("Plasticizers", "cable", "DOP, DIBP, DINP", "Supplied for this cable line"),
      material("Titanium Dioxide", "tio2", "Rutile and anatase"),
      material("Calcite", "calcite", "Vietnam, Egypt, Malaysia"),
    ],
    relatedSlugs: ["tubing-garden-pipe", "pvc-film-panel-floor"],
  },
  {
    slug: "pvc-conduit-pipe",
    name: "PVC Conduit Pipe",
    icon: "electrical_services",
    image: catalogueImages.conduit,
    shortDescription:
      "Resin, one-pack stabilisers, CPE, brightener, stearic acid, waxes, titanium, and calcite for conduit pipe.",
    longDescription: `The conduit-pipe line covers resin, lead one pack, calcium-zinc one pack, CPE, brightener, stearic acid, waxes, titanium, and calcite.

Calcite for this line is listed from Vietnam, Egypt, and Malaysia. Use the enquiry form to ask which wax and which brightener grade is available for your conduit formulation.`,
    materials: [
      material("PVC Resin", "granules"),
      material("Lead one pack", "conduit", undefined, "Supplied for this conduit line"),
      material("Ca-Zn one pack", "conduit", undefined, "Supplied for this conduit line"),
      material("CPE", "granules"),
      material("Brightener", "pigments", undefined, "Colour reference beside the brightener grade"),
      material("Stearic Acid", "wax"),
      material("Waxes", "wax"),
      material("Titanium", "tio2"),
      material("Calcite", "calcite", "Vietnam, Egypt, Malaysia"),
    ],
    relatedSlugs: ["pvc-agri-swr-pipe", "cpvc"],
  },
  {
    slug: "tubing-garden-pipe",
    name: "Tubing (Garden Pipe)",
    icon: "sprinkler",
    image: catalogueImages.hose,
    shortDescription:
      "Resin, plasticisers, liquid methyl tin and antimony, a calcium-zinc tin replacement, brighteners, and pigments for garden pipe.",
    longDescription: `Garden-pipe tubing is listed with resin and the plasticisers DOP, DIBP, and CPW. Stabiliser options are liquid methyl tin or antimony, and a calcium-zinc system offered as a replacement to tin.

Optical brighteners OB and OB-1, and colour pigments, are included on this line. Confirm the pigment shade and the stabiliser route when you enquire.`,
    materials: [
      material("PVC Resin", "granules"),
      material("Plasticizers", "hose", "DOP, DIBP, CPW", "Supplied for garden pipe"),
      material("Methyl Tin / Antimony", "hose", "Liquid", "Supplied for garden pipe"),
      material("Ca-Zn replacement to tin", "hose", undefined, "Supplied for garden pipe"),
      material("Brightener", "pigments", "OB, OB-1", "Colour reference beside the brightener grade"),
      material("Pigments", "pigments", "Colours"),
    ],
    relatedSlugs: ["pvc-wire-and-cable", "masterbatches"],
  },
  {
    slug: "pvc-film-panel-floor",
    name: "PVC Film, UPVC Panel and Floor",
    icon: "layers",
    image: catalogueImages.floor,
    shortDescription:
      "Suspension and paste resin, UPVC panel, plasticisers, processing aid, impact modifier, waxes, brighteners, and pigments for film, panel, and flooring.",
    longDescription: `This line covers PVC film, UPVC panel, and flooring. The profile lists both suspension and paste resin. Plasticisers named here are DOP, DIBP, DINP, and DOTP.

The same line includes processing aid and impact modifier, Honeywell waxes, paraffin wax, brighteners OB and OB-1, and colour pigments. Tell us the end product — film, UPVC panel, or floor — so the grade can be matched.`,
    materials: [
      material("UPVC Panel", "floor", undefined, "Vinyl surface for panel and flooring"),
      material("PVC Resin", "granules", "Suspension and paste"),
      material("Plasticizers", "floor", "DOP, DIBP, DINP, DOTP", "Supplied for film, panel, and floor"),
      material("Processing Aid & Impact Modifier", "granules"),
      material("Honeywell waxes", "wax"),
      material("Paraffin wax", "wax"),
      material("Brightener", "pigments", "OB, OB-1", "Colour reference beside the brightener grade"),
      material("Pigments", "pigments", "Colours"),
    ],
    relatedSlugs: ["tubing-garden-pipe", "masterbatches"],
  },
  {
    slug: "cpvc",
    name: "CPVC",
    icon: "valve",
    image: catalogueImages.cpvc,
    shortDescription:
      "CPVC resin, pipe and fitting, processing aid, impact modifier, waxes, and pipe and fitting super packs.",
    longDescription: `The CPVC line covers CPVC resin, CPVC pipe, and CPVC fitting, together with processing aid and impact modifier, FT and oxidised waxes, Honeywell waxes, a pipe super pack, and a fitting super pack.

Name whether you need resin, pipe, or fitting when you ask for a quotation or a technical sheet.`,
    materials: [
      material("CPVC Resin", "granules"),
      material("CPVC Pipe", "cpvc"),
      material("CPVC Fitting", "cpvc", undefined, "Pipework this fitting line belongs to"),
      material("Processing Aid & Impact Modifier", "granules"),
      material("FT & Oxidized Waxes", "wax"),
      material("Honeywell waxes", "wax"),
      material("Pipe Super Pack", "cpvc", undefined, "Supplied for CPVC pipe"),
      material("Fitting Super Pack", "cpvc", undefined, "Supplied for CPVC fitting"),
    ],
    relatedSlugs: ["pvc-agri-swr-pipe", "pvc-conduit-pipe"],
  },
  {
    slug: "masterbatches",
    name: "Masterbatches",
    icon: "palette",
    image: catalogueImages.masterbatch,
    shortDescription:
      "Colour, white, black, and additive masterbatches for the PVC applications already in the catalogue.",
    longDescription: `Masterbatches are part of the same supply: colour, white, black, and additive concentrates for pipe, profile, film, flooring, and the other PVC lines on this site.

The shade, the carrier, and the let-down are confirmed when you enquire. This page does not add laboratory specifications that are not printed in the company profile.`,
    materials: [
      material("Colour masterbatch", "masterbatch"),
      material("White masterbatch", "pellets"),
      material("Black masterbatch", "masterbatch", undefined, "Pellet form. The black shade is confirmed on enquiry"),
      material("Additive masterbatch", "pellets", undefined, "Pellet form. The additive type is confirmed on enquiry"),
    ],
    relatedSlugs: ["pvc-film-panel-floor", "tubing-garden-pipe"],
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
    product.materials.map((item, index) => ({
      id: `${product.slug}-${index}`,
      name: item.name,
      detail: item.detail,
      image: item.image,
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
      ...product.materials.flatMap((item) => [item.name, item.detail ?? ""]),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });

  const materials = getMaterialIndex().filter((item) => {
    const haystack = [item.name, item.detail ?? "", item.applicationName].join(" ").toLowerCase();
    return haystack.includes(needle);
  });

  return { products: matchedProducts, materials };
}
