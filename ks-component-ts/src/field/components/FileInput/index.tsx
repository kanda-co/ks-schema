import React, { FunctionComponent } from "react";
import type { FileInputProps } from "./types";
import useFileInputProps from "~/field/components/FileInput/useFileInputProps";
import Cropper from "./Cropper";
import DropZoneCard from "./DropZoneCard";
import JobPdfFileCard from "~/field/components/FileInput/JobPdfFileCard";
import FileCard from "~/field/components/FileInput/FileCard";

const FileInput: FunctionComponent<FileInputProps> = function ({
  name,
  isLoading,
  placeholder,
  fileProgress,
  loadingFiles,
  small,
  hasLabel,
  centerPlaceholder,
  jobPdfInput,
  ...hookProps
}) {
  const {
    getRootProps,
    getInputProps,
    files,
    isDragActive,
    makeRemoveFile,
    showFileZone,
    cropFile,
    onCrop,
    onCancelCrop,
    fileError,
    compressing,
  } = useFileInputProps({ name, ...hookProps });

  const CardTag = jobPdfInput ? JobPdfFileCard : FileCard;

  return (
    <div className="flex flex-col w-full -mt-3">
      <Cropper
        name={name}
        file={cropFile}
        onCrop={onCrop}
        onCancelCrop={onCancelCrop}
      />
      {showFileZone && (
        <DropZoneCard
          isDragActive={isDragActive}
          placeholder={placeholder}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          name={name}
          isLoading={isLoading}
          small={small}
          hasLabel={hasLabel}
          centerPlaceholder={centerPlaceholder}
          fileError={fileError}
          jobPdfInput={jobPdfInput}
          compressing={compressing}
        />
      )}
      {files.map((file, index) => (
        <CardTag
          file={file}
          key={file.name}
          onRemove={makeRemoveFile(index)}
          loadingFiles={loadingFiles}
          fileProgress={fileProgress}
          small={small}
          hasLabel={hasLabel}
        />
      ))}
    </div>
  );
};

export default FileInput;
