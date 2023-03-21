import { ModalsWrapperContext } from "@kanda-libs/ks-design-library";
import { useContext } from "react";
import { SelectOption } from "~/field/components/Select/types";
import useButtonText from "~/field/components/SelectionModal/useButtonText";

export interface MobilePropsHook {
  ids: {
    modal: string;
    button: string;
  };
  buttonText: string;
  onShowModal: () => void;
}

export default function useMobileProps(
  name: string,
  options: SelectOption[]
): MobilePropsHook {
  const { showModal } = useContext(ModalsWrapperContext);
  const buttonText = useButtonText(name, options);

  const ids = {
    modal: `${name}-modal`,
    button: `${name}-button`,
  };

  const onShowModal = () => {
    showModal(ids.modal);
  };

  return {
    ids,
    buttonText,
    onShowModal,
  };
}
