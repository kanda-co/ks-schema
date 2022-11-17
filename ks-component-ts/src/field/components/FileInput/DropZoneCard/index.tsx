import React, { type FunctionComponent } from "react";
import {
  Icon,
  LoadingSpinner,
  SkeletonLoader,
} from "@kanda-libs/ks-design-library";
import type { DropZoneCardProps } from "./types";
import useDropZoneCardProps from "./useDropZoneCardProps";
import Placeholder from "../Placeholder";

const DropZoneCard: FunctionComponent<DropZoneCardProps> = function ({
  hasLabel = true,
  placeholder,
  isDragActive,
  name,
  isLoading,
  small = false,
  centerPlaceholder = false,
  fileError,
  jobPdfInput = false,
  compressing = false,
  getInputProps,
  getRootProps,
}) {
  const { classNames, icon, skeletonClasses, skeletons } = useDropZoneCardProps(
    {
      isDragActive,
      small,
      hasLabel,
      centerPlaceholder: jobPdfInput ? true : centerPlaceholder,
    }
  );

  return (
    <div
      {...getRootProps()}
      role="button"
      aria-label="File Upload"
      id={name}
      className={classNames.container}
    >
      <SkeletonLoader
        isLoading={isLoading}
        {...skeletons.input}
        afterLoading={
          <input {...getInputProps()} type="file" disabled={compressing} />
        }
      />
      <span className={classNames.span}>
        <div className="flex flex-col flex-1">
          <div className={classNames.center}>
            {compressing ? (
              <div className="flex flex-col">
                <LoadingSpinner stroke="green-500" className="mx-auto mb-3" />
                <p>Processing file</p>
              </div>
            ) : (
              <React.Fragment>
                <SkeletonLoader
                  isLoading={isLoading}
                  {...skeletons.icon}
                  afterLoading={<Icon {...icon} />}
                />
                <SkeletonLoader
                  wrapperClassName={skeletonClasses}
                  isLoading={isLoading}
                  afterLoading={jobPdfInput ? <Placeholder /> : placeholder}
                />
              </React.Fragment>
            )}
          </div>
          {fileError && <span className={classNames.error}>{fileError}</span>}
        </div>
      </span>
    </div>
  );
};

export default DropZoneCard;
