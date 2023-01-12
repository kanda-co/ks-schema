import type { Job } from "@kanda-libs/ks-frontend-services";

export const isJobCustom = (jobItems: Job["job_items"]): boolean => {
  if (jobItems.length > 1) return false;

  const { style } = jobItems[0];

  if (style === "custom") return true;

  return false;
};
