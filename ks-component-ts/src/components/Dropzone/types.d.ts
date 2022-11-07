import type { DropEvent, FileRejection } from "react-dropzone";

export interface DropzoneProps {
  children?: JSX.Element | JSX.Element[];
  accept?: string | string[];
  className?: string;
  icon?: string;
  text?: string;
  /**
   * Function that is fired on drop of file
   */
  onDrop?: <T extends File>(
    acceptedFiles: T[],
    fileRejections?: FileRejection[],
    event?: DropEvent
  ) => void;
}
