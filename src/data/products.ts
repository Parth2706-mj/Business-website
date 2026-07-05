/* =============================================================================
 * Product Catalog
 * 
 * Full product data for all 4 categories.
 * Each product contains card-level and detail-page-level content.
 * 
 * To add a new product:
 *   1. Add a new entry to the `products` array below
 *   2. The slug will auto-generate a route at /products/[slug]
 *   3. Update relatedSlugs on existing products if needed
 * ============================================================================= */

import type { Product } from "@/types";

export const products: Product[] = [
  /* ── Rigid PVC ── */
  {
    slug: "rigid-pvc",
    name: "RIGID PVC",
    icon: "precision_manufacturing",
    shortDescription:
      "High-modulus compounds for profile extrusion, piping systems, and injection molding applications.",
    longDescription: `Polymer-X Rigid PVC compounds are engineered for maximum structural performance in demanding industrial environments. Our proprietary formulations deliver exceptional dimensional stability, chemical resistance, and mechanical strength across a wide temperature range.

Each batch undergoes rigorous quality testing including tensile strength analysis, impact resistance evaluation, and accelerated weathering tests. Our compounds meet or exceed all major international standards for building and construction applications.

Available in custom formulations tailored to your specific application requirements, with technical support from concept through production scale-up.`,
    specs: [
      { label: "Density (g/cm³)", value: "1.42 – 1.55" },
      { label: "Shore Hardness", value: "80D – 85D" },
      { label: "Tensile Strength (MPa)", value: "45 – 60" },
      { label: "Vicat Softening (°C)", value: "78 – 85" },
      { label: "Izod Impact (kJ/m²)", value: "5 – 30" },
      { label: "Flammability", value: "UL 94 V-0" },
      { label: "Water Absorption (%)", value: "< 0.04" },
      { label: "Dielectric Strength (kV/mm)", value: "25 – 40" },
    ],
    applications: [
      "Window & door profiles",
      "Pressure pipe systems (water, gas)",
      "Electrical conduit & trunking",
      "Siding & cladding panels",
      "Structural fittings & connectors",
      "Industrial sheet & plate",
    ],
    compliance: [
      "ASTM D1784 (Standard Specification for Rigid PVC)",
      "ISO 1163 (Plastics — Unplasticized PVC)",
      "EN 12608 (Window profiles)",
      "NSF/ANSI 61 (Drinking water contact)",
      "UL 94 V-0 (Flammability)",
    ],
    relatedSlugs: ["flexible-pvc", "additives"],
  },

  /* ── Flexible PVC ── */
  {
    slug: "flexible-pvc",
    name: "FLEXIBLE PVC",
    icon: "layers",
    shortDescription:
      "Plasticized formulations for wire & cable, medical tubing, and automotive sealing components.",
    longDescription: `Polymer-X Flexible PVC compounds deliver superior elasticity and durability through precisely controlled plasticizer systems. Our formulations are designed for applications requiring sustained flexibility, excellent electrical insulation, and resistance to oils, chemicals, and UV exposure.

We offer both standard and custom flexible PVC compounds, including medical-grade formulations that meet USP Class VI and ISO 10993 biocompatibility requirements. Our wire and cable compounds provide outstanding dielectric properties and long-term thermal stability.

Every compound is engineered with migration-resistant plasticizer systems to ensure consistent performance throughout the product lifecycle.`,
    specs: [
      { label: "Elongation at Break (%)", value: "> 250" },
      { label: "Shore Hardness", value: "60A – 90A" },
      { label: "Tensile Strength (MPa)", value: "12 – 25" },
      { label: "Low-Temp Flexibility (°C)", value: "-30 to -40" },
      { label: "Volume Resistivity (Ω·cm)", value: "> 10¹²" },
      { label: "Oxygen Index (%)", value: "> 28" },
      { label: "Tear Strength (N/mm)", value: "30 – 80" },
      { label: "Compression Set (%)", value: "15 – 35" },
    ],
    applications: [
      "Wire & cable insulation and jacketing",
      "Medical tubing (IV lines, catheters)",
      "Automotive seals & gaskets",
      "Garden hoses & irrigation tubing",
      "Flooring & wall coverings",
      "Inflatable products & protective gear",
    ],
    compliance: [
      "IEC 60502 (Power cables)",
      "USP Class VI (Medical applications)",
      "ISO 10993 (Biocompatibility)",
      "EN 50363 (Insulating compounds)",
      "REACH / RoHS Compliant",
    ],
    relatedSlugs: ["rigid-pvc", "additives"],
  },

  /* ── Additives ── */
  {
    slug: "additives",
    name: "ADDITIVES",
    icon: "science",
    shortDescription:
      "High-performance heat stabilizers, lubricants, and impact modifiers for polymer customization.",
    longDescription: `Polymer-X Additives are precision-engineered chemical systems that enhance and customize polymer performance. Our additive portfolio includes heat stabilizers, impact modifiers, processing aids, lubricants, UV stabilizers, and flame retardants — each optimized for specific polymer systems and end-use requirements.

Our technical team works directly with compounders and processors to develop tailored additive packages that solve specific performance challenges. From improving heat aging resistance to enhancing surface finish quality, our additives deliver measurable improvements.

All additive systems are rigorously tested for compatibility, long-term stability, and regulatory compliance across global markets.`,
    specs: [
      { label: "Formulation", value: "Custom" },
      { label: "Compatibility", value: "Global Standards" },
      { label: "Thermal Stability (°C)", value: "Up to 220" },
      { label: "UV Resistance (hrs)", value: "> 5000" },
      { label: "Impact Modifier Loading (%)", value: "5 – 15" },
      { label: "Processing Aid Efficiency", value: "High" },
      { label: "Migration Resistance", value: "Excellent" },
      { label: "Shelf Life (months)", value: "24" },
    ],
    applications: [
      "Heat stabilization for extrusion & calendering",
      "Impact modification for rigid PVC",
      "Processing aids for improved surface finish",
      "Lubricant systems for high-speed processing",
      "UV stabilization for outdoor applications",
      "Flame retardant packages (halogen-free available)",
    ],
    compliance: [
      "EU Regulation 1907/2006 (REACH)",
      "RoHS Directive 2011/65/EU",
      "FDA 21 CFR (Food contact approved)",
      "GB/T Standards (China market)",
      "JECFA / WHO Guidelines",
    ],
    relatedSlugs: ["rigid-pvc", "flexible-pvc", "sustainable"],
  },

  /* ── Sustainable Polymers ── */
  {
    slug: "sustainable",
    name: "SUSTAINABLE POLYMERS",
    icon: "eco",
    shortDescription:
      "Bio-based and recycled content polymers designed to reduce environmental impact without performance loss.",
    longDescription: `Polymer-X Sustainable Polymers represent the future of responsible manufacturing. Our bio-based and recycled-content compounds deliver comparable mechanical and processing performance while significantly reducing carbon footprint and virgin material consumption.

Our sustainable product line includes post-consumer recycled (PCR) PVC compounds, bio-based plasticizer systems, and hybrid formulations that combine recycled and bio-sourced materials. Each product undergoes the same rigorous quality standards as our conventional polymer range.

We provide full lifecycle assessment (LCA) documentation and environmental product declarations (EPDs) to support your sustainability reporting and green building certifications.`,
    specs: [
      { label: "Bio-Based Content", value: "Up to 40%" },
      { label: "Recycled Content", value: "Up to 80%" },
      { label: "LCA Status", value: "Certified" },
      { label: "Carbon Reduction", value: "30 – 60%" },
      { label: "Mechanical Performance", value: "Equivalent" },
      { label: "Processing Compatibility", value: "Standard Equipment" },
      { label: "Color Availability", value: "Full Range" },
      { label: "Min. Order (MT)", value: "5" },
    ],
    applications: [
      "Green building profiles (LEED / BREEAM)",
      "Sustainable packaging materials",
      "Eco-certified consumer products",
      "Circular economy pipe systems",
      "Recycled-content cable compounds",
      "Bio-based flooring & interior products",
    ],
    compliance: [
      "ISO 14021 (Environmental labels)",
      "EN 15804 (EPD for construction)",
      "ISCC PLUS Certification",
      "GRS (Global Recycled Standard)",
      "Cradle to Cradle Certified™",
    ],
    relatedSlugs: ["rigid-pvc", "additives"],
  },
];

/* --------------------------------------------------------------------------
 * Helper — look up product by slug
 * -------------------------------------------------------------------------- */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/* --------------------------------------------------------------------------
 * Helper — get all valid slugs (for generateStaticParams)
 * -------------------------------------------------------------------------- */
export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
