import { useQuoteDownload } from "@kanda-libs/kanda-quotes";
import { useToast } from "@kanda-libs/ks-design-library";
import {
  type Job,
  services,
  useSubmit,
} from "@kanda-libs/ks-frontend-services";
import { useCallback, useState } from "react";
import { isJobCustom } from "./helpers";
import { downloadBase64 } from "../../helpers";

export interface DownloadPdfHook {
  downloadPdf: (id: string) => void;
  isSubmitting: boolean;
}

export default function useDownloadPdf(): DownloadPdfHook {
  const { submit: getJob } = useSubmit(services.job.getJob);
  const { submit: getDocument } = useSubmit(services.document.getDocument);
  const { submit: jobCompanyInfo } = useSubmit(services.job.jobCompanyInfo);

  const { showError } = useToast();
  const { createPdf } = useQuoteDownload();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const customDownload = useCallback(
    (job: Job) => {
      const id = job?.job_items[0]?.quote_document?.id;
      if (!id) {
        setIsSubmitting(false);
        showError("No PDF attached to this job");
        return;
      }
      getDocument({ params: { id } }).then(
        ({ data: pdfDoc, error: pdfDocError }) => {
          setIsSubmitting(false);
          if (pdfDocError) {
            showError("Error fetching PDF");
            return;
          }
          if (!pdfDoc?.content) {
            showError("Error fetching PDF");
            return;
          }
          downloadBase64(pdfDoc);
        }
      );
    },
    [getDocument, showError]
  );

  const kandaDownload = useCallback(
    (job) => {
      const { id } = job;
      jobCompanyInfo({ params: { id } }).then(
        ({ data: companyInfo, error: companyError }) => {
          setIsSubmitting(false);
          if (companyError) {
            showError(
              "Error generating PDF at this time - please try again later"
            );
            return;
          }
          createPdf(job, companyInfo);
        }
      );
    },
    [jobCompanyInfo, createPdf, showError]
  );

  const downloadPdf = useCallback(
    (id: string) => {
      setIsSubmitting(true);
      getJob({ params: { id } }).then(({ data: job, error: jobError }) => {
        if (jobError) {
          setIsSubmitting(false);
          showError("Error downloading job");
          return;
        }
        const items = job?.job_items;
        if (!items || items?.length === 0) {
          setIsSubmitting(false);
          showError("Error downloading job");
          return;
        }
        const custom = isJobCustom(items);
        if (custom) {
          customDownload(job);
          return;
        }
        kandaDownload(job);
      });
    },
    [getJob, showError, customDownload, kandaDownload]
  );

  return {
    downloadPdf,
    isSubmitting,
  };
}
