import {
  ModalContainer,
  ModalLayoutSlideUp,
} from "@kanda-libs/ks-design-library";
import React, { type FunctionComponent } from "react";
import type { SelectionModalSelectProps } from "../../SelectionModalSelect";
import SelectionModalSelect from "../../SelectionModalSelect";

export interface ModalProps extends SelectionModalSelectProps {
  modalId: string;
}

const Modal: FunctionComponent<ModalProps> = function ({
  modalId,
  ...restProps
}) {
  return (
    <ModalContainer id={modalId}>
      {({ id, handleClose }) => (
        <ModalLayoutSlideUp id={id} onClose={handleClose}>
          <SelectionModalSelect
            variant="text-only"
            {...restProps}
            handleClose={handleClose}
          />
        </ModalLayoutSlideUp>
      )}
    </ModalContainer>
  );
};

export default Modal;
