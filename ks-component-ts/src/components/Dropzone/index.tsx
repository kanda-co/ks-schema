import React, { type FunctionComponent } from "react";
import type { DropzoneProps } from "./types";
import type { Accept } from "react-dropzone";
import { Icon, Text } from "@kanda-libs/ks-design-library";
import useDropzoneProps from "./useDropzoneProps";
import Context from "./Context";
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
      accept: accept as Accept,
      ...dropzoneOptions,
    });

  return (
    <Context.Provider value={{ droppedFiles: [droppedFiles] }}>
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
    </Context.Provider>
  );
};

export default Dropzone;
