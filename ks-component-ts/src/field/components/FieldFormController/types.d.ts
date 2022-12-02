import { FormEvent } from "react";
import {
  Control,
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
  ControllerProps,
} from "react-hook-form";
import { FieldRegisterMethod, ValidError } from "~/field/types";

export interface FieldFormControllerCommonArgs {
  name?: string;
  isLoading?: boolean;
  error?: ValidError;
}

export interface FieldFormControllerExtraProps<T = any> {
  rules?: Omit<
    RegisterOptions<any, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  controlProps?: ControllerProps<any, string>;
  value?: T;
  onChange?: (value: T) => void;
}

export type FieldFormControllerChildrenArgs<T = any> = {
  control?: Control<FieldValues, T>;
  register?: FieldRegisterMethod;
} & FieldFormControllerCommonArgs &
  FieldFormControllerExtraProps<T> &
  T;

export type FieldFormControllerEvent = (e: FormEvent<HTMLInputElement>) => void;

export type FieldFormControllerOptions = RegisterOptions;

export interface ExtendedRegisterReturn extends UseFormRegisterReturn {
  onBlur: FieldFormControllerEvent;
  onChange: FieldFormControllerEvent;
}
