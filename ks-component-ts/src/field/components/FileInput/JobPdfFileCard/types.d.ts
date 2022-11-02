import type { FileCardIcons, FileCardPropsHookArgs } from "../FileCard/types";

export type JobPdfFileCardPropsHookArgs = FileCardPropsHookArgs;

export interface JobPdfFileCardPropsHook {
  classNames: {
    wrapper: string;
    container: string;
    image: string;
    button: string;
    progress: string;
    bottom: string;
    padding: string;
  };
  icons: FileCardIcons;
  imageUrl?: string;
  progress?: number;
  width: string;
}
