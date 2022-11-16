import React, { type FunctionComponent, type MouseEvent } from "react";

export interface SelectionModalButtonProps {
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
  buttonText?: string;
  /**
   * Button onclick function to display modal
   */
  onClick?(e: MouseEvent): unknown;
  /**
   * Forwared ref from parent component
   */
  forwardRef?: any;
}

const SelectionModalButton: FunctionComponent<SelectionModalButtonProps> =
  function ({}) {
    return <></>;
  };

export default SelectionModalButton;
