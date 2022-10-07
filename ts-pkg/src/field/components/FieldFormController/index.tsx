import { FunctionComponent, useCallback, FormEvent } from "react";
import {
  Control,
  FieldValues,
  useFormContext,
  useFormState,
} from "react-hook-form";
import { getError } from "~/field/helpers";
import {
  ExtendedRegisterReturn,
  FieldFormControllerChildrenArgs,
  FieldFormControllerCommonArgs,
  FieldFormControllerOptions,
} from "./types";
import { StringIndexedObject } from "~/types";
import { ErrorMessage, ValidationConditions } from "~/field/types";

export type FieldFormControllerProps<T> = {
  register?: boolean;
  passRegister?: boolean;
  control?: boolean & Control<FieldValues, any>;
  onBlur?: (...event: any[]) => void;
  onChange?: (...event: any[]) => void;
  validationConditions?: ValidationConditions;
  validationErrors?: ValidationConditions;
  children: (args: FieldFormControllerChildrenArgs<T>) => JSX.Element;
} & FieldFormControllerCommonArgs &
  T;

export type FieldFormControllerComponent<T = any> = FunctionComponent<
  FieldFormControllerProps<T>
>;

const FieldFormController: FieldFormControllerComponent = function ({
  name,
  register,
  passRegister,
  control,
  isLoading: fieldIsLoading,
  error: fieldError,
  onBlur,
  onChange,
  validationConditions,
  validationErrors,
  children,
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
      const registerProps = formRegister(fieldName, validationConditions);

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

  return children({
    name,
    error,
    isLoading,
    ...(passRegister && {
      register: extendedRegister,
    }),
    ...(register &&
      extendedRegister(name, {
        onBlur: onBlur || null,
        onChange: onChange || null,
        shouldUnregister: true,
      })),
    ...(control && { control: formControl }),
    ...restProps,
  });
};

export default FieldFormController;
