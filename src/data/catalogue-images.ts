/* =============================================================================
 * Catalogue photographs
 *
 * Freely licensed reference photos from Wikimedia Commons, stored locally.
 * They illustrate a material or an application. They are not warehouse shots
 * of a Baba Sons grade.
 * ============================================================================= */

import type { CatalogueImage } from "@/types";

export const catalogueImages = {
  pipe: {
    src: "/catalogue/pipe.jpg",
    alt: "PVC valve and pipe",
    credit: "Bijay Chaurasia",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:1_inch_PVC_Valve_and_pipe-IMG_1061.jpg",
  },
  cable: {
    src: "/catalogue/cable.jpg",
    alt: "Power and control cables",
    credit: "Achim Hering",
    license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Power_control_cables.jpg",
  },
  conduit: {
    src: "/catalogue/conduit.jpg",
    alt: "Rigid non-metallic electrical conduit",
    credit: "Anibal Maysonet",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rigid_Non-Metallic_Conduit_1.jpg",
  },
  hose: {
    src: "/catalogue/hose.jpg",
    alt: "Garden hose reel and nozzle",
    credit: "PumpkinSky",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hose_reel_with_hanging_water_nozzle.jpg",
  },
  floor: {
    src: "/catalogue/floor.jpg",
    alt: "Vinyl flooring tiles",
    credit: "Linoleum123",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vinyl_flooring,_tiles.jpg",
  },
  cpvc: {
    src: "/catalogue/cpvc.jpg",
    alt: "CPVC sprinkler pipe",
    credit: "Achim Hering",
    license: "CC BY 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cpvc_sprinkler_rohr_kanadische_holzkabache.jpg",
  },
  granules: {
    src: "/catalogue/granules.jpg",
    alt: "Uncoloured plastic granules",
    credit: "Rohini",
    license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Uncolored_plastic_granules.jpg",
  },
  tio2: {
    src: "/catalogue/tio2.jpg",
    alt: "Titanium dioxide powder",
    credit: "Pixelmaniac pictures",
    license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Titanium_dioxide_powder_dispersing_in_water.JPG",
  },
  calcite: {
    src: "/catalogue/calcite.jpg",
    alt: "Calcium carbonate powder",
    credit: "Walkerma",
    license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Calcium_carbonate.jpg",
  },
  wax: {
    src: "/catalogue/wax.jpg",
    alt: "Paraffin wax",
    credit: "Gmhofmann",
    license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paraffin.jpg",
  },
  pigments: {
    src: "/catalogue/pigments.jpg",
    alt: "Pigment powders",
    credit: "Dan Brady",
    license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Indian_pigments.jpg",
  },
  masterbatch: {
    src: "/catalogue/masterbatch.jpg",
    alt: "Coloured masterbatch pellets",
    credit: "Adakeurope",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Masterbatch.jpg",
  },
  pellets: {
    src: "/catalogue/pellets.jpg",
    alt: "White masterbatch pellets",
    credit: "Gabriele85",
    license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Calcium_carbonate_masterbatch_for_plastic_production.jpg",
  },
} as const satisfies Record<string, CatalogueImage>;

export type CatalogueImageKey = keyof typeof catalogueImages;
