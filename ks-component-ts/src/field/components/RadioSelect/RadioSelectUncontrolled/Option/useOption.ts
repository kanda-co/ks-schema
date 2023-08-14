import {
  useFormContext,
  UseFormRegisterReturn,
  useWatch,
} from "react-hook-form";
import { useClasses } from "@kanda-libs/ks-design-library";
import { HandleComponent } from "~/components/Handle/types";
import useFormTheme from "~/hooks/useFormTheme";
import { RadioSelectVariant } from "~/field/components/RadioSelect/types";
import { FieldRegisterMethod } from "~/field/types";
import { CLASS_NAMES_MULTIPLE, VARIANTS } from "./constants";
import Handle from "~/components/Handle";
import { StringIndexedObject } from "~/types";
import { useEffect } from "react";

export interface Hook {
  id: string;
  classNames: StringIndexedObject<string | StringIndexedObject<string>>;
  handleProps: UseFormRegisterReturn;
  Handle: HandleComponent;
}

export default function useOption(
  multiple: boolean,
  fieldName: string,
  optionValue: string,
  variantName: RadioSelectVariant,
  inline: boolean,
  wrap: boolean,
  register: FieldRegisterMethod | null = null,
  disabled?: boolean,
  warning?: boolean
): Hook {
  const { skeletonClasses } = useFormTheme();

  /**
   * Get current value from react hook forms
   */
  const fieldValue = useWatch({ name: fieldName });

  const { setValue } = useFormContext();

  /**
   * Checks if option is selected
   */
  const isSelected =
    `${fieldValue}` === `${optionValue}` ||
    (Array.isArray(fieldValue) && fieldValue.includes(optionValue));

  /**
   * get styles from constats depending on if the field is multiple or single select
   */
  const variant = multiple ? CLASS_NAMES_MULTIPLE : VARIANTS[variantName];

  const optionFlex = inline ? ".inline.option" : ".multiline.option";

  const defaultSelectedPrefix = isSelected ? "selected" : "notSelected";
  const warningPrefix = isSelected ? "warning" : "warningNotSelected";

  const selectedPrefix = warning ? warningPrefix : defaultSelectedPrefix;

  const classNames = useClasses(variant, {
    option: [
      optionFlex,
      wrap && "mt-2 ml-2",
      disabled && variant?.disabled?.option
        ? `.disabled.option`
        : `.${selectedPrefix}.option`,
      ,
    ],
    container: [
      disabled && variant?.disabled?.container
        ? `.disabled.container`
        : `.${selectedPrefix}.container`,
      ,
    ],
    skeleton: [
      variant?.skeleton ? `.${selectedPrefix}.skeleton` : skeletonClasses,
    ],
  });

  /**
   * return appropriet handle type depending if field is multiselect or not
   */
  const handle = multiple ? Handle.RadioCheck : Handle.RadioButton;

  /**
   * return appropriate handle type depending if field is multiselect or not
   */
  const id = `${fieldName}-${optionValue}`;

  /**
   * return input props from react hook forms
   */
  const handleProps = register ? register(fieldName, {}) : {};

  useEffect(() => {
    if (!disabled) return;
    if (fieldValue !== optionValue) return;
    if (multiple) {
      const newArray = [...fieldValue].filter(
        (value: string) => value !== optionValue
      );
      setValue(fieldName, newArray);
      return;
    }
    setValue(fieldName, undefined);
  }, [disabled, multiple, optionValue, fieldValue, setValue, fieldName]);

  return {
    id,
    classNames,
    handleProps: handleProps as UseFormRegisterReturn,
    Handle: handle,
  };
}
