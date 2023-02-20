import { CLASS_NAMES } from "~/field/components/Label/constants";
import { LabelContainerProps } from "~/field/types";
import useFormTheme from "~/hooks/useFormTheme";
import clsx from "clsx";

interface ClassNames {
  skeletonWrapper: string;
  baseContainer?: string | undefined;
  error?: string | undefined;
  warning?: string | undefined;
  label?: string | undefined;
  helperText?: string | undefined;
  labelContainer: string;
  baseSkeletonWrapper: string;
  labelInnerWrapper: string;
}

export interface Hook {
  skeletonProps: any;
  classNames: ClassNames;
  helperText: LabelContainerProps["helperText"];
  stringLabel: string | false;
  stringHelper: string | false;
}

export default function useLabel(
  label: LabelContainerProps["label"],
  helperText: LabelContainerProps["helperText"],
  autoWidth: LabelContainerProps["autoWidth"]
): Hook | null {
  const { wrapperClasses } = useFormTheme();

  const baseClassess = { ...CLASS_NAMES, ...wrapperClasses };

  const width = autoWidth ? "w-full" : "w-1/6";

  const classNames = {
    ...baseClassess,
    skeletonWrapper: clsx(baseClassess?.baseSkeletonWrapper, width),
  };

  const skeletonProps = {
    containerClassName: classNames.skeletonWrapper,
  };

  const formattedHelperText =
    typeof helperText === "string" ? null : helperText;

  const stringLabel = typeof label === "string" && label;

  const stringHelper = typeof helperText === "string" && helperText;

  if (classNames?.label && classNames.label.indexOf("hidden") !== -1)
    return null;

  return {
    skeletonProps,
    classNames,
    helperText: formattedHelperText as string | JSX.Element | JSX.Element[],
    stringLabel,
    stringHelper,
  };
}
