import {
  type ForwardRefExoticComponent,
  type FunctionComponent,
  type MutableRefObject,
  type PropsWithoutRef,
  type RefAttributes,
} from "react";
import {
  type Control,
  type ControllerProps,
  RegisterOptions,
  type UseControllerProps,
  UseFormRegisterReturn,
} from "react-hook-form";
import { StringIndexedObject } from "~/types";

export interface ErrorMessage {
  type?: string;
  message: string;
}

interface DefaultWrapperContainerProps {
  children?: JSX.Element | JSX.Element[];
  error?: ErrorMessage | string;
  className?: string;
  isLoading?: boolean;
  autoWidth?: boolean;
}

export interface WarningProps {
  warning?: string | JSX.Element | JSX.Element[] | null;
}

export interface LabelProps {
  id?: string;
  label?: string | JSX.Element | JSX.Element[];
  helperText?: string | JSX.Element | JSX.Element[];
  isLoading?: boolean;
  autoWidth?: boolean;
}

export interface LabelContainerProps
  extends Omit<LabelProps, "id" | "isLoading"> {
  children: Function;
}

export interface FieldInfoWrapperProps
  extends DefaultWrapperContainerProps,
    LabelProps,
    WarningProps {
  prepend?: JSX.Element | JSX.Element[];
  append?: JSX.Element | JSX.Element[];
  name?: string;
}

export type ValidError = string | ErrorMessage | undefined;

/**
 * Shared props that all field components will have
 */
export type DefaultFormFieldProps<T> = {
  name?: string;
  id?: string;
  placeholder?: string;
  defaultValue?: string;
  ref?: MutableRefObject<any>;
  forwardRef?: MutableRefObject<any>;
  onChange?: () => void;
  onBlur?: () => void;
  error?: ValidError;
  isLoading?: boolean;
} & T;

export type WrappedWithFieldInfoFormComponentProps<T> = DefaultFormFieldProps<
  T & FieldInfoWrapperProps
>;

export type WrappedWithFieldInfoFormComponent<T> = FunctionComponent<
  WrappedWithFieldInfoFormComponentProps<T>
>;

export type InputFunctionComponent<T = StringIndexedObject> = FunctionComponent<
  DefaultFormFieldProps<T>
>;

export type WrappedFormComponentRestProps<T> = DefaultFormFieldProps<T>;

export type ExtendControllerProps = {
  /**
   * react hook form control
   */
  control?: Control;
  /**
   * react hook form control props
   */
  controlProps?: ControllerProps;
  /**
   * Validation rules
   */
  rules?: UseControllerProps["rules"];
};

export type FieldRegisterMethod = (
  fieldName: string,
  options?: RegisterOptions
) => UseFormRegisterReturn;

export type ValidationValue = boolean | string | number | RegExp;

export type ValidationError = string | StringIndexedObject<string>;

export interface ValidationItem {
  value: ValidationValue;
  message: ValidationError;
}

export type ValidationConditions = StringIndexedObject<ValidationValue>;

export type ValidationErrors = StringIndexedObject<ValidationError>;

export type ValidationItems = StringIndexedObject<ValidationItem>;

export interface ValidationProps {
  validationConditions?: ValidationConditions;
  validationErrors?: ValidationErrors;
}

export type ValidatedFieldProps<T> = T & {
  validation?: ValidationItems;
  nested?: boolean;
};
