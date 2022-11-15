import { useClasses } from "@kanda-libs/ks-design-library";
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

interface ClassNames {
  container: string;
  content: string;
}

interface Hook {
  classNames: ClassNames;
  errorText: string | undefined;
}

export default function useDefaultFieldInfo(
  error: DefaultWrapperContainerProps["error"],
  isLoading: DefaultWrapperContainerProps["isLoading"],
  className: DefaultWrapperContainerProps["className"],
  autoWidth: DefaultWrapperContainerProps["autoWidth"],
  wrapperClassName?: string
): Hook {
  const { wrapperClasses } = useFormTheme();

  const baseClasses: BaseClasses = { ...CLASS_NAMES, ...wrapperClasses };

  const width = autoWidth ? "w-auto" : "w-full";

  const classNames = useClasses(baseClasses, {
    container: [
      ".baseContainer",
      "field-wrapper",
      error && "field-error",
      isLoading && "field-loading",
      className,
      width,
      wrapperClassName,
    ],
    content: [".baseContent", width],
  });

  const errorText = typeof error === "string" ? error : error?.message;

  return {
    classNames: classNames as ClassNames,
    errorText,
  };
}
