import type { FieldFormControllerProps } from "~/field/components/FieldFormController";
import { FileCardFile } from "~/field/components/FileInput/FileCard/types";

export type FileInputProps = FieldFormControllerProps<{
  /**
   * array of MIME types that fileInput accepts
   */
  accept?: string[];
  /**
   * maximum number of files
   */
  maxFiles?: number;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Maximum file size
   */
  maxSize?: number;
  resolveFile?: (file: File) => Promise<FileCardFile>;
  defaultValue?: string;
  onAddFiles?: (files: File[]) => void;
  onUpdateFiles?: (files: File[]) => void;
  onRemoveFile?: (file: File) => void;
  cropImage?: boolean;
  asBase64?: string;
  inputFile?: File;
  compressImages?: boolean;
}>;
