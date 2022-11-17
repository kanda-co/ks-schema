import React, { FunctionComponent } from "react";
import { SelectionModalProps } from "~/field/components/SelectionModal";
import useMobileProps from "./useMobileProps";
import SelectionModalButton from "~/field/components/SelectionModal/SelectionModalButton";
import Modal, {
  ModalProps,
} from "~/field/components/SelectionModal/Mobile/Modal";

export type MobileProps = SelectionModalProps & ModalProps;

const Mobile: FunctionComponent<SelectionModalProps> = function ({
  name,
  options = [],
  children,
  ...restProps
}) {
  const { ids, handleShowModal, buttonText } = useMobileProps(name, options);

  return (
    <>
      <SelectionModalButton
        id={ids.button}
        onClick={handleShowModal}
        buttonText={children || buttonText}
        {...restProps}
      />
      <Modal
        {...(restProps as ModalProps)}
        modalId={ids.modal}
        name={name}
        options={options}
      />
    </>
  );
};

export default Mobile;
