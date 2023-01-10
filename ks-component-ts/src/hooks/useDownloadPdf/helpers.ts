import type { Job } from "@kanda-libs/ks-frontend-services";
import type { Document } from "~/generated/components/schemas";

export function downloadBase64(pdf: Document): void {
  const source = `data:application/pdf;base64,${pdf?.content}`;

  const name = pdf?.name || `quote-${pdf?.id || "copy"}.pdf`;

  const downloadLink = document.createElement("a");
  downloadLink.href = source;
  downloadLink.download = name;
  downloadLink.click();
}

export const isJobCustom = (jobItems: Job["job_items"]): boolean => {
  if (jobItems.length > 1) return false;

  const { style } = jobItems[0];

  if (style === "custom") return true;

  return false;
};
