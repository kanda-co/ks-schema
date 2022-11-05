import type { FieldFormControllerProps } from "~/field/components/FieldFormController";
import type { FileCardFile } from "~/field/components/FileInput/FileCard/types";
import type { Accept } from "react-dropzone";
import type { FileCardFileProgress } from "~/field/components/FileInput/FileCard/types";

export type FileInputProps = FieldFormControllerProps<{
  /**
   * array of MIME types that fileInput accepts
   */
  accept?: Accept;
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
  resolveFile?: (file: FileCardFile) => FileCardFile;
  defaultValue?: string;
  onAddFiles?: (files: File[]) => void;
  onUpdateFiles?: (files: File[]) => void;
  onRemoveFile?: (file: File) => void;
  cropImage?: boolean;
  asBase64?: string;
  inputFile?: File;
  compressImages?: boolean;
  placeholder?: string;
  fileProgress?: FileCardFileProgress;
  loadingFiles?: string[];
  small?: boolean;
  hasLabel?: boolean;
  centerPlaceholder?: boolean;
  jobPdfInput?: boolean;
}>;

export type FileInputPropsHookArgs = Omit<FileInputProps, "children">;
