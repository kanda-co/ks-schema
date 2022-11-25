import React, {
  type FunctionComponent,
  type MouseEvent,
  type MutableRefObject,
} from "react";
import { Button } from "@kanda-libs/ks-design-library";
import { DefaultFormFieldProps } from "~/field/types";
import useSelectModalButtonClassName from "./useSelectionModalButtonClassName";

export interface SelectionModalButtonUncontrolledProps {
  /**
   * ClassName
   */
  className?: string;
  /**
   * The HTML element ID.
   */
  id?: string;
  /**
   * Field error message
   */
  error?:
    | string
    | {
        message?: string;
      };
  /**
   * Display Loading state
   */
  isLoading?: boolean;
  /**
   * Text to display on button
   */
  buttonText?: string | JSX.Element | JSX.Element[];
  /**
   * Button onclick function to display modal
   */
  onClick?: (e: MouseEvent) => void;
  /**
   * Forwared ref from parent component
   */
  forwardRef?: MutableRefObject<HTMLElement>;
}

const SelectionModalButtonUncontrolled: FunctionComponent<
  DefaultFormFieldProps<SelectionModalButtonUncontrolledProps>
> = function ({ isLoading, buttonText, children, placeholder, error, ...restProps }) {
  const className = useSelectModalButtonClassName();
  return (
    <div className={className}>
      <Button.Link
        {...restProps}
        isLoading={isLoading}
        variant="grey"
        size={12}
        icon="chevron-down"
        label={buttonText}
        placeholder={placeholder as string}
      >
        <>
          {children}
        </>
      </Button.Link>
    </div>
  );
};

export default SelectionModalButtonUncontrolled;
