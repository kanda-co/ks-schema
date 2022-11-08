import { useWatch } from "react-hook-form";
import useFormTheme from "~/hooks/useFormTheme";
import { DropDownInputUncontrolledProps } from "~/field/components/DropDownInput/types";
import { useClasses } from "@kanda-libs/ks-design-library";
import { StringIndexedObject } from "~/types";
import { CLASS_NAMES, DEFAULT_VALUE } from "./constants";

export type DropDownInputUncontrolledArgs = Pick<
  DropDownInputUncontrolledProps,
  "options" | "placeholder" | "isLoading" | "error" | "className" | "name"
>;

export interface DropDownInputUncontrolledPropsHook {
  defaultValue: string;
  currentValue: string;
  options: DropDownInputUncontrolledProps["options"];
  classNames: StringIndexedObject;
  skeletonClasses: string;
  selectedLabel?: string;
}

export default function useDropDownInputUncontrolledProps({
  options: initialOptions = [],
  placeholder,
  isLoading,
  error,
  className,
  name,
}: DropDownInputUncontrolledArgs): DropDownInputUncontrolledPropsHook {
  const {
    baseClasses,
    inputClasses,
    paddingClasses,
    focusClasses,
    makeErrorClasses,
    skeletonClasses,
  } = useFormTheme();

  const options = placeholder
    ? [{ name: placeholder, value: DEFAULT_VALUE }, ...initialOptions]
    : initialOptions;

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

  const selected = useWatch({ name: name as string });

  const selectedOption = options.find(({ value }) => value === selected);

  const selectedLabel = selectedOption?.name || placeholder;

  return {
    defaultValue: DEFAULT_VALUE,
    currentValue: selected || DEFAULT_VALUE,
    options,
    classNames,
    skeletonClasses,
    selectedLabel,
  };
}
