import { useWatch } from "react-hook-form";
import { useClasses } from "@kanda-libs/ks-design-library";
import type { StringIndexedObject } from "~/types";
import useFormTheme from "~/hooks/useFormTheme";
import { CLASS_NAMES } from "../constants";
import { PhoneNumberInputUncontrolledProps } from "../types";

export type PhoneNumberInputUncontrolledArgs = Omit<
  PhoneNumberInputUncontrolledProps,
  | "id"
  | "placeholder"
  | "countryCodeName"
  | "phoneNumberProps"
  | "forwardRef"
  | "options"
>;

export interface PhoneNumberInputUncontrolledHook {
  classNames: StringIndexedObject;
  skeletonClasses: string;
  code: string;
}

export default function usePhoneNumberInputUncontrolled({
  error,
  className: initialClassName,
  isLoading,
  name,
  defaultValue,
}: PhoneNumberInputUncontrolledArgs): PhoneNumberInputUncontrolledHook {
  const {
    baseClasses,
    inputClasses,
    paddingClasses,
    focusClasses,
    makeErrorClasses,
    skeletonClasses,
    variant,
  } = useFormTheme();

  const classNames = useClasses(CLASS_NAMES, {
    container: [
      baseClasses,
      inputClasses,
      isLoading && paddingClasses,
      focusClasses.replaceAll("focus", "focus-within"),
      makeErrorClasses(error as unknown as string),
      !isLoading && ".container",
      initialClassName,
    ],
    select: [baseClasses, paddingClasses, focusClasses, ".select"],
    code: [paddingClasses, variant === "inline" ? ".inlineCode" : ".code"],
    phoneInput: [baseClasses, paddingClasses, focusClasses, ".phoneInput"],
    selectWrapper: [
      variant === "inline" ? ".selectWrapper.inline" : ".selectWrapper.default",
    ],
  });

  const code = useWatch({ name: name as string, defaultValue });

  return {
    classNames,
    skeletonClasses,
    code,
  };
}
