import React, { FunctionComponent } from "react";
import {
  ModalContainer,
  ModalLayoutSlideUp,
} from "@kanda-libs/ks-design-library";
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
      {({ handleClose }) => (
        <ModalLayoutSlideUp onClose={handleClose}>
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
