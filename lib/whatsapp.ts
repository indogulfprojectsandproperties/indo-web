import { COMPANY } from "./company";

export interface WhatsAppField {
  label: string;
  value: string | number | boolean | undefined | null;
}

/**
 * Builds a clean, professional, readable WhatsApp message string.
 */
export function buildMessage(
  formName: string,
  fields: Record<string, string | number | boolean | undefined | null> | WhatsAppField[]
): string {
  const lines: string[] = [
    `*New Enquiry - INDO GULF*`,
    `📋 *Subject / Source:* ${formName}`,
    `--------------------------------`,
  ];

  if (Array.isArray(fields)) {
    for (const item of fields) {
      if (item.value !== undefined && item.value !== null && String(item.value).trim() !== "") {
        lines.push(`• *${item.label}:* ${String(item.value).trim()}`);
      }
    }
  } else {
    for (const [key, rawVal] of Object.entries(fields)) {
      if (rawVal !== undefined && rawVal !== null && String(rawVal).trim() !== "") {
        // Format key from camelCase / snake_case to Title Case
        const label = key
          .replace(/([A-Z])/g, " $1")
          .replace(/[_-]/g, " ")
          .replace(/^\w/, (c) => c.toUpperCase())
          .trim();
        lines.push(`• *${label}:* ${String(rawVal).trim()}`);
      }
    }
  }

  lines.push(`--------------------------------`);
  lines.push(`_Sent via ind-ogulf.com_`);

  return lines.join("\n");
}

/**
 * Generates the direct WhatsApp click URL.
 */
export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encoded}`;
}

/**
 * Attempts to open WhatsApp in a new tab, returning the generated URL.
 */
export function openWhatsApp(message: string): { url: string; opened: boolean } {
  const url = getWhatsAppUrl(message);
  let opened = false;
  if (typeof window !== "undefined") {
    try {
      const win = window.open(url, "_blank", "noopener,noreferrer");
      if (win) {
        opened = true;
      }
    } catch {
      opened = false;
    }
  }
  return { url, opened };
}
