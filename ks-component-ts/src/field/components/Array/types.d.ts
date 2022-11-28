import { type UseFieldArrayReturn } from "react-hook-form";
import { StringIndexedObject } from "~/types";
import {
  ArrayWrapperChildrenArgs
} from "~/field/components/Array/Wrapper/types";
import { ValidationProps } from "~/field/types";

export interface ArrayProps extends Omit<UseFieldArrayReturn, "fields"> {
  showRemove?: boolean;
}

export type ArrayWrapperProps  = {
  arrayName: string;
  initialData?: StringIndexedObject | null;
  children: (args: ArrayWrapperChildrenArgs) => JSX.Element;
};

export type WidgetArrayWrapperProps = Omit<ArrayWrapperProps, 'arrayName'>

export type ArrayInputProps <T> = {
  index?: number;
  name?: string;
  children?: JSX.Element;
} & ValidationProps & T;

export type WidgetArrayInputProps <T> = Omit<ArrayInputProps<T>, 'children'>
