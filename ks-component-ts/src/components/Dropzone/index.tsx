import React, { type FunctionComponent } from "react";
import type { DropzoneProps } from "./types";
import { Icon, Text } from "@kanda-libs/ks-design-library";
import useDropzoneProps from "./useDropzoneProps";
import DropzoneContext from "./DropzoneContext";
import { ICON_PROPS } from "./constants";

const Dropzone: FunctionComponent<DropzoneProps> = function ({
  className = "flex flex-1 w-full",
  children = null,
  accept = ["application/pdf"],
  icon = "file-upload",
  text = "Drop PDF to upload as a new quote",
  ...dropzoneOptions
}) {
  const { classNames, droppedFiles, parentDropZone, innerDropZone } =
    useDropzoneProps({
      accept: accept,
      ...dropzoneOptions,
    });

  return (
    <DropzoneContext.Provider value={{ droppedFiles: [droppedFiles] }}>
      <div {...parentDropZone.getRootProps()} className={className}>
        <input {...parentDropZone.getInputProps()} />
        {children}
        <div className={classNames.container}>
          <div className={classNames.content} {...innerDropZone.getRootProps()}>
            <input {...innerDropZone.getInputProps()} />
            <Icon icon={icon} {...ICON_PROPS} />
            <Text text={text as string} className={classNames.text} />
          </div>
        </div>
      </div>
    </DropzoneContext.Provider>
  );
};

export default Dropzone;
