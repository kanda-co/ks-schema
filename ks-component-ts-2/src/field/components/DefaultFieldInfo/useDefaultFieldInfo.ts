import clsx from "clsx";
import useFormTheme from "~/hooks/useFormTheme";
import { DefaultWrapperContainerProps } from "~/field/types";
import { CLASS_NAMES } from "./constants";

interface BaseClasses {
  baseContent?: string;
  baseContainer?: string;
  error?: string;
  warning?: string;
  label?: string;
  helperText?: string;
  labelContainer?: string;
  baseSkeletonWrapper?: string;
}

interface Hook {
  classNames: {
    container: string;
    content: string;
  };
  errorText: string | undefined;
}

export default function useDefaultFieldInfo(
  error: DefaultWrapperContainerProps["error"],
  isLoading: DefaultWrapperContainerProps["isLoading"],
  className: DefaultWrapperContainerProps["className"],
  autoWidth: DefaultWrapperContainerProps["autoWidth"]
): Hook {
  const { wrapperClasses } = useFormTheme();

  const baseClasses: BaseClasses = { ...CLASS_NAMES, ...wrapperClasses };

  const width = autoWidth ? "w-auto" : "w-full";

  const classNames = {
    container: clsx(
      baseClasses.baseContainer,
      "field-wrapper",
      error && "field-error",
      isLoading && "field-loading",
      className,
      width
    ),
    content: clsx(baseClasses.baseContent, width),
  };

  const errorText = typeof error === "string" ? error : error?.message;

  return {
    classNames,
    errorText,
  };
}
