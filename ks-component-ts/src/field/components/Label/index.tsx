import React, { type FunctionComponent } from "react";
import { Text, SkeletonLoader } from "@kanda-libs/ks-design-library";
import { LabelProps } from "~/field/types";
import { LABEL_SKELETON } from "~/field/components/Label/constants";
import useLabel, { Hook } from "~/field/components/Label/useLabel";

const Label: FunctionComponent<LabelProps> = function ({
  id,
  label,
  helperText,
  isLoading,
  autoWidth,
  suffixElement,
}) {
  const labelProps = useLabel(label, helperText, autoWidth);

  if (!labelProps) {
    return <></>;
  }

  const {
    classNames,
    skeletonProps,
    helperText: formattedHelperText,
    stringLabel,
    stringHelper,
  } = labelProps as Hook;

  return (
    <div className={classNames.labelContainer}>
      {stringLabel ? (
        <Text
          isLoading={isLoading}
          className={classNames.label}
          skeletonProps={skeletonProps}
          textComponent="label"
          htmlFor={id}
          text={stringLabel}
        />
      ) : (
        <SkeletonLoader
          isLoading={isLoading}
          className={classNames.label}
          {...skeletonProps}
          {...LABEL_SKELETON}
          afterLoading={
            <label className={classNames.label} htmlFor={id}>
              <div className={classNames.labelInnerWrapper}>
                {label}
                {suffixElement}
              </div>
            </label>
          }
        />
      )}
      {stringHelper ? (
        <Text
          isLoading={isLoading}
          className={classNames.helperText}
          text={stringHelper}
        />
      ) : (
        formattedHelperText
      )}
    </div>
  );
};

export default Label;
