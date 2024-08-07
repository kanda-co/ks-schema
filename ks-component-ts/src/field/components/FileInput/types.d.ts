import type { FieldFormControllerProps } from "~/field/components/FieldFormController";
import type { FileCardFile } from "~/field/components/FileInput/FileCard/types";
import type { FileCardFileProgress } from "~/field/components/FileInput/FileCard/types";

export type FileInputUncontrolledProps = Omit<
  FieldFormControllerProps<{
    /**
     * array of MIME types that fileInput accepts
     */
    accept?: string | string[];
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
    asBase64?: boolean;
    inputFile?: File;
    compressImages?: boolean;
    placeholder?: string | JSX.Element;
    fileProgress?: FileCardFileProgress;
    loadingFiles?: string[];
    small?: boolean;
    hasLabel?: boolean;
    label?: string | JSX.Element | JSX.Element[];
    centerPlaceholder?: boolean;
    jobPdfInput?: boolean;
  }>,
  "children"
>;

export type FileInputPropsHookArgs = Omit<
  FileInputUncontrolledProps,
  "children"
>;
