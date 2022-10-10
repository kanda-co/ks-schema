import { UseFormRegisterReturn, useWatch } from "react-hook-form";
import { useClasses } from "@kanda-libs/ks-design-library";
import { HandleComponent } from "~/components/Handle/types";
import useFormTheme from "~/hooks/useFormTheme";
import { RadioSelectVariant } from "~/field/components/RadioSelect/types";
import { FieldRegisterMethod } from "~/field/types";
import { CLASS_NAMES_MULTIPLE, VARIANTS } from "./constants";
import Handle from "~/components/Handle";
import { StringIndexedObject } from "~/types";

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
  register: FieldRegisterMethod | null = null
): Hook {
  const { skeletonClasses } = useFormTheme();

  /**
   * Get current value from react hook forms
   */
  const fieldValue = useWatch({ name: fieldName });

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

  const selectedPrefix = isSelected ? "selected" : "notSelected";

  const classNames = useClasses(variant, {
    option: [optionFlex, `.${selectedPrefix}.option`],
    container: [`.${selectedPrefix}.container`],
    skeleton: [skeletonClasses],
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

  return {
    id,
    classNames,
    handleProps: handleProps as UseFormRegisterReturn,
    Handle: handle,
  };
}
