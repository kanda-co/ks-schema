import { FunctionComponent, useCallback, FormEvent } from "react";
import {
  Control,
  FieldValues,
  useFormContext,
  UseFormRegisterReturn,
  useFormState,
} from "react-hook-form";
import { getError } from "~/field/helpers";
import type {
  ExtendedRegisterReturn,
  FieldFormControllerChildrenArgs,
  FieldFormControllerCommonArgs,
  FieldFormControllerOptions,
} from "./types";
import type { StringIndexedObject } from "~/types";
import type {
  ErrorMessage,
  ValidationConditions,
  ValidationErrors,
} from "~/field/types";

export type FieldFormControllerProps<T> = {
  register?: UseFormRegisterReturn;
  passRegister?: boolean;
  control?: boolean & Control<FieldValues, any>;
  onBlur?: (...event: any[]) => void;
  onChange?: (...event: any[]) => void;
  validationConditions?: ValidationConditions;
  validationErrors?: ValidationErrors;
  children: (args: FieldFormControllerChildrenArgs<T>) => JSX.Element;
  valueAsNumber?: boolean;
} & FieldFormControllerCommonArgs &
  T;

export type FieldFormControllerComponent<T = any> = FunctionComponent<
  FieldFormControllerProps<T>
>;

const FieldFormController: FieldFormControllerComponent = function ({
  name,
  register,
  validation,
  passRegister,
  control,
  isLoading: fieldIsLoading,
  error: fieldError,
  onBlur,
  onChange,
  validationConditions,
  validationErrors,
  children,
  valueAsNumber = false,
  ...restProps
}) {
  // TODO: Change form context to allow isLoading. Requires:
  // - Extend FormProvider
  // - Extend useFormContext
  const {
    register: formRegister,
    control: formControl,
    // isLoading: formIsLoading,
  } = useFormContext();
  const formIsLoading = false;

  const { errors } = useFormState({ name });

  /**
   * extends register to support on blur on field level
   * @param {String} name
   * @param {Object} options
   * @returns {Object} props
   */
  const extendedRegister = useCallback(
    (
      fieldName: string,
      options: FieldFormControllerOptions
    ): ExtendedRegisterReturn => {
      const registerProps = formRegister(fieldName, {
        ...validationConditions,
        valueAsNumber,
      });

      /**
       * extends on blur function
       */
      const extendOnBlur = (e: FormEvent<HTMLInputElement>) => {
        if (options.onBlur) {
          options.onBlur(e);
        }

        return registerProps.onBlur(e);
      };

      /**
       * extends on blur function
       */
      const extendOnChange = (e: FormEvent<HTMLInputElement>) => {
        if (options.onChange) {
          options.onChange(e);
        }

        return registerProps.onChange(e);
      };

      const onBlur = options?.onBlur ? extendOnBlur : registerProps.onBlur;
      const onChange = options?.onChange
        ? extendOnChange
        : registerProps.onChange;

      return { ...registerProps, onBlur, onChange };
    },
    [formRegister, validationConditions]
  );

  const error = getError(
    fieldError,
    errors as StringIndexedObject<ErrorMessage>,
    validationErrors,
    name
  );

  const isLoading = formIsLoading || fieldIsLoading;
  const validationProps = {
    validation,
    validationErrors,
    validationConditions,
  };

  return children({
    name,
    error,
    isLoading,
    ...(passRegister && {
      register: extendedRegister,
      onBlur,
    }),
    ...(register &&
      extendedRegister(name, {
        onBlur: onBlur || null,
        onChange: onChange || null,
        shouldUnregister: true,
      })),
    ...(control && { control: formControl }),
    ...restProps,
    ...validationProps,
  });
};

export default FieldFormController;
