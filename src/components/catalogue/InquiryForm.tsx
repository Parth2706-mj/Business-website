"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { company } from "@/data/company";
import { products } from "@/data/products";
import type { EnquiryIntent } from "@/types";

const intentCopy: Record<EnquiryIntent, { title: string; submit: string }> = {
  general: { title: "Catalogue enquiry", submit: "Prepare enquiry" },
  quote: { title: "Quotation request", submit: "Prepare quotation email" },
  tds: { title: "Technical data request", submit: "Prepare technical data email" },
  sds: { title: "Safety data request", submit: "Prepare safety data email" },
};

function readIntent(value: string | null): EnquiryIntent {
  if (value === "quote" || value === "tds" || value === "sds" || value === "general") {
    return value;
  }
  return "general";
}

interface InquiryFormProps {
  idPrefix?: string;
}

export function InquiryForm({ idPrefix = "enquiry" }: InquiryFormProps) {
  const searchParams = useSearchParams();
  const intent = readIntent(searchParams.get("intent"));
  const presetApplication = searchParams.get("application") ?? "";
  const presetMaterial = searchParams.get("material") ?? "";
  const copy = intentCopy[intent];

  const defaultMessage = useMemo(() => {
    if (!presetMaterial && !presetApplication) return "";
    const product = products.find((item) => item.slug === presetApplication);
    const line = product?.name ?? presetApplication;
    if (intent === "tds") {
      return `Please share the technical data for ${presetMaterial || "the materials"} on the ${line || "listed"} line.`;
    }
    if (intent === "sds") {
      return `Please share the current safety data sheet for ${presetMaterial || "the materials"} on the ${line || "listed"} line.`;
    }
    if (intent === "quote") {
      return `Please share price and availability for ${presetMaterial || "the materials"} on the ${line || "listed"} line.`;
    }
    return `I am enquiring about ${presetMaterial || "materials"} for ${line || "a catalogue line"}.`;
  }, [intent, presetApplication, presetMaterial]);

  const [error, setError] = useState("");
  const [mailtoHref, setMailtoHref] = useState("");
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCopied(false);
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const organisation = String(form.get("organisation") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const application = String(form.get("application") ?? "").trim();
    const material = String(form.get("material") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Name, email, and message are required.");
      setMailtoHref("");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address so the company can reply.");
      setMailtoHref("");
      return;
    }

    const product = products.find((item) => item.slug === application);
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : "",
      phone ? `Phone: ${phone}` : "",
      product ? `Application: ${product.name}` : "",
      material ? `Material: ${material}` : "",
      "",
      message,
    ].filter((line, index, all) => line !== "" || all[index - 1] !== "");

    const text = lines.join("\n");
    const subject = `${copy.title}${product ? ` — ${product.name}` : ""}${material ? ` — ${material}` : ""}`;
    const href = `mailto:${company.emails.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

    setError("");
    setSummary(text);
    setMailtoHref(href);
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(
        `To: ${company.emails.join(", ")}\n\n${summary}`,
      );
      setCopied(true);
    } catch {
      setCopied(false);
      setError("Copy was blocked by the browser. Select the enquiry text instead.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="border border-outline p-6 md:p-10 bg-white space-y-6 relative">
      <div className="flex items-center gap-3 pb-6 border-b border-outline-variant">
        <span className="material-symbols-outlined text-primary">assignment</span>
        <span className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
          {copy.title}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field id={`${idPrefix}-name`} label="Name" required>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </Field>
        <Field id={`${idPrefix}-email`} label="Email" required>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field id={`${idPrefix}-org`} label="Organisation">
          <input
            id={`${idPrefix}-org`}
            name="organisation"
            type="text"
            autoComplete="organization"
            className={inputClass}
          />
        </Field>
        <Field id={`${idPrefix}-phone`} label="Phone">
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </Field>
      </div>

      <Field id={`${idPrefix}-application`} label="Application line">
        <select
          id={`${idPrefix}-application`}
          name="application"
          defaultValue={presetApplication}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="">Select a line</option>
          {products.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.name}
            </option>
          ))}
        </select>
      </Field>

      <Field id={`${idPrefix}-material`} label="Material">
        <input
          id={`${idPrefix}-material`}
          name="material"
          type="text"
          defaultValue={presetMaterial}
          className={inputClass}
        />
      </Field>

      <Field id={`${idPrefix}-message`} label="Message" required>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={5}
          defaultValue={defaultMessage}
          className="border border-outline outline-none focus:border-primary p-3 font-label text-sm bg-transparent transition-colors resize-none"
        />
      </Field>

      {error && (
        <p className="font-label text-xs uppercase tracking-[0.08em] text-error" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-primary text-on-primary py-4 font-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-primary-container transition-colors cursor-pointer"
      >
        {copy.submit}
      </button>

      <p className="font-body text-sm text-on-surface-variant leading-relaxed">
        Preparing the enquiry keeps it on this page so you can copy it. Open email only when you are ready to send it to {company.emails.join(" and ")}. This website does not store the form.
      </p>

      {mailtoHref && (
        <div className="border border-outline-variant bg-surface-container-low p-4 space-y-4">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-primary">
            Enquiry ready
          </p>
          <pre className="font-body text-sm text-on-surface whitespace-pre-wrap">{summary}</pre>
          <div className="flex flex-wrap gap-3">
            <a
              href={mailtoHref}
              className="bg-primary text-on-primary px-4 py-3 font-label text-xs font-semibold uppercase tracking-[0.08em]"
            >
              Open email
            </a>
            <button
              type="button"
              onClick={copySummary}
              className="border border-primary text-primary px-4 py-3 font-label text-xs font-semibold uppercase tracking-[0.08em] cursor-pointer"
            >
              {copied ? "Copied" : "Copy enquiry"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

const inputClass =
  "border-b border-outline outline-none focus:border-primary py-2 font-label text-sm bg-transparent transition-colors w-full";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-label text-xs font-semibold uppercase tracking-[0.08em] text-outline">
        {label}
        {required ? " *" : ""}
      </label>
      {children}
    </div>
  );
}
