import { useDropzone, type DropzoneState } from "react-dropzone";
import { StringIndexedObject } from "~/types";
import { useCallback, useState } from "react";
import { useClasses } from "@kanda-libs/ks-design-library";
import { DropzoneProps } from "~/components/Dropzone/types";
import { CLASS_NAMES } from "./constants";

export type DropzonePropsHookArgs = Omit<DropzoneProps, "children">;

export interface DropzonePropsHook {
  classNames: StringIndexedObject;
  parentDropZone: Omit<DropzoneState, "isDragAccept">;
  innerDropZone: DropzoneState;
  droppedFiles: File[];
}

export default function useDropzoneProps({
  accept,
  ...dropzoneOptions
}: DropzonePropsHookArgs): DropzonePropsHook {
  const [droppedFIles, setDroppedFiles] = useState<File[] | undefined>(
    undefined
  );

  const { onDrop: onDropProp } = dropzoneOptions;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setDroppedFiles(acceptedFiles);

      onDropProp?.(acceptedFiles);
    },
    [onDropProp]
  );

  const { isDragAccept, ...parentDropZone } = useDropzone({
    accept,
    noClick: true,
    noKeyboard: true,
    ...dropzoneOptions,
    onDrop,
  });

  const innerDropZone = useDropzone({
    accept,
    noClick: true,
    noKeyboard: true,
  });

  const classNames = useClasses(CLASS_NAMES, {
    variants: {
      isDragAccept,
    },
  });

  return {
    classNames,
    parentDropZone,
    innerDropZone,
    droppedFiles: droppedFIles || [],
  };
}
