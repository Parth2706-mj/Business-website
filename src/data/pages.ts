/* =============================================================================
 * Static Page Content
 * ============================================================================= */

import type { PageSeo } from "@/types";
import { company } from "@/data/company";

export const pageSeo: Record<string, PageSeo> = {
  home: {
    title: "Baba Sons & Khandelwal Udyog | Chemicals with technical back-up",
    description:
      "Single-window supply of PVC and CPVC raw materials for pipe, wire and cable, film, panel, and flooring, with technical back-up.",
    keywords: [
      "Baba Sons",
      "Khandelwal Udyog",
      "PVC resin",
      "CPVC additives",
      "calcium zinc stabiliser",
      "lead stabiliser",
      "calcite",
      "titanium dioxide",
    ],
  },
  products: {
    title: "Catalogue | Baba Sons & Khandelwal Udyog",
    description:
      "Application-wise catalogue of PVC and CPVC chemicals: resin, stabilisers, plasticisers, modifiers, waxes, pigments, titanium dioxide, and calcite.",
    keywords: [
      "PVC pipe chemicals",
      "PVC cable compound raw materials",
      "CPVC pipe super pack",
      "garden pipe pigments",
    ],
  },
  about: {
    title: "About | Baba Sons & Khandelwal Udyog",
    description:
      "Baba Sons and Khandelwal Udyog are a single-window chemical supplier with technical back-up, and a channel partner of Indofil / Reagans India, Gold Stab, Maldeep Catalysts, and Camex Ltd.",
    keywords: ["Baba Sons", "Khandelwal Udyog", "chemical channel partner"],
  },
  technicalData: {
    title: "Technical data | Baba Sons & Khandelwal Udyog",
    description:
      "Request technical data for any material in the Baba Sons and Khandelwal Udyog catalogue.",
    keywords: ["PVC technical data", "TDS request", "CPVC wax"],
  },
  safety: {
    title: "Safety data | Baba Sons & Khandelwal Udyog",
    description:
      "Request a safety data sheet for materials supplied by Baba Sons and Khandelwal Udyog.",
    keywords: ["SDS request", "PVC chemical safety", "stabiliser SDS"],
  },
  contact: {
    title: "Contact | Baba Sons & Khandelwal Udyog",
    description:
      "Contact Baba Sons and Khandelwal Udyog by email, WhatsApp on +91 94686 43649, or phone. Offices at Alwar MIA and Jaipur VKI.",
    keywords: ["Baba Sons contact", "Khandelwal Udyog enquiry"],
  },
  privacyPolicy: {
    title: "Privacy policy | Baba Sons & Khandelwal Udyog",
    description: "How enquiries sent through this catalogue site are handled.",
  },
  termsOfService: {
    title: "Terms of use | Baba Sons & Khandelwal Udyog",
    description: "Terms for using the Baba Sons and Khandelwal Udyog catalogue website.",
  },
};

export const aboutPageContent = {
  heroLabel: "About the company",
  heroHeading: "Single window. Technical back-up.",
  heroBody:
    "Since 2004, Baba Sons have been in the business of catering value-added PVC basic chemicals and additives, specifically for UPVC profile, agri and SWR pipe, garden pipe, conduit pipe, CPVC pipe and fitting, PVC floor and artificial leather, and masterbatches.",
  mission:
    "Since 2004, Baba Sons have been in the business of catering value-added PVC basic chemicals and additives, specifically for UPVC profile, agri and SWR pipe, garden pipe, conduit pipe, CPVC pipe and fitting, PVC floor and artificial leather, and masterbatches.",
  values: [
    {
      title: "Single window",
      description:
        "Resin, stabilisers, plasticisers, modifiers, lubricants, waxes, pigments, titanium dioxide, and calcite are listed in one place, by the application they serve.",
      icon: "inventory_2",
    },
    {
      title: "Technical back-up",
      description:
        "An enquiry can ask for the grade, the packing, and the technical sheet together. The profile describes the business as chemicals with technical back-up.",
      icon: "support_agent",
    },
    {
      title: "Channel supply",
      description:
        "The company is a channel partner of Indofil / Reagans India, Gold Stab, Maldeep Catalysts, and Camex Ltd.",
      icon: "handshake",
    },
    {
      title: "Catalogue fidelity",
      description:
        "Pages on this site follow the printed profile. Grades and origins appear only where the profile names them.",
      icon: "fact_check",
    },
  ],
  capabilities: [
    { value: "6", label: "Application lines" },
    { value: "4", label: "Channel partners" },
    { value: "2004", label: "In business since" },
    { value: "2", label: "Locations" },
  ],
} as const;

export const technicalDataContent = {
  heroLabel: "Technical back-up",
  heroHeading: "Technical data",
  heroBody:
    "You are dealing with the same people who supply the chemical. Share the application and the grade, and we reply on priority from Alwar MIA and Jaipur VKI. Use the form on this page, or reach the office by email and WhatsApp.",
} as const;

export const contactPageContent = {
  heroLabel: "Enquiries",
  heroHeading: "Contact us",
  heroBody:
    "Email, WhatsApp the office number, or call. We work from Alwar MIA and Jaipur VKI, and enquiries are taken on priority.",
  channels: [
    ...company.emails.map((email, index) => ({
      label: index === 0 ? "Baba Sons" : "Khandelwal Udyog",
      value: email,
      href: `mailto:${email}`,
      icon: "mail",
    })),
    {
      label: "WhatsApp",
      value: company.whatsappDisplay,
      href: company.whatsappHref,
      icon: "chat",
    },
    ...company.phones.map((phone) => ({
      label: phone.label,
      value: phone.display,
      href: phone.href,
      icon: "call",
    })),
    ...company.locations.map((location) => ({
      label: "Location",
      value: location,
      href: "/contact",
      icon: "location_on",
    })),
  ],
  notes: [
      {
        icon: "schedule",
        label: "Response time",
        value: "On priority",
      },
      {
        icon: "location_on",
        label: "Locations",
        value: company.locations.join(" · "),
      },
      {
        icon: "edit_note",
        label: "What to include",
        value: "Application line, material, and quantity if you know it",
      },
    {
      icon: "forward_to_inbox",
      label: "How the form works",
      value: "It composes an email. Nothing is stored on this website",
    },
    {
      icon: "handshake",
      label: "Channel partners",
      value: company.channelPartners.join(" · "),
    },
  ],
} as const;

export const privacyPolicyContent = {
  heading: "Privacy policy",
  lastUpdated: "2 October 2026",
  sections: [
    {
      title: "1. What this site collects",
      body: "The catalogue pages do not ask you to create an account. If you use the enquiry form, your browser opens an email to Babasons9@gmail.com and Chemicalwala9@gmail.com. The name, organisation, email, phone, application, material, and message you type are placed in that email. They are not saved in a database on this website.",
    },
    {
      title: "2. Email and phone you send directly",
      body: "If you write, call, or message WhatsApp using the details published on this site, that correspondence is handled as a business enquiry about materials, technical sheets, and quotations.",
    },
    {
      title: "3. What we do not do",
      body: "The site does not sell personal information. It does not run a customer account, a newsletter signup, or a payment page. Do not send passwords or unrelated identity documents through the enquiry form.",
    },
    {
      title: "4. Asking about a message you sent",
      body: "To ask what was received, or to ask that an email thread be deleted from the company mailbox, write to Babasons9@gmail.com or Chemicalwala9@gmail.com. The published locations are Alwar MIA and Jaipur VKI.",
    },
  ],
} as const;

export const termsOfServiceContent = {
  heading: "Terms of use",
  lastUpdated: "2 October 2026",
  sections: [
    {
      title: "1. What this website is",
      body: "This website is a catalogue for Baba Sons and Khandelwal Udyog. It lists the application lines and materials named in the company profile so a buyer can prepare an enquiry.",
    },
    {
      title: "2. Catalogue, not a confirmed offer",
      body: "A listing is not a statement that a grade is in stock, and it is not a quotation. Price, packing, lead time, and the exact grade are confirmed only when the company replies to your enquiry. Names follow the profile, including where it says “etc.” for a plasticiser family.",
    },
    {
      title: "3. Technical documents",
      body: "Technical data is not hosted as a file on this site. Request it from the technical data page. Use the sheet you are actually sent.",
    },
    {
      title: "4. Use of the content",
      body: "The catalogue text and the arrangement of application lines belong to the company. You may share a link, or quote a material name in your own purchase enquiry. Do not republish the site as another supplier’s catalogue.",
    },
    {
      title: "5. Enquiries",
      body: "Sending the form opens your own email program. Delivery depends on that program and on the mailbox you send from. An enquiry is a request to talk. It does not create an order.",
    },
    {
      title: "6. Changes",
      body: "The catalogue will be updated when the company changes the profile. The date on this page is the date these terms were written for the site.",
    },
  ],
} as const;
