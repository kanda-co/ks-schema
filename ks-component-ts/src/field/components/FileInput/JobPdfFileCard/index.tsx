import React, { type FunctionComponent, type SVGProps } from "react";
import { Button, Icon } from "@kanda-libs/ks-design-library";
import type { FileCardProps } from "../FileCard/types";
import useJobPdfFileCardProps from "./useJobPdfFileCardProps";
import { default as JobPDF } from "../../../../assets/job-pdf.svg";

export type JobPdfFileCardProps = FileCardProps;

const JobPdfFileCard: FunctionComponent<JobPdfFileCardProps> = function ({
  file,
  onRemove,
  loadingFiles,
  fileProgress,
  small = false,
  hasLabel = true,
}) {
  const { classNames, icons, progress, width } = useJobPdfFileCardProps({
    file,
    fileProgress,
    loadingFiles,
    small,
    hasLabel,
  });

  return (
    <div className="mt-3 w-full flex flex-col flex-1">
      <div className={classNames.wrapper}>
        <JobPDF className="mx-auto" />
      </div>
      <div className={classNames.bottom}>
        {progress !== undefined && (
          <div
            className={classNames.progress}
            style={{
              width,
            }}
          />
        )}
        <div className={classNames.padding}>
          <div className="flex flex-row ">
            <Icon {...icons.document} />
            <span className="text-14-22 my-auto">{file.name}</span>
          </div>
          {progress !== undefined ? (
            <React.Fragment>
              <Icon {...icons.progress} />
            </React.Fragment>
          ) : (
            <Button.Icon {...icons.delete} id="pdf-remove" onClick={onRemove} />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPdfFileCard;
