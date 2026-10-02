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
      "Enquire with Baba Sons and Khandelwal Udyog at Babasons9@gmail.com, Chemicalwala9@gmail.com, or +91 94133 03649.",
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
    "Baba Sons and Khandelwal Udyog publish one catalogue for the chemicals used across PVC pipe, cable, film, panel, flooring, and CPVC. The supply and the technical conversation sit together.",
  mission:
    "To be the single window for the chemicals named in the company profile, and to back each supply with technical support for the application it is listed against.",
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
    { value: "2", label: "Enquiry emails" },
    { value: "1", label: "Published mobile" },
  ],
} as const;

export const technicalDataContent = {
  heroLabel: "Technical back-up",
  heroHeading: "Request a technical sheet",
  heroBody:
    "The table lists every material in the company profile, in catalogue order. Sheets are sent on request. This page does not host downloadable files.",
} as const;

export const safetyPageContent = {
  heroLabel: "Handling",
  heroHeading: "Request a safety data sheet",
  heroBody:
    "Ask for the current safety data sheet before you handle a material. This page lists what the company supplies. It is not itself a safety data sheet.",
  notices: [
    {
      icon: "warning",
      title: "Sheet on request",
      description:
        "Use the request link on a row to open an enquiry for that material. The sheet is issued by email, not downloaded from this site.",
    },
    {
      icon: "inventory",
      title: "Match the line",
      description:
        "The same chemical name can appear on more than one application. Name the line — pipe, cable, film, or CPVC — so the right sheet is sent.",
    },
    {
      icon: "call",
      title: "Speak to the desk",
      description: `Call ${company.phone} if the material you need is not obvious from the catalogue name.`,
    },
  ],
} as const;

export const contactPageContent = {
  heroLabel: "Enquiries",
  heroHeading: "Contact the desk",
  heroBody:
    "Both email addresses and the mobile number below are printed on the company profile. The form opens a message to those addresses in your email app.",
  channels: [
    {
      label: "Baba Sons",
      value: company.emails[0],
      href: `mailto:${company.emails[0]}`,
      icon: "mail",
    },
    {
      label: "Khandelwal Udyog",
      value: company.emails[1],
      href: `mailto:${company.emails[1]}`,
      icon: "mail",
    },
    {
      label: "Mobile",
      value: company.phone,
      href: company.phoneHref,
      icon: "call",
    },
  ],
  notes: [
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
      body: "If you write or call using the addresses and mobile number published on the company profile, that correspondence is handled as a business enquiry. Use it to reply to you about materials, technical sheets, safety sheets, and quotations.",
    },
    {
      title: "3. What we do not do",
      body: "The site does not sell personal information. It does not run a customer account, a newsletter signup, or a payment page. Do not send passwords or unrelated identity documents through the enquiry form.",
    },
    {
      title: "4. Asking about a message you sent",
      body: "To ask what was received, or to ask that an email thread be deleted from the company mailbox, write to Babasons9@gmail.com or Chemicalwala9@gmail.com. A postal address is not printed on the company profile, so it is not published here.",
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
      title: "3. Technical and safety documents",
      body: "Technical data and safety data are not hosted as files on this site. Request them from the technical data or safety data pages. Handle material only against the sheet you are actually sent.",
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
