import { SelectOption } from "~/field/components/Select/types";
import { useContext } from "react";
import useButtonText from "~/field/components/SelectionModal/useButtonText";
import { ModalsWrapperContext } from "@kanda-libs/ks-design-library";

export interface MobilePropsHook {
  handleShowModal: () => void;
  ids: {
    modal: string;
    button: string;
  };
  buttonText: string;
}

export default function useMobileProps(
  name: string,
  options: SelectOption[]
): MobilePropsHook {
  const buttonText = useButtonText(name, options);

  const { showModal } = useContext(ModalsWrapperContext);

  const ids = {
    modal: `${name}-modal`,
    button: `${name}-button`,
  };

  const handleShowModal = () => showModal(ids.modal);

  return {
    handleShowModal,
    ids,
    buttonText,
  };
}
