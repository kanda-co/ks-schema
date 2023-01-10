import type { Document } from "~/generated/components/schemas";

export function downloadBase64(pdf: Document): void {
  const source = `data:application/pdf;base64,${pdf?.content}`;

  const name = pdf?.name || `quote-${pdf?.id || "copy"}.pdf`;

  const downloadLink = document.createElement("a");
  downloadLink.href = source;
  downloadLink.download = name;
  downloadLink.click();
}
