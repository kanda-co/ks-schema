import type { MouseEvent } from "react";
import { StringIndexedObject } from "~/types";
import type { IconProps } from "@kanda-libs/ks-design-library";

export type FileCardFileProgress = StringIndexedObject<(value: number) => void>;

export interface FileCardFile {
  name?: string;
  preview?: string;
  type?: string;
  content?: string;
}

export interface FileCardIcons {
  document: IconProps;
  progress: IconProps;
  delete: IconProps;
}

export interface FileCardPropsHook {
  classNames: {
    wrapper: string;
    image: string;
    progress: string;
    button: string;
    container: string;
  };
  icons: FileCardIcons;
  imageUrl?: string;
  progress?: number;
  width: string;
}

export interface FileCardProps {
  file: FileCardFile;
  loadingFiles?: string[];
  fileProgress?: FileCardFileProgress;
  onRemove?: (e: MouseEvent) => void;
  small?: boolean;
  hasLabel?: boolean;
}

export type FileCardPropsHookArgs = Omit<FileCardProps, "onRemove">;
