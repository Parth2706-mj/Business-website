/* =============================================================================
 * Product Catalogue
 *
 * Application lines and the materials named for each line in the
 * Baba Sons & Khandelwal Udyog company profile, plus the masterbatch
 * line named in the company description.
 * ============================================================================= */

import type { CatalogueImage, MaterialIndexEntry, MaterialLine, Product } from "@/types";

function photo(file: string, alt: string): CatalogueImage {
  return { src: `/catalogue/${file}`, alt };
}

function material(name: string, file: string, detail?: string): MaterialLine {
  return { name, detail, image: photo(file, name) };
}

export const products: Product[] = [
  {
    slug: "pvc-agri-swr-pipe",
    name: "PVC Agri & SWR Pipe",
    icon: "water_drop",
    image: photo("agri-field.jpg", "PVC Agri & SWR Pipe"),
    shortDescription:
      "Resin, stabiliser packs, CPE, modifiers, lubricants, titanium dioxide, and calcite for agricultural and SWR pipe.",
    longDescription: `Baba Sons and Khandelwal Udyog supply the raw materials listed below for PVC agricultural pipe and SWR pipe, with technical back-up alongside the material.

Lead and calcium-zinc systems are both listed, including one-pack and super-pack grades. Calcite is offered from Vietnam, Egypt, and Malaysia. Titanium dioxide is offered in rutile and anatase.

Grades, packing, and current availability are confirmed when you enquire. This page follows the company profile and does not add specifications that are not printed there.`,
    materials: [
      material("PVC Resin", "granules.jpg"),
      material("Lead one pack / Super pack", "drain-pipe.jpg"),
      material("Ca-Zn one pack / Super pack", "cut-pipe.jpg"),
      material("Plasticizers", "pp-pellets.jpg"),
      material("Additives, CPE", "pellets-inject.jpg"),
      material("Impact Modifier", "dripper.jpg"),
      material("Processing Aid", "shrink.jpg"),
      material("Lubricants", "stearic.jpg"),
      material("Titanium Dioxide", "tio2.jpg", "Rutile and anatase"),
      material("Calcite", "calcite.jpg", "Vietnam, Egypt, Malaysia"),
    ],
    relatedSlugs: ["pvc-conduit-pipe", "cpvc"],
  },
  {
    slug: "pvc-wire-and-cable",
    name: "PVC Wire and Cable",
    icon: "cable",
    image: photo("cable.jpg", "PVC Wire and Cable"),
    shortDescription:
      "PVC resin, lead and calcium-zinc stabilisers, plasticisers, titanium dioxide, and calcite for wire and cable compounds.",
    longDescription: `For PVC wire and cable, the catalogue lists resin, lead stabilisers, calcium-zinc stabilisers, plasticisers, titanium dioxide, and calcite.

Plasticisers named for this line are DOP, DIBP, and DINP. Titanium dioxide is rutile and anatase. Calcite origins are Vietnam, Egypt, and Malaysia.

Ask for the grade and packing you need. Technical data is shared on request.`,
    materials: [
      material("PVC Resin", "sacks.jpg"),
      material("Lead Stabilizers", "copper.jpg"),
      material("Ca-Zn Stabilizers", "harness.jpg"),
      material("Plasticizers", "power-hg.jpg", "DOP, DIBP, DINP"),
      material("Titanium Dioxide", "tio2-jar.jpg", "Rutile and anatase"),
      material("Calcite", "lime.jpg", "Vietnam, Egypt, Malaysia"),
    ],
    relatedSlugs: ["tubing-garden-pipe", "pvc-film-panel-floor"],
  },
  {
    slug: "pvc-conduit-pipe",
    name: "PVC Conduit Pipe",
    icon: "electrical_services",
    image: photo("conduit.jpg", "PVC Conduit Pipe"),
    shortDescription:
      "Resin, one-pack stabilisers, CPE, brightener, stearic acid, waxes, titanium, and calcite for conduit pipe.",
    longDescription: `The conduit-pipe line covers resin, lead one pack, calcium-zinc one pack, CPE, brightener, stearic acid, waxes, titanium, and calcite.

Calcite for this line is listed from Vietnam, Egypt, and Malaysia. Use the enquiry form to ask which wax and which brightener grade is available for your conduit formulation.`,
    materials: [
      material("PVC Resin", "pipe-stack.jpg"),
      material("Lead one pack", "wall-pipe.jpg"),
      material("Ca-Zn one pack", "conduit-bend.jpg"),
      material("CPE", "lace.jpg"),
      material("Brightener", "ultra.jpg"),
      material("Stearic Acid", "stearic-glass.jpg"),
      material("Waxes", "cable-section.jpg"),
      material("Titanium", "alum.jpg"),
      material("Calcite", "mb-white2.jpg", "Vietnam, Egypt, Malaysia"),
    ],
    relatedSlugs: ["pvc-agri-swr-pipe", "cpvc"],
  },
  {
    slug: "tubing-garden-pipe",
    name: "Tubing (Garden Pipe)",
    icon: "sprinkler",
    image: photo("hose.jpg", "Tubing (Garden Pipe)"),
    shortDescription:
      "Resin, plasticisers, liquid methyl tin and antimony, a calcium-zinc tin replacement, brighteners, and pigments for garden pipe.",
    longDescription: `Garden-pipe tubing is listed with resin and the plasticisers DOP, DIBP, and CPW. Stabiliser options are liquid methyl tin or antimony, and a calcium-zinc system offered as a replacement to tin.

Optical brighteners OB and OB-1, and colour pigments, are included on this line. Confirm the pigment shade and the stabiliser route when you enquire.`,
    materials: [
      material("PVC Resin", "greenhouse-hose.jpg"),
      material("Plasticizers", "blue-hose.jpg", "DOP, DIBP, CPW"),
      material("Methyl Tin / Antimony", "drip.jpg", "Liquid"),
      material("Ca-Zn replacement to tin", "nozzle.jpg"),
      material("Brightener", "ultra2.jpg", "OB, OB-1"),
      material("Pigments", "pigments.jpg", "Colours"),
    ],
    relatedSlugs: ["pvc-wire-and-cable", "masterbatches"],
  },
  {
    slug: "pvc-film-panel-floor",
    name: "PVC Film, UPVC Panel and Floor",
    icon: "layers",
    image: photo("floor.jpg", "PVC Film, UPVC Panel and Floor"),
    shortDescription:
      "Suspension and paste resin, UPVC panel, plasticisers, processing aid, impact modifier, waxes, brighteners, and pigments for film, panel, and flooring.",
    longDescription: `This line covers PVC film, UPVC panel, and flooring. The profile lists both suspension and paste resin. Plasticisers named here are DOP, DIBP, DINP, and DOTP.

The same line includes processing aid and impact modifier, Honeywell waxes, paraffin wax, brighteners OB and OB-1, and colour pigments. Tell us the end product — film, UPVC panel, or floor — so the grade can be matched.`,
    materials: [
      material("UPVC Panel", "vinyl-south.jpg"),
      material("PVC Resin", "film-roll.jpg", "Suspension and paste"),
      material("Plasticizers", "leather.jpg", "DOP, DIBP, DINP, DOTP"),
      material("Processing Aid & Impact Modifier", "floor2.jpg"),
      material("Honeywell waxes", "pe-wax.jpg"),
      material("Paraffin wax", "wax.jpg"),
      material("Brightener", "brown-pig.jpg", "OB, OB-1"),
      material("Pigments", "iron-ox.jpg", "Colours"),
    ],
    relatedSlugs: ["tubing-garden-pipe", "masterbatches"],
  },
  {
    slug: "cpvc",
    name: "CPVC",
    icon: "valve",
    image: photo("cpvc.jpg", "CPVC"),
    shortDescription:
      "CPVC resin, pipe and fitting, processing aid, impact modifier, waxes, and pipe and fitting super packs.",
    longDescription: `The CPVC line covers CPVC resin, CPVC pipe, and CPVC fitting, together with processing aid and impact modifier, FT and oxidised waxes, Honeywell waxes, a pipe super pack, and a fitting super pack.

Name whether you need resin, pipe, or fitting when you ask for a quotation or a technical sheet.`,
    materials: [
      material("CPVC Resin", "upvc-fit.jpg"),
      material("CPVC Pipe", "sprinkler-fit.jpg"),
      material("CPVC Fitting", "fittings.jpg"),
      material("Processing Aid & Impact Modifier", "conduit-bank.jpg"),
      material("FT & Oxidized Waxes", "irrig-pipe.jpg"),
      material("Honeywell waxes", "irrig-reel.jpg"),
      material("Pipe Super Pack", "emt.jpg"),
      material("Fitting Super Pack", "pipe.jpg"),
    ],
    relatedSlugs: ["pvc-agri-swr-pipe", "pvc-conduit-pipe"],
  },
  {
    slug: "masterbatches",
    name: "Masterbatches",
    icon: "palette",
    image: photo("masterbatch.jpg", "Masterbatches"),
    shortDescription:
      "Colour, white, black, and additive masterbatches for the PVC applications already in the catalogue.",
    longDescription: `Masterbatches are part of the same supply: colour, white, black, and additive concentrates for pipe, profile, film, flooring, and the other PVC lines on this site.

The shade, the carrier, and the let-down are confirmed when you enquire. This page does not add laboratory specifications that are not printed in the company profile.`,
    materials: [
      material("Colour masterbatch", "fe2o3.jpg"),
      material("White masterbatch", "pellets.jpg"),
      material("Black masterbatch", "carbon.jpg"),
      material("Additive masterbatch", "iron-black.jpg"),
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
