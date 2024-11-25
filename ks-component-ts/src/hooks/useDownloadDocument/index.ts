import { useToast } from "@kanda-libs/ks-design-library";
import { services, useSubmit } from "@kanda-libs/ks-frontend-services";
import { useCallback } from "react";
import { downloadBase64 } from "../../helpers";
import { GetDocumentRequestFunction } from "~/generated/operations/getDocument";

export interface DownloadDocumentHook {
  downloadDocument: (id: string) => void;
  isSubmitting: boolean;
}

export default function useDownloadDocument(): DownloadDocumentHook {
  const service = {
    key: services.document.getDocument.key,
    method: (
      services.document.getDocument
        .method as unknown as () => GetDocumentRequestFunction
    )(),
  };

  const { submit: getDocument, isSubmitting = false } = useSubmit(service);

  const { showError } = useToast();

  const downloadDocument = useCallback(
    (id: string) => {
      getDocument({ params: { id } }).then(
        ({ data: documentData, error: documentError }) => {
          if (documentError) {
            showError("Error fetching PDF");
            return;
          }
          if (!documentData?.content) {
            showError("Error fetching PDF");
            return;
          }
          downloadBase64(documentData);
        }
      );
    },
    [getDocument, showError]
  );

  return {
    downloadDocument,
    isSubmitting,
  };
}
