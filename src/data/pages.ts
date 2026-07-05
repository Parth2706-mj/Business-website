/* =============================================================================
 * Static Page Content
 * 
 * Content for About, Technical Data, Safety, Privacy, and Terms pages.
 * Organized by page for easy maintenance.
 * ============================================================================= */

import type { DocumentEntry, TeamMember, Milestone, PageSeo } from "@/types";

/* ==========================================================================
 * SEO Metadata — per-page titles and descriptions
 * ========================================================================== */

export const pageSeo: Record<string, PageSeo> = {
  home: {
    title: "POLYMER-X INDUSTRIAL | Engineering Excellence in Polymer Science",
    description:
      "Industrial-grade PVC compounds, additives, and sustainable polymers. ISO 9001:2015 certified manufacturing with 40+ years of engineering excellence.",
    keywords: [
      "PVC compounds",
      "industrial polymers",
      "chemical manufacturing",
      "rigid PVC",
      "flexible PVC",
      "polymer additives",
      "sustainable polymers",
    ],
  },
  products: {
    title: "Products | POLYMER-X INDUSTRIAL",
    description:
      "Explore our full catalog of rigid PVC, flexible PVC, performance additives, and sustainable polymer compounds engineered for industrial applications.",
    keywords: [
      "PVC products",
      "polymer catalog",
      "rigid PVC compounds",
      "flexible PVC",
      "industrial additives",
    ],
  },
  about: {
    title: "About Us | POLYMER-X INDUSTRIAL",
    description:
      "Since 1984, POLYMER-X has been a global leader in polymer science. Learn about our ISO-certified manufacturing, research capabilities, and commitment to quality.",
    keywords: [
      "about polymer-x",
      "chemical company",
      "polymer manufacturer",
      "ISO certified",
    ],
  },
  technicalData: {
    title: "Technical Data | POLYMER-X INDUSTRIAL",
    description:
      "Access technical data sheets, ASTM testing results, and material specifications for all POLYMER-X products. Comprehensive engineering documentation.",
    keywords: [
      "technical data sheets",
      "TDS",
      "material specifications",
      "ASTM testing",
      "polymer data",
    ],
  },
  safety: {
    title: "Safety Data Sheets (SDS) | POLYMER-X INDUSTRIAL",
    description:
      "Download safety data sheets for all POLYMER-X products. GHS-compliant documentation for safe handling, storage, and transportation of chemical compounds.",
    keywords: [
      "safety data sheets",
      "SDS",
      "MSDS",
      "chemical safety",
      "GHS compliant",
    ],
  },
  contact: {
    title: "Contact Us | POLYMER-X INDUSTRIAL",
    description:
      "Get in touch with our engineering team for technical consultations, custom formulation requests, and supply chain solutions. 24/7 global support.",
    keywords: [
      "contact polymer-x",
      "technical consultation",
      "custom compounds",
      "chemical supplier",
    ],
  },
  privacyPolicy: {
    title: "Privacy Policy | POLYMER-X INDUSTRIAL",
    description:
      "Learn how POLYMER-X INDUSTRIAL collects, uses, and protects your personal information.",
  },
  termsOfService: {
    title: "Terms of Service | POLYMER-X INDUSTRIAL",
    description:
      "Terms and conditions governing the use of POLYMER-X INDUSTRIAL website and services.",
  },
};

/* ==========================================================================
 * About Page
 * ========================================================================== */

export const aboutPageContent = {
  heroLabel: "ABOUT POLYMER-X",
  heroHeading: "ENGINEERING THE FUTURE OF MATERIALS",
  heroBody:
    "Since 1984, POLYMER-X INDUSTRIAL has been at the forefront of polymer science and chemical engineering, delivering precision-formulated compounds to industries worldwide.",

  /** Company mission statement */
  mission:
    "To engineer industrial-grade polymer solutions that set the global standard for performance, safety, and sustainability — empowering manufacturers to build better.",

  /** Company values */
  values: [
    {
      title: "PRECISION",
      description:
        "Every compound is engineered to exact specifications with zero tolerance for deviation.",
      icon: "straighten",
    },
    {
      title: "INTEGRITY",
      description:
        "Full transparency in our processes, from raw material sourcing through final quality certification.",
      icon: "verified",
    },
    {
      title: "INNOVATION",
      description:
        "Continuous R&D investment to develop next-generation polymer systems and sustainable alternatives.",
      icon: "lightbulb",
    },
    {
      title: "RELIABILITY",
      description:
        "40+ years of consistent delivery, meeting the most demanding industrial supply chain requirements.",
      icon: "shield",
    },
  ],

  /** Manufacturing capabilities */
  capabilities: [
    { value: "6", label: "MANUFACTURING FACILITIES" },
    { value: "30+", label: "COUNTRIES SERVED" },
    { value: "40+", label: "YEARS OF EXPERTISE" },
    { value: "500+", label: "CUSTOM FORMULATIONS" },
  ],
} as const;

/** Company history milestones */
export const milestones: Milestone[] = [
  {
    year: 1984,
    title: "Founded",
    description:
      "POLYMER-X established in Newark, NJ with a focus on rigid PVC compounds for construction.",
  },
  {
    year: 1992,
    title: "ISO 9001 Certified",
    description:
      "Achieved ISO 9001 certification, setting the standard for quality management in polymer manufacturing.",
  },
  {
    year: 2001,
    title: "Global Expansion",
    description:
      "Opened manufacturing facilities in Europe and Asia to serve growing international demand.",
  },
  {
    year: 2010,
    title: "Sustainable Polymers Division",
    description:
      "Launched dedicated R&D division for bio-based and recycled-content polymer compounds.",
  },
  {
    year: 2018,
    title: "Advanced Materials Lab",
    description:
      "Inaugurated state-of-the-art materials science laboratory for next-generation polymer development.",
  },
  {
    year: 2024,
    title: "Carbon Neutral Operations",
    description:
      "Achieved carbon neutrality across all manufacturing operations through renewable energy and offset programs.",
  },
];

/** Leadership team */
export const leadership: TeamMember[] = [
  {
    name: "Dr. Richard Harmon",
    role: "Chief Executive Officer",
    description:
      "30+ years in polymer science with a PhD in Chemical Engineering from MIT.",
  },
  {
    name: "Dr. Sarah Chen",
    role: "VP of Research & Development",
    description:
      "Leads a team of 40+ scientists developing next-generation polymer formulations.",
  },
  {
    name: "Marcus Webb",
    role: "VP of Global Operations",
    description:
      "Oversees 6 manufacturing facilities across 3 continents with ISO-certified processes.",
  },
  {
    name: "Dr. Anika Patel",
    role: "Director of Sustainability",
    description:
      "Drives the company's transition to bio-based and circular economy polymer solutions.",
  },
];

/* ==========================================================================
 * Technical Data Page
 * ========================================================================== */

export const technicalDataContent = {
  heroLabel: "ENGINEERING RESOURCES",
  heroHeading: "TECHNICAL DATA LIBRARY",
  heroBody:
    "Access comprehensive technical data sheets, testing results, and material specifications for all POLYMER-X products.",
} as const;

/** Technical documents available for download */
export const technicalDocuments: DocumentEntry[] = [
  {
    title: "Rigid PVC — Standard Grade TDS",
    category: "Rigid PVC",
    format: "PDF",
    size: "2.4 MB",
    updated: "2024-03-15",
  },
  {
    title: "Rigid PVC — High-Impact Grade TDS",
    category: "Rigid PVC",
    format: "PDF",
    size: "2.1 MB",
    updated: "2024-03-10",
  },
  {
    title: "Rigid PVC — Pipe Grade ASTM Testing Report",
    category: "Rigid PVC",
    format: "PDF",
    size: "3.8 MB",
    updated: "2024-02-28",
  },
  {
    title: "Flexible PVC — Wire & Cable Grade TDS",
    category: "Flexible PVC",
    format: "PDF",
    size: "2.7 MB",
    updated: "2024-03-12",
  },
  {
    title: "Flexible PVC — Medical Grade TDS",
    category: "Flexible PVC",
    format: "PDF",
    size: "3.2 MB",
    updated: "2024-01-20",
  },
  {
    title: "Flexible PVC — Biocompatibility Report (ISO 10993)",
    category: "Flexible PVC",
    format: "PDF",
    size: "4.5 MB",
    updated: "2024-02-05",
  },
  {
    title: "Heat Stabilizer System — Calcium-Zinc Series",
    category: "Additives",
    format: "PDF",
    size: "1.8 MB",
    updated: "2024-03-01",
  },
  {
    title: "Impact Modifier — ACR Series Technical Guide",
    category: "Additives",
    format: "PDF",
    size: "2.0 MB",
    updated: "2024-02-15",
  },
  {
    title: "Sustainable PVC — Bio-Based Content Verification",
    category: "Sustainable",
    format: "PDF",
    size: "1.5 MB",
    updated: "2024-03-18",
  },
  {
    title: "Sustainable PVC — Lifecycle Assessment (LCA)",
    category: "Sustainable",
    format: "PDF",
    size: "5.2 MB",
    updated: "2024-01-30",
  },
];

/* ==========================================================================
 * Safety / SDS Page
 * ========================================================================== */

export const safetyPageContent = {
  heroLabel: "REGULATORY COMPLIANCE",
  heroHeading: "SAFETY DATA SHEETS",
  heroBody:
    "Access GHS-compliant Safety Data Sheets for all POLYMER-X products. Our SDS documents provide comprehensive information on safe handling, storage, transportation, and emergency procedures.",
} as const;

/** Safety documents available for download */
export const safetyDocuments: DocumentEntry[] = [
  {
    title: "Rigid PVC Compound — General Purpose",
    category: "Rigid PVC",
    format: "PDF",
    size: "890 KB",
    updated: "2024-03-15",
  },
  {
    title: "Rigid PVC Compound — Pipe Grade",
    category: "Rigid PVC",
    format: "PDF",
    size: "920 KB",
    updated: "2024-03-10",
  },
  {
    title: "Flexible PVC Compound — Standard",
    category: "Flexible PVC",
    format: "PDF",
    size: "850 KB",
    updated: "2024-03-12",
  },
  {
    title: "Flexible PVC Compound — Medical Grade",
    category: "Flexible PVC",
    format: "PDF",
    size: "1.1 MB",
    updated: "2024-02-20",
  },
  {
    title: "Calcium-Zinc Stabilizer System",
    category: "Additives",
    format: "PDF",
    size: "780 KB",
    updated: "2024-03-01",
  },
  {
    title: "Acrylic Impact Modifier (ACR)",
    category: "Additives",
    format: "PDF",
    size: "720 KB",
    updated: "2024-02-15",
  },
  {
    title: "Processing Aid — Acrylic Based",
    category: "Additives",
    format: "PDF",
    size: "680 KB",
    updated: "2024-02-10",
  },
  {
    title: "Bio-Based Plasticizer System",
    category: "Sustainable",
    format: "PDF",
    size: "950 KB",
    updated: "2024-03-18",
  },
];

/* ==========================================================================
 * Contact Page
 * ========================================================================== */

export const contactPageContent = {
  heroLabel: "GET IN TOUCH",
  heroHeading: "CONTACT OUR TEAM",
  heroBody:
    "Our global engineering team is available for technical consultations, custom formulation requests, and supply chain solutions.",

  /** Office locations */
  offices: [
    {
      name: "Global Headquarters",
      address: "1200 Industrial Parkway, Newark, NJ 07114, USA",
      phone: "+1 (800) POLY-IND",
      email: "sales@polymer-x.tech",
    },
    {
      name: "European Operations",
      address: "Industriestrasse 42, 65428 Rüsselsheim, Germany",
      phone: "+49 (0) 6142 835 000",
      email: "eu@polymer-x.tech",
    },
    {
      name: "Asia-Pacific Hub",
      address: "88 Science Park Drive, Singapore 118261",
      phone: "+65 6789 0123",
      email: "apac@polymer-x.tech",
    },
  ],
} as const;

/* ==========================================================================
 * Legal Pages — Privacy Policy & Terms of Service
 * ========================================================================== */

export const privacyPolicyContent = {
  heading: "PRIVACY POLICY",
  lastUpdated: "March 15, 2024",
  sections: [
    {
      title: "1. Information We Collect",
      body: "We collect information you provide directly, such as your name, email address, organization, and technical requirements when you submit a contact form or request a specification sheet. We also automatically collect certain technical data about your visit, including your IP address, browser type, and pages viewed.",
    },
    {
      title: "2. How We Use Your Information",
      body: "We use the information we collect to respond to your inquiries, provide technical documentation, improve our website, and communicate about our products and services. We do not sell your personal information to third parties.",
    },
    {
      title: "3. Data Security",
      body: "We implement industry-standard security measures to protect your personal information. All data transmission is encrypted using TLS 1.3, and our systems undergo regular security audits by independent third-party assessors.",
    },
    {
      title: "4. Cookies and Tracking",
      body: "We use essential cookies to ensure our website functions correctly. We may also use analytics cookies to understand how visitors interact with our site. You can control cookie settings through your browser preferences.",
    },
    {
      title: "5. Third-Party Services",
      body: "We may use third-party services for analytics, email delivery, and form processing. These services have their own privacy policies and are selected for their compliance with applicable data protection regulations.",
    },
    {
      title: "6. Your Rights",
      body: "You have the right to access, correct, or delete your personal data. You may also request a copy of the data we hold about you. To exercise these rights, contact us at privacy@polymer-x.tech.",
    },
    {
      title: "7. Contact Us",
      body: "For questions about this Privacy Policy, contact our Data Protection Officer at privacy@polymer-x.tech or write to: POLYMER-X INDUSTRIAL, 1200 Industrial Parkway, Newark, NJ 07114, USA.",
    },
  ],
} as const;

export const termsOfServiceContent = {
  heading: "TERMS OF SERVICE",
  lastUpdated: "March 15, 2024",
  sections: [
    {
      title: "1. Acceptance of Terms",
      body: "By accessing and using the POLYMER-X INDUSTRIAL website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.",
    },
    {
      title: "2. Use of Website",
      body: "This website is intended for business and professional use. You may access technical documentation, product information, and contact forms for legitimate business purposes. Automated scraping or data harvesting is prohibited.",
    },
    {
      title: "3. Intellectual Property",
      body: "All content on this website, including text, graphics, logos, product specifications, and technical data, is the property of POLYMER-X INDUSTRIAL and is protected by intellectual property laws. Reproduction is permitted only for internal business evaluation purposes.",
    },
    {
      title: "4. Product Information",
      body: "Technical specifications and product data provided on this website are for general reference only. Actual product performance may vary based on processing conditions and application requirements. Contact our technical team for application-specific recommendations.",
    },
    {
      title: "5. Limitation of Liability",
      body: "POLYMER-X INDUSTRIAL provides this website and its content on an 'as is' basis. We make no warranties regarding the accuracy or completeness of the information provided. Our liability is limited to the maximum extent permitted by applicable law.",
    },
    {
      title: "6. Governing Law",
      body: "These terms are governed by the laws of the State of New Jersey, United States. Any disputes arising from the use of this website shall be resolved in the courts of Newark, New Jersey.",
    },
    {
      title: "7. Changes to Terms",
      body: "We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Continued use of the website constitutes acceptance of the modified terms.",
    },
  ],
} as const;
