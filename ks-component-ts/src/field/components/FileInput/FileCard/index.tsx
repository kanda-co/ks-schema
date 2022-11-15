import React, { type FunctionComponent } from "react";
import type { FileCardProps } from "./types";
import { Icon } from "@kanda-libs/ks-design-library";
import useFileCardProps from "./useFileCardProps";

const FileCard: FunctionComponent<FileCardProps> = function ({
  file,
  fileProgress,
  loadingFiles,
  onRemove,
  small = false,
  hasLabel = true,
}) {
  const { classNames, icons, imageUrl, progress, width } = useFileCardProps({
    file,
    fileProgress,
    loadingFiles,
    small,
    hasLabel,
  });

  return (
    <div className="mt-3 w-full flex flex-1">
      <div className={classNames.wrapper}>
        <div className="w-full flex flex-1 bg-neutral-000">
          {progress !== undefined && (
            <div
              className={classNames.progress}
              style={{
                width,
              }}
            />
          )}
          <span className={classNames.container}>
            <span className="w-full flex flex-1 break-all">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={file.name}
                  className={classNames.image}
                />
              ) : (
                <React.Fragment>
                  <Icon {...icons.document} />
                  {file.name}
                </React.Fragment>
              )}
            </span>
            {progress !== undefined ? (
              <Icon {...icons.progress} />
            ) : (
              <button
                type="button"
                onClick={onRemove}
                className={classNames.button}
              >
                <Icon {...icons.delete} />
              </button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FileCard;
