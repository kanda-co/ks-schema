import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useClasses } from "@kanda-libs/ks-design-library";
import { type SelectOption } from "../types";
import useFormTheme from "~/hooks/useFormTheme";
import { StringIndexedObject } from "~/types";
import { DEFAULT_VALUE, CLASS_NAMES } from "./constants";
import { ValidError } from "~/field/types";

export interface Hook {
  options: SelectOption[];
  currentValue: string;
  defaultValue: string;
  classNames: StringIndexedObject;
  skeletonClasses: string;
}

export default function useSelectUncontrolled(
  name: string,
  placeholder?: string,
  options?: SelectOption[],
  isLoading?: boolean,
  error?: ValidError,
  className?: string
): Hook {
  const {
    baseClasses,
    inputClasses,
    paddingClasses,
    focusClasses,
    makeErrorClasses,
    skeletonClasses,
  } = useFormTheme();

  const { trigger } = useFormContext();

  const value = useWatch({
    name,
  });

  useEffect(() => {
    if (value) {
      trigger(name);
    }
  }, [value, trigger, name]);

  const formattedOptions = placeholder
    ? [{ name: placeholder, value: DEFAULT_VALUE }, ...(options || [])]
    : options;

  const defaultValue = DEFAULT_VALUE;

  const classNames = useClasses(CLASS_NAMES, {
    select: [
      baseClasses,
      inputClasses,
      paddingClasses,
      focusClasses,
      makeErrorClasses(error as string),
      !isLoading && ".baseSelect",
      className,
    ],
    skeleton: [skeletonClasses],
  });

  const currentValue =
    typeof value !== "undefined" ? String(value) : defaultValue;

  return {
    options: formattedOptions as SelectOption[],
    currentValue,
    defaultValue,
    classNames,
    skeletonClasses,
  };
}
