import React, { type FunctionComponent } from "react";
import type { SelectionModalSelectProps } from "../../SelectionModalSelect";
import SelectionModalSelect from "../../SelectionModalSelect";
import type { SelectionModalUncontrolledProps } from "../../types";

export interface ModalProps extends SelectionModalSelectProps {
  modalId: string;
  ModalWrapper: SelectionModalUncontrolledProps["ModalWrapper"];
}

const Modal: FunctionComponent<ModalProps> = function ({
  modalId,
  ModalWrapper,
  ...restProps
}) {
  return (
    <ModalWrapper id={modalId}>
      {({ handleClose }) => (
        <SelectionModalSelect
          variant="text-only"
          {...restProps}
          handleClose={handleClose}
        />
      )}
    </ModalWrapper>
  );
};

export default Modal;
