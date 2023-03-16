import type { SelectOption } from "~/field/components/Select/types";
import type { DefaultFormFieldProps, ValidError } from "~/field/types";
import type { FunctionComponent, MutableRefObject } from "react";
import type { ModalContainerChildrenArgs } from "@kanda-libs/ks-design-library";

export interface ModalWrapperProps {
  id: string;
  children: (args: ModalContainerChildrenArgs) => JSX.Element;
}

export type SelectionModalUncontrolledProps = DefaultFormFieldProps<{
  /**
   * Children
   */
  children?: JSX.Element[] | JSX.Element;
  /**
   * Name of the input required for form to work
   */
  name: string;
  /**
   * Enables multi option select
   */
  multiple?: boolean;
  /**
   * Select options
   */
  options?: SelectOption[];
  /**
   * Field label
   */
  label?: string | JSX.Element;
  /**
   * Field warning message
   */
  warning?: string | JSX.Element;
  /**
   * Other props that are passed to wrapper component
   */
  wrapperProps?: any;
  /**
   * icon name
   */
  icon?: string;
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Field error message
   */
  error?: ValidError;
  forwardRef?: MutableRefObject<HTMLElement>;
  onShowModal: (id: string) => void;
  ModalWrapper: FunctionComponent<ModalWrapperProps>;
}>;
